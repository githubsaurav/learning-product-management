import { BookOpen, Search, Compass } from "lucide-react";

function hasProgress(key: string, isStarted: (parsed: unknown) => boolean): boolean {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return false;
    return isStarted(JSON.parse(raw));
  } catch {
    return false;
  }
}

export default function LessonHub({
  onOpenDay1,
  onOpenStory,
  onOpenConcepts,
}: {
  onOpenDay1: () => void;
  onOpenStory: () => void;
  onOpenConcepts: () => void;
}) {
  const day1Started = hasProgress("daily-product-intuition:day1", (p) => (p as { screen?: string })?.screen !== "welcome");
  const storyStarted = hasProgress("vanishing-cart:progress", (p) => (p as { scene?: number })?.scene !== 1);
  const conceptsStarted = hasProgress("concepts-lab:progress", (p) => {
    const state = p as { selections?: Record<string, string>; multi?: Record<string, string[]> };
    return Object.keys(state.selections ?? {}).length > 0 || Object.keys(state.multi ?? {}).length > 0;
  });

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Daily Product Intuition</p>
      <h1 className="mt-2 text-2xl font-black leading-tight text-[var(--color-ink)] sm:text-3xl">Pick today's lesson</h1>
      <p className="mt-3 text-sm text-[var(--color-slate)]">
        Short, interactive exercises that build product judgment one situation at a time.
      </p>

      <div className="mt-8 space-y-4">
        <LessonCard
          icon={BookOpen}
          eyebrow="Day 1 · Quiz"
          title="Understand the problem before designing the solution"
          detail="10 short Swiggy scenarios · about 15 minutes"
          cta={day1Started ? "Continue" : "Start"}
          onClick={onOpenDay1}
        />
        <LessonCard
          icon={Search}
          eyebrow="Case File 1 · Interactive story"
          title="The Mystery of the Vanishing Cart"
          detail="Investigate why customers abandon their cart · about 8–10 minutes"
          cta={storyStarted ? "Continue" : "Start"}
          onClick={onOpenStory}
        />
        <LessonCard
          icon={Compass}
          eyebrow="Concepts Learning · 5-module studio"
          title="User Journey Thinking Lab"
          detail="Investigate, build, and defend a user journey · about 4–6 hours"
          cta={conceptsStarted ? "Continue" : "Start"}
          onClick={onOpenConcepts}
        />
      </div>
    </main>
  );
}

function LessonCard({
  icon: Icon,
  eyebrow,
  title,
  detail,
  cta,
  onClick,
}: {
  icon: typeof BookOpen;
  eyebrow: string;
  title: string;
  detail: string;
  cta: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-start gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-left shadow-[var(--shadow-card)] transition hover:border-[var(--color-accent)]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
        <Icon size={20} />
      </span>
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">{eyebrow}</p>
        <p className="mt-1 text-base font-bold text-[var(--color-ink)]">{title}</p>
        <p className="mt-1 text-xs text-[var(--color-slate)]">{detail}</p>
        <span className="mt-3 inline-block rounded-full bg-[var(--color-ink)] px-3.5 py-1.5 text-xs font-bold text-white">{cta}</span>
      </div>
    </button>
  );
}
