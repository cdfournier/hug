# Token Architecture

**Status:** Framework-only; no token values or source format selected yet.

## Goal

Tokens make visual and behavioral decisions portable. They let a web component,
a future native component, and a design reference speak about the same intent
without each choosing local values independently.

## Layers

### Reference tokens

Raw, named values with no product meaning on their own.

Illustrative namespaces only:

- `color.purple.*`, `color.neutral.*`
- `space.*` — see [Spacing and Layout](./SPACING_AND_LAYOUT.md) for the
  approved quarter-rem scale
- `font.family.*`, `font.size.*`, `font.line-height.*`
- `radius.*`, `shadow.*`, `duration.*`, `easing.*`

### Semantic tokens

Intentful roles consumed by components.

Illustrative namespaces only:

- `surface.canvas`, `surface.raised`, `surface.overlay`
- `layout.gutter.inline`, `layout.section.block`, `layout.panel.padding`
- `text.primary`, `text.secondary`, `text.inverse`
- `border.subtle`, `border.strong`
- `action.primary`, `action.secondary`, `action.danger`
- `status.healthy`, `status.attention`, `status.critical`
- `focus.ring`

### Component tokens

Component-specific roles are exceptional. They are introduced only when a
stable component need cannot be expressed clearly through semantic roles.

Example shape: `action-button.primary.background`.

## Rules

1. Components consume semantic tokens by default.
2. Semantic tokens map to reference tokens inside a theme, never the reverse.
3. Token names describe purpose, not an incidental visual property.
4. Token values use platform-neutral units or values whenever practical.
5. Tokens do not encode page or device names.
6. A token is not created simply to preserve a one-off visual exception.

## Future source and output boundary

The canonical token source will be chosen after this framework review. It must
be versionable, human-reviewable, platform-neutral, and able to produce a web
adapter.

The first adapter will emit CSS custom properties for the Next application.
React components consume those semantic properties. Future platform adapters
translate the same semantic intent rather than copy web styles.

```text
canonical token source (format pending)
             ↓
theme maps and semantic roles
             ↓
web CSS custom properties
             ↓
React components and examples
```

## Explicitly deferred

- Exact purple values and contrast pairings.
- Theme count and user theme-selection behavior.
- Token-generation tooling.
- Figma variable mapping.
- Native-platform outputs.

