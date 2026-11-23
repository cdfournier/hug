# Web Token Adapter

**Status:** Naming and selector contract approved; no color values emitted yet.

## Purpose

This document makes the web implementation a faithful adapter of HUG's
platform-neutral token contract. It does not make CSS the source of truth.

## Custom-property names

Every semantic color role maps predictably to a custom property prefixed with
`--hug-color-`. Dot-separated token segments become hyphen-separated CSS
segments:

```text
surface.0                    → --hug-color-surface-0
content.primary              → --hug-color-content-primary
action.primary.hover         → --hug-color-action-primary-hover
feedback.danger.border       → --hug-color-feedback-danger-border
backdrop.overlay             → --hug-color-backdrop-overlay
```

The `propertyMap` in
[`color.contract.json`](../../design/tokens/color.contract.json) names every
planned semantic role and custom property explicitly. That makes later value
work a fill-in of a stable map, rather than a second naming exercise.
Components consume these semantic properties, never raw palette values.

## Theme resolution

The web adapter uses `data-hug-theme` on the document root for an explicit
choice. Its behavior is:

| Preference | Web behavior |
| --- | --- |
| System (default) | Use light declarations by default; switch to dark inside `prefers-color-scheme: dark` when no explicit attribute is present. |
| Light | Set `data-hug-theme="light"`; use the light declaration map. |
| Dark | Set `data-hug-theme="dark"`; use the dark declaration map. |

When values are approved, the CSS structure will follow this shape:

```css
:root,
[data-hug-theme="light"] {
  /* light semantic values */
}

[data-hug-theme="dark"] {
  /* dark semantic values */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-hug-theme]) {
    /* dark semantic values for System */
  }
}
```

No declarations are emitted until their values can be contrast-tested in both
themes. The existing application variables remain legacy implementation detail
until a value-bearing migration is deliberately planned.

## Non-goals

- Do not add a CSS property for a raw palette step to component CSS.
- Do not introduce a local component variable to sidestep surface context.
- Do not use a dark-mode-only stylesheet or a component-level theme decision.
