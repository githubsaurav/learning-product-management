export const framingSprints = [
  {
    prompt: "Improve YouTube for people learning a practical skill.",
    weak: "YouTube viewers want better search results.",
    strong: "A learner mid-project wants to find the exact step they're stuck on without rewatching a 40-minute video.",
  },
  {
    prompt: "Improve WhatsApp for families coordinating healthcare.",
    weak: "Families want a shared chat for health topics.",
    strong: "An adult child coordinating a parent's care wants everyone to see the same up-to-date medication and appointment info without repeating updates in five separate chats.",
  },
  {
    prompt: "Improve Spotify for people returning after a long break.",
    weak: "Returning users want better recommendations.",
    strong: "Someone who hasn't opened the app in a year wants to feel like it still knows them, without rebuilding their taste from zero.",
  },
  {
    prompt: "Improve Zepto or Blinkit for weekly grocery planning.",
    weak: "Shoppers want a faster cart.",
    strong: "A person planning a full week of meals wants confidence nothing essential is missing before checking out once.",
  },
  {
    prompt: "Improve LinkedIn for someone considering a career change.",
    weak: "Users want better job recommendations.",
    strong: "Someone quietly exploring a career change wants to test the waters without signaling to their current employer that they're looking.",
  },
];

export const teardownFlows = ["A food-delivery checkout flow", "A ride-hailing booking flow", "An e-commerce return flow", "A fitness app onboarding flow", "A banking KYC flow"];

export const teardownQuestions = [
  {
    question: "What happened before this screen?",
    options: [
      { id: "a", text: "Nothing — this is where the journey starts.", note: "The classic trap: the need almost always exists before the product interaction." },
      { id: "b", text: "Some trigger or decision the product never directly captured.", note: "More accurate — the product usually enters mid-story.", strongest: true },
    ],
  },
  {
    question: "What will the person do after the product says “success”?",
    options: [
      { id: "a", text: "Nothing — the task is complete, the journey is over.", note: "Success screens often aren't the end of the person's actual goal." },
      { id: "b", text: "Something in the physical world the product can't see — waiting, using, explaining to someone else.", note: "This is usually where the real value or risk shows up.", strongest: true },
    ],
  },
  {
    question: "What other people or channels participate?",
    options: [
      { id: "a", text: "None — it's a single person using a single screen.", note: "Most journeys involve someone else eventually — support, a courier, a family member." },
      { id: "b", text: "Likely someone else — support, a delivery person, a bank, a co-traveler.", note: "Worth naming explicitly, even speculatively.", strongest: true },
    ],
  },
  {
    question: "What anxiety or commitment exists at this point?",
    options: [
      { id: "a", text: "None — it's just a neutral interaction.", note: "Money, time, or trust is usually on the line somewhere nearby." },
      { id: "b", text: "Some real stake — money committed, time invested, or trust extended.", note: "Naming this changes what “good” looks like here.", strongest: true },
    ],
  },
  {
    question: "What user outcome is this flow meant to advance?",
    options: [
      { id: "a", text: "Completing this specific flow.", note: "This just restates the flow itself, not an outcome beyond it." },
      { id: "b", text: "Some larger progress this flow is just one step toward.", note: "This is the outcome that should actually define success.", strongest: true },
    ],
  },
];

export const reconstructionCases = [
  "Users save Netflix titles but do not watch them",
  "Duolingo learners return for three days and then disappear",
  "People abandon a digital bank KYC process",
  "Diners repeatedly change restaurant bookings",
  "Commuters view several routes but ignore the recommended one",
];

export const reconstructionColumns = ["Observed", "Reported", "Inferred", "Assumed"];

export const reconstructionItems = [
  { text: "A user's saved-but-unwatched count keeps growing", correctColumn: 0 },
  { text: "“I'll get to it eventually”", correctColumn: 1 },
  { text: "They save things faster than they can realistically watch", correctColumn: 0 },
  { text: "They're probably saving out of guilt or FOMO, not real intent", correctColumn: 2 },
  { text: "Everyone who does this will eventually churn", correctColumn: 3 },
  { text: "“It's like a to-do list I never open”", correctColumn: 1 },
];

export const opportunityClinicPainPoints = [
  {
    text: "A returning shopper has to re-enter their address every time.",
    forms: [
      { label: "Observed event", text: "The shopper types the same address into a blank field on every visit." },
      { label: "Contextual problem", text: "Returning shoppers repeat work the product already has the information to skip." },
      { label: "Underlying need", text: "Move from browsing to checkout without re-proving who and where they are." },
      { label: "Opportunity statement", text: "Returning shoppers need checkout to recognize them, because repeated re-entry taxes exactly the moment they're most ready to buy." },
    ],
  },
  {
    text: "A commuter keeps getting rerouted mid-trip with no explanation.",
    forms: [
      { label: "Observed event", text: "The app's suggested route changes twice during a single 20-minute trip." },
      { label: "Contextual problem", text: "Route changes arrive without any reason, so the commuter can't judge whether to trust them." },
      { label: "Underlying need", text: "Stay confident in the plan even when the plan changes." },
      { label: "Opportunity statement", text: "Commuters need to understand why a route changed, because an unexplained change erodes trust faster than the delay itself." },
    ],
  },
  {
    text: "A new user abandons signup after being asked for too much information upfront.",
    forms: [
      { label: "Observed event", text: "Most drop-off happens on the third form field, before any value has been shown." },
      { label: "Contextual problem", text: "The product asks for commitment before demonstrating why it's worth it." },
      { label: "Underlying need", text: "See a reason to continue before investing more effort." },
      { label: "Opportunity statement", text: "New users need to experience value before being asked for detailed information, because asking too early loses people who would have converted later." },
    ],
  },
];

export const interviewRehearsalPrompts = [
  {
    prompt: "Improve Amazon for people buying gifts.",
    outline: ["Actor: someone buying for a person whose taste they're unsure of", "Goal: give a gift that lands well without guessing blind", "Risk: over-indexing on “add gift wrap” as the whole solution"],
  },
  {
    prompt: "Design a better airport experience for first-time flyers.",
    outline: ["Actor: a first-time flyer anxious about missing a step", "Goal: move through the airport without a costly mistake", "Risk: assuming everyone already knows airport norms"],
  },
  {
    prompt: "Improve Instagram for local event discovery.",
    outline: ["Actor: someone new to a city looking for something to do tonight", "Goal: find a real, attend-able event, not just aesthetic content", "Risk: treating this as a feed-ranking problem instead of a discovery problem"],
  },
  {
    prompt: "Design a product for neighbors sharing household tools.",
    outline: ["Actor: someone who needs a tool for one weekend project", "Goal: borrow with enough trust to feel safe lending back", "Risk: jumping straight to “build an app” before the trust problem is solved"],
  },
  {
    prompt: "Improve a food-delivery experience for group orders at work.",
    outline: ["Actor: the one coordinator collecting everyone's order", "Goal: get one clean order out without chasing ten people", "Risk: designing only for the coordinator and ignoring the contributors"],
  },
];
