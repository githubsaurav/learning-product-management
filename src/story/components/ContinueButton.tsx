import { ArrowRight } from "lucide-react";

export function ContinueButton({ onClick, label = "Continue investigation" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90 animate-fade-in-up"
    >
      {label}
      <ArrowRight size={16} />
    </button>
  );
}
