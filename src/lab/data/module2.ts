export const arjunIntro = "Arjun returns home at 10:10 p.m. after a long day. He opens Swiggy. Twenty-two minutes later, he closes it without ordering and eats cereal.";

export const arjunDashboard = ["14 restaurant impressions", "6 menu opens", "3 cart additions", "2 cart removals", "one coupon attempt", "no completed order"];

export interface EvidenceSource {
  id: string;
  label: string;
  title: string;
  body: string;
  establishes: string[];
  doesNotEstablish: string[];
}

export const evidenceSources: EvidenceSource[] = [
  {
    id: "A",
    label: "Source A",
    title: "Session replay excerpt",
    body: "Arjun repeatedly changes the “delivery under 30 minutes” filter. He opens three restaurant pages, scrolls quickly, and returns to the list.",
    establishes: ["Observed interaction behavior", "Repeated attention to delivery time", "Rapid comparison"],
    doesNotEstablish: ["Why delivery time matters tonight", "Whether price, trust, fatigue, or diet also matters", "Why he eventually ate cereal"],
  },
  {
    id: "B",
    label: "Source B",
    title: "Checkout artifact",
    body: "The last cart contains a ₹219 meal. Taxes, delivery, and a small-order fee bring the total to ₹318. A coupon code fails because the restaurant is excluded.",
    establishes: ["The visible price changed", "The coupon failed", "The final basket was substantially more expensive than the item price"],
    doesNotEstablish: ["That price caused abandonment", "Whether Arjun understood the exclusion", "What amount Arjun considered acceptable"],
  },
  {
    id: "C",
    label: "Source C",
    title: "Interview clip",
    body: "“I had an early call the next morning. Every option either looked heavy or was going to take too long. By the time I found something simple, the extra fees made it feel silly. I wasn't even that hungry anymore.”",
    establishes: ["Arjun reports several interacting considerations", "His motivation changed during the journey", "The abandoned order did not have one isolated cause"],
    doesNotEstablish: ["The exact sequence of his thoughts", "Whether the same pattern occurs for other users", "Which intervention would change future behavior"],
  },
  {
    id: "D",
    label: "Source D",
    title: "Kitchen photograph",
    body: "A box of cereal is visible on the counter beside a banana and milk.",
    establishes: ["A low-effort alternative was available"],
    doesNotEstablish: ["That Arjun had planned to eat it", "That cereal is the primary competitor to delivery in general"],
  },
  {
    id: "E",
    label: "Source E",
    title: "Aggregate analytics",
    body: "Late-night sessions have a higher menu-browsing time and lower conversion rate than dinner-hour sessions. The difference is larger for users ordering for one person.",
    establishes: ["A broader behavioral pattern worth investigating", "Useful segments and contexts for further research"],
    doesNotEstablish: ["User motivation", "Causality", "The reason for Arjun's individual decision"],
  },
  {
    id: "F",
    label: "Source F",
    title: "Support conversation",
    body: "A different user complains: “The delivery estimate changed from 25 minutes to 48 minutes after payment.”",
    establishes: ["Expectation failure exists elsewhere in the broader experience"],
    doesNotEstablish: ["Relevance to Arjun's abandoned cart", "Prevalence", "Whether estimate reliability or duration is the main problem"],
  },
];

export const boardColumns = ["What happened", "What the person said", "What we think it might mean", "What remains unknown"];

export const boardItems = [
  { id: "b1", text: "Repeatedly changed the delivery-time filter", correctColumn: 0 },
  { id: "b2", text: "Total rose from ₹219 to ₹318", correctColumn: 0 },
  { id: "b3", text: "“I wasn't even that hungry anymore”", correctColumn: 1 },
  { id: "b4", text: "“The extra fees made it feel silly”", correctColumn: 1 },
  { id: "b5", text: "Arjun was too tired to compare choices carefully", correctColumn: 2 },
  { id: "b6", text: "Price was the single deciding factor", correctColumn: 2 },
  { id: "b7", text: "Whether the same pattern holds for other solo late-night diners", correctColumn: 3 },
  { id: "b8", text: "Whether Arjun noticed the coupon exclusion before or after trying it", correctColumn: 3 },
];

export const behaviorLayers = [
  { layer: "Event", example: "Arjun removed an item from the cart", confidence: "Directly logged" },
  { layer: "Pattern", example: "Solo late-night sessions convert less often", confidence: "Supported by aggregate data" },
  { layer: "Explanation", example: "Arjun was too tired to compare choices", confidence: "Interpretation requiring support" },
  { layer: "Need", example: "Decide on a light, timely meal without prolonged effort", confidence: "Synthesized from evidence" },
  { layer: "Solution", example: "Add a “quick and light” collection", confidence: "Product hypothesis, not a finding" },
];

export const interviewMoves = [
  {
    title: "1. Anchor in a recent, specific event",
    use: "Tell me about the last time you wanted dinner late but did not order anything.",
    avoid: "Do you normally find food-delivery apps confusing?",
  },
  {
    title: "2. Move chronologically",
    use: "What happened just before you opened the app? What did you do next?",
    avoid: null,
    note: "This reduces abstract opinions and helps recover context.",
  },
  {
    title: "3. Ask for concrete evidence",
    use: "You said the options felt wrong. What was wrong about the first one you considered?",
    avoid: "Accepting adjectives such as “bad,” “hard,” or “expensive” without examples.",
  },
  {
    title: "4. Explore alternatives and tradeoffs",
    use: "What else could you have done for dinner? Why did cereal eventually win?",
    avoid: null,
    note: "The true competitive set is defined by the user's goal, not the company's category.",
  },
  {
    title: "5. Separate past behavior from future politeness",
    use: null,
    avoid: "“I would definitely use that” is weak evidence.",
    note: "Give more weight to past actions, current workarounds, repeated effort, and meaningful consequences.",
  },
];

export const questionDimensions = ["context", "trigger", "action", "decision criterion", "emotion", "alternative", "consequence", "expectation", "workaround"];

export const leadingExample = { leading: "Were the extra fees the reason you left?", open: "What went through your mind when you saw the final total?" };

export const researchWindows = [
  { title: "Interviews", useful: "Stories, meaning, decisions, expectations, and remembered context.", limitation: "Memory is reconstructed; what people say may differ from behavior." },
  { title: "Contextual observation", useful: "Actual behavior, environment, interruptions, tools, and workarounds.", limitation: "Some rare or long journeys are difficult to observe directly." },
  { title: "Diary studies", useful: "When the journey occurs over days or weeks, across channels, or in private moments.", limitation: "Participant effort can create missing or selective entries." },
  { title: "Usability testing", useful: "Detailed flows and interface obstacles inside a product.", limitation: "A controlled task may not capture the broader real-life journey." },
  { title: "Support, sales, and operations evidence", useful: "Recurring breakdowns, objections, exceptional cases, and backstage constraints.", limitation: "Overrepresents people who contact the organization and reflects employee interpretation." },
  { title: "Product analytics", useful: "Frequency, sequence, segmentation, drop-off, time, and scale.", limitation: "Events do not explain motivation automatically; instrumentation reflects what the team chose to record." },
];

export const otherStories = [
  { name: "Sana", story: "She is fasting and needs food after a specific time. Her main concern is reliable arrival, not maximum speed." },
  { name: "Dev", story: "He is studying with friends. The group repeatedly changes the cart because different people reject choices and the price per person is unclear." },
  { name: "Kavya", story: "She wants a familiar meal after a difficult day. She gives up because her usual restaurant is closed and the alternatives feel risky." },
];

export const synthesisRules = [
  "Combine journeys when their goal, stages, and important needs are genuinely similar.",
  "Preserve separate branches when different contexts change the structure or decision criteria.",
  "Never manufacture a smooth “average journey” that none of the participants actually experienced.",
];

export const firstExplanationOptions = [
  "He didn't trust the delivery time estimate",
  "The prices were too high",
  "He wasn't hungry enough to bother",
  "The app was too slow or confusing to use",
  "Nothing in particular looked appealing that night",
];

export interface FollowUpQuestion {
  id: string;
  text: string;
  dimension: string;
  leading: boolean;
  note: string;
}

export const followUpQuestions: FollowUpQuestion[] = [
  {
    id: "q1",
    text: "Were the extra fees the reason you left?",
    dimension: "consequence",
    leading: true,
    note: "Leading — it hands Arjun an answer to agree with instead of letting him surprise you.",
  },
  {
    id: "q2",
    text: "What went through your mind when you saw the final total?",
    dimension: "decision criterion",
    leading: false,
    note: "Open — invites Arjun to describe his own reasoning, whatever it turns out to be.",
  },
  {
    id: "q3",
    text: "What else could you have done for dinner instead?",
    dimension: "alternative",
    leading: false,
    note: "Open — surfaces the real competitive set, including cereal, without naming it.",
  },
  {
    id: "q4",
    text: "Do you usually find delivery apps too slow?",
    dimension: "expectation",
    leading: true,
    note: "Leading — assumes a general complaint rather than asking about this specific night.",
  },
  {
    id: "q5",
    text: "What happened right before you opened the app?",
    dimension: "trigger",
    leading: false,
    note: "Open — recovers context chronologically instead of asking for an opinion.",
  },
  {
    id: "q6",
    text: "Would faster delivery have changed your decision?",
    dimension: "expectation",
    leading: true,
    note: "Leading — asks Arjun to predict a hypothetical, which people are generally poor at.",
  },
];

export const synthesisPairs = [
  {
    name: "Sana",
    story: otherStories[0].story,
    note: "Sana's timing constraint (a hard cutoff) and Arjun's tiredness are different decision drivers — keep as a separate branch even though both are “late-night.”",
  },
  {
    name: "Dev",
    story: otherStories[1].story,
    note: "Dev's problem is group coordination, structurally different from Arjun's solo decision fatigue — a genuinely separate branch, not a variation.",
  },
  {
    name: "Kavya",
    story: otherStories[2].story,
    note: "Kavya and Arjun both hit “options feel effortful/risky” at a similar stage — close enough in goal and structure that their journeys could reasonably combine.",
  },
];

export const nngProcessSteps = [
  { name: "Aspiration and Allies", detail: "Building a cross-disciplinary team and defining the scope of the mapping initiative.", doneIn: "Module 1 — you set the actor, goal, and scope." },
  { name: "Internal Investigation", detail: "Gathering existing customer data and research that exists throughout the organization.", doneIn: "This module — the evidence room (Sources A–F)." },
  { name: "Assumption Formulation", detail: "Formulating a hypothesis of the current-state journey and planning further research.", doneIn: "This module — your first explanation, before seeing any evidence." },
  { name: "External Research", detail: "Collecting new user data to validate or invalidate the hypothesis.", doneIn: "This module — the questions you'd ask, and your research plan." },
  { name: "Narrative Visualization", detail: "Combining insights and research into a visual narrative of the journey.", doneIn: "Module 3 — the map you build next." },
];

export const researchPlanQuestions = [
  {
    question: "The decision the team needs to make",
    options: [
      { id: "a", text: "Whether Arjun personally should get a discount", note: "Too narrow — one person's cart isn't a team decision." },
      { id: "b", text: "Whether to invest in reducing late-night cart abandonment", note: "Names a decision the evidence can actually inform.", strongest: true },
      { id: "c", text: "Whether the app's colors should change", note: "Unrelated to anything the evidence points to." },
    ],
  },
  {
    question: "The primary actor and context",
    options: [
      { id: "a", text: "All Swiggy users, generally", note: "Too broad to design research around." },
      { id: "b", text: "Solo diners ordering late at night after a long day", note: "Matches exactly what the evidence and pattern (Source E) point to.", strongest: true },
      { id: "c", text: "Large groups ordering for an office lunch", note: "A different, unrelated context (closer to Dev's situation)." },
    ],
  },
  {
    question: "What is already known",
    options: [
      { id: "a", text: "Arjun definitely abandoned due to price", note: "This treats an unconfirmed hypothesis as known fact." },
      { id: "b", text: "Late-night solo sessions convert less often, and Arjun's session shows several interacting frictions", note: "This is what the evidence actually supports so far.", strongest: true },
      { id: "c", text: "Nothing — we should start from zero", note: "Ignores the real evidence already collected (Sources A–F)." },
    ],
  },
  {
    question: "The riskiest assumptions",
    options: [
      { id: "a", text: "That every late-night session ends like Arjun's", note: "A real risk — one story was never meant to represent everyone.", strongest: true },
      { id: "b", text: "That Swiggy's logo is the right shade of orange", note: "Not a decision-relevant assumption." },
      { id: "c", text: "That delivery riders own their vehicles", note: "Irrelevant to this decision." },
    ],
  },
  {
    question: "Whom to recruit",
    options: [
      { id: "a", text: "Only customers who completed a late-night order successfully", note: "A classic trap — this overrepresents people the product already works for." },
      { id: "b", text: "A mix including people who abandoned a late-night cart, like Arjun", note: "Captures the behavior actually in question, not just the success cases.", strongest: true },
      { id: "c", text: "Only the internal product team's own opinions", note: "Internal enthusiasm isn't evidence of customer need." },
    ],
  },
  {
    question: "What behaviors or events to investigate",
    options: [
      { id: "a", text: "Only whether the app crashed", note: "Too narrow — nothing suggests a technical failure here." },
      { id: "b", text: "Filter changes, cart edits, coupon attempts, and the final abandon moment", note: "Matches the actual signals already visible in Arjun's session.", strongest: true },
      { id: "c", text: "How many total employees work at Swiggy", note: "Unrelated to the customer journey." },
    ],
  },
  {
    question: "Which methods complement one another",
    options: [
      { id: "a", text: "Interviews only", note: "Explains motivation but can't show how common the pattern is." },
      { id: "b", text: "Interviews plus analytics plus support transcripts", note: "Each window covers a different blind spot of the others.", strongest: true },
      { id: "c", text: "Only reading competitor app reviews", note: "Tells you about a different product, not this journey." },
    ],
  },
  {
    question: "What would count as disconfirming evidence",
    options: [
      { id: "a", text: "Nothing — the hypothesis feels obviously true", note: "Treating a hypothesis as unfalsifiable is a warning sign, not a plan." },
      { id: "b", text: "Several interviewees citing a cause unrelated to price, delivery time, or fatigue", note: "A concrete signal that would force the team to revise its thinking.", strongest: true },
      { id: "c", text: "A single five-star app store review", note: "Irrelevant to whether the abandonment hypothesis holds." },
    ],
  },
];
