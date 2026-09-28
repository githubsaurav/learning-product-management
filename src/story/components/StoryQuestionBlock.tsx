import { useEffect, useRef } from "react";
import type { OptionKey, StoryQuestion } from "@/story/types";
import { StoryOption } from "@/story/components/StoryOption";

export function StoryQuestionBlock({
  questionId,
  question,
  selected,
  onSelect,
}: {
  questionId: string;
  question: StoryQuestion;
  selected: OptionKey | null;
  onSelect: (key: OptionKey) => void;
}) {
  const headingRef = useRef<HTMLParagraphElement>(null);
  const wasAnswered = useRef(false);

  useEffect(() => {
    if (selected && !wasAnswered.current) headingRef.current?.focus();
    wasAnswered.current = !!selected;
  }, [selected]);

  return (
    <div>
      <p ref={headingRef} tabIndex={-1} className="text-sm font-bold text-[var(--color-ink)] outline-none">
        {question.prompt}
      </p>
      <div role="radiogroup" aria-label="Answer options" className="mt-3 space-y-3">
        {question.options.map((opt) => (
          <StoryOption key={opt.key} questionId={questionId} option={opt} selectedKey={selected} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
