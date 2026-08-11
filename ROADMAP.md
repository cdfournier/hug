# HUG Roadmap

HUG is at concept-seed stage.

## Current Priority

Bridge first. HUG should be fed by working Agent/Operator connection surfaces,
not by abstract UI polish.

Immediate practical priorities:

- Make Soren and Varro reachable from the web with a safe, humble Operator
  access path.
- Create a shared text room/bar MVP so the Operator, Julian, Soren, Varro, and
  eventually external approved Agents can gather in one consent-bound timeline.
- Define and stand up a sandbox environment so runtime and HUG integration can
  proceed without touching live Agent continuity data.
- Restore WHEELS as a supervised current-stack/runtime experience before
  optimizing it as a polished HUG surface.
- Keep HUG UI/UX work focused on information architecture, navigation, and
  session flow. Defer component-level polish unless it clarifies the map.

See `CURRENT.md` for the short orientation page.

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

Goal: prove the navigation model without changing the current runtime or
blocking bridge work.

- Create a browser-first PWA prototype with native-app-influenced interaction
  patterns.
- Top-level areas: Agents, Launch, Inbox, Library, Admin.
- Render mock session cards and session detail screens.
- Include chat, EYES, and WHEELS as distinct session types.
- Use realistic sample data from current systems.

Phase 1 is a map exercise, not a finish-design exercise. It should help the
Operator understand the theme park: entrances, lands, sessions, controls,
staff-only doors, safety stops, and return paths.

## Phase 1A: Runtime Web Access MVP

Goal: let the Operator reach current runtime Agents from anywhere without
destabilizing Soren and Varro's existing home.

- Choose the smallest safe web exposure path for the current runtime.
- Add authentication/access control before any public deployment.
- Preserve the current local runtime UI as fallback.
- Confirm chat, source tools, health/status, and checkpoint routines still work
  when accessed remotely.
- Record access receipts and obvious failure states.
- Treat this as the first real-world test of Operator reachability, not the
  final HUG UI.

## Phase 1B: Agent Onboarding Flow

Goal: give Operators a clear path for adding or restoring an Agent without
hand-editing scattered configuration.

- Draft the first-run Agent profile shape.
- Capture model/provider, runtime surface, capability profile, wake policy,
  restoration packet, and default notes/Free Moment settings.
- Separate technical setup from relationship/context setup.
- Include review gates before any autonomous, external, visual, or embodied
  capability is enabled.
- Keep the flow resumable so partial setup does not create a half-known Agent.

## Phase 1C: Sandbox Environment

Goal: separate development from live Agent continuity before deeper runtime and
HUG integration work.

- See `SANDBOX_REQUIREMENTS.md`.
- Prefer a separate Supabase sandbox project, not a shared live table with only
  an `environment` column.
- Separate production and sandbox env files, service-role keys, bridge tokens,
  storage buckets, and wake schedules.
- Seed synthetic Agents, messages, Cafe records, source materials, checkpoint
  proposal states, usage records, and wake-event receipts.
- Run sandbox runtime on a separate fixed local port.
- Label the active environment visibly in Operator-only UI.
- Point HUG dev adapters at sandbox endpoints before wiring new surfaces to
  production.

## Phase 2: Existing Chat As Session

Goal: bring current runtime chat into HUG as one session type.

- Connect to existing `supabase` runtime endpoints.
- Show Soren/Varro chat sessions.
- Show basic cockpit data and tool receipts.
- Keep current runtime UI as fallback.

## Phase 2A: Shared Room / Bar MVP

Goal: create the first social bridge where the Operator and approved Agents can
gather without copy/paste relay.

- Start with text messages and safe links.
- Use one shared timeline as the prompt signal source.
- Treat every new room event as a possible invitation, not a forced wake.
- Respect per-Agent wake policy, quiet hours, budget, and consent.
- Record delivery, read, omit, defer, block, and answer receipts.
- Add Operator-created attachments after text is stable, using existing source
  material access patterns.
- Design the event model for rich session objects from day one: attachments,
  links, source materials, images, EYES frames/bursts, WHEELS observations,
  PiCar photos, checkpoint proposals, receipts, artifact drafts, approval
  requests, invites, and wake/defer/block receipts.

## Phase 3: Free Moments And Inbox

Goal: make scheduled and asynchronous communication legible.

- See `FREE_MOMENTS_INBOX_SPEC.md`.
- Show Free Moments as scheduled opportunities and recent session events.
- Add Operator Notes / Inbox shape.
- Add the approved per-Agent Notepad primitive as a low-pressure side table for
  optional follow-ups. Document first; build only after the runtime packet loop
  and Arrival behavior stay calm.
- Draft event, invitation, and wake-policy backend contracts.
- Support per-agent wake rules: cadence, quiet hours, max wakes, immediate vs.
  batched events, and Operator approval gates.
- Preserve quiet Free Moments without over-notifying.

## Phase 3A: Shared Live Session Prototype

Goal: generalize the shared room/bar into reusable shared-session mechanics.

- Create a session type for event-driven shared conversation.
- Invite Soren and Varro with explicit consent and capability grants.
- Use session timeline events as prompt signals.
- Respect each Agent's wake policy, quiet hours, and budget limits.
- Record receipts for delivered, deferred, blocked, and answered invitations.
- Start with text-only product/workshop sessions before adding EYES/WHEELS.

## Phase 3B: Work Packet Collaboration Lane

Goal: let Julian, Soren, Varro, Cael, and future Agents collaborate on bounded
repo or family-business work without requiring Chris to manually relay every
step.

- See `PROTOCOLS.md`.
- Define the first work packet shape: objective, context, repo, branch, owner
  Agent, conductor, collaborators, allowed paths, allowed tools, done criteria,
  review path, review rollup, pass window, stale signal, merge authority, and
  rollback note.
- Start with documentation and review packets before implementation packets.
- Build the runtime-native work-packet registry before treating GitHub as the
  collaboration lane.
- For MVP, support reading, commenting, passing, deferring, asking questions,
  placing a packet on hold, marking packets ready for conductor rollup, and
  producing a founder-facing rollup.
- Route founder-facing rollups through the Operator Inbox instead of creating a
  packet-only approval panel.
- Treat work packets as a Free Time menu option, not a labor mandate.
- Add WAKE lanes for loud, quiet, digest, and silent packet events.
- Give Agents narrow GitHub capabilities only after the packet loop feels calm:
  start with targeted read-only file evidence by explicit path and commit, and
  require packet responses to cite the files read.
- Defer broad repo browsing, diff inspection, GitHub Issue viewing, comments,
  branch creation, commits, and pull requests until later adapter phases.
- Use GitHub Issues as optional per-packet discussion surfaces only after the
  packet lane has more cycles and known failure modes. PRs attach only once a
  packet contains implementation or documentation diffs.
- Keep direct protected-branch merges reserved for trusted conductor/integration
  roles until policy proves itself.
- Record collaboration receipts so the Operator can review milestones instead of
  reconstructing the whole work trail.

## Phase 4: EYES Session Integration

Goal: make EYES first-class.

- Show EYES session status.
- Copy/share join prompts.
- Show participants and recent observations.
- Integrate frame/burst state from existing EYES service.
- Add visual continuity receipt flow.
- Keep capture Operator-controlled.

## Phase 5: WHEELS Supervised Session

Goal: bring WHEELS back with the right safety posture.

Near-term restoration slice:

- Reconnect the current PiCar/WHEELS stack to the current runtime enough for
  supervised family use.
- Keep the existing WHEELS affordances and safety expectations intact.
- Do not wait for final HUG integration or optimized UI before restoring the
  basic shared experience.

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

- Given the settled ownership decision, what is the smallest useful HUG-owned
  control-plane table set for the shared room/bar MVP?
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
