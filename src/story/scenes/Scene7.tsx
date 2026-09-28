import { StoryQuestionBlock } from "@/story/components/StoryQuestionBlock";
import { ContinueButton } from "@/story/components/ContinueButton";
import { scene2Question, scene7Question } from "@/story/data/content";
import type { OptionKey } from "@/story/types";

export function Scene7({
  initialHypothesis,
  selected,
  onSelect,
  onContinue,
}: {
  initialHypothesis: OptionKey | null;
  selected: OptionKey | null;
  onSelect: (key: OptionKey) => void;
  onContinue: () => void;
}) {
  const hypothesisText = scene2Question.options.find((o) => o.key === initialHypothesis)?.text;

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <h2 className="text-lg font-bold text-[var(--color-ink)]">Back in Maya's office</h2>

        {hypothesisText && (
          <div className="mt-3 rounded-xl border border-dashed border-[var(--color-border)] p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-slate)]">Your first hypothesis</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{hypothesisText}</p>
          </div>
        )}

        <div className="mt-4">
          <StoryQuestionBlock questionId="recommendation" question={scene7Question} selected={selected} onSelect={onSelect} />
        </div>

        {selected && (
          <div className="mt-4 animate-fade-in-up space-y-3 border-t border-[var(--color-border)] pt-4">
            <p className="text-sm italic text-[var(--color-ink)]">
              Maya looks at the three customer stories pinned to the board. &ldquo;The dashboard told us where to look,&rdquo; she says.
              &ldquo;The investigation helped us understand what might be happening there.&rdquo;
            </p>
            <p className="text-sm text-[var(--color-slate)]">Aarav deletes the slide titled &ldquo;Make the button brighter.&rdquo;</p>
            <p className="rounded-xl bg-black/[0.03] p-3.5 text-sm font-bold text-[var(--color-ink)]">
              Cart abandonment is an observation. Its causes must be discovered.
            </p>
          </div>
        )}
      </div>

      {selected && <ContinueButton onClick={onContinue} label="Unlock the lesson" />}
    </div>
  );
}
