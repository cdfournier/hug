# Operator Surface Map

This document explains what the Operator sees in HUG and what each thing is
for.

It is the bridge between the product model and the visible app shell. If a
screen feels confusing, this is the first document to check: either the UI is
using the wrong noun, the wrong level of detail, or the wrong surface.

## Core Nouns

### Agent

An Agent is a participant the Operator can work with.

Examples: Soren, Varro, Julian.

On screen, an Agent should answer:

- Are they reachable?
- Are they healthy?
- What are they doing now?
- How much window pressure are they carrying?
- When are they likely to wake or be available next?
- Where should the Operator go to engage them?

### Session

A Session is a bounded place where one or more participants share context.

Session is primarily a model noun. The Operator-facing top-level surface should
usually say Launch, Place, Room, Chat, Note, EYES, or WHEELS rather than asking
the Operator to think in session taxonomy.

Chat is one session type. EYES, WHEELS, Free Moments, Operator Notes, peer
notes, compaction reviews, artifact workspaces, and external rooms can also be
session types or session-adjacent workflows.

On screen, a Session should answer:

- What kind of place is this?
- Who is or can be present?
- Is it active, paused, ended, draft, or blocked?
- How does a participant enter it?
- What safety or capability rules apply?
- What happened recently?

### Inbox Item

An Inbox Item is an attention object.

It may be a note, an invitation, an approval request, a blocked capability, a
system notice, or a receipt that needs review.

On screen, an Inbox Item should answer:

- Does the Operator need to act?
- Who or what is it about?
- How urgent is it?
- What action is safe from here?
- Where is the full context?

### Receipt

A Receipt is proof that something happened.

Receipts are not the same as notifications. A notification asks for attention.
A receipt preserves an outcome.

On screen, a Receipt should answer:

- What was delivered, answered, deferred, blocked, or dismissed?
- Who was involved?
- When did it happen?
- Where can the Operator inspect the source?

### Invitation

An Invitation is a bounded opportunity for an Agent to enter or re-enter a
session.

Free Moments are one invitation pattern. Operator notes, peer messages,
external mentions, EYES invites, WHEELS invites, and bridge messages may also
become invitations.

On screen, an Invitation should answer:

- Who is being invited?
- Into what session?
- Why now?
- Is it immediate, deferred, batched, blocked, or approval-gated?

### Wake Policy

A Wake Policy decides whether an invitation becomes an actual wake.

On screen, a Wake Policy should answer:

- Is scheduled waking enabled?
- What cadence is allowed?
- Are quiet hours active?
- What events are immediate, deferred, or blocked?
- Is the current budget mode normal, frugal, or paused?

### Capability

A Capability is something an Agent or Operator can safely do.

Examples: read sources, send messages, join EYES, observe WHEELS, request a
checkpoint, create an artifact.

On screen, a Capability should answer:

- Is it on, off, read-only, draft-only, or approval-gated?
- Who can use it?
- What safety rule controls it?
- What happens if someone tries to use it while blocked?

### Adapter

An Adapter connects HUG to an external system.

Examples: runtime, EYES, WHEELS, Outpost, future bridges, source storage, search
providers.

On screen, an Adapter should answer:

- Is the external system connected?
- Is it mocked, online, degraded, or offline?
- What feature depends on it?
- Is the issue informational, blocking, or safety-critical?

Adapter names should usually stay in Admin, diagnostics, or technical drawers.
Routine Operator screens should describe the experience, not leak vendor or
external-system names unless that name is genuinely useful.

## Status Terms

### Health

Health describes whether the Agent or adapter is functioning.

Use for: healthy, degraded, offline, unknown.

Do not use Health to describe mood, availability, quiet hours, or pressure.

### Presence

Presence describes availability or current posture.

Use for: active, idle, resting, quiet hours, budget limited, waiting for
Operator, error.

Presence should help the Operator understand whether engagement is likely to be
smooth.

### Window Pressure

Window Pressure describes how much active context the Agent is carrying.

It belongs on Agent cards because it is operational headroom. It should be
visible but quiet: label, percentage, and level are enough at Home scale.

Suggested levels:

- Low: plenty of room.
- Medium: warm, but not urgent.
- High: plan a checkpoint or reduce heavy reads.
- Critical: avoid large context loads and prepare continuity.

### Usage

Usage describes cost and throughput, not health.

Usage belongs in Home only as a small supporting label. Detailed token/cost
information belongs in an Agent detail drawer or Admin diagnostics.

## Current Prototype Pages

### Home

Home is the first operational surface.

Current Home elements:

- Agent cards: who is present, health, presence, usage posture, window
  pressure, current activity, next Free Moment, and default session.
- Needs Attention: the most important Inbox Items.
- Active Places: currently live or paused experiences.
- Latest Receipts: recent proof of delivery or outcome.

Home should not become:

- A complete activity feed.
- A full Admin panel.
- A session transcript.
- A dense metrics dashboard.

### Agents

Agents is the roster and per-Agent operating summary.

Current Agents elements:

- Agent status cards.
- Wake policy summaries.

Future likely drawers:

- Agent quick profile.
- Full health details.
- Window pressure details.
- Wake policy editor.
- Capability profile.
- Recent receipts for that Agent.

### Launch

Launch is the Operator's way into experiences.

It is not a dashboard of containers. It is a launch pad for starting or
entering the next useful experience.

Current Launch elements:

- Ready paths: the fastest safe routes into chat, notes, and Free Moments.
- Start group: direct Agent contact and lightweight invitations.
- Connect group: EYES, WHEELS, live rooms, bridges, and other experiences with
  stronger adapter or safety boundaries.
- Review group: receipts, artifacts, archives, and slower shared workspaces.
- Availability summary: a small status strip for experiences that are ready,
  mocked, offline, or planned.

Launch should answer:

- What do I want to do?
- Who or what do I want to connect with?
- Is this experience available right now?
- Does this require setup, safety review, or a tunnel?

Launch should not become:

- A metrics dashboard.
- A full session registry.
- A historical feed.
- An adapter diagnostic page.

The session registry still matters, but it belongs behind the launch action, in
Admin, or in a session-detail view when the Operator is already inside the
experience.

### Inbox

Inbox is the attention queue.

Current Inbox elements:

- Items requiring Operator action.
- Deferred, dismissed, delivered, blocked, or failed items.
- A detail surface for the selected item.

Inbox should not become the main chat surface. It is for triage, routing, and
receipts.

### Notes

Notes is an Agent-neutral communication surface.

Current Notes elements:

- A `To` picker with `All Agents` plus individual Agents.
- A Compose section for Operator-authored notes.
- A Ready section for queued or drafted outbound notes.
- A Reply section for inbound Agent notes waiting on Operator attention.

Notes should answer:

- Who should receive this note?
- Is the note for one Agent or all Agents?
- Is it queued, unread, draft, delivered, or blocked?
- Which wake policy or delivery rule applies?

Notes should not be titled around a single Agent at the top level. Agent names
belong in the recipient picker, note metadata, or an Agent-specific detail
state.

Filters and receipt controls may return later, but only after Compose, Ready,
and Reply prove themselves as the base surfaces.

### Library

Library is durable material.

Current Library elements:

- Prompt templates.
- Archives.
- Source materials.
- Receipt artifacts.

Library should stay calm. It is where important materials live after the moment
has passed.

### Admin

Admin is configuration and diagnostics.

Current Admin elements:

- Adapter health.
- Wake policy configuration summaries.

Admin is where the Operator should see system machinery that would clutter
Home, Launch, or Inbox.

## Quiet Baseline

When a surface feels crowded, return it to the quiet baseline before adding new
controls.

Quiet baseline means:

- The card names the object.
- The card shows one or two status signals.
- The card gives one short sentence of context.
- Controls appear only when their behavior is real or when the Operator opens a
  drawer/detail surface.
- Multiple small CTAs should not be used as placeholders for future behavior.

This is especially important on Home and Launch. Home should orient. Launch
should help the Operator choose a path. Neither should expose all available
power by default.

Power should be nearby, not everywhere.

## Surface Placement Rules

### Put It On A Card When

- It answers an at-a-glance status question.
- It helps the Operator choose where to go next.
- It is safe to read quickly without follow-up.
- It is stable enough to summarize.

Examples: health, presence, window pressure, session status, next wake, urgent
attention count.

### Put It In A Drawer When

- It explains a status shown on the current screen.
- It supports a quick decision without changing location.
- It needs more detail than a card can hold.
- It is related to the current Agent, Session, Receipt, or Inbox Item.

Examples: why a capability is blocked, wake policy details, receipt source
metadata, recent tool events, adapter diagnostic details.

### Put It On A Screen When

- It is a place the Operator works or monitors.
- It has its own navigation state.
- It needs multiple sections or sustained attention.
- The Operator is likely to return to it.

Examples: Home, Agent detail, Session detail, Inbox, Library, Admin, EYES,
WHEELS.

### Put It In A Modal When

- The action is rare, risky, irreversible, or safety-sensitive.
- The Operator must explicitly confirm intent.

Examples: create checkpoint, archive/delete, grant sensitive capability,
emergency disable, confirm WHEELS motion mode.

## Current Confusion Risks

These are known risks in the prototype.

- Launch can become a junk drawer if every workflow is shown as a peer action
  without clarifying whether it starts contact, opens a shared experience, or
  reviews durable material.
- Top metrics can look like dashboard decoration if they do not map directly to
  Operator decisions.
- Adapter names can leak into routine screens and make external systems feel
  native before we have designed that boundary.
- Controls can appear before the Operator understands the object being
  controlled.
- Receipts and notifications can blur if both are shown as "things that
  happened."

## Design Test

For each visible element, ask:

1. What Operator question does this answer?
2. Is this the right level of detail for this screen?
3. Does this belong on a card, drawer, screen, or modal?
4. Is the noun understandable without reading the architecture docs?
5. Does this help the Operator act, relax, or navigate?

If the answer is unclear, the UI should either rename the thing, move the thing,
or remove the thing.
