import { ChevronDown } from "lucide-react";

/** Click through a fixed sequence one item at a time — a teaching reveal, not a text prompt. */
export function RevealSteps({ steps, revealed, onRevealNext, buttonLabel }: { steps: string[]; revealed: number; onRevealNext: () => void; buttonLabel: string }) {
  return (
    <div>
      <ol className="space-y-1.5">
        {steps.slice(0, revealed).map((s, i) => (
          <li key={s} className="animate-fade-in-up rounded-lg bg-black/[0.03] p-2.5 text-sm text-[var(--color-ink)]">
            <span className="font-bold text-[var(--color-accent)]">{i + 1}.</span> {s}
          </li>
        ))}
      </ol>
      {revealed < steps.length && (
        <button
          type="button"
          onClick={onRevealNext}
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-[var(--color-accent)] py-2.5 text-xs font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
        >
          {buttonLabel} <ChevronDown size={13} />
        </button>
      )}
    </div>
  );
}
