import { useState } from "react";
import type { TraceLetter } from "@/lab/types";
import { traceStages } from "@/lab/data/trace";

export function TraceRail({ active }: { active?: TraceLetter }) {
  const [open, setOpen] = useState<TraceLetter | null>(null);

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
      <div className="flex items-center justify-between gap-1">
        {traceStages.map((stage) => {
          const isActive = stage.letter === active;
          const isOpen = open === stage.letter;
          return (
            <button
              key={stage.letter}
              type="button"
              onClick={() => setOpen(isOpen ? null : stage.letter)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-black transition ${
                isActive
                  ? "border-[var(--color-accent-2)] bg-[var(--color-accent-2-soft)] text-[var(--color-accent-2)]"
                  : isOpen
                    ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "border-[var(--color-border)] text-[var(--color-slate)]"
              }`}
              aria-expanded={isOpen}
              aria-label={`${stage.letter} — ${stage.title}`}
            >
              {stage.letter}
            </button>
          );
        })}
      </div>
      {open && (
        <div className="mt-3 animate-fade-in-up rounded-xl bg-black/[0.03] p-3">
          {traceStages
            .filter((s) => s.letter === open)
            .map((s) => (
              <div key={s.letter}>
                <p className="text-xs font-bold text-[var(--color-ink)]">{s.title}</p>
                <p className="mt-1 text-xs text-[var(--color-slate)]">{s.description}</p>
                <ul className="mt-2 space-y-1">
                  {s.prompts.map((p) => (
                    <li key={p} className="text-xs italic text-[var(--color-ink)]">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
