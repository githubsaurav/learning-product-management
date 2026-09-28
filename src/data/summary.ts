export const lessons = [
  {
    title: "Start with the person, not the feature.",
    detail: "Understand what they are trying to achieve and in what situation.",
  },
  {
    title: "Problems and solutions are different.",
    detail: "“Choosing food is difficult” is a problem. Filters or AI recommendations are possible solutions.",
  },
  {
    title: "Look at real alternatives.",
    detail: "Swiggy competes with cooking, leftovers, going out, calling a restaurant, another app, and even skipping the meal.",
  },
  {
    title: "Behaviour is a clue, not the complete answer.",
    detail: "A cancellation or abandoned cart shows what happened; it does not prove why.",
  },
  {
    title: "Use evidence and stay curious.",
    detail: "Ask about real past experiences, identify multiple possible causes, and treat your initial answer as a hypothesis.",
  },
];

export const oneSentence =
  "Product thinking begins by understanding the progress a person wants to make before deciding what to build.";

export const checklist = [
  "Who is the specific user?",
  "What situation are they in?",
  "What are they trying to accomplish?",
  "What is difficult about their current alternatives?",
  "What evidence shows that the difficulty is important?",
];

export const tomorrowTeaser = "Day 2: User segmentation — why “everyone who orders food” is not a useful target user.";

export const sources = [
  {
    label: "Teresa Torres — separating opportunities from solutions",
    url: "https://www.producttalk.org/2016/08/opportunity-solution-tree/",
  },
  {
    label: "Teresa Torres — prioritizing opportunities against a desired outcome",
    url: "https://www.producttalk.org/prioritize-opportunities/",
  },
  {
    label: "Marty Cagan — product discovery and testing product risk",
    url: "https://www.svpg.com/the-origin-of-product-discovery/",
  },
  {
    label: "Clayton Christensen — Jobs to Be Done and the progress customers seek",
    url: "https://hbr.org/podcast/2020/01/revisiting-jobs-to-be-done-with-clayton-christensen",
  },
  {
    label: "Nielsen Norman Group — avoiding leading questions",
    url: "https://www.nngroup.com/articles/leading-questions/",
  },
];

export function scoreMessage(score: number): string {
  if (score >= 9) return "Strong start—you consistently looked beneath features and symptoms.";
  if (score >= 7) return "Good foundation—you are beginning to separate problems from solutions.";
  if (score >= 4) return "You are building the right muscle. Review the explanations once more.";
  return "This is exactly where practice begins. Focus on one principle at a time.";
}
