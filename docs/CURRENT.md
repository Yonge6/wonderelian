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
