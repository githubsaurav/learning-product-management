# Daily Product Intuition

Short, interactive lessons that build product judgment one situation at a
time. A lesson hub picks between three experiences:

1. **Day 1 — Understand the problem before designing the solution.** A
   ~15-minute quiz through 10 short Swiggy scenarios.
2. **Case File 1 — The Mystery of the Vanishing Cart.** An ~8–10 minute
   interactive investigation where the learner plays a new PM digging into
   why customers abandon their cart, discovering the lesson through the
   story rather than being told it upfront.
3. **Concepts Learning — User Journey Thinking Lab.** A ~4–6 hour, 5-module
   studio (investigate → build → find leverage → practice interviews) that
   teaches user-journey thinking through evidence, not flashcards.

None of these are about testing trivia — they teach how a PM tells a
problem apart from a solution, an observation from its cause, and a
hypothesis from an assumption stated as fact.

## Stack

React + TypeScript + Vite + Tailwind CSS v4 + Lucide icons. No backend, no
routing library — each lesson is an internal screen/scene state machine,
persisted independently to `localStorage` so a refresh never loses
progress, in any of the three.

## Run locally

```bash
npm install
npm run dev
```

## Day 1: the quiz

- **One question at a time.** Selecting an option locks it and immediately
  reveals feedback for **all four** options — not just the one picked —
  plus a "Concept to remember" card and a "Try this thinking habit" prompt.
- **Completion screen** de-emphasizes the raw score in favor of concept
  tags: what you understood vs. what to revisit.
- **Review my mistakes** replays only missed questions. **Try all
  questions again** starts a fresh attempt without erasing the first
  attempt's score.
- **Finish for today** leads to a recap: five lessons, one sentence to
  remember, a reusable checklist, and a Day 2 teaser.

## Case File 1: the story

- **One scene at a time**, revealed only through clicks — tapping a
  receipt, revealing time cards, uncovering group-chat messages — never a
  wall of text.
- **Every question shows why all four options are right or wrong**, with
  the selected option labeled `Your choice` and the right one labeled
  `Correct answer`, so the answer key is never visible before it's earned.
- **The customer-to-problem matching scene** (Riya/Kabir/Sneha → their
  respective causes) gives a gentle hint on a wrong match instead of
  resetting progress.
- **A case file** (bottom-right button, any scene) shows the clues found
  so far, with undiscovered ones shown as grayed-out placeholders.
- **The final principle isn't stated until the learner completes it**
  themselves in a fill-in-the-blank, then the learning card and a
  free-text reflection appear.
- The completion screen shows the learner's own path back to them: their
  original (possibly wrong) hypothesis, each customer's real cause, their
  final recommendation, and their reflection.

## Concepts Learning: the User Journey Thinking Lab

A much larger studio, deliberately not a quiz — no scores, and **no typing
anywhere**. The learner never fills in a text box; every exercise is a
click, a pick, a sort, or a reorder over content already written for the
case, with the underlying model built for them as a result. Nine areas,
reachable from the top pill nav: **Studio Home** (course map — not
started / in progress / model built, never a percentage), **Module 1–5**,
**Concept Shelf** (searchable glossary), **Reading Room**, and **Practice
Studio** (5 rehearsal modes) — plus a **Portfolio Capstone** that exports
everything you built as Markdown.

- **One TRACE framework throughout** (Target → Reconstruct → Arrange →
  Concentrate → Evaluate), shown as a small rail on every module screen,
  highlighting the current letter rather than re-teaching it each time.
- **A framing sentence is a mad-lib, not a text box** — tap a blank, pick
  from 2–3 pre-written options, and watch a line explain what that choice
  changed (Module 1).
- **A journey map is assembled by sorting**, not typed into a form: pick a
  layer (Actions, Emotion, Needs, Friction), then tap-assign shuffled
  statements into the six stage columns; check your placement, then
  compare against the full reference map (Module 3).
- **A root-cause ladder is a click-through reveal** — "What made that
  consequential?" reveals one rung at a time instead of asking the learner
  to invent the chain (Module 4).
- **Reordering** (the causal chain in Module 5, priority ranking in
  Module 4, the 12-fragment Airbnb spine in Module 3) is up/down arrows,
  with a "check" that compares your order to the intended one.
- **An expert overlay** ("this is one defensible interpretation, not the
  answer key") is opt-in and revealed by the learner, never shown upfront.
- Every module's closing screen is a **recap assembled from what you
  clicked** — the framing sentence you built, the stage you placed each
  snippet in, the direction you picked — not a form you filled in.

## Code structure

```
src/
  App.tsx              lesson hub / router (home, day1, vanishing-cart, concepts) — persists which lesson is active
  LessonHub.tsx         the three-lesson picker screen
  Day1Lesson.tsx        Day 1 quiz entry point
  VanishingCartLesson.tsx   story entry point (clues bar + case file + scene switch)
  ConceptsLab.tsx        Concepts Learning entry point (area nav)
  StudioHome.tsx, ConceptShelfScreen.tsx, ReadingRoomScreen.tsx,
  PracticeStudio.tsx, PortfolioCapstone.tsx   the lab's other areas

  data/, state/, components/, screens/     Day 1 quiz — content, localStorage hook, shared UI, screens

  story/
    data/content.ts     all scene copy, questions, feedback, clues — edit here to change the story
    types.ts             StoryProgress shape
    state/useStoryProgress.ts   localStorage-backed hook, one field per interaction
    components/, scenes/         Scene1..Scene8, StoryCompletion

  lab/
    state/useLabProgress.ts    one localStorage-backed store: generic selections/multi/timeline/hints/overlays/flags buckets, each keyed per-interaction — no free-text field
    state/useModuleSection.ts  tracks which section of a module is showing, persisted
    components/            TraceRail, MadLibSentence, ChoiceReveal, RevealSteps,
                            SelectChips, BoundaryInserter, OrderableList,
                            EvidenceBoard (tap-to-assign, with an optional
                            "check my placement" reveal), TimelineSlider, ExpertOverlay
    data/                   module1.ts..module5.ts (case content + every option/
                            distractor the choice-based exercises use),
                            glossary.ts, readingRoom.ts, moduleMeta.ts, practiceStudio.ts
    modules/                Module1.tsx..Module5.tsx — each a sequence of sections
                            built entirely from the components above
```

## Accessibility (all three lessons)

- Answer options are real `<input type="radio">` elements (native keyboard
  navigation, proper group semantics), styled as cards.
- Correctness is never color-only: every option gets an icon and a text
  label alongside its color.
- Keyboard focus moves to the feedback/question heading the moment an
  answer locks.
- Every draggable-feeling interaction has a non-drag form: sliders
  (native keyboard support), tap-to-assign, and arrow-button reordering —
  never a raw drag-and-drop requirement.
- Respects `prefers-reduced-motion`.
- Answer options stay visible after feedback appears, so learners can
  compare all four side by side.

## Deploy to Vercel

No environment variables needed — this is a static Vite build.

1. Push to GitHub (already done if you're reading this from the repo).
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset auto-detects as **Vite**. Defaults are correct.
