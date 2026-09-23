export const escapeHtml = (value = "") => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

export function safeHref(value) {
  return /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(value) && !/[\u0000-\u0020]/.test(value) ? value : null;
}

// A deliberately small, escaped Markdown subset shared by static pages and React.
// Raw HTML is always text; links accept only web, email, local or fragment URLs.
export function inlineHtml(text) {
  const pattern = /\*\*([^*\n]+)\*\*|\*([^*\n]+)\*|\[([^\]\n]+)\]\(([^\s)]+)\)|(https?:\/\/[^\s<>"'\u3000\u3001\u3002\uff0c\uff1b\uff09\uff01\uff1f]+)|\n/g;
  let result = "", end = 0;
  for (const match of text.matchAll(pattern)) {
    result += escapeHtml(text.slice(end, match.index));
    if (match[1]) result += `<strong>${escapeHtml(match[1])}</strong>`;
    else if (match[2]) result += `<em>${escapeHtml(match[2])}</em>`;
    else if (match[3]) {
      const href = safeHref(match[4]);
      result += href ? `<a href="${escapeHtml(href)}">${escapeHtml(match[3])}</a>` : escapeHtml(match[3]);
    } else if (match[5]) {
      const url = match[5].replace(/[.,;:!?)\]]+$/, "");
      result += `<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>${escapeHtml(match[5].slice(url.length))}`;
    } else result += "<br />";
    end = match.index + match[0].length;
  }
  return result + escapeHtml(text.slice(end));
}

export function chapters(content) {
  return [...content.matchAll(/^## (.+)$/gm)].map((match, i) => {
    const [first, ...rest] = match[1].split("｜");
    return { id: `chapter-${i + 1}`, kicker: rest.length ? first : "", title: rest.length ? rest.join("｜") : first };
  });
}

export function imageHtml(src, alt, images = {}, eager = false) {
  if (!safeHref(src)) return "";
  const item = images[src];
  const attrs = item ? ` width="${item.width}" height="${item.height}" srcset="${item.variants.map(v => `${escapeHtml(v.src)} ${v.width}w`).join(", ")}" sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 980px) calc(100vw - 96px), 920px"` : "";
  return `<img src="${escapeHtml(item?.src || src)}" alt="${escapeHtml(alt)}"${attrs} loading="${eager ? "eager" : "lazy"}" decoding="async" />`;
}

export function markdownHtml(content, images = {}) {
  const headings = chapters(content);
  let chapter = 0;
  return content.trim().split(/\n\s*\n/).map((block, index) => {
    const image = block.match(/^!\[(.*?)\]\((.*?)\)$/s);
    if (image) {
      const [, alt, src] = image;
      const modifier = /(?:2026-09-14-ai-first-product\/(?:sound-library|player)|2026-09-15-ai-homepage-clarity\/(?:player|breathing))\.png$/.test(src) ? " article-figure--product-screen" : src.endsWith("image-07.png") ? " article-figure--poster" : "";
      return `<figure class="article-figure${modifier}">${imageHtml(src, alt, images, index === 0)}${alt ? `<figcaption>${escapeHtml(alt)}</figcaption>` : ""}</figure>`;
    }
    if (block.startsWith("## ")) {
      const heading = headings[chapter++];
      return `<header class="article-chapter" id="${heading.id}">${heading.kicker ? `<span>${escapeHtml(heading.kicker)}</span>` : ""}<h2>${inlineHtml(heading.title)}</h2></header>`;
    }
    if (block.startsWith("### ")) return `<h3>${inlineHtml(block.slice(4))}</h3>`;
    if (block.startsWith("> ")) return `<blockquote>${inlineHtml(block.replace(/^>\s?/gm, ""))}</blockquote>`;
    return `<p>${inlineHtml(block)}</p>`;
  }).join("\n");
}
