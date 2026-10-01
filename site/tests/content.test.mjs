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
  assert.equal(summaries.length,articles.length);
  for(const a of summaries)for(const lang of ['zh','en'])assert.equal(a[lang].content,undefined);
  const assets=new URL('../dist/client/assets/',import.meta.url);
  const bundle=readdirSync(assets).filter(n=>n.endsWith('.js')).map(n=>readFileSync(new URL(n,assets),'utf8')).join('\n');
  for(const article of articles)assert.ok(!bundle.includes(article.en.content.trim().split('\n\n')[1]));
  for(const removedText of ['不要先问买哪台机器。先问卖什么、赚多少、多久回本。','Graphic Brutalism','Want a Laser or 3D-Printing Side Business?'])assert.ok(!bundle.includes(removedText));
  for(const asset of ['2026-08-21-maker-business-lab','2026-08-20-graphic-brutalism'])assert.equal(existsSync(new URL(`../dist/client/assets/notes/${asset}`,import.meta.url)),false);
});
test("portfolio layout and other projects stay unchanged after the approved Buer refresh",()=>{
  const old=execFileSync('git',['show','54d5e1a:site/src/App.jsx'],{encoding:'utf8'});
  const current=read('../src/App.jsx');
  const projects=source=>source.slice(source.indexOf('const projects'),source.indexOf('const copy'));
  const withoutBuer=source=>projects(source).replace(/  \{\n    number: "02",[\s\S]*?(?=  \{\n    number: "03",)/, '');
  assert.equal(withoutBuer(current),withoutBuer(old));
  const buer=projects(current).match(/  \{\n    number: "02",[\s\S]*?(?=  \{\n    number: "03",)/)[0];
  assert.ok(buer.includes('href: "https://buer.wonderelian.com/"'));
  for(const text of ['不二见己','Buer Within','AI 成长伙伴','AI Growth Companion','app-icon-buer-doudoulong.png'])assert.ok(buer.includes(text));
  assert.ok(existsSync(new URL('../public/assets/app-icon-buer-doudoulong.png',import.meta.url)));
  const section=source=>source.slice(source.indexOf('<section className="now-section"'),source.indexOf('<NotesSection language={language} />'));
  assert.equal(section(current),section(old));
});

test("publishes both supplied essays in date order with complete translations and original illustrations",()=>{
  const archive=articles.filter(a=>!a.featured);
  assert.deepEqual(archive.slice(0,10).map(a=>a.slug),[
    'wendao-first-payments','openai-dots-less-to-worry-about','manus-cue-agent-identity','human-value-after-ai','ai-employees-digital-team','conversational-ads','siri-ai-callable-apps',
    'xiazi-100-issues-1800-posters','justin-welsh-small-by-design','apple-shared-subscriptions-one-person-company'
  ]);
  const milestone=articles.find(a=>a.slug==='xiazi-100-issues-1800-posters'),profile=articles.find(a=>a.slug==='justin-welsh-small-by-design');
  assert.equal(milestone.date,'2026-09-22');
  assert.equal(profile.date,'2026-09-21');
  for(const [article,chapterCount,imageCount] of [[milestone,5,3],[profile,6,4]])for(const lang of ['zh','en']) {
    assert.equal(chapters(article[lang].content).length,chapterCount);
    assert.equal([...article[lang].content.matchAll(/!\[/g)].length,imageCount);
    assert.doesNotMatch(article[lang].content,/\{\{|LET’S MAKE IT REAL|喜欢作者|上一[篇条]/);
  }
  assert.match(milestone.en.content,/2,894[\s\S]*215[\s\S]*237[\s\S]*30,231/);
  assert.match(profile.en.content,/have not been independently audited/);
  assert.match(profile.zh.content,/并非 Justin Welsh 肖像/);
  assert.match(profile.en.content,/not a portrait of Justin Welsh/);
});

test("publishes the Manus Cue note after Dots with a complete translation and four original illustrations",()=>{
  const article=articles.find(a=>a.slug==='manus-cue-agent-identity');
  assert.ok(article);
  assert.equal(article.date,'2026-09-29');
  assert.equal(articles.filter(a=>!a.featured)[2].slug,article.slug);
  for(const lang of ['zh','en']){
    assert.equal(chapters(article[lang].content).length,6);
    assert.equal([...article[lang].content.matchAll(/!\[/g)].length,4);
    assert.doesNotMatch(article[lang].content,/\{\{|喜欢作者|扫一扫.*添加我|LET’S MAKE IT REAL/);
    assert.ok(article[lang].content.length>3000);
  }
  assert.match(article.zh.content,/并不等于给 Agent 开了一个不受约束的个人银行账户/);
  assert.match(article.en.content,/does not mean an agent receives an unrestricted personal bank account/);
});

test("publishes the bilingual OpenAI Dots note with five source illustrations",()=>{
  const article=articles.find(a=>a.slug==='openai-dots-less-to-worry-about');
  assert.ok(article);
  assert.equal(article.date,'2026-09-30');
  assert.equal(articles.filter(a=>!a.featured)[1].slug,article.slug);
  assert.equal(article.related,'manus-cue-agent-identity');
  for(const lang of ['zh','en']){
    assert.equal(chapters(article[lang].content).length,5);
    assert.equal([...article[lang].content.matchAll(/!\[/g)].length,5);
    assert.doesNotMatch(article[lang].content,/\{\{|LET[’']?S MAKE IT REAL|喜欢作者|扫一扫.*添加我|上一篇/);
    assert.ok(article[lang].content.length>(lang==='zh'?4000:9000));
  }
  assert.match(article.zh.content,/这是我设想的试用任务，还不是 Dots 的实测结果/);
  assert.match(article.en.content,/not a report of hands-on results with Dots/);
});

test("publishes the four September 23–26 notes with complete bilingual bodies and local illustrations",()=>{
  const expected=[
    ['human-value-after-ai','2026-09-26',8,5],
    ['ai-employees-digital-team','2026-09-25',8,4],
    ['conversational-ads','2026-09-24',7,3],
    ['siri-ai-callable-apps','2026-09-23',6,3],
  ];
  for(const [slug,date,chapterCount,imageCount] of expected){
    const article=articles.find(a=>a.slug===slug);
    assert.ok(article);
    assert.equal(article.date,date);
    assert.match(article.cover,/^\/assets\/notes\//);
    for(const lang of ['zh','en']){
      assert.equal(chapters(article[lang].content).length,chapterCount);
      assert.equal([...article[lang].content.matchAll(/!\[/g)].length,imageCount);
      assert.doesNotMatch(article[lang].content,/\{\{|LET’S MAKE IT REAL|喜欢作者|二维码/);
      assert.ok(article[lang].content.length>2500);
    }
  }
});


test("publishes the first-payments essay with source figures, original comic and English dialogue",()=>{
  const article=articles.find(a=>a.slug==='wendao-first-payments');
  assert.equal(articles.filter(a=>!a.featured)[0].slug,article.slug);
  assert.equal(article.date,'2026-10-01');
  assert.equal(article.product,'wendao');
  for(const lang of ['zh','en']) {
    assert.equal(chapters(article[lang].content).length,5);
    assert.equal([...article[lang].content.matchAll(/!\[/g)].length,3);
    assert.doesNotMatch(article[lang].content,/喜欢作者|LET’S MAKE IT REAL|奔奔王国|阅读原文/);
    assert.match(article[lang].content,/11\.41/);
  }
  assert.match(article.zh.content,/销量为交易笔数，不等于独立付费用户数/);
  assert.match(article.en.content,/not the same as a final payout or profit/);
  assert.match(article.en.content,/not a list of work already completed/);
  assert.equal([...article.en.content.matchAll(/\*\*\d{2} · /g)].length,12);
});
