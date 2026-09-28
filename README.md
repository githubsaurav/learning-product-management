# Daily Product Intuition

**Day 1: Understand the customer problem before designing the solution.**

A ~15-minute interactive lesson for people new to product management, built
around 10 short Swiggy-based scenarios. The goal isn't to test Swiggy
trivia — it's to teach how a PM tells apart a problem from a solution, an
observation from its cause, a feature request from the underlying need,
and a well-framed hypothesis from an assumption stated as fact.

## Stack

React + TypeScript + Vite + Tailwind CSS v4 + Lucide icons. No backend,
no routing library — the whole lesson is one page with an internal screen
state (`welcome → quiz → completion → review/summary`), persisted to
`localStorage` so a refresh never loses progress.

## Run locally

```bash
npm install
npm run dev
```

## How it works

- **One question at a time.** Selecting an option locks that question and
  immediately reveals feedback for **all four** options — not just the one
  picked — plus a "Concept to remember" card and a "Try this thinking
  habit" prompt.
- **Every option teaches something**, right or wrong; there's no bare
  "incorrect" with nothing else said.
- **Progress bar** ("Question 3 of 10") throughout, no visible answer key
  before the learner finishes.
- **Completion screen** de-emphasizes the raw score in favor of concept
  tags: what you understood vs. what to revisit, each pulled from the
  question you got right or wrong.
- **Review my mistakes** replays only the missed questions with full
  explanations. **Try all questions again** starts a fresh attempt without
  erasing the first attempt's score (shown again on the next completion
  screen if it differs).
- **Finish for today** leads to a recap: the five lessons, one sentence to
  remember, a reusable five-question checklist, and a teaser for Day 2.

## Code structure

```
src/
  data/questions.ts   the 10 questions, options, feedback, concept tags — edit here to change content
  data/summary.ts      the closing recap content + score-tier messages
  state/useQuizProgress.ts   the only source of truth, localStorage-backed
  components/          AnswerCard, QuestionBlock, ProgressBar, Disclosure, SourcesFooter
  screens/              Welcome, Quiz, Completion, Review, Summary
```

## Accessibility

- Answer options are real `<input type="radio">` elements (native keyboard
  navigation, proper group semantics), styled as cards.
- Correctness is never color-only: every option gets an icon (✓ / ✕) and a
  text label ("Correct" / "Incorrect") alongside its color.
- Keyboard focus moves to the feedback heading the moment an answer locks,
  so screen reader users land on the explanation immediately.
- Respects `prefers-reduced-motion`.
- Answer cards stay visible (not hidden or collapsed) after feedback
  appears, so learners can compare all four side by side.

## Deploy to Vercel

No environment variables needed — this is a static Vite build.

1. Push to GitHub (already done if you're reading this from the repo).
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset auto-detects as **Vite**. Defaults are correct.
