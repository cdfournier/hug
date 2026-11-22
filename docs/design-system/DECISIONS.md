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

