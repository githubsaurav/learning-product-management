# Daily Product Intuition

Short, interactive lessons that build product judgment one situation at a
time. A lesson hub picks between two experiences:

1. **Day 1 — Understand the problem before designing the solution.** A
   ~15-minute quiz through 10 short Swiggy scenarios.
2. **Case File 1 — The Mystery of the Vanishing Cart.** An ~8–10 minute
   interactive investigation where the learner plays a new PM digging into
   why customers abandon their cart, discovering the lesson through the
   story rather than being told it upfront.

Neither is about testing trivia — both teach how a PM tells a problem
apart from a solution, an observation from its cause, and a hypothesis
from an assumption stated as fact.

## Stack

React + TypeScript + Vite + Tailwind CSS v4 + Lucide icons. No backend, no
routing library — each lesson is an internal screen/scene state machine,
persisted independently to `localStorage` so a refresh never loses
progress, in either lesson.

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

## Code structure

```
src/
  App.tsx              lesson hub / router (home, day1, vanishing-cart) — persists which lesson is active
  LessonHub.tsx         the two-lesson picker screen
  Day1Lesson.tsx        Day 1 quiz entry point
  VanishingCartLesson.tsx   story entry point (clues bar + case file + scene switch)

  data/, state/, components/, screens/     Day 1 quiz — content, localStorage hook, shared UI, screens

  story/
    data/content.ts     all scene copy, questions, feedback, clues — edit here to change the story
    types.ts             StoryProgress shape
    state/useStoryProgress.ts   localStorage-backed hook, one field per interaction (revealed cards, chat messages, matches, reflection, etc.)
    components/          StoryOption, StoryQuestionBlock, CluesBar, CaseFileDrawer, ContinueButton
    scenes/              Scene1..Scene8, StoryCompletion
```

## Accessibility (both lessons)

- Answer options are real `<input type="radio">` elements (native keyboard
  navigation, proper group semantics), styled as cards.
- Correctness is never color-only: every option gets an icon and a text
  label alongside its color.
- Keyboard focus moves to the feedback/question heading the moment an
  answer locks.
- Respects `prefers-reduced-motion`.
- Answer options stay visible after feedback appears, so learners can
  compare all four side by side.

## Deploy to Vercel

No environment variables needed — this is a static Vite build.

1. Push to GitHub (already done if you're reading this from the repo).
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset auto-detects as **Vite**. Defaults are correct.
