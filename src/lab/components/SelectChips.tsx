export function SelectChips({
  options,
  selected,
  onToggle,
  max,
}: {
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
  max?: number;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const isOn = selected.includes(opt);
        const disabled = !isOn && max !== undefined && selected.length >= max;
        return (
          <button
            key={opt}
            type="button"
            disabled={disabled}
            onClick={() => onToggle(opt)}
            className={`rounded-full border px-2.5 py-1.5 text-xs font-medium transition disabled:opacity-40 ${
              isOn ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-ink)]"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
