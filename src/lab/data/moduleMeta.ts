import type { TraceLetter } from "@/lab/types";

export interface ModuleMeta {
  id: string;
  number: number;
  title: string;
  question: string;
  caseLabel: string;
  estimate: string;
  trace: TraceLetter;
  artifact: string;
  sections: number;
}

export const moduleMetas: ModuleMeta[] = [
  {
    id: "m1",
    number: 1,
    title: "See the Journey",
    question: "What exactly are we trying to understand?",
    caseLabel: "An airport ride using Uber/Ola",
    estimate: "35–50 minutes",
    trace: "T",
    artifact: "Journey Frame Card",
    sections: 9,
  },
  {
    id: "m2",
    number: 2,
    title: "Reconstruct Reality",
    question: "How do we learn what the journey actually is?",
    caseLabel: "A late-night food order using Swiggy/Zomato",
    estimate: "50–70 minutes",
    trace: "R",
    artifact: "Evidence Board and Research Plan",
    sections: 10,
  },
  {
    id: "m3",
    number: 3,
    title: "Build the Map",
    question: "How do we turn messy reality into a useful model?",
    caseLabel: "Booking and completing an Airbnb weekend",
    estimate: "55–75 minutes",
    trace: "A",
    artifact: "Current-State Journey Map",
    sections: 8,
  },
  {
    id: "m4",
    number: 4,
    title: "Find the Leverage",
    question: "Which moment deserves attention, and why?",
    caseLabel: "Returning an Amazon/Flipkart purchase",
    estimate: "55–75 minutes",
    trace: "C",
    artifact: "Prioritized Opportunity Brief",
    sections: 9,
  },
  {
    id: "m5",
    number: 5,
    title: "Communicate the Thinking",
    question: "How do we use journey thinking in an interview?",
    caseLabel: "Improve Google Maps for a group trip",
    estimate: "60–90 minutes",
    trace: "E",
    artifact: "Interview-ready case response",
    sections: 13,
  },
];
