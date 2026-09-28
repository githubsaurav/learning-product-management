import { ChevronUp, ChevronDown } from "lucide-react";

export function OrderableList({ items, onMove }: { items: { id: string; text: string }[]; onMove: (id: string, direction: -1 | 1) => void }) {
  return (
    <ol className="space-y-1.5">
      {items.map((item, i) => (
        <li key={item.id} className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-[10px] font-bold text-[var(--color-slate)]">{i + 1}</span>
          <p className="flex-1 text-sm text-[var(--color-ink)]">{item.text}</p>
          <div className="flex shrink-0 flex-col">
            <button type="button" disabled={i === 0} onClick={() => onMove(item.id, -1)} aria-label="Move earlier" className="rounded p-0.5 text-[var(--color-slate)] hover:bg-black/5 disabled:opacity-20">
              <ChevronUp size={14} />
            </button>
            <button
              type="button"
              disabled={i === items.length - 1}
              onClick={() => onMove(item.id, 1)}
              aria-label="Move later"
              className="rounded p-0.5 text-[var(--color-slate)] hover:bg-black/5 disabled:opacity-20"
            >
              <ChevronDown size={14} />
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}
