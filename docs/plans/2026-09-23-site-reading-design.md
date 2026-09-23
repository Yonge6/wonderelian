# Approved scope — September 23, 2026

Implement the September 23 audit recommendations except the portfolio/case-study redesign. Preserve all project modules, imagery, order and descriptions. Keep the watercolor direction and personal-world positioning.

1. Restore inline emphasis and safe clickable sources with one renderer shared by React and static HTML. Add chapter navigation, related reading and relevant product/contact actions.
2. Fix initial hash navigation and article-to-home return, with header offset and browser history support.
3. Make contact discoverable in the hero and About. Manage focus, background interaction and nested modal closing. Increase small header hit areas.
4. Clarify Notes title/excerpt hierarchy and add small bilingual topic labels.
5. Give both languages stable home/article paths and localized metadata. Keep legacy links working and generate language alternates, sitemap and llms from the content catalog.
6. Store complete bilingual articles individually. Ship only summaries in the homepage bundle and load only the current article. Exclude unpublished/removed content from the public build and return proper missing-page responses.
7. Optimize reading images with responsive WebP variants and dimensions; preserve original source images locally.
8. Validate parsing, content completeness, routing, SEO, removed content and original project modules. Check desktop/mobile, both languages, keyboard focus, local then public deployment.

Deployment uses a staged release, checked Nginx changes scoped to the main domain, atomic switch, rollback retention and independent public readback. Existing main-checkout changes and unrelated production files remain preserved.
