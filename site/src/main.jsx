import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import { App } from "./App.jsx";
import "./fonts.css";
import "./styles.css";

const root = document.getElementById("root");
root.replaceChildren();

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
