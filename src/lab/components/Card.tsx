import type { ReactNode } from "react";

export function LabCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)] ${className}`}>{children}</div>;
}

export function LabLabel({ children }: { children: ReactNode }) {
  return <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-[var(--color-slate)]">{children}</p>;
}
