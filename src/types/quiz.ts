export type OptionKey = "A" | "B" | "C" | "D";

export interface QuizOption {
  key: OptionKey;
  text: string;
  correct: boolean;
  feedback: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  prompt: string;
  options: QuizOption[];
  concept: string;
  thinkingHabit: string;
  conceptTag: string;
}

export interface AnswerRecord {
  selected: OptionKey;
  correct: boolean;
}

export type Screen = "welcome" | "quiz" | "completion" | "review" | "summary";

export interface QuizProgress {
  screen: Screen;
  currentIndex: number;
  answers: Record<number, AnswerRecord>;
  firstAttemptScore: number | null;
  /** Question ids being reviewed after "Review my mistakes" (subset of answered ids). */
  reviewQueue: number[];
}
