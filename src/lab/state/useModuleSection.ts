import { useState } from "react";
import type { LabProgressApi } from "@/lab/state/useLabProgress";

/** Tracks which section of a module the learner is on, persisted via the generic selections bucket. */
export function useModuleSection(lab: LabProgressApi, moduleId: string) {
  const key = `${moduleId}-section`;
  const [section, setSectionState] = useState<number>(() => Number(lab.state.selections[key] ?? "1"));

  function setSection(n: number) {
    setSectionState(n);
    lab.setSelection(key, String(n));
    lab.setFlag(`${moduleId}:visited`);
  }

  return { section, setSection };
}
