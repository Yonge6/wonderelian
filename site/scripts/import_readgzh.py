#!/usr/bin/env python3
"""Turn a readgzh.site article export into local Markdown and image assets."""

from __future__ import annotations

import argparse
import json
import mimetypes
import re
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup, Tag


def clean_text(tag: Tag) -> str:
    return re.sub(r"[ \t\r\f\v]+", " ", tag.get_text("\n", strip=True)).strip()


def article_markdown(content: Tag, asset_url: str) -> tuple[str, list[dict[str, str]]]:
    blocks: list[str] = []
    images: list[dict[str, str]] = []
    image_number = 0
    last_image_alt = ""

    for tag in content.descendants:
        if not isinstance(tag, Tag) or tag.name not in {"h2", "h3", "p", "blockquote", "img"}:
            continue

        if tag.find_parent(["h2", "h3", "p", "blockquote"]):
            continue

        if tag.name == "img":
            src = tag.get("src", "").strip()
            if not src:
                continue
            image_number += 1
            alt = tag.get("alt", "").strip() or f"文章配图 {image_number}"
            filename = f"image-{image_number:02d}"
            images.append({"src": src, "alt": alt, "basename": filename})
            blocks.append(f"![{alt}]({asset_url}/{filename}.jpg)")
            last_image_alt = alt
            continue

        text = clean_text(tag)
        if not text or text in {"查看原文", "复制全文"}:
            continue
        if text == last_image_alt:
            last_image_alt = ""
            continue

        if tag.name == "h2":
            blocks.append(f"## {text}")
        elif tag.name == "h3":
            blocks.append(f"### {text}")
        elif tag.name == "blockquote":
            blocks.append("\n".join(f"> {line}" for line in text.splitlines()))
        else:
            blocks.append(text)

    return "\n\n".join(blocks).strip(), images


def download_images(images: list[dict[str, str]], asset_dir: Path) -> None:
    asset_dir.mkdir(parents=True, exist_ok=True)
    for image in images:
        request = urllib.request.Request(image["src"], headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(request, timeout=45) as response:
            data = response.read()
            content_type = response.headers.get_content_type()

        extension = mimetypes.guess_extension(content_type) or ".jpg"
        if extension == ".jpe":
            extension = ".jpg"
        destination = asset_dir / f'{image["basename"]}{extension}'
        destination.write_bytes(data)
        image["filename"] = destination.name


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("html", type=Path)
    parser.add_argument("--asset-dir", required=True, type=Path)
    parser.add_argument("--asset-url", required=True)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()

    soup = BeautifulSoup(args.html.read_text(encoding="utf-8"), "html.parser")
    article = soup.select_one("article")
    content = article.select_one(".content") if article else None
    if not article or not content:
        raise SystemExit("Article content was not found")

    title = clean_text(article.select_one("h1"))
    meta = clean_text(article.select_one(".meta"))
    date_match = re.search(r"(20\d{2}-\d{2}-\d{2})", meta)
    author_match = re.search(r"作者：\s*([^\n]+)", meta)
    markdown, images = article_markdown(content, args.asset_url.rstrip("/"))
    download_images(images, args.asset_dir)

    for image in images:
        markdown = markdown.replace(f'{image["basename"]}.jpg', image["filename"])

    payload = {
        "title": title,
        "date": date_match.group(1) if date_match else "",
        "author": author_match.group(1).strip() if author_match else "",
        "images": images,
        "content": markdown,
    }
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
