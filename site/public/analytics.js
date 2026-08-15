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

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a.project-entry[href]");
    if (!link) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.hostname === "ops.wonderelian.com") return;
    window.gtag("event", "product_discovery", {
      site_id: "site-wonderelian",
      product_host: destination.hostname,
      page_path: window.location.pathname,
    });
  });
}());
