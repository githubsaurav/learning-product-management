export const rahulIntro = "Rahul buys headphones on Amazon or Flipkart. One ear stops working after nine days. The app approves a return in under two minutes. The product team celebrates a high return-flow completion rate.";

export const rahulJourney = [
  "He cannot find the original box.",
  "The instructions disagree about whether packaging is required.",
  "Pickup is scheduled during his workday.",
  "The courier calls while Rahul is presenting in a meeting.",
  "The pickup is marked “customer unavailable.”",
  "Rahul contacts support and repeats the situation.",
  "A second pickup succeeds.",
  "Refund timing remains unclear.",
  "Rahul postpones buying replacement headphones.",
  "The refund arrives, but his confidence in the category is lower.",
];

export const successBoundaries = [
  { position: 15, label: "Request accepted" },
  { position: 50, label: "Item collected" },
  { position: 88, label: "Money back, feels able to move on" },
];

export const successBoundaryLesson = "A journey often exposes success definitions that are locally convenient but incomplete from the user's perspective.";

export const analysisLenses = [
  {
    id: "expectation",
    title: "1. Expectation gaps",
    ask: "Where was the expectation created, and where was it violated?",
    inCase: ["“Easy returns” suggests that approval equals simplicity.", "Packaging guidance is ambiguous.", "Pickup and refund timing are not reliably understood."],
  },
  {
    id: "effort",
    title: "2. Unnecessary effort",
    ask: "Where must the user repeat, translate, remember, coordinate, or compensate for the service?",
    inCase: ["Rahul repeats the history to support.", "He works around a pickup window that ignores his availability.", "He monitors refund status because the system does not carry confidence forward."],
  },
  {
    id: "emotion",
    title: "3. Emotional low points",
    ask: "Where do uncertainty, loss of control, anxiety, or frustration accumulate?",
    inCase: ["The deepest emotional point may not be the longest step — the failed pickup signals the process can reset through no fault of the user."],
  },
  {
    id: "transitions",
    title: "4. Channel transitions",
    ask: "Where does the journey move between app, email, phone, physical space, another device, or another person?",
    inCase: ["Transitions frequently lose context.", "Rahul's digital approval does not ensure the courier understands the situation."],
  },
  {
    id: "time",
    title: "5. Time and waiting",
    ask: "Distinguish active time, calendar time, and uncertain time.",
    inCase: ["Active effort: minutes Rahul spends taking action.", "Calendar time: days between failure and refund.", "Uncertain time: periods when Rahul does not know what will happen next."],
  },
  {
    id: "workarounds",
    title: "6. Workarounds and compensating behavior",
    ask: "What unmet need does this workaround reveal?",
    inCase: ["Keeping screenshots.", "Calling the courier directly.", "Postponing a replacement purchase.", "Remaining home during a vague pickup window."],
  },
  {
    id: "truth",
    title: "7. Moments of truth",
    ask: "If this moment goes badly, what happens downstream?",
    inCase: ["Discovering the defect.", "Receiving approval.", "Experiencing the failed pickup.", "Seeing the refund completed."],
  },
];

export const rootCauseExample = {
  problem: "Rahul misses the courier call.",
  ladder: [
    "The pickup window was broad.",
    "The process required real-time coordination.",
    "Courier context and customer availability were not synchronized.",
    "The operation optimized route flexibility while transferring uncertainty to the customer.",
    "Success was measured at request approval and operational completion, not dependable customer recovery.",
  ],
};

export const opportunityForms = [
  { level: "Weak: feature request", text: "Add live courier tracking for returns.", note: "This commits to a solution before establishing the opportunity." },
  { level: "Better: generic problem", text: "Return pickups are inconvenient.", note: "True but insufficiently specific." },
  {
    level: "Strong: contextual opportunity",
    text: "Working customers need a dependable way to coordinate item handoff because broad pickup windows and lost context make a single missed call restart the recovery journey.",
    note: "Optional “How might we” form: How might we preserve coordination and context when a working customer cannot respond at the exact moment a return courier calls?",
  },
];

export const prioritizationDimensions = [
  { key: "impact", label: "User impact", description: "How severely does this affect progress, trust, effort, or access?" },
  { key: "frequency", label: "Frequency", description: "How often does the situation occur for the chosen actor?" },
  { key: "leverage", label: "Journey leverage", description: "Does improving this moment affect later stages or adjacent behaviors?" },
  { key: "strategic", label: "Strategic relevance", description: "Does it support the product's promise and business model?" },
  { key: "confidence", label: "Evidence confidence", description: "How confident are we that the problem and proposed causal chain are real?" },
];

export const candidateOpportunities = [
  { id: "coord", text: "Working customers need a dependable way to coordinate item handoff during pickup.", reach: "High — affects nearly every pickup, not just failed ones." },
  { id: "packaging", text: "Customers need clear, item-specific guidance on whether original packaging is required.", reach: "Medium — affects returns where the box was discarded." },
  { id: "refund", text: "Customers need visibility into when a refund will actually land.", reach: "Medium — affects the waiting period after any return." },
  { id: "discovery", text: "Customers need an easier way to discover a defect before the return window closes.", reach: "Lower — a real but less frequent moment in this journey." },
];

export const priorityRationale =
  "Pickup coordination affects the widest share of returns, sits at a moment of truth (a failed pickup restarts the whole recovery), and connects to nearly every downstream frustration in Rahul's story — the other three are real, but narrower or later in the journey.";

export const interventionCategories = [
  {
    key: "remove",
    label: "Remove",
    detail: "Eliminate a step, ambiguity, or dependency.",
    options: [
      { id: "strong", text: "Do not require synchronous calls for standard handoffs.", strongest: true, note: "Removes the exact dependency that caused the failed pickup." },
      { id: "weak", text: "Remove the return-approval screen entirely.", note: "This removes a step that wasn't actually the problem — approval already took two minutes." },
    ],
  },
  {
    key: "enable",
    label: "Enable",
    detail: "Give the user greater control or capability.",
    options: [
      { id: "strong", text: "Let users declare short unavailable periods.", strongest: true, note: "Gives Rahul a way to prevent the exact failure that happened to him." },
      { id: "weak", text: "Let users pick the courier company.", note: "Doesn't address the coordination problem — any courier could still call at a bad time." },
    ],
  },
  {
    key: "inform",
    label: "Inform",
    detail: "Set accurate expectations at the right moment.",
    options: [
      { id: "strong", text: "Explain packaging requirements using the actual item category.", strongest: true, note: "Directly resolves the “instructions disagree” friction Rahul hit." },
      { id: "weak", text: "Send a generic “thank you for your return” email.", note: "Friendly, but doesn't resolve any specific uncertainty Rahul had." },
    ],
  },
  {
    key: "coordinate",
    label: "Coordinate",
    detail: "Preserve context across people or channels.",
    options: [
      { id: "strong", text: "Carry return instructions and customer notes to the courier.", strongest: true, note: "Prevents Rahul from repeating his situation to support." },
      { id: "weak", text: "Ask the customer to call the courier directly.", note: "This pushes the coordination burden back onto Rahul instead of removing it." },
    ],
  },
  {
    key: "recover",
    label: "Recover",
    detail: "Make failure easier to repair.",
    options: [
      { id: "strong", text: "Reschedule a failed attempt without making the user contact support.", strongest: true, note: "Directly shortens the exact recovery path Rahul was forced through." },
      { id: "weak", text: "Offer a discount coupon after a failed pickup.", note: "Doesn't fix the underlying coordination problem — just softens the frustration." },
    ],
  },
];

export const secondOrderQuestions = [
  "Does increased customer control reduce route efficiency?",
  "Could tighter windows create more failed promises?",
  "Might extra status notifications increase anxiety?",
  "Does collecting availability introduce privacy or accessibility concerns?",
];

export const metricLevels = [
  { level: "User outcome", question: "What becomes materially better in the person's life or progress?", example: "Regain money and purchase confidence with minimal coordination burden." },
  {
    level: "Behavioral indicator",
    question: "What observable behavior suggests that outcome is improving?",
    example: "Successful first pickup attempt; fewer support contacts per return; lower time spent in uncertain status; shorter time to replacement purchase; reduced abandonment of a return after approval.",
  },
  { level: "Business outcome", question: "What organizational result may follow?", example: "Lower support and reverse-logistics cost; preserved repurchase rate; improved category trust; reduced refund-related escalation." },
];

/** Shuffled metric candidates for the three-column sort — correctColumn indexes metricLevels above. */
export const metricSortItems = [
  { text: "Fewer support contacts per return", correctColumn: 1 },
  { text: "Regain money and purchase confidence with minimal coordination burden", correctColumn: 0 },
  { text: "Lower support and reverse-logistics cost", correctColumn: 2 },
  { text: "Successful first pickup attempt", correctColumn: 1 },
  { text: "Improved category trust", correctColumn: 2 },
  { text: "Feel that the return process respected his time", correctColumn: 0 },
];

export const activationTeaching = {
  weak: "“Account created” records entry, not value.",
  better: "A new listener reaching a personally meaningful listening experience and demonstrating intent to return — for example, saving music or returning for another session. The exact event must be validated against longer-term retention.",
  terms: [
    { term: "Aha moment", def: "The subjective realization of value." },
    { term: "Activation event", def: "A measurable behavior used as a proxy for reaching early value." },
    { term: "Retention", def: "Continued return to the product's value over an appropriate time period." },
  ],
};
