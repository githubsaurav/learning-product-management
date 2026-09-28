export function CluesBar({ found, total }: { found: number; total: number }) {
  const percent = Math.round((found / total) * 100);
  return (
    <div>
      <p className="text-xs font-semibold text-[var(--color-slate)]">
        Clues found: {found} of {total}
      </p>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]" role="progressbar" aria-valuenow={found} aria-valuemin={0} aria-valuemax={total}>
        <div className="h-full rounded-full bg-[var(--color-accent)] transition-[width] duration-300 ease-out" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
