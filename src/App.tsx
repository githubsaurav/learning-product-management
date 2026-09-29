import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import LessonHub from "@/LessonHub";
import Day1Hub from "@/Day1Hub";
import Day1Lesson from "@/Day1Lesson";
import VanishingCartLesson from "@/VanishingCartLesson";
import ConceptsLab from "@/ConceptsLab";

type ActiveLesson = "home" | "day1-hub" | "day1" | "vanishing-cart" | "concepts";

const ACTIVE_LESSON_KEY = "daily-product-intuition:active-lesson";

const VALID_LESSONS: ActiveLesson[] = ["home", "day1-hub", "day1", "vanishing-cart", "concepts"];

function loadActiveLesson(): ActiveLesson {
  try {
    const raw = window.localStorage.getItem(ACTIVE_LESSON_KEY);
    return (VALID_LESSONS.includes(raw as ActiveLesson) ? raw : "home") as ActiveLesson;
  } catch {
    return "home";
  }
}

const BACK_TARGET: Record<Exclude<ActiveLesson, "home">, { target: ActiveLesson; label: string }> = {
  "day1-hub": { target: "home", label: "All lessons" },
  day1: { target: "day1-hub", label: "Day 1" },
  "vanishing-cart": { target: "day1-hub", label: "Day 1" },
  concepts: { target: "home", label: "All lessons" },
};

export default function App() {
  const [activeLesson, setActiveLesson] = useState<ActiveLesson>(loadActiveLesson);

  useEffect(() => {
    try {
      window.localStorage.setItem(ACTIVE_LESSON_KEY, activeLesson);
    } catch {
      // Not critical if this doesn't persist.
    }
  }, [activeLesson]);

  const back = activeLesson !== "home" ? BACK_TARGET[activeLesson] : null;

  return (
    <>
      {back && (
        <div className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
          <button
            type="button"
            onClick={() => setActiveLesson(back.target)}
            className="mx-auto flex max-w-xl items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[var(--color-slate)] hover:text-[var(--color-ink)]"
          >
            <ArrowLeft size={13} /> {back.label}
          </button>
        </div>
      )}

      {activeLesson === "home" && <LessonHub onOpenDay1Hub={() => setActiveLesson("day1-hub")} onOpenConcepts={() => setActiveLesson("concepts")} />}
      {activeLesson === "day1-hub" && <Day1Hub onOpenQuiz={() => setActiveLesson("day1")} onOpenStory={() => setActiveLesson("vanishing-cart")} />}
      {activeLesson === "day1" && <Day1Lesson />}
      {activeLesson === "vanishing-cart" && <VanishingCartLesson onExit={() => setActiveLesson("day1-hub")} />}
      {activeLesson === "concepts" && <ConceptsLab />}
    </>
  );
}
