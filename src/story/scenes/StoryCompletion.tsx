import { Disclosure } from "@/components/Disclosure";
import { scene2Question, scene7Question, clues, nextCaseTeaser } from "@/story/data/content";
import type { StoryProgress } from "@/story/types";

export function StoryCompletion({ progress, onReplay, onExit }: { progress: StoryProgress; onReplay: () => void; onExit: () => void }) {
  const hypothesisText = scene2Question.options.find((o) => o.key === progress.initialHypothesis)?.text;
  const recommendationText = scene7Question.options.find((o) => o.key === progress.recommendation)?.text;

  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:py-14">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Case closed</p>
        <h1 className="mt-2 text-2xl font-black text-[var(--color-ink)]">The Vanishing Cart</h1>
        <p className="mt-2 text-sm text-[var(--color-slate)]">5 clues discovered · 1 product principle learned</p>
      </div>

      <div className="mt-8 space-y-3">
        <PathCard label="Your first hypothesis" value={hypothesisText} />
        <PathCard label="Riya's cause" value="Unexpected cost" />
        <PathCard label="Kabir's cause" value="Timing mismatch" />
        <PathCard label="Sneha's cause" value="Group coordination" />
        <PathCard label="Your final recommendation" value={recommendationText} />
        {progress.reflection && <PathCard label="Your reflection" value={progress.reflection} />}
      </div>

      <div className="mt-6">
        <Disclosure label="Review the five clues">
          <ul className="space-y-2 rounded-xl bg-black/[0.03] p-3.5">
            {clues.map((clue) => (
              <li key={clue} className="text-xs text-[var(--color-ink)]">
                {clue}
              </li>
            ))}
          </ul>
        </Disclosure>
      </div>

      <div className="mt-8 space-y-2">
        <button
          type="button"
          onClick={onReplay}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] py-3.5 text-sm font-bold text-[var(--color-ink)] transition hover:bg-black/[0.03]"
        >
          Replay the story
        </button>
        <button
          type="button"
          onClick={onExit}
          className="w-full rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
        >
          Continue to the next lesson
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-border)] p-4 text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Next case</p>
        <p className="mt-1 text-sm text-[var(--color-ink)]">{nextCaseTeaser}</p>
      </div>
    </div>
  );
}

function PathCard({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5">
      <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-slate)]">{label}</p>
      <p className="mt-1 text-sm text-[var(--color-ink)]">{value}</p>
    </div>
  );
}
