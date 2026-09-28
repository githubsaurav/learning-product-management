export const interviewPrompt = "Improve Google Maps for a group of friends planning a weekend trip.";

export const clarifyAreas = [
  "Is the focus planning before the trip, navigating during it, or both?",
  "Are we optimizing for an existing market or a particular geography?",
  "Is success primarily user value, Maps engagement, or a strategic product goal?",
  "Does “group” mean co-located friends or people planning remotely?",
];

export const interviewerAnswers = [
  "Focus on planning before departure.",
  "Assume urban Indian users planning remotely.",
  "The objective is to make Maps more useful for collaborative trip planning while preserving its role as a trusted place and navigation product.",
];

export const actorSegments = [
  "One organizer coordinating passive friends",
  "A group with strong and conflicting preferences",
  "Friends visiting an unfamiliar place",
  "Budget-sensitive students",
  "Parents coordinating families",
  "Spontaneous travelers with little planning time",
];

export const defensibleActor =
  "Focus on the informal organizer in a group of four friends visiting an unfamiliar city. This person carries coordination work, but decisions still require group confidence and consent.";

export const goalContrast = {
  weak: "Use Google Maps to create a shared itinerary.",
  strong: "Help a group agree on a feasible set of places and turn those preferences into a plan everyone understands.",
};

export const journeyStages5 = [
  { name: "Trigger the trip", detail: "Agree to travel and define rough constraints." },
  { name: "Collect possibilities", detail: "Share places from Maps, Instagram, blogs, and friends." },
  { name: "Make tradeoffs", detail: "Compare interest, distance, time, price, opening hours, and group preferences." },
  { name: "Commit to a plan", detail: "Decide what is essential, optional, and sequenced." },
  { name: "Prepare for handoff", detail: "Ensure everyone can access the plan and understands unresolved decisions." },
];

export const possibleProblems = [
  "Suggestions arrive across several channels and lose context.",
  "A shared list captures places but not why someone suggested them.",
  "The group cannot see the tradeoff between preference and travel feasibility.",
  "Silence is mistaken for agreement.",
  "One person performs hidden coordination labor.",
  "A list does not naturally become a time-aware plan.",
  "Changes are difficult to communicate after the plan is shared.",
];

export const defensiblePriority =
  "Prioritize turning scattered preferences into a feasible shared plan. It is central to the organizer's goal, occurs in nearly every group-planning journey, connects several downstream problems, and fits Maps' place and travel-time knowledge. The biggest uncertainty is whether groups want to commit inside Maps or merely use it as a reference.";

export const solutionDirections = [
  { id: "A", title: "Context-rich shared collection", detail: "People add a place with a short reason, preference strength, and relevant constraint." },
  { id: "B", title: "Feasibility view", detail: "Maps visualizes clusters, travel burden, opening-hour conflicts, and places that cannot reasonably fit together." },
  { id: "C", title: "Lightweight group decision", detail: "Members react privately or publicly, identify must-haves, and surface unresolved conflicts without forcing a formal vote." },
  { id: "D", title: "Plan states", detail: "Separate “ideas,” “likely,” and “committed,” making the transition from collection to decision visible." },
];

export const chainExample =
  "Suggestions lose their reasoning → contributors attach a short intent when saving → organizers understand preferences without repeating conversations → more shared lists progress to a committed plan → added input may reduce contribution, so intent must be optional or extremely lightweight.";

export const northStar = "Groups reach a feasible plan they understand and accept with less coordination burden.";

export const candidateIndicators = [
  "Percentage of collaborative planning sessions that progress from collected ideas to a committed plan",
  "Number of active contributors, not just viewers",
  "Time from first saved place to shared plan",
  "Unresolved conflicts at the point of commitment",
  "Plan reopening or use when the trip begins",
  "Organizer-reported coordination effort",
];

export const guardrails5 = [
  "Place saves should not decline due to added friction",
  "Notifications should not become noisy",
  "Privacy expectations for trip plans must remain clear",
  "Local-business ranking should not be distorted by group interactions",
  "Accessibility and low-connectivity use should remain viable",
];

export const adaptationConstraint = "Research shows that most group members will not install anything new or open a shared planning page more than once.";

export const possibleAdaptations = [
  "Let contributors respond through a lightweight web surface.",
  "Create a compact share card showing the decision required.",
  "Allow the organizer to capture preferences from existing messages.",
  "Design asynchronous participation rather than demanding a live planning session.",
];

export const compactStructure = [
  "Clarify the objective and make explicit assumptions.",
  "Choose a user and a consequential situation.",
  "State the desired outcome.",
  "Walk through the current journey at the right altitude.",
  "Identify several problems and select one.",
  "Explain why it matters and what remains uncertain.",
  "Explore solution directions and choose a coherent minimum.",
  "Connect the intervention to behavior, outcome, metrics, and risks.",
];

export const timeAllocation = [
  { activity: "Clarify and frame", time: "3–4 minutes" },
  { activity: "Segment and select user", time: "4–5 minutes" },
  { activity: "Map current journey", time: "6–7 minutes" },
  { activity: "Identify and prioritize problems", time: "5–6 minutes" },
  { activity: "Explore and select solution", time: "8–9 minutes" },
  { activity: "Metrics, risks, and summary", time: "4–5 minutes" },
];

export const listeningFor = [
  "Does the candidate create structure without becoming rigid?",
  "Do they understand a person in context or describe a generic “user”?",
  "Can they distinguish evidence, assumption, and inference?",
  "Do they identify causes and consequences rather than list surface complaints?",
  "Can they prioritize, or do they try to solve everything?",
  "Do solutions trace back to the chosen problem?",
  "Do metrics reflect user value as well as product activity?",
  "Can they change course when assumptions change?",
  "Can they communicate a clear narrative?",
];

export const failureModes = [
  { title: "Framework performance", detail: "The candidate announces several frameworks but does not use them to make decisions." },
  { title: "Generic stages", detail: "“Discover, use, retain” replaces the actual journey." },
  { title: "Feature teleportation", detail: "The candidate hears “group trip” and immediately proposes voting, AI itineraries, or chat." },
  { title: "Persona theater", detail: "The candidate invents a name, age, and biography that do not influence the problem." },
  { title: "Pain-point collection", detail: "Many problems are listed, but none are prioritized." },
  { title: "Metrics as a ritual", detail: "DAU, retention, and NPS are named without explaining why the solution would change them." },
  { title: "False certainty", detail: "Assumptions are presented as research findings." },
];

export const playbackHeadings = ["Clear and grounded", "Promising but unsupported", "Skipped too quickly", "Worth exploring next"];
