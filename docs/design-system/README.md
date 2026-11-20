# HUG Design System Workbench

**Status:** Framework-only setup  
**Current rule:** This directory defines the language before it defines visual
values or production components.

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
5. [Token Architecture](./TOKEN_ARCHITECTURE.md) — token layers, naming, and
   adapter boundaries, without token values.
6. [Component Contract Template](./COMPONENT_CONTRACT_TEMPLATE.md) — the
   repeatable brief a shared component must satisfy.
7. [Decision Log](./DECISIONS.md) — small records of decisions that future us
   should not have to reverse-engineer.

## Today’s outcome

We are building the workshop, not furnishing the house:

- a shared vocabulary;
- the tracks each foundation will follow;
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
3. Color and themes — map the approved purple reference palette to semantic
   roles and test contrast.
4. Surfaces and elevation.
5. Interaction, focus, and motion.
6. Iconography and the first component proving ground.

That order is a starting hypothesis, not a production commitment. A new product
need may give a different foundation priority.

