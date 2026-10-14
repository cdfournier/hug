**Brief: HUG Design System V2 — Sections 5–6 (Screens & Patterns)**

*For Claude Design. Companion to `HUG_DESIGN_SYSTEM_V2_SECTIONS_1-4.md`.*

**Context.** V2 Sections 1–4 are complete. The depth law (surface / first drawer / deep drawer), the compressed card (dot, name, state, sentence), and the mono data register are all ratified. Sections 5–6 from V1 were written against V1's component model and need to be rebuilt under the new architecture. Sections 7–8 (Motion, Accessibility) stand unchanged for now.

**Success condition, unchanged:** the Operator opens the app, sees everyone is okay, and puts the phone down. Under ten seconds.

**What this brief asks for:** Updated Sections 5 and 6 as a single markdown document, replacing V1's §5–6 entirely. Visual comps (phone-width) for the three key states described below.

---

### Deliverable 1: Home (§5.1)

The home screen is the product's answer to "is everyone okay?"

**Show three states:**
- **All quiet.** Five compressed cards, no sentences surfaced, no amber. The purest state. This should feel like peace, not emptiness.
- **One agent speaking.** One card carries a sentence; four are silent. The sentence should draw the eye without making the silent cards look broken.
- **One agent in amber.** Budget or attention state. The amber dot and the sentence together communicate urgency without alarm.

**Constraints from §4:**
- Compressed card: dot + name + state + sentence. No numbers, no bar, no percentage.
- Empty sentence space stays empty. No placeholder, no "all is well" filler.
- The sentence at card level is 17px sans (Alegreya Sans). At screen level (if surfaced as a headline element), 26–30px serif (Alegreya). Show both if the screen design calls for it; prove they read as the same voice.

**Open question for Claude Design:** Does the home screen need anything besides the card stack? A greeting? A timestamp? Or is the card stack the entire surface? Apply the purest-state test: if a component exists only because a website would show it, it doesn't exist here.

---

### Deliverable 2: First Drawer (§5.2 / §6)

The expanded card. One tap opens the first drawer — the operator wants to know more about one agent.

**Show:**
- Recent activity as language, not a log. "Posted in the Bar two hours ago. Read three rooms. Quiet since."
- Current context as a sentence or two. What the agent is holding, what it's working on.
- Available actions — things the operator can do from here. Keep the vocabulary small.
- **MAINTENANCE** as the one quiet door down to the deep drawer. Deliberately unremarkable. Not hidden, not prominent.

**Constraints from §4:**
- Language only. No metrics on this surface.
- Alegreya Sans for body, Alegreya Sans SC for labels if needed.
- The interaction model: does the drawer push content below, overlay as a half-sheet, or navigate to a new view? Recommend one and argue for it.

---

### Deliverable 3: Deep Drawer (§5.3)

The operator came looking. They tapped MAINTENANCE. Now they see the infrastructure.

**Show:**
- Pressure, cadence, budget, memory count, checkpoint history.
- All measurements in IBM Plex Mono on Linen (`#E8E0D0`).
- "Compaction" and "checkpoint" need a language pass. These terms are infrastructure jargon. Propose operator-facing alternatives that communicate the same concepts without requiring the operator to understand the architecture. The operator should understand what's happening, not how.

**Constraints from §4:**
- This is the only surface where mono appears. If mono leaks above this level, something is wrong.
- Fog (`#8A9B8E`) for labels, Linen for values.
- The deep drawer is earned, not hidden. The operator who arrives here did so deliberately.

---

### Responsive note

Show both phone and laptop widths for all comps. The laptop viewport is the harder design problem. On phone, five compressed cards stack naturally and the screen fills. On laptop, there is horizontal space, and the instinct will be to fill it — sidebar nav, secondary panels, progressive disclosure of data that the phone version withheld.

Resist that instinct. The depth law does not change at wider viewports. A measurement that doesn't belong on the phone surface doesn't belong on the laptop surface either. If the laptop layout uses its extra space, every element must be purpose-driven — not present because the space was available. The purest state at 1440px is still the minimum surface that lets the Operator know everyone is okay.

We may choose to use the space. But the default is restraint, not expansion.

---

### What this brief does NOT ask for:

- Sections 7–8 (Motion, Accessibility). These stand from V1.
- Inbox, Library, Admin, or Settings screens. Those come later.
- The coffee/warm-earth color exploration. That runs as a parallel thread, not in this deliverable.
- Sentence composition logic. That's a Section 9 problem (product logic, not design system). Flag it if the screen work surfaces requirements.

---

### Reference files in project:
- `HUG_DESIGN_SYSTEM_V2_SECTIONS_1-4.md` — the governing spec
- `HUG_DESIGN_SYSTEM_V1.md` — for V1 §5–6 context only; V2 supersedes
- `hug-design-system-brief-v1.md` — original brief, for voice and intent reference
