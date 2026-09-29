import { useState } from "react";
import { BadgeCheck, ChevronDown } from "lucide-react";

/** Names the real, citable framework an exercise is teaching — not an invented one. */
export function FrameworkBadge({ name, source, children }: { name: string; source: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[var(--color-accent-2)]/25 bg-[var(--color-accent-2-soft)] p-3">
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-2 text-left">
        <span className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-accent-2)]">
          <BadgeCheck size={14} /> Real framework: {name}
        </span>
        <ChevronDown size={13} className={`shrink-0 text-[var(--color-accent-2)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-2 animate-fade-in-up space-y-1.5 text-xs text-[var(--color-ink)]">
          {children}
          <p className="text-[10px] italic text-[var(--color-slate)]">Source: {source}</p>
        </div>
      )}
    </div>
  );
}
