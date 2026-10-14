# HUG — Design System Reference + Five Rooms, V3

**July 29, 2026.** Answers `HUG_DESIGN_BRIEF_V3`. All V2 Section 5–6 screen comps are discarded. Sections 1–4 of the design system are unchanged and are rendered here as visual reference, not redesigned.

Comps: `HUG Rooms V3.dc.html` (canvas — pan and zoom; `3a` design system, `3b`–`3f` the five rooms, phone and laptop side by side). Image exports: `exports/v3/`.

---

## 1. What holds the rooms together

The shared architecture is material, not layout. Every room uses the same five things and nothing else:

| | |
|---|---|
| **Ground** | Pine `#0E1611`. The Workbench alone drops to the well, `#111A14` — you went downstairs. |
| **Line** | 1px hairline `#2A3A2E`; warmed to `#3E5242` where something is present or open. Rules `#1F2C23`. Square corners, 4px containers. No shadow, no gradient, no glow. |
| **Voice** | Alegreya serif, one line per screen, never twice. Sans for what the house knows, SC for labels, IBM Plex Mono only where something was measured. |
| **Light** | Bone → Linen → Sage → Ash → Moss. Brightness is meaning: attention, then presence, then age. |
| **Warmth** | Green `#7E9470` for alive, hollow `#5A6854` for resting, amber `#E2A45C` only when someone is asking. Amber appears in exactly one room. |

Because the material is fixed, the rooms can differ in **shape** without breaking the family. Shape is the variable: what the room is made of stays constant.

---

## 2. The five rooms

Each room is described by its shape, the reason for that shape, and what it refuses.

### 1 · The Front Door — *arrival, recognition, embrace*

**Shape: a threshold and held air.** A hairline runs the full width under the house name — that's the door frame, and the only structure on the screen. Below it, nothing. The sentence sits low, where the eye lands after crossing, in serif. Under it, presence as four unnamed lights. Then the room names, small, at the very bottom.

**Why.** Recognition is not orientation. Names, counts, and cards would all be answers to *where is everything*, and nobody arriving home asks that. The one sentence plus four lights answers *is the house fine* in about two seconds, and then the screen has nothing left to offer — which is the success condition.

**Refuses:** title, greeting, agent names, counts, any card, any number. On laptop the sentence goes left, the lights go far right, and the extra 1,000px is spent on air rather than content.

**Half-covered test:** the emptiest room. Any partial view is mostly ground with one hairline.

### 2 · The Family Room — *warmth, presence, the people who live here*

**Shape: unequal bodies standing in a room.** Whoever is speaking occupies real volume — a tall block on phone, a 560px-wide column on laptop — carrying the sentence, one line of recent activity, and two actions. Everyone else recedes to a name, a dot, and a state word on a shared floor line. On laptop the columns are different widths *and* different heights, bottom-aligned to a rule: people standing, not tiles.

**Why.** A grid of equal cards makes four agents into four records. Unequal mass makes them into a household with someone awake in it. The room visibly re-proportions when someone starts talking, so who needs you is a spatial fact before it's a read.

**Refuses:** equal cards, any grid, avatars, any measurement (pressure and budget live two depths down), and expanding more than one person at a time.

**Half-covered test:** one large lit block against small dim names — recognizable from any corner.

### 3 · The Attention Room — *quiet focus, tending*

**Shape: a letter on a table.** One cream plane, off-center, on a deliberately empty pine surface. `ASKING` in SC over amber-on-cream, the question in serif ink, when it was asked, and the three verbs — **Yes** (the only amber fill in the product) · Let me look · Not yet. Nothing above it, one grey line below: *Nothing else is waiting.*

**Why.** Cream is the product's rarest material, and this is the only place it becomes a plane — the room physically cannot look like this unless something is asking. Emptiness around the note is content: an inbox with one item in a list still looks like a queue, whereas one letter on a bare table reads as *this is all there is.* When it's answered the plane leaves and the room is pine, empty, and finished.

**Refuses:** list chrome, counts, unread badges, filters, sort, archive-all, and any composition field. The Operator decides; they never write here.

**Half-covered test:** the only cream in the house. Instant.

### 4 · The Workbench — *deliberate, useful, reached on purpose*

**Shape: pegboard.** Ground drops to the well `#111A14`, and the grid is *visible* — 1px hairline cells, two columns on phone, four on laptop, one tool per cell. Measurements in mono because you came here to read numbers. Below the board, capability gates as a plain switch list with reasons written out; return points in a mono-stamped column; actions in words along the bottom.

**Why.** This is the one room where density and structure are honest. Everywhere else the grid is hidden because showing it would make the house look like a dashboard; here, showing it is the point — a workbench that hides its tools is worse than one that doesn't. It sits behind a deliberate move (from a person, via MAINTENANCE) so it never ambushes anyone.

**Refuses:** gear icon, admin nav, tabs of settings sub-pages, graphs, sparklines, and the word *compaction* — the label is `LAST MADE ROOM` and the action is *Make room now*.

**Half-covered test:** visible cell grid and mono figures on the darkest well. Nothing else in the house looks structured.

### 5 · The Deep Drawer — *history, weight, depth*

**Shape: a drawer pulled open.** A 2px warm edge across the top is the drawer front. Below it, kept things laid in a ledger: a mono date gutter at the left, the thing itself in sans, one line of what it was. **Each layer down is dimmer** — Bone, Linen, Sage, dim name, Moss — so age is rendered as light. Bottom line: *Older things are further down.*

**Why.** A database view sorts; a drawer has depth. The fade does the work a timestamp column can't: you *feel* that the bottom entries are old and still kept. Naming matters here — the room is titled **Kept**, and *return point* replaces *checkpoint*, because these are things somebody kept, not records that were stored.

**Refuses:** search field, filters, tags, pagination, infinite scroll, bulk select, delete. You dig; you don't query.

**Half-covered test:** the left mono date gutter with rules marching down, dimming.

---

## 3. Moving between rooms

No bottom tab bar, no hamburger, no icons in the chrome. Navigation is **addresses in words**: on the Front Door, the room names sit small in SC at the bottom edge — the way you'd know which doors a hallway has. Inside every other room the only navigational element is `← EVERLY HOUSE`, top-left, SC, one step home. The house name doubles as the address of the install.

Consequence: rooms are reached, not switched. There is no persistent element that invites tab-hopping, because tab-hopping is browsing, and browsing is failure.

---

## 4. Responsive posture

Same room, different posture — never a separate mobile design.

| Room | Phone | Laptop |
|---|---|---|
| Front Door | sentence low, lights under it, rooms at the foot | sentence left, lights far right, same threshold line, more air |
| Family Room | unequal stack, speaker tallest | unequal columns on a floor line, speaker widest |
| Attention Room | cream plane at one-third down | same plane at 620px, set off-center on a wide table |
| Workbench | 2-column pegboard, tools below | 4-column pegboard, gates and return points side by side, agent addressed by name in SC |
| Deep Drawer | date gutter 66px, two-line entries | gutter 150px, entry + description + mono duration, same fade |

---

## 5. Budget check

Amber appears on: the `NEEDS YOU` dot, the `ASKING` marker (`#B5793C` on cream), and the single **Yes** button. In the Attention Room at 390×844 that totals ≈1.6% of pixels; in every other room, 0%. All primary actions elsewhere are outlined. No icon takes amber; no measurement takes amber.

---

## 6. Open, carried forward

- The coffee / warm-earth palette exercise still runs in parallel; pine remains the working system.
- Motion is unspecified in these comps. The rule stands: a drawer *arrives*, it doesn't bounce. The Family Room's re-proportioning when someone starts speaking needs a defined arrival, not a spring.
- Light-mode inversion is untested on the Attention Room, where cream is already the note — the plane will need a pine or ink treatment when the ground itself is linen.
- The Front Door currently shows four lights for four agents. Beyond about eight, lights become a count and the shape needs revisiting.
