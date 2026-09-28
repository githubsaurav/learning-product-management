import { useCallback, useEffect, useState } from "react";
import type { OptionKey, StoryProgress } from "@/story/types";
import { matching } from "@/story/data/content";

const STORAGE_KEY = "vanishing-cart:progress";

const initialProgress: StoryProgress = {
  scene: 1,
  chartClicked: false,
  initialHypothesis: null,
  receiptRevealed: false,
  riyaAnswer: null,
  cardsRevealed: { classCard: false, deliveryCard: false },
  kabirAnswer: null,
  chatRevealed: [false, false, false, false, false],
  snehaAnswer: null,
  matches: { Riya: null, Kabir: null, Sneha: null },
  recommendation: null,
  fillIn: null,
  reflection: "",
  reflectionExampleRevealed: false,
};

function load(): StoryProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgress;
    const parsed = JSON.parse(raw) as StoryProgress;
    return { ...initialProgress, ...parsed };
  } catch {
    return initialProgress;
  }
}

export function useStoryProgress() {
  const [progress, setProgress] = useState<StoryProgress>(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Progress just won't survive a refresh if storage is unavailable.
    }
  }, [progress]);

  const goToScene = useCallback((scene: number) => setProgress((p) => ({ ...p, scene })), []);

  const clickChart = useCallback(() => setProgress((p) => ({ ...p, chartClicked: true })), []);

  const answerHypothesis = useCallback((key: OptionKey) => {
    setProgress((p) => (p.initialHypothesis ? p : { ...p, initialHypothesis: key }));
  }, []);

  const revealReceipt = useCallback(() => setProgress((p) => ({ ...p, receiptRevealed: true })), []);
  const answerRiya = useCallback((key: OptionKey) => {
    setProgress((p) => (p.riyaAnswer ? p : { ...p, riyaAnswer: key }));
  }, []);

  const revealCard = useCallback((card: "classCard" | "deliveryCard") => {
    setProgress((p) => ({ ...p, cardsRevealed: { ...p.cardsRevealed, [card]: true } }));
  }, []);
  const answerKabir = useCallback((key: OptionKey) => {
    setProgress((p) => (p.kabirAnswer ? p : { ...p, kabirAnswer: key }));
  }, []);

  const revealChatMessage = useCallback((index: number) => {
    setProgress((p) => {
      const chatRevealed = [...p.chatRevealed];
      chatRevealed[index] = true;
      return { ...p, chatRevealed };
    });
  }, []);
  const answerSneha = useCallback((key: OptionKey) => {
    setProgress((p) => (p.snehaAnswer ? p : { ...p, snehaAnswer: key }));
  }, []);

  const setMatch = useCallback((customer: keyof StoryProgress["matches"], problem: string) => {
    setProgress((p) => ({ ...p, matches: { ...p.matches, [customer]: problem } }));
  }, []);

  const answerRecommendation = useCallback((key: OptionKey) => {
    setProgress((p) => (p.recommendation ? p : { ...p, recommendation: key }));
  }, []);

  const answerFillIn = useCallback((key: OptionKey) => {
    setProgress((p) => (p.fillIn ? p : { ...p, fillIn: key }));
  }, []);

  const setReflection = useCallback((text: string) => setProgress((p) => ({ ...p, reflection: text })), []);
  const revealReflectionExample = useCallback(() => setProgress((p) => ({ ...p, reflectionExampleRevealed: true })), []);

  const replay = useCallback(() => setProgress(initialProgress), []);

  const cluesFound = [
    !!progress.initialHypothesis,
    !!progress.riyaAnswer,
    !!progress.kabirAnswer,
    !!progress.snehaAnswer,
    matching.customers.every((c) => progress.matches[c] === matching.correctMap[c]),
  ].filter(Boolean).length;

  return {
    progress,
    cluesFound,
    goToScene,
    clickChart,
    answerHypothesis,
    revealReceipt,
    answerRiya,
    revealCard,
    answerKabir,
    revealChatMessage,
    answerSneha,
    setMatch,
    answerRecommendation,
    answerFillIn,
    setReflection,
    revealReflectionExample,
    replay,
  };
}
