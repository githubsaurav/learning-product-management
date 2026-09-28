import { BarChart3 } from "lucide-react";
import { ContinueButton } from "@/story/components/ContinueButton";

export function Scene1({ chartClicked, onClickChart, onContinue }: { chartClicked: boolean; onClickChart: () => void; onContinue: () => void }) {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-ink)] p-6 text-white shadow-[var(--shadow-card)]">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Monday, 9:12 a.m.</p>
      <p className="mt-1 text-sm text-white/80">Your second week as a product manager</p>

      <div className="mt-5 rounded-2xl bg-white/5 p-4">
        <p className="text-sm italic text-white/90">
          &ldquo;Aarav, something strange is happening. Customers are adding meals to their carts—and then disappearing.&rdquo;
        </p>
        <p className="mt-1 text-xs text-white/50">— Maya, your manager</p>
      </div>

      <button
        type="button"
        onClick={onClickChart}
        disabled={chartClicked}
        className={`mt-5 flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-dashed p-6 text-center transition ${
          chartClicked ? "border-white/20" : "border-[var(--color-accent)] animate-pulse hover:animate-none"
        }`}
      >
        <BarChart3 size={28} className="text-[var(--color-accent)]" />
        <span className="text-sm font-bold">Cart abandonment</span>
        {!chartClicked && <span className="text-xs text-white/60">Tap the chart to look closer</span>}
      </button>

      {chartClicked && (
        <div className="mt-5 animate-fade-in-up space-y-4">
          <p className="rounded-xl bg-white p-4 text-center text-lg font-black text-[var(--color-ink)]">
            30% of customers who add an item leave before ordering.
          </p>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm italic text-white/90">&ldquo;What do you think is going wrong?&rdquo;</p>
            <p className="mt-1 text-xs text-white/50">— Maya</p>
          </div>
          <ContinueButton onClick={onContinue} label="Examine the checkout screen" />
        </div>
      )}
    </div>
  );
}
