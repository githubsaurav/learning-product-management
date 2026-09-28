import { ArrowLeft } from "lucide-react";
import { QuestionBlock } from "@/components/QuestionBlock";
import { questions } from "@/data/questions";
import type { QuizProgress } from "@/types/quiz";

export function ReviewScreen({ progress, onBack }: { progress: QuizProgress; onBack: () => void }) {
  const missed = questions.filter((q) => progress.reviewQueue.includes(q.id));

  return (
    <main className="mx-auto max-w-xl px-4 py-6 sm:py-10">
      <button type="button" onClick={onBack} className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-slate)] hover:text-[var(--color-ink)]">
        <ArrowLeft size={15} /> Back to results
      </button>

      <h1 className="mt-4 text-xl font-black text-[var(--color-ink)]">Questions to revisit</h1>
      <p className="mt-1 text-sm text-[var(--color-slate)]">
        {missed.length} question{missed.length === 1 ? "" : "s"} from today, with the full explanation.
      </p>

      <div className="mt-6 space-y-4">
        {missed.map((q) => (
          <div key={q.id} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)] sm:p-6">
            <QuestionBlock question={q} answer={progress.answers[q.id]} onSelect={() => {}} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-6 w-full rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
      >
        Back to results
      </button>
    </main>
  );
}
