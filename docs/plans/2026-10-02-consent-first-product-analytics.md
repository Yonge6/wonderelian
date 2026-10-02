# WonderElian consent-first product analytics

## Goal

Measure how people use the WonderElian website while keeping the same privacy boundary already used by Yixiu and Style Atlas. The result must feed the existing OPS `User Activity` view instead of creating a second dashboard.

## Product boundary

- Collection is off by default and starts only after a visitor explicitly enables usage statistics.
- The visitor can withdraw consent at any time. Withdrawal updates Google consent state and stops new product events.
- Do not collect names, contact values, article text, search text, audio, notes, precise location, advertising identifiers, or cross-product identity.
- Exclude localhost, previews, automated browsers, and non-production hosts.
- Preserve older aggregate website traffic as a separate legacy baseline. Do not relabel it as consented product usage.

## Event contract

All new events use the `wonder_v1_` prefix and a small allowlist of parameters.

| Area | Events | Evidence represented |
| --- | --- | --- |
| Audience | `visit`, `active_time` | Consenting visit and foreground active seconds excluding long inactivity |
| Reading | `article_view`, `article_reading_time`, `reading_progress` | Article opens, foreground reading seconds, and milestone reached |
| Discovery | `section_view`, `note_open`, `project_open`, `load_more` | Homepage section exposure and explicit navigation actions |
| Product controls | `language_switch`, `audio_start`, `audio_listen_time`, `audio_error`, `contact_click` | Language, ambient-audio and contact actions |

`content_id`, `section_id`, `product_id`, `placement`, `language`, `progress` and numeric `value` are the only contextual fields. IDs are derived from controlled routes or element attributes; query strings and user-entered text are never sent.

## User interface

Add a bilingual usage-statistics control to the existing footer. It is a plain text control so it fits the established visual language. The adjacent description says that statistics are optional, contain no personal content, and can be disabled at any time. The privacy page repeats the same disclosure.

## Verification

- Unit tests cover default-off behavior, explicit opt-in, withdrawal persistence, safe parameter filtering, production-host gating, foreground timing and no raw user content.
- Browser QA checks the control in Chinese and English, consent persistence and no horizontal overflow on mobile.
- Production verification reads the public script and privacy copy from `wonderelian.com` after the atomic release.
- GA4 processing can be delayed. Deployment is complete when the event pipeline and dashboard query are verified; an empty processed report stays `waiting_for_events`, never zero usage.
