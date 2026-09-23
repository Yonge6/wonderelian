# Publishing Field Notes

Each `notes/<slug>.json` is the single source for a complete bilingual article.
Keep `status: "published"`, a unique `order`, `topic` (`product`, `opc`, `life`),
the related published `slug`, and a relevant `product` (`yixiu`, `wendao`, `xiazi`).
Both `zh` and `en` must provide title, excerpt, label, read, back and content.
Original artwork lives in `public/assets/notes/`; do not overwrite supplied originals.

Content supports paragraphs, `## Chapter｜Title`, `### Subheading`, block quotes,
images, strong/emphasis, Markdown links and plain HTTP(S) URLs. Raw HTML is escaped.
`npm run build` validates translations and images, produces cached responsive WebP
variants, emits summaries and separate hashed article payloads, and generates both
language versions, canonical/alternate metadata, sitemap and llms.txt.

Do not edit `src/generated/`, `public/content/`, `public/assets/reading/`, sitemap
or the Field Notes section of llms.txt by hand. They are build outputs. Image caches
are pruned when no published article uses them.

To withdraw a note, mark it unpublished or remove its content file (Git preserves
history), add its slug and exclusively used original asset directories to
`publication.json`, and build. Never leave its complete body in a browser-side
array and filter it at runtime. Verify the old public route returns a real 404,
and that no old JS assets or unique artwork remain in the active release.

Before release: `npm run build && npm run test:sites && npm run test:content`.
Then check desktop/mobile and both languages, direct chapter/Notes anchors,
contact dialog keyboard flow, image rendering and public HTTP status after release.
