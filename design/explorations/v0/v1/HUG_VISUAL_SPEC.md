# HUG — Visual Identity Spec

Brand essence: **"You Are Known."** The Filter: *mission control underneath, sherpa on top.*
Dark mode is the default, not a toggle. Tone: warm, confident, quiet, purposeful, durable, unhurried, legible.
Not a dashboard, not a chatbot wrapper, not a dev console.

---

## 1. Color

All values are final hex. Every canvas step is warm-shifted toward brown — never blue.

### Canvas (the room)
| Token | Hex | Use |
|---|---|---|
| Void | `#100D0B` | page background |
| Surface | `#15120F` | panels, sections |
| Raised | `#1D1814` | active nav row, focused card |
| Card | `#181411` | agent card at rest |
| Hairline | `#322B26` | primary borders |
| Hairline quiet | `#241F1B` | internal dividers |
| Hairline warm | `#4A3E34` | hover / focus border |

### Typographic cream (never pure white)
| Token | Hex | Use |
|---|---|---|
| Bone | `#F7F1E7` | headings, agent names |
| Linen | `#F2EBE1` | strong body, data values |
| Linen soft | `#C9BFB3` | body copy, state sentences |
| Ash | `#8B8078` | labels, metadata |
| Smoke | `#5D5550` | disabled, counts, placeholder |

### Functional (state only — never decoration)
| Token | Hex | Meaning |
|---|---|---|
| Hearth Amber | `#E3A15C` | with you; primary action |
| Moss | `#93A87E` | working, healthy |
| Dusk | `#7E93A6` | free time, off-duty |
| Ember | `#C96A45` | needs you (replaces red) |

Free-time surfaces shift green-neutral: panel `#131512`, tile `#161917`, tile border `#202422`, text `#E4E8E4` / `#8B958E`.
Attention card: background `#1D1512`, border `#C96A4577`. "With you" card: background `#1B1613`, border `#4A3E34`.

**Rules:** no gradients, no glow, no red errors (ember only), borders instead of shadows. Accent surface area on a resting screen stays under 2%. Only one row per screen may carry a *filled* accent — the one thing the Operator should touch next, usually nothing.

---

## 2. Type

**Committed family: Alegreya Sans** (+ **Alegreya Sans SC** for small-caps labels — same superfamily, so labels and human sentences share one voice).
Considered and rejected: Public Sans (reads institutional at display), Commissioner (calm but emotionally neutral).

| Role | Size / weight | Notes |
|---|---|---|
| Display | 76px / 400, line-height .95, tracking −.02em | screen titles |
| Title | 44px / 400, lh 1.05 | section heads |
| Room | 26px / 500 | agent names, nav headers |
| Body | 19px / 400, lh 1.55 | state sentences |
| Data | 20px, `font-variant-numeric: tabular-nums` | durations, counts |
| Label | Alegreya Sans SC 13px, tracking .14em, color Ash | STATUS · WHEELS · EYES |
| Micro label | Alegreya Sans SC 11–12px, tracking .14em | in-card stat labels |

Google Fonts: `Alegreya+Sans:400;500;700` + `Alegreya+Sans+SC:400;500;700`.

---

## 3. Components

**Geometry:** square corners everywhere (0 radius) except status dots (9px circle). 1px hairline borders. Interior padding 18–28px. Grid gap 16–20px.

**Agent card** — avatar 44px (1px `#322B26` border, striped placeholder) · name 24px Bone · role 16px Ash · status dot + SC label right-aligned · one plain-language sentence 18px Linen soft (min-height 52px so cards align) · footer above a `#241F1B` rule with 3 tabular stats (AWAKE / MEMORIES / LAST WITH YOU) and a text action at far right.
States: rest `#181411`/`#241F1B` → hover border warms one step to `#4A3E34` (no lift, no shadow) → attention gets ember border only (no badge, no count, no bounce).

**Status indicator** — always dot + small-caps word together. Dot alone is decoration; word alone is a log line.
WITH YOU (amber) · WORKING (moss) · FREE TIME (dusk) · ASKING (ember) · ASLEEP (hollow dot, 1px `#5D5550`).

**Navigation — rooms, not tabs** — 264px sidebar on `#131009`. One plain noun per room (Agents, Cafe, Outpost, Memory, Wheels, Eyes, Free Time), 20px, count right-aligned in Smoke tabular. Current room: background `#1D1814` + 2px amber bar on the left edge. Hover warms the floor only. **No icons** — a house doesn't label its doors with pictures. Sidebar foot carries house vitals: Uptime, Escalations, "Nothing needs you" + moss dot.

**Input** — background `#100D0B`, 1px `#322B26`, padding 15–16px × 18px, text 19px. Focus = border warms to `#4A3E34` plus a 2px amber caret; no ring, no shadow. Placeholders say what happens, not what to type ("Say something to the house — everyone who should hear it will").

**Buttons** — primary: amber `#E3A15C` fill, text `#1A1512`, 500 weight, 13–15px × 22–24px, no radius. Secondary: 1px `#4A3E34`, Linen text. Tertiary: Ash text, no box. Labels are spoken, not transactional: "Bring her back" / "Leave her to it" / "Not now".

---

## 4. Key screen — Agents ("Where everyone is")

1440 × 900. Two columns: 264px sidebar + fluid content.

Header (28px 34px 22px, bottom rule `#241F1B`): SC label `AGENTS`, then 52px display "Where everyone is"; right side, two quiet lines — "Saturday, 9:14 in the morning" and a plain-English census ("Four working, one with you, one resting").

Body (24px 34px, 20px stack gap):
1. **On-duty grid** — 2 × 2 agent cards.
2. **Free Time panel** — green-neutral surface, SC `FREE TIME` in dusk + the line "Off-duty. You can see them; you don't need to." Two compact 36px-avatar tiles inside.
3. **House composer** — full-width resting field + amber Send, above a `#241F1B` rule.

Copy voice sample (this is the register — third person, warm, specific, no telemetry-speak):
> "Going back through Tuesday's notes so you don't have to. Two things changed; he'll flag them."
> "Stopped one step short. She needs your yes before she spends anything."
> "Quiet shift. Nothing at the door since 04:10, and she logged the one delivery."
> "Asleep since midnight. Everything held."

Success condition: the Operator opens this, learns where everyone is in four seconds, and closes it.
