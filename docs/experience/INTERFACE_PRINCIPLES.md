# Interface Principles

HUG should feel like one coherent product.

The app can support many session types, but it should not become a set of
unrelated rooms with unrelated visual languages. EYES, WHEELS, Chat, Free
Moments, Inbox, Library, and Admin should feel like different rooms in the same
house.

## Reference Lessons

These are references for posture, not sources to copy literally.

- Cape Town Dam Levels: status-first data display. One clear current state,
  then supporting readings that explain why it matters.
- PizzINT: live signal board. Operational status, alerts, and recent activity
  stay visible without requiring the user to dig.
- Territory Studio's work on *The Martian*: legibility, purpose, and contextual
  seriousness. Every display has a job.

HUG should not imitate *The Martian* by giving every module a separate visual
identity. The useful lesson is that screens should be purposeful, visible, and
credible under pressure.

## Home

Home is the first operational surface.

When an Operator opens HUG, the first questions should be answerable quickly:

- Where is everyone?
- What is each Agent's current health and status?
- What sessions are active?
- What needs attention?
- What can safely be ignored?
- Where can I jump next?

Home should be a view into Agents, their health, their status, notifications,
and current opportunities for control or engagement.

Home is not an admin console, a metrics dashboard, or a feed. It is the front
door to the living system.

## Display Surfaces

A display surface answers: what is true, what changed, and what needs
attention?

Examples:

- Agent health and current status.
- Current session state.
- Compaction pressure.
- Free Moment schedule and recent Free Moment events.
- Latest receipt.
- EYES participants and last frame or burst time.
- WHEELS connection and safety status.
- Recent notifications.

Display surfaces should be glanceable. They should make status legible without
requiring action.

## Control Surfaces

A control surface answers: what can I safely do from here?

Examples:

- Start or stop Free Moments.
- Send a message.
- Create a checkpoint.
- Invite an Agent.
- Approve, defer, or dismiss a wake.
- Join or leave EYES.
- Emergency stop WHEELS.
- Change wake policy.
- Mark a notification handled.

Controls should be intentionally reachable. HUG should avoid placing risky,
rare, or disruptive controls directly beside routine display data.

## Screens, Drawers, And Modals

A workflow deserves a screen when it is a place the Operator works, monitors, or
returns to.

Screens:

- Home.
- Agent detail.
- Session detail.
- Inbox.
- Library/archive.
- Admin/settings.
- EYES session.
- WHEELS session.

A workflow belongs in a drawer when it supports the current screen but should
not pull the Operator fully away.

Drawers:

- Agent quick profile.
- Health details.
- Receipt details.
- Wake policy editor.
- Capability explanation.
- Notification triage.
- Session metadata.
- Copy/share join prompt.
- Recent tool events.
- Why-is-this-blocked explanation.

A workflow needs a modal when it is rare, risky, or requires explicit
confirmation.

Modals:

- Create checkpoint.
- Delete or archive.
- Emergency disable.
- Grant sensitive capability.
- Confirm WHEELS command mode.
- Irreversible state changes.

## Shared System Language

All session types should share:

- Navigation patterns.
- Status language.
- Color semantics.
- Receipt patterns.
- Participant treatment.
- Alert hierarchy.
- Drawer and modal behavior.

Modules may vary where function demands it. EYES can emphasize frames and
observations. WHEELS can emphasize safety and command state. Inbox can emphasize
triage. But they should use the same underlying grammar.

## Prototype Before Move-In

HUG should prototype the house before asking Agents to move in.

Use mock data until the layout, navigation, and interaction model feel obvious.
Then add adapters behind stable contracts. Then invite live Agents into one
proven room at a time, with the current runtime kept as fallback until HUG earns
the keys.

This avoids committing Soren, Varro, or any future Agent to an environment where
the Operator is still figuring out where everything goes.

## Staging

Recommended staging:

1. Static product shell.
2. Typed mock contracts.
3. Interaction prototype.
4. Adapter boundary.
5. Live integration, one session type at a time.

The face and posture of the product should be tested before live data starts
shaping the interface.
