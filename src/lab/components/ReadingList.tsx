export interface ReadingLink {
  label: string;
  url: string;
}

export function ReadingList({ links }: { links: ReadingLink[] }) {
  return (
    <ul className="space-y-1.5">
      {links.map((l) => (
        <li key={l.url}>
          <a href={l.url} target="_blank" rel="noreferrer" className="text-xs text-[var(--color-accent)] underline decoration-dotted underline-offset-2 hover:text-[var(--color-ink)]">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
