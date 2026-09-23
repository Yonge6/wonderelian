#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../src/articles.js";
import { profileCopy } from "../src/profile-copy.js";
import { escapeHtml as e, inlineHtml, markdownHtml, chapters } from "../src/markdown.js";
import { pagePath } from "../src/routes.js";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const output = path.join(root,"dist/client");
const origin = "https://wonderelian.com";
const base = readFileSync(path.join(output,"index.html"),"utf8");
const images = JSON.parse(readFileSync(path.join(root,"src/generated/reading-images.json")));
const publication = JSON.parse(readFileSync(path.join(root,"content/publication.json")));
const json = value => JSON.stringify(value,null,2).replaceAll("<","\\u003c");
const absolute = src => src.startsWith("http") ? src : origin+src;
const person = {"@type":"Person","@id":origin+"/#elian",name:"Elian Yong",alternateName:["Elian","永歌"],url:origin+"/en/#about",homeLocation:{"@type":"Place",name:"Wuhan, China"}};
const organization = {"@type":"Organization","@id":origin+"/#organization",name:"WonderElian",url:origin,founder:{"@id":person["@id"]}};
const website = {"@type":"WebSite","@id":origin+"/#website",url:origin,name:"WonderElian",inLanguage:["zh-CN","en"],publisher:{"@id":organization["@id"]}};
function meta(html,attr,key,value) {
  const pattern = new RegExp(`<meta\\s+${attr}="${key.replaceAll(":","\\:")}"\\s+content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${key}" content="${e(value)}" />`;
  return pattern.test(html) ? html.replace(pattern,()=>tag) : html.replace("</head>",()=>tag+"\n</head>");
}
function page({language,article=null,body,missing=false}) {
  const copy = article?.[language];
  const localized = pagePath(language,article?.slug);
  const canonical = origin+localized;
  const title = missing ? (language==="zh" ? "找不到这一页" : "Page not found") : copy?.title || (language==="zh" ? "WonderElian · 永歌的设计、AI、产品与生活" : "WonderElian | Design, AI & Independent Creative Products");
  const description = copy?.excerpt || profileCopy[language].description;
  const cover = absolute(article ? images[article.cover]?.src || article.cover : "/assets/hero-flow-image2-v3.webp");
  let html = base.replace(/<html lang="[^"]*">/,`<html lang="${language==="zh" ? "zh-CN" : "en"}">`)
    .replace(/<title>[\s\S]*?<\/title>/,()=>`<title>${e(title)}${article ? " | WonderElian" : ""}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/,()=>missing ? "" : `<link rel="canonical" href="${canonical}" />`);
  for (const [attr,key,value] of [
    ["name","description",description],["property","og:type",article ? "article" : "website"],
    ["property","og:title",title],["property","og:description",description],["property","og:url",canonical],
    ["property","og:image",cover],["property","og:image:alt",title],["property","og:locale",language==="zh" ? "zh_CN" : "en_US"],
    ["property","og:locale:alternate",language==="zh" ? "en_US" : "zh_CN"],
    ["name","twitter:title",title],["name","twitter:description",description],["name","twitter:image",cover],["name","twitter:image:alt",title],
  ]) html=meta(html,attr,key,value);
  if(article) {
    for(const key of ["published_time","modified_time"]) html=meta(html,"property",`article:${key}`,article.date);
    html=meta(html,"property","article:author",article.author[language]);
    html=html.replace(/<link\s+rel="preload"\s+as="image"[\s\S]*?\/>/,"");
    const dimensions=images[article.cover];
    if(dimensions) { html=meta(html,"property","og:image:width",Math.min(dimensions.width,1920)); html=meta(html,"property","og:image:height",Math.round(dimensions.height*Math.min(dimensions.width,1920)/dimensions.width)); }
  }
  if(!missing) html=html.replace("</head>",()=>[...['zh','en'].map(lang=>`<link rel="alternate" hreflang="${lang==='zh'?'zh-CN':lang}" href="${origin+pagePath(lang,article?.slug)}" />`),`<link rel="alternate" hreflang="x-default" href="${origin+pagePath('en',article?.slug)}" />`,'</head>'].join('\n'));
  else html=meta(html,"name","robots","noindex, follow");
  const graph=[website,organization,person,article ? {
    "@type":"BlogPosting","@id":canonical+"#article",url:canonical,headline:copy.title,description:copy.excerpt,image:[cover],datePublished:article.date,dateModified:article.date,inLanguage:language==="zh"?"zh-CN":"en",author:{"@id":person["@id"]},publisher:{"@id":organization["@id"]},mainEntityOfPage:{"@type":"WebPage","@id":canonical}
  } : {"@type":"ProfilePage",url:canonical,name:title,mainEntity:{"@id":person["@id"]}}];
  if(!article&&!missing)graph.push({"@type":"ItemList",name:language==="zh"?"片刻随记":"Field Notes",itemListElement:articles.map((a,i)=>({"@type":"ListItem",position:i+1,url:origin+pagePath(language,a.slug),name:a[language].title}))});
  html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,()=>missing?"":`<script type="application/ld+json">${json({"@context":"https://schema.org","@graph":graph})}</script>`);
  html=html.replace('<div id="root"></div>',()=>`<div id="root">${body}</div>`);
  if(article) html=html.replace("</body>",()=>`<script type="application/json" id="article-data">${json({slug:article.slug,language,content:copy.content})}</script>\n</body>`);
  return html;
}
function save(route,html) { const file=path.join(output,route); mkdirSync(path.dirname(file),{recursive:true}); writeFileSync(file,html); }
const products=[['Yixiu Meditation','一休冥想','yixiu.wonderelian.com'],["Bu’er Human Design","不二 · 认识自己","human-design.wonderelian.com"],['Wendao','三慢问道','wendao.wonderelian.com'],['Xiazi','虾子曰','xiazishuo.com'],['Style Atlas','艺术风格图鉴','style-atlas.wonderelian.com'],['OneLaser','OneLaser','onelaser.wonderelian.com'],['Maker Business Lab','Maker Business Lab','maker.wonderelian.com']];
for(const language of ['zh','en']) {
  const zh=language==='zh', home=pagePath(language);
  const body=`<main data-seo-fallback><header id="world"><h1>WonderElian — Designing things. Exploring life.</h1><p>${inlineHtml(profileCopy[language].heroSpirit)}</p></header><section id="now"><h2>${zh?'沿途所作':'Along the Way'}</h2><ul>${products.map(p=>`<li><a href="https://${p[2]}/">${e(p[zh?1:0])}</a></li>`).join('')}</ul></section><section id="notes"><h2>${zh?'片刻随记':'Field Notes'}</h2><ul>${articles.map(a=>`<li><a href="${pagePath(language,a.slug)}">${e(a[language].title)}</a><p>${e(a[language].excerpt)}</p></li>`).join('')}</ul></section><section id="about"><h2>${zh?'关于永歌':'About Elian'}</h2><p>${inlineHtml(profileCopy[language].aboutTitle)}</p>${profileCopy[language].aboutParagraphs.map(p=>`<p>${e(p)}</p>`).join('')}<a href="mailto:hustyy986@gmail.com">${zh?'联系 Elian':'Contact Elian'}</a></section></main>`;
  const homeHtml=page({language,body});
  save(`${language}/index.html`,homeHtml);
  if(!zh)save('index.html',homeHtml);
  for(const article of articles) {
    const c=article[language];
    const toc=chapters(c.content).map(h=>`<li><a href="#${h.id}">${e(h.title)}</a></li>`).join('');
    const related=articles.find(a=>a.slug===article.related);
    const body=`<main class="article-page" data-seo-fallback><article><header class="article-hero"><a href="${home}#notes">${e(c.back)}</a><p>${e(c.label)}</p><h1>${e(c.title)}</h1><p>${e(c.excerpt)}</p><p>${e(article.author[language])} · <time datetime="${article.date}">${article.date}</time> · ${e(article.readingTime[language])}</p></header><nav aria-label="${zh?'文章目录':'Table of contents'}"><ol>${toc}</ol></nav><div class="article-body">${markdownHtml(c.content,images)}</div></article><footer class="article-end"><a href="${pagePath(language,related.slug)}">${e(related[language].title)}</a><a href="${home}#notes">${e(c.back)}</a></footer></main>`;
    const html=page({language,article,body});
    save(`${language}/notes/${article.slug}/index.html`,html);
    if(!zh)save(`notes/${article.slug}/index.html`,html);
  }
}
const missingBody='<main class="missing-page" data-seo-fallback><p>404</p><h1>This page is no longer here.</h1><p>这一页已不在这里，还有其他随记可以阅读。</p><a href="/zh/#notes">中文随记</a> · <a href="/en/#notes">Field Notes in English</a></main>';
save('404.html',page({language:'en',body:missingBody,missing:true}));
const entries=[{slug:null,date:null},...articles];
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.flatMap(a=>['zh','en'].map(lang=>`  <url><loc>${origin+pagePath(lang,a.slug)}</loc>${a.date?`<lastmod>${a.date}</lastmod>`:''}${['zh','en'].map(l=>`<xhtml:link rel="alternate" hreflang="${l==='zh'?'zh-CN':l}" href="${origin+pagePath(l,a.slug)}" />`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${origin+pagePath('en',a.slug)}" /></url>`)).join('\n')}\n</urlset>\n`;
let llms=readFileSync(path.join(root,'public/llms.txt'),'utf8');
llms=llms.replace(/Languages:.*\n/,'Languages: Chinese at /zh/ and English at /en/; every published field note has a stable URL in each language.\n');
llms=llms.replace(/## Field notes[\s\S]*?## Citation guidance/,()=>`## Field notes\n\n${articles.map(a=>`- [${a.en.title}](${origin+pagePath('en',a.slug)}) · [中文版](${origin+pagePath('zh',a.slug)}): ${a.en.excerpt}`).join('\n')}\n\n## Citation guidance`);
for(const [name,value] of [['sitemap.xml',sitemap],['llms.txt',llms]]) {writeFileSync(path.join(output,name),value);writeFileSync(path.join(root,'public',name),value);}
for(const directory of publication.excludedAssetDirectories)rmSync(path.join(output,'assets/notes',directory),{recursive:true,force:true});
console.log(`Prerendered 2 localized homes, ${articles.length*2} localized essays, legacy links and 404; generated sitemap and llms.`);
