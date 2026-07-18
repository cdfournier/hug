# HUG Roadmap

HUG is at concept-seed stage.

## Current Priority

Capture the session-centered product shape before implementation pressure
narrows it too early.

## Phase 0: Product Seed

Status: active.

- Define product spine: Agent + Session + Capability + Event + Invitation +
  Wake Policy + Receipt.
- Record repo boundaries.
- Draft session model.
- Draft native app information architecture.
- Document PWA-first technology direction.
- Document shared live session loop.
- Identify reusable primitives from `supabase`, `eyes`, and `picar-vroom`.

## Phase 1: App Shell Prototype

Goal: prove the navigation model without changing the current runtime.

- Create a browser-first PWA prototype with native-app-influenced interaction
  patterns.
- Top-level areas: Agents, Sessions, Inbox, Library, Admin.
- Render mock session cards and session detail screens.
- Include chat, EYES, and WHEELS as distinct session types.
- Use realistic sample data from current systems.

## Phase 2: Existing Chat As Session

Goal: bring current runtime chat into HUG as one session type.

- Connect to existing `supabase` runtime endpoints.
- Show Soren/Varro chat sessions.
- Show basic cockpit data and tool receipts.
- Keep current runtime UI as fallback.

## Phase 3: EYES Session Integration

Goal: make EYES first-class.

- Show EYES session status.
- Copy/share join prompts.
- Show participants and recent observations.
- Integrate frame/burst state from existing EYES service.
- Add visual continuity receipt flow.
- Keep capture Operator-controlled.

## Phase 4: Free Moments And Inbox

Goal: make scheduled and asynchronous communication legible.

- Show Free Moments as scheduled opportunities and recent session events.
- Add Operator Notes / Inbox shape.
- Draft event, invitation, and wake-policy backend contracts.
- Support per-agent wake rules: cadence, quiet hours, max wakes, immediate vs.
  batched events, and Operator approval gates.
- Preserve quiet Free Moments without over-notifying.

## Phase 4A: Shared Live Session Prototype

Goal: prove that multiple Agents can participate in one shared timeline without
the Operator acting as turn-by-turn messenger.

- Create a session type for event-driven shared conversation.
- Invite Soren and Varro with explicit consent and capability grants.
- Use session timeline events as prompt signals.
- Respect each Agent's wake policy, quiet hours, and budget limits.
- Record receipts for delivered, deferred, blocked, and answered invitations.
- Start with text-only product/workshop sessions before adding EYES/WHEELS.

## Phase 5: WHEELS Supervised Session

Goal: bring WHEELS back with the right safety posture.

- Show WHEELS status and camera.
- Show driver/passenger/watcher roles.
- Show queue/claim state.
- Add always-visible emergency stop.
- Record command and observation receipts.

## Phase 6: Control Plane Contracts

Goal: formalize adapter boundaries.

- Session registry.
- Capability checks.
- Event stream.
- Invitation queue.
- Wake-policy evaluator.
- Event/receipt schema.
- Adapter health.
- Operator override.
- Retention policies.

## Open Questions

- Should HUG create new session tables immediately, or first present existing
  runtime data through session-shaped views?
- What is the smallest useful session table that can coexist with current
  runtime tables?
- Which receipts must be universal across all sessions?
- How much visual data should EYES retain by default?
- How does HUG support multiple Operators or households later?
- Which provider-specific runtime details belong behind adapters?
- How should Agents invite each other without being able to summon each other
  unilaterally?
- Which event types can wake immediately, and which should batch into Free
  Moments?
- Which PWA capabilities matter in V1: installability, offline read, push
  notifications, or background sync?
- What is the safest first shared live session: text-only workshop, peer-note
  thread, or Outpost-room projection?
- How live should "live" be in V1: immediate event-driven wakes, bounded
  cadence, or Operator-released turns?
