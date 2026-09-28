import { useState } from "react";
import { Check } from "lucide-react";
import { ContinueButton } from "@/story/components/ContinueButton";
import { matching, clues } from "@/story/data/content";
import type { MatchState } from "@/story/types";

export function Scene6({ matches, onMatch, onContinue }: { matches: MatchState; onMatch: (customer: keyof MatchState, problem: string) => void; onContinue: () => void }) {
  const [selectedCustomer, setSelectedCustomer] = useState<keyof MatchState | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  const solvedProblems = new Set(Object.values(matches).filter(Boolean) as string[]);
  const allSolved = matching.customers.every((c) => matches[c] === matching.correctMap[c]);

  function handleCustomerClick(customer: keyof MatchState) {
    if (matches[customer]) return; // already solved
    setSelectedCustomer(customer);
    setHint(null);
  }

  function handleProblemClick(problem: string) {
    if (!selectedCustomer || solvedProblems.has(problem)) return;
    if (matching.correctMap[selectedCustomer] === problem) {
      onMatch(selectedCustomer, problem);
      setSelectedCustomer(null);
      setHint(null);
    } else {
      setHint(matching.hint);
      setSelectedCustomer(null);
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
        <h2 className="text-lg font-bold text-[var(--color-ink)]">Connect the evidence</h2>
        <p className="mt-1 text-sm text-[var(--color-slate)]">Tap a customer, then tap the problem that fits.</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="space-y-2">
            {matching.customers.map((customer) => {
              const solved = !!matches[customer];
              return (
                <button
                  key={customer}
                  type="button"
                  onClick={() => handleCustomerClick(customer)}
                  disabled={solved}
                  className={`flex w-full items-center justify-between rounded-xl border-2 p-3 text-sm font-bold transition ${
                    solved
                      ? "border-[var(--color-success)] bg-[var(--color-success-soft)] text-[var(--color-ink)]"
                      : selectedCustomer === customer
                        ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]"
                        : "border-[var(--color-border)] text-[var(--color-ink)]"
                  }`}
                >
                  {customer}
                  {solved && <Check size={15} className="text-[var(--color-success)]" />}
                </button>
              );
            })}
          </div>

          <div className="space-y-2">
            {matching.problems.map((problem) => {
              const solved = solvedProblems.has(problem);
              return (
                <button
                  key={problem}
                  type="button"
                  onClick={() => handleProblemClick(problem)}
                  disabled={solved || !selectedCustomer}
                  className={`w-full rounded-xl border-2 p-3 text-left text-xs font-semibold transition ${
                    solved ? "border-[var(--color-success)] bg-[var(--color-success-soft)] text-[var(--color-ink)]" : "border-[var(--color-border)] text-[var(--color-ink)] disabled:opacity-50"
                  }`}
                >
                  {problem}
                </button>
              );
            })}
          </div>
        </div>

        {hint && (
          <p className="mt-3 animate-fade-in-up rounded-xl bg-[var(--color-accent-soft)] p-3 text-xs text-[var(--color-ink)]">{hint}</p>
        )}

        {allSolved && (
          <div className="mt-5 animate-fade-in-up space-y-3">
            <p className="rounded-xl bg-black/[0.03] p-3.5 text-center text-sm font-bold text-[var(--color-ink)]">
              Riya → Unexpected cost → <span className="text-[var(--color-danger)]">Cart abandoned</span>
              <br />
              Kabir → Timing mismatch → <span className="text-[var(--color-danger)]">Cart abandoned</span>
              <br />
              Sneha → Group coordination → <span className="text-[var(--color-danger)]">Cart abandoned</span>
            </p>
            <p className="text-center text-sm italic text-[var(--color-slate)]">
              Three customers. Three different difficulties. One identical behaviour in the data.
            </p>
          </div>
        )}
      </div>

      {allSolved && (
        <div className="animate-fade-in-up space-y-4">
          <div className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">New clue</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{clues[4]}</p>
          </div>
          <ContinueButton onClick={onContinue} label="Make your recommendation" />
        </div>
      )}
    </div>
  );
}
