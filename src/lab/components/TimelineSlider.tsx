export function TimelineSlider({
  value,
  onChange,
  ticks,
  ariaLabel,
}: {
  value: number;
  onChange: (value: number) => void;
  ticks: { position: number; label: string }[];
  ariaLabel: string;
}) {
  return (
    <div className="py-2">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={ariaLabel}
        className="w-full accent-[var(--color-accent)]"
      />
      <div className="relative mt-1 h-10 text-[10px] text-[var(--color-slate)]">
        {ticks.map((t) => (
          <span key={t.label} className="absolute top-0 -translate-x-1/2 text-center leading-tight" style={{ left: `${t.position}%`, width: 70 }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
