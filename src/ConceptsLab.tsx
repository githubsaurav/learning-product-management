import { useState } from "react";
import { useLabProgress } from "@/lab/state/useLabProgress";
import { StudioHome } from "@/lab/StudioHome";
import { ConceptShelfScreen } from "@/lab/ConceptShelfScreen";
import { ReadingRoomScreen } from "@/lab/ReadingRoomScreen";
import { PracticeStudio } from "@/lab/PracticeStudio";
import { PortfolioCapstone } from "@/lab/PortfolioCapstone";
import { Module1 } from "@/lab/modules/Module1";
import { Module2 } from "@/lab/modules/Module2";
import { Module3 } from "@/lab/modules/Module3";
import { Module4 } from "@/lab/modules/Module4";
import { Module5 } from "@/lab/modules/Module5";

type Area = "home" | "m1" | "m2" | "m3" | "m4" | "m5" | "shelf" | "reading" | "practice" | "capstone";

const AREA_KEY = "concepts-lab:area";

const navItems: { id: Area; label: string }[] = [
  { id: "home", label: "Studio Home" },
  { id: "m1", label: "Module 1" },
  { id: "m2", label: "Module 2" },
  { id: "m3", label: "Module 3" },
  { id: "m4", label: "Module 4" },
  { id: "m5", label: "Module 5" },
  { id: "shelf", label: "Concept Shelf" },
  { id: "reading", label: "Reading Room" },
  { id: "practice", label: "Practice Studio" },
  { id: "capstone", label: "Capstone" },
];

function loadArea(): Area {
  try {
    const raw = window.localStorage.getItem(AREA_KEY);
    return (navItems.some((n) => n.id === raw) ? raw : "home") as Area;
  } catch {
    return "home";
  }
}

export default function ConceptsLab() {
  const lab = useLabProgress();
  const [area, setAreaState] = useState<Area>(loadArea);

  function setArea(a: Area) {
    setAreaState(a);
    try {
      window.localStorage.setItem(AREA_KEY, a);
    } catch {
      // non-critical
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:py-6">
      <nav className="-mx-4 mb-4 flex gap-1.5 overflow-x-auto px-4 pb-1">
        {navItems.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setArea(n.id)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-bold transition ${
              area === n.id ? "border-[var(--color-accent-2)] bg-[var(--color-accent-2-soft)] text-[var(--color-accent-2)]" : "border-[var(--color-border)] text-[var(--color-slate)]"
            }`}
          >
            {n.label}
          </button>
        ))}
      </nav>

      {area === "home" && <StudioHome lab={lab} onOpenModule={(id) => setArea(id as Area)} />}
      {area === "m1" && <Module1 lab={lab} />}
      {area === "m2" && <Module2 lab={lab} />}
      {area === "m3" && <Module3 lab={lab} />}
      {area === "m4" && <Module4 lab={lab} />}
      {area === "m5" && <Module5 lab={lab} />}
      {area === "shelf" && <ConceptShelfScreen />}
      {area === "reading" && <ReadingRoomScreen />}
      {area === "practice" && <PracticeStudio lab={lab} />}
      {area === "capstone" && <PortfolioCapstone lab={lab} />}
    </div>
  );
}
