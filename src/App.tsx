import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import LessonHub from "@/LessonHub";
import Day1Lesson from "@/Day1Lesson";
import VanishingCartLesson from "@/VanishingCartLesson";
import ConceptsLab from "@/ConceptsLab";

type ActiveLesson = "home" | "day1" | "vanishing-cart" | "concepts";

const ACTIVE_LESSON_KEY = "daily-product-intuition:active-lesson";

function loadActiveLesson(): ActiveLesson {
  try {
    const raw = window.localStorage.getItem(ACTIVE_LESSON_KEY);
    if (raw === "day1" || raw === "vanishing-cart" || raw === "concepts" || raw === "home") return raw;
    return "home";
  } catch {
    return "home";
  }
}

export default function App() {
  const [activeLesson, setActiveLesson] = useState<ActiveLesson>(loadActiveLesson);

  useEffect(() => {
    try {
      window.localStorage.setItem(ACTIVE_LESSON_KEY, activeLesson);
    } catch {
      // Not critical if this doesn't persist.
    }
  }, [activeLesson]);

  return (
    <>
      {activeLesson !== "home" && (
        <div className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
          <button
            type="button"
            onClick={() => setActiveLesson("home")}
            className="mx-auto flex max-w-xl items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[var(--color-slate)] hover:text-[var(--color-ink)]"
          >
            <ArrowLeft size={13} /> All lessons
          </button>
        </div>
      )}

      {activeLesson === "home" && (
        <LessonHub onOpenDay1={() => setActiveLesson("day1")} onOpenStory={() => setActiveLesson("vanishing-cart")} onOpenConcepts={() => setActiveLesson("concepts")} />
      )}
      {activeLesson === "day1" && <Day1Lesson />}
      {activeLesson === "vanishing-cart" && <VanishingCartLesson onExit={() => setActiveLesson("home")} />}
      {activeLesson === "concepts" && <ConceptsLab />}
    </>
  );
}
