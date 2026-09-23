# Two bilingual essays and visual refinements — 2026-09-23

- Production: https://wonderelian.com/zh/#notes
- Active release: `/srv/wonderelian/releases/20260923-two-essays-refinement`.
- Rollback: `/srv/wonderelian/releases/20260923-square-sections`.
- Added note 11 `xiazi-100-issues-1800-posters` (2026-09-22) and note 10 `justin-welsh-small-by-design` (2026-09-21), ahead of the Apple subscription essay. Featured essay unchanged; 9 bilingual notes total.
- Chinese content follows the supplied PDFs, preserving updated wording, publication dates, five/six chapters, dated data qualifications, and the author’s personal perspective. Complete English translations; seven original illustrations extracted from PDFs with localized captions. WeChat page chrome/contact footer excluded.
- Justin figures remain explicitly self-reported and unaudited; AI concept images remain identified as not being his portrait. Milestone statistics retain their September 22 snapshot and code revision, without implying a fresh operational audit.
- Added four compact font subsets covering 123 additional Chinese glyphs at each existing weight; responsive WebP variants and article payloads generated automatically. Tall source posters use the existing bounded poster layout.
- Full-width header, hero and About stay square. About actions, public OPS action, featured Read action and all archive arrows are borderless text/arrow elements; article cards stay rounded.
- Build and 19 checks passed. Seven prior articles compared exactly with previous source, excluding order fields. Chinese/English desktop and mobile pages, images, TOC jump (104px offset), and visual annotations inspected.
- 285 staged files SHA-256 verified; existing privacy and domain verification preserved. Nginx checked before/after atomic switch, previous release retained.
- 34 public pages, article payloads, source/optimized illustrations and fonts match build hashes. Live homepage has 9 notes in expected order; all three full-width surfaces have 0px radii and annotated actions have no borders/background circles. New live pages show 5/6 chapters and 3/4 images with no observed horizontal overflow.
- JS `index-Cw4uVF2N.js`; CSS `index-uoFQFF2Y.css`.
- QA: `/Users/yongyuan/Documents/WonderElian/qa/2026-09-23-two-notes/`.

---

# Straight section edges — 2026-09-23

- Live: `20260923-square-sections`; rollback: `20260923-rounded-water`.
- Removed rounding from the full-width header, hero and About backgrounds across all breakpoints; cards and controls stay rounded.
- Build and 18 checks passed. Local 555px/1280px and live 1577px DOM confirms all three section radii are 0px.
- All 245 staged files checksum-verified; Nginx checks passed; atomic switch. Four public resources match build hashes.
- JS `index-ByeD29VY.js`; CSS `index-Dkizd-8a.css`.

---

# Rounded website release — 2026-09-23

- Production: https://wonderelian.com/zh/#notes
- Active release: `/srv/wonderelian/releases/20260923-rounded-water`.
- Rollback: `/srv/wonderelian/releases/20260923-reading-bilingual-contact`.
- Applied the user’s “圆润 如水” direction across cards, image frames, actions, menus, reading surfaces, drawers and QR/support dialogs using responsive radius tokens. Notes rows and existing project cards have breathing room between rounded surfaces. Portfolio copy, assets, order and JSX remain unchanged.
- Removed the Notes introductory paragraph in Chinese and English; the heading remains.
- Existing 18 automated checks passed. Desktop, 390px and 320px layouts inspected, including English, night mode, contact and QR dialogs; no horizontal overflow observed. QR original unchanged and loaded at natural width 888.
- 245 staged files checksum-verified, privacy and domain verification preserved, Nginx checks passed, release symlink switched atomically with rollback trap.
- Eight public pages/assets match local build SHA-256. Live Notes shows seven essays, the removed paragraph is absent, and the rounded card styles are applied.
- JS: `index-QtDIXB6_.js`; CSS: `index-DRM18CGV.css`.
- QA: `/Users/yongyuan/Documents/WonderElian/qa/2026-09-23-rounded/`.

---

# WonderElian website — 2026-09-23

- Production: https://wonderelian.com/zh/#notes · English: https://wonderelian.com/en/
- Release: `/srv/wonderelian/releases/20260923-reading-bilingual-contact`
- Rollback: `/srv/wonderelian/releases/20260921-remove-maker-brutalism`
- Active source: `/Users/yongyuan/.codex/worktrees/wonderelian-note-20260914/site`.
- User explicitly deferred portfolio/case-study redesign. Original project definitions and works section are byte-identical to commit `54d5e1a`, covered by a regression check.
- Shared escaped article renderer now handles bold, italics and clickable source links. Added stable chapter IDs/TOC, related reading and product/contact next steps. Fixed initial/hash/return positioning with fixed-header offsets.
- Contact is visible in the hero and explicit in About. Dialogs trap/restore keyboard focus, make background inert, and handle nested QR dialogs. Added the user-provided WeChat contact QR as an unchanged original, with open/save actions in both languages.
- Stable `/zh/` and `/en/` home/article routes, localized canonical/hreflang/OG/JSON-LD, and automatic sitemap/llms generation. Legacy links retain saved language and hash via compatibility navigation.
- Seven complete bilingual source articles moved into `site/content/notes/*.json`; exact body and original metadata/image-reference parity against the prior release verified. Homepage now imports summaries; article pages embed only their selected language and have a separate retryable payload fallback.
- Build produces 31 responsive reading-image sets, with explicit dimensions. Original source images retained. Largest display variants total 2,631,534 bytes vs 19,791,617 original bytes (86.7% smaller); this is not a network-speed or CWV claim.
- Homepage JS 282,874 bytes vs 411,670 before (31.3% smaller, uncompressed). Assets: `index-D3bzvYAI.js`, `index-CyrFpJKS.css`.
- Withdrawn article definitions excluded from build; their unique images and old JS are not served by the active release. Main-domain unknown routes return a real 404; other mapped apps retain their prior route fallback.
- Validation: 18/18 automated checks; all seven bilingual articles match the former published source; local and live mobile/desktop, chapter/language/return navigation, text formatting, source links and contact/WeChat inspected. No horizontal overflow in checked 390px views.
- Deployment: 245 files SHA-256 verified on server; Nginx tested before/after; loopback staging checks verified 200/404 behavior and preserved other-host fallback; atomic release switch with rollback trap. Existing privacy and domain-verification files match the former release.
- Public acceptance: 30 HTML/assets/index files match exact local hashes; 6 removed/unknown route or old-JS checks return 404, plus 2 removed article image checks return 404. QR SHA-256 `7fa8553c755052cd216e96745dbad291afc8d42b3b6c087345ca1edd91807e29` matches supplied original.
- QA evidence: `/Users/yongyuan/Documents/WonderElian/qa/2026-09-23-release/`.
- No App Store/iOS resubmission in this scope. No performance-score, search-index-removal, conversion or successful WeChat friend-add claim.

---

# Current website release — September 21, 2026 (remove two notes)

- Production: https://wonderelian.com/#notes
- Active release: /srv/wonderelian/releases/20260921-remove-maker-brutalism
- Rollback: /srv/wonderelian/releases/20260921-shared-subscriptions
- Removed Maker Business and Graphic Brutalism from the public article collection, homepage archive, prerendered routes, sitemap, and llms.txt.
- Source article definitions and media remain in Git history; the public build no longer exposes either note.
- Build and 12/12 tests passed. Local homepage readback contains seven notes, omits both removed slugs, and has no horizontal overflow.
- All 141 release files passed server SHA-256 verification; Nginx configuration passed before and after the atomic symlink switch.
- Public homepage, sitemap, llms.txt, JS, and CSS returned exact local-build hashes. Live homepage contains seven note links and neither removed slug; both former article URLs now render the general homepage without an article element.
- JS assets/index-CgPggwus.js; CSS assets/index-CnQnSTuC.css.

---

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
