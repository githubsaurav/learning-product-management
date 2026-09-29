import { useState } from "react";
import { BookOpen, Compass } from "lucide-react";
import { LessonCard } from "@/components/LessonCard";

type HomeTab = "day-on-day" | "learning-modules";

const HOME_TAB_KEY = "daily-product-intuition:home-tab";

function loadHomeTab(): HomeTab {
  try {
    const raw = window.localStorage.getItem(HOME_TAB_KEY);
    return raw === "learning-modules" ? "learning-modules" : "day-on-day";
  } catch {
    return "day-on-day";
  }
}

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
  onOpenDay1Hub,
  onOpenConcepts,
}: {
  onOpenDay1Hub: () => void;
  onOpenConcepts: () => void;
}) {
  const [tab, setTabState] = useState<HomeTab>(loadHomeTab);

  function setTab(t: HomeTab) {
    setTabState(t);
    try {
      window.localStorage.setItem(HOME_TAB_KEY, t);
    } catch {
      // non-critical
    }
  }

  const day1Started = hasProgress("daily-product-intuition:day1", (p) => (p as { screen?: string })?.screen !== "welcome");
  const storyStarted = hasProgress("vanishing-cart:progress", (p) => (p as { scene?: number })?.scene !== 1);
  const day1AnyProgress = day1Started || storyStarted;
  const conceptsStarted = hasProgress("concepts-lab:progress", (p) => {
    const state = p as { selections?: Record<string, string>; multi?: Record<string, string[]> };
    return Object.keys(state.selections ?? {}).length > 0 || Object.keys(state.multi ?? {}).length > 0;
  });

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Daily Product Intuition</p>
      <h1 className="mt-2 text-2xl font-black leading-tight text-[var(--color-ink)] sm:text-3xl">Pick where to learn</h1>
      <p className="mt-3 text-sm text-[var(--color-slate)]">Short daily scenarios, or a deeper multi-module studio — both fully interactive.</p>

      <div className="mt-6 flex gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
        <button
          type="button"
          onClick={() => setTab("day-on-day")}
          className={`flex-1 rounded-full px-3 py-2 text-xs font-bold transition ${tab === "day-on-day" ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-slate)]"}`}
        >
          Day-on-Day Learning
        </button>
        <button
          type="button"
          onClick={() => setTab("learning-modules")}
          className={`flex-1 rounded-full px-3 py-2 text-xs font-bold transition ${tab === "learning-modules" ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-slate)]"}`}
        >
          Learning Modules
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {tab === "day-on-day" && (
          <LessonCard
            icon={BookOpen}
            eyebrow="Day 1"
            title="Quiz + interactive case file"
            detail="A 15-minute quiz and an 8–10 minute investigation · about 25 minutes total"
            cta={day1AnyProgress ? "Continue" : "Start"}
            onClick={onOpenDay1Hub}
          />
        )}
        {tab === "learning-modules" && (
          <LessonCard
            icon={Compass}
            eyebrow="Concepts Learning · 5-module studio"
            title="User Journey Thinking Lab"
            detail="Investigate, build, and defend a user journey · about 4–6 hours"
            cta={conceptsStarted ? "Continue" : "Start"}
            onClick={onOpenConcepts}
          />
        )}
      </div>
    </main>
  );
}
