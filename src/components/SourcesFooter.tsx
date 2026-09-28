import { Disclosure } from "@/components/Disclosure";
import { sources } from "@/data/summary";

export function SourcesFooter() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-8 pt-2">
      <Disclosure label="Why these questions?">
        <ul className="space-y-1.5 rounded-xl bg-black/[0.03] p-3.5 text-xs text-[var(--color-slate)]">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-[var(--color-accent)]">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Disclosure>
    </div>
  );
}
