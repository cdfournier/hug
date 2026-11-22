# Motion

**Status:** Draft v0.1 — behavioral contract approved; values and component
choreography intentionally pending.

**Owns:** motion purpose, tempo and easing roles, user preference behavior,
reduced-motion treatment, and the rules that keep animation from becoming
ornament or noise.

---

## 1. Purpose

HUG should feel more alive and spatially coherent than the current runtime,
without becoming busy. Motion earns its place when it clarifies a state change,
provides feedback, or explains where an interface layer came from and where it
went.

Warmth does not require constant movement. Writing, color, sound, and the
people in HUG provide personality; animation serves comprehension and care.

## 2. Default policy

Motion is minimal and functional, not absent. It may support:

- direct response to an interaction;
- a meaningful state or content change; and
- a spatial layer such as a drawer or dialog entering or leaving.

It must not exist solely to decorate a static interface, compete with reading,
or demand a person's attention through looping or novelty.

## 3. Tempo roles

HUG begins with three timing roles:

```text
motion.fast
motion.standard
motion.deliberate
```

`motion.fast` serves direct micro-feedback. `motion.standard` serves ordinary
state and content transitions. `motion.deliberate` serves meaningful spatial
arrivals such as drawers and dialogs. Exact duration values remain pending.

## 4. Easing roles

HUG defines three easing roles:

```text
easing.standard
easing.enter
easing.exit
```

Ordinary state changes use `easing.standard`. Entering layers may settle
gently; exiting layers leave cleanly. Bounce and novelty spring effects are not
global defaults. A playful spring needs a specific component-level reason and
an accessibility review.

## 5. User preference and reduced motion

HUG exposes an appearance-adjacent motion preference in User Preferences:

- **System** — follow the device preference; the default.
- **Full** — use HUG's standard functional motion.
- **Reduced** — use its reduced-motion treatment.

The underlying device preference remains respected by default. Reduced motion
does not mean that the interface becomes ambiguous or broken:

- remove or greatly shorten spatial travel, scale, parallax, and similar
  movement;
- preserve immediate state changes; and
- retain a brief opacity transition only where it aids comprehension without
  creating the sense of travel.

## 6. Relation to layers

Drawers and dialogs are the primary first proving ground for deliberate motion.
Their motion works with `elevation.drawer`, `elevation.dialog`, and
`backdrop.overlay`; it does not manufacture a separate visual language for
each overlay.

## 7. Validation

- Test normal and reduced motion in light and dark themes.
- Verify keyboard and assistive-technology flows do not depend on an animation
  completing.
- Ensure no focus target moves unexpectedly, becomes obscured, or loses its
  visible focus treatment during a transition.
- Check that rapid repeated interaction cannot leave a layer visually out of
  sync with its actual state.

## 8. Deferred

- Exact duration and easing values.
- Loading, progress, skeleton, and asynchronous-status choreography.
- Component-specific enter/exit recipes beyond the first drawer and dialog.
- Any decorative or playful motion with a demonstrated product purpose.
