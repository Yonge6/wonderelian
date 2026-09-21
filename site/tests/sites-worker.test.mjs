import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import worker from "../worker/index.js";

test("serves existing static assets without a fallback", async () => {
  const calls = [];
  const response = await worker.fetch(new Request("https://example.test/assets/app.js"), {
    ASSETS: {
      fetch: async (request) => {
        calls.push(new URL(request.url).pathname);
        return new Response("asset", { status: 200 });
      },
    },
  });

  assert.equal(response.status, 200);
  assert.deepEqual(calls, ["/assets/app.js"]);
});

test("falls back to index.html for an unknown app route", async () => {
  const calls = [];
  const response = await worker.fetch(
    new Request("https://example.test/flow/step-two?source=share", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async (request) => {
          const url = new URL(request.url);
          calls.push(url.pathname + url.search);
          return new Response(url.pathname === "/index.html" ? "app" : "missing", {
            status: url.pathname === "/index.html" ? 200 : 404,
          });
        },
      },
    },
  );

  assert.equal(response.status, 200);
  assert.deepEqual(calls, ["/flow/step-two?source=share", "/index.html"]);
});

test("does not turn missing API or write requests into the app shell", async () => {
  for (const request of [
    new Request("https://example.test/api/missing", { headers: { accept: "application/json" } }),
    new Request("https://example.test/flow", { method: "POST", headers: { accept: "text/html" } }),
  ]) {
    let calls = 0;
    const response = await worker.fetch(request, {
      ASSETS: {
        fetch: async () => {
          calls += 1;
          return new Response("missing", { status: 404 });
        },
      },
    });

    assert.equal(response.status, 404);
    assert.equal(calls, 1);
  }
});

test("emits the files required by Sites packaging", async () => {
  await access(new URL("../dist/client/index.html", import.meta.url));
  await access(new URL("../dist/server/index.js", import.meta.url));
  await access(new URL("../dist/.openai/hosting.json", import.meta.url));
});

test("prerenders crawlable English article pages with article metadata", async () => {
  const odyssey = await readFile(new URL("../dist/client/notes/odyssey-the-long-way-home/index.html", import.meta.url), "utf8");

  assert.match(odyssey, /<html lang="en">/);
  assert.match(odyssey, /rel="canonical" href="https:\/\/wonderelian\.com\/notes\/odyssey-the-long-way-home\/"/);
  assert.match(odyssey, /property="og:type" content="article"/);
  assert.match(odyssey, /"@type": "BlogPosting"/);
  assert.match(odyssey, /<article>/);
  assert.match(odyssey, /Some Take Ten Years to Return Home; Others a Lifetime/);
  assert.match(odyssey, /Pain Is Not the Same as Responsibility/);
  assert.match(odyssey, /At WonderElian, Continuing the Way Back to Yourself/);
  assert.doesNotMatch(odyssey, /Chinese · 9 min read/);
});

test("ships global-English crawl and entity metadata", async () => {
  const [index, robots, sitemap, llms] = await Promise.all([
    readFile(new URL("../dist/client/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/llms.txt", import.meta.url), "utf8"),
  ]);

  assert.match(index, /<html lang="en">/);
  assert.match(index, /rel="canonical" href="https:\/\/wonderelian\.com\/"/);
  assert.match(index, /property="og:title"/);
  assert.match(index, /name="twitter:card" content="summary_large_image"/);
  assert.match(index, /"@type": "Organization"/);
  assert.match(index, /"@type": "Person"/);
  assert.match(index, /Wuhan, China/);
  assert.match(index, /data-seo-fallback/);
  assert.match(index, /Elian Yong/);
  assert.match(robots, /User-agent: OAI-SearchBot/);
  assert.match(robots, /User-agent: ChatGPT-User/);
  assert.match(robots, /Sitemap: https:\/\/wonderelian\.com\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/wonderelian\.com\/<\/loc>/);
  assert.match(llms, /# WonderElian/);
  assert.match(llms, /odyssey-the-long-way-home/);
});

test("ships two attributable Yixiu acquisition paths", async () => {
  const [app, analytics] = await Promise.all([
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../public/analytics.js", import.meta.url), "utf8"),
  ]);

  assert.match(app, /utm_content=project_card/);
  assert.match(app, /utm_content=ambient_drawer/);
  assert.match(app, /data-product-referral="ambient_drawer"/);
  assert.match(app, /Continue listening in Yixiu/);
  assert.match(app, /scene: "falls"/);
  assert.match(analytics, /a\[data-product-referral\]\[href\]/);
  assert.match(analytics, /placement: link\.dataset\.productReferral \|\| "project_card"/);
});

test("publishes the complete bilingual AI product note above Odyssey", async () => {
  const { articles } = await import("../src/articles.js");
  const note = articles.find((item) => item.slug === "ai-first-product-what-to-fix-next");
  assert.equal(articles.indexOf(note) + 1, articles.findIndex((item) => item.slug === "odyssey-the-long-way-home"));
  for (const language of ["zh", "en"]) {
    assert.equal((note[language].content.match(/^## /gm) || []).length, 5);
    const images = [...note[language].content.matchAll(/!\[.*?\]\((.*?)\)/g)];
    assert.equal(images.length, 4);
    for (const image of images) await access(new URL(`../public${image[1]}`, import.meta.url));
  }
  const html = await readFile(new URL("../dist/client/notes/ai-first-product-what-to-fix-next/index.html", import.meta.url), "utf8");
  assert.match(html, /Let AI Help You Prioritize/);
  assert.match(html, /Today, Choose One Thing Worth Fixing/);
  assert.match(html, /"@type": "BlogPosting"/);
  assert.match(html, /2026-09-14/);
});

test("keeps the bilingual homepage clarity note immediately after the newer OPC note", async () => {
  const { articles } = await import("../src/articles.js");
  const note = articles.filter((a) => !a.featured)[2];
  assert.equal(note.slug, "ai-homepage-beautiful-but-unclear");
  for (const lang of ["zh", "en"]) {
    assert.equal((note[lang].content.match(/^## /gm) || []).length, 4);
    const images = [...note[lang].content.matchAll(/!\[.*?\]\((.*?)\)/g)];
    assert.equal(images.length, 4);
    for (const image of images) await access(new URL(`../public${image[1]}`, import.meta.url));
  }
  assert.match(note.en.content, /there are no conversion data/);
  const html = await readFile(new URL("../dist/client/notes/ai-homepage-beautiful-but-unclear/index.html", import.meta.url), "utf8");
  assert.match(html, /Ask AI to Look Like a First-Time Visitor/);
  assert.match(html, /"@type": "BlogPosting"/);
});

test("publishes bilingual OPC opportunity note first in the archive", async () => {
  const { articles } = await import("../src/articles.js");
  const note = articles.filter((article) => !article.featured)[1];
  assert.equal(note.slug, "ai-era-opc-opportunity");
  for (const language of ["zh", "en"]) {
    assert.equal((note[language].content.match(/^## /gm) || []).length, 7);
    const images = [...note[language].content.matchAll(/!\[.*?\]\((.*?)\)/g)];
    assert.equal(images.length, 2);
    for (const image of images) await access(new URL(`../public${image[1]}`, import.meta.url));
  }
  assert.match(note.en.content, /hypothetical scenario/);
  assert.match(note.en.content, /does not claim that the products have achieved corresponding revenue or integrations/);
  const html = await readFile(new URL("../dist/client/notes/ai-era-opc-opportunity/index.html", import.meta.url), "utf8");
  assert.match(html, /Small Products Connect Interesting Souls/);
  assert.match(html, /"@type": "BlogPosting"/);
});

test("publishes the bilingual shared-subscriptions note first in the archive", async () => {
  const { articles } = await import("../src/articles.js");
  const note = articles.filter((article) => !article.featured)[0];
  assert.equal(note.slug, "apple-shared-subscriptions-one-person-company");
  for (const language of ["zh", "en"]) {
    assert.equal((note[language].content.match(/^## /gm) || []).length, 7);
    const images = [...note[language].content.matchAll(/!\[.*?\]\((.*?)\)/g)];
    assert.equal(images.length, 2);
    for (const image of images) await access(new URL(`../public${image[1]}`, import.meta.url));
  }
  assert.match(note.en.content, /has not enabled an Apple Suite/);
  assert.match(note.en.content, /makes no promise about revenue or conversion/);
  const html = await readFile(new URL("../dist/client/notes/apple-shared-subscriptions-one-person-company/index.html", import.meta.url), "utf8");
  assert.match(html, /What I want to build is a body of work/);
  assert.match(html, /"@type": "BlogPosting"/);
  assert.match(html, /2026-09-18/);
});

test("removes the Maker Business and Graphic Brutalism notes from public discovery", async () => {
  const { articles } = await import("../src/articles.js");
  const removed = ["maker-business-three-numbers", "graphic-brutalism-honest-power"];
  assert.deepEqual(
    articles.filter((article) => removed.includes(article.slug)),
    [],
  );

  const [sitemap, llms] = await Promise.all([
    readFile(new URL("../dist/client/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/llms.txt", import.meta.url), "utf8"),
  ]);
  for (const slug of removed) {
    assert.doesNotMatch(sitemap, new RegExp(slug));
    assert.doesNotMatch(llms, new RegExp(slug));
    await assert.rejects(access(new URL(`../dist/client/notes/${slug}/index.html`, import.meta.url)));
  }
});
