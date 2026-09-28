export const airbnbIntro =
  "Nisha and Kabir want a quiet weekend away from Mumbai. They eventually stay at an Airbnb in Alibaug. The booking takes place on Thursday, but their experience begins earlier and continues after checkout.";

export const fragments = [
  { id: "f1", text: "A Wednesday WhatsApp message: “Can we get out of the city this weekend?”" },
  { id: "f2", text: "A calendar screenshot showing a Saturday commitment until noon." },
  { id: "f3", text: "A search for “quiet stays near Mumbai without car.”" },
  { id: "f4", text: "An Airbnb list with saved properties." },
  { id: "f5", text: "A host profile and cancellation-policy comparison." },
  { id: "f6", text: "A message asking whether the ferry still runs during rain." },
  { id: "f7", text: "A payment failure followed by a successful retry." },
  { id: "f8", text: "A Friday message from the host containing directions." },
  { id: "f9", text: "Confusion at the ferry terminal about the final local connection." },
  { id: "f10", text: "Arrival at a property that looks slightly different from the photographs." },
  { id: "f11", text: "A pleasant evening after the host recommends a nearby café." },
  { id: "f12", text: "A review prompt received while they are rushing home." },
];

export const stageModel = [
  { name: "Imagine the escape", subgoal: "Decide what kind of break would feel worthwhile." },
  { name: "Find viable options", subgoal: "Reconcile preferences, time, transport, and price." },
  { name: "Build enough confidence to book", subgoal: "Reduce uncertainty about host, property, cancellation, and travel." },
  { name: "Prepare to arrive", subgoal: "Coordinate directions, transport, timing, and expectations." },
  { name: "Experience the stay", subgoal: "Settle in, use the space, and respond to surprises." },
  { name: "Close and remember", subgoal: "Leave, review, resolve issues, and form a lasting impression." },
];

export const funnelWhyNot =
  "“Awareness, consideration, purchase, retention” is less useful here: those labels reflect a company-centric commercial funnel and hide what the travelers are actually trying to accomplish.";

export const layerTeachings = [
  {
    key: "A",
    title: "Actions — what does the actor do?",
    examples: ["Negotiates dates", "Searches across Airbnb, Google, Instagram, and maps", "Compares cancellation terms", "Messages a host", "Coordinates ferry and local transport", "Checks the property against expectations", "Decides whether and when to leave a review"],
  },
  {
    key: "B",
    title: "Thoughts and questions — what is the actor trying to understand or decide?",
    examples: ["“Can we reach this without exhausting ourselves?”", "“Are the photos recent?”", "“What happens if the weather changes?”", "“Will the host actually respond if we get stuck?”"],
    note: "Do not invent internal thoughts unless supported. Mark reconstructed thoughts as reported or inferred.",
  },
  {
    key: "C",
    title: "Emotional state — arise from evidence, not decoration",
    examples: ["Anticipation", "Overload", "Cautious confidence", "Anxiety", "Relief", "Delight", "Mild disappointment"],
    note: "Avoid using a smooth smiley-face curve that suggests more precision than the research supports.",
  },
  {
    key: "D",
    title: "Needs — progress or condition required, not a feature request",
    examples: ["Establish that the weekend is feasible", "Compare options without losing important differences", "Reduce the consequences of uncertainty", "Maintain continuity when moving from digital planning to physical travel", "Recover quickly when reality differs from expectation"],
  },
  {
    key: "E",
    title: "Touchpoints and channels",
    examples: ["Touchpoint: message from the host containing directions.", "Channel: Airbnb messaging.", "Other channels: WhatsApp, a browser, the Airbnb app, email, phone, ferry signage, face-to-face contact, maps."],
  },
  {
    key: "F",
    title: "Evidence and confidence — every claim links back to something",
    examples: ["A quotation", "Observation", "Event data", "Artifact", "Support record", "Assumption requiring research"],
  },
  {
    key: "G",
    title: "Friction and positive value — record both",
    examples: ["Friction: uncertainty, delay, unnecessary effort, exclusion, risk, broken expectation.", "Positive: reassurance, momentum, delight, competence, trust, unexpectedly helpful moments."],
    note: "Journey work should not assume every step is broken.",
  },
];

export const referenceMap = {
  stages: stageModel.map((s) => s.name),
  rows: [
    { row: "User goal", values: ["Agree on a worthwhile break", "Find options that fit real constraints", "Make a safe commitment", "Reach the property smoothly", "Enjoy the promised experience", "Leave cleanly and preserve the memory"] },
    { row: "Actions", values: ["Discuss mood, dates, budget", "Search, save, compare, check transport", "Read reviews, inspect policy, contact host, pay", "Read directions, pack, coordinate ferry", "Check in, use property, ask host for help", "Check out, travel home, consider review"] },
    { row: "Questions", values: ["“What kind of weekend do we need?”", "“Which places are actually reachable?”", "“Can we trust this enough to book?”", "“How do we get from the ferry to the house?”", "“Is this difference acceptable?”", "“Is reviewing worth doing right now?”"] },
    { row: "Emotion", values: ["Hopeful", "Interested, then overloaded", "Cautious, briefly frustrated, relieved", "Anxious during handoff", "Mild disappointment, then delight", "Tired and reflective"] },
    { row: "Needs", values: ["Shared intent", "Comparable options and realistic logistics", "Risk reduction and responsiveness", "Continuity across channels", "Expectation recovery and local support", "Low-effort closure"] },
    { row: "Touchpoints", values: ["WhatsApp, calendar", "Airbnb, Google, Instagram, maps", "Listing, reviews, host chat, payment", "Host message, email, ferry signage, phone", "Property, host, café", "Checkout instruction, review notification"] },
    { row: "Friction", values: ["Different definitions of “quiet”", "Transport details fragmented across products", "Payment retry and uncertainty about weather", "Instructions assume local knowledge", "Photos created a slightly different expectation", "Review request arrives at a poor moment"] },
    { row: "Positive moments", values: ["Shared anticipation", "A saved list makes joint comparison possible", "Host's quick response creates confidence", "A driver recognizes the property name", "Host recommendation changes the emotional direction", "Photos help preserve the experience"] },
    { row: "Evidence confidence", values: ["Reported", "Observed and reported", "Logged, reported", "Reported with artifacts", "Reported and photographed", "Logged and reported"] },
  ],
};

export const futureStateGoal =
  "After booking, travelers should understand the remaining uncertainties, know what they must decide next, and carry verified arrival information into the channels they will use during travel.";

export const futureInterventions = [
  "A transport-readiness summary",
  "Host-provided structured arrival information",
  "Offline directions",
  "A weather-sensitive check-in reminder",
  "A handoff to local transport options",
];

export const mapVisualRules = [
  "Make the actor, goal, scenario, and scope visible at the top.",
  "Use stages as columns and experience layers as rows.",
  "Keep stage names user-centered and verb-oriented.",
  "Show evidence status and uncertainty.",
  "Prefer legibility over decorative polish.",
  "Use color consistently and never as the only signal.",
  "Create a detailed working map and a simpler communication view.",
  "Link opportunities to the evidence and moments that produced them.",
  "Date the map and give it an owner or revision cadence.",
  "Treat the map as a living model, not wall art.",
];
