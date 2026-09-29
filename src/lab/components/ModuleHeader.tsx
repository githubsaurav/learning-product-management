export function ModuleHeader({
  eyebrow,
  question,
  section,
  totalSections,
}: {
  eyebrow: string;
  question: string;
  section: number;
  totalSections: number;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">{eyebrow}</p>
      <h1 className="mt-1 text-lg font-black leading-snug text-[var(--color-ink)]">{question}</h1>
      <p className="mt-1 text-xs text-[var(--color-slate)]">
        Section {section} of {totalSections}
      </p>
    </div>
  );
}
