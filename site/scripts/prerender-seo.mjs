#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../src/articles.js";
import { profileCopy } from "../src/profile-copy.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientRoot = path.join(root, "dist", "client");
const indexPath = path.join(clientRoot, "index.html");
const origin = "https://wonderelian.com";
const baseHtml = readFileSync(indexPath, "utf8");

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const absoluteUrl = (value) => value.startsWith("http") ? value : `${origin}${value}`;

function inlineText(value) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function markdownToHtml(markdown) {
  return markdown.trim().split(/\n\s*\n/).map((block, index) => {
    const image = block.match(/^!\[(.*?)\]\((.*?)\)$/s);
    if (image) {
      const [, alt, src] = image;
      return `<figure><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" />${alt ? `<figcaption>${escapeHtml(alt)}</figcaption>` : ""}</figure>`;
    }
    if (block.startsWith("## ")) return `<section><h2>${inlineText(block.slice(3))}</h2></section>`;
    if (block.startsWith("### ")) return `<h3>${inlineText(block.slice(4))}</h3>`;
    if (block.startsWith("> ")) return `<blockquote>${inlineText(block.replace(/^>\s?/gm, ""))}</blockquote>`;
    return `<p>${inlineText(block)}</p>`;
  }).join("\n");
}

function replaceMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta\\s+${attribute}="${escapedKey}"\\s+content="[^"]*"\\s*\\/?>`);
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `  ${tag}\n  </head>`);
}

function replaceJsonLd(html, graph) {
  const tag = `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2).replaceAll("<", "\\u003c")}</script>`;
  return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, tag);
}

const organization = {
  "@type": "Organization",
  "@id": `${origin}/#organization`,
  name: "WonderElian",
  url: `${origin}/`,
  description: "The personal creative world of designer and independent maker Elian Yong.",
  founder: { "@id": `${origin}/#elian` },
  location: {
    "@type": "Place",
    name: "Wuhan, China",
    address: { "@type": "PostalAddress", addressLocality: "Wuhan", addressCountry: "CN" },
  },
};

const person = {
  "@type": "Person",
  "@id": `${origin}/#elian`,
  name: "Elian Yong",
  alternateName: ["Elian", "WonderElian"],
  url: `${origin}/#about`,
  homeLocation: { "@type": "Place", name: "Wuhan, China" },
  knowsAbout: ["Design", "Visual culture", "Artificial intelligence", "Independent digital products", "Self-understanding"],
};

const website = {
  "@type": "WebSite",
  "@id": `${origin}/#website`,
  url: `${origin}/`,
  name: "WonderElian",
  description: "Elian Yong's personal creative world, gathering independent products, design work, and field notes about AI, visual culture, and life.",
  inLanguage: ["en", "zh-CN"],
  publisher: { "@id": `${origin}/#organization` },
};

const homeFallback = `<main data-seo-fallback>
  <header>
    <h1>WonderElian — Designing things. Exploring life.</h1>
    <p>The personal creative world of Elian Yong, a designer and independent maker in Wuhan, China.</p>
    <p>${inlineText(profileCopy.en.heroSpirit)}</p>
  </header>
  <section aria-labelledby="works-fallback-title">
    <h2 id="works-fallback-title">Along the Way</h2>
    <ul>
      <li><a href="https://yixiu.wonderelian.com/">Yixiu Meditation</a> — sound, interaction, and visual design brought together in a quiet, easy-to-use experience.</li>
      <li><a href="https://human-design.wonderelian.com/">Bu'er Human Design</a> — a reflective tool for understanding yourself without treating a system as a verdict.</li>
      <li><a href="https://wendao.wonderelian.com/">Wendao</a> — ancient texts and layers of interpretation organized into a clear reading path.</li>
      <li><a href="https://maker.wonderelian.com/">Maker Business Lab</a> — transparent product, profit, capacity, and equipment planning for maker businesses.</li>
      <li><a href="https://style-atlas.wonderelian.com/">Style Atlas</a> — art and design styles made visual, comparable, and explorable.</li>
      <li><a href="https://onelaser.wonderelian.com/">OneLaser</a> — industrial technology translated into clear brand and product communication.</li>
    </ul>
  </section>
  <section aria-labelledby="notes-fallback-title">
    <h2 id="notes-fallback-title">Field Notes</h2>
    <ul>${articles.map((article) => {
      const copy = article.en ?? article.zh;
      return `<li><a href="/notes/${escapeHtml(article.slug)}/">${escapeHtml(copy.title)}</a><p>${escapeHtml(copy.excerpt)}</p></li>`;
    }).join("")}</ul>
  </section>
  <section aria-labelledby="about-fallback-title">
    <h2 id="about-fallback-title">About Elian</h2>
    <p>${inlineText(profileCopy.en.aboutTitle)}</p>
    ${profileCopy.en.aboutParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n")}
    <p>${escapeHtml(profileCopy.en.aboutSignature)}</p>
  </section>
</main>`;

const homeGraph = [
  website,
  organization,
  person,
  {
    "@type": "ProfilePage",
    "@id": `${origin}/#profile`,
    url: `${origin}/`,
    name: "About Elian Yong and WonderElian",
    mainEntity: { "@id": `${origin}/#elian` },
    isPartOf: { "@id": `${origin}/#website` },
  },
  {
    "@type": "ItemList",
    "@id": `${origin}/#field-notes`,
    name: "WonderElian Field Notes",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${origin}/notes/${article.slug}/`,
      name: (article.en ?? article.zh).title,
    })),
  },
];

let homeHtml = replaceJsonLd(baseHtml, homeGraph).replace('<div id="root"></div>', `<div id="root">${homeFallback}</div>`);
writeFileSync(indexPath, homeHtml);

for (const article of articles) {
  const copy = article.en ?? article.zh;
  const canonical = `${origin}/notes/${article.slug}/`;
  const image = absoluteUrl(article.cover);
  const title = `${copy.title} | WonderElian`;
  let html = baseHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<html lang="[^"]*">/, '<html lang="en">');
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceMeta(html, "name", "description", copy.excerpt);
  html = replaceMeta(html, "property", "og:type", "article");
  html = replaceMeta(html, "property", "og:title", copy.title);
  html = replaceMeta(html, "property", "og:description", copy.excerpt);
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "property", "og:image", image);
  html = replaceMeta(html, "property", "og:image:alt", copy.title);
  html = replaceMeta(html, "name", "twitter:title", copy.title);
  html = replaceMeta(html, "name", "twitter:description", copy.excerpt);
  html = replaceMeta(html, "name", "twitter:image", image);
  html = replaceMeta(html, "name", "twitter:image:alt", copy.title);
  html = replaceMeta(html, "property", "article:published_time", article.date);
  html = replaceMeta(html, "property", "article:modified_time", article.date);
  html = replaceMeta(html, "property", "article:author", "Elian Yong");
  html = replaceJsonLd(html, [
    website,
    organization,
    person,
    {
      "@type": "BlogPosting",
      "@id": `${canonical}#article`,
      url: canonical,
      headline: copy.title,
      description: copy.excerpt,
      image: [image],
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: "en",
      author: { "@id": `${origin}/#elian` },
      publisher: { "@id": `${origin}/#organization` },
      isPartOf: { "@id": `${origin}/#website` },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WonderElian", item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: "Field Notes", item: `${origin}/#notes` },
        { "@type": "ListItem", position: 3, name: copy.title, item: canonical },
      ],
    },
  ]);
  const fallback = `<main data-seo-fallback><article>
    <header><p>${escapeHtml(copy.label)}</p><h1>${escapeHtml(copy.title)}</h1><p>${escapeHtml(copy.excerpt)}</p><p>By ${escapeHtml(article.author.en ?? article.author.zh)} · <time datetime="${article.date}">${article.date}</time> · ${escapeHtml(article.readingTime.en ?? article.readingTime.zh)}</p></header>
    ${markdownToHtml(copy.content)}
  </article></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
  const outputDir = path.join(clientRoot, "notes", article.slug);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(path.join(outputDir, "index.html"), html);
}

console.log(`Prerendered homepage and ${articles.length} English article routes for search and AI discovery.`);
