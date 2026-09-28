import { CheckCircle2, XCircle } from "lucide-react";
import type { OptionKey, QuizOption } from "@/types/quiz";

export type OptionStatus = "unanswered" | "correct" | "incorrect-selected" | "incorrect-other";

const statusStyles: Record<OptionStatus, string> = {
  unanswered: "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]",
  correct: "border-[var(--color-success)] bg-[var(--color-success-soft)]",
  "incorrect-selected": "border-[var(--color-danger)] bg-[var(--color-danger-soft)]",
  "incorrect-other": "border-[var(--color-border)] bg-[var(--color-surface)] opacity-80",
};

export function AnswerCard({
  questionId,
  option,
  status,
  selected,
  answered,
  onSelect,
}: {
  questionId: number;
  option: QuizOption;
  status: OptionStatus;
  selected: boolean;
  answered: boolean;
  onSelect: (key: OptionKey) => void;
}) {
  const inputId = `q${questionId}-${option.key}`;

  return (
    <label
      htmlFor={inputId}
      className={`block rounded-2xl border-2 p-4 transition-colors ${statusStyles[status]} ${answered ? "cursor-default" : "cursor-pointer"}`}
    >
      <input
        id={inputId}
        type="radio"
        name={`question-${questionId}`}
        value={option.key}
        checked={selected}
        disabled={answered}
        onChange={() => !answered && onSelect(option.key)}
        className="sr-only"
      />
      <div className="flex items-start gap-3">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
            status === "unanswered"
              ? "border-[var(--color-border)] text-[var(--color-slate)]"
              : status === "correct"
                ? "border-[var(--color-success)] bg-[var(--color-success)] text-white"
                : status === "incorrect-selected"
                  ? "border-[var(--color-danger)] bg-[var(--color-danger)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-slate)]"
          }`}
          aria-hidden
        >
          {option.key}
        </span>
        <div className="flex-1">
          <p className="text-sm font-medium leading-snug text-[var(--color-ink)]">{option.text}</p>

          {status !== "unanswered" && (
            <div className="mt-2.5 animate-fade-in-up border-t border-black/[0.06] pt-2.5">
              <p
                className={`flex items-center gap-1.5 text-xs font-bold ${
                  status === "correct" ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"
                }`}
              >
                {status === "correct" ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                {status === "correct" ? "Correct" : "Incorrect"}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-slate)]">{option.feedback}</p>
            </div>
          )}
        </div>
      </div>
    </label>
  );
}
