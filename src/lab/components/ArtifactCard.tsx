import { FileCheck2 } from "lucide-react";
import type { ArtifactDef } from "@/lab/types";

export function ArtifactCard({
  def,
  values,
  onChange,
}: {
  def: ArtifactDef;
  values: Record<string, string>;
  onChange: (fieldKey: string, value: string) => void;
}) {
  return (
    <div className="rounded-3xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-5">
      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">
        <FileCheck2 size={14} /> Module artifact · {def.title}
      </p>
      <p className="mt-1 text-xs text-[var(--color-slate)]">
        Fill in what you have — partial is fine. This saves automatically to your case notebook.
      </p>
      <div className="mt-3 space-y-3">
        {def.fields.map((field) => (
          <div key={field.key}>
            <label className="text-xs font-bold text-[var(--color-ink)]" htmlFor={`${def.id}-${field.key}`}>
              {field.label}
            </label>
            {field.multiline ? (
              <textarea
                id={`${def.id}-${field.key}`}
                value={values[field.key] ?? ""}
                onChange={(e) => onChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={2}
                className="mt-1 w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
              />
            ) : (
              <input
                id={`${def.id}-${field.key}`}
                value={values[field.key] ?? ""}
                onChange={(e) => onChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
