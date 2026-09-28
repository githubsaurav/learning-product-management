import { useState } from "react";
import { Check, X } from "lucide-react";

export interface BoardItem {
  id: string;
  text: string;
  correctColumn?: number;
}

export function EvidenceBoard({
  columns,
  items,
  assignments,
  onAssign,
  hint,
  checkable,
}: {
  columns: string[];
  items: BoardItem[];
  assignments: Record<string, number | undefined>;
  onAssign: (itemId: string, columnIndex: number) => void;
  hint?: (itemId: string, columnIndex: number) => string | null;
  /** When true, shows a "Check my placement" button once everything is sorted (only meaningful if items carry correctColumn). */
  checkable?: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const unassigned = items.filter((i) => assignments[i.id] === undefined);
  const allPlaced = unassigned.length === 0;

  function place(columnIndex: number) {
    if (!selected) return;
    const msg = hint?.(selected, columnIndex) ?? null;
    onAssign(selected, columnIndex);
    setNote(msg);
    setSelected(null);
  }

  return (
    <div className="space-y-3">
      {unassigned.length > 0 && (
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-slate)]">Tap a statement, then tap where it belongs</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {unassigned.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(selected === item.id ? null : item.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  selected === item.id ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-ink)]"
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {note && <p className="animate-fade-in-up rounded-lg bg-[var(--color-accent-2-soft)] p-2.5 text-xs italic text-[var(--color-ink)]">{note}</p>}

      <div className="grid gap-2 sm:grid-cols-2">
        {columns.map((col, i) => (
          <button
            key={col}
            type="button"
            onClick={() => place(i)}
            disabled={!selected}
            className={`min-h-24 rounded-xl border-2 border-dashed p-2.5 text-left transition ${
              selected ? "border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]" : "border-[var(--color-border)]"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-slate)]">{col}</p>
            <div className="mt-1.5 space-y-1">
              {items
                .filter((it) => assignments[it.id] === i)
                .map((it) => {
                  const isRight = checked && it.correctColumn === i;
                  const isWrong = checked && it.correctColumn !== undefined && it.correctColumn !== i;
                  return (
                    <p
                      key={it.id}
                      className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs ${
                        isRight ? "bg-[var(--color-success-soft)] text-[var(--color-ink)]" : isWrong ? "bg-[var(--color-danger-soft)] text-[var(--color-ink)]" : "bg-black/[0.04] text-[var(--color-ink)]"
                      }`}
                    >
                      {isRight && <Check size={11} className="shrink-0 text-[var(--color-success)]" />}
                      {isWrong && <X size={11} className="shrink-0 text-[var(--color-danger)]" />}
                      {it.text}
                    </p>
                  );
                })}
            </div>
          </button>
        ))}
      </div>

      {checkable && allPlaced && !checked && (
        <button type="button" onClick={() => setChecked(true)} className="w-full rounded-xl bg-[var(--color-ink)] py-2.5 text-xs font-bold text-white">
          Check my placement
        </button>
      )}
    </div>
  );
}
