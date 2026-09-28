export type OptionKey = "A" | "B" | "C" | "D";

export interface StoryOption {
  key: OptionKey;
  text: string;
  correct: boolean;
  feedback: string;
}

export interface StoryQuestion {
  prompt: string;
  options: StoryOption[];
}

export interface MatchState {
  Riya: string | null;
  Kabir: string | null;
  Sneha: string | null;
}

export interface StoryProgress {
  /** 1-8 map to the eight story scenes; 9 is the completion screen. */
  scene: number;
  chartClicked: boolean;
  initialHypothesis: OptionKey | null;
  receiptRevealed: boolean;
  riyaAnswer: OptionKey | null;
  cardsRevealed: { classCard: boolean; deliveryCard: boolean };
  kabirAnswer: OptionKey | null;
  chatRevealed: boolean[];
  snehaAnswer: OptionKey | null;
  matches: MatchState;
  recommendation: OptionKey | null;
  fillIn: OptionKey | null;
  reflection: string;
  reflectionExampleRevealed: boolean;
}
