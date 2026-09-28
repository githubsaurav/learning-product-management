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
  {
    question: "What did Meera need before she needed a ride?",
    options: [
      { id: "a", text: "A cheaper ride option", note: "Weak fit — nothing in the story suggests price was on her mind yet." },
      { id: "b", text: "To decide when to leave, given the rain and flight time", note: "Strongest fit — this decision happens before any app opens and shapes everything after.", strongest: true },
      { id: "c", text: "A way to track her driver's location", note: "This need only exists after a ride is already booked." },
    ],
  },
  {
    question: "Which part of the experience could no mobility app control directly?",
    options: [
      { id: "a", text: "The rain and the slow apartment gate", note: "Strongest fit — these are environmental and building conditions no app can reach.", strongest: true },
      { id: "b", text: "Which ride type she selects", note: "This is a choice made inside the app's own interface." },
      { id: "c", text: "The toll surcharge shown at payment", note: "This is something the platform itself calculates and displays." },
    ],
  },
  {
    question: "Which moment would the payments team exclude but the airport team include?",
    options: [
      { id: "a", text: "Walking toward the terminal", note: "Strongest fit — a payments team's scope usually ends at the transaction; an airport-experience team cares about full arrival.", strongest: true },
      { id: "b", text: "Booking the ride", note: "Both teams would likely include this — it's central to either scope." },
      { id: "c", text: "Paying the toll surcharge", note: "This is exactly what a payments team would focus on, not exclude." },
    ],
  },
  {
    question: "What assumption might you have quietly made about Meera?",
    options: [
      { id: "a", text: "That she is traveling for work", note: "The story never says this — notice if you filled it in automatically." },
      { id: "b", text: "That she has taken this exact route before", note: "Also never established — she could be completely unfamiliar with it." },
      { id: "c", text: "That she is anxious about missing the flight", note: "Plausible, but it's an inference from context, not something the story states directly." },
    ],
  },
];

export const transferPrompts = [
  "Finding and starting a suitable show on Netflix",
  "Paying a household electricity bill",
  "Ordering a week's groceries",
  "Coordinating dinner with four friends",
];

export const transferFramings: Record<string, { weak: string; strong: string; note: string }> = {
  "Finding and starting a suitable show on Netflix": {
    weak: "Netflix users want to browse shows easily.",
    strong: "A tired viewer wants to find something worth watching within a couple of minutes, without rewatching trailers for shows they'll reject.",
    note: "The strong version names a specific state (tired, short on patience) and a real outcome — not just “browsing.”",
  },
  "Paying a household electricity bill": {
    weak: "People should be able to pay bills in the app.",
    strong: "A household member wants to confirm the amount is correct and pay before the due date, without hunting for the account number every month.",
    note: "The strong version surfaces the recurring friction (finding the account number) that the weak version hides.",
  },
  "Ordering a week's groceries": {
    weak: "Shoppers want a faster checkout.",
    strong: "A person planning meals for the week wants confidence that nothing important is missing before committing to one large order.",
    note: "“Faster checkout” centers the product's own funnel; the strong version centers the planning risk the person is managing.",
  },
  "Coordinating dinner with four friends": {
    weak: "Friends want a shared list to pick a restaurant.",
    strong: "A friend group wants to agree on one place that fits everyone's schedule, budget, and food preferences, without an endless group chat.",
    note: "The strong version names the actual constraint (competing preferences) rather than jumping to a feature (a list).",
  },
};

export const madLibBlanks = [
  {
    key: "actor",
    options: [
      { id: "broad", text: "travelers", effect: "A broad actor like “travelers” keeps in irrelevant variation — a family on vacation faces a very different journey." },
      { id: "narrow", text: "time-sensitive solo travelers", effect: "Narrowing the actor removes irrelevant variation." },
    ],
  },
  {
    key: "goal",
    options: [
      { id: "broad", text: "book a ride", effect: "This centers the product (booking) rather than the outcome the person actually wants." },
      { id: "narrow", text: "reach the correct terminal with confidence", effect: "Making the goal outcome-oriented avoids centering the product." },
    ],
  },
  {
    key: "scenario",
    options: [
      { id: "broad", text: "during a busy morning", effect: "Vague context like “a busy morning” hides the specific constraints at play." },
      { id: "narrow", text: "during uncertain weather with a tight flight window", effect: "Adding the context exposes constraints." },
    ],
  },
  {
    key: "begin",
    options: [
      { id: "broad", text: "she opens a mobility app", effect: "Starting at app-open silently assumes the journey is the app — the classic “beginning at sign-up” trap." },
      { id: "narrow", text: "she starts deciding when to leave", effect: "Setting a deliberate start boundary prevents an endless map." },
    ],
  },
  {
    key: "end",
    options: [
      { id: "broad", text: "the ride is booked", effect: "Ending at booking excludes everything that actually determines whether the trip felt successful." },
      { id: "narrow", text: "she reaches the terminal entrance", effect: "Setting a deliberate end boundary prevents an endless map." },
    ],
  },
  {
    key: "objective",
    options: [
      { id: "broad", text: "see if the app is easy to use", effect: "This objective only tells you about the interface, not the journey." },
      { id: "narrow", text: "understand where confidence and predictability break down", effect: "Specifying the learning objective changes what evidence matters." },
    ],
  },
];
