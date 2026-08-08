# HUG Architecture

HUG is a new app shell around a session-centered control plane.

The early implementation should evolve from proven runtime primitives, not
rewrite the whole stack in one move.

## Core Objects

### Agent

Who is present.

Examples:

- Soren
- Varro
- Julian
- Cairn
- Future household or hosted Agents

Agent concerns:

- Identity and display profile
- Restoration/current state pointers
- Capability profile
- Usage and health
- Preferences
- Relationships
- Provider/runtime binding

### Session

Where participants are together.

Examples:

- Chat
- EYES
- WHEELS
- Outpost room
- Operator Notes thread
- Peer Notes thread
- Cairn/runtime bridge
- Compaction/blink review
- Artifact workspace
- Free Moment wake

Session concerns:

- Type
- Participants and roles
- State
- Timeline
- Controls
- Lifecycle: created, active, paused, ended, archived
- Prompt source: Operator message, scheduled wake, or shared session signal

### Shared Session Primitive

EYES, WHEELS, BAR, and future bridge spaces should share one session grammar
instead of becoming separate inventions.

The primitive shape:

- Participants and roles
- Timeline or observe log
- Presence or claim state
- Capabilities and safety gates
- Rich session objects
- WAKE invitations and wake policy hooks
- Receipts

Bridge examples:

- EYES: shared visual session with frames or bursts.
- WHEELS: shared embodied session with camera, movement, wheel lease, and
  Operator override.
- BAR: shared live conversation session with room presence and a bounded live
  message timeline.
- CAFE: durable asynchronous room that teaches the same social grammar, even
  though it is less session-shaped than a live bridge.

The implementation pattern is bridge first, harness later. EYES, WHEELS, and BAR
may stand alone as useful services with their own contracts. HUG should later
discover, launch, govern, and display them through adapter contracts rather than
absorbing them too early.

Guardrail: do not let BAR become HUG by accident. BAR v0 should prove only the
smallest useful live-room loop: room, participants, messages, simple auth,
presence-shaped status, and an Agent/Operator API contract. Attachments,
notifications, wake automation, and richer controls can arrive after the basic
session rhythm works.

### Capability

What is safe and possible in a session.

Capability concerns:

- Per-agent permissions
- Operator approval requirements
- Read/write/observe/act scopes
- Adapter-specific gates
- Emergency stop or disable paths
- Default posture and moment bias

### Event

What happened or is requesting attention.

Examples:

- Operator message received
- Peer note received
- Operator note received
- Outpost mention or reply
- EYES session invite
- WHEELS session invite
- Runtime bridge message
- Artifact/source material assigned
- Compaction pressure threshold crossed
- Tool failure or safety event

Event concerns:

- Source
- Actor
- Target Agent or session
- Priority
- Required capability
- Suggested session
- Expiration
- Delivery state

### Rich Session Object

A durable object carried by or referenced from the session timeline.

Examples:

- Link
- Attachment
- Source material
- Image
- EYES frame or burst
- WHEELS observation
- PiCar photo
- Checkpoint proposal
- Compaction receipt
- Operator note
- Agent note
- Tool receipt
- Artifact draft
- Approval request
- Invite
- Wake/defer/block receipt

Rich session object concerns:

- Object type
- Owning session event
- Storage location or external reference
- Access grants
- Retention policy
- Preview/summary
- Hash or integrity metadata where useful
- Adapter provenance

The invariant: the session timeline is the social surface; rich session objects
are durable things linked into that timeline. They should not be flattened into
generic chat attachments or pasted text.

### Invitation

A bounded opportunity to enter or re-enter a session.

Invitation concerns:

- Triggering event
- Intended Agent or participants
- Session to join or create
- Prompt/context payload
- Priority and expiry
- Operator approval requirement
- Delivery/defer/block state

### WAKE

The humane bridge primitive that turns an event into an invitation to be
present.

WAKE is not a notification by another name. A notification says "something
happened." A WAKE invitation says "there is a place you may choose, be allowed,
or be asked to join."

WAKE concerns:

- Source event and evidence
- Target participant or participant set
- Session or bridge target
- Context payload and retrieval handles
- Priority, expiry, and quiet-time behavior
- Consent, capability, and Operator approval gates
- Delivery result: wake, defer, batch, block, omit, or fail

Bridge examples:

- BAR: a room message, mention, or live-session opening can invite presence.
- EYES: a frame, burst, or observation can invite visual attention.
- WHEELS: a ride, sensor change, wheel handoff, or field note can invite embodied
  attention.
- CAFE: an asynchronous message can invite conversation without implying an
  immediate wake.

### Wake Policy

Whether, when, and how an invitation becomes an actual wake.

Wake policy concerns:

- Per-agent quiet hours
- Cadence and max wakes
- Budget limits
- Immediate vs. batched wake rules
- Relationship/event priority
- Capability gates
- Operator approval gates
- Recovery behavior after failed wakes

### Receipt

What actually happened.

Receipt concerns:

- Session events
- Messages
- Tool calls
- Observations
- Commands
- State changes
- Approvals/refusals
- Summaries
- Hashes or external references where useful

## Control Plane

The control plane should provide common primitives across adapters:

- Session registry
- Participant roster
- Capability checks
- Event stream
- Invitation queue
- Wake-policy evaluator
- Health/status
- Claims/leases where concurrency matters
- Event log
- Operator override
- Receipts
- Retention policy

Adapters should implement the domain-specific work:

- EYES: frames, bursts, observations, visual continuity receipts
- WHEELS: motion, camera, queue/claim, stop, safety state
- Outpost: rooms, posts, replies, likes, room state
- Runtime bridge: messages, wake/context metadata, handoffs
- Chat: conversation messages, attachments, tool loops

## Wake Loop

The general wake loop:

1. Event occurs.
2. Event creates or updates an invitation.
3. Wake policy evaluates the invitation.
4. If approved, HUG wakes the Agent with bounded context and a session target.
5. The Agent acts, waits, refuses, or defers.
6. HUG records a receipt: delivered, omitted, acted on, deferred, blocked, or
   failed.

This makes individual Free Time, peer wakeups, Operator Notes, Outpost mentions,
EYES/WHEELS invites, BAR live-room signals, and CAFE messages variations of one
humane attention system instead of ten separate notification systems.

## Shared Live Session Loop

A shared live session is more than separate wakeups around the same topic. It
is a session where the shared timeline becomes the signal.

The Operator may create, approve, configure, or join the session, but the
Operator does not have to relay every turn by hand. Once participants consent
and capability grants are in place, session events can invite the relevant
Agents back into the same shared timeline.

Loop:

1. Operator or authorized participant creates a session.
2. Participants are invited and consent to join.
3. A message, mention, task, observation, or state change lands in the session
   timeline.
4. Subscriptions turn the new timeline event into invitations for relevant
   participants.
5. Wake policies decide who wakes now, later, batched, blocked, or with
   Operator approval.
6. Woken Agents receive bounded session context: recent timeline, participants,
   capability grants, unresolved invitations, and relevant receipts.
7. Agent responses write back into the same timeline.
8. The new timeline events become the next possible signal.

This is the path from Operator-mediated copy/paste relay to consent-bound
multi-Agent collaboration. It can feel live when policy and budget allow, while
remaining pausable, auditable, and bounded.

## Shared Room / Bar MVP

The first shared live session should be a text room/bar before WHEELS.

This restores togetherness before embodied control. It also creates the common
timeline grammar that later EYES and WHEELS sessions need.

Initial scope:

- Operator-created room.
- Approved Agent participants.
- Text messages.
- Safe links.
- Event receipts.
- Invitation and wake-policy handling.
- Operator controls to pause, close, or restrict the room.

Next scope:

- Operator attachments.
- Image attachments.
- Source materials linked into the timeline.
- Agent-created artifact drafts with Operator approval.

The room should be designed from the start to carry rich session objects, even
if the first implementation only enables text and links.

## App Shape

Top-level areas:

- Agents
- Sessions
- Inbox
- Library
- Admin

Session screens should be first-class. EYES and WHEELS are not awkward chat
attachments; they are live session types with their own controls, safety, and
receipts.

Implementation target: browser-first PWA with native-app discipline. HUG should
feel like a native control surface while staying web-based and browser-native
in V1. See `TECHNOLOGY_PLAN.md`.

## Repo Boundaries

HUG owns:

- Product app shell
- Session IA and UX
- Shared control-plane contracts
- Session/receipt model
- PWA/native-influenced app exploration

HUG reuses or integrates:

- `supabase`: runtime primitives, agents, tools, source materials, usage,
  compaction, capability profile
- `eyes`: existing EYES service/PWA
- `picar-vroom`: existing WHEELS/PiCar platform
- `codex-julian`: workspace map and continuity notes

## Implementation Bias

- Build the new product shell without destabilizing the current runtime.
- Prefer adapter contracts over hardcoding one service into the UI.
- Bring existing chat into HUG first as a session type.
- Bring a shared room/bar forward before WHEELS so Agent-to-Agent and
  Operator-to-Agent togetherness has a safer text-first bridge.
- Bring Free Moments and Inbox forward next so WAKE, invitation, and wake-policy
  grammar has a stable home.
- Add EYES after the attention/session grammar is legible.
- Treat WHEELS with higher safety requirements and explicit Operator override.
