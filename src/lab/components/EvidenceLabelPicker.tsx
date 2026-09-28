import type { EvidenceLabel } from "@/lab/types";
import { evidenceLabelMeta } from "@/lab/types";

const order: EvidenceLabel[] = ["observed", "reported", "inferred", "assumed"];

const toneClass: Record<EvidenceLabel, string> = {
  observed: "border-teal-600/30 bg-teal-50 text-teal-800",
  reported: "border-sky-600/30 bg-sky-50 text-sky-800",
  inferred: "border-purple-600/30 bg-purple-50 text-purple-800",
  assumed: "border-amber-600/30 bg-amber-50 text-amber-800",
};

export function EvidenceLabelPicker({ value, onChange }: { value: EvidenceLabel | null; onChange: (label: EvidenceLabel) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Evidence label">
      {order.map((key) => {
        const meta = evidenceLabelMeta[key];
        const selected = value === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={selected}
            title={meta.description}
            onClick={() => onChange(key)}
            className={`rounded-full border px-2.5 py-1 text-[11px] font-bold transition ${
              selected ? toneClass[key] : "border-[var(--color-border)] text-[var(--color-slate)]"
            }`}
          >
            {meta.title}
          </button>
        );
      })}
    </div>
  );
}
