# HUG Design System — V1

**July 27, 2026.** Consolidates `HUG_DESIGN_SYSTEM_BRIEF_V1` (authoritative) over `HUG_VISUAL_SPEC_V2` and `INTERFACE_PRINCIPLES`, on Julian's approved wireframe architecture. Where this document is silent, V2 and the principles remain in effect.

Live comps: `HUG Design System.dc.html`. Stills: `exports/system/*.jpg`.

**Success condition, unchanged:** the Operator opens the app, sees everyone is okay, and puts the phone down. Under ten seconds.

---

## 0. What changed from V2

| | V2 | V1 system |
|---|---|---|
| Cream | a surface — full linen panels for transcripts and the surfaced ask | **a material** — borders, action text, hover, the voice line, and the one ask-drawer |
| Light mode | not defined | **defined** — same palette, inverted polarity |
| Icons | none ("a house doesn't label its doors with pictures") | **eight**, 1px, always paired with the word |
| Card density | one card treatment | **expanded / compressed**, with a stated threshold |
| Data | tabular-nums specified | **tested and confirmed in-family**; no mono companion |
| Outpost | in scope | **dropped** |

---

## 1. Color

### Dark — primary
| Token | Hex | Use |
|---|---|---|
| Pine | `#0E1611` | page |
| Sidebar / well | `#111A14` | sidebar, input wells, drawer ground |
| Surface | `#121C16` | panels |
| Card | `#16211A` | cards, tiles |
| Card quiet | `#131A14` | unavailable door, disabled gate |
| Raised | `#1A271F` | current room |
| Rule | `#1F2C23` | dividers, row rules, inner borders |
| Hairline | `#2A3A2E` | primary borders |
| Hairline warm | `#3E5242` | hover, focus, expanded card |
| Row hover | `#182219` | list hover |
| Nav hover | `#1C2921` | sidebar hover |

### Text on green
| Token | Hex | Ratio | Use |
|---|---|---|---|
| Bone | `#F4EEE2` | 15.9:1 | display, names |
| Linen | `#E8E0D0` | 13.8:1 | values, voice line |
| Sage | `#ABB6A4` | 7.4:1 | body |
| Ash | `#85937F` | 4.8:1 | labels — 15px minimum |
| Dim name | `#8A9488` | — | resting agent names |
| Moss quiet | `#5A6854` | 2.6:1 | non-text only |
| Label sage | `#9DA997` | — | panel small caps |

### Light — the inversion
| Token | Hex | Use |
|---|---|---|
| Linen | `#EFE7D8` | page |
| Paper | `#F5EFE3` | panels |
| Rule | `#DDD3C0` | dividers |
| Border | `#C3B79F` | secondary buttons |
| Ink | `#1B241D` | text, CTAs (13.1:1) |
| Ink soft | `#4A5A4B` / `#5B6A5B` | secondary (7.2:1) |
| Ink label | `#6B7A6B` / `#3E4C3F` | small caps |
| Pine | `#0E1611` | structural elements |

Same palette, flipped polarity. No third system, no grey mediator. Dark stays the default.

### Cream is a material
It appears as: borders and hairlines; the 2px current-room mark; outlined-button and nav labels; drawer titles; the one serif voice line; tabular data values; and **the surfaced-ask drawer** — the only cream plane in the product, present only while someone is asking. Never a card background, panel fill, or sidebar.

### Accent
| Token | Hex | Meaning |
|---|---|---|
| Hearth Amber | `#E2A45C` | **this needs you** — nothing borrows it |
| Amber ink | `#231708` | text on an amber fill |
| Amber on cream | dot `#B5793C`, label `#8A5B2A` | ASKING marker on the drawer |
| Ember label | `#B5793C` | BLOCKED — a gate, not an error |
| Warmth | `#7E9470` | awake; presence, not status |
| Rest | hollow 1px `#5A6854` | quiet hours or asleep |

Budget: **0% at rest**, ≈1.4% with one ask, **2% ceiling**. Consequence: ordinary primary actions are outlined (1px `#3E5242`, Linen). Only the button that answers an ask is filled. Focus carets are warmth green, never amber.

### Radius
4px containers, 3px inner tiles and rows, 10px toggle tracks, 50% dots. Borders and border-tint carry every state. No shadows, no gradients, no glow.

---

## 2. Typography

Alegreya (serif) — what the house *says*. Alegreya Sans — what it *knows*. Alegreya Sans SC — labels.

| Role | Family / size | Notes |
|---|---|---|
| Display | Alegreya 54px / 400, lh .98, −.015em | screen title; 38px on phone |
| Voice | Alegreya 26–30px / 400, lh 1.3 | the surfaced sentence; 22–24px on phone |
| Drawer title | Alegreya 29px / 400, lh 1.15 | drawer + half-sheet heads |
| Room / name | Sans 19–24px / 400–500 | nav, agent names |
| Body | Sans 17–18px / 400, lh 1.5 | roles, metadata |
| Data | Sans 17–19px, `tabular-nums` | percentages, durations, currency, times |
| Label | Sans SC 13px, .14em | section labels |
| Micro label | Sans SC 11–12px, .14em | in-card labels, state words |

**Serif is allowed** on: the screen title, the surfaced sentence, drawer titles, the wordmark. **Never** on lists, nav, roles, buttons, or data — and never twice on one screen.

**Data register — resolved.** Alegreya Sans tabular figures hold column alignment down to 15px; a mono companion would import a second voice for no legibility gain, so it stays out. Data is separated from prose by **weight and color** (values in Linen, labels in Sans SC Ash), not by family. If a future readout needs sub-15px columns, scope IBM Plex Mono to that value only.

Fonts: `Alegreya:400;500` · `Alegreya+Sans:400;500;700` · `Alegreya+Sans+SC:400;500;700`.

---

## 3. Icons — eight, and no more

1px stroke, 24×24 nav grid, 20×20 inline (stroke rises to 1.15 below 24), round caps and joins, `currentColor`. No fills except status dots.

**The set:** Home (roof) · Agents (two figures) · Launch (arrow out of a doorway) · Inbox (tray) · Library (archive box) · Admin (two sliders) · Expand (chevron; rotates 180° to collapse) · Status dots.

Tints: current `#F4EEE2` · resting `#85937F` · disabled `#5A6854`. **An icon never takes amber** — amber is a state, and states are carried by dots and answer buttons.

**The test:** if a glyph isn't legible at 20×20 in 1px stroke, it doesn't exist — use the word. That's why Launch, Inbox and Library have icons and Free Moment, Checkpoint and Wake Policy don't. Every nav icon is paired with its word: the icon is the landmark, the word is the address.

---

## 4. Components

**Buttons.** Outlined primary (1px `#3E5242`, Linen) · outlined secondary (1px `#2A3A2E`, Sage) · text tertiary (Ash) · **amber fill only to answer an ask** · disabled (1px `#1F2C23`, Moss quiet). 13px × 24px, 4px radius. Hover warms the border one step and lifts the label; the box never moves.

**Inputs.** Well `#111A14`, 1px `#2A3A2E`, 15px × 18px, 19px text. Focus warms the border to `#3E5242` and shows a 2px warmth-green caret. No ring, no shadow. Placeholders say what happens: "Say something to the house."

**Status — dot plus word, always together.** ACTIVE and IDLE (filled warmth) · QUIET HOURS and RESTING (hollow rest) · NEEDS YOU (filled amber) · BLOCKED (hollow `#B5793C`). A dot alone is decoration; a word alone is a log line. The wireframes' colored pills collapse into this — no pills anywhere in the system.

**Agent card, two densities.**
- *Expanded* — dot, name, state word, focus + runtime, pressure label with tabular percentage over a 4px bar, then a `#1F2C23` rule over CADENCE / NEXT / BUDGET.
- *Compressed* — dot, name, pressure bar, percentage, chevron. Nothing else.

**Threshold (defined):** ≤ 4 agents → expanded on wide (a row of three at 1440). > 4 agents → compressed on every viewport. < 900px wide → compressed regardless of count. Tap or chevron expands one card **in place**; others stay compressed. Never two expanded cards at once on phone.

**Capability gates.** On the agent detail view, never in settings. Each carries name, state, and *why* if restricted — "Paused until bridge rules are approved." On: card `#16211A`, 1px `#2A3A2E`, warmth knob right. Off/paused: `#131A14`, 1px `#1F2C23`, rest knob left, name and reason dimmed. A restricted gate that can't explain itself is a bug, not a setting.

**Escalation.** *Screen* — Home, Agents, Inbox, Launch, Library, Admin. *Drawer* — 452px from the right on wide, half-sheet from the bottom (grab handle, expandable to full) on phone; the screen behind stays lit, never dimmed to black, pushed back only by the drawer's own `#3E5242` border. *Modal* — irreversible only: checkpoint, archive, emergency disable, grant sensitive capability, WHEELS command mode.

**The three verbs.** Review · Approve · Defer, spoken: "Let me look" · "Yes" (the amber one) · "Not yet". Decisions, not compositions — the Operator is never asked to write in the Inbox.

---

## 5. The surfaced sentence

Alegreya serif, 26–30px, Linen, directly under the screen title. One per screen, never two. Composed from actual state, not templated with names dropped in. **If nothing is worth saying, the space stays empty — an empty sentence space means peace.**

- Home: "Soren is reading through receipts. Varro is in quiet hours. No one needs you right now."
- Inbox: "One of these is a decision. The rest are receipts."
- Agent detail: "He's been thinking about the visual spec for forty minutes."
- Launch: "Three doors are open. Two are still being built, and one of them can move a car."

---

## 6. Screens

**Home — "Where everyone is."** 262px sidebar (`#111A14`, six rooms, icon + word, current room `#1A271F` with a 2px Linen mark, Inbox count in amber when non-zero, Mock Mode note and a "Nothing needs you" line pinned at the foot). Content: label → display → sentence → three expanded agent cards → one Attention panel (dot, title, source, state word — no pills) → composer with outlined Send.

**Agents — "People and posture."** Compressed rows, one expanded **in place** with a `#3E5242` border: left half carries NEXT MOMENT / CADENCE / BUDGET tiles and the four verbs (Chat, Note, Free Moment, Checkpoint); right half carries the capability gates. Header offers Expanded / Compressed as an explicit density control.

**Inbox — "Attention queue."** Two-column: list plus a 452px drawer. Needs action / Deferred as outlined toggles. Rows carry a 2px amber left spine and a barely-warm `#1A1B14` ground **only** when they need you; resolved receipts dim to `#8A9488`. The drawer holds the ask on cream — ASKING marker, the serif sentence, SCOPE / AFFECTS / REVERSIBLE — then the requested scopes, then the three verbs with a note on what "Not yet" does.

**Launch — "Start or enter."** Doors grouped by cost: Start (Chat, Note, Free Moment) · Connect (EYES, WHEELS, Live Room) · Review (Receipts, Artifacts). Readiness is a small-caps word — READY, SCHEDULED, MOCK, PLANNED, DRAFT, "OFF — NEEDS GRANT" in ember. Unavailable doors sit on `#131A14` with dimmed names.

---

## 7. Responsiveness — the same house, a narrower window

Phone frames are 390 × 844; wide frames 1440 × 900.

- **Cards** — expanded on wide at ≤ 4 agents; compressed on phone, always.
- **Drawers** — from the right on wide; half-sheet from the bottom on phone, grab handle, expandable to full.
- **The sentence** — same size on both. Wide gives it more air, not more type.
- **Navigation** — sidebar rooms on wide; the same six as a bottom bar on phone, icon plus word, amber dot on Inbox when something needs you.
- **What never changes** — hierarchy, status language, color semantics, the three verbs.

---

## 8. Still open

Motion (a drawer *arrives*, it doesn't bounce) · the dark-to-light transition UX · a contrast audit of cream-on-green in light mode · the brand style guide fork.
