import type { LucideIcon } from "lucide-react";

export function LessonCard({
  icon: Icon,
  eyebrow,
  title,
  detail,
  cta,
  onClick,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  detail: string;
  cta: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-start gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-left shadow-[var(--shadow-card)] transition hover:border-[var(--color-accent)]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
        <Icon size={20} />
      </span>
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">{eyebrow}</p>
        <p className="mt-1 text-base font-bold text-[var(--color-ink)]">{title}</p>
        <p className="mt-1 text-xs text-[var(--color-slate)]">{detail}</p>
        <span className="mt-3 inline-block rounded-full bg-[var(--color-ink)] px-3.5 py-1.5 text-xs font-bold text-white">{cta}</span>
      </div>
    </button>
  );
}
