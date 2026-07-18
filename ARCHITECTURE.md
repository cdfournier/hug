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
EYES/WHEELS invites, and bridge messages variations of one humane attention
system instead of ten separate notification systems.

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
- Add EYES next because it is already working and session-shaped.
- Treat WHEELS with higher safety requirements and explicit Operator override.
