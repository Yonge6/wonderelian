import sharp from "sharp";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync } from "node:fs";
import { articles } from "../src/articles.js";
const publicRoot = new URL("../public/", import.meta.url);
const sources = new Set(articles.flatMap(a => [a.cover, ...[a.zh, a.en].flatMap(c => [...c.content.matchAll(/!\[.*?\]\((.*?)\)/g)].map(m => m[1]))]));
const manifest = {};
mkdirSync(new URL("assets/reading/", publicRoot), {recursive:true});
let originalBytes = 0, optimizedBytes = 0;
for (const src of sources) {
  const input = readFileSync(new URL(`.${src}`, publicRoot));
  const hash = createHash("sha256").update(input).update("webp-q86-v1").digest("hex").slice(0,12);
  const meta = await sharp(input).metadata();
  const widths = [...new Set([480,960,1440,Math.min(meta.width,1920)].filter(w=>w<=meta.width))].sort((a,b)=>a-b);
  const variants = [];
  for (const width of widths) {
    const output = `/assets/reading/${hash}-${width}.webp`;
    const file = new URL(`.${output}`, publicRoot);
    if (!existsSync(file)) await sharp(input).rotate().resize({width,withoutEnlargement:true}).webp({quality:86,effort:5}).toFile(file.pathname);
    variants.push({src:output,width});
  }
  const largest = variants.at(-1);
  manifest[src] = {src:largest.src,width:meta.width,height:meta.height,variants};
  originalBytes += input.length;
  optimizedBytes += readFileSync(new URL(`.${largest.src}`,publicRoot)).length;
}
mkdirSync(new URL("../src/generated/", import.meta.url),{recursive:true});
const published = new Set(Object.values(manifest).flatMap(item=>item.variants.map(v=>v.src.split("/").at(-1))));
for (const file of readdirSync(new URL("assets/reading/",publicRoot))) {
  if (/^[a-f0-9]{12}-\d+\.webp$/.test(file) && !published.has(file)) unlinkSync(new URL(`assets/reading/${file}`,publicRoot));
}
writeFileSync(new URL("../src/generated/reading-images.json",import.meta.url),JSON.stringify(manifest,null,2)+"\n");
console.log(JSON.stringify({images:sources.size,originalBytes,optimizedBytes}));
