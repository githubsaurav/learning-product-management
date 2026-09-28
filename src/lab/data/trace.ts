import type { TraceLetter } from "@/lab/types";

export const traceStages: { letter: TraceLetter; title: string; description: string; prompts: string[] }[] = [
  {
    letter: "T",
    title: "Target the situation",
    description: "Who is the actor? What are they trying to accomplish? In what context? Where does the journey meaningfully begin and end?",
    prompts: ["Whose experience are we following, specifically?", "Where does our inquiry begin and end, and why there?"],
  },
  {
    letter: "R",
    title: "Reconstruct reality",
    description: "What actually happened? Use observed behavior, remembered stories, artifacts, support conversations, analytics, and operational evidence. Mark what is known and what is assumed.",
    prompts: ["What have we actually witnessed or heard, versus guessed?", "What would change our mind about this?"],
  },
  {
    letter: "A",
    title: "Arrange the experience over time",
    description: "Organize evidence into meaningful stages. Capture actions, thoughts, emotions, needs, touchpoints, channels, and surrounding context.",
    prompts: ["Where does the person's subgoal change?", "What layer of the experience have we ignored so far?"],
  },
  {
    letter: "C",
    title: "Concentrate on consequential moments",
    description: "Find the moments that materially change confidence, effort, progress, or the likelihood of completing the goal. Diagnose causes before proposing solutions.",
    prompts: ["What moment disproportionately changes trust or momentum?", "What is the structural cause, not just the visible symptom?"],
  },
  {
    letter: "E",
    title: "Evaluate interventions and outcomes",
    description: "Choose an opportunity, explore several interventions, anticipate tradeoffs, and define how improved user and business outcomes would be observed.",
    prompts: ["What are at least three structurally different responses?", "How would we see this working in user behavior, not just sentiment?"],
  },
];
