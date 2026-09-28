export interface GlossaryEntry {
  term: string;
  definition: string;
  example: string;
  contrast?: string;
  ask: string;
}

export const glossary: GlossaryEntry[] = [
  {
    term: "Actor",
    definition: "The person or meaningful group whose experience the map follows.",
    example: "The informal organizer of a four-person trip—not “all Google Maps users.”",
    ask: "Whose goals and constraints organize this story?",
  },
  {
    term: "Scenario",
    definition: "The situation in which the journey occurs, including relevant context and constraints.",
    example: "Ordering dinner alone after arriving home late, with an early meeting the next morning.",
    ask: "What makes this instance different from generic product use?",
  },
  {
    term: "Goal or desired outcome",
    definition: "The progress the person is trying to make, expressed without assuming a particular product.",
    example: "Reach the correct airport terminal with enough time and confidence.",
    contrast: "“Book an Uber” is an action or solution path.",
    ask: "What progress does the person want, independent of any product?",
  },
  {
    term: "Stage",
    definition: "A meaningful phase of the journey, usually organized around a user subgoal.",
    example: "“Build enough confidence to book.”",
    contrast: "“Conversion” is often a company-defined funnel stage.",
    ask: "Where does the person's subgoal actually change?",
  },
  {
    term: "Touchpoint",
    definition: "A specific interaction with a person, product, message, place, or artifact.",
    example: "Receiving directions from an Airbnb host.",
    ask: "What single interaction are we describing?",
  },
  {
    term: "Channel",
    definition: "The medium through which a touchpoint occurs.",
    example: "In-app messaging, email, phone, physical signage, or face-to-face conversation.",
    ask: "What medium carried this interaction?",
  },
  {
    term: "Pain point",
    definition: "A moment of friction, uncertainty, risk, delay, exclusion, or unnecessary effort that hinders progress.",
    example: "A pain point should include its context and consequence, not merely an adjective.",
    ask: "What was the consequence, not just the annoyance?",
  },
  {
    term: "Need",
    definition: "A condition or type of progress required for the person to move forward successfully.",
    example: "Understand whether a weekend property is realistically reachable without a car.",
    contrast: "“Need a transport filter” is already a solution.",
    ask: "What progress is required here, stated without a feature word?",
  },
  {
    term: "Job to be Done",
    definition: "The progress a person seeks in a particular circumstance, including functional, emotional, and social dimensions.",
    example: "Use it to move beyond product categories and understand alternatives.",
    ask: "What is this person really hiring a product to do?",
  },
  {
    term: "Moment of truth",
    definition: "A moment that disproportionately changes trust, confidence, satisfaction, or future behavior.",
    example: "Discovering the defect, or the failed pickup call.",
    ask: "If this moment goes badly, what happens downstream?",
  },
  {
    term: "Workaround",
    definition: "An improvised behavior or tool a person uses because the existing experience does not support the goal adequately.",
    example: "Creating a spreadsheet to compare cars found across several sites.",
    ask: "What is this workaround telling us about an unmet need?",
  },
  {
    term: "Current-state map",
    definition: "An evidence-based representation of how the journey happens now.",
    example: "Built from interviews, analytics, and observation — not imagination.",
    ask: "Is every claim here traceable to evidence?",
  },
  {
    term: "Future-state map",
    definition: "A representation of a deliberately improved or desired experience.",
    example: "Kept distinct from current-state evidence.",
    ask: "Are we clearly labeling this as aspiration, not fact?",
  },
  {
    term: "Hypothesis map",
    definition: "A provisional map based on stakeholder knowledge or incomplete evidence. Useful for exposing assumptions and planning research when it is clearly labeled.",
    example: "A first draft before any interviews have happened.",
    ask: "What would this map need to become true?",
  },
  {
    term: "Experience map",
    definition: "A broader view of human behavior and experience that may not center one organization or product.",
    example: "How people generally handle a stressful life event, across many products.",
    ask: "Does this need to center our product at all?",
  },
  {
    term: "Service blueprint",
    definition: "A view connecting customer actions and touchpoints with frontstage service, backstage processes, people, policies, and systems.",
    example: "Dispatch logic, driver incentives, and payment settlement behind a ride.",
    ask: "What backstage process makes this frontstage moment possible?",
  },
  {
    term: "User flow",
    definition: "A detailed sequence of interactions required to perform a task inside a product.",
    example: "Selecting pickup and destination, choosing a ride type, confirming the booking.",
    ask: "What screens and decisions happen inside the product itself?",
  },
  {
    term: "Funnel",
    definition: "A quantitative representation of how a population moves or drops off through defined events.",
    example: "Search initiated → ride option viewed → booking requested → ride completed.",
    ask: "Where, numerically, does the population shrink?",
  },
  {
    term: "Lifecycle",
    definition: "The evolution of a person's relationship with a product or company, commonly including acquisition, activation, engagement, retention, and churn.",
    example: "First ride through becoming a recurring commuter.",
    ask: "How is this relationship changing over months, not minutes?",
  },
  {
    term: "Aha moment",
    definition: "The user's subjective realization that a product can provide meaningful value.",
    example: "The moment a new user feels the product “click.”",
    ask: "What did the person feel, not just do?",
  },
  {
    term: "Activation event",
    definition: "A measurable behavior used as a practical proxy for the user's early experience of value. It should predict a valuable longer-term outcome and be actionable by the team.",
    example: "Saving a song and returning for a second listening session.",
    ask: "Does this event actually predict retention, or just registration?",
  },
  {
    term: "Leading indicator",
    definition: "A behavior or condition expected to predict a later outcome.",
    example: "Completing a meaningful first project may predict later retention.",
    ask: "What early signal should move before the outcome does?",
  },
  {
    term: "Lagging indicator",
    definition: "A later result that confirms whether value or business performance occurred.",
    example: "Ninety-day retention.",
    ask: "What confirms, after the fact, that this worked?",
  },
  {
    term: "Assumption",
    definition: "A belief treated as provisionally useful but not yet supported by sufficient evidence.",
    example: "“Users will trust a stranger's home” before any research confirms it.",
    ask: "What would we need to see to stop assuming this?",
  },
  {
    term: "Insight",
    definition: "A supported explanation that changes how the team understands a behavior, need, or decision and has implications for action.",
    example: "An interesting quote is not automatically an insight.",
    ask: "What would we now do differently because of this?",
  },
  {
    term: "Opportunity",
    definition: "A meaningful possibility to improve user progress or outcomes. It should be framed independently enough to permit several solutions.",
    example: "“Working customers need a dependable way to coordinate item handoff.”",
    ask: "Does this open a design space, or does it name one feature?",
  },
];
