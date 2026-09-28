import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "concepts-lab:progress";

interface LabState {
  /** Generic free-text answers — currently unused (the lab is click/select-only) but kept for forward compatibility. */
  freeText: Record<string, string>;
  /** Generic single-choice selections, keyed by a unique interaction id the caller defines. */
  selections: Record<string, string>;
  /** Generic multi-select / ordered-list state. */
  multi: Record<string, string[]>;
  /** Timeline / slider placements (0-100 or a meaningful index). */
  timeline: Record<string, number>;
  /** How many progressive-reveal steps have been shown for a given interaction. */
  hints: Record<string, number>;
  /** Whether the expert overlay has been revealed for a given interaction. */
  overlays: Record<string, boolean>;
  /** Arbitrary visited/done flags used to show non-scored progress. */
  flags: Record<string, boolean>;
}

const initialState: LabState = {
  freeText: {},
  selections: {},
  multi: {},
  timeline: {},
  hints: {},
  overlays: {},
  flags: {},
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
    resetAll,
  };
}

export type LabProgressApi = ReturnType<typeof useLabProgress>;
