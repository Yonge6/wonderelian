import { mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { articles } from "../src/articles.js";
import { chapters } from "../src/markdown.js";
const root = new URL("../", import.meta.url);
const publication = JSON.parse(readFileSync(new URL("content/publication.json",root)));
const seen = new Set();
rmSync(new URL("public/content/",root),{recursive:true,force:true});
const summaries = articles.map(article => {
  if (!/^[a-z0-9-]+$/.test(article.slug) || seen.has(article.slug) || publication.removedSlugs.includes(article.slug)) throw new Error(`Invalid published slug: ${article.slug}`);
  seen.add(article.slug);
  if (!articles.some(a=>a.slug === article.related) || article.related===article.slug) throw new Error(`Missing related note: ${article.slug}`);
  const summary = {...article};
  for (const language of ["zh","en"]) {
    const copy = article[language];
    for (const field of ["title","excerpt","content","label","read","back"]) if (!copy?.[field]?.trim()) throw new Error(`${article.slug}.${language}.${field} missing`);
    if (!chapters(copy.content).length) throw new Error(`Missing chapters: ${article.slug}.${language}`);
    for (const match of copy.content.matchAll(/!\[.*?\]\((.*?)\)/g)) {
      if (!existsSync(new URL(`public${match[1]}`,root))) throw new Error(`Missing image: ${match[1]}`);
    }
    const data = JSON.stringify({slug:article.slug,language,content:copy.content});
    const version = createHash("sha256").update(data).digest("hex").slice(0,12);
    const directory = new URL(`public/content/${article.slug}/`,root);
    mkdirSync(directory,{recursive:true});
    writeFileSync(new URL(`${language}-${version}.json`,directory),data);
    const {content,...metadata} = copy;
    summary[language] = {...metadata,dataPath:`/content/${article.slug}/${language}-${version}.json`};
  }
  return summary;
});
mkdirSync(new URL("src/generated/",root),{recursive:true});
writeFileSync(new URL("src/generated/articles.json",root),JSON.stringify(summaries,null,2)+"\n");
console.log(`Prepared ${articles.length} bilingual notes; only summaries enter the homepage bundle.`);
