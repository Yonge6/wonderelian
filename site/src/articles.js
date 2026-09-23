// Build-time content adapter. The browser imports generated summaries instead.
import { readdirSync, readFileSync } from "node:fs";
const directory = new URL("../content/notes/", import.meta.url);
export const articles = readdirSync(directory).filter(name => name.endsWith(".json"))
  .map(name => JSON.parse(readFileSync(new URL(name, directory), "utf8")))
  .filter(article => article.status === "published")
  .sort((a, b) => a.order - b.order);
