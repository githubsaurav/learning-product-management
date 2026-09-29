import type { TraceLetter } from "@/lab/types";
import { TraceRail } from "@/lab/components/TraceRail";

export function ModuleHeader({
  eyebrow,
  question,
  section,
  totalSections,
  trace,
}: {
  eyebrow: string;
  question: string;
  section: number;
  totalSections: number;
  trace: TraceLetter;
}) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">{eyebrow}</p>
        <h1 className="mt-1 text-lg font-black leading-snug text-[var(--color-ink)]">{question}</h1>
        <p className="mt-1 text-xs text-[var(--color-slate)]">
          Section {section} of {totalSections}
        </p>
      </div>
      <div>
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-slate)]">This course's roadmap — not an industry framework</p>
        <TraceRail active={trace} />
      </div>
    </div>
  );
}
