import { CircleDot, CheckCircle2 } from "lucide-react";
import { LabCard } from "@/lab/components/Card";
import { moduleMetas } from "@/lab/data/moduleMeta";
import type { LabProgressApi } from "@/lab/state/useLabProgress";

export function StudioHome({ lab, onOpenModule }: { lab: LabProgressApi; onOpenModule: (id: string) => void }) {
  return (
    <div className="space-y-4 pb-10">
      <div>
        <h1 className="text-lg font-black leading-snug text-[var(--color-ink)]">Learn to see the journey—not just the screen</h1>
        <p className="mt-1.5 text-sm text-[var(--color-slate)]">
          Follow familiar product experiences, investigate real evidence, construct maps, find leverage, and practice explaining your thinking in interviews.
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] font-semibold text-[var(--color-slate)]">
          <span className="rounded-full bg-black/[0.04] px-2.5 py-1">5 case-based modules</span>
          <span className="rounded-full bg-black/[0.04] px-2.5 py-1">~4–6 hours</span>
          <span className="rounded-full bg-black/[0.04] px-2.5 py-1">No scores</span>
          <span className="rounded-full bg-black/[0.04] px-2.5 py-1">Every module produces an artifact</span>
        </div>
      </div>

      <div className="space-y-3">
        {moduleMetas.map((m) => {
          const visited = !!lab.state.flags[`${m.id}:visited`];
          const artifactValues = lab.state.artifacts[m.id] ?? {};
          const hasDraft = Object.values(artifactValues).some((v) => v.trim());
          return (
            <button key={m.id} type="button" onClick={() => onOpenModule(m.id)} className="block w-full text-left">
              <LabCard className="transition hover:border-[var(--color-accent)]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-accent)]">
                      Module {m.number} · {m.title}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[var(--color-ink)]">{m.question}</p>
                  </div>
                  {hasDraft ? <CheckCircle2 size={16} className="shrink-0 text-[var(--color-success)]" /> : visited ? <CircleDot size={16} className="shrink-0 text-[var(--color-accent)]" /> : null}
                </div>
                <p className="mt-1.5 text-xs text-[var(--color-slate)]">{m.caseLabel}</p>
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-[var(--color-slate)]">
                  <span className="rounded-full bg-black/[0.04] px-2 py-0.5">{m.estimate}</span>
                  <span className="rounded-full bg-[var(--color-accent-2-soft)] px-2 py-0.5 text-[var(--color-accent-2)]">TRACE: {m.trace}</span>
                  <span className="rounded-full bg-black/[0.04] px-2 py-0.5">Artifact: {m.artifact}</span>
                  <span className="ml-auto font-bold text-[var(--color-ink)]">{hasDraft ? "Draft saved" : visited ? "In progress" : "Not started"}</span>
                </div>
              </LabCard>
            </button>
          );
        })}
      </div>
    </div>
  );
}
