export interface TimelineTick {
  position: number;
  label: string;
}

/** A range slider that visibly responds as it moves: a pill above it always
 * names the nearest milestone, and that milestone's label bolds below. */
export function TimelineSlider({
  value,
  onChange,
  ticks,
  ariaLabel,
}: {
  value: number;
  onChange: (value: number) => void;
  ticks: TimelineTick[];
  ariaLabel: string;
}) {
  const nearest = ticks.reduce((best, t) => (Math.abs(t.position - value) < Math.abs(best.position - value) ? t : best), ticks[0]);

  return (
    <div className="py-2">
      <div className="mb-2 w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-bold text-[var(--color-accent)]">{nearest.label}</div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={ariaLabel}
        className="h-2 w-full accent-[var(--color-accent)]"
      />
      <div className="relative mt-2 h-9 text-xs text-[var(--color-slate)]">
        {ticks.map((t) => {
          const isNear = t.label === nearest.label;
          return (
            <span
              key={t.label}
              className={`absolute top-0 -translate-x-1/2 text-center leading-tight transition-colors ${isNear ? "font-bold text-[var(--color-accent)]" : ""}`}
              style={{ left: `${t.position}%`, width: 76 }}
            >
              {t.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
