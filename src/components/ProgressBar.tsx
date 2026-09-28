export function ProgressBar({ current, total }: { current: number; total: number }) {
  const percent = Math.round((current / total) * 100);
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs font-semibold text-[var(--color-slate)]">
        <span>
          Question {current} of {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
        <div className="h-full rounded-full bg-[var(--color-accent)] transition-[width] duration-300 ease-out" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
