import type { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: 1,
    title: "Find the underlying job",
    prompt:
      "A busy professional opens Swiggy after reaching home late. What is the most fundamental problem Swiggy may be solving for this person?",
    options: [
      {
        key: "A",
        text: "They need cooking lessons for preparing dinner after work.",
        correct: false,
        feedback:
          "Incorrect. The person may know how to cook but lack the time or energy to do it. Do not assume a lack of ability when the situation only shows a need for convenience.",
      },
      {
        key: "B",
        text: "They need a low-effort, reliable meal after a tiring day.",
        correct: true,
        feedback:
          "Correct. This describes the outcome the person wants while leaving room for different solutions. It connects the user's situation with the progress they want to make.",
      },
      {
        key: "C",
        text: "They need a larger selection of nearby restaurant menus.",
        correct: false,
        feedback: "Incorrect. Browsing is an activity inside the product, not the fundamental reason the person came to it.",
      },
      {
        key: "D",
        text: "They need to monitor a rider's location during delivery.",
        correct: false,
        feedback:
          "Incorrect. Tracking is a feature that may reduce uncertainty after ordering. It is not the original meal-related problem.",
      },
    ],
    concept: "The product is not the job. Ask what the person is trying to accomplish in that situation.",
    thinkingHabit: "Ask: “If this app disappeared, what outcome would the person still need?”",
    conceptTag: "Customer job",
  },
  {
    id: 2,
    title: "Separate a problem from a solution",
    prompt: "Which statement describes a customer problem rather than a possible solution?",
    options: [
      {
        key: "A",
        text: "Users need a button for repeating their previous food order.",
        correct: false,
        feedback: "Incorrect. A button is a product solution. First understand why repeating an order is difficult or valuable.",
      },
      {
        key: "B",
        text: "Users need personalized filters for sorting the available meals.",
        correct: false,
        feedback: "Incorrect. Filters are one possible response to the selection problem, not the problem itself.",
      },
      {
        key: "C",
        text: "Users need an AI assistant that recommends suitable dishes.",
        correct: false,
        feedback: "Incorrect. This prescribes a technology before establishing the customer difficulty.",
      },
      {
        key: "D",
        text: "Users struggle to select a suitable meal without wasting time.",
        correct: true,
        feedback: "Correct. This describes a difficulty that could be addressed in several different ways.",
      },
    ],
    concept: "A problem describes a difficulty, need, or desired outcome. A solution describes what you might build.",
    thinkingHabit:
      "Ask: “Can I imagine at least three different ways to address this?” If yes, it is more likely to be a problem than a disguised solution.",
    conceptTag: "Problem vs. solution",
  },
  {
    id: 3,
    title: "Make the problem specific",
    prompt: "Which is the strongest problem statement?",
    options: [
      {
        key: "A",
        text: "Office workers need reliable lunch timing to avoid disrupting their work.",
        correct: true,
        feedback:
          "Correct. It identifies the user, context, need, and consequence. It is still a hypothesis that should be validated with evidence.",
      },
      {
        key: "B",
        text: "Food-delivery customers need a smoother and more convenient experience.",
        correct: false,
        feedback: "Incorrect. It is too broad. It does not identify a specific situation, difficulty, or consequence.",
      },
      {
        key: "C",
        text: "Swiggy should deliver every restaurant order within twenty minutes.",
        correct: false,
        feedback: "Incorrect. This jumps to a specific solution target without explaining whose problem matters and why.",
      },
      {
        key: "D",
        text: "Customers prefer simple apps that make ordering food feel convenient.",
        correct: false,
        feedback: "Incorrect. This is a general preference and does not identify a problem that a team can investigate.",
      },
    ],
    concept: "A useful problem hypothesis includes the user, context, difficulty, and consequence.",
    thinkingHabit: "Complete: “When ___, this user struggles to ___, which causes ___.”",
    conceptTag: "Problem framing",
  },
  {
    id: 4,
    title: "Look beneath feature requests",
    prompt: "A customer says, “Swiggy should give me more discounts.” What should a product manager investigate first?",
    options: [
      {
        key: "A",
        text: "Which discount format would look most attractive in the app?",
        correct: false,
        feedback: "Incorrect. This assumes a discount is the right response before understanding the need.",
      },
      {
        key: "B",
        text: "How quickly could the team release another coupon feature?",
        correct: false,
        feedback:
          "Incorrect. Delivery speed and feasibility matter later. First determine whether the proposed feature addresses the actual problem.",
      },
      {
        key: "C",
        text: "Is the underlying concern affordability, unclear fees, or perceived value?",
        correct: true,
        feedback: "Correct. The request may point to several different problems, and each could require a different response.",
      },
      {
        key: "D",
        text: "Which competing app currently provides the largest food discounts?",
        correct: false,
        feedback: "Incorrect. Competitor information can provide context, but it does not reveal why this customer is asking for a discount.",
      },
    ],
    concept: "Customers are valuable sources of problems, but their feature requests are not automatically the right solutions.",
    thinkingHabit: "When a customer asks for a feature, ask: “What would this help you accomplish?”",
    conceptTag: "Feature requests",
  },
  {
    id: 5,
    title: "Understand the real alternatives",
    prompt: "A student uses Swiggy for a late-night meal. Which set of alternatives is most useful to study?",
    options: [
      {
        key: "A",
        text: "Cooking, snacks, restaurant calls, friends, another app, or skipping food.",
        correct: true,
        feedback: "Correct. These are different ways the student might try to make progress in the same situation.",
      },
      {
        key: "B",
        text: "Only other food-delivery applications available in the same city.",
        correct: false,
        feedback: "Incorrect. Direct competitors matter, but they are not the student's only ways to handle hunger.",
      },
      {
        key: "C",
        text: "Every mobile application the student regularly uses at night.",
        correct: false,
        feedback: "Incorrect. The category is too broad. Focus on alternatives that address the same underlying need.",
      },
      {
        key: "D",
        text: "Only nearby restaurants offering expensive late-night food menus.",
        correct: false,
        feedback: "Incorrect. This describes one group of providers, not the complete set of behaviours available to the student.",
      },
    ],
    concept: "A product competes with every realistic way the customer can address the same need—including doing nothing.",
    thinkingHabit: "Ask: “What did people do before this product existed?”",
    conceptTag: "Alternatives",
  },
  {
    id: 6,
    title: "Treat causes as hypotheses",
    prompt:
      "Many customers add food to their cart but leave immediately after seeing the final amount. What is the best initial problem hypothesis?",
    options: [
      {
        key: "A",
        text: "The checkout button may be too difficult for customers to notice.",
        correct: false,
        feedback: "Incorrect. Nothing in the observation indicates that button visibility caused the abandonment.",
      },
      {
        key: "B",
        text: "Customers may dislike the overall Swiggy brand and experience.",
        correct: false,
        feedback: "Incorrect. This is a broad conclusion that the available evidence cannot support.",
      },
      {
        key: "C",
        text: "The available restaurant selection may be too limited for customers.",
        correct: false,
        feedback:
          "Incorrect. The customers already chose items and reached the cart, so restaurant selection is not the strongest explanation for this particular behaviour.",
      },
      {
        key: "D",
        text: "The final price may be higher or less clear than expected.",
        correct: true,
        feedback: "Correct. The timing makes this a reasonable hypothesis to investigate, but it is not yet a proven cause.",
      },
    ],
    concept: "Data shows what happened. It does not automatically explain why it happened.",
    thinkingHabit: "Use the words “may”, “might”, or “we hypothesize” until the cause has been investigated.",
    conceptTag: "Hypothesis vs. fact",
  },
  {
    id: 7,
    title: "Look for evidence of importance",
    prompt: "Which observation gives the strongest evidence that a customer problem matters?",
    options: [
      {
        key: "A",
        text: "A customer says the proposed feature sounds useful and exciting.",
        correct: false,
        feedback: "Incorrect. Hypothetical enthusiasm is weak evidence of real need or future behaviour.",
      },
      {
        key: "B",
        text: "Customers repeatedly spend time or money working around the issue.",
        correct: true,
        feedback:
          "Correct. Repetition and costly workarounds indicate that customers are motivated to make progress, although they do not yet prove that a particular solution will succeed.",
      },
      {
        key: "C",
        text: "A close competitor recently released a feature for the issue.",
        correct: false,
        feedback: "Incorrect. The competitor may be wrong, serving a different customer, or pursuing a different strategy.",
      },
      {
        key: "D",
        text: "The internal product team considers the issue interesting to solve.",
        correct: false,
        feedback: "Incorrect. Internal enthusiasm is not evidence of customer importance.",
      },
    ],
    concept: "What customers repeatedly do is usually a stronger signal than what they hypothetically say they would do.",
    thinkingHabit: "Ask about the last real occurrence and the workaround used—not whether someone likes your idea.",
    conceptTag: "Evidence quality",
  },
  {
    id: 8,
    title: "Prioritize problems in context",
    prompt: "Which problem should generally be the strongest candidate for further investigation?",
    options: [
      {
        key: "A",
        text: "A rare issue causing mild frustration for a few customers.",
        correct: false,
        feedback: "Incorrect. Low frequency and low severity normally limit its potential impact.",
      },
      {
        key: "B",
        text: "An issue proposed by a senior leader during a planning meeting.",
        correct: false,
        feedback: "Incorrect. Seniority does not replace customer or business evidence.",
      },
      {
        key: "C",
        text: "A frequent issue preventing many customers from completing their orders.",
        correct: true,
        feedback:
          "Correct. It has high reach, frequency, and potential impact. Before prioritizing it fully, also check strategic alignment, evidence confidence, effort, risk, and effect on the desired business outcome.",
      },
      {
        key: "D",
        text: "An issue that could be solved with impressive new technology.",
        correct: false,
        feedback: "Incorrect. Technical novelty does not establish customer importance.",
      },
    ],
    concept: "Problem priority is a judgment based on customer importance and expected outcome—not volume of opinions or excitement about a solution.",
    thinkingHabit: "Consider: “How many people? How often? How painful? What outcome could change? How confident are we?”",
    conceptTag: "Problem prioritization",
  },
  {
    id: 9,
    title: "Do not confuse a symptom with its cause",
    prompt: "A customer cancels an order after placing it. What should you conclude?",
    options: [
      {
        key: "A",
        text: "Cancellation is observed, but its underlying cause remains unknown.",
        correct: true,
        feedback:
          "Correct. The cause could involve delivery time, price, an ordering mistake, a change of plans, restaurant availability, or something else.",
      },
      {
        key: "B",
        text: "The restaurant delayed the order beyond the promised delivery time.",
        correct: false,
        feedback: "Incorrect. That is one possible cause, but the cancellation alone does not prove it.",
      },
      {
        key: "C",
        text: "The customer changed their mind shortly after placing the order.",
        correct: false,
        feedback: "Incorrect. This is another possible explanation presented as certainty.",
      },
      {
        key: "D",
        text: "The cancellation control should be made faster and easier to use.",
        correct: false,
        feedback: "Incorrect. This proposes a feature without knowing why cancellations occur or whether cancellation itself is difficult.",
      },
    ],
    concept: "A symptom tells you what happened. Research and evidence help explain why.",
    thinkingHabit: "Write at least three plausible explanations before choosing which one to investigate first.",
    conceptTag: "Symptom vs. cause",
  },
  {
    id: 10,
    title: "Ask about real behaviour",
    prompt: "Which customer-interview question is most likely to uncover a real meal-related problem?",
    options: [
      {
        key: "A",
        text: "Would an AI assistant make choosing your meals much easier?",
        correct: false,
        feedback: "Incorrect. This asks for a prediction about a predetermined solution. People are poor at predicting future behaviour.",
      },
      {
        key: "B",
        text: "Does Swiggy usually show too many restaurant options to customers?",
        correct: false,
        feedback: "Incorrect. This leading question introduces the researcher's belief and encourages agreement.",
      },
      {
        key: "C",
        text: "Would you prefer faster delivery for your future food orders?",
        correct: false,
        feedback: "Incorrect. Most people will say yes, but the answer reveals little about the importance of the problem or its trade-offs.",
      },
      {
        key: "D",
        text: "Tell me about the last time arranging a meal was difficult.",
        correct: true,
        feedback: "Correct. It invites a specific story about past behaviour and can reveal the context, alternatives, difficulties, and outcome.",
      },
    ],
    concept: "Specific stories about the past are usually more useful than opinions about an imagined future.",
    thinkingHabit: "Begin interviews with: “Tell me about the last time...”",
    conceptTag: "Customer interviewing",
  },
];

export const totalQuestions = questions.length;
