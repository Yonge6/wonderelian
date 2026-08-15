# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

Keep OneLaser grouped as one full-width featured commercial case study at the end of `沿途所作`, linking to `https://onelaser.wonderelian.com`; do not split its web, brochure, banner, and advertising assets into separate homepage projects.

The selected `沿途所作` layout is Product Design option 2: one large App module with four supporting App modules, followed by the full-width OneLaser case. Use the real App icons with large iOS-style rounded corners and preserve the fixed mapping: 一休=blue white meditation character, 人类图=dark eclipse planet, 三慢问道=teal gold river mark, 虾子曰=dark world-map flute-playing shrimp, 艺术风格图鉴=colorful mosaic shrimp.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
