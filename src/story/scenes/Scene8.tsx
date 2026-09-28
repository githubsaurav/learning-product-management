import { CheckCircle2, XCircle } from "lucide-react";
import { scene8FillIn, finalLearningCard } from "@/story/data/content";
import type { OptionKey } from "@/story/types";

export function Scene8({
  fillIn,
  onSelectFillIn,
  reflection,
  onReflectionChange,
  reflectionExampleRevealed,
  onRevealExample,
  onFinish,
}: {
  fillIn: OptionKey | null;
  onSelectFillIn: (key: OptionKey) => void;
  reflection: string;
  onReflectionChange: (text: string) => void;
  reflectionExampleRevealed: boolean;
  onRevealExample: () => void;
  onFinish: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <p className="text-sm font-bold text-[var(--color-ink)]">{scene8FillIn.prompt}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {scene8FillIn.options.map((opt) => {
            const answered = !!fillIn;
            const isSelected = fillIn === opt.key;
            const showState = answered && (opt.correct || isSelected);
            return (
              <button
                key={opt.key}
                type="button"
                disabled={answered}
                onClick={() => onSelectFillIn(opt.key)}
                className={`rounded-xl border-2 p-3 text-center text-sm font-bold transition ${
                  showState
                    ? opt.correct
                      ? "border-[var(--color-success)] bg-[var(--color-success-soft)]"
                      : "border-[var(--color-danger)] bg-[var(--color-danger-soft)]"
                    : "border-[var(--color-border)]"
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  {showState && (opt.correct ? <CheckCircle2 size={14} className="text-[var(--color-success)]" /> : <XCircle size={14} className="text-[var(--color-danger)]" />)}
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {fillIn && (
        <div className="animate-fade-in-up space-y-4">
          <div className="rounded-3xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">What you discovered</p>
            <p className="mt-1.5 text-base font-bold text-[var(--color-ink)]">{finalLearningCard.headline}</p>
            <p className="mt-1.5 text-sm text-[var(--color-ink)]">{finalLearningCard.body}</p>

            <ol className="mt-3 space-y-1.5 text-sm text-[var(--color-ink)]">
              {finalLearningCard.sequence.map((step, i) => (
                <li key={step} className="flex gap-2">
                  <span className="font-bold text-[var(--color-accent)]">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-[var(--color-ink)] p-4 text-center">
            <p className="text-sm font-semibold text-white">{finalLearningCard.oneSentence}</p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <label htmlFor="reflection" className="text-sm font-bold text-[var(--color-ink)]">
              {finalLearningCard.reflectionPrompt}
            </label>
            <textarea
              id="reflection"
              value={reflection}
              onChange={(e) => onReflectionChange(e.target.value)}
              rows={2}
              placeholder="Type a sentence in your own words…"
              className="mt-2 w-full resize-none rounded-xl border border-[var(--color-border)] p-3 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
            />
            {!reflectionExampleRevealed ? (
              <button type="button" onClick={onRevealExample} className="mt-2 text-xs font-semibold text-[var(--color-accent)] underline decoration-dotted underline-offset-2">
                See an example answer
              </button>
            ) : (
              <p className="mt-2 rounded-lg bg-black/[0.03] p-2.5 text-xs text-[var(--color-slate)]">{finalLearningCard.reflectionExample}</p>
            )}
          </div>

          <button
            type="button"
            onClick={onFinish}
            className="w-full rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
          >
            Case closed
          </button>
        </div>
      )}
    </div>
  );
}
