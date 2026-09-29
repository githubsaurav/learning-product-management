export const meeraIntro =
  "Meera has a 7:45 a.m. flight from Bengaluru. It is raining. The apartment security gate is slow to open, the airline has warned passengers to arrive early, and Meera is carrying a suitcase and a laptop bag. She has not opened a mobility app yet.";

export const beginningTicks = [
  { position: 5, label: "Booked the flight" },
  { position: 28, label: "Planned when to leave" },
  { position: 52, label: "Opened Uber/Ola" },
  { position: 75, label: "Driver accepted" },
  { position: 95, label: "Car arrived" },
];

/** Shown at the top (objective) and bottom (learned + common mistake) of each of the
 * module's 10 sections — so every section states what it teaches before and after. */
export const sectionCopy: { objective: string; learned: string; trap?: string }[] = [
  {
    objective: "Figure out where Meera's journey actually begins — and notice that it isn't a fact hidden in the data, it's a decision you make.",
    learned: "The 'beginning' of Meera's journey moves depending on what question you're trying to answer — there's no single correct starting point waiting to be discovered.",
    trap: "Defaulting to 'the journey starts when she opens the app' — the single most common mistake, because it silently erases everything that actually created the need for a ride.",
  },
  {
    objective: "See how much of a real journey happens completely outside your own product's screens.",
    learned: "Most of Meera's journey — checking the rain, talking to the security guard, waiting under the awning — never touches the app, yet it fully shapes whether the ride succeeds.",
    trap: "Mapping only what happens inside your product's own interface, which quietly deletes every real-world step that actually determines the outcome.",
  },
  {
    objective: "Learn why three teams looking at the exact same story can — and should — draw different boundaries around 'the journey.'",
    learned: "Scope is chosen to serve a specific team's decision. The same lived experience supports several valid journeys, not one universal one.",
    trap: "Assuming there's a single 'correct' journey map for a product, then arguing about whose boundaries are right instead of asking what each map needs to inform.",
  },
  {
    objective: "Practice turning a vague situation into a sharp, specific framing sentence — the actual first move of any journey-mapping effort.",
    learned: "A strong framing sentence names a specific actor, an outcome-based goal, real constraints, deliberate boundaries, and a clear learning objective — never the product itself.",
    trap: "Writing a framing sentence around the product ('understand how people use the app') — it sounds like framing, but it explains nothing about the person.",
  },
  {
    objective: "Learn to separate what a product does from the underlying 'job' a person is actually hiring it to do.",
    learned: "Meera isn't hiring the app for 'a ride' — she's hiring it to reach her terminal with enough time and confidence despite an uncertain morning.",
    trap: "Restating the product ('users want a ride') and mistaking that for a Jobs-to-Be-Done insight — it explains nothing about why she needs it.",
  },
  {
    objective: "See how the same case looks completely different through five real mapping tools, from an intimate personal journey to an org-wide blueprint.",
    learned: "A user journey, user flow, funnel, lifecycle, and service blueprint are not five words for the same thing — each is a real, named tool that answers a different question.",
    trap: "Reaching for 'let's make a journey map' by default, when a funnel or service blueprint would actually answer the question being asked.",
  },
  {
    objective: "Name the thinking traps that quietly distort a journey before any research even starts.",
    learned: "All four traps share one root cause: letting the product's shape, or the company's internal process, substitute for the person's real, lived experience.",
  },
  {
    objective: "Test whether you can apply everything so far to spot assumptions and evidence gaps inside Meera's story.",
    learned: "Separating what the story actually states from what you quietly assumed is a core journey-mapping skill — not a minor detail to clean up later.",
    trap: "Treating a plausible inference ('she's probably anxious') as if it were confirmed evidence — this is exactly how unverified assumptions sneak into a 'current-state' map.",
  },
  {
    objective: "Prove you can frame a brand-new situation on your own — not just recognize the right answer inside Meera's story.",
    learned: "The same weak-vs-strong pattern — product-centered versus outcome-centered — shows up in completely unrelated situations, from Netflix to splitting a dinner bill.",
    trap: "Assuming this framing skill only applies to 'journey mapping exercises' — it's a general habit for any product conversation, not a one-off classroom trick.",
  },
  {
    objective: "Pull everything from this module into one Journey Frame you could actually bring into an interview or a real project kickoff.",
    learned: "A Journey Frame — actor, goal, scenario, scope, and objective — is the artifact that should exist before any research or mapping begins, and you just built one from scratch.",
  },
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
  source?: string;
}

export const cameraLenses: CameraLens[] = [
  {
    id: "journey",
    name: "User journey",
    question: "“A scenario-based sequence of the steps that a user takes in order to accomplish a high-level goal with a company or product, usually across channels and over time.”",
    contains: "Stages, actions, thoughts, emotions, needs, touchpoints, channels, pain points, context.",
    example: "Meera getting from home to her airport terminal.",
    source: "Nielsen Norman Group, “User Journeys vs. User Flows”",
  },
  {
    id: "flow",
    name: "User flow",
    question: "“A set of interactions that describe the typical or ideal set of steps needed to accomplish a common task performed with a product.”",
    contains: "Screens, actions, decisions, system responses, alternate paths.",
    example: "Selecting pickup and destination, choosing a ride type, and confirming the booking.",
    source: "Nielsen Norman Group, “User Journeys vs. User Flows”",
  },
  {
    id: "funnel",
    name: "Funnel",
    question: "A quantitative representation of where people progress or drop out across measurable, event-defined steps.",
    contains: "Population counts, conversion rates, stages defined by events.",
    example: "Search initiated → ride option viewed → booking requested → ride completed.",
  },
  {
    id: "lifecycle",
    name: "Lifecycle",
    question: "The evolution of a person's relationship with a product or company over time.",
    contains: "Acquisition, activation, engagement, retention, expansion, churn, or reactivation.",
    example: "First ride through becoming a recurring commuter.",
  },
  {
    id: "blueprint",
    name: "Service blueprint",
    question: "“A visualization of the relationships between different service components — people, props (physical or digital evidence), and processes — that are directly tied to touchpoints in a specific customer journey.”",
    contains: "Customer actions, visible service, backstage activity, support processes, dependencies.",
    example: "Dispatch logic, driver incentives, mapping systems, airport queues, customer support, and payment settlement behind Meera's ride.",
    source: "Nielsen Norman Group, “UX Mapping Methods Compared”",
  },
];

export const jtbdQuote =
  "“When people find themselves needing to get a job done, they essentially hire products to do that job for them.” — Clayton Christensen, Harvard Business School";

export const jtbdExample = "People don't buy a drill because they want a drill — they buy it because they need a hole in the wall. The drill is hired to do a job.";

export const jtbdChoice = {
  weak: "Meera hires a ride-hailing app to get her a ride.",
  strong: "Meera hires a ride-hailing app to get her to the correct terminal with enough time and confidence, even when the morning is uncertain.",
  note: "The weak version restates the product. The strong version names the actual “job” Meera is hiring it to do — exactly what Jobs to Be Done asks you to find.",
};

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
