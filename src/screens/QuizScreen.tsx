import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionBlock } from "@/components/QuestionBlock";
import { questions, totalQuestions } from "@/data/questions";
import type { OptionKey, QuizProgress } from "@/types/quiz";

export function QuizScreen({
  progress,
  onSelect,
  onNext,
}: {
  progress: QuizProgress;
  onSelect: (questionId: number, key: OptionKey, correct: boolean) => void;
  onNext: () => void;
}) {
  const question = questions[progress.currentIndex];
  const answer = progress.answers[question.id];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wasAnswered = useRef(false);

  useEffect(() => {
    if (answer && !wasAnswered.current) {
      headingRef.current?.focus();
    }
    wasAnswered.current = !!answer;
  }, [answer]);

  useEffect(() => {
    wasAnswered.current = false;
  }, [question.id]);

  const isLast = progress.currentIndex === totalQuestions - 1;

  return (
    <main className="mx-auto max-w-xl px-4 py-6 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Swiggy · Problem understanding</p>
      <div className="mt-2">
        <ProgressBar current={progress.currentIndex + 1} total={totalQuestions} />
      </div>

      <div className="mt-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)] sm:p-6">
        <QuestionBlock question={question} answer={answer} onSelect={(key, correct) => onSelect(question.id, key, correct)} feedbackHeadingRef={headingRef} />
      </div>

      {answer && (
        <div className="mt-5 animate-fade-in-up">
          <button
            type="button"
            onClick={onNext}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
          >
            {isLast ? "See your results" : "Next question"}
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </main>
  );
}
