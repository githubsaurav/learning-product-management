import { useState } from "react";
import { Search } from "lucide-react";
import { LabCard } from "@/lab/components/Card";
import { glossary } from "@/lab/data/glossary";

export function ConceptShelfScreen() {
  const [query, setQuery] = useState("");
  const filtered = glossary.filter((g) => g.term.toLowerCase().includes(query.toLowerCase()) || g.definition.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-4 pb-10">
      <div>
        <h1 className="text-lg font-black text-[var(--color-ink)]">Concept shelf</h1>
        <p className="mt-1 text-sm text-[var(--color-slate)]">A plain-language definition, a familiar example, a contrast, and a useful question for each term.</p>
      </div>

      <div className="relative">
        <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-slate)]" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search concepts…"
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pl-9 pr-3 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-accent)]"
        />
      </div>

      <div className="space-y-2">
        {filtered.map((g) => (
          <LabCard key={g.term}>
            <p className="text-sm font-bold text-[var(--color-ink)]">{g.term}</p>
            <p className="mt-1 text-sm text-[var(--color-ink)]">{g.definition}</p>
            <p className="mt-1.5 text-xs text-[var(--color-slate)]">
              <span className="font-bold">Example: </span>
              {g.example}
            </p>
            {g.contrast && (
              <p className="mt-1 text-xs text-[var(--color-slate)]">
                <span className="font-bold">Contrast: </span>
                {g.contrast}
              </p>
            )}
            <p className="mt-1 text-xs italic text-[var(--color-accent-2)]">Ask: {g.ask}</p>
          </LabCard>
        ))}
        {filtered.length === 0 && <p className="text-sm text-[var(--color-slate)]">No concepts match “{query}.”</p>}
      </div>
    </div>
  );
}
