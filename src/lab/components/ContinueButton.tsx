import { ArrowRight } from "lucide-react";

export function ContinueButton({ onClick, label = "Continue" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
    >
      {label}
      <ArrowRight size={16} />
    </button>
  );
}
