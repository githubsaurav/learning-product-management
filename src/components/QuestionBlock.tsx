import { Lightbulb } from "lucide-react";
import type { AnswerRecord, OptionKey, QuizQuestion } from "@/types/quiz";
import { AnswerCard, type OptionStatus } from "@/components/AnswerCard";

function statusFor(record: AnswerRecord | undefined, optionKey: OptionKey, optionCorrect: boolean): OptionStatus {
  if (!record) return "unanswered";
  if (optionCorrect) return "correct";
  if (record.selected === optionKey) return "incorrect-selected";
  return "incorrect-other";
}

export function QuestionBlock({
  question,
  answer,
  onSelect,
  feedbackHeadingRef,
}: {
  question: QuizQuestion;
  answer: AnswerRecord | undefined;
  onSelect: (key: OptionKey, correct: boolean) => void;
  feedbackHeadingRef?: React.RefObject<HTMLHeadingElement>;
}) {
  const answered = !!answer;

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">{question.title}</p>
      <h2 className="mt-1 text-lg font-bold leading-snug text-[var(--color-ink)]">{question.prompt}</h2>

      <div role="radiogroup" aria-label="Answer options" className="mt-4 space-y-3">
        {question.options.map((opt) => (
          <AnswerCard
            key={opt.key}
            questionId={question.id}
            option={opt}
            status={statusFor(answer, opt.key, opt.correct)}
            selected={answer?.selected === opt.key}
            answered={answered}
            onSelect={(key) => onSelect(key, opt.correct)}
          />
        ))}
      </div>

      {answered && (
        <div className="mt-4 space-y-3 animate-fade-in-up">
          <h3
            ref={feedbackHeadingRef}
            tabIndex={-1}
            className="text-sm font-bold text-[var(--color-ink)] outline-none"
          >
            {answer.correct ? "Exactly. Here is the product principle you used." : "Not quite—and this is a useful distinction to learn."}
          </h3>

          <div className="rounded-2xl border border-[var(--color-accent-2)]/25 bg-[var(--color-accent-2-soft)] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-2)]">Concept to remember</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{question.concept}</p>
          </div>

          <div className="flex items-start gap-2 rounded-2xl bg-black/[0.03] p-3.5">
            <Lightbulb size={15} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
            <p className="text-xs text-[var(--color-ink)]">
              <span className="font-bold">Try this thinking habit: </span>
              {question.thinkingHabit}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
