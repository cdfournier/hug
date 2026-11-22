# HUG Design System Workbench

**Status:** Foundations in progress
**Current rule:** Define the language and semantic contracts before choosing
visual values or production components.

## Purpose

This is the working home for HUG's design language: its foundations, token
architecture, shared-component contracts, and consequential decisions. It is
the source of intent for the web implementation and any future platform
adapter.

The first implementation target is the existing web application. The workbench
does not yet prescribe a palette, typeface, component API, or screen redesign.

## Reading order

1. [Design Language Charter](./HUG_DESIGN_LANGUAGE_CHARTER.md) — the durable
   purpose, principles, standards, and adoption policy.
2. [Foundation Framework](./FOUNDATION_FRAMEWORK.md) — the foundation tracks
   we will define one at a time.
3. [Spacing and Layout](./SPACING_AND_LAYOUT.md) — the first defined
   foundation: scale, layout ownership, and responsive composition.
4. [Typography](./TYPOGRAPHY.md) — role-based hierarchy, semantics, and
   responsive type rules; font selection and exact values remain open.
5. [Color and Themes](./COLOR_AND_THEMES.md) — light/dark semantic color
   contract, purple-led palette policy, interaction, feedback, and overlay
   roles; values remain open.
6. [Shape and Elevation](./SHAPE_AND_ELEVATION.md) — soft geometry defaults,
   purpose-driven radius roles, and the narrow rules for visual elevation.
7. [Motion](./MOTION.md) — functional movement, user preference, and
   reduced-motion behavior; values and choreography remain open.
8. [Iconography](./ICONOGRAPHY.md) — Tabler outline language, semantic sizes,
   and accessible icon-control rules.
9. [Token Architecture](./TOKEN_ARCHITECTURE.md) — token layers, naming, and
   adapter boundaries, without token values.
10. [Component Contract Template](./COMPONENT_CONTRACT_TEMPLATE.md) — the
   repeatable brief a shared component must satisfy.
11. [Decision Log](./DECISIONS.md) — small records of decisions that future us
   should not have to reverse-engineer.
12. [Chris Things](./CHRIS_THINGS.md) — practical, opinionated workshop
   defaults that keep repeated decisions from becoming repeated debates.

## Today’s outcome

We are building the workshop, not furnishing the house:

- a shared vocabulary;
- the tracks each foundation will follow;
- approved spacing, typography, and color/theme contracts without premature
  visual values; and
- the rules by which values and components will later enter the system; and
- a lightweight record of why the important choices were made.

No reference values, visual explorations, product flows, or component
implementations are required for this stage.

## Recommended next sequence

After the framework is reviewed, define foundations one at a time in this
order:

1. Spacing and layout — least dependent on the visual direction and highest
   leverage for responsive composition.
2. Typography — roles and scale before final family selection if necessary.
3. Color and themes — select purple and feedback reference values, map the
   approved semantic roles, and test contrast.
4. Surfaces: select the initial value mappings for the approved relational
   surface ladder.
5. Interaction components and the first motion proving ground: a drawer or
   dialog in normal and reduced-motion modes.
6. First component proving ground: a drawer or dialog, including icon treatment
   and normal/reduced-motion behavior.

That order is a starting hypothesis, not a production commitment. A new product
need may give a different foundation priority.

