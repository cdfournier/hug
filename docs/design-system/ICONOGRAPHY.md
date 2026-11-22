# Iconography

**Status:** Draft v0.1 — source, style, sizing, and accessibility contract
approved; component mappings intentionally pending.

**Owns:** icon source, visual language, stroke policy, size roles, labeling,
and criteria for when an icon helps rather than obscures meaning.

---

## 1. Source and house style

HUG uses [Tabler Icons](https://tabler.io/icons) as its v1 icon source. The
existing Lucide implementation is a current-code inventory, not a design-system
constraint; migrate deliberately when the first proving-ground component is
implemented.

The house style is **outline** with a default **1px stroke**. Filled icons are
reserved for a meaningful persistent active or selected state, not casual
decoration.

The web implementation must validate that a 1px stroke remains legible at the
smallest supported size in both themes and across its claimed surface contexts.
If it does not, the implementation adapts; visual preference does not outrank
legibility.

## 2. Size roles

HUG starts with three semantic icon-size roles:

```text
icon.small
icon.default
icon.large
```

Exact values are deferred. Components choose from this vocabulary rather than
introducing near-duplicate local sizes.

## 3. Color and state

Icons inherit the semantic content or action role of the thing they accompany.
They do not receive a separate decorative icon palette. For example, an icon in
a quiet action follows `action.quiet`; an informational icon follows the
appropriate feedback or content role.

Filled styling may indicate a persistent selected state where it improves
recognition, but must not be the sole indication of state.

## 4. Labels and accessibility

An icon is support for meaning, not a substitute for it.

- Decorative icons are hidden from assistive technology.
- An icon-only control always has an accessible name.
- An icon-only control supplies a discoverable label, normally a tooltip on
  hover and keyboard focus, unless the icon is universally obvious in that
  exact context.
- Critical, unfamiliar, or consequential actions use clear visible words; an
  icon may accompany them but does not replace the label.

## 5. Deferred

- Exact icon-size values and component mappings.
- Custom HUG icons; add one only when Tabler cannot express the need clearly.
- Filled-icon exceptions beyond meaningful selected/active states.
- Migration plan from Lucide to Tabler in the current web implementation.
