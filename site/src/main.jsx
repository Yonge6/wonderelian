import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import { App } from "./App.jsx";
import "./fonts.css";
import "./styles.css";
import { parseRoute, pagePath } from "./routes.js";

const route = parseRoute(window.location.pathname);
// Keep existing bookmarks and their saved language while moving new links to
// explicit, shareable language paths. Explicit /zh/ and /en/ always win.
if (route.valid && !route.language) {
  let language = "en";
  try { if (window.localStorage.getItem("wonderelian-language") === "zh") language = "zh"; } catch {}
  window.location.replace(pagePath(language,route.slug)+window.location.search+window.location.hash);
} else {
const root = document.getElementById("root");
root.replaceChildren();

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
}
