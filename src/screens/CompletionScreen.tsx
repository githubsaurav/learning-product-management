import { questions, totalQuestions } from "@/data/questions";
import { scoreMessage } from "@/data/summary";
import type { QuizProgress } from "@/types/quiz";

export function CompletionScreen({
  progress,
  score,
  onReviewMistakes,
  onRetryAll,
  onFinish,
}: {
  progress: QuizProgress;
  score: number;
  onReviewMistakes: () => void;
  onRetryAll: () => void;
  onFinish: () => void;
}) {
  const understood = questions.filter((q) => progress.answers[q.id]?.correct).map((q) => q.conceptTag);
  const toRevisit = questions.filter((q) => progress.answers[q.id] && !progress.answers[q.id].correct).map((q) => q.conceptTag);
  const showFirstAttemptNote = progress.firstAttemptScore !== null && progress.firstAttemptScore !== score;

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:py-14">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Lesson complete</p>
        <h1 className="mt-2 text-2xl font-black text-[var(--color-ink)]">{scoreMessage(score)}</h1>
        <p className="mt-3 text-sm text-[var(--color-slate)]">
          You got {score} of {totalQuestions} right today.
          {showFirstAttemptNote && ` Your first attempt was ${progress.firstAttemptScore} of ${totalQuestions}.`}
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-[var(--color-success)]/25 bg-[var(--color-success-soft)] p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-success)]">Concepts you understood</p>
          {understood.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {understood.map((tag) => (
                <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[var(--color-ink)]">
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-xs text-[var(--color-slate)]">None yet — review the explanations below.</p>
          )}
        </div>

        <div className="rounded-2xl border border-[var(--color-danger)]/25 bg-[var(--color-danger-soft)] p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-danger)]">Concepts to revisit</p>
          {toRevisit.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {toRevisit.map((tag) => (
                <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[var(--color-ink)]">
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-xs text-[var(--color-slate)]">None — you got everything today.</p>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-2">
        {toRevisit.length > 0 && (
          <button
            type="button"
            onClick={onReviewMistakes}
            className="w-full rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
          >
            Review my mistakes
          </button>
        )}
        <button
          type="button"
          onClick={onRetryAll}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3.5 text-sm font-bold text-[var(--color-ink)] transition hover:bg-black/[0.03]"
        >
          Try all questions again
        </button>
        <button
          type="button"
          onClick={onFinish}
          className="w-full py-2 text-center text-sm font-semibold text-[var(--color-slate)] hover:text-[var(--color-ink)]"
        >
          Finish for today
        </button>
      </div>
    </main>
  );
}
