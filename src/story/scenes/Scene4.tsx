import { Clock3 } from "lucide-react";
import { StoryQuestionBlock } from "@/story/components/StoryQuestionBlock";
import { ContinueButton } from "@/story/components/ContinueButton";
import { kabir, clues } from "@/story/data/content";
import type { OptionKey } from "@/story/types";

export function Scene4({
  cardsRevealed,
  onRevealCard,
  selected,
  onSelect,
  onContinue,
}: {
  cardsRevealed: { classCard: boolean; deliveryCard: boolean };
  onRevealCard: (card: "classCard" | "deliveryCard") => void;
  selected: OptionKey | null;
  onSelect: (key: OptionKey) => void;
  onContinue: () => void;
}) {
  const bothRevealed = cardsRevealed.classCard && cardsRevealed.deliveryCard;

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">Customer 2 of 3</p>
        <h2 className="mt-1 text-lg font-bold text-[var(--color-ink)]">Kabir's race against time</h2>
        <p className="mt-1 text-sm text-[var(--color-slate)]">Reveal both time cards.</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <FaceDownCard revealed={cardsRevealed.classCard} onReveal={() => onRevealCard("classCard")} label={kabir.classCard} />
          <FaceDownCard revealed={cardsRevealed.deliveryCard} onReveal={() => onRevealCard("deliveryCard")} label={kabir.deliveryCard} />
        </div>

        {bothRevealed && (
          <div className="mt-4 animate-fade-in-up">
            <div className="rounded-2xl bg-black/[0.03] p-4">
              <div className="flex items-center justify-between text-xs font-bold text-[var(--color-ink)]">
                <span>Now</span>
                <span>40 min</span>
                <span>55 min</span>
              </div>
              <div className="relative mt-2 h-2 rounded-full bg-[var(--color-border)]">
                <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--color-danger)]" style={{ left: "72%" }} title="Class begins" />
                <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--color-accent)]" style={{ left: "100%", transform: "translate(-100%, -50%)" }} title="Food arrives" />
              </div>
              <p className="mt-2 text-xs text-[var(--color-slate)]">Class begins before the food would arrive.</p>
            </div>

            <p className="mt-4 text-sm italic text-[var(--color-ink)]">{kabir.afterText}</p>
            <div className="mt-4">
              <StoryQuestionBlock questionId="kabir" question={kabir.question} selected={selected} onSelect={onSelect} />
            </div>
          </div>
        )}
      </div>

      {selected && (
        <div className="animate-fade-in-up space-y-4">
          <div className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">New clue</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{clues[2]}</p>
          </div>
          <ContinueButton onClick={onContinue} label="Meet the final customer" />
        </div>
      )}
    </div>
  );
}

function FaceDownCard({ revealed, onReveal, label }: { revealed: boolean; onReveal: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onReveal}
      disabled={revealed}
      className={`flex h-24 flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed p-3 text-center transition ${
        revealed ? "border-[var(--color-border)] bg-[var(--color-bg)]" : "border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
      }`}
    >
      {revealed ? (
        <p className="animate-fade-in-up text-xs font-bold text-[var(--color-ink)]">{label}</p>
      ) : (
        <>
          <Clock3 size={18} className="text-[var(--color-accent)]" />
          <p className="text-xs font-semibold text-[var(--color-slate)]">Tap to reveal</p>
        </>
      )}
    </button>
  );
}
