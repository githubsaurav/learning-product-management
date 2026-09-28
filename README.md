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

A much larger studio, deliberately not a quiz — no scores anywhere, ever.
Six areas, always reachable from the top pill nav: **Studio Home** (course
map, no completion percentages — just not-started / in-progress / draft
saved), **Module 1–5**, **Case Notebook**, **Concept Shelf** (searchable
glossary), **Reading Room**, and **Practice Studio** (5 rehearsal modes) —
plus a **Portfolio Capstone** that exports everything as Markdown.

- **One TRACE framework throughout** (Target → Reconstruct → Arrange →
  Concentrate → Evaluate), shown as a small rail on every module screen,
  highlighting the current letter rather than re-teaching it each time.
- **Evidence labels** (Observed / Reported / Inferred / Assumed) are
  attachable to any saved note, with calm color coding — never red/green
  correctness.
- **A hint ladder** (Prompt → Lens → Example) and an **expert overlay**
  ("this is one defensible interpretation, not the answer key") are used
  instead of grading — both opt-in, both revealed by the learner.
- Interactions favor accessible primitives over drag-and-drop: a
  timeline **boundary is a range slider** (Meera's journey start, Rahul's
  success boundary, the camera-zoom lens comparison), **evidence pinning
  is tap-to-assign** (select a statement, then tap the column it belongs
  in), and **reordering is up/down arrows** (Module 3's 12-fragment spine).
- **Every module ends in a saved artifact** (Journey Frame Card, Evidence
  Board, Current-State Journey Map, Opportunity Brief, Interview
  Storyboard) using the exact field templates from the brief, autosaved to
  the case notebook as you type.

## Code structure

```
src/
  App.tsx              lesson hub / router (home, day1, vanishing-cart, concepts) — persists which lesson is active
  LessonHub.tsx         the three-lesson picker screen
  Day1Lesson.tsx        Day 1 quiz entry point
  VanishingCartLesson.tsx   story entry point (clues bar + case file + scene switch)
  ConceptsLab.tsx        Concepts Learning entry point (area nav + notebook drawer)
  StudioHome.tsx, CaseNotebookScreen.tsx, ConceptShelfScreen.tsx,
  ReadingRoomScreen.tsx, PracticeStudio.tsx, PortfolioCapstone.tsx   the lab's six other areas

  data/, state/, components/, screens/     Day 1 quiz — content, localStorage hook, shared UI, screens

  story/
    data/content.ts     all scene copy, questions, feedback, clues — edit here to change the story
    types.ts             StoryProgress shape
    state/useStoryProgress.ts   localStorage-backed hook, one field per interaction
    components/, scenes/         Scene1..Scene8, StoryCompletion

  lab/
    types.ts              NotebookEntry, EvidenceLabel, ArtifactDef, etc.
    state/useLabProgress.ts    the one localStorage-backed store for the whole lab (notebook, artifacts, and generic freeText/selections/multi/timeline/hints/overlays buckets keyed per-interaction)
    state/useModuleSection.ts  tracks which section of a module is showing, persisted
    components/            TraceRail, NotebookDrawer, HintLadder, ExpertOverlay,
                            EvidenceLabelPicker, TimelineSlider, EvidenceBoard,
                            OrderableList, ArtifactCard, RatingRow, ReadingList
    data/                   module1.ts..module5.ts (case content), artifacts.ts
                            (the section-10 templates), glossary.ts, readingRoom.ts,
                            moduleMeta.ts, practiceStudio.ts
    modules/                Module1.tsx..Module5.tsx — each a sequence of sections
                            sharing the components above
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
- Modals (case notebook, expert overlay) close on Escape as well as by
  clicking outside or the close button.
- Respects `prefers-reduced-motion`.
- Answer options stay visible after feedback appears, so learners can
  compare all four side by side.

## Deploy to Vercel

No environment variables needed — this is a static Vite build.

1. Push to GitHub (already done if you're reading this from the repo).
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset auto-detects as **Vite**. Defaults are correct.
