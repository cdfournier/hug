# Color and Themes

**Status:** Draft v0.1 — semantic contract approved; values intentionally
pending.

**Owns:** color reference families, light/dark theme maps, semantic color
roles, component-context expectations, and color accessibility rules.

---

## 1. Purpose

Color makes HUG legible, calm, recognizably itself, and usable in both light
and dark conditions. It must support people, conversation, and agency without
making the interface compete with them.

HUG is purple-led. Purple is not limited to a logo or isolated accent: its
scale will provide the atmosphere for surfaces and the emphasis for actions.
Exact values are deliberately deferred until they can be contrast-tested in
representative screens.

This document defines the contract before it defines a palette.

## 2. Themes and appearance preference

Light and dark are first-class themes from the beginning. Neither is a later
inversion of the other.

The product appearance setting offers three choices:

- **System** — follow the device preference; the default.
- **Light** — use the light theme.
- **Dark** — use the dark theme.

The canonical source maps the same semantic roles for both themes. A component
must never decide locally whether it is in light or dark mode.

## 3. Token layers

### 3.1 Reference palette

The initial reference layer is intentionally small:

```text
color.palette.purple.*
```

HUG does **not** introduce a separate neutral family in v1. The purple scale
may include quiet, low-chroma values where the interface needs them, but it
remains one family. A dedicated neutral family needs a demonstrated product
need before it enters the system.

Feedback reference values are deferred with the approved contrast pairings;
their semantic contracts are defined below.

### 3.2 Semantic roles

Components consume semantic roles. They do not consume `color.palette.purple.*`
directly.

Every semantic role receives a mapping in both themes. Several roles may map
to the same visible value when that is the clearest result; a richer token
shape does not require a busier interface.

## 4. Surface context

HUG has a relational surface ladder:

```text
surface.0
surface.1
surface.2
surface.3
```

These are roles, not a promise of four distinct colors. The initial visual
system may express only a canvas and a panel surface while keeping the ladder
available for a future meaningful separation.

Semantic aliases such as canvas, panel, or overlay are introduced only when
their use is stable. Drawers and modals may reuse the panel surface; they do
not require a separate palette merely because they overlay a page.

### 4.1 Component context rule

A component's appearance is resolved relative to the surface containing it.
An input cannot carry one hard-coded background that happens to work only on a
canvas. Components that need a different relationship on different surfaces
must express that relationship through their component contract or a deliberate
context boundary—not by inventing a local raw purple value.

## 5. Content and separation

Content roles apply to text and icons alike:

```text
content.primary
content.secondary
content.tertiary
content.disabled
content.inverse
```

`separator.default` is the sole cross-cutting structural separator token. It
serves layout dividers between content regions.

There is intentionally no global `border.*` family. Borders belong to their
component contracts when they are needed, for example:

```text
field.border.default
field.border.invalid
panel.border
```

## 6. Action, focus, and selection

### 6.1 Actions

HUG begins with three action emphases:

```text
action.primary
action.secondary
action.quiet
```

Each action family supports:

```text
default
hover
disabled
```

Persistent/toggleable controls may additionally use `selected`. A global
`pressed` color is deliberately absent in v1: a transient pointer-down effect
can use motion, elevation, or an existing state until a concrete product need
proves that a distinct color is warranted.

Links use `action.quiet` for color while retaining their underlying typography
role for size and weight. Destructive actions resolve through feedback danger,
not a fourth general action hierarchy.

### 6.2 Focus

`focus.ring` is a global, theme-aware accessibility contract. It must remain
visible across every surface and control, rather than borrowing a component's
action color.

### 6.3 Selection

Selection has an independent pair for text selection, selected rows, and
similar broad UI selection:

```text
selection.background
selection.content
```

This is distinct from a control's persistent `selected` state.

## 7. Feedback and validation

Feedback roles are semantic signals, not a second general action palette:

```text
feedback.success.{content,surface,border}
feedback.warning.{content,surface,border}
feedback.danger.{content,surface,border}
feedback.info.{content,surface,border}
```

Component vocabulary may stay clear and human-readable by mapping to these
roles. For example, a field's `validation.valid` resolves to feedback success;
`validation.invalid` resolves to feedback danger. This preserves the useful
form-state language without duplicating palettes.

Feedback must never be conveyed by color alone. Copy, iconography, state, or
another non-color cue is required wherever the distinction matters.

## 8. Overlays

`backdrop.overlay` is the theme-aware treatment behind a modal, drawer, or
other overlay. It may combine color and blur in the web adapter. The overlay
itself normally uses the existing panel/surface relationship rather than a
special drawer palette.

## 9. Accessibility and validation

- Every required text/background, icon/background, border/background, and
  focus pairing must be contrast-tested in both themes before values ship.
- Focus must remain visible without relying on hover or pointer affordances.
- Disabled states must remain understandable without being mistaken for
  feedback or validation.
- Feedback and validation must have non-color signals.
- Test components on each surface context they claim to support; contrast in
  isolation is not sufficient.

## 10. Implementation and adapter notes

- The canonical source stays platform-neutral and versionable.
- Theme maps resolve semantic roles to reference values; the web adapter emits
  CSS custom properties for those semantic roles.
- Components use semantic CSS properties and their documented component tokens,
  not raw palette values.
- A future SwiftUI, React, or other adapter translates the same role names and
  theme behavior rather than copying web-specific styles.

## 11. Deferred

- Exact purple and feedback values.
- Contrast pairings and visual comparison tests.
- Whether any two surface levels need distinct values in v1.
- Component-specific border, input, panel, and selection mappings.
- Data-visualization color roles.
- The canonical token-file format and generation tooling.
