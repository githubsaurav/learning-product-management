import type { StoryQuestion } from "@/story/types";

export const scene2Question: StoryQuestion = {
  prompt: "What should Aarav conclude first?",
  options: [
    {
      key: "A",
      text: "The order button is probably too difficult to notice.",
      correct: false,
      feedback:
        "Possible, but not proven. The button is visible in the interface, but nothing yet shows that customers are failing to notice it.",
    },
    {
      key: "B",
      text: "The final price is probably higher than customers expect.",
      correct: false,
      feedback: "Possible, but not proven. Price could matter, but the chart contains no information about what customers saw or expected.",
    },
    {
      key: "C",
      text: "Delivery estimates are probably too long for most customers.",
      correct: false,
      feedback:
        "Possible, but not proven. Delivery time is another reasonable hypothesis, but it cannot yet explain every abandoned cart.",
    },
    {
      key: "D",
      text: "There is not enough evidence to know the cause yet.",
      correct: true,
      feedback: "Best conclusion. The chart shows where customers leave. It does not reveal why they leave.",
    },
  ],
};

export const scene2ResponseOther =
  "Aarav writes down your idea. Maya circles one word: probably. “Good hypothesis,” she says. “Now let’s see whether the customers agree.”";
export const scene2ResponseD = "Maya nods. “Exactly. We have an observation, not an explanation. Let’s investigate.”";

export const riya = {
  lines: [
    { label: "Rice bowl", amount: "₹240" },
    { label: "Packaging", amount: "₹25" },
    { label: "Delivery", amount: "₹42" },
    { label: "Platform fee and taxes", amount: "₹30" },
  ],
  total: "₹337",
  afterText: "Riya looks at the total, closes the app, and makes instant noodles.",
  question: {
    prompt: "What is the strongest problem hypothesis for Riya?",
    options: [
      {
        key: "A",
        text: "The restaurant offered too few rice-bowl variations.",
        correct: false,
        feedback: "Weak fit. Riya already selected a meal, so menu variety does not best explain the moment when she left.",
      },
      {
        key: "B",
        text: "The total price exceeded what she expected to spend.",
        correct: true,
        feedback: "Strongest fit. Her behaviour changed immediately after the total increased from ₹240 to ₹337.",
      },
      {
        key: "C",
        text: "The checkout button did not look visually attractive.",
        correct: false,
        feedback: "Weak fit. She reached checkout and examined the total, which suggests that she could see and understand the action available.",
      },
      {
        key: "D",
        text: "The delivery map did not show the rider's location.",
        correct: false,
        feedback: "Wrong stage. Rider tracking becomes relevant after an order is placed; Riya never completed one.",
      },
    ],
  } satisfies StoryQuestion,
  qualification:
    "This is still a hypothesis. To increase confidence, Aarav should ask Riya about the experience and examine similar sessions.",
};

export const kabir = {
  classCard: "Class begins in 40 minutes",
  deliveryCard: "Estimated delivery: 55 minutes",
  afterText: "Kabir leaves the cart and buys a sandwich from the campus shop.",
  question: {
    prompt: "What did Swiggy compete against in this situation?",
    options: [
      {
        key: "A",
        text: "Only another food-delivery application on Kabir's phone.",
        correct: false,
        feedback: "Too narrow. A direct competitor is only one possible alternative available to Kabir.",
      },
      {
        key: "B",
        text: "Only restaurants offering burgers near Kabir's college.",
        correct: false,
        feedback: "Too narrow. Nearby restaurants matter, but the campus shop and food already available also compete for the same need.",
      },
      {
        key: "C",
        text: "Any practical way to eat before his class begins.",
        correct: true,
        feedback: "Best answer. Kabir needed to eat within his available time, and the campus sandwich completed that job better.",
      },
      {
        key: "D",
        text: "Every mobile application Kabir might use during lunch.",
        correct: false,
        feedback: "Too broad. An alternative matters only if it helps Kabir make progress on the same meal-related need.",
      },
    ],
  } satisfies StoryQuestion,
};

export const sneha = {
  messages: [
    "Arjun: Anything is fine—just no mushrooms.",
    "Nisha: Can we keep it under ₹250 each?",
    "Dev: I need a high-protein option.",
    "Arjun: Actually, make mine vegan today.",
    "Nisha: Who is paying? I'll transfer later.",
  ],
  afterText: "Sneha removes two items, adds three others, checks the group chat again, and finally says, “Let's just go to the cafeteria.”",
  question: {
    prompt: "Which statement best describes Sneha's difficulty?",
    options: [
      {
        key: "A",
        text: "She needed a more colourful menu to explore restaurants.",
        correct: false,
        feedback: "Weak fit. Visual exploration would not resolve the conflicting requirements expressed in the group chat.",
      },
      {
        key: "B",
        text: "She needed faster delivery for the food she selected.",
        correct: false,
        feedback: "Wrong problem. Sneha abandoned the process before completing an order, so delivery speed was not yet the central difficulty.",
      },
      {
        key: "C",
        text: "She needed additional discounts on every available meal.",
        correct: false,
        feedback:
          "Incomplete fit. One colleague mentioned a budget, but discounts alone would not solve dietary preferences and payment coordination.",
      },
      {
        key: "D",
        text: "She struggled to coordinate preferences, budgets, and payment.",
        correct: true,
        feedback: "Strongest fit. The repeated messages, cart changes, and payment question indicate a group-coordination problem.",
      },
    ],
  } satisfies StoryQuestion,
};

export const matching = {
  customers: ["Riya", "Kabir", "Sneha"] as const,
  problems: ["Unexpected cost", "Timing mismatch", "Group coordination"],
  correctMap: {
    Riya: "Unexpected cost",
    Kabir: "Timing mismatch",
    Sneha: "Group coordination",
  } as Record<string, string>,
  hint: "Think back to what stopped each customer at the very last moment.",
};

export const scene7Question: StoryQuestion = {
  prompt: "What should Aarav recommend now?",
  options: [
    {
      key: "A",
      text: "Redesign the checkout button for every customer immediately.",
      correct: false,
      feedback: "Premature solution. The investigation found no evidence that button visibility caused these three customers to leave.",
    },
    {
      key: "B",
      text: "Reduce delivery time for every order across the platform.",
      correct: false,
      feedback: "Overgeneralized solution. Delivery time mattered to Kabir but did not explain Riya's or Sneha's behaviour.",
    },
    {
      key: "C",
      text: "Investigate and size the causes before choosing a solution.",
      correct: true,
      feedback: "Best next step. Aarav should determine how common and important each cause is, validate it with more evidence, and then explore solutions.",
    },
    {
      key: "D",
      text: "Give every customer a discount before they reach checkout.",
      correct: false,
      feedback: "Overgeneralized solution. Cost mattered to Riya but discounts would not directly resolve timing or coordination.",
    },
  ],
};

export const scene8FillIn = {
  prompt: "Data tells us _____ happened. Discovery helps us understand _____ it happened.",
  options: [
    { key: "A" as const, text: "what / why", correct: true },
    { key: "B" as const, text: "why / what", correct: false },
  ],
};

export const finalLearningCard = {
  headline: "A user's behaviour is not automatically the user's problem.",
  body: "Cart abandonment describes what happened. It does not explain why it happened.",
  sequence: [
    "Observe the behaviour.",
    "Generate several possible explanations.",
    "Collect customer and product evidence.",
    "Identify which causes are important.",
    "Only then explore solutions.",
  ],
  oneSentence: "Never turn an observation directly into a feature.",
  reflectionPrompt: "The mistake Aarav nearly made was...",
  reflectionExample:
    "Aarav nearly treated cart abandonment as proof of a checkout-button problem and jumped directly to a solution.",
};

export const clues = [
  "Clue 1: A chart shows behaviour, not motivation.",
  "Clue 2: Riya may have encountered unexpected cost.",
  "Clue 3: Kabir may have encountered a timing mismatch.",
  "Clue 4: Sneha may have encountered coordination difficulty.",
  "Clue 5: The same behaviour can have several underlying causes.",
];

export const nextCaseTeaser = "Next case: A customer asks for a discount. Is the real problem always price?";
