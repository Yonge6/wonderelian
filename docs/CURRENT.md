# Current website release — September 21, 2026

- Article: https://wonderelian.com/notes/apple-shared-subscriptions-one-person-company/
- Active release: /srv/wonderelian/releases/20260921-shared-subscriptions
- Rollback: /srv/wonderelian/releases/20260918-opc-opportunity
- Source remains /Users/yongyuan/.codex/worktrees/wonderelian-note-20260914/site.
- Added note 09 first in the archive, above note 08; featured essay unchanged.
- Complete Chinese and English text with seven sections and two source illustrations per language. WeChat author card, QR code, footer, and advertising chrome excluded.
- Apple Bundles and Suites facts were checked against Apple Developer pages; the article preserves the request/approval, StoreKit 2, platform-timing, app-limit, and no-current-Suite caveats.
- Added article-scoped Chinese font subsets at all four site weights.
- Build and 11/11 tests passed. English desktop and Chinese 390px mobile layouts checked; both illustrations loaded and no horizontal overflow was found.
- All 143 release files passed server SHA-256 verification; Nginx configuration passed before and after the atomic symlink switch.
- Public homepage, article, sitemap, llms.txt, JS/CSS and both images returned exact local-build hashes. Live homepage order and both article languages were read back; the article has seven chapters, both images loaded, and no desktop or mobile overflow.
- JS assets/index-CjUR6TrD.js; CSS assets/index-CnQnSTuC.css.

---

# Current website release — September 18, 2026

- Article: https://wonderelian.com/notes/ai-era-opc-opportunity/
- Active release: /srv/wonderelian/releases/20260918-opc-opportunity
- Rollback: /srv/wonderelian/releases/20260915-homepage-clarity
- Source remains /Users/yongyuan/.codex/worktrees/wonderelian-note-20260914/site.
- Added note 08 first in the archive, above note 07; featured essay unchanged.
- Complete Chinese and English text with seven sections and two source illustrations per language. WeChat footer, QR code, and advertising chrome excluded.
- Added scoped Chinese glyph coverage for the new article at all four font weights.
- Build and 10/10 tests passed. English desktop and Chinese 390px mobile layouts checked; both illustrations loaded and no horizontal overflow was found.
- All 136 release files passed server SHA-256 verification; Nginx configuration passed before and after the atomic symlink switch.
- Public homepage, article, sitemap, llms.txt, JS/CSS and both images returned exact local-build hashes. Live homepage order and both article languages were read back; the article has seven chapters and no desktop or mobile overflow.
- JS assets/index-BD1KkpCj.js; CSS assets/index-D1ypPUxa.css.

---

# Current website release — September 15, 2026

- Article: https://wonderelian.com/notes/ai-homepage-beautiful-but-unclear/
- Active release: /srv/wonderelian/releases/20260915-homepage-clarity
- Rollback: /srv/wonderelian/releases/20260914-ai-first-product
- Source remains /Users/yongyuan/.codex/worktrees/wonderelian-note-20260914/site.
- Added note 07 / Product Notes 02 first in archive, above note 06; featured essay unchanged.
- Complete Chinese and English text, four sections and four original PDF images each. WeChat advertising/footer controls excluded. Chinese artwork retained with translated English captions; all copy examples and caveats translated in body text.
- Shared paired-device layout extended to the two new captures; supplemental glyphs cover all 389 Chinese characters at four font weights.
- Build and 9/9 tests passed. English desktop screenshot inspected in IAB after ego screenshot timeout; Chinese mobile DOM and overflow checked. Live homepage order, article language switch, and four chapters checked.
- 121 build files hash-verified on server; atomic symlink update with nginx -t before/after.
- Public homepage, article, sitemap, llms.txt, JS/CSS and all four images returned 200 and matched local hashes.
- JS assets/index-DaScXfGz.js; CSS assets/index-DDsuesSx.css.

---

# Current website release — September 14, 2026

- Production: https://wonderelian.com/
- Article: https://wonderelian.com/notes/ai-first-product-what-to-fix-next/
- Release: /srv/wonderelian/releases/20260914-ai-first-product
- Rollback: /srv/wonderelian/releases/20260910-profile-strengths
- Active source: /Users/yongyuan/.codex/worktrees/wonderelian-note-20260914/site
- Branch: codex/ai-first-product-note-20260914; based on preserved 21ff archive snapshot 5cc06c9. The old 21ff checkout no longer exists.
- Added note 06 above Odyssey, preserving the featured main essay. Complete Chinese and English text, five sections each, four original PDF images with localized captions. Source WeChat navigation/footer chrome omitted; quoted prompt preserved as editorial content.
- English illustrations retain original Chinese artwork with translated captions; real Yixiu device captures are preserved.
- Added scoped paired screenshot styling and 426-character Chinese glyph coverage for all four font weights.
- Build and 8/8 tests passed; desktop English and mobile Chinese checked, no overflow; production homepage order and both article languages verified.
- All 105 build files passed server SHA-256 verification before atomic symlink switch; Nginx configuration passed before and after.
- Public homepage, article, sitemap, llms.txt, JS/CSS and all four new images returned 200 with exact build hashes.
- JS assets/index-BzrSCXn1.js; CSS assets/index-CtW_KNZM.css.
- Main checkout dirty work preserved. No iOS or redesign-concept deployment performed in this release.

---

# WonderElian current website — 2026-09-10

Production: https://wonderelian.com/
Release: `20260910-profile-strengths`
Active server root: `/srv/wonderelian/wonderelian.com` -> `/srv/wonderelian/releases/20260910-profile-strengths`
Rollback release retained: `/srv/wonderelian/releases/20260902-112429-geo-odyssey-en`

## Source of this release

Continue website work in `/Users/yongyuan/.codex/worktrees/21ff/WonderElian/site`.
The main checkout at `/Users/yongyuan/Documents/WonderElian/site` predates the September 2 bilingual/SEO release and has separate dirty changes, including iOS/privacy work. It has NOT been overwritten or used to deploy this release. Reconcile before any future deployment from main.

## Approved change

The user approved the proposed distributed strengths positioning and explicitly requested implementation and production deployment.
- Keep the watercolor direction and existing section order.
- Hero retains the English headline and Chinese personal statement, with a new design/product/AI capability statement.
- Update Yixiu, Wendao, Style Atlas and OneLaser project descriptions in both languages.
- About has a shorter title, three paragraphs and the inward/water closing signature; its desktop columns are rebalanced.
- Share the profile text between the homepage, About drawer and crawlable fallback through `src/profile-copy.js`.
- Synchronize homepage descriptions and llms.txt.
- Supplement the existing Chinese font subsets with 19 missing characters in four small WOFF2 files. Original fonts remain unchanged.

## Acceptance

- `npm run build` and `npm run test:sites`: 7/7 passed.
- Local Chinese/English UI checked at desktop and 390px; About drawer uses the shared three paragraphs.
- Production Chinese/English UI checked; 390px and 1280px have no horizontal overflow, all 5 note cards retained, no broken loaded images or console warnings/errors observed.
- All 89 built files verified against SHA-256 on the server before the atomic switch.
- `nginx -t` passed before and after the switch.
- Live JS/CSS hashes match the build; homepage, robots, sitemap, llms, Odyssey route and supplemental font returned HTTP 200.
- Four font weights cover all 429 Chinese characters used by the profile and interface source.
- Previous release remains available; existing unrelated public files were retained by copying the prior release and overlaying the verified build.
- No Git commit or push; existing dirty work retained.

## Live bundle hashes

- `assets/index-Dme5Aqdp.js`: `feb9b355128a38a40463a5626b328e3935343aa55e11150f22b6192aa37025c9`
- `assets/index-DzUr_p4U.css`: `9b632d3bd4451fabe0b8e1ad80326b05f3e837124ba929a5255a0af6576e3802`

## iOS resubmission — September 10, 2026

- iOS source: /Users/yongyuan/Documents/WonderElian/ios-app; website packaging source remains the 21ff worktree above.
- Version 1.0 (3) submitted at 17:14 CST and verified Waiting for Review.
- Submission: https://appstoreconnect.apple.com/apps/6806903403/distribution/reviewsubmissions/details/883f58ac-7954-4b54-8469-fff0862f9b72
- Updated bundled profile/project copy and fonts; native share controls on all five article pages; launch-URL reload loop fixed and regression-tested.
- Six bilingual App Store posters uploaded and visually verified.
- QA and upload evidence: ios-app/qa/2026-09-10/acceptance.md.
- Privacy page now live at https://wonderelian.com/privacy.html; SHA-256 e1131046d8c5907dfd2b36b61c7f99143c18822b87f642d64a9f9979005c385e.
- Keep using build 3. Build 2 was uploaded before the native routing fix and is not the submitted build.
