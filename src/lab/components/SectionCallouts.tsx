import type { ReactNode } from "react";

/** Shown at the top of a section, before any interaction — sets the learning objective. */
export function SectionObjective({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-3.5">
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">In this section</p>
      <p className="mt-0.5 text-sm text-[var(--color-ink)]">{children}</p>
    </div>
  );
}

/** Shown at the end of a section — what was learned, and (usually) the common mistake tied to it. */
export function SectionTakeaway({ learned, trap }: { learned: string; trap?: string }) {
  return (
    <div className="mt-5 space-y-2.5">
      <div className="rounded-2xl border border-[var(--color-success)]/25 bg-[var(--color-success-soft)] p-3.5">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-success)]">What you just learned</p>
        <p className="mt-0.5 text-sm text-[var(--color-ink)]">{learned}</p>
      </div>
      {trap && (
        <div className="rounded-2xl border border-[var(--color-danger)]/25 bg-[var(--color-danger-soft)] p-3.5">
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-danger)]">Common mistake here</p>
          <p className="mt-0.5 text-sm text-[var(--color-ink)]">{trap}</p>
        </div>
      )}
    </div>
  );
}
