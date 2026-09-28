import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function ExpertOverlay({
  revealed,
  onReveal,
  children,
  comparison,
  buttonLabel = "Compare with an expert's interpretation",
}: {
  revealed: boolean;
  onReveal: () => void;
  children: ReactNode;
  comparison?: { bothNoticed?: string[]; learnerOnly?: string[]; expertAdded?: string[]; needsEvidence?: string[]; scopeEffect?: string };
  buttonLabel?: string;
}) {
  if (!revealed) {
    return (
      <button
        type="button"
        onClick={onReveal}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[var(--color-accent-2)] py-3 text-sm font-bold text-[var(--color-accent-2)] hover:bg-[var(--color-accent-2-soft)]"
      >
        <Sparkles size={15} />
        {buttonLabel}
      </button>
    );
  }

  return (
    <div className="animate-fade-in-up space-y-3 rounded-2xl border border-[var(--color-accent-2)]/25 bg-[var(--color-accent-2-soft)] p-4">
      <p className="text-xs italic text-[var(--color-ink)]">
        This is one defensible interpretation, not the answer key. Compare the evidence used, the assumptions made, and the consequences of each framing.
      </p>
      <div className="rounded-xl bg-[var(--color-surface)] p-3.5">{children}</div>

      {comparison && (
        <div className="grid gap-2 text-xs sm:grid-cols-2">
          {comparison.bothNoticed && (
            <CompareBlock title="What both versions noticed" items={comparison.bothNoticed} />
          )}
          {comparison.learnerOnly && <CompareBlock title="What you noticed that this didn't" items={comparison.learnerOnly} />}
          {comparison.expertAdded && <CompareBlock title="What this version added" items={comparison.expertAdded} />}
          {comparison.needsEvidence && <CompareBlock title="Claims that need more evidence" items={comparison.needsEvidence} />}
          {comparison.scopeEffect && (
            <div className="rounded-lg bg-[var(--color-surface)] p-2.5 sm:col-span-2">
              <p className="font-bold text-[var(--color-ink)]">How scope changed the framing</p>
              <p className="mt-1 text-[var(--color-slate)]">{comparison.scopeEffect}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CompareBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg bg-[var(--color-surface)] p-2.5">
      <p className="font-bold text-[var(--color-ink)]">{title}</p>
      <ul className="mt-1 space-y-0.5 text-[var(--color-slate)]">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
