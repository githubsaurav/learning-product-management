import { Receipt } from "lucide-react";
import { StoryQuestionBlock } from "@/story/components/StoryQuestionBlock";
import { ContinueButton } from "@/story/components/ContinueButton";
import { riya, clues } from "@/story/data/content";
import type { OptionKey } from "@/story/types";

export function Scene3({
  revealed,
  onReveal,
  selected,
  onSelect,
  onContinue,
}: {
  revealed: boolean;
  onReveal: () => void;
  selected: OptionKey | null;
  onSelect: (key: OptionKey) => void;
  onContinue: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Customer 1 of 3</p>
        <h2 className="mt-1 text-lg font-bold text-[var(--color-ink)]">Riya's receipt</h2>
        <p className="mt-1 text-sm text-[var(--color-slate)]">
          Riya adds a rice bowl priced at ₹240. She reaches checkout, pauses, and closes the app.
        </p>

        <button
          type="button"
          onClick={onReveal}
          disabled={revealed}
          className={`mt-4 w-full rounded-2xl border-2 border-dashed p-5 text-center transition ${
            revealed ? "border-[var(--color-border)]" : "border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
          }`}
        >
          <Receipt size={22} className="mx-auto text-[var(--color-accent)]" />
          {!revealed && <p className="mt-2 text-xs font-semibold text-[var(--color-ink)]">Tap the receipt to reveal the final amount.</p>}

          {revealed && (
            <div className="mt-3 space-y-1.5 text-left text-sm">
              {riya.lines.map((line, i) => (
                <div
                  key={line.label}
                  className="flex justify-between text-[var(--color-ink)] animate-fade-in-up"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <span>{line.label}</span>
                  <span>{line.amount}</span>
                </div>
              ))}
              <div
                className="flex justify-between border-t border-[var(--color-border)] pt-1.5 text-base font-black text-[var(--color-ink)] animate-fade-in-up"
                style={{ animationDelay: `${riya.lines.length * 120}ms` }}
              >
                <span>Total</span>
                <span>{riya.total}</span>
              </div>
            </div>
          )}
        </button>

        {revealed && (
          <div className="mt-4 animate-fade-in-up" style={{ animationDelay: `${riya.lines.length * 120 + 200}ms` }}>
            <p className="text-sm italic text-[var(--color-ink)]">{riya.afterText}</p>
            <div className="mt-4">
              <StoryQuestionBlock questionId="riya" question={riya.question} selected={selected} onSelect={onSelect} />
            </div>
          </div>
        )}
      </div>

      {selected && (
        <div className="animate-fade-in-up space-y-4">
          <p className="rounded-xl bg-black/[0.03] p-3.5 text-xs text-[var(--color-slate)]">{riya.qualification}</p>
          <div className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">New clue</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{clues[1]}</p>
          </div>
          <ContinueButton onClick={onContinue} label="Meet the second customer" />
        </div>
      )}
    </div>
  );
}
