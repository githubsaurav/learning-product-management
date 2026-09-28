const levels = ["Low", "Medium", "High"];

export function RatingRow({
  label,
  description,
  level,
  onLevel,
  rationale,
  onRationale,
}: {
  label: string;
  description: string;
  level: string;
  onLevel: (v: string) => void;
  rationale: string;
  onRationale: (v: string) => void;
}) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] p-3">
      <p className="text-sm font-bold text-[var(--color-ink)]">{label}</p>
      <p className="text-xs text-[var(--color-slate)]">{description}</p>
      <div className="mt-2 flex gap-1.5">
        {levels.map((lv) => (
          <button
            key={lv}
            type="button"
            onClick={() => onLevel(lv)}
            className={`rounded-full border px-2.5 py-1 text-xs font-bold transition ${
              level === lv ? "border-[var(--color-accent-2)] bg-[var(--color-accent-2-soft)] text-[var(--color-accent-2)]" : "border-[var(--color-border)] text-[var(--color-slate)]"
            }`}
          >
            {lv}
          </button>
        ))}
      </div>
      <textarea
        value={rationale}
        onChange={(e) => onRationale(e.target.value)}
        rows={1}
        placeholder="Why? (rationale, not just a rating)"
        className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border)] p-2 text-xs text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
      />
    </div>
  );
}
