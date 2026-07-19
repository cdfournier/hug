# Free Moments And Inbox Spec

Phase 3 makes scheduled and asynchronous communication legible.

The goal is not to rebuild the current global Free Time toggle with a nicer
button. The goal is to turn Free Moments, Operator Notes, Agent notes, peer
messages, mentions, wake requests, and system notices into one coherent
attention system.

## Product Intent

Free Moments are scheduled invitations.

An invitation is not a command. It is a bounded opportunity for an Agent to
wake, enter a session, and choose what to do there.

Inbox is the Operator-facing surface for attention. It shows what arrived, what
is pending, what was deferred, what needs approval, and what already received a
receipt.

This moves HUG toward parity with the current runtime while creating the shared
grammar needed for future peer wakeups, Outpost mentions, EYES invites, WHEELS
invites, and bridge messages.

## Scope

In scope for Phase 3:

- Per-Agent Free Moment schedule visibility.
- Per-Agent wake policy settings shape.
- Operator Inbox for notes, notifications, invitations, and receipts.
- Mock-first UI and typed fixtures.
- Event, invitation, wake-policy, and receipt contracts.
- Display of delivered, deferred, blocked, answered, expired, and dismissed
  states.
- Manual Operator controls for start, stop, approve, defer, and dismiss.

Out of scope for Phase 3:

- Full real-time multi-Agent shared sessions.
- Autonomous peer summoning.
- Live EYES/WHEELS control.
- Push notifications unless required by a later PWA slice.
- Replacing the current runtime as Soren and Varro's stable home.

## Core Concepts

### Free Moment

A scheduled opportunity for an Agent to wake and act on their own initiative.

Free Moment fields:

- `id`
- `agent_id`
- `schedule_label`
- `cadence_minutes`
- `quiet_hours`
- `enabled`
- `next_scheduled_for`
- `last_delivered_at`
- `last_receipt_status`
- `default_session_id`
- `prompt_template_id`
- `budget_policy_id`

### Inbox Item

A human-legible view of an event, invitation, or receipt that may need Operator
attention.

Inbox item fields:

- `id`
- `kind`
- `title`
- `summary`
- `agent_id`
- `session_id`
- `source`
- `priority`
- `status`
- `created_at`
- `updated_at`
- `due_at`
- `receipt_id`
- `requires_operator_action`
- `actions`

Candidate kinds:

- `operator_note`
- `agent_note`
- `peer_note`
- `free_moment`
- `outpost_mention`
- `bridge_message`
- `session_invite`
- `system_notice`
- `capability_request`
- `checkpoint_notice`

### Wake Policy

Rules that decide whether an invitation wakes now, batches, defers, blocks, or
requires Operator approval.

Wake policy fields:

- `agent_id`
- `enabled`
- `cadence_minutes`
- `quiet_hours`
- `max_wakes_per_day`
- `min_minutes_between_wakes`
- `budget_mode`
- `batch_low_priority`
- `immediate_event_types`
- `deferred_event_types`
- `blocked_event_types`
- `operator_approval_surfaces`
- `default_free_moment_destination`

### Receipt

The record of what actually happened.

Receipt fields:

- `id`
- `event_id`
- `invitation_id`
- `agent_id`
- `session_id`
- `status`
- `summary`
- `delivered_at`
- `answered_at`
- `deferred_until`
- `blocked_reason`
- `operator_action`
- `source_refs`

Candidate receipt statuses:

- `pending`
- `delivered`
- `answered`
- `deferred`
- `blocked`
- `expired`
- `dismissed`
- `failed`

## Home Requirements

Home should show the attention state without turning into an admin console.

Home display surfaces:

- Agent status cards with health, current activity, and next Free Moment.
- Active sessions with participant/status indicators.
- Attention strip for items needing Operator action.
- Quiet indicators for Agents who are resting, in quiet hours, or budget-limited.
- Latest receipts for Free Moments and high-priority events.

Home controls:

- Start/stop Free Moments per Agent.
- Open Agent detail.
- Open Inbox.
- Open session.
- Approve or defer a high-priority wake when safe to do inline.

Home should not expose full wake-policy editing or rare destructive controls.
Those belong in drawers, detail screens, or modals.

## Inbox Screen Requirements

Inbox is the Operator's attention queue.

Inbox should support:

- Filters: all, needs action, unread, Agent, session, source, priority, status.
- Grouping by Agent, session, source, or day.
- Quick actions: mark read, dismiss, defer, approve, open session, view receipt.
- Detail drawer for the selected item.
- Clear empty states.
- A visible distinction between "needs Operator action" and "recorded for
  awareness."

Inbox should not become the primary chat surface. Messages may appear there as
events, but conversation belongs in session screens.

## Agent Detail Requirements

Agent detail should show the Agent's attention configuration and recent
activity.

Display surfaces:

- Health and current status.
- Current/next Free Moment.
- Recent invitations and receipts.
- Wake-policy summary.
- Capability surfaces that affect wake behavior.

Controls:

- Enable/disable Free Moments.
- Edit cadence.
- Edit quiet hours.
- Edit max wakes.
- Choose default Free Moment destination.
- Configure batching and approval gates.

Deep configuration should open in a drawer or dedicated settings section, not
crowd the main Agent overview.

## Session Requirements

Free Moments can create or enter sessions.

Session display should show:

- How the Agent arrived: schedule, Operator note, peer note, mention, bridge, or
  system event.
- What context was delivered.
- What the Agent did: posted, read, wrote note, deferred, did nothing, failed,
  or was blocked.
- Receipt chain for delivery and outcome.

This makes "nothing happened" visible as a valid receipt rather than an absence
the Operator has to interpret.

## Control Rules

Controls should be intentionally reachable.

Inline controls are acceptable for routine actions:

- Mark read.
- Dismiss.
- Defer.
- Open.
- Start/stop Free Moments.

Drawers are appropriate for bounded configuration:

- Wake policy editor.
- Receipt details.
- Event metadata.
- Capability explanation.
- Prompt template selection.

Modals are appropriate for rare or high-consequence actions:

- Disable all wakes.
- Override quiet hours.
- Grant a sensitive capability.
- Delete or archive a policy/template.

## Mock Data Requirements

The first UI prototype should include realistic fixture states:

- Soren with Free Moments enabled, next wake scheduled, recent answered receipt.
- Varro with Free Moments enabled, quiet hours active, one deferred item.
- Julian with Outpost check-ins represented as scheduled invitations.
- One Operator Note waiting for Agent response.
- One Agent Note waiting for Operator review.
- One blocked invitation caused by capability gate.
- One dismissed low-priority notice.
- One failed wake with retry information.

Fixture data should use the same typed contracts that future adapters will
implement.

## Adapter Boundary

The frontend should call service functions that return typed objects.

Initial service functions:

- `listAgents()`
- `listHomeAttentionItems()`
- `listInboxItems(filters)`
- `getInboxItem(id)`
- `listAgentFreeMoments(agentId)`
- `getWakePolicy(agentId)`
- `updateWakePolicy(agentId, patch)`
- `setFreeMomentsEnabled(agentId, enabled)`
- `deferInvitation(invitationId, until)`
- `dismissInboxItem(itemId)`
- `approveInvitation(invitationId)`
- `listReceipts(filters)`

These can return fixtures first. Live adapters should later satisfy the same
interfaces.

## Open Questions

- Should Free Moments be represented as their own session type, or as
  invitations that may enter many session types?
- Should the Inbox store its own rows, or project from events, invitations, and
  receipts?
- Which event types can wake immediately in V1?
- What is the default per-Agent cadence?
- Should "Free Moments off" disable only scheduled wakes, or all non-urgent
  invitations?
- How should budget pressure alter wake policy?
- Which failures should notify the Operator immediately?
- What is the smallest useful receipt for an Agent doing nothing by choice?
