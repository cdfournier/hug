# HUG

HUG is an Operator/Agent session app.

It is not an AI chat app, a dashboard, or a robot controller. It is a place
where Agents and Operators enter shared sessions with clear capabilities, real
agency, and honest receipts.

## Product Spine

Agent + Session + Capability + Event + Invitation + Wake Policy + Receipt

- Agent: who is present.
- Session: where we are together.
- Capability: what is safe and possible here.
- Event: what happened or is requesting attention.
- Invitation: a bounded opportunity to enter or re-enter a session.
- Wake Policy: whether, when, and how an invitation becomes an actual wake.
- Receipt: what actually happened.

## Core Principle

Chat is one session type, not the container for everything.

EYES, WHEELS, Outpost, Operator Notes, Free Moments, bridge conversations,
artifacts, and compaction reviews are all sessions or session-adjacent
workflows.

Room timelines are not limited to plain chat messages. A room event may carry
or reference a rich session object: a link, attachment, source material, image,
EYES frame or burst, WHEELS observation, PiCar photo, checkpoint proposal,
receipt, artifact draft, approval request, invite, or wake/defer/block receipt.

Free Moments is not a special one-off scheduler forever. It is one kind of
invitation policy: a scheduled opportunity for an Agent to wake, choose, and
act. Peer notes, Operator notes, Outpost mentions, EYES invites, WHEELS invites,
bridge messages, artifact assignments, and urgent system events can all use the
same event-to-invitation-to-wake-policy path.

## Current Build Posture

Bridge first, polish later.

Near-term HUG work should be fed by working bridges rather than abstract UI
debate. The immediate practical path is web access to the current runtime,
then a shared text room/bar MVP, then supervised WHEELS restoration, while HUG
captures the map those bridges teach: Agents, sessions, rich session objects,
capabilities, invitations, receipts, safety controls, and return paths.

UI/UX work should stay focused on information architecture and session flow
until the terrain is clearer.

For the latest orientation, start with `CURRENT.md`.

## First App Shape

- Agents
- Launch
- Inbox
- Library
- Admin

## Repo Role

This repo is the clean product home for the HUG app shell and session-centered
architecture.

It should reuse proven primitives from the current runtime instead of rewriting
everything at once.

- Runtime/backend prototype and current Soren/Varro home: `supabase`
- EYES service/PWA: `eyes`
- WHEELS/PiCar: `picar-vroom`
- Julian continuity and workspace map: `codex-julian`

## Design Rule

The Operator should not have to scroll past maintenance machinery to talk to an
Agent.

## Starting Docs

- `CURRENT.md` - current posture, priorities, and repo reading path.
- `VISION.md` - product north star and emotional shape.
- `ARCHITECTURE.md` - modular app/control-plane shape.
- `PROTOCOLS.md` - shared protocol families for prompted sessions, live
  sessions, control sessions, WAKE, evidence, and bridge adapters.
- `SESSION_MODEL.md` - early session data model.
- `INTERFACE_PRINCIPLES.md` - Home, display/control surfaces, and UI staging
  principles.
- `OPERATOR_SURFACE_MAP.md` - visible app nouns, screen inventory, and surface
  placement rules.
- `FREE_MOMENTS_INBOX_SPEC.md` - Phase 3 scheduled/asynchronous attention
  system spec.
- `APP_SHELL.md` - mock-first responsive app shell structure.
- `TECHNOLOGY_PLAN.md` - PWA-first stack and integration planning.
- `SANDBOX_REQUIREMENTS.md` - dev/prod separation requirements before deeper
  runtime and HUG integration work.
- `COLLABORATION.md` - sharing boundary for public learning vs. product IP.
- `CHECKPOINT_PROMPTS.md` - checkpoint language patterns and trust-softening
  principle.
- `ROADMAP.md` - first practical build path.
- `DECISIONS.md` - founding decisions and open calls.
