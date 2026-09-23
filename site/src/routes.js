export const languages = ["zh", "en"];
export function parseRoute(pathname) {
  const match = pathname.match(/^\/(?:(zh|en)\/)?(?:notes\/([^/]+)\/?)?$/);
  return { valid: Boolean(match), language: match?.[1] || null, slug: match?.[2] || null };
}
export function pagePath(language, slug = null) {
  return `/${language}/${slug ? `notes/${slug}/` : ""}`;
}
export function homeAnchor(language, hash) { return `${pagePath(language)}${hash}`; }
