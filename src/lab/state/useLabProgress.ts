import { useCallback, useEffect, useState } from "react";
import type { ArtifactValues, EvidenceLabel, NotebookEntry, NotebookKind, PracticeRecord } from "@/lab/types";

const STORAGE_KEY = "concepts-lab:progress";

interface LabState {
  notebook: NotebookEntry[];
  artifacts: Record<string, ArtifactValues>;
  /** Generic free-text answers, keyed by a unique interaction id the caller defines (e.g. "m1-framing-sentence"). */
  freeText: Record<string, string>;
  /** Generic single-choice selections, keyed similarly. */
  selections: Record<string, string>;
  /** Generic multi-select / ordered-list state. */
  multi: Record<string, string[]>;
  /** Timeline / slider placements (0-100 or a meaningful index). */
  timeline: Record<string, number>;
  /** How many hint-ladder rungs have been revealed for a given interaction. */
  hints: Record<string, number>;
  /** Whether the expert overlay has been revealed for a given interaction. */
  overlays: Record<string, boolean>;
  /** Arbitrary visited/done flags used to show non-scored progress. */
  flags: Record<string, boolean>;
  practice: PracticeRecord[];
}

const initialState: LabState = {
  notebook: [],
  artifacts: {},
  freeText: {},
  selections: {},
  multi: {},
  timeline: {},
  hints: {},
  overlays: {},
  flags: {},
  practice: [],
};

function load(): LabState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as LabState;
    return { ...initialState, ...parsed };
  } catch {
    return initialState;
  }
}

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `n${Date.now()}${idCounter}`;
}

export function useLabProgress() {
  const [state, setState] = useState<LabState>(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Progress just won't survive a refresh if storage is unavailable.
    }
  }, [state]);

  const setFreeText = useCallback((key: string, value: string) => {
    setState((s) => ({ ...s, freeText: { ...s.freeText, [key]: value } }));
  }, []);

  const setSelection = useCallback((key: string, value: string) => {
    setState((s) => ({ ...s, selections: { ...s.selections, [key]: value } }));
  }, []);

  const toggleMulti = useCallback((key: string, value: string) => {
    setState((s) => {
      const current = s.multi[key] ?? [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...s, multi: { ...s.multi, [key]: next } };
    });
  }, []);

  const setMulti = useCallback((key: string, values: string[]) => {
    setState((s) => ({ ...s, multi: { ...s.multi, [key]: values } }));
  }, []);

  const setTimeline = useCallback((key: string, value: number) => {
    setState((s) => ({ ...s, timeline: { ...s.timeline, [key]: value } }));
  }, []);

  const revealNextHint = useCallback((key: string) => {
    setState((s) => ({ ...s, hints: { ...s.hints, [key]: (s.hints[key] ?? 0) + 1 } }));
  }, []);

  const revealOverlay = useCallback((key: string) => {
    setState((s) => ({ ...s, overlays: { ...s.overlays, [key]: true } }));
  }, []);

  const setFlag = useCallback((key: string, value = true) => {
    setState((s) => (s.flags[key] === value ? s : { ...s, flags: { ...s.flags, [key]: value } }));
  }, []);

  const setArtifactField = useCallback((artifactId: string, fieldKey: string, value: string) => {
    setState((s) => ({
      ...s,
      artifacts: { ...s.artifacts, [artifactId]: { ...(s.artifacts[artifactId] ?? {}), [fieldKey]: value } },
    }));
  }, []);

  const addNote = useCallback((moduleId: string, caseLabel: string, kind: NotebookKind, text: string, label: EvidenceLabel | null = null) => {
    if (!text.trim()) return;
    setState((s) => ({
      ...s,
      notebook: [...s.notebook, { id: nextId(), moduleId, caseLabel, kind, text: text.trim(), label, createdAt: Date.now() }],
    }));
  }, []);

  const relabelNote = useCallback((id: string, label: EvidenceLabel) => {
    setState((s) => ({ ...s, notebook: s.notebook.map((n) => (n.id === id ? { ...n, label } : n)) }));
  }, []);

  const deleteNote = useCallback((id: string) => {
    setState((s) => ({ ...s, notebook: s.notebook.filter((n) => n.id !== id) }));
  }, []);

  const addPractice = useCallback((mode: string, prompt: string, response: string) => {
    setState((s) => ({ ...s, practice: [...s.practice, { id: nextId(), mode, prompt, response, createdAt: Date.now() }] }));
  }, []);

  const resetAll = useCallback(() => setState(initialState), []);

  return {
    state,
    setFreeText,
    setSelection,
    toggleMulti,
    setMulti,
    setTimeline,
    revealNextHint,
    revealOverlay,
    setFlag,
    setArtifactField,
    addNote,
    relabelNote,
    deleteNote,
    addPractice,
    resetAll,
  };
}

export type LabProgressApi = ReturnType<typeof useLabProgress>;
