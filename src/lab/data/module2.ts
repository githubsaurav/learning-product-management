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

export const researchPlanQuestions = [
  "The decision the team needs to make",
  "The primary actor and context",
  "What is already known",
  "The riskiest assumptions",
  "Whom to recruit",
  "What behaviors or events to investigate",
  "Which methods complement one another",
  "What would count as disconfirming evidence",
];
