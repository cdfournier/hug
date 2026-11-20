# HUG Design Language Charter

**Status:** Draft v0.1  
**Purpose:** Establish the durable rules by which HUG's interface language is
designed, implemented, tested, and evolved.

---

## 1. Why this exists

HUG is a home for an Operator to understand and care for an active system of
people, sessions, signals, and choices. Its interface must make what matters
legible without manufacturing urgency.

This charter is not a visual brief and it is not a component catalogue. It is
the agreement beneath both. It tells us how a color becomes a semantic role,
how a local UI solution earns reuse, and how a new implementation is kept safe
to use across screens, devices, and eventual platforms.

### Success condition

An Operator can open HUG, understand the current situation, take an
appropriately safe action when one is needed, and leave with confidence. The
interface earns complexity only when it makes that outcome clearer or safer.

### In scope

- The shared language of HUG's web application.
- Platform-neutral tokens, component contracts, and documentation.
- The workflow for designing, implementing, validating, and adopting shared UI.
- A web-first implementation that can later inform other platform adapters.

### Out of scope for v1

- A full re-skin of every existing screen.
- A marketing or brand style guide.
- A multi-platform component implementation.
- Creating generic components before a real HUG need demonstrates their shape.

---

## 2. Principles

### 2.1 Calm clarity over dashboard theater

Show the current state plainly. Emphasis is earned by meaning, not by density,
animation, or a constant demand for attention. Quiet and healthy are valuable
states to communicate.

### 2.2 Meaning is semantic

Components consume roles such as `action.primary` and `status.attention`, not
raw colors or one-off visual values. A role says why a value exists, allowing
the visual expression to evolve without repairing every component.

### 2.3 Make the safe, accessible path the easy path

Keyboard operation, visible focus, sufficient contrast, readable text,
reduced-motion respect, and clear action consequences are baseline behavior.
They are not a later audit.

### 2.4 Progressive disclosure preserves context

Information and controls appear at the level of detail the Operator needs.
Stable work belongs on screens; supporting detail belongs in drawers; rare,
risky, or irreversible actions require explicit confirmation. A detail view
must not make someone lose their place.

### 2.5 Components own themselves; containers own placement

Components define their internal anatomy and internal spacing. Parents place
components in layout using grid, flex, and `gap`. Shared components do not
impose arbitrary external margins.

### 2.6 Reuse follows evidence

We do not create abstractions merely because they sound reusable. A repeated
need, a stable contract, and a documented reason are what promote a local
solution into the shared system.

### 2.7 The system is a living contract

Documentation, code, tests, and examples describe the same thing. A change to
one without the others is incomplete. The system should grow by deliberate,
reviewable decisions rather than quiet drift.

### 2.8 Privacy and safety are interface concerns

HUG may surface sensitive state and offer consequential controls. Screens,
fixtures, logs, previews, and portfolio artifacts must be designed with that
responsibility in mind.

---

## 3. Architecture: one language, several adapters

The canonical design language is platform-neutral. The web application is its
first adapter and proving ground, not the only place the system can exist.

```text
Design-language source
  ├─ semantic token definitions
  ├─ component contracts
  ├─ accessibility and interaction rules
  └─ examples and decision records
          ↓
Web adapter (first)
  ├─ CSS custom properties
  ├─ React components
  └─ tests and visual examples
          ↓
Future adapters (only when earned)
  ├─ SwiftUI
  ├─ Angular
  └─ other supported clients
```

### 3.1 Token layers

1. **Reference tokens** are raw, named values: purple scale, neutral scale,
   spacing scale, type families, radii, and motion durations.
2. **Semantic tokens** express intent: `surface.canvas`, `text.primary`,
   `status.healthy`, `focus.ring`, `action.primary`.
3. **Component tokens** are permitted only when a component has a stable,
   specific need that semantic tokens cannot express without ambiguity.

Components must not skip from component code directly to reference tokens.

### 3.2 Themes

HUG's updated purple palette is a reference layer, not a component API. Themes
map reference values to the same semantic roles. Theme support is designed now;
multiple production themes are implemented only when a real product need
arrives.

**Pending input:** the approved purple reference scale and its contrast-tested
pairings. No raw purple values will be invented for this charter.

---

## 4. Taxonomy

This vocabulary organizes the system. It is not a mandate to populate every
category.

| Layer | Purpose | Examples |
| --- | --- | --- |
| Foundations | Shared visual, behavioral, and technical rules | tokens, typography, layout, elevation, motion, a11y rules |
| Primitives | Small stable pieces with one clear job | action, icon, text, field, status badge, health indicator, surface |
| Compositions | Small arrangements that solve a recurring interaction | agent summary, receipt summary, inbox decision row, capability gate |
| Patterns | Larger reusable structures with interaction grammar | app shell, list-and-drawer, session monitor, confirmation flow |
| Templates | Structural layouts that arrange patterns | home, inbox, agent detail, session detail |
| Screens | Data-bound product experiences | an actual Operator's Inbox or Agent page |

**Promotion rule:** a local implementation becomes shared only when its
purpose, anatomy, states, and accessibility behavior are stable enough to name.

---

## 5. Baseline standards

### 5.1 Names and tokens

- Name by intent, not appearance: `status.attention`, not `orange`.
- Use a dot-separated semantic namespace.
- Keep scales small, deliberate, and documented.
- Never introduce a token just to avoid making a design decision.

### 5.2 Measurement and layout

- Use `rem` for type, spacing, radii, and dimensions that should scale with
  user text settings.
- Use CSS Grid and Flexbox with `gap` for relationships between siblings.
- Use fluid containers with deliberate minimums, maximums, and breakpoints.
- Avoid viewport-specific patches unless the content, not a device label,
  demands a new layout rule.
- Prefer intrinsic sizing, content-driven layout, and logical properties.

### 5.3 Surfaces and elevation

- Elevation communicates layer and relationship, not decoration.
- Surface, border, and shadow decisions are tokenized.
- Overlays, drawers, and modals always have a documented focus and dismissal
  model.

### 5.4 Typography and data

- Text roles are defined by function: display, body, label, metadata, and data.
- Data values use tabular figures when vertical comparison matters.
- Labels describe controls; visible prose explains safety or restrictions when
  a label alone is insufficient.

### 5.5 Interaction and state

Every interactive primitive defines, where applicable:

- default, hover, focus-visible, pressed, disabled, and loading;
- validation, success, warning, and error;
- waiting, scheduled, in-progress, paused, cancelled, failed, and quietly
  healthy states for live operational flows;
- keyboard, pointer, touch, and assistive-technology behavior.

### 5.6 Accessibility

- Native semantic HTML is the default; ARIA augments semantics rather than
  replacing them.
- Focus is always visible and never trapped except within a true modal.
- Color never bears meaning alone.
- Motion respects `prefers-reduced-motion`.
- Every new color pairing is contrast-tested for its actual text or UI role.

---

## 6. Shared-component SOP

### Propose

Record the user need and show the existing local implementation or repeated
case. State why a shared pattern is warranted.

### Define

Write the component contract before or alongside implementation:

- purpose and non-goals;
- anatomy and semantic elements;
- variants and state model;
- token dependencies;
- responsive behavior;
- accessibility behavior;
- input/data contract and events.

### Build

Implement the smallest version that satisfies the contract. Use foundations
and existing primitives; do not smuggle one-off values into a shared component.

### Validate

Check linting, build, keyboard use, focus behavior, state coverage, narrow and
wide layouts, and representative content lengths. Add automated tests in
proportion to interaction risk.

### Document and promote

Add an example, usage guidance, and any decision record. Promote the component
only after it is useful in at least one real HUG flow; use a second context to
confirm reuse when practical.

---

## 7. Definition of done

A shared addition is done only when it has:

- a named purpose and a known consuming HUG flow;
- semantic tokens rather than raw implementation values;
- documented anatomy, states, and responsive behavior;
- keyboard and assistive-technology behavior defined;
- empty, loading, error, and operational-state coverage where relevant;
- an example and concise usage guidance;
- appropriate automated checks and a successful local production build;
- a reviewable pull request linked to its decision or issue.

---

## 8. Adoption policy

New work uses the design language when an applicable foundation or component
exists. Existing screens migrate opportunistically: when they are touched or
when a shared replacement is ready. We will not pause product work to restyle
the whole application.

The old UI remains a useful record of functional needs. It is not a visual
standard this charter must preserve.

---

## 9. First proving ground

The first proving ground establishes the smallest grammar with broad reach. It
is a component-level reference surface, not a product-flow redesign:

1. **Surface** — canvas, raised surface, border, overlay.
2. **Status** — status badge and health indicator.
3. **Action** — primary, secondary, quiet, destructive, and pending action
   treatment.
4. **Focus and state behavior** — the thread joining those primitives.

The proving ground is successful when the primitives can be rendered together,
demonstrate their documented states, and work without bespoke visual
exceptions. It should inform the first set of GitHub Project issues and the
first CI checks.

### Relationship to product flows

Product flows are a parallel, adjacent discipline. They determine journeys,
state transitions, information hierarchy, screen/drawer/modal choices, and
content in a real HUG experience. They will eventually validate whether the
design language is useful, but they do not define it prematurely.

When a product flow is ready, it may become a consumer of the system. Its
unique needs can reveal a gap in foundations or patterns; that is evidence for
a considered addition, not a reason to fold all product design into the system.

---

## 10. Decisions still to make

These are intentionally open; they do not block the charter.

1. Approve the purple reference palette and contrast pairings.
2. Select the type families and the intended voice/data relationship.
3. Choose the initial token source format and web-generation approach.
4. Define the initial preview and screenshot policy for sensitive HUG state.

