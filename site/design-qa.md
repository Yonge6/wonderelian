# WonderElian 沿途所作 · Design QA

## Comparison Target

- Source visual truth path: `/Users/yongyuan/Documents/WonderElian/site/qa-option2-reference.png`
- Implementation screenshot path: `/Users/yongyuan/Documents/WonderElian/site/qa-option2-desktop.png`
- Responsive screenshot path: `/Users/yongyuan/Documents/WonderElian/site/qa-option2-mobile.png`
- Full-view comparison evidence: `/Users/yongyuan/Documents/WonderElian/site/qa-option2-comparison.png`
- Focused icon evidence: `/Users/yongyuan/Documents/WonderElian/site/qa-option2-icon-mapping.png`
- Local implementation: `http://127.0.0.1:5173/#now`
- State: Chinese, light theme, `#now` / 沿途所作, fixed navigation visible, drawer closed.

## Viewport and Normalization

- Source pixels: `1479 × 1064`.
- Desktop implementation pixels and CSS viewport: `1424 × 1225`, density `1 px / CSS px`.
- Mobile implementation pixels and CSS viewport: `390 × 844`, density `1 px / CSS px`.
- Full-view normalization: the implementation's fixed `106 px` navigation was excluded from the design-region crop. Source and implementation regions were each fitted without distortion into `700 × 520` panels in the combined `1440 × 580` comparison.
- The source option intentionally contained the wrong icon mapping for cards 03 and 04. Per the user's explicit correction, the implementation uses the actual product icons: 03 三慢问道 and 04 虾子曰. This is an intentional product correction, not design drift.

## Required Fidelity Surfaces

- Fonts and typography: existing Noto Serif SC / Cormorant Garamond hierarchy is preserved. Kicker tracking, editorial title weights, supporting-copy line height, and OneLaser display scale match the selected art direction. Desktop OneLaser is kept on one line; mobile titles use controlled wrapping without orphaned single characters.
- Spacing and layout rhythm: the selected one-large/four-supporting composition is reproduced as a two-column editorial shelf. OneLaser remains a full-width sixth feature. Desktop card tracks, dividers, icon-to-copy gaps, and outer section spacing align with the source; mobile collapses to a single readable stack with no horizontal overflow.
- Colors and visual tokens: ivory paper, deep teal type, muted amber rules, low-opacity watercolor imagery, and the existing dark-theme token behavior are preserved.
- Image quality and asset fidelity: all five App icons are real source assets at `256 × 256`, displayed with `23%` iOS-style rounded corners. The OneLaser card uses a purpose-made `1672 × 941` pale industrial-watercolor image with the machine positioned away from the text.
- Copy and content: all six product names, descriptions, bilingual kickers, ordering, URLs, and app-to-icon mappings are correct. OneLaser links to `https://onelaser.wonderelian.com`.

## Focused Region Evidence

The full comparison is sufficient for grid proportions, hierarchy, and color. A focused five-icon strip was also reviewed because the selected visual contained an incorrect 03/04 mapping and the user explicitly required authentic App icons. The focused evidence confirms the sequence: 一休、认识自己、三慢问道、虾子曰、艺术风格图鉴.

## Comparison History

### Pass 1

- [P2] Desktop OneLaser title wrapped with an orphaned final line.
  - Evidence: `/tmp/wonderelian-desktop-option2.png`.
  - Fix: reduced the featured display size, retained the requested `610 px` copy measure, and kept the desktop title on one line.
- [P2] At `390 px`, “不二 认识自己” left a single character on a second line, while the OneLaser title used three uneven lines.
  - Evidence: `/tmp/wonderelian-mobile-option2.png` and `/tmp/wonderelian-mobile-lower-option2.png`.
  - Fix: added a narrow-screen title size for the Human Design card and reduced the featured title scale for a balanced two-line mobile lockup.

### Pass 2

- Post-fix evidence: `qa-option2-comparison.png`, `qa-option2-desktop.png`, and `qa-option2-mobile.png`.
- No actionable P0, P1, or P2 visual differences remain.
- Intentional differences from the generated source: corrected 03/04 icon mapping, authentic iOS App icons, and the site's fixed navigation.

## Interaction and Runtime Checks

- Mobile drawer opened and closed correctly.
- Drawer navigation scrolled to 沿途所作 and restored the page state.
- Six product links and their target URLs were present in the rendered DOM.
- Fixed navigation remained visible at desktop and mobile widths.
- Desktop width: `scrollWidth 1424 = clientWidth 1424`.
- Mobile width: `scrollWidth 390 = clientWidth 390`.
- Browser console: no warnings or errors in the final desktop state.
- Production build passed.
- Sites worker tests: `5/5` passed.

## Findings

- No remaining P0, P1, or P2 findings.

## Open Questions

- None blocking.

## Implementation Checklist

- [x] Apply selected option 2 composition.
- [x] Use five real App icons with iOS-style rounded corners.
- [x] Correct App-to-product mapping.
- [x] Keep OneLaser as a full-width sixth feature with a light industrial-watercolor visual.
- [x] Verify desktop and mobile wrapping and overflow.
- [x] Verify build, interaction, console, and Sites runtime tests.

## Follow-up Polish

- P3: a future hover study could add a very subtle icon lift on pointer devices, but the current motion restraint better matches the calm editorial system.

final result: passed
