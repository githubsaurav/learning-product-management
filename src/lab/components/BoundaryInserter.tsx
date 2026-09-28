import { Plus, X } from "lucide-react";

/** A sequence of items with click-to-toggle dividers between them — how the
 * learner marks where a stage boundary goes, without typing anything. */
export function BoundaryInserter({
  items,
  boundariesAfter,
  onToggle,
}: {
  items: { id: string; text: string }[];
  boundariesAfter: number[];
  onToggle: (index: number) => void;
}) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.id}>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-xs text-[var(--color-ink)]">{item.text}</div>
          {i < items.length - 1 && (
            <div className="flex justify-center py-0.5">
              <button
                type="button"
                onClick={() => onToggle(i)}
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold transition ${
                  boundariesAfter.includes(i) ? "bg-[var(--color-accent)] text-white" : "bg-black/[0.05] text-[var(--color-slate)] hover:bg-black/10"
                }`}
              >
                {boundariesAfter.includes(i) ? (
                  <>
                    <X size={10} /> boundary
                  </>
                ) : (
                  <Plus size={10} />
                )}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
