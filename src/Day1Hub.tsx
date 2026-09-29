import { BookOpen, Search } from "lucide-react";
import { LessonCard } from "@/components/LessonCard";

function hasProgress(key: string, isStarted: (parsed: unknown) => boolean): boolean {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return false;
    return isStarted(JSON.parse(raw));
  } catch {
    return false;
  }
}

export default function Day1Hub({ onOpenQuiz, onOpenStory }: { onOpenQuiz: () => void; onOpenStory: () => void }) {
  const day1Started = hasProgress("daily-product-intuition:day1", (p) => (p as { screen?: string })?.screen !== "welcome");
  const storyStarted = hasProgress("vanishing-cart:progress", (p) => (p as { scene?: number })?.scene !== 1);

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Day-on-Day Learning</p>
      <h1 className="mt-2 text-2xl font-black leading-tight text-[var(--color-ink)] sm:text-3xl">Day 1</h1>
      <p className="mt-3 text-sm text-[var(--color-slate)]">Two short, interactive exercises for today.</p>

      <div className="mt-8 space-y-4">
        <LessonCard
          icon={BookOpen}
          eyebrow="Quiz"
          title="Understand the problem before designing the solution"
          detail="10 short Swiggy scenarios · about 15 minutes"
          cta={day1Started ? "Continue" : "Start"}
          onClick={onOpenQuiz}
        />
        <LessonCard
          icon={Search}
          eyebrow="Interactive story · Case File 1"
          title="The Mystery of the Vanishing Cart"
          detail="Investigate why customers abandon their cart · about 8–10 minutes"
          cta={storyStarted ? "Continue" : "Start"}
          onClick={onOpenStory}
        />
      </div>
    </main>
  );
}
