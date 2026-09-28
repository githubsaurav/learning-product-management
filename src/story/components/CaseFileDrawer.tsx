import { useState } from "react";
import { FolderOpen, X } from "lucide-react";
import { clues } from "@/story/data/content";

export function CaseFileDrawer({ foundCount }: { foundCount: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-xs font-bold text-[var(--color-ink)] shadow-[var(--shadow-pop)]"
      >
        <FolderOpen size={14} className="text-[var(--color-accent)]" />
        Case file ({foundCount}/{clues.length})
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 sm:items-center" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-sm rounded-t-3xl bg-[var(--color-surface)] p-5 shadow-[var(--shadow-pop)] sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Case file"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-[var(--color-ink)]">Case file</p>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close case file" className="rounded-full p-1 hover:bg-black/5">
                <X size={16} />
              </button>
            </div>
            <ul className="mt-3 space-y-2">
              {clues.map((clue, i) => {
                const found = i < foundCount;
                return (
                  <li
                    key={clue}
                    className={`rounded-xl border p-3 text-xs ${
                      found ? "border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-dashed border-[var(--color-border)] text-[var(--color-slate)]"
                    }`}
                  >
                    {found ? clue : `Clue ${i + 1}: ???`}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
