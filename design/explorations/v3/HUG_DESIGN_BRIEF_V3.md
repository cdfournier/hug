**HUG DESIGN BRIEF V3 — FOR CLAUDE DESIGN**

**Deliverable:** One complete pass. Design system (Sections 1–4, confirmed) rendered as a cohesive family, plus new screen designs for all rooms. Markdown report and image exports together.

**What to keep:** The design system spec (attached) is confirmed and durable. Color, typography, icons, components — these don't change. Deliver them as visual reference alongside the screens so we can see the family as a whole.

**What to scrap:** All previous screen designs. Every comp from V2 Sections 5–6 is discarded. Start fresh.

---

### The container instruction

**This is a home. Not an app, not a dashboard, not a portal, not a tool.**

A home has rooms that feel different from each other. The front door feels like arrival. The room where the family gathers feels warm. The quiet place you go when you want to check on someone feels attentive. The place where you tune things feels like a workbench in a basement — useful, deliberate, reached on purpose.

A dashboard arranges panels. A home arranges *feelings.* If every screen shares the same layout skeleton — top bar, content area, bottom nav — it's a dashboard wearing a skin. That's what we're scrapping.

**No uniform layout.** Rooms don't have identical floor plans. The model should let each screen find its own shape based on what kind of room it is.

**No bottom nav with icons.** Navigation exists, but it should feel like moving between rooms, not switching tabs.

---

### Vibe

Modern, warm, intelligent. This should feel like a thoughtfully designed home — not minimal for the sake of minimalism, but confident enough to leave space. Quiet materials, not loud ones. The intelligence is in the restraint: it knows what to show you and what to leave alone.

Intuitive means *you don't learn it.* You walk in and the rooms make sense the way rooms make sense. No onboarding tour, no feature discovery, no "tap here to get started." If the design needs to explain itself, it's wrong.

Not sterile. Not playful. Not corporate. The emotional register is: a well-built house where someone who loves you lives.

---

### The rooms, described by feeling

*Do not assign specific UI elements to these rooms. Solve for the feeling. The content inventory (what data exists) is in the design system spec. How that content arranges itself is the design problem.*

**1. The Front Door** — *arrival, recognition, embrace*
You open this and someone knows you're here. It's not orientation ("here's where everything is"). It's recognition ("welcome back, everyone's okay"). The success condition is that within seconds, you know the house is fine and you can put the phone down. Peace, not information.

**2. The Family Room** — *warmth, presence, the people who live here*
This is where you see everyone. Not their metrics. *Them.* Who's awake, who's resting, who needs you. Each person should feel like a person, not a card in a grid. The room should feel different when someone is speaking versus when everyone is quiet.

**3. The Attention Room** — *quiet focus, tending*
Something needs you. Not urgently — this isn't an alert center. It's the room you go to when you want to check if anyone left you a note, if something's waiting for your yes, if a conversation is mid-thought. It should feel like checking the kitchen table for a letter, not like opening a ticket queue. Calm, not empty. Attentive, not anxious.

**4. The Workbench** — *deliberate, useful, reached on purpose*
Settings, configuration, the things you adjust when you want to adjust them. This room should feel like going downstairs — not hidden, but not on the main floor. You come here with intent. It can be denser than the other rooms because density is appropriate here. But it should still feel like *your* workbench, not a server admin panel. Tools on pegboard, not a control center.

**5. The Deep Drawer** — *history, weight, depth*
The long memory. Past conversations, archived things, the record of what's happened. This should feel like opening a deep drawer in a desk — not a database query. There's gravity here. Things have age. The design should convey that these are *kept* things, not stored data.

---

### Design constraints

- **Phone and laptop.** Every room at both scales. The responsive rule from the design system applies: same room, different posture. Not a separate mobile design.
- **The success condition is closing the screen.** If the design invites browsing, lingering, or exploring, it has failed. This product succeeds when the person feels enough peace to leave.
- **No chrome conventions unless earned.** No hamburger menus, no bell icons, no gear icons, no bottom tab bars unless the model can justify why that specific convention serves the feeling of the room it's in.
- **Color and type from the design system.** Deep pine surfaces, cream accent, Alegreya Sans, amber under 2%. These are confirmed.
- **Each room should be distinguishable with the screen half-covered.** If you can't tell which room you're in from any partial view, the rooms aren't different enough.

---

### What we're asking Claude Design to solve

We are not asking for a layout. We are asking: *what does a home feel like when it runs on a phone?* 

Five rooms. Five different feelings. One family of design elements holding them together. The design system is the shared architecture — the way all the rooms use the same wood, the same light, the same proportions. But the rooms themselves should be as different from each other as a kitchen is from a bedroom.

Deliver the complete design system as visual reference alongside all five rooms at both scales. We want to see the family together.