# HUG Design System — Sections 5–6, V2

**July 28, 2026.** Replaces V1 §5–6 entirely. Governed by `HUG_DESIGN_SYSTEM_V2_SECTIONS_1-4.md`; where that document is silent, `HUG_DESIGN_SYSTEM_V1` holds. Sections 7–8 (Motion, Accessibility) stand from V1.

**Success condition, unchanged:** the Operator opens the app, sees everyone is okay, and puts the phone down. Under ten seconds.

Comps: `HUG V2 Screens.dc.html` — Home in three states and the first drawer, at 390 and 1440.

---

## 5. Screens

### 5.0 What a screen is now

A screen is a **place**, not a page. It has an address (nav), a subject (the household, or one agent), and nothing else structural. Under the law of depth (§4.0) the surface answers exactly one question — *is everyone okay?* — and every element that does not help answer it has been moved down a level or deleted.

The V1 screens were composed as documents: a title, a subtitle, then content regions. V2 screens are composed as **furniture**: one ground, one column, drawers that open in it.

| | V1 screen model | V2 screen model |
|---|---|---|
| Top of screen | display title + surfaced sentence | address label; the sentence *is* the title when there is one |
| Home content | card grid with metrics | one column of compressed cards |
| Wide viewport | grid fills the width | column holds its measure; the rest stays empty |
| Depth | drawer/modal for detail | expand in place, then one drawer down |

---

### 5.1 Home

Home is the product's answer to *is everyone okay?* It is a **card stack, an address label, and navigation.** That is the whole surface.

#### The open question, answered: no greeting, no timestamp, no count

The brief asked whether Home needs anything besides the stack. Applying the purest-state test:

| Candidate | Verdict | Why |
|---|---|---|
| Greeting ("Good evening, Operator") | **No** | It answers *who am I*, not *is everyone okay*. The house does not need to be introduced to its own Operator. |
| Timestamp / "last updated" | **No** | It exists to make the Operator distrust what they are looking at. If the surface can be stale, fix the surface. |
| Agent count / "5 agents, all quiet" | **No** | A count is a measurement. Five lit dots already say five, faster than the words do. |
| Screen title "Home" | **No** | The nav already says where we are. A title that repeats the address is a document convention, not an app one. |
| Wordmark | **Yes**, at label scale | `hug` in Sans SC 13px / .14em Ash, top-left. It is an address, not a masthead — the same weight as any other label in the system. |
| Navigation | **Yes** | Getting to Inbox and Launch is function, not decoration. Bottom tab bar on phone, left rail on laptop; icon and word always paired (§3). |

**Consequence — Home carries no serif at rest.** The screen title is gone, so the surfaced sentence is the only serif on the screen, and when nobody is speaking there is no serif at all. Quiet Home is a green field, five warm dots, and five names. This also retires the V1 conflict where a 54px display title and a 26–30px sentence competed for the same voice.

#### Anatomy

| Region | Phone (390) | Laptop (1440) |
|---|---|---|
| Address | `hug`, SC 13px Ash, 20px inset, 22px from top | in the rail, above nav |
| Sentence slot | Alegreya 24px, Linen, 20px inset — **present only when something is being said** | Alegreya 28px, Linen, top of column |
| Card stack | full width less 20px, 10px gaps | single column, **760px measure**, left-aligned in the content area |
| Navigation | bottom bar, 78px, ground `#111A14`, hairline `#1F2C23` | left rail, 232px, same ground |
| Everything right of the column at 1440 | — | **stays empty** |

#### The three states

**All quiet.** Five compressed cards. No sentences, no amber, no serif. Peace is made from *presence*, not from filler: every dot is lit or resting, every name is legible, the rhythm is even, and there is more ground than content. Emptiness would be a blank screen; this is five living things being fine. Card height collapses to name + state (§4.1), so the stack is short and the field around it is large — that surplus of ground is the design doing the emotional work.

**One agent speaking.** One card carries a sentence; four do not. Two mechanisms keep the silent cards from reading as broken:

1. The silent cards are **unchanged** from the all-quiet state — same ground, same border, same dot. Nothing is dimmed, greyed, or de-emphasised to make the speaker stand out. The speaker is louder; the others are not quieter.
2. The speaking card grows *taller*, not brighter. The eye is drawn by mass and by the serif line at the top of the screen, not by contrast against its siblings.

The sentence also surfaces at screen level, in serif — see §6.1 for why that duplication is deliberate and when it is allowed.

**One agent in amber.** Same structure. The amber dot is the only amber on the screen, and the sentence next to it does the explaining, so the colour never has to carry urgency alone. Urgency without alarm comes from three restraints: amber appears once (dot only — never a card border, fill, or badge), the amber card does not move to the top of the stack, and the sentence is phrased as something the Operator can answer rather than a failure they must fix. *"He's asking whether to keep going past his budget."* Not *"Budget limit reached."*

#### Laptop restraint

The 1440 layout is the same layout. The card column holds a 760px measure and the space to its right is left empty. Nothing was withheld from the phone that the laptop is allowed to show — the depth law is not viewport-dependent.

What the extra space is *not* used for: a metrics sidebar, a household summary panel, a second column of agents, sparklines, an activity feed, or an "at a glance" strip. Each of those was considered and each fails the same test — it exists because the space exists.

Permitted uses of horizontal space, in order of preference: **nothing**; the deep drawer when it is open (452px from the right, §4.3); on the Agents screen only, and only at ≤4 agents, a row of expanded cards per §4.2.

---

### 5.2 First drawer — the expanded card

One tap. The Operator wants to know more about one agent.

#### Interaction model: expand in place. Recommended, and argued.

Three candidates were on the table.

| Model | Cost |
|---|---|
| Half-sheet overlay | Covers the other four agents. The Operator gave up the answer to *is everyone okay* to ask about one agent — the trade is backwards. |
| Navigate to detail view | Breaks the ten-second loop: now there is a back gesture between the Operator and putting the phone down. Also imports the web's page model, which §0 rules out. |
| **Expand in place** ✅ | Costs vertical space and a reflow. Nothing else. |

**Expand in place wins because the siblings stay on screen.** Curiosity about one agent should never cancel the reassurance about the rest. The card grows downward, pushing the cards below it down; the cards above do not move, so the Operator's eye stays where they tapped. One card expanded at a time on every viewport; tapping another collapses the first (§4.2).

This is also what makes the depth law legible as *furniture*: the first drawer opens in the same piece of furniture (same ground, warmed border), and only the deep drawer is allowed to overlay — by then the Operator has left the trust question behind on purpose.

#### Contents

Per §4.2, in order: header (dot, name, state — unmoved) · the sentence (persists, same position, same words) · current context · recent activity · actions · MAINTENANCE.

**Recent activity is language, not a log.** Two to four plain sentences, Sans 17px Sage, relative time spelled out in words:

> Posted in the Bar two hours ago.
> Read through three rooms after that.
> Quiet since.

Rules for these lines: one clause of fact per line; time as words, never a stamp (`14:02` is mono and mono is a drawer face); no counts above three, which spell out; no line that is only a time. If there is nothing to say, the section is absent — not empty-labelled.

**Current context** is one or two sentences about what he is holding. *"Still on the visual spec. He's been comparing your two references."* This is the most valuable line on the surface and the hardest to compose; see the §9 flag below.

**Actions** — three, word-only, outlined: **Message · Check in · History.** Small vocabulary held deliberately. Nothing destructive appears at this depth.

**MAINTENANCE** — SC 11px Ash, below the rule, left-aligned under the actions. It is the only door down. Deliberately unremarkable: no chevron, no icon, no count, no border, no colour. It does not hover-lift; the label warms to Sage. An Operator who is not looking for it will not notice it, and an Operator who wants it will find it in one pass.

---

### 5.3 Deep drawer — maintenance

The Operator came looking. Layout per §4.3: 452px from the right on laptop, half-sheet with a grab handle on phone, the screen behind stays lit. Ground `#111A14`. Labels Sans SC Ash, values **IBM Plex Mono Linen** — the only surface where mono appears.

#### Nomenclature — the language pass

"Compaction" and "checkpoint" describe the architecture. The Operator should understand *what is happening*, not *how it works*. Both are replaced.

| Infrastructure term | Operator-facing | In use |
|---|---|---|
| Compaction | **making room** | label `LAST MADE ROOM`, value `2 days ago`; action `Make room now` |
| Checkpoint | **return point** | section `RETURN POINTS`; action `Save a return point`; sentence *"Somewhere to come back to."* |
| Memory count | **what he's keeping** | section head; the count stays mono, the head stays language |
| Context pressure | **pressure** — kept | Physical and felt, not architectural. An Operator understands pressure without understanding the window. |
| Cadence | **cadence** — kept | Ordinary English for rhythm. |

**Why these two.** *Making room* keeps the physical metaphor the rest of the vocabulary runs on (pressure, room, quiet hours) and it is honest about the trade — room is made by putting something away. *Return point* says what the thing is *for* rather than what it is; "checkpoint" tells the Operator a save happened, "return point" tells them they can go back.

Rejected: *tidying* and *settling* (too domestic — they imply nothing was lost); *folding in* (accurate, opaque); *save point* and *waypoint* (imported from games and maps, and both make the agent a level rather than a person); *snapshot* (a photograph is not a place you can stand in).

**Not a rename in the database.** These are surface words. The system may log `compaction` forever; the Operator never reads that word.

#### Contents

| Section | Label | Values |
|---|---|---|
| Pressure | `PRESSURE` · `LAST MADE ROOM` | `68%`, 4px bar `#7E9470` on `#1F2C23`; `2 days ago` |
| Cadence | `CADENCE` · `NEXT MOMENT` · `QUIET HOURS` | `every 4h`; `in 47m`; `23:00 – 07:00` — Mono 15px |
| Budget | `SPEND` · `CEILING` · `WINDOW` | `$12.40`; `$40.00`; `7 days` — Mono 15px |
| What he's keeping | `RETURN POINTS` | stamp + label rows: `Jul 26 · 09:14` Mono 13px, label Sans 17px |
| Actions | — | `Free Moment` · `Save a return point` · `Wake policy` — outlined, word-only |

Irreversible actions (archive, emergency disable, sensitive capability) escalate to a modal from here, per §4.9. A drawer never destroys anything.

---

### 5.4 Responsive law

One law, stated so it can be enforced in review:

> **A measurement that does not belong on the phone surface does not belong on the laptop surface.** Width buys measure and whitespace. It does not buy depth.

| | 390 | 1440 |
|---|---|---|
| Surface content | identical | identical |
| Card state | compressed (<900px always) | compressed at >4 agents |
| First drawer | in place | in place |
| Deep drawer | half-sheet, grab handle | 452px right panel |
| Nav | bottom bar, icon + word | left rail, icon + word |
| Type | display 38 / voice 22–24 | display 54 / voice 26–30 |

---

## 6. Patterns

### 6.1 The sentence at two scales

The surfaced sentence appears at two sizes: **Alegreya 26–30px Linen** at screen level, **Alegreya Sans 17px Sage** on the card. They must read as one voice at two distances — the way a person's handwriting is theirs on an envelope and on a note.

**What makes them the same thought:**

| Held constant | Why it matters |
|---|---|
| The words | Byte-identical. No shortening, no summarising, no "…" version for the card. If it is too long for the card it is too long for the screen. |
| Sentence case, terminal period | Both are speech. Neither is a label, so neither is title-cased or clipped. |
| Third person, present or present-perfect | *"He's been reading through receipts for a while."* The house talks about its people the same way at both scales. |
| Left edge | The screen sentence and the card sentences share one left rail (20px phone / column-left laptop), so vertically they form a single column of voice. |
| Optical line-height | 1.3 at 28px serif ≈ 1.5 at 17px sans. The *ratio* differs so the *rhythm* matches. |

**What changes, and why it is allowed:** family and colour. Serif Linen is the house speaking about the household; sans Sage is the same sentence attributed to one agent inside his own card. Register follows §2 exactly — serif is what the house says, sans is what it knows. The words never change, so the shift reads as distance, not as a different message.

**When both appear at once.** Only when **exactly one** sentence exists across the whole household. Then the screen line is the answer (*this is the one thing worth saying*) and the card line is the attribution (*it was him*). At two or more surfaced sentences the screen slot stays **empty** and the cards carry their own — because a screen line that had to choose between two agents would be a ranking, and the surface does not rank people.

| Sentences surfaced | Screen slot | Cards |
|---|---|---|
| 0 | empty | no sentence lines |
| 1 | that sentence, serif | that agent carries it in sans |
| 2+ | **empty** | each speaker carries their own |

### 6.2 Emptiness is a state, not a gap

The empty sentence slot is the product's most-used piece of copy and it has no characters in it. Never backfilled with "All quiet", "Nothing to report", a timestamp, a metric, an illustration, or a skeleton. Loading shows the ground, not a shimmer. Height collapses; the layout does not reserve a ghost line.

Applies equally to: an absent activity section, an agent with no context line, and a household with one agent.

### 6.3 Depth transitions

| From → to | Gesture | Behaviour |
|---|---|---|
| Surface → first drawer | tap card or chevron | expands in place, pushes siblings down, cards above do not move |
| First drawer → surface | tap header or chevron | collapses; scroll position anchored to the card's top edge |
| First drawer → deep drawer | tap MAINTENANCE | half-sheet up (phone) / panel in from right (laptop); surface stays lit |
| Deep drawer → modal | destructive action only | per §4.9 |

Nothing opens itself. No auto-expand on new activity, no toast, no badge that pulls the Operator down a level. A change in the world changes a dot and a sentence; it never changes the Operator's depth. Motion timings stand from V1 §7 — a drawer arrives, it does not bounce.

### 6.4 Language patterns

- **Time in words on every surface and in the first drawer.** *"two hours ago", "this morning", "quiet since"*. Stamps and durations are mono and therefore deep-drawer only.
- **Counts under four spell out.** *"Read three rooms."* Four and above means the sentence is the wrong shape — say what happened, not how many times.
- **No possessive product voice.** The house says *"He's been reading receipts"*, never *"Your agent Soren has been…"*.
- **Sentences use pronouns, never the agent's name.** The card already says who; the screen-level line is attributed by the one card carrying it. *"He's asking whether to keep going past his budget."* — so the identical string works at both scales without repeating the name inside its own card.
- **State words are not sentences.** ACTIVE is a label (SC), *"He's thinking"* is voice (serif/sans). Never interchange them.
- **Amber phrases as a question.** Anything that needs the Operator ends in something answerable.

### 6.5 The ten-second acceptance test

A Home comp ships only if all five hold:

1. **Zero measurements** on the surface. Any digit outside a drawer is a defect.
2. **At most one serif line**, and none when the household is quiet.
3. **At most one amber element**, and only when someone needs the Operator.
4. Every agent's **presence readable without reading** — dot state legible at arm's length.
5. Nothing on the screen exists **only because the space existed.**

---

## Carried forward, unresolved

From V1 §8 and §1–4 V2: motion detail · dark-to-light transition · cream-on-green light-mode contrast audit · the brand guide fork · the coffee / warm-earth exploration.

**New, surfaced by this pass:**

- **§9 sentence composition is now load-bearing.** The compressed card and the screen line are both the sentence. Which state produces a sentence, which produces silence, and how one is chosen when several agents could speak is product logic this system depends on and does not own. §6.1 sets the design requirement: at most one screen-level sentence, never a ranking.
- **Current context is the hardest line in the product.** It must be specific enough to be worth reading and short enough to be one line. Needs its own writing pass with real agent state.
- **The `hug` address label** needs a decision from the brand fork — it is currently SC 13px, deliberately not a logotype.
- **Screen-level pass still owed** for Agents, Inbox, Launch, Library, Admin under the same law.
