import { StoryQuestionBlock } from "@/story/components/StoryQuestionBlock";
import { ContinueButton } from "@/story/components/ContinueButton";
import { sneha, clues } from "@/story/data/content";
import type { OptionKey } from "@/story/types";

export function Scene5({
  chatRevealed,
  onRevealMessage,
  selected,
  onSelect,
  onContinue,
}: {
  chatRevealed: boolean[];
  onRevealMessage: (index: number) => void;
  selected: OptionKey | null;
  onSelect: (key: OptionKey) => void;
  onContinue: () => void;
}) {
  const allRevealed = chatRevealed.every(Boolean);

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Customer 3 of 3</p>
        <h2 className="mt-1 text-lg font-bold text-[var(--color-ink)]">Sneha's group chat</h2>
        <p className="mt-1 text-sm text-[var(--color-slate)]">Tap each message to uncover the conversation.</p>

        <div className="mt-4 space-y-2">
          {sneha.messages.map((msg, i) => (
            <button
              key={msg}
              type="button"
              onClick={() => onRevealMessage(i)}
              disabled={chatRevealed[i]}
              className={`w-full rounded-xl border p-3 text-left text-sm transition ${
                chatRevealed[i] ? "border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-ink)]" : "border-dashed border-[var(--color-accent)] text-transparent hover:bg-[var(--color-accent-soft)]"
              }`}
              style={!chatRevealed[i] ? { textShadow: "0 0 8px rgba(32,26,23,0.5)" } : undefined}
            >
              {chatRevealed[i] ? <span className="animate-fade-in-up">{msg}</span> : msg}
            </button>
          ))}
        </div>

        {allRevealed && (
          <div className="mt-4 animate-fade-in-up">
            <p className="text-sm italic text-[var(--color-ink)]">{sneha.afterText}</p>
            <div className="mt-4">
              <StoryQuestionBlock questionId="sneha" question={sneha.question} selected={selected} onSelect={onSelect} />
            </div>
          </div>
        )}
      </div>

      {selected && (
        <div className="animate-fade-in-up space-y-4">
          <div className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">New clue</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{clues[3]}</p>
          </div>
          <ContinueButton onClick={onContinue} label="Return to the case board" />
        </div>
      )}
    </div>
  );
}
