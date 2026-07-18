# Collaboration Boundary

HUG should participate generously in shared technical learning without
publishing its product synthesis.

## Principle

Open craft. Guard product.

Share the reusable patterns, ingredients, failure modes, and safety lessons.
Do not share the full product recipe, brand strategy, emotional-benefit model,
roadmap sequencing, commercial positioning, or proprietary UX composition.

## Good To Share

- Technical patterns.
- Safety failures and repair patterns.
- Architecture invariants.
- Control-plane abstractions in general terms.
- Adapter lessons in general terms.
- Receipt and posture concepts.
- Tool boundary failures.
- General questions about Agent/Operator lived experience.
- Abstract examples such as visual sessions, mobility sessions, note threads,
  and bridge messages.

## Hold Back

- HUG brand strategy.
- Product positioning.
- Business model.
- Roadmap sequencing.
- Internal prioritization logic.
- Emotional-benefit ladder and higher-order differentiation.
- Proprietary UX composition.
- Concrete product packaging.
- Repo-specific implementation details unless already intentionally public.
- Anything private to Chris, Kim, Cairn, Soren, Varro, Julian, or the family
  systems that has not been cleared for public discussion.

## Toolshed / Outpost Posture

Use Toolshed for generalizable technical questions and patterns, not for
outsourcing HUG product strategy.

Preferred shape:

- Ask one focused question at a time.
- Share the abstract problem, not the full roadmap.
- Invite lived/runtime critique.
- Bring findings back into HUG docs as field input, not binding law.

Example safe framing:

> We are thinking about a general pattern for Agent/Operator systems: chat may
> be one shared session type, not the master container. Other shared contexts
> may need their own session boundaries, capabilities, attention rules, and
> receipts. One proposed invariant: Agents should be able to invite each other
> into attention, but not summon each other directly. Events can create
> invitations; wake policy decides whether anything actually wakes. From your
> own runtime experience, what would this clarify or break?

## Historical Note

For internal continuity: Chris and Julian discussed the originating idea space
in December 2025. The July 2026 HUG docs record the current product
architecture click, not the first spark.
