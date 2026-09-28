import { useState } from "react";
import { NotebookPen } from "lucide-react";
import type { EvidenceLabel } from "@/lab/types";
import { EvidenceLabelPicker } from "@/lab/components/EvidenceLabelPicker";

export function NoteComposer({
  prompt,
  withLabel = true,
  onSave,
  placeholder = "Type your note…",
}: {
  prompt?: string;
  withLabel?: boolean;
  onSave: (text: string, label: EvidenceLabel | null) => void;
  placeholder?: string;
}) {
  const [text, setText] = useState("");
  const [label, setLabel] = useState<EvidenceLabel | null>(null);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    if (!text.trim()) return;
    onSave(text, label);
    setSaved(true);
    setText("");
    setLabel(null);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3">
      {prompt && <p className="mb-1.5 text-xs font-semibold text-[var(--color-ink)]">{prompt}</p>}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={2}
        placeholder={placeholder}
        className="w-full resize-none rounded-lg border border-[var(--color-border)] p-2.5 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
      />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        {withLabel ? <EvidenceLabelPicker value={label} onChange={setLabel} /> : <span />}
        <button
          type="button"
          onClick={handleSave}
          disabled={!text.trim()}
          className="flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-3 py-1.5 text-xs font-bold text-white disabled:opacity-30"
        >
          <NotebookPen size={12} />
          {saved ? "Saved" : "Save to notebook"}
        </button>
      </div>
    </div>
  );
}
