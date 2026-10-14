# HUG — V4 Spec: Rooms, Movement, Conversation, Departures

**July 29, 2026.** Answers `HUG_DESIGN_BRIEF_V4`. Design system Sections 1–4 are applied, not redesigned. Eighteen compositions in `HUG Rooms V4.dc.html` (canvas — pan and zoom). Image exports in `exports/v4/`.

| # | Composition | Scale |
|---|---|---|
| 01–02 | Foyer | phone · laptop |
| 03–04 | Family Room | phone · laptop |
| 05–06 | Deep Drawer open in the Family Room | phone · laptop |
| 07–08 | Chat with one agent | phone · laptop |
| 09–10 | Attention Room | phone · laptop |
| 11–12 | Workbench | phone · laptop |
| 13–14 | Cafe | phone · laptop |
| 15–16 | EYES departure · return | phone |
| 17–18 | WHEELS departure · return | phone |

Household in the comps: **Soren**, **Juno**, **Varro**, **Wren**.

---

## 1. What changed from V3

**Front Door → Foyer.** It was atmospheric and passive; now it is the navigation surface. The sentence and presence stay, and doors are added as the primary content — full-bleed openings, each carrying a name and what's happening behind it. Doors are the only navigation element in the product.

**Presence marks are no longer dots.** Round dots read as pagination — progress through a set. They are now short vertical strokes of unequal height and brightness, unevenly spaced: lit windows seen from the yard. Height is wakefulness, brightness is presence. Nothing about the row suggests a sequence, and it never reads as a count.

**Attention Room: cream plane killed.** The card is raised pine (`#16211A`) with a hairline and a single warm amber left edge. Amber survives on the asking mark and the Yes button. The room's power was never the cream — it was the single card on an empty ground, and that is intact.

**Workbench names whose board it is.** `Workbench · SOREN` at the top of the mobile view, with the other agents and `THE HOUSE` as a switch row beneath. You are always on somebody's pegboard, and now you can tell at a glance and switch without leaving the room.

**Deep Drawer is a pattern.** It is no longer the fifth room. It is the control surface you pull open while standing somewhere — documented in §4 and drawn open inside the Family Room in comps 05–06.

**Archive replaces the drawer as the fifth room.** Named, described in §8, deliberately not designed this round.

**No house names.** `← HUG`, everywhere, in small caps. No install nickname anywhere in navigation.

---

## 2. The Foyer

**Sentence:** *You hear the house, then you see which doors are open.*

Top: `HUG`, the status sentence in serif, and the presence row. Then the threshold rule — the one warm full-width line in the product. Below it, doors.

A door is a name in serif, one line of what's behind it, and a warm left edge whose brightness is that room's temperature: warm pine for the Family Room, amber for Attention when something is asking, hairline for the Workbench, near-nothing for the Archive. No icon, no chevron, no card, no rectangle.

**Phone (01).** Doors are full-width bands stacked under the threshold, tallest content at the top of the list. Cafe sits below a second rule at the bottom edge — a different rule, because Cafe is not in the house.

**Laptop (02).** Doors become floor-to-ceiling openings: four columns spanning the full height between the threshold and the porch rule, each with its warm edge as a short vertical stroke at the top and its name set at the bottom, at the floor. Walking into a room means walking through the opening. Cafe again below the rule, in a warm bone tone that belongs to outside.

Reachability: the Foyer is the only surface where every door is visible at once. Everywhere else, movement is contextual (§3).

---

## 3. Movement

**Lateral (room → room).** Every room carries a small set of `NEXT ROOM →` addresses in the top-right, in small caps at Moss brightness — dim enough to be furniture, present enough to walk through. They are contextual, not global: the Family Room offers Attention, Workbench, Cafe; the Attention Room offers Family Room and Workbench. Never the full set, never pinned, never at the bottom of the screen.

**Vertical (into and out of depth).** Room → focus → drawer, and back. `← HUG` is the top-left address on every room; it means the Foyer, and it appears only at room level. Once you are deeper, the affordance changes to what closing does: `CLOSE ↓` on a drawer, `↓ FAMILY ROOM` on phone chat, `CLOSE ✕` on laptop chat. **Back always means up one level.** There is no path in the product where a back gesture jumps you home from depth.

**Phone spatial logic.** Lateral moves slide horizontally; the room you left leaves the way you came from. Depth moves are vertical: focus rises into place, the drawer pulls up from the bottom edge, closing drops it back. Direction is the memory — you always know which way you came.

**Laptop spatial logic.** Same logic, more room to keep things visible. Lateral moves slide horizontally at full width. Depth does not replace: the drawer opens across the bottom of the room with the room still lit above it (dimmed, not gone), and chat opens beside the room rather than over it.

**No persistent bottom navigation.** No icon bar anywhere in the eighteen comps. The Foyer is the navigation surface.

---

## 4. The Deep Drawer (pattern)

**Sentence:** *Soren's drawer is open and the room is still there above it.*

**Definition.** A drawer is a control surface pulled open inside a room, scoped to what you were looking at. It is level 3 of the depth law and the only place a measurement may appear. It never becomes a destination, never has its own address, and never fills the screen.

**Anatomy.** Warm 2px pull edge across the top; a short centered handle stroke; the scope named in small caps (`SOREN'S DRAWER`); `CLOSE ↓` opposite it. Ground drops to the well `#111A14` — you are looking into something, not at something. Inside: a visible hairline cell grid of measurements in mono, then capability gates as a switch list with reasons written in plain sentences, then verbs (`Make room now`, `Free moment`), and a way out to the full pegboard.

**The rule that makes it a drawer.** The room stays rendered above the pull edge at reduced brightness — on phone the header and the focused agent, on laptop the whole floor line of agents. Closing changes nothing but the drawer. You have not moved; you were never anywhere else.

**Where drawers exist.** Family Room (per agent). Workbench (per tool group). Attention Room does not have one — a question is not a thing you configure. Cafe does not have one, by design.

---

## 5. Chat

**Sentence:** *You're talking to Soren and you can still feel the room you're standing in.*

Chat is a mode, not a room. It opens where you already are, scoped to exactly one agent, and it has no address of its own.

**Reversed order, and why.** Operator input sits at the very top of the surface: the field, `KEEP THIS`, and Send. Directly beneath it, newest message. History descends and dims with age (Bone → Linen → Sage → Moss). The present is always on screen without scrolling, and the act of speaking is the first thing under your thumb rather than the last thing at the bottom of a queue. The operator speaks first — the layout says so before you read a word.

**Phone (07).** Takes the screen; the room stays named in the header as `↓ FAMILY ROOM`, which is also the way out — down, the way you came up. Soren's name and presence mark sit on the right of the same header, so you never lose the scope.

**Laptop (08).** Chat opens beside the room. The agent column stays live at 400px on the left with Soren lit and the others dimmed but clickable — clicking one of them moves the conversation, which is the laptop version of "go to Varro and open chat there." The conversation column is wide, with a mono-free speaker gutter of small-caps names at 150px, so scanning who said what is a straight vertical read.

**Scope rule.** One agent per chat surface, always. There is no all-agents chat — that is what Cafe is.

---

## 6. Attention Room

**Sentence:** *One of them stopped and is waiting on you, and nothing else is.*

One card, off-center, on empty ground. Raised pine, hairline border, amber left edge. `SOREN IS ASKING` in amber small caps with the asking mark. The question in serif. When it was asked, and that he stopped. Three verbs: **Yes** (amber fill), Let me look, Not yet. One grey line below: *Nothing else is waiting.*

Emptiness is the content. A list with one item still reads as a queue with one item in it; a single card on a bare surface reads as *this is all there is.* When it's answered the card leaves and the room is empty pine — the success condition is the room going quiet, not the operator staying.

Laptop keeps the same card at 640px, set off-center on a wide empty surface, with the reassurance line at the same left margin as the card. Reflow, not redesign.

---

## 7. Workbench

**Sentence:** *You are working on Soren's pegboard and the grid is showing on purpose.*

The only room where structure is visible. Ground drops to the well. Measurements sit in a hairline cell grid — two columns on phone, four on laptop — in mono, because you came here to read numbers.

Context is now explicit: `Workbench` with `SOREN` in small caps beside it, and a switch row (`SOREN JUNO VARRO WREN THE HOUSE`) directly under the title on both scales. Below the board: capability gates with plain-language reasons for anything paused, return points with mono stamps, and verbs along the bottom.

Nomenclature holds: `LAST MADE ROOM`, not compaction. `RETURN POINTS`, not checkpoints. `Make room now`, `Free moment`, `Wake policy`.

---

## 8. Archive (named, backlogged)

The fifth room. A searchable surface across everything the house has kept: messages, memories, Room Notes, decisions, housekeeping records. One index, many content types, oldest material still reachable.

In the Foyer it appears as a real door at Moss brightness with the line *Everything kept. Later.* — legible, honestly dim, not openable. It is listed rather than hidden because the house should not pretend it has no memory.

Not designed this round. When it is: it inherits the ledger shape (mono date gutter, age rendered as dimming light) and it is the one room where a search field is legitimate, because searching is why you go there.

---

## 9. EYES and WHEELS — departures

Not rooms. Departures. Both are entered from a focused agent in the Family Room, both return you to exactly where you stood.

**The departure vocabulary.** Ground drops to Outside `#070A08`. An 18px amber rule with `LEAVING HUG` in wide-tracked small caps replaces all room chrome — no `← HUG`, no lateral addresses, no room title. Nothing on a departure screen is navigable except the two choices.

**EYES departure (15).** A hairline viewfinder frame — four corner brackets and a center cross — occupies the middle of the screen, empty. It is a camera that hasn't been picked up yet. Serif line: *You're picking up the camera. Soren watches with you.* Terms in one grey sentence. Actions: amber **Hand him the camera**, plus *Stay inside*.

**WHEELS departure (17).** The heaviest surface in the product. No image, no frame — just the sentence *Varro is asking for the keys.* and three terms in a mono-free label ledger: what he drives, that you stay present, what stops him. The action is a **press-and-hold** with an amber progress rule: an instant tap cannot hand over a vehicle. *Let go and nothing happens.*

**The return (16, 18).** You land in the Family Room, on the same agent, in the same arrangement. A thin bar at the top in dark amber reads `BACK IN HUG · 6M OUT` — the only trace of having left, and it fades on next navigation. What happened outside is written into that agent's sentence (*He kept three things he noticed while you were out*), never into a notification or a modal. WHEELS return additionally shows the room having moved on without rearranging: Soren started speaking while you were away, so he is lit, but Varro is still the agent you are standing in front of.

That is the promise: *the house remembers where you were standing when you walked out the door.*

---

## 10. Constraint check

| Constraint | How it's met |
|---|---|
| Depth law — three levels | Room / focus / drawer. Chat is a mode at focus depth, not a fourth level. |
| Nomenclature | Rooms, doors, drawers, the porch. No tabs, panels, modals, pages anywhere in the comps or this document. |
| Reflow, don't hide | Every measurement, gate, message and return point present at both scales. Laptop widens the gutter and adds columns; nothing is dropped. |
| Two scales only | 390 × 844 and 1440 × 900. No tablet. |
| Sentence at two scales | Stated per room in §2–§9; each holds at both widths. |
| No persistent bottom nav | None. Foyer is the navigation surface; lateral addresses are contextual and top-right. |
| No cream plane in dark | Killed. Cream tones appear only as type and as the Cafe wordmark. |
| Input at top | Chat 07–08 and Cafe 13–14. |
| Newest at top | Chat and Cafe both, with history dimming downward. |
| `← HUG` | Every room-level surface. No house name anywhere. |
| Drawer is a pattern | §4; drawn inside the Family Room, never with its own address. |
| Archive backlogged | §8, named and described, one dim door. |
| No EYES/WHEELS screens | Departure and return only. |

**Amber budget.** Foyer: one 34px edge stroke on the Attention door. Attention Room: mark, edge, one button. Departures: an 18px rule, one button or one hold-rule. Every other composition: zero. Well under 2% on all eighteen.

---

## 11. Open questions

- **Drawer height on phone.** Comp 05 leaves the header plus the focused agent visible above the pull edge. If a drawer's content grows past that, the room gets squeezed rather than the drawer scrolling internally — we should decide which gives.
- **Lateral address count.** Three `→` addresses fit comfortably at laptop width; on phone we show one. Rule needed for which one wins — likely the room with something asking.
- **`KEEP THIS` in chat.** Drawn as a small-caps toggle beside Send. Whether keeping is a per-message act or a per-conversation setting is unresolved.
- **Presence marks past eight agents.** Same ceiling as V3: beyond eight, the window row becomes a count and needs a different shape.
- **Cafe ground.** Currently `#131C16`, a step lighter than pine to read as outside. Worth testing against a warmer, less green outside tone so the porch feels like evening rather than a lighter room.
