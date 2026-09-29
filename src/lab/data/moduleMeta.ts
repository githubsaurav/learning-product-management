export interface ModuleMeta {
  id: string;
  number: number;
  title: string;
  question: string;
  caseLabel: string;
  estimate: string;
  artifact: string;
  sections: number;
  /** Real, named frameworks this module explicitly teaches, shown before diving in. */
  frameworks: string[];
}

export const moduleMetas: ModuleMeta[] = [
  {
    id: "m1",
    number: 1,
    title: "See the Journey",
    question: "What exactly are we trying to understand?",
    caseLabel: "An airport ride using Uber/Ola",
    estimate: "35–50 minutes",
    artifact: "Journey Frame Card",
    sections: 10,
    frameworks: ["Jobs to Be Done"],
  },
  {
    id: "m2",
    number: 2,
    title: "Reconstruct Reality",
    question: "How do we learn what the journey actually is?",
    caseLabel: "A late-night food order using Swiggy/Zomato",
    estimate: "50–70 minutes",
    artifact: "Evidence Board and Research Plan",
    sections: 11,
    frameworks: ["5-Step Journey Mapping Process (NN/g)"],
  },
  {
    id: "m3",
    number: 3,
    title: "Build the Map",
    question: "How do we turn messy reality into a useful model?",
    caseLabel: "Booking and completing an Airbnb weekend",
    estimate: "55–75 minutes",
    artifact: "Current-State Journey Map",
    sections: 8,
    frameworks: ["5 Components of a Journey Map (NN/g)"],
  },
  {
    id: "m4",
    number: 4,
    title: "Find the Leverage",
    question: "Which moment deserves attention, and why?",
    caseLabel: "Returning an Amazon/Flipkart purchase",
    estimate: "55–75 minutes",
    artifact: "Prioritized Opportunity Brief",
    sections: 10,
    frameworks: ["7 Journey-Map Lenses (NN/g)", "5 Whys", "Opportunity Solution Tree", "RICE / ICE"],
  },
  {
    id: "m5",
    number: 5,
    title: "Communicate the Thinking",
    question: "How do we use journey thinking in an interview?",
    caseLabel: "Improve Google Maps for a group trip",
    estimate: "60–90 minutes",
    artifact: "Interview-ready case response",
    sections: 14,
    frameworks: ["CIRCLES Method"],
  },
];
