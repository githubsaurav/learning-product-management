import { CheckCircle2, Circle, Download } from "lucide-react";
import { LabCard } from "@/lab/components/Card";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { moduleMetas } from "@/lab/data/moduleMeta";

const deliverables = [
  { label: "Journey Frame Card", moduleId: "m1" },
  { label: "Evidence Board and Research Plan", moduleId: "m2" },
  { label: "Current-State Journey Map", moduleId: "m3" },
  { label: "Prioritized Opportunity Brief", moduleId: "m4" },
  { label: "Interview Case Storyboard", moduleId: "m5" },
];

export function PortfolioCapstone({ lab }: { lab: LabProgressApi }) {
  function exportCase() {
    const parts: string[] = ["# Portfolio Capstone\n"];
    for (const m of moduleMetas) {
      const prefix = `${m.id}-`;
      const chosen = Object.entries(lab.state.selections).filter(([k]) => k.startsWith(prefix));
      const sequences = Object.entries(lab.state.multi).filter(([k]) => k.startsWith(prefix));
      if (chosen.length === 0 && sequences.length === 0) continue;
      parts.push(`## Module ${m.number}: ${m.title} (${m.artifact})\n`);
      for (const [k, v] of chosen) parts.push(`- ${k.replace(prefix, "")}: ${v}`);
      for (const [k, v] of sequences) parts.push(`- ${k.replace(prefix, "")}: ${v.join(" → ")}`);
      parts.push("");
    }

    const blob = new Blob([parts.join("\n")], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-capstone.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-4 pb-10">
      <div>
        <h1 className="text-lg font-black text-[var(--color-ink)]">Portfolio capstone</h1>
        <p className="mt-1 text-sm text-[var(--color-slate)]">One end-to-end case, built entirely from the choices, sorts, and rankings you made across all five modules.</p>
      </div>

      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Deliverables</p>
        <ul className="mt-2 space-y-2">
          {deliverables.map((d) => {
            const visited = !!lab.state.flags[`${d.moduleId}:visited`];
            return (
              <li key={d.label} className="flex items-center gap-2 text-sm text-[var(--color-ink)]">
                {visited ? <CheckCircle2 size={15} className="shrink-0 text-[var(--color-success)]" /> : <Circle size={15} className="shrink-0 text-[var(--color-slate)]" />}
                {d.label}
              </li>
            );
          })}
        </ul>
        <p className="mt-2 text-xs italic text-[var(--color-slate)]">Each module's own recap screen is the deliverable — visit a module to build or revisit it.</p>
      </LabCard>

      <button type="button" onClick={exportCase} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90">
        <Download size={16} />
        Export my case as Markdown
      </button>
    </div>
  );
}
