import { CheckCircle2, Download } from "lucide-react";
import { LabCard } from "@/lab/components/Card";
import { NoteComposer } from "@/lab/components/NoteComposer";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { moduleMetas } from "@/lab/data/moduleMeta";

const deliverables = [
  "Journey Frame Card",
  "Assumption inventory",
  "Research plan",
  "Evidence board",
  "Individual journey traces",
  "Synthesized current-state map",
  "Analysis using the seven lenses",
  "Prioritized opportunity brief",
  "At least three intervention directions",
  "Outcome and metric chain",
  "Two-minute interview narrative",
  "Reflection on what changed after seeing evidence",
];

const reflectionPrompts = [
  "Which belief changed most during the work?",
  "Where did the product boundary initially distort your view?",
  "Which claim has the weakest evidence?",
  "Which positive moment should be protected?",
  "What problem looked important but became less important after synthesis?",
  "What organizational dependency is hidden from the user?",
  "What would make your proposed intervention harmful?",
  "What would you research before recommending investment?",
];

export function PortfolioCapstone({ lab }: { lab: LabProgressApi }) {
  function exportCase() {
    const parts: string[] = ["# Portfolio Capstone\n"];
    for (const m of moduleMetas) {
      const values = lab.state.artifacts[m.id] ?? {};
      const filled = Object.entries(values).filter(([, v]) => v.trim());
      if (filled.length === 0) continue;
      parts.push(`## ${m.artifact} (Module ${m.number})\n`);
      for (const [k, v] of filled) parts.push(`**${k}**: ${v}\n`);
    }
    parts.push("## Case notebook\n");
    for (const n of lab.state.notebook) parts.push(`- [${n.caseLabel}] ${n.text}${n.label ? ` (${n.label})` : ""}`);

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
        <p className="mt-1 text-sm text-[var(--color-slate)]">One end-to-end case using a product or service you genuinely use — first framing decision to final interview narrative.</p>
      </div>

      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Required deliverables</p>
        <ul className="mt-2 space-y-1.5">
          {deliverables.map((d) => (
            <li key={d} className="flex items-center gap-2 text-sm text-[var(--color-ink)]">
              <CheckCircle2 size={14} className="shrink-0 text-[var(--color-slate)]" />
              {d}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs italic text-[var(--color-slate)]">Build these across the five modules and Practice Studio — they accumulate in your case notebook and module artifacts automatically.</p>
      </LabCard>

      <LabCard>
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-slate)]">Reflection</p>
        <div className="mt-2 space-y-3">
          {reflectionPrompts.map((p) => (
            <NoteComposer key={p} prompt={p} withLabel={false} onSave={(text) => lab.addNote("capstone", "Capstone reflection", "note", text)} />
          ))}
        </div>
      </LabCard>

      <button type="button" onClick={exportCase} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90">
        <Download size={16} />
        Export my case as Markdown
      </button>
    </div>
  );
}
