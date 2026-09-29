import type { TimelineTick } from "@/lab/components/TimelineSlider";

/** A read-only shaded rail showing the span between two slider values, so a
 * learner can see the scope they've drawn, not just two disconnected numbers. */
export function ScopeRangePreview({ start, end, ticks, color = "var(--color-accent)" }: { start: number; end: number; ticks: TimelineTick[]; color?: string }) {
  const lo = Math.min(start, end);
  const hi = Math.max(start, end);
  return (
    <div className="mt-4">
      <div className="relative h-2.5 rounded-full bg-black/[0.06]">
        <div className="absolute h-2.5 rounded-full transition-all" style={{ left: `${lo}%`, width: `${hi - lo}%`, background: color }} />
        {ticks.map((t) => (
          <div key={t.label} className="absolute top-1/2 h-2 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-white/70" style={{ left: `${t.position}%` }} />
        ))}
      </div>
      <div className="relative mt-1.5 h-8 text-[10px] text-[var(--color-slate)]">
        {ticks.map((t) => (
          <span key={t.label} className="absolute top-0 -translate-x-1/2 text-center leading-tight" style={{ left: `${t.position}%`, width: 64 }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
