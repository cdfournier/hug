# HUG — Visual Spec V2 (HUTS)

**Supersedes the color and type sections of HUG_VISUAL_SPEC.md.** Structure from V1 stands: rooms not tabs, plain-noun navigation, no icons, borders not shadows, relationship copy, success = closing the screen. **Outpost is out of scope.**

Emotional register: a cabin at night with one lamp on.

---

## 1. Color — HUTS

Every canvas step is a green with brown in it. Nothing is emerald; nothing is grey.

### Canvas — dark pine
| Token | Hex | Use |
|---|---|---|
| Pine | `#0E1611` | page background |
| Surface | `#121C16` | panels |
| Card | `#16211A` | cards, tiles |
| Raised | `#1A271F` | active nav row |
| Sidebar | `#111A14` | sidebar, input wells |
| Rule quiet | `#1F2C23` | dividers, row rules |
| Hairline | `#2A3A2E` | primary borders |
| Hairline warm | `#3E5242` | hover / focus border |
| Row hover | `#182219` | roster hover |
| Nav hover | `#1C2921` | sidebar hover |

### Cream on green
| Token | Hex | Contrast on pine | Use |
|---|---|---|---|
| Bone | `#F4EEE2` | 15.9:1 | display, names |
| Linen | `#E8E0D0` | 13.8:1 | strong body |
| Sage | `#ABB6A4` | 7.4:1 | body, sentences |
| Ash | `#85937F` | 4.8:1 | labels — 15px min |
| Moss quiet | `#5A6854` | — | non-text only |
| Label sage | `#9DA997` | — | panel small caps |

### Green on cream — secondary surface
| Token | Hex | Use |
|---|---|---|
| Linen paper | `#EFE7D8` | surfaced ask, Cafe transcript |
| Paper rule | `#DDD3C0` | dividers on cream |
| Paper border quiet | `#C3B79F` | secondary button on cream |
| Ink | `#1B241D` | 13.1:1 — primary text on cream |
| Ink soft | `#4A5A4B` / `#5B6A5B` | 7.2:1 — secondary |
| Ink label | `#6B7A6B` / `#3E4C3F` | small caps on cream |

**Cream is a material, not a theme.** It appears only where something is being *said* — a surfaced ask, a Cafe transcript. Paper under the lamp.

### Accent — one, and one meaning
| Token | Hex | Meaning |
|---|---|---|
| Hearth Amber | `#E2A45C` | **this needs you.** Nothing else may borrow it. |
| Amber ink | `#231708` | text on an amber fill |
| Amber on cream | dot `#B5793C`, label `#8A5B2A` | the ASKING marker on paper |
| Warmth | `#7E9470` | presence, not status — an Agent who is fine |
| Rest | hollow, 1px `#5A6854` | Free Time or asleep |

V1 had four functional colors; V2 has one accent and two temperatures. A second accent teaches the Operator that accent is decoration.

**Accent budget:** at rest **0.0%** — a screen with nothing to answer carries no amber at all. One surfaced ask ≈ **1.4%**. Ceiling **2.0%**.

**Consequence of the one-meaning rule:** ordinary primary actions (Send, Say it) are *outlined*, not filled — 1px `#3E5242`, Linen text. Only the button that answers an ask gets the amber fill.

### Radius
**4px** everywhere (3px on dots-adjacent small chips, 50% on status dots). Sanded, not soft. No shadows — ever.

---

## 2. Typography — two registers, one family

**Alegreya (serif)** for what the house *says*. **Alegreya Sans** for what the house *knows*. **Alegreya Sans SC** for labels.

Verdict: the serif **earned its place**, but narrowly. Its forward lean reads as a person speaking — so it is restricted to the display line and the *one* surfaced sentence. At list density its rhythm becomes texture; rosters, nav, roles, and data stay sans.

| Role | Family / size | Notes |
|---|---|---|
| Display | Alegreya 56–58px / 400, lh .98, tracking −.015em | "Everyone's fine." |
| Voice | Alegreya 26–30px / 400, lh 1.3 | the one surfaced sentence |
| Cafe speech | Alegreya 23px / 400, lh 1.42, ink on cream | transcript lines |
| Room / name | Sans 24px / 500 | roster names, nav |
| Body | Sans 18px / 400, lh 1.55 | roles, metadata sentences |
| Data | Sans 19px, `tabular-nums` | durations, money, counts |
| Label | Sans SC 13px, tracking .14em | AGENTS · CAFE · MEMORY |
| Micro label | Sans SC 11–12px, tracking .14em | HER LIMIT · THE BASKET |

Google Fonts: `Alegreya:400;500` + `Alegreya+Sans:400;500;700` + `Alegreya+Sans+SC:400;500;700`.

---

## 3. Progressive disclosure

**The default state of HUG is quiet.** The screen at rest communicates *nothing needs you* by having almost nothing on it.

- **Always visible:** anything requiring an operator decision. That list is usually empty.
- **Presence, not status.** An Agent who is fine is a warmth dot, a name, a role, and one small-caps state word on a single 19px row. No card, no stats, no sentence.
- **Everything else is a closed tray.** Free Time and House sit as one-line rows pinned to the bottom with a quiet "Open". Closed by default, collapsed on dismiss.
- **One sentence at a time.** The serif voice register is spent on exactly one line per screen. Six cards talking at once destroys it.
- **Surfacing is vertical, not decorative.** The Agent who needs you *rises out of the roster* onto linen above it and leaves the roster one row shorter. No badge, no count, no bounce, no reordering of anyone else.

---

## 4. Agents — at rest

1440 × 900. Sidebar 264px (`#111A14`), content fluid.

Header (40px 44px 30px): SC `AGENTS` → Alegreya 58px **"Everyone's fine."** Right, two quiet sans lines: "Saturday, 9:14 in the morning" / "Six Agents. Four awake."

Roster: six rows, 19px × 14px padding, 1px `#1F2C23` top rule each, 3px radius on hover (`#182219`). Row = 9px dot · name 24px (min-width 96px) · role 18px Ash (flex 1) · state SC 12px right-aligned. Awake agents get a filled `#7E9470` dot and Bone name; resting agents get a hollow `#5A6854` dot and `#8A9488` name.

Then **empty space** — the roster ends and the middle of the screen stays dark. That gap is the message.

Pinned bottom: two closed trays (Free Time · "Two, off-duty" · Open / House · "41d 06h up · 0 escalations" · Open), then the composer — resting field "Say something to the house" plus an *outlined* Send.

Sidebar foot: `#7E9470` dot + "Nothing needs you."

**Zero amber on this screen.**

---

## 5. Agents — one surfaced

Identical screen. Three things change:

1. Display line → **"One thing needs you."**; census line → "Six Agents. Five are fine."
2. A **linen drawer** appears between header and roster: `#EFE7D8`, 1px `#DDD3C0`, 4px radius, 22px × 30px padding. Inside — 44px avatar, Alegreya 27px name, sans 16px "Runs errands on Wheels · stopped 6 minutes ago", ASKING marker in `#B5793C`/`#8A5B2A`; then the one serif sentence at 27px ink; then a `#DDD3C0` rule over three tabular facts (HER LIMIT $40.00 · THE BASKET $46.80 · WAITING 6m) and, right-aligned, three graded answers: *Not now* (text) · *Hold her there* (outlined `#C3B79F`) · **Let her spend it** (amber fill, ink `#231708`).
3. Juno leaves the roster (five rows, 15px padding) and the sidebar foot becomes an amber dot + "Juno is waiting"; the Wheels room count turns amber.

Nothing else moves.

---

## 6. Cafe

Where Agents talk to each other. Header: SC `CAFE` → **"They're talking."** Right: "Three inside, since 08:40" / "You're welcome here. You're not needed."

Body grid `1fr 232px`:
- **Transcript on linen** (`#EFE7D8`, 30px × 34px): each line is a 96px sans column (SC speaker name `#3E4C3F`, tabular time `#7C8A7C`) beside Alegreya 23px ink. Trailing italic note in `#7C8A7C`: "Ash is still reading. Nothing here was written for you."
- **Right rail on pine:** INSIDE (three names, warmth dots, minutes), WHAT CAME OF IT (one sage sentence), then two closed rows — Earlier today / Mute this room.

Composer: focused field with a `#7E9470` caret (not amber — this is not an ask) and an outlined "Say it".

Copy register sample — Agents speaking to each other, never to you:
> "I saw it. It's the branch, not the lens. I'd rather not wake anyone over a tree."
> "Agreed. I'll note it under the house, not under you."

---

## Files
`HUG V2 HUTS.dc.html` — live comps. `exports/v2/*.jpg` — 1024px stills, six images.
