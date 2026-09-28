import { CheckCircle2, XCircle } from "lucide-react";
import type { OptionKey, StoryOption as StoryOptionType } from "@/story/types";

export function StoryOption({
  questionId,
  option,
  selectedKey,
  onSelect,
}: {
  questionId: string;
  option: StoryOptionType;
  selectedKey: OptionKey | null;
  onSelect: (key: OptionKey) => void;
}) {
  const answered = !!selectedKey;
  const isSelected = selectedKey === option.key;
  const inputId = `${questionId}-${option.key}`;

  const borderClass =
    answered && option.correct
      ? "border-[var(--color-success)] bg-[var(--color-success-soft)]"
      : isSelected
        ? "border-[var(--color-danger)] bg-[var(--color-danger-soft)]"
        : "border-[var(--color-border)] bg-[var(--color-surface)]";

  return (
    <label
      htmlFor={inputId}
      className={`block rounded-2xl border-2 p-4 transition-colors ${borderClass} ${answered ? "cursor-default" : "cursor-pointer hover:border-[var(--color-accent)]"}`}
    >
      <input
        id={inputId}
        type="radio"
        name={questionId}
        checked={isSelected}
        disabled={answered}
        onChange={() => !answered && onSelect(option.key)}
        className="sr-only"
      />
      <div className="flex items-start gap-3">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
            option.correct && answered
              ? "border-[var(--color-success)] bg-[var(--color-success)] text-white"
              : isSelected
                ? "border-[var(--color-danger)] bg-[var(--color-danger)] text-white"
                : "border-[var(--color-border)] text-[var(--color-slate)]"
          }`}
          aria-hidden
        >
          {option.key}
        </span>
        <div className="flex-1">
          <p className="text-sm font-medium leading-snug text-[var(--color-ink)]">{option.text}</p>

          {answered && (
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {isSelected && (
                <span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-ink)]">
                  Your choice
                </span>
              )}
              {option.correct && (
                <span className="flex items-center gap-1 rounded-full bg-[var(--color-success)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  <CheckCircle2 size={11} /> Correct answer
                </span>
              )}
            </div>
          )}

          {answered && (
            <div className="mt-2 animate-fade-in-up border-t border-black/[0.06] pt-2">
              <p className={`flex items-center gap-1.5 text-xs font-bold ${option.correct ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>
                {option.correct ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                {option.correct ? "Why this is correct" : "Why this isn't the best fit"}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-slate)]">{option.feedback}</p>
            </div>
          )}
        </div>
      </div>
    </label>
  );
}
