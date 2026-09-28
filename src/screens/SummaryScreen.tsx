import { CheckSquare, Sparkles } from "lucide-react";
import { lessons, oneSentence, checklist, tomorrowTeaser } from "@/data/summary";
import { SourcesFooter } from "@/components/SourcesFooter";

export function SummaryScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-4 py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">What did we learn today?</p>

      <div className="mt-4 space-y-3">
        {lessons.map((lesson, i) => (
          <div key={lesson.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-bold text-[var(--color-accent)]">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--color-ink)]">{lesson.title}</p>
                <p className="mt-0.5 text-sm text-[var(--color-slate)]">{lesson.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-[var(--color-ink)] p-5 text-center">
        <Sparkles size={16} className="mx-auto text-[var(--color-accent)]" />
        <p className="mt-2 text-sm font-semibold text-white">{oneSentence}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-[var(--color-accent-2)]/25 bg-[var(--color-accent-2-soft)] p-4">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-accent-2)]">
          <CheckSquare size={13} /> A reusable checklist — ask before proposing a feature
        </p>
        <ol className="mt-2 space-y-1.5 text-sm text-[var(--color-ink)]">
          {checklist.map((item, i) => (
            <li key={item} className="flex gap-2">
              <span className="font-bold text-[var(--color-accent-2)]">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-border)] p-4 text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Tomorrow</p>
        <p className="mt-1 text-sm text-[var(--color-ink)]">{tomorrowTeaser}</p>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 w-full py-2 text-center text-xs font-semibold text-[var(--color-slate)] hover:text-[var(--color-ink)]"
      >
        Start over anytime
      </button>

      <div className="mt-auto">
        <SourcesFooter />
      </div>
    </main>
  );
}
