import { Trash2 } from "lucide-react";
import { LabCard } from "@/lab/components/Card";
import { EvidenceLabelPicker } from "@/lab/components/EvidenceLabelPicker";
import { evidenceLabelMeta } from "@/lab/types";
import type { LabProgressApi } from "@/lab/state/useLabProgress";

export function CaseNotebookScreen({ lab }: { lab: LabProgressApi }) {
  const notes = [...lab.state.notebook].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="space-y-4 pb-10">
      <div>
        <h1 className="text-lg font-black text-[var(--color-ink)]">Case notebook</h1>
        <p className="mt-1 text-sm text-[var(--color-slate)]">Everything you've saved across all five modules, automatically labeled by module and case.</p>
      </div>

      {notes.length === 0 && <LabCard>Nothing saved yet. Notes you save inside a case will appear here.</LabCard>}

      <div className="space-y-2">
        {notes.map((note) => (
          <LabCard key={note.id}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-slate)]">
                  {note.caseLabel} · {note.kind.replace("-", " ")}
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink)]">{note.text}</p>
              </div>
              <button type="button" onClick={() => lab.deleteNote(note.id)} aria-label="Delete note" className="shrink-0 rounded-full p-1 text-[var(--color-slate)] hover:bg-black/5 hover:text-[var(--color-danger)]">
                <Trash2 size={14} />
              </button>
            </div>
            <div className="mt-2">
              <EvidenceLabelPicker value={note.label} onChange={(l) => lab.relabelNote(note.id, l)} />
            </div>
            {note.label && <p className="mt-1 text-[10px] text-[var(--color-slate)]">{evidenceLabelMeta[note.label].description}</p>}
          </LabCard>
        ))}
      </div>
    </div>
  );
}
