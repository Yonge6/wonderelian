(function () {
  "use strict";

  if (!["wonderelian.com", "www.wonderelian.com"].includes(window.location.hostname)) return;

  const measurementId = "G-HDHST6WKKB";
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const loader = document.createElement("script");
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(loader);

  const campaignSource = new URLSearchParams(window.location.search).get("utm_source");
  const referrerHost = (() => {
    try { return document.referrer ? new URL(document.referrer).hostname : ""; }
    catch { return ""; }
  })();
  const aiSources = ["chatgpt.com", "perplexity.ai", "copilot.microsoft.com", "claude.ai", "gemini.google.com"];
  const aiSource = aiSources.find((source) => campaignSource === source || referrerHost === source || referrerHost.endsWith(`.${source}`));
  if (aiSource) {
    window.gtag("event", "geo_referral_view", {
      site_id: "site-wonderelian",
      source: aiSource,
      page_path: window.location.pathname,
    });
  }

  document.addEventListener("click", (event) => {
    const noteLink = event.target.closest?.("a.note-card[href]");
    if (noteLink) {
      window.gtag("event", "content_discovery", {
        site_id: "site-wonderelian",
        destination_path: new URL(noteLink.href, window.location.href).pathname,
        page_path: window.location.pathname,
      });
    }

    const link = event.target.closest?.("a.project-entry[href], a[data-product-referral][href]");
    if (!link) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.hostname === "ops.wonderelian.com") return;
    window.gtag("event", "product_discovery", {
      site_id: "site-wonderelian",
      product_host: destination.hostname,
      placement: link.dataset.productReferral || "project_card",
      page_path: window.location.pathname,
    });
  });
}());
