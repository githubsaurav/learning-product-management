import { useState } from "react";

export interface MadLibBlank {
  key: string;
  options: { id: string; text: string; effect: string }[];
}

/** A sentence built entirely from click-to-choose blanks — no typing.
 * Clicking a filled blank re-opens its option list so the learner can compare choices. */
export function MadLibSentence({
  template,
  blanks,
  values,
  onChoose,
}: {
  /** Sentence with {key} placeholders matching each blank's key. */
  template: string;
  blanks: MadLibBlank[];
  values: Record<string, string>;
  onChoose: (blankKey: string, optionId: string) => void;
}) {
  const [openBlank, setOpenBlank] = useState<string | null>(null);
  const parts = template.split(/(\{[a-zA-Z0-9_]+\})/g);

  return (
    <div>
      <p className="text-base leading-relaxed text-[var(--color-ink)]">
        {parts.map((part, i) => {
          const match = part.match(/^\{([a-zA-Z0-9_]+)\}$/);
          if (!match) return <span key={i}>{part}</span>;
          const blank = blanks.find((b) => b.key === match[1]);
          if (!blank) return <span key={i}>{part}</span>;
          const chosenId = values[blank.key];
          const chosen = blank.options.find((o) => o.id === chosenId);
          return (
            <button
              key={i}
              type="button"
              onClick={() => setOpenBlank(openBlank === blank.key ? null : blank.key)}
              className={`mx-0.5 rounded-md border-b-2 px-1 font-bold transition ${
                chosen ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-dashed border-[var(--color-slate)] text-[var(--color-slate)]"
              }`}
            >
              {chosen ? chosen.text : `choose ${blank.key}`}
            </button>
          );
        })}
      </p>

      {openBlank && (
        <div className="mt-2 animate-fade-in-up rounded-xl border border-[var(--color-border)] bg-black/[0.03] p-3">
          <div className="flex flex-wrap gap-1.5">
            {blanks
              .find((b) => b.key === openBlank)!
              .options.map((opt) => {
                const selected = values[openBlank] === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      onChoose(openBlank, opt.id);
                      setOpenBlank(null);
                    }}
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                      selected ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)]"
                    }`}
                  >
                    {opt.text}
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {Object.entries(values).map(([key, optId]) => {
        const blank = blanks.find((b) => b.key === key);
        const opt = blank?.options.find((o) => o.id === optId);
        if (!opt) return null;
        return (
          <p key={key} className="mt-1.5 animate-fade-in-up text-sm text-[var(--color-slate)]">
            <span className="font-bold text-[var(--color-accent)]">{key}: </span>
            {opt.effect}
          </p>
        );
      })}
    </div>
  );
}
