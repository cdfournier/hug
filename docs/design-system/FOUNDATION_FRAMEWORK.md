# Foundation Framework

**Status:** Empty structure; no values are approved here yet.

## How to use this framework

Each foundation is defined in its own time. Before values are added, we agree
on its purpose, the semantic jobs it must support, the decisions it owns, and
its validation rules. A foundation is not complete because it has a long list
of tokens; it is complete when a downstream component can use it consistently
and accessibly.

Every foundation document will use this shape:

1. Purpose and non-goals.
2. Semantic roles and naming rules.
3. Reference values or assets, if applicable.
4. Responsive and accessibility behavior.
5. Implementation and adapter notes.
6. Validation and completion criteria.
7. Open decisions.

## Foundation tracks

### 1. Color and themes

**Owns:** reference palette, neutral scale, semantic color roles, theme maps,
contrast pairings, and color-independent status treatment.

**Does not own:** a component's full visual treatment or meaning that should be
conveyed by copy, iconography, or state.

**Current input:** HUG will use an updated purple palette. The raw values and
approved contrast pairings are intentionally pending.

### 2. Typography and data

**Owns:** type roles, scale, line height, weight, tracking, readable measure,
and tabular-number treatment for operational data.

**Does not own:** product content or a screen-specific visual hierarchy.

### 3. Spacing and layout

**Owns:** spacing scale, container sizes, grid rules, breakpoints, `gap`,
logical spacing, responsive composition, and layout ownership.

**Does not own:** arbitrary external component margins or viewport-specific
patches with no content-based reason.

### 4. Surfaces, borders, radius, and elevation

**Owns:** canvas, raised, inset, and overlay surfaces; border roles; radius;
shadow/elevation; and layering rules.

**Does not own:** attention hierarchy by itself. Elevation expresses relation,
not urgency.

### 5. Interaction, focus, and motion

**Owns:** focus appearance, input and action states, duration/easing roles,
reduced-motion behavior, and transition rules for layers such as drawers and
modals.

**Does not own:** decorative animation or product-specific state machines.

### 6. Iconography

**Owns:** icon grid, stroke/fill language, sizing roles, accessible labeling,
and the criteria for when an icon is warranted.

**Does not own:** replacing understandable words with symbols.

### 7. Accessibility baseline

**Owns:** shared semantic HTML expectations, keyboard conventions, focus
management, contrast requirements, accessible-name rules, and assistive
technology validation.

**Does not own:** a final audit of every product flow. It establishes the
baseline that each flow must later meet.

## Cross-foundation rules

- Foundations describe intent before values.
- The reference layer is never consumed directly by components.
- A semantic role can be added only when its purpose can be stated plainly.
- Defaults must work in narrow and wide layouts without relying on device names.
- Accessibility requirements belong in each foundation, not in a separate
  cleanup phase.

