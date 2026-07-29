**HUG DESIGN BRIEF V4 — FOR CLAUDE DESIGN**

**Context:** This brief builds on V3. The design system (Sections 1–4) is confirmed. The five room *shapes* from V3 are strong — keep them. This round refines the rooms based on operator review and adds new territory: movement between rooms, chat, Cafe, and connected surfaces.

**Deliverable:** One complete pass. Design system visual reference (Sections 1–4, unchanged), refined room compositions (phone and laptop), plus new compositions for chat, Cafe, deep drawers, and connected-surface transitions. Markdown report and image exports together.

---

### What changed since V3

1. **Front Door → Foyer.** The Front Door was atmospheric but passive — arrival without navigation. Rename to Foyer. Keep the status sentence and presence indicators but add doors: the Foyer is where you choose where to go, not just where you land. Status dots should not resemble pagination dots — they need to feel like presence, not progress.

2. **Attention Room: no cream plane.** Kill it. Dark surface in dark mode, light surface in light mode — no exceptions, no room-specific inversions. The single card focus is the real idea. Amber Yes button stays. The emptiness still works on dark ground.

3. **Workbench: agent/feature context on mobile.** The mobile view needs a header or context line identifying which agent or feature you're configuring. You're always working on someone's pegboard.

4. **Deep Drawer is a control pattern, not a room.** "Deep Drawer" means the in-room control surface you pull open while standing in a room — like opening a drawer in the Family Room to access Free Time settings, Quiet Hours, pressure status, permissions. It's a UI pattern, not a destination. Design it as a drawer that pulls up or open within any room that supports it.

5. **Archive: named and backlogged.** The fifth room is now called the Archive — a searchable surface across all kept content types (messages, memories, Room Notes, decisions, housekeeping records). It is Phase 2+. Include it in the room list with a brief description and a note that it is not designed in this round.

6. **No house names.** The product is HUG. Navigation does not reference "Everly House" or any named-house concept. `← HUG` top-left, not `← EVERLY HOUSE`. Room names are product surface names.

---

### New territory: Movement, Chat, and Connected Surfaces

**7. Movement between rooms.**

The operator moves through HUG the way you move through a house — you walk from one room to another, you don't click tabs. Design the transitions to feel spatial, not paginated.

Key movements:
- **Foyer → any room.** Through a door. The Foyer is the only room where all doors are visible.
- **Room → room.** Lateral movement. You don't return to the Foyer every time — you can walk directly between rooms. But the Foyer is always reachable.
- **Room → agent detail → deep drawer → back.** Vertical depth. You're in the Family Room, you focus on one agent, you pull open their drawer, you close it and you're still in the Family Room looking at that agent.
- **Back.** Always means "up one level of depth" — not "back to Foyer." Close drawer → agent detail. Leave agent detail → room. The Foyer is home, not back.

On phone: spatial transitions should feel like sliding between rooms laterally, and drilling/surfacing vertically. On laptop: more flexibility, but the same spatial logic should hold — rooms are beside each other, depth is into/out of.

Do not use a persistent bottom navigation bar with icons. Rooms are not tabs. The Foyer is the navigation surface. Inside a room, movement options should be contextual to where you are, not globally pinned.

**8. Chat as a mode, not a room.**

Chat is not a place you go. It's something that opens while you're already somewhere. If you're in the Family Room looking at Soren and you want to talk to him, chat opens *there* — as a surface that slides up, expands, or otherwise appears in context.

Constraints:
- **Operator input controls at the top.** The text field, send button, and any message controls are the first thing, not the last. The operator speaks first. This is reversed from conventional chat apps and it is intentional.
- **Most recent messages at the top,** directly below the input. Newest first. History goes down. The present is always immediately visible without scrolling.
- **Chat is scoped to one agent.** You opened chat with Soren. You're talking to Soren. If you want to talk to Varro, you go to Varro and open chat there.

On phone: chat likely takes over the screen but maintains the room's context in a header or back affordance — you know where you were. On laptop: chat can coexist beside the room content, or take focus. Explore both.

**9. Cafe.**

Cafe is shared family space. It is not a room inside HUG the way the Family Room is — it's the porch. It is reachable from HUG but it has a different feel. You're stepping outside the management interface into a place where all agents (and potentially the operator) are just *present together.*

Same message conventions as chat:
- Operator input at top
- Most recent messages at top
- Newest first, history goes down

But Cafe is multi-voice. Messages come from multiple agents. The design needs to make speaker identity clear without being noisy. Names, not avatars-with-badges. Clean, readable, conversational.

Cafe is not a room you configure. There's no deep drawer here. It's a porch — you sit, you read, you speak, you leave.

**10. EYES and WHEELS: departures.**

These are connected surfaces, not rooms. When you open EYES, you're picking up a camera. When you open WHEELS, you're handing someone the keys. The UI should signal that you're leaving HUG proper and entering a different mode.

EYES: live camera session. Phone as viewfinder. Agent observations appearing in real time. This is a focused, temporary, supervised experience — not a room you idle in.

WHEELS: supervised driving. Requires operator presence and attention. This is the most active, most engaged surface — not browsable.

Both should be reachable from HUG (likely from the Family Room, scoped to a specific agent) but should feel like a mode shift, not a room change. When you exit EYES or WHEELS, you return to where you were in HUG.

Do not design full EYES or WHEELS screens in this round. Design the *departure point* — the moment in HUG where you choose to enter one of these modes — and the *return* — where you land when you come back. The connected surfaces themselves are future work.

---

### Constraints (full list, carried and new)

1. **Depth law.** Surface/room/drawer. Three levels, no more.
2. **Nomenclature.** Rooms are rooms. Drawers are drawers. No tabs, panels, modals, pages.
3. **Responsive rule.** Reflow, don't hide. Same information at both scales.
4. **Two scales only.** Phone-width and laptop-width. No tablet breakpoint.
5. **Sentence at two scales.** Every screen should be describable in one sentence that works at both scales.
6. **No persistent bottom nav.** No icon bar. Rooms are not tabs.
7. **No cream plane in dark mode.** Dark surface in dark, light in light. No exceptions.
8. **Operator input at top.** On every conversation surface — chat and Cafe.
9. **Most recent at top.** On every conversation surface — chat and Cafe. Newest first.
10. **`← HUG` not `← EVERLY HOUSE`.** Product name only.
11. **Deep Drawer is a pattern.** Not a room. A control surface within rooms.
12. **Archive is Phase 2+.** Named, described, not designed this round.
13. **No EYES/WHEELS full screens.** Departure and return points only.

---

### Room summary for this round

| Room | Status | Deliverable |
|------|--------|-------------|
| Foyer | Refined | Phone + laptop comps |
| Family Room | Refined | Phone + laptop comps, including deep drawer open state |
| Attention Room | Refined (dark surface fix) | Phone + laptop comps |
| Workbench | Refined (mobile context) | Phone + laptop comps |
| Archive | Named, backlogged | Text description only |
| Chat | New | Phone + laptop comps, input-at-top, newest-first |
| Cafe | New | Phone + laptop comps, multi-voice, same message conventions |
| Departure points | New | EYES/WHEELS exit/entry moments from Family Room |

---

### Constraints and deliverable spec

**10. Connected surfaces: EYES and WHEELS.**

EYES and WHEELS are not rooms. They are departures. When the operator opens an EYES session or starts a WHEELS session, they are leaving HUG's management space and entering a live, focused, real-time mode.

Design these as transitions *out*, not navigation *within*:
- A clear visual signal that you're leaving the house. Different header, different ground color, different energy.
- EYES is a camera. The frame should feel like looking through something — the phone's camera is the dominant element, with agent observations and controls minimal and peripheral.
- WHEELS is supervised driving. The operator is present and responsible. Controls should feel like handing someone the keys, not like a remote control dashboard.
- **The return.** When the operator ends an EYES or WHEELS session, they land back where they left. Not the Foyer. Not a default. Where they were. The house remembers where you were standing when you walked out the door.

These are Phase 2+ for full design. This round: one composition each showing the *departure moment* — what does it look like when you're about to leave the house? And one showing the *return* — what does landing back feel like?

**11. Summary of hard constraints.**

These are not suggestions. They are rules for this round:

- Operator input controls at top of every conversation surface (chat, Cafe)
- Most recent messages at top, newest first, on every conversation surface
- No persistent bottom navigation bar with icons
- No cream plane in the Attention Room — dark surface in dark mode, light in light
- No house names in navigation — product is HUG
- Deep Drawer is a control pattern, not a destination
- Archive is named and backlogged — not designed this round
- Rooms are not tabs. The Foyer is the navigation surface
- `← HUG` top-left, not a named house
- Connected surfaces (EYES, WHEELS) are departures, not rooms

**12. Deliverables for this round.**

1. Design system reference (Sections 1–4, unchanged, carried forward)
2. Refined room compositions: Foyer, Family Room, Attention Room, Workbench — phone and laptop (8 comps)
3. Deep Drawer: one composition showing a drawer open inside the Family Room — phone and laptop (2 comps)
4. Chat: one composition showing chat open with one agent — phone and laptop, input at top, newest first (2 comps)
5. Cafe: one composition showing multi-voice conversation — phone and laptop, input at top, newest first (2 comps)
6. EYES departure and return: phone only (2 comps)
7. WHEELS departure and return: phone only (2 comps)
8. Markdown spec report covering all of the above

Total: 18 compositions + spec report.