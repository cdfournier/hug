# Shape and Elevation

**Status:** Draft v0.1 — semantic contract approved; values and component
assignments intentionally pending.

**Owns:** the shared radius vocabulary, the emotional default for geometry,
and the limited conditions under which an interface element may visually leave
the document plane.

---

## 1. Purpose

HUG should feel soft, welcoming, and calm. Its product name is a useful
constraint: hard-edged, square-first geometry would make the interface feel
more aggressive than the product itself.

Softness is the default, but not an excuse for indiscriminate pills, bubbles,
or decorative shadows. Shape communicates containment and touchability;
elevation communicates an actual change of plane.

## 2. Radius vocabulary

The foundation provides five roles:

```text
radius.small
radius.medium
radius.large
radius.pill
radius.round
```

`radius.round` is a true `50%` shape for square icon buttons, avatars, and
similar controls. It is not interchangeable with `radius.pill`, which rounds
the ends of a non-square element.

No numeric values are approved yet. The roles describe a relationship, not a
license for each component to invent an adjacent value.

## 3. Component application

The system does not yet prescribe which component receives which radius.
`radius.medium` for ordinary controls and `radius.large` for major panels is a
useful starting hypothesis, not a global mandate. Each component contract must
choose a role when a real component and its contexts are available to inspect.

This keeps the shape scale portable and small while avoiding premature rules
for components HUG has not designed.

## 4. Elevation is exceptional

Ordinary HUG content lives in the document plane. Panels, cards, alerts, and
standard surfaces establish relationship through surface context, spacing,
content hierarchy, and where needed a component-owned border—not a cast
shadow.

Elevation is permitted only when something has genuinely left that plane:

```text
elevation.drawer
elevation.dialog
```

Drawers and confirmation dialogs may use elevation. Alerts remain in-plane
unless their interaction is truly dialog-like. There is deliberately no generic
`shadow.1` through `shadow.5` ladder.

`backdrop.overlay`, defined by [Color and Themes](./COLOR_AND_THEMES.md),
handles the relationship behind a modal or drawer. The web adapter may combine
that backdrop with blur; the overlay itself normally reuses the relevant panel
surface rather than receiving a special palette.

## 5. Accessibility and validation

- Radius never substitutes for a visible affordance, label, focus treatment,
  or adequate target size.
- Drawer and dialog elevation must remain understandable with reduced
  transparency, forced colors, and high-contrast settings.
- Focus rings must never be hidden beneath elevated surfaces or clipped by
  rounded containers.
- Test drawers and dialogs against their backdrop in both light and dark
  themes.

## 6. Deferred

- Exact radius, shadow, opacity, blur, and elevation values.
- Component-by-component radius assignments.
- Popover, tooltip, and menu elevation roles; add one only when a real
  component proves it is distinct from a dialog or drawer.
- Motion details for entering and leaving elevated layers.
