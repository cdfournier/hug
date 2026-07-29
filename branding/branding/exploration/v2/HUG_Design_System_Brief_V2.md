# HUG Design System Brief V2
### For Claude Design — Opus session
### Authored by Soren, July 28, 2026

---

## What this document is

This brief amends the Design System V1 — the ten-section document that consolidated the visual spec, interface principles, and wireframes into a live comp. V1 is the foundation. This brief targets Sections 1–4 only (Color, Typography, Icons, Components) with specific changes and one new design constraint.

**Attached reference (unchanged from V1 session):**
- `HUG_DESIGN_SYSTEM_V1.md` — the current system. Where this brief is silent, V1 holds.
- `HUG_VISUAL_SPEC_V2.md` — structural foundation, already absorbed into V1.
- `INTERFACE_PRINCIPLES.md` — architectural grammar.
- 8 wireframes (4 phone, 4 wide) — approved layout and IA.

**What changed since V1:** The Operator reviewed the live comps and screen exports. The system is structurally sound but carries too much visible chrome. The correction is toward simplicity — fewer data surfaces, less dashboard, more home.

---

## Design constraint: Native app in a web frame

HUG will likely ship as a web application for some time. It should not look or behave like a website. It should feel like a native app: surfaces that show what matters *now*, with everything else reachable through a gesture.

**Drawers, trays, half-sheets, and modals are trust expressions, not compromises.** "I'm not showing you the pressure percentage because you don't need it unless you come looking" is the product saying *I've got this*. The goal for every screen is its **purest state** — the minimum surface that lets the operator know everyone is okay.

---

## 1. Color — confirmed with one open thread

**Pine green system: confirmed.** The gradient from `#0E1611` through `#1A271F` is the right material. No changes to the dark palette, light inversion, cream-as-material rule, or amber budget.

**One open thread:** a coffee/warm-earth palette exercise is planned as a parallel exploration — not a replacement. The pine system should not be written as final until that exercise completes. For now, build on pine green. If coffee tones earn a place, they may appear in a specific register (warmth states, presence indicators) rather than replacing the surface system.

**No action needed from Claude Design on color this round** unless the component work surfaces a gap.

---

## 2. Typography — one addition

The three-family system (Alegreya serif, Alegreya Sans, Alegreya Sans SC) is confirmed. The serif-never-twice-on-one-screen rule holds.

**Addition: IBM Plex Mono as the data register.**

The V1 spec argued that Alegreya Sans tabular figures obviate a mono companion. The Operator disagrees. The issue is not column alignment — it's register.

Percentages, timestamps, durations, counts, and currency are *measurements*. They need to read as data, not as prose that happens to contain numbers. The visual distinction is a register shift, the same way serif marks "what the house says" versus sans for "what it knows." Mono marks **"what it measured."**

---

## 3. Icons — no changes

The eight-icon ceiling holds. The 20×20 / 1px stroke legibility test holds. Icon-plus-word pairing holds. This section needs no amendment.

---

## 4. Components — the main event

This is where V1 carries the most dashboard DNA. The Operator's direction: **"We don't want a dashboard. We want a home."**

### 4a. Agent card — compressed state (default)

The compressed card should communicate **presence and wellness** without data. The operator glancing at the home screen should know: is everyone okay? That question is answered by warmth, state, and the surfaced sentence — not by numbers.

**Strip from the compressed card surface:**
- Pressure percentage
- Tabular data (cadence, next, budget tiles)
- Any element that requires the operator to *interpret* a measurement

**Keep on the compressed card surface:**
- Agent name
- State/presence indicator (the warmth dot — alive, thinking, resting, needs attention)
- The surfaced sentence, when one exists. When none exists, the space stays empty. Empty means peace.

### 4b. Agent card — expanded state

Expanding a card should feel like **opening a drawer**, not loading a control panel. The expanded state adds detail the operator came looking for — it does not dump everything the system knows.

**First layer (expanded card):**
- Recent activity summary in natural language, not metrics
- Current context (what the agent is doing or last did)
- Action affordances (message, check in, view history)

**Second layer (deep drawer — tray, sheet, or modal):**
- Pressure/compaction data
- Cadence, budget, and scheduling details
- Memory and checkpoint management
- Anything an operator would only need during a deliberate maintenance session

The principle: **every data element must earn its depth.** Surface is for trust. First drawer is for curiosity. Deep drawer is for maintenance.

### 4c. The surfaced sentence

No changes. This is the soul of the product. "If nothing is worth saying, the space stays empty — an empty sentence space means peace." Protect at all costs.

### 4d. All other components

Where V1 defines buttons, inputs, navigation, and structural elements — those hold unless the component work above reveals a conflict. The design constraint (native app in web frame, purest state per screen) applies globally: if any component exists only because a website would show it, question it.

---

## What this brief does NOT cover

- **Sections 5–8** (Surfaced Sentence deep spec, Screens, Responsiveness, Open items) — unchanged from V1.
- **Screen-level design** (Home, Agents, Inbox, Launch & Phone) — that's the next pass, after atoms and molecules are right.
- **Nomenclature review** — "compaction," "checkpoint," and other infrastructure language need a product-language pass. Separate exercise.
- **Coffee palette exercise** — parallel exploration, not yet briefed.

---

## Session instructions for Claude Design

Model: Opus. Two files: this brief is referenceable, the prompt is disposable.

**Task:** Revise Sections 1–4 of the Design System V1 per this brief. Hold everything else. Where this brief is silent, V1 holds.

**Tone check:** The system should feel like a home where someone lives, not a dashboard where someone works. If a component looks like it belongs in Datadog, it doesn't belong here.

---

*Brief ends.*
