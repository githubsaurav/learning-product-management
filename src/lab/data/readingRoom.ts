import type { ReadingLink } from "@/lab/components/ReadingList";

export interface ReadingGroup {
  title: string;
  links: ReadingLink[];
}

export const readingRoom: ReadingGroup[] = [
  {
    title: "Understand the basics",
    links: [
      { label: "Journey Mapping 101 — Nielsen Norman Group", url: "https://www.nngroup.com/articles/journey-mapping-101/" },
      { label: "User Journeys vs. User Flows — Nielsen Norman Group", url: "https://www.nngroup.com/articles/user-journeys-vs-user-flows/" },
      { label: "When and How to Create Customer Journey Maps — Nielsen Norman Group", url: "https://www.nngroup.com/articles/customer-journey-mapping/" },
      { label: "UX Mapping Methods Compared — Nielsen Norman Group", url: "https://www.nngroup.com/articles/ux-mapping-cheat-sheet/" },
    ],
  },
  {
    title: "Research real journeys",
    links: [
      { label: "How to Conduct Research for Customer Journey Mapping — Nielsen Norman Group", url: "https://www.nngroup.com/articles/research-journey-mapping/" },
      { label: "How Practitioners Create Journey Maps — Nielsen Norman Group", url: "https://www.nngroup.com/articles/journey-mapping-how/" },
      { label: "Getting Started with Journey Mapping: 27 Tips from Practitioners — Nielsen Norman Group", url: "https://www.nngroup.com/articles/journey-mapping-tips/" },
      { label: "Identify Your Bullseye Customer in One Day — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/finding-your-bullseye-customer-michael-margolis" },
      { label: "Teresa Torres on Customer Interviews and Continuous Discovery — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/teresa-torres-on-how-to-interview" },
    ],
  },
  {
    title: "Build and use maps",
    links: [
      { label: "The 5 Steps of Successful Customer Journey Mapping — Nielsen Norman Group", url: "https://www.nngroup.com/articles/customer-journey-mapping-process/" },
      { label: "Creating an Experience Map — GOV.UK Service Manual", url: "https://www.gov.uk/service-manual/user-research/creating-an-experience-map" },
      { label: "Journey Map — Service Design Tools", url: "https://servicedesigntools.org/tools/journey-map" },
      { label: "Mapping Experiences — Jim Kalbach", url: "https://www.oreilly.com/library/view/mapping-experiences/9781491923528/" },
    ],
  },
  {
    title: "Analyze and make decisions",
    links: [
      { label: "7 Ways to Analyze a Customer-Journey Map — Nielsen Norman Group", url: "https://www.nngroup.com/articles/analyze-customer-journey-map/" },
      { label: "What You Can and Should Be Doing with Your Customer Journeys — Harvard Business Review", url: "https://hbr.org/2016/03/what-you-can-and-should-be-doing-with-your-customer-journeys" },
      { label: "Service Blueprinting: Top Questions Answered — Nielsen Norman Group", url: "https://www.nngroup.com/articles/service-blueprinting-faq/" },
    ],
  },
  {
    title: "Connect journeys to product growth",
    links: [
      { label: "How to Develop Product Sense — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/product-sense" },
      { label: "What Is a Good Activation Rate? — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate" },
      { label: "How to Determine Your Activation Metric — Lenny's Newsletter (subscriber-only)", url: "https://www.lennysnewsletter.com/p/how-to-determine-your-activation" },
      { label: "How to Increase Your Retention — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/how-to-increase-your-retention-issue" },
      { label: "Where Great Product Roadmap Ideas Come From — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/where-great-product-roadmap-ideas" },
      { label: "Outcome-Based Onboarding for Users vs. Customers — Reforge", url: "https://www.reforge.com/blog/brief-outcome-based-onboarding-for-users-vs-customers" },
      { label: "A Content-First Approach to Product Onboarding — Intercom", url: "https://www.intercom.com/blog/content-first-approach-to-onboarding/" },
      { label: "How to Retain More Users with Value-Based Onboarding — Intercom", url: "https://www.intercom.com/blog/retain-users-with-value-based-onboarding/" },
      { label: "The Elements of User Onboarding — Samuel Hulick", url: "https://www.useronboard.com/The-Elements-of-User-Onboarding-Intro.pdf" },
    ],
  },
  {
    title: "Prepare for interviews",
    links: [
      { label: "The Definitive Guide to Mastering Product Sense Interviews — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering" },
      { label: "How to Develop Product Sense — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/product-sense" },
    ],
  },
];

export const module1Reading: ReadingLink[] = [
  { label: "Journey Mapping 101 — Sarah Gibbons, Nielsen Norman Group", url: "https://www.nngroup.com/articles/journey-mapping-101/" },
  { label: "User Journeys vs. User Flows — Kate Kaplan, Nielsen Norman Group", url: "https://www.nngroup.com/articles/user-journeys-vs-user-flows/" },
  { label: "UX Mapping Methods Compared — Sarah Gibbons, Nielsen Norman Group", url: "https://www.nngroup.com/articles/ux-mapping-cheat-sheet/" },
  { label: "Sorting Out Customer Journey Maps, Experience Maps and Service Blueprints — Jim Kalbach", url: "https://experiencinginformation.com/2016/03/12/sorting-things-out-customer-journey-maps-experience-maps-and-service-blueprints/" },
];

export const module2Reading: ReadingLink[] = [
  { label: "How to Conduct Research for Customer Journey Mapping — Kate Kaplan, Nielsen Norman Group", url: "https://www.nngroup.com/articles/research-journey-mapping/" },
  { label: "How Practitioners Create Journey Maps — Kate Kaplan, Nielsen Norman Group", url: "https://www.nngroup.com/articles/journey-mapping-how/" },
  { label: "Identify Your Bullseye Customer in One Day — Michael Margolis on Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/finding-your-bullseye-customer-michael-margolis" },
  { label: "Teresa Torres on Customer Interviews and Continuous Discovery — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/teresa-torres-on-how-to-interview" },
  { label: "The Role of User Research in a Continuous Discovery World — Teresa Torres", url: "https://www.producttalk.org/user-research-and-continuous-discovery/" },
];

export const module3Reading: ReadingLink[] = [
  { label: "When and How to Create Customer Journey Maps — Kate Kaplan, Nielsen Norman Group", url: "https://www.nngroup.com/articles/customer-journey-mapping/" },
  { label: "The 5 Steps of Successful Customer Journey Mapping — Kate Kaplan, Nielsen Norman Group", url: "https://www.nngroup.com/articles/customer-journey-mapping-process/" },
  { label: "Creating an Experience Map — GOV.UK Service Manual", url: "https://www.gov.uk/service-manual/user-research/creating-an-experience-map" },
  { label: "Journey Map — Service Design Tools", url: "https://servicedesigntools.org/tools/journey-map" },
  { label: "Mapping Experiences — Jim Kalbach", url: "https://www.oreilly.com/library/view/mapping-experiences/9781491923528/" },
];

export const module4Reading: ReadingLink[] = [
  { label: "7 Ways to Analyze a Customer-Journey Map — Kim Flaherty, Nielsen Norman Group", url: "https://www.nngroup.com/articles/analyze-customer-journey-map/" },
  { label: "What You Can and Should Be Doing with Your Customer Journeys — Adam Richardson, Harvard Business Review", url: "https://hbr.org/2016/03/what-you-can-and-should-be-doing-with-your-customer-journeys" },
  { label: "What Is a Good Activation Rate? — Lenny Rachitsky and Yuriy Timen", url: "https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate" },
  { label: "How to Determine Your Activation Metric — Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/how-to-determine-your-activation" },
  { label: "How to Increase Your Retention — Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/how-to-increase-your-retention-issue" },
];

export const module5Reading: ReadingLink[] = [
  { label: "How to Develop Product Sense — Jules Walter, Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/product-sense" },
  { label: "The Definitive Guide to Mastering Product Sense Interviews — Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/the-definitive-guide-to-mastering" },
  { label: "Where Great Product Roadmap Ideas Come From — Lenny Rachitsky", url: "https://www.lennysnewsletter.com/p/where-great-product-roadmap-ideas" },
  { label: "A Content-First Approach to Product Onboarding — Jonathon Colman, Intercom", url: "https://www.intercom.com/blog/content-first-approach-to-onboarding/" },
  { label: "Scott Belsky on the First Mile of a Product — Intercom", url: "https://www.intercom.com/blog/podcasts/scott-belsky-behance-benchmark/" },
];
