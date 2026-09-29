import { Sparkles } from "lucide-react";

export interface ChoiceOption {
  id: string;
  text: string;
  note: string;
  strongest?: boolean;
}

/** Click an option to reveal why every option holds up or doesn't — no typing,
 * no red/green correctness. The strongest option gets a calm "closer fit" marker. */
export function ChoiceReveal({
  options,
  selected,
  onSelect,
}: {
  options: ChoiceOption[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  const answered = !!selected;
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const isSelected = selected === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => !answered && onSelect(opt.id)}
            disabled={answered}
            className={`block w-full rounded-xl border-2 p-3 text-left transition ${
              isSelected
                ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                : answered
                  ? "border-[var(--color-border)] opacity-70"
                  : "border-[var(--color-border)] hover:border-[var(--color-accent)]"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-base font-medium text-[var(--color-ink)]">{opt.text}</p>
              {answered && opt.strongest && (
                <span className="flex shrink-0 items-center gap-1 rounded-full bg-[var(--color-accent-2-soft)] px-2 py-0.5 text-xs font-bold text-[var(--color-accent-2)]">
                  <Sparkles size={11} /> Closer fit
                </span>
              )}
            </div>
            {answered && <p className="mt-1.5 border-t border-black/[0.06] pt-1.5 text-sm text-[var(--color-slate)]">{opt.note}</p>}
          </button>
        );
      })}
    </div>
  );
}
