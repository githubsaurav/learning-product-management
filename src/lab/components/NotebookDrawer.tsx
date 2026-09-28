import { useEffect, useState } from "react";
import { NotebookText, X, Trash2 } from "lucide-react";
import type { LabProgressApi } from "@/lab/state/useLabProgress";
import { evidenceLabelMeta } from "@/lab/types";
import { EvidenceLabelPicker } from "@/lab/components/EvidenceLabelPicker";

export function NotebookDrawer({ lab }: { lab: LabProgressApi }) {
  const [open, setOpen] = useState(false);
  const notes = [...lab.state.notebook].sort((a, b) => b.createdAt - a.createdAt);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-xs font-bold text-[var(--color-ink)] shadow-[var(--shadow-pop)]"
      >
        <NotebookText size={14} className="text-[var(--color-accent-2)]" />
        Case notebook ({notes.length})
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 sm:items-center" onClick={() => setOpen(false)}>
          <div
            className="flex max-h-[80vh] w-full max-w-lg flex-col rounded-t-3xl bg-[var(--color-surface)] p-5 shadow-[var(--shadow-pop)] sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Case notebook"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-[var(--color-ink)]">Case notebook</p>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close notebook" className="rounded-full p-1 hover:bg-black/5">
                <X size={16} />
              </button>
            </div>

            <div className="mt-3 flex-1 space-y-2 overflow-y-auto app-scroll">
              {notes.length === 0 && <p className="text-sm text-[var(--color-slate)]">Nothing saved yet. Notes you save during a case will appear here.</p>}
              {notes.map((note) => (
                <div key={note.id} className="rounded-xl border border-[var(--color-border)] p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-slate)]">
                        {note.caseLabel} · {note.kind.replace("-", " ")}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-ink)]">{note.text}</p>
                    </div>
                    <button type="button" onClick={() => lab.deleteNote(note.id)} aria-label="Delete note" className="shrink-0 rounded-full p-1 text-[var(--color-slate)] hover:bg-black/5 hover:text-[var(--color-danger)]">
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <div className="mt-2">
                    <EvidenceLabelPicker value={note.label} onChange={(l) => lab.relabelNote(note.id, l)} />
                  </div>
                  {note.label && <p className="mt-1 text-[10px] text-[var(--color-slate)]">{evidenceLabelMeta[note.label].description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
