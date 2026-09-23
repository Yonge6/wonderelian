import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { articles } from "../src/articles.js";
import { inlineHtml, markdownHtml, chapters } from "../src/markdown.js";
import { parseRoute, pagePath } from "../src/routes.js";
const read = name => readFileSync(new URL(name,import.meta.url),"utf8");

test("formats emphasis and sources without interpreting HTML or executable URLs",()=>{
  const html=inlineHtml('**Bundle** and *Tao Te Ching*\n[Apple](https://developer.apple.com/example?a=1&b=2) https://example.com/hello.');
  assert.match(html,/<strong>Bundle<\/strong>/);
  assert.match(html,/<em>Tao Te Ching<\/em>/);
  assert.match(html,/href="https:\/\/developer.apple.com\/example\?a=1&amp;b=2"/);
  assert.match(html,/<a href="https:\/\/example.com\/hello">https:\/\/example.com\/hello<\/a>\./);
  const unsafe=inlineHtml('<img onerror="alert(1)"> [bad](javascript:alert) [bad](data:text/html,test)');
  assert.doesNotMatch(unsafe,/<img|href=/);
  assert.match(unsafe,/&lt;img/);
  assert.doesNotMatch(markdownHtml('![x](javascript:alert)'),/<img/);
});
test("chapter links match unique rendered heading IDs, including headings without a separator",()=>{
  const content='## 01｜First\n\nText\n\n## Standalone\n\n### Small heading\n\n## 03｜First';
  assert.deepEqual(chapters(content).map(h=>h.id),['chapter-1','chapter-2','chapter-3']);
  assert.equal(chapters(content)[1].title,'Standalone');
  const html=markdownHtml(content);
  for(const heading of chapters(content))assert.match(html,new RegExp(`id="${heading.id}"`));
});
test("localized and legacy article routes parse, unknown routes do not become the homepage",()=>{
  for(const language of ['zh','en']) {
    assert.deepEqual(parseRoute(pagePath(language,'essay')),{valid:true,language,slug:'essay'});
    assert.deepEqual(parseRoute(pagePath(language)),{valid:true,language,slug:null});
  }
  assert.deepEqual(parseRoute('/notes/essay/'),{valid:true,language:null,slug:'essay'});
  assert.equal(parseRoute('/notes/essay/extra').valid,false);
  assert.equal(parseRoute('/invented').valid,false);
});
test("every published translation has matching static metadata, body, related note, images and alternate URL",()=>{
  const images=JSON.parse(read('../src/generated/reading-images.json'));
  const sitemap=read('../dist/client/sitemap.xml');
  for(const article of articles)for(const language of ['zh','en']) {
    const c=article[language],path=pagePath(language,article.slug),html=read(`../dist/client${path}index.html`);
    assert.ok(html.includes(`<html lang="${language==='zh'?'zh-CN':'en'}">`));
    assert.ok(html.includes(`rel="canonical" href="https://wonderelian.com${path}"`));
    assert.ok(html.includes(`hreflang="${language==='zh'?'en':'zh-CN'}"`));
    assert.ok(sitemap.includes(`https://wonderelian.com${path}`));
    const embedded=JSON.parse(html.match(/<script type="application\/json" id="article-data">([\s\S]*?)<\/script>/)[1]);
    assert.equal(embedded.content,c.content);
    assert.equal(embedded.language,language);
    assert.ok(html.includes(markdownHtml(c.content,images)));
    for(const match of c.content.matchAll(/!\[.*?\]\((.*?)\)/g)) {
      const image=images[match[1]]; assert.ok(image?.width>0&&image.height>0);
      for(const variant of image.variants)assert.ok(existsSync(new URL(`../dist/client${variant.src}`,import.meta.url)));
    }
    assert.ok(articles.some(a=>a.slug===article.related));
  }
});
test("homepage bundle carries summaries, not article bodies or removed essays",()=>{
  const summaries=JSON.parse(read('../src/generated/articles.json'));
  assert.equal(summaries.length,7);
  for(const a of summaries)for(const lang of ['zh','en'])assert.equal(a[lang].content,undefined);
  const assets=new URL('../dist/client/assets/',import.meta.url);
  const bundle=readdirSync(assets).filter(n=>n.endsWith('.js')).map(n=>readFileSync(new URL(n,assets),'utf8')).join('\n');
  for(const article of articles)assert.ok(!bundle.includes(article.en.content.trim().split('\n\n')[1]));
  for(const removedText of ['不要先问买哪台机器。先问卖什么、赚多少、多久回本。','Graphic Brutalism','Want a Laser or 3D-Printing Side Business?'])assert.ok(!bundle.includes(removedText));
  for(const asset of ['2026-08-21-maker-business-lab','2026-08-20-graphic-brutalism'])assert.equal(existsSync(new URL(`../dist/client/assets/notes/${asset}`,import.meta.url)),false);
});
test("deferred portfolio section and project definitions remain exactly unchanged",()=>{
  const old=execFileSync('git',['show','54d5e1a:site/src/App.jsx'],{encoding:'utf8'});
  const current=read('../src/App.jsx');
  const projects=source=>source.slice(source.indexOf('const projects'),source.indexOf('const copy'));
  assert.equal(projects(current),projects(old));
  const section=source=>source.slice(source.indexOf('<section className="now-section"'),source.indexOf('<NotesSection language={language} />'));
  assert.equal(section(current),section(old));
});
