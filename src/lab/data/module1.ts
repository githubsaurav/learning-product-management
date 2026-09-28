export const meeraIntro =
  "Meera has a 7:45 a.m. flight from Bengaluru. It is raining. The apartment security gate is slow to open, the airline has warned passengers to arrive early, and Meera is carrying a suitcase and a laptop bag. She has not opened a mobility app yet.";

export const beginningTicks = [
  { position: 5, label: "Booked the flight" },
  { position: 28, label: "Planned when to leave" },
  { position: 52, label: "Opened Uber/Ola" },
  { position: 75, label: "Driver accepted" },
  { position: 95, label: "Car arrived" },
];

export const scopeReveal =
  "The useful beginning depends on the question you are trying to answer. If the team is improving pickup reliability, planning when to leave may matter. If it is redesigning payment, the scope can begin much later. Scope is a decision, not a fact hidden in the data.";

export const sequenceSteps = [
  { text: "Checks the rain", insideApp: false },
  { text: "Checks expected travel time", insideApp: false },
  { text: "Asks the apartment guard whether the street is flooded", insideApp: false },
  { text: "Compares two ride apps", insideApp: false },
  { text: "Books a ride", insideApp: true },
  { text: "Calls the driver to explain the gate", insideApp: false },
  { text: "Waits under the lobby awning", insideApp: false },
  { text: "Helps the driver locate the correct entrance", insideApp: false },
  { text: "Rides to the airport", insideApp: true },
  { text: "Pays a toll surcharge", insideApp: true },
  { text: "Unloads luggage", insideApp: false },
  { text: "Walks toward the terminal", insideApp: false },
];

export const sequenceLens =
  "A user journey is organized around the user's goal, not around the boundaries of a product. Products, people, places, devices, and organizational processes can all become part of the journey.";

export const teams = [
  {
    id: "pickup",
    name: "Pickup team",
    charter: "Reduce failed or stressful pickups.",
  },
  {
    id: "airport",
    name: "Airport partnerships team",
    charter: "Make airport travel predictable from planning through terminal arrival.",
  },
  {
    id: "payments",
    name: "Payments team",
    charter: "Reduce confusion about fares, tolls, and receipts.",
  },
];

export const framingDecisions = [
  { key: "Actor", question: "Whose experience are we following?" },
  { key: "Goal", question: "What progress are they trying to make?" },
  { key: "Scenario", question: "What situation creates this journey?" },
  { key: "Scope", question: "Where does our inquiry begin and end?" },
  { key: "Perspective", question: "Are we describing current reality, a hypothesis, or a desired future?" },
];

export const framingExample =
  "We are examining how time-sensitive solo travelers get from home to the correct airport terminal during uncertain weather, from deciding when to leave until reaching the terminal entrance, so that we can understand where confidence and predictability break down.";

export const framingEditEffects = [
  "Narrowing the actor removes irrelevant variation.",
  "Making the goal outcome-oriented avoids centering the product.",
  "Adding the context exposes constraints.",
  "Setting boundaries prevents an endless map.",
  "Specifying the learning objective changes what evidence matters.",
];

export interface CameraLens {
  id: string;
  name: string;
  question: string;
  contains: string;
  example: string;
}

export const cameraLenses: CameraLens[] = [
  {
    id: "journey",
    name: "User journey",
    question: "How does a person pursue a meaningful goal across time and touchpoints?",
    contains: "Stages, actions, thoughts, emotions, needs, touchpoints, channels, pain points, context.",
    example: "Meera getting from home to her airport terminal.",
  },
  {
    id: "flow",
    name: "User flow",
    question: "What interactions occur inside a product while completing a specific task?",
    contains: "Screens, actions, decisions, system responses, alternate paths.",
    example: "Selecting pickup and destination, choosing a ride type, and confirming the booking.",
  },
  {
    id: "funnel",
    name: "Funnel",
    question: "Where do people progress or drop out across measurable steps?",
    contains: "Population counts, conversion rates, stages defined by events.",
    example: "Search initiated → ride option viewed → booking requested → ride completed.",
  },
  {
    id: "lifecycle",
    name: "Lifecycle",
    question: "How does a person's relationship with a product or company evolve?",
    contains: "Acquisition, activation, engagement, retention, expansion, churn, or reactivation.",
    example: "First ride through becoming a recurring commuter.",
  },
  {
    id: "blueprint",
    name: "Service blueprint",
    question: "What frontstage and backstage people, processes, policies, and systems deliver the experience?",
    contains: "Customer actions, visible service, backstage activity, support processes, dependencies.",
    example: "Dispatch logic, driver incentives, mapping systems, airport queues, customer support, and payment settlement behind Meera's ride.",
  },
];

export const thinkingTraps = [
  { title: "Trap 1 — Beginning at sign-up", detail: "The need often begins before the product interaction." },
  {
    title: "Trap 2 — Treating everyone as one actor",
    detail: "A solo business traveler, a family with children, and an airport employee may share steps but have different goals and constraints.",
  },
  {
    title: "Trap 3 — Mapping the company's process",
    detail: "“Acquire, convert, retain” may be meaningful to the company, but it is not how the user experiences their goal.",
  },
  {
    title: "Trap 4 — Making the scope universal",
    detail: "A map that includes everything usually explains nothing clearly. Scope should serve a decision.",
  },
];

export const reflectionQuestions = [
  "What did Meera need before she needed a ride?",
  "Which part of the experience could no mobility app control directly?",
  "Which moment would the payments team exclude but the airport team include?",
  "What assumption did you make about Meera that the story never established?",
];

export const transferPrompts = [
  "Finding and starting a suitable show on Netflix",
  "Paying a household electricity bill",
  "Ordering a week's groceries",
  "Coordinating dinner with four friends",
];
