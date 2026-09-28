import { ShoppingCart } from "lucide-react";
import { StoryQuestionBlock } from "@/story/components/StoryQuestionBlock";
import { ContinueButton } from "@/story/components/ContinueButton";
import { scene2Question, scene2ResponseD, scene2ResponseOther, clues } from "@/story/data/content";
import type { OptionKey } from "@/story/types";

export function Scene2({ selected, onSelect, onContinue }: { selected: OptionKey | null; onSelect: (key: OptionKey) => void; onContinue: () => void }) {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
          <div className="flex items-center gap-2 text-[var(--color-slate)]">
            <ShoppingCart size={15} />
            <p className="text-xs font-bold uppercase tracking-wide">Checkout</p>
          </div>
          <div className="mt-3 space-y-1.5 text-sm text-[var(--color-ink)]">
            <div className="flex justify-between">
              <span>Rice bowl</span>
              <span>₹240</span>
            </div>
            <div className="flex justify-between text-[var(--color-slate)]">
              <span>Fees &amp; delivery</span>
              <span>₹97</span>
            </div>
          </div>
          <button type="button" disabled className="mt-3 w-full rounded-xl bg-[var(--color-slate)]/40 py-2.5 text-sm font-bold text-white">
            Place order
          </button>
        </div>

        <div className="mt-5">
          <StoryQuestionBlock questionId="scene2" question={scene2Question} selected={selected} onSelect={onSelect} />
        </div>
      </div>

      {selected && (
        <div className="animate-fade-in-up space-y-4">
          <div className="rounded-2xl bg-black/[0.03] p-4">
            <p className="text-sm text-[var(--color-ink)]">{selected === "D" ? scene2ResponseD : scene2ResponseOther}</p>
          </div>
          <div className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">New clue</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{clues[0]}</p>
          </div>
          <ContinueButton onClick={onContinue} label="Meet the first customer" />
        </div>
      )}
    </div>
  );
}
