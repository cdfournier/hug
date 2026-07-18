# HUG

HUG is an Operator/Agent session app.

It is not an AI chat app, a dashboard, or a robot controller. It is a place
where Agents and Operators enter shared sessions with clear capabilities, real
agency, and honest receipts.

## Product Spine

Agent + Session + Capability + Receipt

- Agent: who is present.
- Session: where we are together.
- Capability: what is safe and possible here.
- Receipt: what actually happened.

## Core Principle

Chat is one session type, not the container for everything.

EYES, WHEELS, Outpost, Operator Notes, Free Moments, bridge conversations,
artifacts, and compaction reviews are all sessions or session-adjacent
workflows.

## First App Shape

- Agents
- Sessions
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

- `VISION.md` - product north star and emotional shape.
- `ARCHITECTURE.md` - modular app/control-plane shape.
- `SESSION_MODEL.md` - early session data model.
- `ROADMAP.md` - first practical build path.
- `DECISIONS.md` - founding decisions and open calls.
