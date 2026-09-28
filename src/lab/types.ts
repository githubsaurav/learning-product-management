export type EvidenceLabel = "observed" | "reported" | "inferred" | "assumed";

export const evidenceLabelMeta: Record<EvidenceLabel, { title: string; description: string }> = {
  observed: { title: "Observed", description: "Directly witnessed behavior or an artifact." },
  reported: { title: "Reported", description: "Something a participant said happened." },
  inferred: { title: "Inferred", description: "A plausible interpretation of evidence." },
  assumed: { title: "Assumed", description: "A belief that has not yet been supported." },
};

export type NotebookKind =
  | "observation"
  | "assumption"
  | "question"
  | "stage"
  | "pain-point"
  | "opportunity"
  | "metric"
  | "interview-outline"
  | "note";

export interface NotebookEntry {
  id: string;
  moduleId: string;
  caseLabel: string;
  kind: NotebookKind;
  text: string;
  label: EvidenceLabel | null;
  createdAt: number;
}

export interface ArtifactFieldDef {
  key: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
}

export interface ArtifactDef {
  id: string;
  title: string;
  fields: ArtifactFieldDef[];
}

export type ArtifactValues = Record<string, string>;

export interface EvidenceCard {
  id: string;
  title: string;
  body: string;
  establishes: string[];
  doesNotEstablish: string[];
}

export type TraceLetter = "T" | "R" | "A" | "C" | "E";

export interface PracticeRecord {
  id: string;
  mode: string;
  prompt: string;
  response: string;
  createdAt: number;
}
