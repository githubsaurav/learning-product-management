import { HelpCircle } from "lucide-react";

export function HintLadder({
  prompt,
  lens,
  example,
  revealed,
  onReveal,
}: {
  prompt: string;
  lens: string;
  example: string;
  revealed: number;
  onReveal: () => void;
}) {
  const rungs = [
    { label: "Prompt", text: prompt },
    { label: "Lens", text: lens },
    { label: "Example", text: example },
  ];

  return (
    <div className="rounded-xl border border-dashed border-[var(--color-border)] p-3">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-slate)]">
          <HelpCircle size={13} /> Stuck? Ask for help
        </p>
        {revealed < 3 && (
          <button type="button" onClick={onReveal} className="text-xs font-semibold text-[var(--color-accent)] underline decoration-dotted underline-offset-2">
            {revealed === 0 ? "Get a prompt" : revealed === 1 ? "See the lens" : "See an example"}
          </button>
        )}
      </div>
      {revealed > 0 && (
        <ul className="mt-2 space-y-1.5">
          {rungs.slice(0, revealed).map((r) => (
            <li key={r.label} className="animate-fade-in-up rounded-lg bg-black/[0.03] p-2 text-xs text-[var(--color-ink)]">
              <span className="font-bold">{r.label}: </span>
              {r.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
