import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../public/analytics.js", import.meta.url), "utf8");
const sandbox = { module: { exports: {} }, window: null, URLSearchParams };
vm.runInNewContext(source, sandbox);
const { event, activeClock, consentKey, appConsentKey } = sandbox.module.exports;

test("analytics contract accepts only known events and controlled fields", () => {
  assert.equal(consentKey, "wonderelian.analyticsConsent.v1");
  assert.equal(appConsentKey, "wonderelian.app.analyticsConsent.v1");
  const value = event("article_view", {
    content_id: "openai-dots-less-to-worry-about",
    language: "zh",
    private_text: "do not send",
    url: "https://example.com/private?q=secret",
  });
  assert.equal(value.name, "wonder_v1_article_view");
  assert.deepEqual({ ...value.parameters }, {
    content_id: "openai-dots-less-to-worry-about",
    language: "zh",
    surface: "h5",
    schema_version: 1,
    site_id: "site-wonderelian",
  });
  assert.equal(event("revenue", { value: 99 }), null);
});

test("native iOS disables Google Analytics and the website consent prompt", () => {
  const storage = new Map([["wonderelian.app.analyticsConsent.v1", "granted"]]);
  const appended = [];
  const dispatched = [];
  const document = {
    cookie: "_ga=legacy; _ga_HDHST6WKKB=legacy",
    readyState: "complete",
    documentElement: { lang: "en" },
    head: { appendChild: node => appended.push(node) },
    body: { appendChild: node => appended.push(node) },
    addEventListener() {},
    createElement: tagName => ({ tagName }),
  };
  const window = {
    document,
    Capacitor: { isNativePlatform: () => true, getPlatform: () => "ios" },
    localStorage: {
      getItem: key => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key),
    },
    dispatchEvent: event => dispatched.push(event),
  };
  class CustomEvent {
    constructor(type, init) { this.type = type; this.detail = init.detail; }
  }

  vm.runInNewContext(source, { window, URLSearchParams, CustomEvent });

  assert.equal(storage.has("wonderelian.app.analyticsConsent.v1"), false);
  assert.equal(window.WonderElianAnalytics.surface, "ios");
  assert.equal(window.WonderElianAnalytics.isEnabled(), false);
  assert.equal(window.WonderElianAnalytics.track("visit"), false);
  assert.equal(appended.length, 0);
  assert.deepEqual(dispatched.map(event => [event.type, event.detail.enabled]), [
    ["wonderelian:analytics-consent", false],
  ]);
});

test("duration contract rejects invalid values and active clock excludes idle gaps", () => {
  assert.deepEqual({ ...event("active_time", { value: Number.NaN }).parameters }, {
    surface: "h5",
    schema_version: 1,
    site_id: "site-wonderelian",
  });
  const clock = activeClock();
  assert.equal(clock.sample(0, true), 0);
  assert.equal(clock.sample(5000, true), 5);
  assert.equal(clock.sample(50000, true), 0);
  assert.equal(clock.sample(55000, false), 0);
  assert.equal(clock.sample(60000, true), 0);
  assert.equal(clock.sample(65000, true), 5);
});

test("site exposes a persistent privacy control and default-off disclosure", async () => {
  const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
  const privacy = await readFile(new URL("../public/privacy.html", import.meta.url), "utf8");
  assert.match(app, /role="switch"/);
  assert.match(app, /wonderelian\.analyticsConsent\.v1/);
  assert.match(privacy, /使用统计默认关闭/);
  assert.match(privacy, /Website usage statistics are off by default/);
  assert.match(privacy, /iOS App 不加载 Google Analytics/);
  assert.match(privacy, /iOS App does not load Google Analytics/);
});
