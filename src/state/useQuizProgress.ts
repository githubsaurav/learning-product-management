import { useCallback, useEffect, useState } from "react";
import type { AnswerRecord, OptionKey, QuizProgress } from "@/types/quiz";
import { questions, totalQuestions } from "@/data/questions";

const STORAGE_KEY = "daily-product-intuition:day1";

const initialProgress: QuizProgress = {
  screen: "welcome",
  currentIndex: 0,
  answers: {},
  firstAttemptScore: null,
  reviewQueue: [],
};

function loadProgress(): QuizProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgress;
    const parsed = JSON.parse(raw) as QuizProgress;
    return { ...initialProgress, ...parsed };
  } catch {
    return initialProgress;
  }
}

export function useQuizProgress() {
  const [progress, setProgress] = useState<QuizProgress>(loadProgress);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Progress just won't survive a refresh if storage is unavailable.
    }
  }, [progress]);

  const start = useCallback(() => {
    setProgress((p) => ({ ...p, screen: "quiz" }));
  }, []);

  const selectAnswer = useCallback((questionId: number, selected: OptionKey, correct: boolean) => {
    setProgress((p) => {
      if (p.answers[questionId]) return p; // already locked
      const record: AnswerRecord = { selected, correct };
      return { ...p, answers: { ...p.answers, [questionId]: record } };
    });
  }, []);

  const goNext = useCallback(() => {
    setProgress((p) => {
      const isLast = p.currentIndex >= totalQuestions - 1;
      if (!isLast) return { ...p, currentIndex: p.currentIndex + 1 };
      const score = questions.reduce((sum, q) => sum + (p.answers[q.id]?.correct ? 1 : 0), 0);
      return {
        ...p,
        screen: "completion",
        firstAttemptScore: p.firstAttemptScore ?? score,
      };
    });
  }, []);

  const reviewMistakes = useCallback(() => {
    setProgress((p) => {
      const missed = questions.filter((q) => p.answers[q.id] && !p.answers[q.id].correct).map((q) => q.id);
      return { ...p, screen: "review", reviewQueue: missed };
    });
  }, []);

  const exitReview = useCallback(() => {
    setProgress((p) => ({ ...p, screen: "completion" }));
  }, []);

  const retryAll = useCallback(() => {
    setProgress((p) => ({ ...p, screen: "quiz", currentIndex: 0, answers: {} }));
  }, []);

  const finishForToday = useCallback(() => {
    setProgress((p) => ({ ...p, screen: "summary" }));
  }, []);

  const resetAll = useCallback(() => {
    setProgress(initialProgress);
  }, []);

  const currentScore = questions.reduce((sum, q) => sum + (progress.answers[q.id]?.correct ? 1 : 0), 0);
  const answeredCount = Object.keys(progress.answers).length;

  return {
    progress,
    currentScore,
    answeredCount,
    start,
    selectAnswer,
    goNext,
    reviewMistakes,
    exitReview,
    retryAll,
    finishForToday,
    resetAll,
  };
}
