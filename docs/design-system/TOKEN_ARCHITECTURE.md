# Token Architecture

**Status:** Token layers and initial color semantics are defined. The v1
value-free color contract is versioned in JSON; resolved values and generation
tooling remain intentionally deferred.

## Goal

Tokens make visual and behavioral decisions portable. They let a web component,
a future native component, and a design reference speak about the same intent
without each choosing local values independently.

## Layers

### Reference tokens

Raw, named values with no product meaning on their own.

Illustrative namespaces only:

- `color.palette.purple.*`
- `space.*` — see [Spacing and Layout](./SPACING_AND_LAYOUT.md) for the
  approved quarter-rem scale
- `font.family.*`, `font.size.*`, `font.line-height.*`
- `radius.{small,medium,large,pill,round}`
- `icon.{small,default,large}`, `icon.stroke.default`
- `motion.{fast,standard,deliberate}`, `easing.{standard,enter,exit}`

### Semantic tokens

Intentful roles consumed by components.

Illustrative namespaces only:

- `surface.0` through `surface.3`
- `layout.gutter.inline`, `layout.section.block`, `layout.panel.padding`
- `content.primary`, `content.secondary`, `content.tertiary`, and
  `content.inverse`
- `separator.default`
- `action.primary`, `action.secondary`, `action.quiet`
- `feedback.{success,warning,danger,info}.{content,surface,border}`
- `focus.ring`
- `elevation.drawer`, `elevation.dialog`
- `backdrop.overlay`, `selection.{background,content}`

### Component tokens

Component-specific roles are exceptional. They are introduced only when a
stable component need cannot be expressed clearly through semantic roles.

Example shapes: `field.border.invalid`, `field.validation.valid`, or
`panel.border`.

## Rules

1. Components consume semantic tokens by default.
2. Semantic tokens map to reference tokens inside a theme, never the reverse.
3. Token names describe purpose, not an incidental visual property.
4. Token values use platform-neutral units or values whenever practical.
5. Tokens do not encode page or device names.
6. A token is not created simply to preserve a one-off visual exception.
7. Start from the provisional theme roots; add a color only when a demonstrated
   interface need can state its semantic job and validate its contrast.

## Source and output boundary

`design/tokens/color.contract.json` is the canonical, platform-neutral color
role manifest. It is deliberately a value-free contract, not a partial or
invalid Design Tokens Community Group (DTCG) token file: DTCG tokens require
values, and HUG has not yet approved its color values.

When the purple palette and contrast pairings are approved, a resolved
value-bearing token source can adopt DTCG-compatible JSON without renaming the
semantic roles in this contract. Until then, the contract stays versionable,
human-reviewable, and portable without encouraging premature CSS use.

The first adapter will emit CSS custom properties for the Next application
only after resolved values exist. React components will consume those semantic
properties. Future platform adapters translate the same semantic intent rather
than copy web styles.

```text
color contract (role names, descriptions, theme requirement)
             ↓
resolved DTCG-compatible source (values and theme aliases; later)
             ↓
web CSS custom properties (adapter; later)
             ↓
React components and examples
```

## Explicitly deferred

- Exact purple and feedback values and contrast pairings.
- Resolved DTCG-compatible source and token-generation tooling.
- Exact duration and easing values.
- Figma variable mapping.
- Native-platform outputs.

