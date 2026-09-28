import { ListChecks, Clock, Sparkles } from "lucide-react";
import { SourcesFooter } from "@/components/SourcesFooter";

const details = [
  { icon: ListChecks, label: "10 questions" },
  { icon: Clock, label: "About 15 minutes" },
  { icon: Sparkles, label: "Beginner friendly" },
];

export function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="flex min-h-dvh flex-col">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Daily Product Intuition</p>
        <h1 className="mt-2 text-2xl font-black leading-tight text-[var(--color-ink)] sm:text-3xl">
          Day 1: Understand the problem before designing the solution
        </h1>

        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-slate)]">
          You will examine 10 short situations involving Swiggy. For each one, choose the option that best identifies
          the real customer problem. You will receive immediate feedback and learn one product principle at a time.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {details.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)]"
            >
              <Icon size={13} className="text-[var(--color-accent)]" />
              {label}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={onStart}
          className="mt-8 w-full rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90 sm:w-auto sm:px-8"
        >
          Start today&apos;s exercise
        </button>
        <p className="mt-3 text-xs text-[var(--color-slate)]">No prior product knowledge needed.</p>
      </div>
      <SourcesFooter />
    </main>
  );
}
