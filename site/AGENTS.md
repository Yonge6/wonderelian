# Prototype Instructions

October 2, 2026 analytics boundary: WonderElian usage statistics are optional and off by default. Collect only allowlisted content IDs, action outcomes and foreground duration after explicit consent; never collect article text, contact values, audio or private input. Keep historic aggregate traffic separate from the `wonder_v1_*` product event schema, and expose a persistent bilingual consent control in the footer.

September 27, 2026 copy refinement: keep the Notes section heading concise enough to remain one line on a 390px phone. Use “写下此刻。” in Chinese and “Notes for now.” in English. Do not show a separate “更多随记 / More Notes” label between the featured note and the connected archive list.

September 27, 2026 refinement: keep the three hero actions visually equal and understated. Present them as three unframed text actions with consistent typography and spacing; do not wrap them in a shared panel, add row borders, or promote one action with a filled treatment. Use a subtle staggered arrow nudge to invite clicks, with long pauses and `prefers-reduced-motion` support. Article-body figures use square image corners at every breakpoint, while homepage cards and other interface surfaces keep their established radii.

September 23, 2026 refinement: keep the full-width site header, hero (`#world`) and About section (`#about`) square. Their containers must not get border radii at any breakpoint. Internal cards, buttons, image frames and dialogs retain the rounded treatment.

About actions “联系 Elian” and “沿途所作” are plain text with arrows, without a rectangular/pill border. Preserve their interactive behavior and keyboard focus indication.

Notes archive arrows have no circular background; retain the standalone arrow within each rounded card.

Treat the Notes archive as one rounded outer module with connected article rows and thin internal dividers. Do not round every archived row or leave gaps between rows. Show each cover as a compact thumbnail, and keep mobile rows short by omitting the excerpt while preserving topic, title, date and reading time.

“查看公开运营快照” and the featured essay’s “阅读全文” are also plain text-and-arrow actions without pill/rectangular frames.

September 23, 2026 follow-up: the user wants all interface corners soft and rounded, “圆润 如水”. Use the shared responsive radius tokens for cards, images, buttons, drawers and dialogs. Portfolio content and arrangement remain unchanged; rounded frames and spacing now apply there too. Remove the secondary Notes introduction in both languages; keep the Notes title.

September 23, 2026: the user explicitly deferred the portfolio/case-study improvement. Preserve the current works layout, project copy and artwork while implementing the reading, navigation, contact, localization and publishing improvements. Do not apply older layout proposals to this scope.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

Keep OneLaser grouped as one full-width featured commercial case study at the end of `沿途所作`, linking to `https://onelaser.wonderelian.com`; do not split its web, brochure, banner, and advertising assets into separate homepage projects.

The selected `沿途所作` layout is Product Design option 2: one large App module with four supporting App modules, followed by the full-width OneLaser case. Use the real App icons with large iOS-style rounded corners and preserve the fixed mapping: 一休=blue white meditation character, 人类图=dark eclipse planet, 三慢问道=teal gold river mark, 虾子曰=dark world-map flute-playing shrimp, 艺术风格图鉴=colorful mosaic shrimp.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

The approved September 10, 2026 positioning is distributed across the existing homepage: a concise design/product/AI capability statement in the hero, project descriptions that demonstrate it, and a three-paragraph About story with the inward/water philosophy as its closing signature. Keep the watercolor visual direction and existing section order. Share bilingual profile copy between the homepage, About drawer, and crawlable homepage; do not add a separate seven-strengths panel.

October 1, 2026: the user explicitly approved refreshing project 02 to 不二见己 / Buer Within at https://buer.wonderelian.com/. Use its approved Doudoulong App icon and AI growth companion positioning in both languages. This supersedes the older dark eclipse icon mapping and deferred-copy restriction for project 02 only; preserve the portfolio layout and other projects.
