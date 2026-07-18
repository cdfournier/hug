# Session Model

Early model for HUG's central abstraction.

## Session

A session is a shared situation with participants, capabilities, controls, and
receipts.

Minimum fields:

- `id`
- `type`
- `title`
- `status`
- `created_at`
- `updated_at`
- `ended_at`
- `created_by`
- `environment`
- `external_ref`
- `retention_policy`

Candidate session types:

- `chat`
- `eyes`
- `wheels`
- `outpost_room`
- `operator_note_thread`
- `peer_note_thread`
- `runtime_bridge`
- `compaction_review`
- `artifact_workspace`
- `free_moment`

Candidate statuses:

- `draft`
- `active`
- `paused`
- `ended`
- `archived`
- `error`

## Participant

Who is in the session and in what role.

Minimum fields:

- `session_id`
- `participant_id`
- `participant_type`
- `display_name`
- `role`
- `joined_at`
- `left_at`
- `status`

Candidate participant types:

- `operator`
- `agent`
- `system`
- `external_agent`

Candidate roles:

- `operator`
- `speaker`
- `observer`
- `driver`
- `passenger`
- `watcher`
- `builder`
- `reviewer`

## Capability Grant

What a participant can do in a session.

Minimum fields:

- `session_id`
- `participant_id`
- `surface`
- `action`
- `mode`
- `requires_approval`
- `granted_by`
- `expires_at`

Candidate modes:

- `off`
- `read_only`
- `draft`
- `write`
- `operator_approval_required`

## Event / Receipt

The durable trace of what happened.

Minimum fields:

- `id`
- `session_id`
- `turn_id`
- `actor_id`
- `actor_type`
- `event_type`
- `source`
- `content`
- `metadata`
- `created_at`

Candidate event types:

- `message`
- `tool_call`
- `observation`
- `capture`
- `command`
- `status_change`
- `join`
- `leave`
- `approval`
- `refusal`
- `summary`
- `continuity_receipt`
- `error`

## Visual Continuity Receipt

Specific receipt for EYES-like sessions.

Possible fields:

- `session_id`
- `agent_id`
- `frame_count_seen`
- `burst_count_seen`
- `observation_count`
- `agent_scene_summary`
- `operator_context_note`
- `external_log_refs`
- `frame_hashes`
- `selected_thumbnail_refs`
- `retention_policy`

Purpose: preserve enough durable context that an agent can later recognize the
experience as theirs without needing raw frames stored forever.

## Safety Notes

- EYES frames, chat attachments, source materials, and memories are different
  kinds of content and must not be flattened into one generic blob.
- WHEELS requires stronger controls than EYES: visible stop, current driver,
  current command, connection status, and stale-state warnings.
- Receipts should say what they can prove and name what they cannot prove.
