import type { ArtifactDef } from "@/lab/types";

export const journeyFrameCard: ArtifactDef = {
  id: "m1",
  title: "Journey Frame Card",
  fields: [
    { key: "actor", label: "Actor" },
    { key: "outcome", label: "Desired outcome" },
    { key: "situation", label: "Situation / context", multiline: true },
    { key: "begins", label: "Journey begins when" },
    { key: "ends", label: "Journey ends when" },
    { key: "objective", label: "Learning objective", multiline: true },
    { key: "constraints", label: "Known constraints", multiline: true },
    { key: "assumptions", label: "Top three assumptions", multiline: true },
  ],
};

export const evidenceBoardArtifact: ArtifactDef = {
  id: "m2",
  title: "Evidence Board and Research Plan",
  fields: [
    { key: "facts", label: "Observed facts", multiline: true },
    { key: "reports", label: "Participant reports", multiline: true },
    { key: "interpretations", label: "Interpretations", multiline: true },
    { key: "assumptions", label: "Assumptions", multiline: true },
    { key: "questions", label: "Open questions", multiline: true },
    { key: "participants", label: "Proposed participants" },
    { key: "methods", label: "Method mix" },
    { key: "confidence", label: "Confidence notes", multiline: true },
  ],
};

export const journeyStageTemplate: ArtifactDef = {
  id: "m3-stage",
  title: "Journey stage",
  fields: [
    { key: "name", label: "Stage name" },
    { key: "subgoal", label: "User subgoal" },
    { key: "actions", label: "Actions", multiline: true },
    { key: "questions", label: "Questions / thoughts", multiline: true },
    { key: "emotions", label: "Emotions" },
    { key: "needs", label: "Needs", multiline: true },
    { key: "touchpoints", label: "Touchpoints" },
    { key: "channels", label: "Channels" },
    { key: "friction", label: "Friction", multiline: true },
    { key: "positive", label: "Positive value", multiline: true },
    { key: "evidence", label: "Evidence" },
    { key: "unknowns", label: "Unknowns", multiline: true },
  ],
};

export const journeyMapArtifact: ArtifactDef = {
  id: "m3",
  title: "Current-State Journey Map",
  fields: [
    { key: "framing", label: "Framing sentence", multiline: true },
    { key: "stages", label: "Stages" },
    { key: "actions", label: "Actions", multiline: true },
    { key: "thoughts", label: "Thoughts / questions", multiline: true },
    { key: "emotions", label: "Emotions", multiline: true },
    { key: "needs", label: "Needs", multiline: true },
    { key: "touchpoints", label: "Touchpoints and channels", multiline: true },
    { key: "evidence", label: "Evidence references", multiline: true },
    { key: "painPositive", label: "Pain points and positive moments", multiline: true },
    { key: "branches", label: "Branches", multiline: true },
    { key: "unknowns", label: "Unknowns", multiline: true },
    { key: "opportunities", label: "Preliminary opportunities", multiline: true },
  ],
};

export const opportunityBriefArtifact: ArtifactDef = {
  id: "m4",
  title: "Prioritized Opportunity Brief",
  fields: [
    { key: "actorContext", label: "Actor and context" },
    { key: "moment", label: "Consequential moment" },
    { key: "problem", label: "Observed problem", multiline: true },
    { key: "consequence", label: "User consequence", multiline: true },
    { key: "evidence", label: "Supporting evidence", multiline: true },
    { key: "causes", label: "Plausible causes", multiline: true },
    { key: "unknowns", label: "Unknowns", multiline: true },
    { key: "statement", label: "Opportunity statement", multiline: true },
    { key: "why", label: "Why prioritize now", multiline: true },
    { key: "alternatives", label: "Alternative interventions", multiline: true },
    { key: "tradeoffs", label: "Tradeoffs and risks", multiline: true },
    { key: "userOutcome", label: "User outcome" },
    { key: "indicator", label: "Behavioral indicator" },
    { key: "businessOutcome", label: "Business outcome" },
    { key: "nextStep", label: "Next learning step" },
  ],
};

export const interviewOutlineArtifact: ArtifactDef = {
  id: "m5",
  title: "Interview Case Storyboard",
  fields: [
    { key: "objective", label: "Clarified objective and assumptions", multiline: true },
    { key: "actor", label: "Selected user" },
    { key: "situation", label: "Situation and desired outcome", multiline: true },
    { key: "stages", label: "Journey stages", multiline: true },
    { key: "problems", label: "Candidate problems", multiline: true },
    { key: "prioritized", label: "Prioritized problem and rationale", multiline: true },
    { key: "statement", label: "Opportunity statement", multiline: true },
    { key: "directions", label: "Solution directions considered", multiline: true },
    { key: "selected", label: "Selected direction", multiline: true },
    { key: "chain", label: "Behavior-change chain", multiline: true },
    { key: "metrics", label: "Success metrics", multiline: true },
    { key: "guardrails", label: "Guardrails", multiline: true },
    { key: "risks", label: "Risks and unknowns", multiline: true },
    { key: "summary", label: "Two-minute closing summary", multiline: true },
  ],
};
