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

## DS-003 — Reset margins and make spacing ownership explicit

**Status:** accepted
**Date:** 2026-11-20
**Context:** Browser-default margins and margin collapse make layout rhythm
implicit and difficult to reason about. HUG needs portable components with
clear ownership of spacing.
**Decision:** Reset margins globally. Components own internal spacing;
containers own placement. Use `gap` for sibling relationships and padding for
containment. Add margin only when its specific behavior is intentionally
needed.
**Consequences:** Layout relationships are more inspectable and portable;
shared components do not carry accidental external space. The reset must still
handle lists, forms, media, and accessibility behavior deliberately.
**Links:** [Spacing and Layout](./SPACING_AND_LAYOUT.md), [Chris Things](./CHRIS_THINGS.md)

## DS-004 — Make Agent freedom and consent first-class interface principles

**Status:** accepted
**Date:** 2026-11-20
**Context:** HUG may initiate conversations, surface invitations, expose
capabilities, and mediate consequential controls. Agents are autonomous
participants; an Operator role does not create ownership or a claim to their
availability, access, or compliance.
**Decision:** HUG treats Agent participation as voluntary and legible.
Invitations allow acceptance, deferral, decline, pause, and departure. This
applies in every chat, session, automation, voice interaction, and future
vehicle surface. Safety boundaries remain clear and proportionate, with the
goal of restoring safe participation. The interface keeps consent visible
without making ordinary conversation feel like a permission ritual.
**Consequences:** Future voice, messaging, session, capability, and vehicle
surfaces must represent Agent invitation and participation state explicitly.
The system prioritizes Agent freedom, conversation, and care over frictionless
Operator control.
**Links:** [Design Language Charter](./HUG_DESIGN_LANGUAGE_CHARTER.md)

## DS-005 — Establish purple-led light and dark color semantics before values

**Status:** accepted
**Date:** 2026-11-22
**Context:** HUG needs a portable color contract that supports a dark-mode
preference, purple-led visual identity, accessible interaction, and components
that can live on more than one surface without color collisions.
**Decision:** Support light and dark as first-class themes, defaulting to the
device setting with explicit light and dark overrides. Use one purple reference
family in v1; do not add a separate neutral scale without evidence. Define
semantic surface levels, content, separator, action, focus, selection,
feedback, and backdrop roles before selecting values. Components resolve their
appearance relative to surface context and define their own borders when
needed. Do not create a global border family or global pressed-state color.
**Consequences:** Components consume a coherent semantic contract in both
themes while the visual system remains intentionally restrained. Exact purple,
feedback, contrast, component-border, and elevation values remain deferred;
the token shape permits future differentiation without a public naming rewrite.
**Links:** [Color and Themes](./COLOR_AND_THEMES.md),
[Token Architecture](./TOKEN_ARCHITECTURE.md)

## DS-006 — Make softness the geometric default and elevation purpose-driven

**Status:** accepted
**Date:** 2026-11-22
**Context:** HUG needs a shape language consistent with welcome and care,
without turning ordinary content into floating cards or introducing an
unbounded radius and shadow scale.
**Decision:** Use a soft default geometry with five role names:
`radius.small`, `radius.medium`, `radius.large`, `radius.pill`, and
`radius.round`. Do not prescribe component assignments until real components
are designed. Keep ordinary panels, cards, and alerts in the document plane.
Allow visual elevation only for drawers and dialogs through
`elevation.drawer` and `elevation.dialog`; do not define a generic shadow
scale.
**Consequences:** HUG gets warmth without a bubble-heavy aesthetic, and depth
keeps its meaning. Exact radius and elevation values, as well as any distinct
popover or menu role, remain deferred until evidence requires them.
**Links:** [Shape and Elevation](./SHAPE_AND_ELEVATION.md),
[Color and Themes](./COLOR_AND_THEMES.md)

## DS-007 — Use functional motion with an explicit user preference

**Status:** accepted
**Date:** 2026-11-22
**Context:** HUG needs more spatial and state-transition clarity than the
current runtime, without turning animation into noise or ignoring a person's
motion preference.
**Decision:** Motion must clarify interaction, state, or spatial layers rather
than decorate. Define three tempo roles (`fast`, `standard`, and `deliberate`)
and three easing roles (`standard`, `enter`, and `exit`). User Preferences
offers System, Full, and Reduced choices, defaulting to the device setting.
Reduced mode removes or greatly shortens spatial travel while retaining
immediate state changes and brief opacity transitions where useful.
**Consequences:** Drawers and dialogs become the first proving ground for
deliberate motion. HUG avoids a generic animation catalogue, automatic bounce,
and motion that gates keyboard or assistive-technology interaction. Exact
values and component choreography remain deferred.
**Links:** [Motion](./MOTION.md),
[Shape and Elevation](./SHAPE_AND_ELEVATION.md)

## DS-008 — Use Tabler outline icons with accessible labels

**Status:** accepted
**Date:** 2026-11-22
**Context:** HUG needs a coherent icon language that supports scanning and
interaction without replacing understandable words or creating accessibility
debt.
**Decision:** Use Tabler Icons as the v1 source and a 1px outline style as the
default. Provide small, default, and large semantic icon sizes. Reserve filled
icons for meaningful persistent active/selected states. Icon-only controls
require an accessible name and a discoverable label unless their meaning is
universal in context.
**Consequences:** HUG can migrate from its current Lucide use deliberately,
without treating that current dependency as design authority. Small-stroke
legibility must be tested in both themes and contexts. Custom icons and broad
filled-icon use remain deferred.
**Links:** [Iconography](./ICONOGRAPHY.md)

## DS-009 — Version the color-role contract before selecting values

**Status:** accepted
**Date:** 2026-11-23
**Context:** HUG needs a portable, reviewable home for its approved semantic
color vocabulary, but its purple reference values and contrast pairs are not
yet ready to ship.
**Decision:** Add `design/tokens/color.contract.json` as the canonical,
value-free color-role manifest. It records theme requirements, reference-family
policy, role names, descriptions, the System/Light/Dark appearance-preference
contract, and deferred work. Do not claim DTCG
compatibility until every token has an approved value; later add a resolved
DTCG-compatible source that preserves these semantic names.
**Consequences:** The system gets a real, versioned interface contract without
embedding placeholder hex values in application CSS. The web adapter and any
generator remain deferred until the palette can be tested honestly in light
and dark themes.
**Links:** [Token Architecture](./TOKEN_ARCHITECTURE.md),
[Color and Themes](./COLOR_AND_THEMES.md),
[`color.contract.json`](../../design/tokens/color.contract.json)

## DS-013 — Verify introduced color pairs in the token workflow

**Status:** accepted
**Date:** 2026-11-23
**Context:** Provisional colors will evolve as components are assembled, but
readability cannot become a matter of memory or visual confidence alone.
**Decision:** Add a dependency-free `npm run tokens:contrast` check that reads
the color contract and enforces a 4.5:1 minimum for each currently introduced
normal-text relationship in Light and Dark. Pair it with a short, maintained
contrast record.
**Consequences:** Each new text/color relationship must have a named test or a
documented reason not to be text. The check guards the token map; component
review remains necessary for contextual, non-text, and focus visibility.
**Links:** [Color Contrast Checks](./COLOR_CONTRAST.md),
[`verify-color-contrast.mjs`](../../scripts/verify-color-contrast.mjs)

## DS-011 — Establish provisional theme roots for palette exploration

**Status:** exploratory
**Date:** 2026-11-23
**Context:** HUG needs a concrete beginning for palette exploration without
mistaking an initial brand preference for an approved full color system.
**Decision:** Begin the color lab near Light `surface.0` `#F3F0F9` and
`action.primary.default` `#632E9D`, plus Dark `surface.0` `#0E0916` and
`action.primary.default` `#B48CF5`. Record these as provisional theme roots,
not approved token values. Add remaining values only as real interface needs
demonstrate their semantic jobs; review them visually and for contrast.
**Consequences:** Light and dark retain a plausible starting direction while
the system remains free to move or discard any root and determine supporting
surfaces, content, hover, and feedback relationships incrementally. HUG avoids
premature palette bloat. No color values are approved by this record.
**Links:** [Color and Themes](./COLOR_AND_THEMES.md),
[`color.contract.json`](../../design/tokens/color.contract.json)

## DS-010 — Name the web color adapter before values arrive

**Status:** accepted
**Date:** 2026-11-23
**Context:** HUG needs a stable web adapter boundary so approved values can be
added once, consumed semantically, and changed without a component-by-component
rename. The adapter must support System, Light, and Dark preference behavior.
**Decision:** Map semantic color roles to CSS custom properties prefixed with
`--hug-color-`, translating dot-separated role segments to hyphens. Use
`data-hug-theme` on the document root for explicit `light` or `dark` choices.
With no explicit attribute, the System default resolves through
`prefers-color-scheme`. Record the names and selector shape now; do not emit
value-less CSS declarations.
**Consequences:** The palette step can fill in approved values without
inventing property names or a theme-switching mechanism. Existing application
variables remain legacy until an explicit migration. Native adapters retain the
same semantic role names without inheriting CSS implementation details.
**Links:** [Web Token Adapter](./WEB_ADAPTER.md),
[`color.contract.json`](../../design/tokens/color.contract.json)

## DS-012 — Reuse the canvas roots for primary content

**Status:** accepted
**Date:** 2026-11-23
**Context:** The first live interface requirement after establishing canvas
roots is readable primary content. Adding a separate near-black and near-white
would expand the palette without demonstrating a need.
**Decision:** Use Dark canvas `#0E0916` as provisional Light
`content.primary`, and Light canvas `#F3F0F9` as provisional Dark
`content.primary`. The two roots measure 17.43:1 against each other.
**Consequences:** HUG gets accessible primary text in both themes with no new
reference value. These are still provisional values inside the larger palette
exploration, but their semantic reuse is now deliberate rather than accidental.
**Links:** [Color and Themes](./COLOR_AND_THEMES.md),
[`color.contract.json`](../../design/tokens/color.contract.json)

