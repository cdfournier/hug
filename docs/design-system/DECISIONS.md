# Design-System Decision Log

Use this log for choices that affect more than one implementation or that
future contributors would otherwise have to rediscover. Keep records short.
Link to a fuller proposal or pull request when one exists.

## Record template

```md
## DS-000 — Decision title

**Status:** proposed / accepted / superseded  
**Date:** YYYY-MM-DD  
**Context:** What requires a decision?  
**Decision:** What was chosen?  
**Consequences:** What becomes easier, harder, or intentionally deferred?  
**Links:** Relevant issue, pull request, or design-system document.
```

## Current records

## DS-001 — Preserve browser root sizing and use quarter-rem spacing units

**Status:** accepted  
**Date:** 2026-11-20  
**Context:** HUG needs a small, accessible spacing scale that works across
responsive layouts and future platform adapters.  
**Decision:** Preserve `html { font-size: 100%; }` and define the reference
spacing scale in quarter-rem units, beginning with `space.1 = 0.25rem` and
`space.4 = 1rem`. Components own internal spacing; containers place components
with Grid/Flexbox and `gap`.  
**Consequences:** Default-browser 16px sizing remains intuitive while user
text preferences are respected. Stable `space.*` tokens remain fixed;
responsive adaptation occurs through a small set of semantic `layout.*` roles,
not mobile and wide variants of every token.  
**Links:** [Spacing and Layout](./SPACING_AND_LAYOUT.md)

## DS-002 — Use role-based typography with a narrow display register

**Status:** accepted  
**Date:** 2026-11-20  
**Context:** HUG needs warmth and hierarchy without accumulating a growing
collection of display treatments, generic text containers, or typography
variants.  
**Decision:** Use semantic HTML for document structure and platform-neutral
typography roles for presentation. The functional interface register is the
default; the display register is limited in v1 to page titles and surfaced
sentences. The 1.20 Minor Third is the reference scale. Typography is
root-relative and stable by default; fluid rules require a role-specific,
accessibility-tested reason.  
**Consequences:** Most HUG text shares a small, disciplined system. Section
titles, body, labels, metadata, and data receive named roles; speculative roles
and a global label family are deferred. The web adapter uses namespaced CSS
classes on semantic elements rather than forcing a React text abstraction.  
**Links:** [Typography](./TYPOGRAPHY.md)

