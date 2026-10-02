(function (root) {
  "use strict";

  const consentKey = "wonderelian.analyticsConsent.v1";
  const appConsentKey = "wonderelian.app.analyticsConsent.v1";
  const measurementId = "G-HDHST6WKKB";
  const webPrefix = "wonder_v1_";
  const appPrefix = "wonder_ios_v1_";
  const names = new Set([
    "visit", "active_time", "section_view", "article_view", "article_reading_time",
    "reading_progress", "note_open", "project_open", "load_more", "language_switch",
    "audio_start", "audio_listen_time", "audio_error", "contact_click",
    "native_share_start", "native_share_success", "native_share_error", "deep_link_open",
  ]);
  const keys = new Set([
    "content_id", "section_id", "product_id", "placement", "language", "progress", "value",
  ]);

  function event(name, fields = {}, nativeIOS = false) {
    if (!names.has(name)) return null;
    const safe = {};
    for (const [key, value] of Object.entries(fields)) {
      if (!keys.has(key)) continue;
      if (typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 100000) safe[key] = value;
      if (typeof value === "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(value)) safe[key] = value;
    }
    return {
      name: `${nativeIOS ? appPrefix : webPrefix}${name}`,
      parameters: {
        ...safe,
        surface: nativeIOS ? "ios" : "h5",
        schema_version: 1,
        site_id: nativeIOS ? "app-wonderelian-ios" : "site-wonderelian",
      },
    };
  }

  function activeClock() {
    let previous = null;
    return {
      reset() { previous = null; },
      sample(now, isActive) {
        const before = previous;
        previous = isActive ? now : null;
        if (!isActive || before === null) return 0;
        const seconds = (now - before) / 1000;
        return seconds > 0 && seconds <= 35 ? seconds : 0;
      },
    };
  }

  if (typeof module !== "undefined") module.exports = { event, activeClock, consentKey, appConsentKey };
  if (!root?.document) return;

  const doc = root.document;
  const nativeIOS = Boolean(root.Capacitor?.isNativePlatform?.() && root.Capacitor?.getPlatform?.() === "ios");
  const storageKey = nativeIOS ? appConsentKey : consentKey;
  const query = new URLSearchParams(root.location.search);
  const eligible = (nativeIOS || (["wonderelian.com", "www.wonderelian.com"].includes(root.location.hostname)
    && root.location.protocol === "https:"))
    && !root.navigator.webdriver
    && query.get("analytics") !== "off"
    && !query.has("preview");
  const language = () => doc.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const articleId = () => root.location.pathname.match(/^\/(?:zh|en)\/notes\/([a-z0-9-]+)\/?$/i)?.[1] || null;
  const safeId = value => String(value || "").toLowerCase().replace(/^www\./, "").replace(/[^a-z0-9_-]+/g, "-").replace(/^-|-$/g, "").slice(0, 100);
  let choice = null;
  try { choice = root.localStorage.getItem(storageKey); } catch {}
  let enabled = eligible && choice === "granted";
  let loaded = false;
  let configured = false;
  let activeSeconds = 0;
  let readingSeconds = 0;
  let audioSeconds = 0;
  let lastInteraction = root.performance.now();
  const active = activeClock();
  const audio = activeClock();
  const milestones = new Set();
  let panel = null;

  root.dataLayer = root.dataLayer || [];
  root.gtag = root.gtag || function () { root.dataLayer.push(arguments); };
  root.gtag("consent", "default", {
    analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });

  function track(name, fields = {}) {
    const value = event(name, { language: language(), ...fields }, nativeIOS);
    if (!enabled || !value) return false;
    root.gtag("event", value.name, value.parameters);
    return true;
  }

  function loadGoogle() {
    if (loaded) return;
    loaded = true;
    const loader = doc.createElement("script");
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    doc.head.appendChild(loader);
  }

  function start() {
    if (!enabled) return;
    loadGoogle();
    root.gtag("consent", "update", { analytics_storage: "granted" });
    if (!configured) {
      configured = true;
      root.gtag("js", new Date());
      root.gtag("config", measurementId, { allow_google_signals: false, allow_ad_personalization_signals: false });
    }
    lastInteraction = root.performance.now();
    active.reset();
    audio.reset();
    track("visit");
    const contentId = articleId();
    if (contentId) track("article_view", { content_id: contentId });
  }

  function deleteAnalyticsCookies() {
    for (const part of doc.cookie.split(";")) {
      const name = part.trim().split("=")[0];
      if (!/^_ga(?:_|$)/.test(name)) continue;
      for (const domain of ["", "; domain=wonderelian.com", "; domain=.wonderelian.com"]) doc.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }

  function audioElement() { return doc.querySelector("audio"); }
  function audioId() {
    const src = audioElement()?.currentSrc || audioElement()?.getAttribute("src") || "";
    return safeId(src.split("/").pop()?.replace(/\.[a-z0-9]+$/i, "") || "ambient");
  }

  function flush() {
    if (activeSeconds >= 0.1) track("active_time", { value: Math.round(activeSeconds * 100) / 100 });
    if (readingSeconds >= 0.1) track("article_reading_time", { content_id: articleId(), value: Math.round(readingSeconds * 100) / 100 });
    if (audioSeconds >= 0.1) track("audio_listen_time", { content_id: audioId(), value: Math.round(audioSeconds * 100) / 100 });
    activeSeconds = 0;
    readingSeconds = 0;
    audioSeconds = 0;
  }

  function stop() {
    enabled = false;
    activeSeconds = 0;
    readingSeconds = 0;
    audioSeconds = 0;
    active.reset();
    audio.reset();
    root.gtag("consent", "update", { analytics_storage: "denied" });
    deleteAnalyticsCookies();
  }

  function consent(value) {
    choice = value ? "granted" : "denied";
    try { root.localStorage.setItem(storageKey, choice); } catch {}
    if (value && eligible) { enabled = true; start(); } else stop();
    renderPanel();
    root.dispatchEvent(new CustomEvent("wonderelian:analytics-consent", { detail: { enabled } }));
  }

  function sample() {
    const now = root.performance.now();
    const foreground = enabled && doc.visibilityState === "visible" && now - lastInteraction < 60000;
    const seconds = active.sample(now, foreground);
    activeSeconds += seconds;
    if (articleId()) readingSeconds += seconds;
    const player = audioElement();
    audioSeconds += audio.sample(now, foreground && player && !player.paused && !player.ended);
    if (activeSeconds >= 30 || readingSeconds >= 30 || audioSeconds >= 30) flush();
  }

  function renderPanel() {
    if (!panel) return;
    const zh = language() === "zh";
    panel.hidden = choice !== null;
    panel.querySelector("strong").textContent = zh
      ? `帮助改进 WonderElian${nativeIOS ? " App" : ""}`
      : `Help improve WonderElian${nativeIOS ? " App" : ""}`;
    panel.querySelector("p").textContent = zh
      ? `可选使用统计会向 Google Analytics 发送内容编号、操作结果与前台活跃时长${nativeIOS ? "，并与网站数据分开统计" : ""}；不上传姓名、联系方式、文章内容或声音，可随时关闭。`
      : `Optional statistics send content IDs, action outcomes and foreground active time to Google Analytics${nativeIOS ? " in a separate App dataset" : ""}. No names, contact details, article text or audio. Turn off at any time.`;
    panel.querySelector('[data-consent="yes"]').textContent = zh ? "允许统计" : "Allow";
    panel.querySelector('[data-consent="no"]').textContent = zh ? "暂不允许" : "Not now";
  }

  function mountPanel() {
    const css = doc.createElement("link");
    css.rel = "stylesheet";
    css.href = "/analytics.css?v=20261002";
    doc.head.appendChild(css);
    panel = doc.createElement("section");
    panel.className = "wonder-usage-consent";
    panel.setAttribute("aria-label", "Optional usage statistics");
    panel.innerHTML = '<strong></strong><p></p><div><button type="button" data-consent="no"></button><button type="button" data-consent="yes"></button></div>';
    panel.querySelectorAll("button").forEach(button => button.addEventListener("click", () => consent(button.dataset.consent === "yes")));
    doc.body.appendChild(panel);
    renderPanel();
  }

  function productId(link) {
    try { return safeId(new URL(link.href, root.location.href).hostname.replace(".wonderelian.com", "") || "external"); }
    catch { return "external"; }
  }

  function contentFromHref(href) {
    try { return new URL(href, root.location.href).pathname.match(/\/notes\/([a-z0-9-]+)/i)?.[1] || "note"; }
    catch { return "note"; }
  }

  function contactKind(target) {
    const link = target.closest("a[href]");
    if (link?.href.startsWith("mailto:")) return "email";
    if (target.closest(".wechat-contact")) return "wechat";
    if (target.closest(".hero-contact,.about-contact")) return "product-idea";
    try { return link ? safeId(new URL(link.href, root.location.href).hostname) : "contact"; }
    catch { return "contact"; }
  }

  function bindInteractions() {
    doc.addEventListener("click", click => {
      const target = click.target;
      const note = target.closest?.("a.note-card[href]");
      if (note) track("note_open", { content_id: contentFromHref(note.href), placement: note.classList.contains("note-card--featured") ? "featured" : "archive" });
      const project = target.closest?.("a.project-entry[href],a[data-product-referral][href]");
      if (project && !new URL(project.href, root.location.href).hostname.startsWith("ops.")) track("project_open", { product_id: productId(project), placement: project.dataset.productReferral || "project-card" });
      if (target.closest?.(".notes-load-more")) track("load_more", { section_id: "notes" });
      if (target.closest?.(".language-toggle")) track("language_switch", { language: language() === "zh" ? "en" : "zh" });
      if (target.closest?.(".hero-contact,.about-contact,.contact-list a,.contact-list button")) track("contact_click", { placement: contactKind(target) });
    });

    const sections = [...doc.querySelectorAll("main > section[id]")];
    if ("IntersectionObserver" in root) {
      const seen = new Set();
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.35 || seen.has(entry.target.id)) return;
        seen.add(entry.target.id);
        track("section_view", { section_id: safeId(entry.target.id) });
      }), { threshold: [0.35] });
      sections.forEach(section => observer.observe(section));
    }

    const player = audioElement();
    player?.addEventListener("play", () => track("audio_start", { content_id: audioId() }));
    player?.addEventListener("error", () => track("audio_error", { content_id: audioId() }));

    root.addEventListener("scroll", () => {
      sample();
      lastInteraction = root.performance.now();
      const body = doc.querySelector(".article-body");
      if (!body || !articleId()) return;
      const rect = body.getBoundingClientRect();
      const available = Math.max(1, body.offsetHeight - root.innerHeight * 0.4);
      const progress = Math.max(0, Math.min(100, Math.round((-rect.top + root.innerHeight * 0.55) / available * 100)));
      for (const point of [25, 50, 75, 90]) if (progress >= point && !milestones.has(point)) {
        milestones.add(point);
        track("reading_progress", { content_id: articleId(), progress: point });
      }
    }, { passive: true });
    for (const name of ["pointerdown", "keydown"]) root.addEventListener(name, () => { sample(); lastInteraction = root.performance.now(); }, { passive: true });
    doc.addEventListener("visibilitychange", () => { sample(); flush(); active.reset(); audio.reset(); });
    root.addEventListener("pagehide", () => { sample(); flush(); active.reset(); audio.reset(); });
  }

  function mount() {
    mountPanel();
    bindInteractions();
    new MutationObserver(renderPanel).observe(doc.documentElement, { attributes: true, attributeFilter: ["lang"] });
    if (enabled) start();
    root.setInterval(sample, 5000);
  }

  root.WonderElianAnalytics = { track, consent, isEnabled: () => enabled, surface: nativeIOS ? "ios" : "h5" };
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", mount, { once: true });
  else mount();
})(typeof window === "undefined" ? null : window);
