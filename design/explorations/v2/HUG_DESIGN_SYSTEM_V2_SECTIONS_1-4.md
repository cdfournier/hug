# HUG Design System — Sections 1–4, V2

**July 28, 2026.** Amends `HUG_DESIGN_SYSTEM_V1` per `HUG_Design_System_Brief_V2`. Covers **Color, Typography, Icons, Components** only. Sections 0 and 5–8 of V1 stand unchanged. Where this document is silent, V1 holds.

**Success condition, unchanged:** the Operator opens the app, sees everyone is okay, and puts the phone down. Under ten seconds.

---

## 0. The constraint this round adds

**Native app in a web frame.** HUG will ship on the web for some time. It must not read as a website. Surfaces show what matters *now*; everything else is one gesture away.

Drawers, trays, half-sheets and modals are **trust expressions, not compromises.** Withholding the pressure percentage until the Operator comes looking is the product saying *I've got this.*

> **The purest state is the minimum surface that lets the Operator know everyone is okay.**

Applied as a test, not a mood: *if a component exists only because a website would show it, it does not exist here.* This governs every component in Section 4 and every screen in Sections 5–6.

### What changed from V1

| | V1 | V2 |
|---|---|---|
| Pine system | final | **confirmed, not closed** — coffee/warm-earth exercise runs in parallel |
| Families | three (serif, sans, sans SC) | **four** — IBM Plex Mono joins as the data register |
| Data separation | weight and color, in-family | **family** — mono marks "what it measured" |
| Compressed card | dot, name, pressure bar, percentage, chevron | **dot, name, state, surfaced sentence** — no numbers |
| Expanded card | metrics, bar, CADENCE / NEXT / BUDGET | **language** — recent activity, current context, actions |
| Metrics & maintenance | on the card | **deep drawer** — pressure, cadence, budget, memory, checkpoints |
| Depth | screen · drawer · modal | **surface · first drawer · deep drawer**, each earned |

---

## 1. Color — confirmed, one thread open

**Pine green is confirmed.** The gradient from `#0E1611` through `#1A271F` is the right material. No change to the dark palette, the light inversion, the cream-as-material rule, or the amber budget.

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
| Hairline warm | `#3E5242` | hover, focus, expanded card, drawer border |
| Row hover | `#182219` | list hover |
| Nav hover | `#1C2921` | sidebar hover |

### Text on green
| Token | Hex | Ratio | Use |
|---|---|---|---|
| Bone | `#F4EEE2` | 15.9:1 | display, names |
| Linen | `#E8E0D0` | 13.8:1 | voice line, **mono measurements** |
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
Borders and hairlines; the 2px current-room mark; outlined-button and nav labels; drawer titles; the one serif voice line; **mono measurements inside a drawer**; and the surfaced-ask drawer — the only cream plane in the product, present only while someone is asking. Never a card background, panel fill, or sidebar.

Note the shift: cream no longer carries data on the *surface*, because the surface no longer carries data. Where a measurement appears, it appears in a drawer, in mono, in Linen.

### Accent
| Token | Hex | Meaning |
|---|---|---|
| Hearth Amber | `#E2A45C` | **this needs you** — nothing borrows it |
| Amber ink | `#231708` | text on an amber fill |
| Amber on cream | dot `#B5793C`, label `#8A5B2A` | ASKING marker on the drawer |
| Ember label | `#B5793C` | BLOCKED — a gate, not an error |
| Warmth | `#7E9470` | awake; presence, not status |
| Rest | hollow 1px `#5A6854` | quiet hours or asleep |

Budget: **0% at rest**, ≈1.4% with one ask, **2% ceiling**. Consequence: ordinary primary actions are outlined (1px `#3E5242`, Linen). Only the button that answers an ask is filled. Focus carets are warmth green, never amber. Amber never appears on a measurement — a number is not an alarm.

### Radius
4px containers, 3px inner tiles and rows, 10px toggle tracks, 50% dots. Borders and border-tint carry every state. No shadows, no gradients, no glow.

### Open thread — coffee / warm earth
A warm-earth palette exercise runs as a **parallel exploration, not a replacement.** Until it completes, pine is the working system but is not written as final. If coffee tones earn a place, they enter in a specific register — warmth states, presence indicators — and do not touch the surface stack. No token in this section is reserved for them yet.

---

## 2. Typography — four families

Alegreya (serif) — what the house *says*. Alegreya Sans — what it *knows*. Alegreya Sans SC — labels. **IBM Plex Mono — what it *measured*.**

| Role | Family / size | Notes |
|---|---|---|
| Display | Alegreya 54px / 400, lh .98, −.015em | screen title; 38px on phone |
| Voice | Alegreya 26–30px / 400, lh 1.3 | the surfaced sentence; 22–24px on phone |
| Drawer title | Alegreya 29px / 400, lh 1.15 | drawer + half-sheet heads |
| Room / name | Sans 19–24px / 400–500 | nav, agent names |
| Body | Sans 17–18px / 400, lh 1.5 | roles, prose, activity summaries |
| Label | Sans SC 13px, .14em | section labels |
| Micro label | Sans SC 11–12px, .14em | in-drawer labels, state words |
| **Measurement** | **Mono 15–17px / 400, lh 1.4, −.01em** | **percentages, timestamps, durations, counts, currency** |
| **Measurement, small** | **Mono 13px / 400, .01em** | **dense drawer columns, receipt IDs, checkpoint stamps** |

**The register argument.** V1 resolved this in-family on the grounds that Alegreya Sans tabular figures hold column alignment. They do — but alignment was never the question. A percentage is not prose that happens to contain a number; it is a *measurement*, and it should read as one. Mono makes that a register shift, the same way serif marks the house's voice against sans for its knowledge.

**Mono is allowed** on: percentages, ratios, timestamps and dates, durations, counts, currency, IDs, version and checkpoint stamps.

**Mono is never** used for: prose, names, roles, nav, labels (Sans SC owns those), button text, the surfaced sentence, or a number written inside a sentence. *"He's been thinking about the visual spec for forty minutes"* stays serif and stays spelled out — a sentence is voice, not readout.

**Where mono appears.** Almost nowhere on a surface. Because measurements now live in drawers (§4), mono is predominantly a **drawer and tray face**. If mono is visible on the home screen, something has leaked out of a drawer.

**Serif** is allowed on: the screen title, the surfaced sentence, drawer titles, the wordmark. Never on lists, nav, roles, buttons, or data — and never twice on one screen.

Fonts: `Alegreya:400;500` · `Alegreya+Sans:400;500;700` · `Alegreya+Sans+SC:400;500;700` · `IBM+Plex+Mono:400;500`. Weight 500 in mono only for a value that is the subject of its own drawer; never for emphasis in a column.

---

## 3. Icons — eight, and no more

Unchanged from V1.

1px stroke, 24×24 nav grid, 20×20 inline (stroke rises to 1.15 below 24), round caps and joins, `currentColor`. No fills except status dots.

**The set:** Home (roof) · Agents (two figures) · Launch (arrow out of a doorway) · Inbox (tray) · Library (archive box) · Admin (two sliders) · Expand (chevron; rotates 180° to collapse) · Status dots.

Tints: current `#F4EEE2` · resting `#85937F` · disabled `#5A6854`. **An icon never takes amber.**

**The test:** if a glyph isn't legible at 20×20 in 1px stroke, it doesn't exist — use the word. Every nav icon is paired with its word: the icon is the landmark, the word is the address.

---

## 4. Components

### 4.0 The law of depth

Three depths, and every data element must earn the one it sits at.

| Depth | Question it answers | What lives there |
|---|---|---|
| **Surface** | Is everyone okay? | presence, name, state, the surfaced sentence |
| **First drawer** | What's going on with him? | recent activity in language, current context, actions |
| **Deep drawer** | Let me tune this. | pressure, cadence, budget, memory, checkpoints |

Surface is for trust. First drawer is for curiosity. Deep drawer is for maintenance. A measurement on the surface is a bug.

### 4.1 Agent card — compressed (the default)

The compressed card answers *is he okay?* with **warmth, state, and the sentence** — never with a number.

```
● Soren                                    ⌄
  ACTIVE
  He's been reading through receipts for a while.
```

- Status dot — warmth `#7E9470` filled (alive / thinking), hollow rest `#5A6854` (quiet hours / asleep), amber `#E2A45C` filled (needs you).
- Name — Sans 21px / 500, Bone. Dim name `#8A9488` when resting.
- State word — Sans SC 11px, .14em, Ash. Dot and word always together.
- **Surfaced sentence, when one exists** — Sans 17px, lh 1.5, Sage. One line, ellipsized at two.
- Chevron — Expand icon, `#85937F`, right-aligned to the card's optical top line.

**Removed from this surface, permanently:** pressure percentage, pressure bar, CADENCE / NEXT / BUDGET tiles, and any element that asks the Operator to interpret a measurement.

**When there is no sentence, the space stays empty.** Empty means peace. The card does not backfill with a timestamp, a metric, or "nothing to report." Card height shrinks to name + state.

Card: `#16211A`, 1px `#2A3A2E`, 4px radius, 18px × 20px. Hover warms the border to `#3E5242`; nothing moves.

### 4.2 Agent card — expanded (opening a drawer)

Expanding adds the detail the Operator came looking for. It does not dump what the system knows. It should feel like a drawer sliding open in the same piece of furniture — same ground, warmed border, no new panel, no control panel.

**Contents, in order:**
1. **Header** — dot, name, state word (persist from compressed, unmoved).
2. **The sentence** — persists, unchanged, same position. It never gets replaced by the expansion.
3. **Current context** — one line, Sans 17px Sage: what he's doing, or last did. Language, not fields. *"Reading receipts from the Tuesday session."*
4. **Recent activity** — two to four lines, Sans 17px Sage, each a plain sentence with a relative time in words. *"Left a note about the bridge rules this morning."* No table, no bullets with counts, no sparkline.
5. **Actions** — three outlined affordances: **Message · Check in · History**. 13px Sans, 1px `#3E5242`, Linen. Flex row, 10px gap.
6. **One quiet way down** — a text-tertiary link, Ash, Sans SC 11px: **MAINTENANCE**. It is the only door to the deep drawer and it is deliberately unremarkable.

Expanded card: `#16211A` ground, 1px `#3E5242`, 4px radius. A single `#1F2C23` rule sits above the action row. No second rule, no tiles, no bar.

**Density rules, unchanged from V1:** ≤ 4 agents → expanded permitted on wide (a row of three at 1440). > 4 agents → compressed on every viewport. < 900px → compressed regardless of count. Tap or chevron expands one card **in place**; others stay compressed. Never two expanded cards at once on phone.

### 4.3 Deep drawer — maintenance

Reached only from MAINTENANCE on an expanded card. 452px from the right on wide; half-sheet from the bottom with a grab handle, expandable to full, on phone. The screen behind stays lit — pushed back by the drawer's `#3E5242` border, never dimmed to black.

Ground `#111A14`. Title in Alegreya 29px (the screen title's serif is suppressed while a drawer title is present — serif never twice). Sections separated by `#1F2C23` rules, each headed in Sans SC 13px Ash.

| Section | Contents | Type |
|---|---|---|
| PRESSURE | percentage, 4px bar, last compaction stamp | Mono 17px Linen; bar `#7E9470` on `#1F2C23` |
| CADENCE | interval, next moment, quiet hours window | Mono 15px Linen, labels Sans SC Ash |
| BUDGET | spend, ceiling, window | Mono 15px Linen |
| MEMORY | checkpoint list — stamp, size, label | Mono 13px, name in Sans 17px |
| ACTIONS | Free Moment · Checkpoint · Wake Policy | outlined, word-only (no icons — they fail the 20×20 test) |

This is the only place in the product where several measurements sit together, and that is the point: the Operator arrived here on purpose. Checkpoint and archive still escalate to a modal — irreversible actions do not live in a drawer.

### 4.4 The surfaced sentence

No changes. Alegreya serif, 26–30px, Linen, directly under the screen title. One per screen, never two. Composed from actual state, never templated. **If nothing is worth saying, the space stays empty — an empty sentence space means peace.** Protect at all costs.

Note the promotion: the sentence is now the compressed card's primary content as well as the screen's. Same voice at two scales — 26–30px serif at screen level, 17px sans at card level. It never becomes a metric at either.

### 4.5 Status — dot plus word, always together

ACTIVE and IDLE (filled warmth) · QUIET HOURS and RESTING (hollow rest) · NEEDS YOU (filled amber) · BLOCKED (hollow `#B5793C`). A dot alone is decoration; a word alone is a log line. No pills anywhere in the system.

### 4.6 Buttons

Outlined primary (1px `#3E5242`, Linen) · outlined secondary (1px `#2A3A2E`, Sage) · text tertiary (Ash) · **amber fill only to answer an ask** · disabled (1px `#1F2C23`, Moss quiet). 13px × 24px, 4px radius. Hover warms the border one step and lifts the label; the box never moves.

Added by the constraint: a button never carries a count or a badge. If the Operator needs to know how many, the sentence says so.

### 4.7 Inputs

Well `#111A14`, 1px `#2A3A2E`, 15px × 18px, 19px text. Focus warms the border to `#3E5242` and shows a 2px warmth-green caret. No ring, no shadow. Placeholders say what happens: "Say something to the house." Character counters, help text, and validation hints appear only after a rule is broken.

### 4.8 Capability gates

On the agent detail view, never in settings. Each carries name, state, and *why* if restricted — "Paused until bridge rules are approved." On: card `#16211A`, 1px `#2A3A2E`, warmth knob right. Off/paused: `#131A14`, 1px `#1F2C23`, rest knob left, name and reason dimmed. A restricted gate that can't explain itself is a bug, not a setting.

### 4.9 Escalation

*Screen* — Home, Agents, Inbox, Launch, Library, Admin. *First drawer* — the expanded card, in place. *Deep drawer* — 452px right on wide, half-sheet on phone; maintenance and measurement. *Modal* — irreversible only: checkpoint, archive, emergency disable, grant sensitive capability, WHEELS command mode.

Each step down is the Operator's choice. Nothing opens itself.

### 4.10 The three verbs

Review · Approve · Defer, spoken: "Let me look" · "Yes" (the amber one) · "Not yet". Decisions, not compositions — the Operator is never asked to write in the Inbox.

---

## Carried forward, unresolved

From V1 §8: motion (a drawer *arrives*, it doesn't bounce) · the dark-to-light transition UX · a contrast audit of cream-on-green in light mode · the brand style guide fork.

Added this round: the coffee / warm-earth palette exercise · a product-language pass on "compaction" and "checkpoint," which currently sit in the deep drawer in mono and read like infrastructure · screen-level application of the purest-state rule to Home, Agents, Inbox and Launch, which is the next pass.