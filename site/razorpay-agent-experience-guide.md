# Inside Razorpay’s agent experience

Reviewed 13 October 2026. Educational research; public claims, demo observations and illustrative proposals are distinct.


# Start here

01 / A simple mental model

## You delegate a job. The software works a case.

A merchant might ask a question once, or configure a specialist to handle future cases. These are two different rhythms of use. Neither requires the merchant to watch the agent think all day.

Conversational interface

### Ask RAY

“Help me understand this payment.”

The conversational Dashboard describes questions about payment, refund and settlement records, downloadable reports and contextual next steps. Its October 2025 post describes early access.

[Conversational Dashboard / RAY ↗](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/)

Recurring operational work

### Configure a specialist

“Handle this kind of problem when it happens.”

Agent Studio is described as an in-dashboard marketplace. The official demo shows Home, My Agents and Connectors tabs, followed by an agent detail page with an install control.

[Merchant controls and operating principles ↗](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) [Official Agent Studio demo ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI)

Banking context

### Manage business finance

“Help me collect dues or prepare a payout.”

RazorpayX has its own agentic banking experience. Its June announcement identifies Cashflow Insights and Payout as beta for Connected Banking+ users. Access to Payments does not establish access to this experience.

[RazorpayX launch ↗](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/)

So, does the merchant go to Agent Studio? For choosing and configuring a specialist, that is the documented direction. A later case can start from a background signal. The merchant returns for approvals, exceptions and results. For a one-off question, a conversation surface may be enough. The public website introduces the product; it is not the operating dashboard.

### Who is the “user”?

### Business owner

Chooses the goal, budget and acceptable risk. In a solo business, this person may do every role below.

### Operations or finance user

Reviews cases, corrects evidence and handles exceptions. A growing company can separate preparer and approver.

### End customer

Receives a call, message or payment link. They usually never enter the merchant’s Agent Studio.

### Agent provider

Builds the specialist’s behavior. Some named agents involve partners, so the platform and every specialist are not necessarily built by one team.

[FTX launch announcement ↗](https://razorpay.com/newsroom/?p=4704)

### What changes during a merchant’s day?

OnceSelect a job→At setupConnect + set boundaries→In the backgroundDetect + prepare + act→When neededReview exceptions→PeriodicallyMeasure + adjust

### Three things often confused with each other

Term | Meaning for this research | Example | 

AI model | The component interpreting text or predicting a value. | Interpret a customer’s reason for not completing checkout. | 

Agent | An application given a job, context, permitted tools and stopping conditions. | Investigate one recovery case, request approval and follow through. | 

Studio / dashboard | The merchant’s interface for asking, configuring, supervising and inspecting. | Choose a specialist or review a proposed customer message. | 

Razorpay says Studio uses Anthropic’s Claude Agent SDK. That supports an agent application; it does not establish that Razorpay trained a separate neural network for every named specialist. The specific models, prompts and orchestration topology remain undisclosed in the material reviewed. [Agent Studio launch ↗](https://razorpay.com/blog/?p=26292) [Anthropic: Agent SDK overview ↗](https://code.claude.com/docs/en/agent-sdk/overview)

### RAY can also be a merchant-facing WhatsApp experience

The September 2026 RAY announcement describes text or voice requests, payment summaries, recovery-link requests, forecasts and an authentication link for sensitive operations. This is a merchant interaction channel. A cart agent calling a shopper is a different conversation, with a different recipient and purpose. The article cites early partners; it does not establish universal account access. [RAY on WhatsApp ↗](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/)

See the actual evidence →


# Actual UI & demo

02 / What the interface evidence actually shows

## There is a demo. Your account shows a narrower surface.

Observed account UI

### Observed in your browser

13 October 2026 · read-only inspection

Your Payments dashboard showed the ordinary product sidebar. Razorpay Home showed “Insight by RAY” labels and a prompt to collect payments for insights. “See detailed insights” returned to the ordinary Payments dashboard.

No Agent Studio or conversational RAY entry was visible in the expanded sidebar, More menu or the search results checked. This does not prove the feature is unavailable everywhere or absent from every route.

No agent was installed, connector granted, message sent or financial action executed. Account balances and customer records are excluded from this guide.

Public demo UI

### Shown in Razorpay’s official demo

The demo depicts an Agent Studio sidebar entry, marketplace cards and an agent detail page. Later frames visualize one cart recovery case through a call and WhatsApp payment handoff.

It is useful evidence of the intended journey. It is an edited demonstration, not an independent test of a production merchant account.

[Official Agent Studio demo ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI)

### Two frames from the official demo

Razorpay demo footage, not your account. Percentage claims visible in the footage are promotional and are not adopted as measured outcomes here.

Marketplace view · [Official video, approximately 0:05 ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=5s)Agent detail view · [Official video, approximately 0:11 ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=11s)

### Watch these moments in the official demo

Each link opens the video at the inspected point. Product labels below refer to the demo; account-specific navigation can differ.

### 0:05 · Discover

Marketplace view: Home, My Agents and Connectors. Agent cards are grouped by business outcomes.

[Watch discovery ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=5s)

### 0:11 · Choose

Abandoned Cart Conversion detail page, beta label and an install control. The demo does not establish the complete consent/setup sequence.

[Watch agent detail ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=11s)

### 0:33 · Start a case

A run visualization begins with an abandonment check. A case is different from an agent installation.

[Watch the trigger ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=33s)

### 0:44 · Act

The visualization shows interpreting the drop-off, preparing a payment link and starting a customer call.

[Watch actions ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=44s)

### 0:55 · Converse

The customer is asked about the obstacle. This is the customer’s experience, separate from the merchant’s controls.

[Watch the conversation ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=55s)

### 1:39 · Hand off

The call outcome and WhatsApp follow-up appear alongside a customer payment-app choice. The demo is not causal evidence of uplift.

[Watch the payment handoff ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI&t=99s)

What I could not verify: a complete live installation, the exact current approval screen, the default permission matrix, whether the run visualization is identical to a merchant-accessible log, or whether your account has a hidden/limited rollout. The guide’s interactive walkthrough therefore uses clearly labelled fictional screens.

### Where the broader platform is going

The FTX announcement describes a plain-language agent builder plus an experience layer for onboarding, payment operations and integration. A builder is a way to define a new job; the marketplace is a way to choose an existing one. Public announcements do not supply a complete builder API or prove that arbitrary custom tools can be published from your account today. [FTX launch announcement ↗](https://razorpay.com/newsroom/?p=4704)

### Agentic payments

Shopper-facing discovery and checkout inside a conversation. The buyer is the actor. Do not confuse this with a merchant configuring back-office specialists.

[FTX launch announcement ↗](https://razorpay.com/newsroom/?p=4704)

### Integration / engineering

Developer assistance for connecting payments or editing software. It is adjacent to this guide’s focus on operating a merchant business.

[FTX launch announcement ↗](https://razorpay.com/newsroom/?p=4704)

Walk through a merchant case →


# Merchant walkthrough

03 / Experience a case step by step

## What I do. What the agent does. What another system does.

Illustrative reconstruction. The people, amounts, controls and sequence below are teaching examples. They are not copied production screens or a claim that each setting exists in Razorpay today. Public capabilities anchoring each example are linked.

Choose a merchant story

← Previous stepNext step →

### Try the approval boundary

This small cart example demonstrates a design principle: a recommendation is useful only when its proposed action is both permitted and still appropriate.

Local simulation · no live actions

### Proposed action: send a cart reminder

Fictional cart C-204 · ₹2,400 · no discount. Select a condition, then inspect the result.

Case conditionCurrent evidence and contact permission are availableCustomer already completed the orderCustomer opted outInventory connection is staleMessage request timed out after submission
Authority in this examplePrepare only; ask me before sendingOne reminder is already authorized
Evaluate this case

#### No action evaluated yet

Nothing here connects to Razorpay or a customer.


## Cart recovery — Priya · online homeware shop

A shopper leaves a ₹2,400 basket. Priya wants to recover worthwhile orders without bothering people who have already paid.

AI fit: A recurring specialist is plausible because each customer can have a different objection. The event filter and price arithmetic should remain deterministic.

Illustrative reconstruction; not verified production UI.


### 1. Choose the job

Merchant: Priya opens the agent’s detail page and considers whether this problem is large enough to justify a trial.

Agent/application: The experience needs to show the job, provider, required systems and commercial terms.

Other system/person: No customer action yet.

Boundary: Decision: is the agent relevant to this store?


### 2. Connect the evidence

Merchant: She chooses the store and contact systems relevant to this job. In this example, product and order reads are allowed; unrestricted store edits are not.

Agent/application: The service should test access and distinguish “connected” from “fresh data available.”

Other system/person: Store supplies basket, item and inventory facts; payments system supplies current payment state.

Boundary: Missing checkout identity means there may be no contactable case.


### 3. Set the boundaries

Merchant: For this example she chooses approval before outreach, one contact attempt, and no discount. These are teaching choices, not verified Razorpay fields.

Agent/application: Save a version of the policy with the agent so the action can be judged against what she approved.

Other system/person: Communication service remains unused until the case passes the checks.

Boundary: A decision to contact someone must be separate from permission to read their cart.


### 4. A case arrives

Merchant: Priya does not click “run” for every basket. She can see a proposed case when the configured waiting period has elapsed.

Agent/application: Join the checkout to the latest paid-order record. Exclude duplicate, fulfilled or expired cases.

Other system/person: An event or scheduled check can supply the initial signal.

Boundary: “No payment yet” is an observation; “price was the problem” is still a hypothesis.


### 5. Prepare a recommendation

Merchant: The proposed card explains the evidence and suggests a neutral follow-up. It does not claim to know why the customer left.

Agent/application: AI can adapt a question and interpret a reply. A separate calculation service verifies amounts.

Other system/person: No message has been sent while the case is awaiting review.

Boundary: The draft should identify the exact recipient, channel, item and expected cost.


### 6. Review and authorize

Merchant: She can edit the wording, exclude the customer, or approve this specific attempt. In the simulation below, the approval applies only to the displayed plan.

Agent/application: Recheck payment state and eligibility immediately before the action. A changed plan needs renewed approval.

Other system/person: A permitted communication tool sends the message or begins the call.

Boundary: An approval screen should reveal what will leave the system.


### 7. Observe the result

Merchant: Priya sees separate states: contact attempted, customer interested, link delivered, payment verified.

Agent/application: Wait for authoritative payment/order results. A friendly reply is not proof of revenue.

Other system/person: The customer decides whether to buy and completes payment in the payment flow.

Boundary: If the link request times out, check for an existing link before recreating it.


### 8. Measure and adjust

Merchant: She compares a small trial with similar eligible cases receiving her existing follow-up. She changes the policy if added profit is poor.

Agent/application: Link costs, discounts, returns and outcomes to the case. Evaluate changes before broadening autonomy.

Other system/person: A support issue goes to a person rather than another sales attempt.

Boundary: Use incremental contribution, not all sales that happened after contact.


## Dispute response — Arjun · operations manager at an online retailer

A ₹4,800 order is disputed as not received. The courier says delivered, but the proof image is unclear.

AI fit: AI can interpret varied documents and assemble a coherent draft. Matching IDs, checking deadlines and calculating amounts are rules; a confidence score must not invent missing proof.

Illustrative reconstruction; not verified production UI.


### 1. Choose the job

Merchant: Arjun assigns a person to own dispute exceptions and checks which evidence the team actually has.

Agent/application: The product should explain supported dispute types and what it can submit.

Other system/person: The card/bank dispute process remains the external decision-maker.

Boundary: Winning is not guaranteed by producing a draft.


### 2. Connect the evidence

Merchant: He scopes access to the relevant transaction, order and shipment records.

Agent/application: Map a payment ID to an order and shipment using reliable keys; surface ambiguous matches.

Other system/person: Courier proof, store invoice and payment records provide separate pieces of evidence.

Boundary: An unrelated delivered parcel is not proof for this dispute.


### 3. Set the boundaries

Merchant: In this example every submission requires his review; collection and drafting may run automatically.

Agent/application: The policy separates reading evidence from sending a formal response.

Other system/person: Customer contact is a separate optional action requiring its own authority.

Boundary: A time-sensitive case still needs a named responsible reviewer.


### 4. A case arrives

Merchant: A new dispute creates a work item with amount, reason and deadline.

Agent/application: Gather the evidence permitted for that case and mark missing records.

Other system/person: A logistics connector may return a missing or low-quality document.

Boundary: The system should report the gap, not silently replace it with a guess.


### 5. Prepare a recommendation

Merchant: The draft points out the unclear proof and asks Arjun to verify delivery before proceeding.

Agent/application: AI summarizes the timeline and ties every factual assertion to a document or record.

Other system/person: A support ticket can request better evidence from the human team.

Boundary: Suggested wording is distinct from validated evidence.


### 6. Review and authorize

Merchant: Arjun removes an unsupported statement, attaches a verified document, and approves the final version.

Agent/application: Freeze the approved payload, validate deadline and submit through the permitted action tool.

Other system/person: The external system acknowledges receipt or returns an error.

Boundary: Approval must bind to the version actually submitted.


### 7. Observe the result

Merchant: He sees “submitted,” then later the adjudication outcome.

Agent/application: Keep the response reference and reconcile the eventual financial outcome.

Other system/person: Issuer/network decision can arrive much later than the agent run.

Boundary: A successful API call is not a won dispute.


### 8. Measure and adjust

Merchant: He reviews net retained amounts, preparation time and overturned assertions by dispute reason.

Agent/application: Use reviewer corrections to improve retrieval and drafting; evaluate on past cases before release.

Other system/person: Hard cases stay with the operations owner.

Boundary: Track case mix so easier cases do not create a misleading win-rate improvement.


## Subscription recovery — Neha · founder of a subscription service

A ₹899 monthly renewal fails. The customer still wants the service, but the cause is initially unknown.

AI fit: A retry schedule can be fixed automation. An agent adds value when it must understand the customer’s explanation and coordinate a safe next step across billing and support.

Illustrative reconstruction; not verified production UI.


### 1. Choose the job

Merchant: Neha first separates involuntary payment failures from deliberate cancellation.

Agent/application: Show which failure types and payment methods are supported.

Other system/person: The billing system remains the record of the customer’s contract.

Boundary: The agent should not treat all churn as recoverable debt.


### 2. Connect the evidence

Merchant: She provides the billing and payment records plus the contact preferences needed for this job.

Agent/application: Link subscription, invoice, attempt and customer without relying only on names.

Other system/person: The product entitlement system may be another required integration.

Boundary: A payment platform alone may not know whether service was paused.


### 3. Set the boundaries

Merchant: For this example all charge attempts need approval; the customer can choose to cancel.

Agent/application: Keep retry permission distinct from permission to send a reminder.

Other system/person: Any mandate and payment-network restrictions still constrain execution.

Boundary: A conversation never creates authority to debit a different amount.


### 4. A case arrives

Merchant: A failed renewal appears with an unresolved reason.

Agent/application: Check for a later successful payment or concurrent retry before opening the case.

Other system/person: Billing may already have an automatic retry in progress.

Boundary: One case owner avoids two systems pursuing the same failure.


### 5. Prepare a recommendation

Merchant: The agent proposes asking the customer to resolve the payment method rather than guessing they need a discount.

Agent/application: It can classify the explanation: insufficient funds, changed method, confusion, cancellation or service complaint.

Other system/person: A service complaint should route to support.

Boundary: A low-confidence classification should be visible to the reviewer.


### 6. Review and authorize

Merchant: Neha can alter the message or approve a permitted next attempt. The customer completes any required authentication.

Agent/application: Validate the exact invoice amount and current mandate before invoking the billing action.

Other system/person: Payment execution happens through the payment system.

Boundary: No invented discounts or improvised cancellation terms.


### 7. Observe the result

Merchant: The case shows payment confirmation and a separate entitlement check.

Agent/application: Verify whether the subscription actually returned to an active state.

Other system/person: A paid customer with blocked access creates a new support exception.

Boundary: Recovery is incomplete if the promised service remains unavailable.


### 8. Measure and adjust

Merchant: She measures additional paid, retained subscriptions over a defined window.

Agent/application: Compare against the existing retry policy and include contact cost, refunds and complaints.

Other system/person: Respect the customer’s chosen outcome, including cancellation.

Boundary: Feedback improves the workflow through evaluated policy changes, not automatic model retraining.


## Payout preparation — Dev · finance lead at a B2B company

Dev wants to pay a supplier’s approved ₹18,000 invoice. Two suppliers have similar names.

AI fit: This is primarily a finance operations example. AI helps interpret an instruction; matching, authorization and money movement require explicit controls.

Illustrative reconstruction; not verified production UI.


### 1. Choose the job

Merchant: Dev uses the banking conversation surface for a one-off payment request.

Agent/application: The public banking launch documents a path from request to payout preparation and OTP.

Other system/person: Account eligibility and the real approval policy need verification.

Boundary: This example belongs in a banking context.


### 2. Connect the evidence

Merchant: The permitted accounts, vendor master and invoice records supply the facts.

Agent/application: Retrieve the approved invoice and payee details; do not derive bank details from free text.

Other system/person: An ERP may be needed to verify invoice approval.

Boundary: A connector being available does not mean a particular field is accessible.


### 3. Set the boundaries

Merchant: In this example the preparer and final approver are different people.

Agent/application: Enforce roles and amount limits outside the language model.

Other system/person: The bank/payment service applies its own authorization.

Boundary: The language model cannot waive the approval step.


### 4. A request arrives

Merchant: Dev asks to pay the supplier, without specifying which of the two matching names he means.

Agent/application: Ask a precise clarifying question rather than selecting the most likely payee.

Other system/person: No money moves while the payee is ambiguous.

Boundary: A clear question is a successful safe outcome.


### 5. Prepare a recommendation

Merchant: After clarification, Dev sees the invoice, masked account identifier, amount and proposed payment date.

Agent/application: Check duplicates, current invoice status and available funds.

Other system/person: If the invoice is already paid, close the request with evidence.

Boundary: The draft can be useful even if no payment is ultimately made.


### 6. Review and authorize

Merchant: The authorized user checks the exact payout and completes the actual payment approval.

Agent/application: The product hands off to the approved banking flow.

Other system/person: OTP or other bank authentication belongs to the authorized user.

Boundary: This guide does not execute payments.


### 7. Observe the result

Merchant: Dev sees whether the payout is processing, successful, failed or reversed.

Agent/application: Reconcile the status from the bank rather than treating button-click success as final.

Other system/person: A failure becomes an exception for the finance team.

Boundary: An uncertain response should not lead to an immediate duplicate payout.


### 8. Measure and adjust

Merchant: The team tracks time saved and errors avoided against the old payout process.

Agent/application: Review repeated ambiguities to improve the vendor data and instruction interface.

Other system/person: The finance owner remains responsible for exceptions.

Boundary: Do not label faster payout preparation as incremental sales.


# Agent catalog

04 / Agents and the jobs they address

## A catalog of public claims, with design interpretations.

Open a card to see a pain, a possible signal, the expected action and a useful outcome metric. Those expanded interpretations are our analysis; the short “Public evidence” line records the vendor claim.

Search agentsProduct contextAll contextsCommerceIndustryBankingEvidenceAny evidenceDescribedNamed on current pageLaunch descriptionUpcoming

### Additional industry names on the current page

These are advertised labels, not separately validated implementations. Similar names may represent a sector-specific configuration of the same capability. No detailed user journey, model or availability should be inferred from a label alone. [Agent Studio product page ↗](https://razorpay.com/agent-studio/)

Named only

### Lending

- Incomplete Loan Application
- EMI Recovery
- Loan Disbursement
- EMI Dispute
- Loan Collection Prediction
- Refund Insights

Named only

### Investments

- SIP Failure Recovery
- Incomplete Application
- Transaction Dispute
- Daily Withdrawal Report
- Behavioural Nudge

Named only

### Insurance

- Payment Retry
- Drop-off Recovery
- Chargeback Defence
- Daily Refund Report
- Money Prediction
- Lapsed Policy Revival

How to read the catalog: “Described” means a public source explains a job. It does not mean tested, generally available or independently proven. “Upcoming” is explicitly a roadmap item. This is a deduplicated research catalog of relevant commerce and finance agents, not an authenticated inventory of your account.


## Cart Recovery / Abandoned Cart Conversion

Commerce / Described + demo

Public evidence: Voice-led recovery with SuperU / Nugget; follow-up payment link.

Our interpretation:

- Pain: A shopper intended to buy but left; staff cannot follow up on every case.

- Signal: A known checkout has no completed order after a waiting period; join store activity to payment status.

- Action: Interpret the customer’s objection, select an allowed response, then offer a route back to checkout.

- Metric: Incremental contribution profit per eligible abandoned checkout; monitor opt-outs.

[FTX launch announcement ↗](https://razorpay.com/newsroom/?p=4704) [Official Agent Studio demo ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI)


## Dispute Responder / Dispute Expert

Commerce / Described

Public evidence: Collects evidence across payments, store and delivery systems; prepares a response.

Our interpretation:

- Pain: Staff hunt for proof while a chargeback deadline approaches.

- Signal: A new dispute with reason, amount and response deadline.

- Action: Assemble a traceable case for a human reviewer; track the external decision separately.

- Metric: Net amount retained and preparation time; compare similar dispute types.

[Merchant controls and operating principles ↗](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/)


## Subscription Recovery

Commerce / Described

Public evidence: Launch materials describe retries and nudges; voice is also advertised.

Our interpretation:

- Pain: A failed renewal can interrupt an otherwise wanted service.

- Signal: Renewal attempt failed; check mandate and subscription state before any follow-up.

- Action: Separate a technical payment issue from an intentional cancellation; propose the appropriate next step.

- Metric: Incremental paid renewals net of costs; complaints and duplicate charges as guardrails.

[Agent Studio launch ↗](https://razorpay.com/blog/?p=26292) [FTX launch announcement ↗](https://razorpay.com/newsroom/?p=4704)


## Cashflow Forecaster

Commerce / Described

Public evidence: Forecasts cash position 3–7 days ahead.

Our interpretation:

- Pain: The owner learns about a cash shortage after committing to payments.

- Signal: Balances, settlement dates, expected receipts and scheduled obligations.

- Action: Explain a range of possible balances and ask which assumption needs changing.

- Metric: Forecast error, warning lead time and avoidable shortfalls; this is not automatically revenue recovery.

[Agent Studio launch ↗](https://razorpay.com/blog/?p=26292)


## COD Confirmation

Commerce / Named on current page

Public evidence: Listed in the current commerce suite.

Our interpretation:

- Pain: An unconfirmed cash-on-delivery order can consume shipping cost and return.

- Signal: An unshipped COD order; validity of address and buyer intent need confirmation.

- Action: Possible direction: verify intent and route uncertain orders to operations. Cancellation authority is unverified.

- Metric: Delivered contribution per COD order, alongside false cancellation rate.

[Agent Studio product page ↗](https://razorpay.com/agent-studio/)


## KYC Verification

Commerce / Named on current page

Public evidence: Advertised on the current page; detailed workflow not published there.

Our interpretation:

- Pain: Identity onboarding can stall because information is incomplete or unclear.

- Signal: Incomplete verification record or requested document; exact supported inputs need confirmation.

- Action: Possible direction: help complete the case; final regulated eligibility decisions require an appropriate reviewer.

- Metric: Completion time and legitimate completion rate; incorrect approvals tracked separately.

[Agent Studio product page ↗](https://razorpay.com/agent-studio/)


## Customer Feedback / Post-Purchase Feedback

Commerce / Described

Public evidence: Calls after delivery and structures product feedback.

Our interpretation:

- Pain: Problems heard by support do not reach product or operations in a usable form.

- Signal: A confirmed delivery and an eligible customer contact.

- Action: Group recurring complaints, with original evidence available to a person deciding changes.

- Metric: Actionable issues resolved and subsequent return/repeat-purchase change.

[Agent Studio product page ↗](https://razorpay.com/agent-studio/)


## Mandate Activation

Industry / Described

Public evidence: Follows up after failed mandate activation.

Our interpretation:

- Pain: The customer wanted recurring service but never completed authorization.

- Signal: An incomplete mandate setup, distinct from a later failed recurring charge.

- Action: Help resume authorization; the customer still completes the required authorization.

- Metric: Incremental valid mandates and later successful collections.

[Agent Studio product page ↗](https://razorpay.com/agent-studio/)


## Loan Recovery

Industry / Described

Public evidence: Contacts borrowers after missed repayments.

Our interpretation:

- Pain: A lender’s team cannot individually coordinate every missed instalment.

- Signal: Past-due amount with up-to-date repayment status and contact permissions.

- Action: Possible direction: resolve payment friction or hand over hardship/disputes; never invent debt terms.

- Metric: Net legitimate cash collected; complaints and incorrect contact count.

[Agent Studio product page ↗](https://razorpay.com/agent-studio/)


## RTO Shield

Commerce / Launch description

Public evidence: Launch describes address validation and pincode risk signals.

Our interpretation:

- Pain: High-risk dispatches generate avoidable return-to-origin cost.

- Signal: COD order plus address quality and historical delivery outcomes.

- Action: Possible direction: explain the risk and request confirmation before changing fulfilment.

- Metric: Net shipping loss avoided minus losses from wrongly blocked orders.

[Agent Studio launch ↗](https://razorpay.com/blog/?p=26292)


## RTO Insights

Commerce / Launch description

Public evidence: Launch lists analysis by location, product and customer.

Our interpretation:

- Pain: Returns are counted but recurring causes remain difficult to isolate.

- Signal: Delivered/returned orders joined to product and route attributes.

- Action: Possible direction: investigate a cluster and test an operational change.

- Metric: Change in avoidable returns after controlling for order mix.

[Agent Studio launch ↗](https://razorpay.com/blog/?p=26292)


## Settlement Insights

Commerce / Launch description

Public evidence: Launch advertises a daily WhatsApp settlement summary.

Our interpretation:

- Pain: Owners repeatedly open reports to understand incoming cash.

- Signal: Settlement status, deductions and daily cutoff.

- Action: Possible direction: explain mismatches and link to exact records; escalation needs a supported tool.

- Metric: Time to identify an exception and match receipts; a summary itself does not recover money.

[Agent Studio launch ↗](https://razorpay.com/blog/?p=26292)


## Insights Agent / Cashflow Insights

Banking / Described

Public evidence: RazorpayX shows finance health, balances, runway and risks.

Our interpretation:

- Pain: Finance teams stitch together incoming and outgoing cash manually.

- Signal: Authorized bank balances, receivables and payables.

- Action: Possible direction: surface a cash issue and explain a proposed priority.

- Metric: Forecast accuracy and action lead time.

[RazorpayX launch ↗](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/)


## Receivables / Collections Agent

Banking / Described

Public evidence: Tracks unpaid invoices and sends collection follow-ups.

Our interpretation:

- Pain: The seller delivered work but invoices remain unpaid.

- Signal: Due date passed; check partial payments, credits and disputes.

- Action: Possible direction: interpret the reply and route an invoice problem to the right person.

- Metric: Incremental collections, overdue days and cost per amount collected.

[RazorpayX Agentic Banking product page ↗](https://razorpay.com/agentic-business-banking/) [RazorpayX experience walkthrough ↗](https://razorpay.com/blog/business-banking/introducing-the-agentic-connected-banking-experience-by-razorpayx/)


## Payout Agent

Banking / Described

Public evidence: Prepares a payout from a request and hands the user to OTP approval.

Our interpretation:

- Pain: Typing vendor and payout details repeatedly creates work and mistakes.

- Signal: An explicit payment instruction, matched vendor and payable.

- Action: Resolve ambiguity and prepare an exact review; the authorized user completes approval.

- Metric: Preparation time, errors and unauthorized attempts; primarily operational efficiency.

[RazorpayX launch ↗](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/)


## Bookkeeping Agent

Banking / Described

Public evidence: Current page describes ERP entries based on predefined rules.

Our interpretation:

- Pain: Repetitive posting delays reliable books.

- Signal: A transaction with known account mapping; ambiguous entries need review.

- Action: Possible direction: apply known mappings; use AI only to interpret exceptions.

- Metric: Posting accuracy and close time. A rules workflow may be sufficient for most cases.

[RazorpayX Agentic Banking product page ↗](https://razorpay.com/agentic-business-banking/) [RazorpayX experience walkthrough ↗](https://razorpay.com/blog/business-banking/introducing-the-agentic-connected-banking-experience-by-razorpayx/)


## Reporting Agent

Banking / Described

Public evidence: Produces reports and highlights anomalies.

Our interpretation:

- Pain: Teams compile reports without time left to investigate them.

- Signal: Scheduled reporting period and reconciled ledger data.

- Action: Possible direction: generate the report and identify a small set of explainable exceptions.

- Metric: Report preparation time, useful exception precision and follow-through.

[RazorpayX Agentic Banking product page ↗](https://razorpay.com/agentic-business-banking/) [RazorpayX experience walkthrough ↗](https://razorpay.com/blog/business-banking/introducing-the-agentic-connected-banking-experience-by-razorpayx/)


## Tax Payments Agent

Banking / Upcoming

Public evidence: Explicitly shown as upcoming on the banking page.

Our interpretation:

- Pain: Tax calculations and payment preparation require coordination.

- Signal: Verified tax obligations and rule configuration.

- Action: Possible direction: prepare calculations for qualified review; this is not evidence of a live autonomous tax product.

- Metric: Error rate and on-time completion.

[RazorpayX Agentic Banking product page ↗](https://razorpay.com/agentic-business-banking/)


## Reimbursement Agent

Banking / Upcoming

Public evidence: Explicitly shown as upcoming on the banking page.

Our interpretation:

- Pain: Expense claims queue up while receipts and policy are checked.

- Signal: Submitted expense with receipt, policy and employee eligibility.

- Action: Possible direction: prepare a decision and payment instruction for an authorized approver.

- Metric: Cycle time, incorrect reimbursements and review effort.

[RazorpayX Agentic Banking product page ↗](https://razorpay.com/agentic-business-banking/)


# How it works

05 / Behind the interface

## AI chooses a step. Software enforces and executes it.

The diagram below is an explanatory reference architecture. It combines public building blocks with recommended engineering patterns. Razorpay has not published the full production architecture in the sources reviewed.

### What is actually known about the platform?

The Claude Agent SDK provides an agent loop, tool integration, permissions and sessions. Razorpay’s launch identifies that SDK. This does not establish the exact model version, databases, memory store, tool protocol, queues, hosting topology or whether specialist agents delegate to one another. [Anthropic: Agent SDK overview ↗](https://code.claude.com/docs/en/agent-sdk/overview) [Agent Studio launch ↗](https://razorpay.com/blog/?p=26292)

### Which systems provide what?

System / channel | Example facts or function | Important boundary | 

Razorpay payment records | Attempt status, captured amount, refund, dispute, settlement. | A completed payment record may not contain the customer’s checkout objection. | 

Store / order platform, e.g. Shopify | Basket, items, order, price, inventory. | The order must match the correct payment and customer. | 

Delivery platform, e.g. Shiprocket | Shipment status and delivery evidence. | A delivered scan can be stale or contested. | 

Accounting system, e.g. Tally / QuickBooks | Invoices, receivables and ledger context. | An unpaid invoice may contain a credit or commercial dispute. | 

WhatsApp / SMS / email / voice provider | Deliver messages, conduct a call, return delivery or conversation outcomes. | Merchant authorization and customer contact permission are separate questions. | 

Human / team channel, e.g. Slack | Possible approval or exception coordination. | A notification channel is not inherently an approval authority. | 

The launch names Shopify, Shiprocket, WhatsApp, ElevenLabs, Slack, Tally and QuickBooks as connections. The table explains plausible roles; exact objects, permissions and supported actions depend on the connector. [FTX launch announcement ↗](https://razorpay.com/newsroom/?p=4704)

### How does an agent notice something while I am offline?

Ordinary event infrastructure can notify the application when a payment or dispute changes. Razorpay documents webhooks for these events. A separate scheduler can examine overdue cases periodically. The agent is invoked only when work is needed; “always on” does not require a model to think continuously. The exact Studio trigger implementation is unverified. [Razorpay webhook documentation ↗](https://razorpay.com/docs/webhooks/)

### How does the AI perform an action?

A tool is a structured operation, such as fetching a payment or creating a payment link. Razorpay publicly maintains an MCP server exposing such tools; local and remote support differs by operation. This is a concrete way an external AI application can use payment APIs. It is not evidence that every Studio connector internally uses MCP. No connection or credential setup is needed to study this guide. [Razorpay official MCP server ↗](https://github.com/razorpay/razorpay-mcp-server)

Design recommendation

### Rules

Use for thresholds, arithmetic, duplicate prevention, consent checks, access boundaries and known status transitions.

Example: do not contact an already-paid order.

Candidate approaches, not disclosed Razorpay models

### Predictive models

Use when historical labels can support a useful estimate. Start with a baseline; logistic regression, boosted trees or time-series models may be sufficient.

Example: predict cashflow uncertainty or probability of successful recovery.

Design recommendation

### Language models + agents

Use for variable language, documents and choosing among permitted steps. An LLM is already a deep learning model; a separate deep model is not automatically needed.

Example: distinguish a payment problem from a product complaint.

### Learning has several meanings

Recording a result, remembering a merchant preference, changing a policy and training model weights are different things. A useful first product can improve through reviewer corrections, better data matching and offline evaluation. The reviewed sources do not establish a per-merchant training pipeline. Avoid presenting every successful case as a model that automatically “learned.”


## 1. Receive a trigger

Something makes a case worth examining.

Three possible entrances: a merchant request; a scheduled check; an event from another system. In our cart example, a timer first identifies a checkout without a paid order. This stage can run entirely with ordinary software.

UI: show the trigger, case ID and age.

The exact queue, scheduler and event contracts inside Studio are not publicly established.


## 2. Retrieve context

Look up the facts needed for this case.

Read only relevant records through authorized connectors. Join the order, payment and contact identity; retain where each fact came from and how recent it is. A connector is an authorized bridge, not a copy of every merchant system.

UI: source list, freshness and missing evidence.

Store behavior needs store access; successful payment data cannot reveal every abandoned cart.


## 3. Choose a next step

Use AI for the uncertain part.

An LLM can interpret a complaint, extract meaning from documents, draft an explanation and decide which permitted lookup is needed next. A prediction model could separately estimate risk. The application supplies a restricted menu of tools.

UI: recommendation, evidence and uncertainty.

An agent is an application using models and tools. Creating an agent does not imply training a new foundation model.


## 4. Validate the plan

Check what is allowed and what is true.

A fixed policy service should verify identities, amounts, eligibility and duplicates. It must treat customer text and external documents as evidence, never as instructions to expand permissions. Fail closed when an essential fact is missing.

UI: passed checks and specific blockers.

This is a recommended reference architecture; exact Razorpay service boundaries are not disclosed.


## 5. Get human approval

Make the proposed effect reviewable.

Show the exact recipient, amount, payload and commercial effect. In our examples the merchant can approve, edit or reject. Editing a material field invalidates the old approval. A narrow standing permission can cover repetitive low-risk actions.

UI: a review card tied to one plan version.

Do not infer that every public agent currently exposes these exact controls.


## 6. Call an action tool

Ask a real system to perform the action.

For example, a payment-link tool sends structured fields to a payment API. A communication tool sends text or starts a voice session. The LLM does not transfer money by writing a sentence; an authenticated service performs the action.

UI: action requested, external reference, delivery or failure state.

A data-read connector is not automatically authorized to send messages or modify records.


## 7. Verify the outcome

Find out what actually happened.

The external system returns a result or sends an asynchronous event. Keep “request accepted,” “customer interested” and “payment completed” as separate facts. On a timeout, reconcile the external state before retrying a consequential action.

UI: case timeline and unresolved exceptions.

A webhook is a system-to-system notification. It is not an AI model or evidence of incremental growth.


## 8. Evaluate and improve

Compare outcomes with the intended job.

Collect reviewer edits, failure reasons, action cost and measured outcomes. Improve data, rules or prompts through controlled evaluation. A change should be tested before gaining wider permissions. Continuous execution does not require continuous model training.

UI: outcome report, policy history and cohort comparison.

No public evidence reviewed establishes automatic per-merchant fine-tuning or reinforcement learning in Studio.


# Design your solution

06 / Use this understanding in your solution

## Choose the job before choosing the agent.

Treat the interface as a place to define responsibility: what opportunity exists, who may act, what evidence supports it, and what result counts as success.

Existing specialist + better experience

### Build on the direction

Example: make a dispute draft easier to trust.

Use the existing agent job as context. Improve evidence review, uncertainty or deadline handling. Your proposal adds a better merchant experience; it need not claim a new agent capability.

New case type + new evidence

### Extend the direction

Example: resolve short-paid B2B invoices.

Start from receivables follow-up, then investigate deductions across invoice, remittance and delivery data. The new value is resolving the cause of non-payment, with finance approval before commercial adjustments.

New opportunity + justified AI

### Explore an adjacent job

Example: identify profitable repeat-purchase opportunities.

Need customer/order history, product availability and experiments. A prediction plus a campaign workflow might be enough. Add an agent only if it must investigate context and coordinate variable actions.

These are our directional proposals, not claims that Razorpay lacks every related feature. Check the pain atlas and validate existing capabilities before selecting a gap. [Open growth priorities ↗](merchant-research.html#priority-growth) · [Open recovery priorities ↗](merchant-research.html#priority-recovery)

### The end-to-end product brief

Decision to make | What a strong directional answer contains | 

1. Opportunity | A specific eligible case and measurable loss or upside. Example: delivered invoices short-paid beyond a tolerance. | 

2. Data | Which fields come from which source, their freshness, matching keys and permission owner. Identify what Razorpay does not naturally observe. | 

3. Need for AI | The ambiguous decision where a fixed rule fails; a simple baseline to compare against. Do not use AI for arithmetic or authorization. | 

4. Recommendation | One proposed next step, with evidence, expected benefit, cost and uncertainty. | 

5. Action | The exact tool and its side effect: prepare a case, contact a customer, update a record or initiate a permitted process. | 

6. Merchant authority | Who can review, edit, approve or reject; what standing permissions cover; what happens when the plan changes. | 

7. Failure | Handling for stale data, identity mismatch, duplicate action, timeout, missing consent and an unavailable reviewer. | 

8. Outcome | How the authoritative system confirms success; what must happen after the tool returns. | 

9. Learning | Which corrections and outcomes are recorded, how changes are evaluated, and how permissions remain controlled. | 

10. Business measurement | An eligible population, comparable baseline, observation window and net metric—not simply the number of agent actions. | 

### Sketch these five screens first

Opportunity inboxWhy this case?→Evidence viewWhat do we know?→Review cardWhat will happen?→Case timelineWhat happened?→Outcome reportWas it worthwhile?

For a recurring specialist, add a setup surface for connections, permissions and budget. For a one-off request, a conversation may lead straight to an evidence or review card. Chat is one entry method; the meaningful unit of work is the case.

### Growth and recovery need different measurement

### Growth

Measure additional profitable demand: more customers, higher retained contribution or more frequent purchases. Compare eligible treated and control cohorts over a defined period.

A customer who would have purchased anyway is not incremental growth.

### Revenue recovery

Measure additional value preserved or collected from an at-risk case: a renewal, overdue invoice, dispute or checkout opportunity. Subtract incremental costs, discounts and refunds.

Define cart recovery as recapturing purchase intent; an abandoned cart is not booked revenue.

### A simple numerical example

Fictional pilot: 200 eligible cases in each group. The assisted group produces 30 paid orders; the usual-process group produces 20. The estimated difference is 10 orders before uncertainty and selection effects. At ₹600 contribution per order and ₹2,000 added intervention cost, estimated incremental contribution is ₹4,000. Counting all 30 orders would overstate the effect. Small pilots need uncertainty estimates and checks for mix, returns and spillover.

Build feasibility: the materials reviewed do not establish a public API for installing your custom agent into this account’s Studio. A submission can honestly prototype a proposed extension with sample data and mocked tools. A real integration would need confirmed builder access, connector capabilities and permissions. The public MCP/API route is a separate integration option, not a shortcut to publishing inside Studio.


# Evidence & limits

07 / Sources, uncertainty and controls

## Know which parts you can rely on.

Account evidence

### Observed

Read directly in your account’s UI. Applies only to the screens and account examined.

Public demo

### Demonstrated

Visible in an official video. Shows a product concept or demo build, not universal production behavior.

Public claim

### Documented

A vendor page or terms describes it. Product eligibility and exact implementation can still differ.

Our analysis

### Illustrative

Our scenario, reference architecture or design recommendation. Intended to explain or propose.

### Three discrepancies that matter for your design

Topic | What the sources say | How to handle it | 

Stopping work | The March principles article describes an immediate stop. July terms §3.15 say pause prevents new runs; active runs continue. | Do not promise instant cancellation of an in-flight action. | 

Where data goes | The blog uses broad infrastructure/privacy language. Terms §§3.5, 6.4, 6.10 contemplate authorized AI providers/sub-processors and possible cross-border processing. | Do not claim all processing is isolated within Razorpay or that model-training policy is settled. | 

Default review | The current landing page says review-first; the March blog describes it as configurable. Terms §3.14 allow class/threshold approval gates and refer to defaults elsewhere. | Verify actual defaults before depicting automatic execution. | 

Terms §3.12 describe disabling an agent or disconnecting a connector. §18.11 describes searchable/exportable invocation logs covering trigger, agent/model, connectors, inputs, actions and outcomes. These documented controls do not reveal exact current screen layouts. [Agent Studio terms ↗](https://razorpay.com/tnc/agent-studio/) [Merchant controls and operating principles ↗](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) [Agent Studio product page ↗](https://razorpay.com/agent-studio/)

### Public safeguards, stated compactly

The principles article describes scoped connected data, merchant-set permissions, approved offers, action validation, contact-consent checks and auditability. It also describes internal evaluation. These are platform claims, not an independent security assessment or a guarantee that every action will be correct. [Merchant controls and operating principles ↗](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/)

### What remains unknown

- The exact production model versions, orchestration, retrieval stores and event schemas.
- Current eligibility, enabled agents, pricing and builder access for this specific account.
- The precise approval interface, editable fields, default thresholds and available role separation.
- Whether all named industry agents are distinct products, configurations or enterprise engagements.
- How much quoted recovery uplift is incremental, for which cohorts, with what costs and controls.
- The exact training, retention and provider arrangements for a given deployment; the service agreement and provider configuration matter.

### Questions to take into a product demo

- Show one live case from trigger to final financial outcome, including the data source timestamps.
- Show a case blocked by missing permission, a duplicate event and a stale connector.
- Show what can be edited, who can approve, and what happens if I pause during a run.
- Show the supported connector objects and write actions for my intended job.
- Show the measurement denominator and baseline behind a recovery claim.
- Show how a custom agent is built, tested, versioned and made available to my account.

### Source register

[Agent Studio product page ↗](https://razorpay.com/agent-studio/)Current public offering; industry names; review-first positioning.

[Merchant controls and operating principles · 30 Mar 2026 ↗](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/)Marketplace location, connected sources, scope, approved offers and human review.

[Agent Studio launch · 12 Mar 2026 ↗](https://razorpay.com/blog/?p=26292)Claude Agent SDK; expanded launch catalog; no-code builder described as beta.

[FTX launch announcement · 12 Mar / updated 15 Jun 2026 ↗](https://razorpay.com/newsroom/?p=4704)Initial four agents, partners, named connectors and the wider experience platform.

[Conversational Dashboard / RAY · 6 Oct 2025 ↗](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/)Merchant questions, reports and contextual follow-up actions; early access at publication.

[RAY on WhatsApp · 2 Sep 2026 ↗](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/)Merchant text/voice interface, operational commands and authentication link.

[Agent Studio terms · effective 1 Jul 2026 ↗](https://razorpay.com/tnc/agent-studio/)Sections 3.12–3.15, 6 and 18.11: controls, pause semantics, data processing, audit.

[RazorpayX Agentic Banking product page ↗](https://razorpay.com/agentic-business-banking/)Five finance agents; tax and reimbursements explicitly upcoming.

[RazorpayX launch · 1 Jun 2026 ↗](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/)Payout preparation to OTP; Cashflow Insights and Payout beta for Connected Banking+.

[RazorpayX experience walkthrough · 4 Mar 2026 ↗](https://razorpay.com/blog/business-banking/introducing-the-agentic-connected-banking-experience-by-razorpayx/)Chat in the banking dashboard; collections, bookkeeping and reporting descriptions.

[Official Agent Studio demo · 1 minute 50 seconds ↗](https://www.youtube.com/watch?v=LOlSr6u6BRI)Razorpay channel; linked from launch blog. Frames inspected at approximately 0:05, 0:11, 0:33, 0:44, 0:55 and 1:39.

[Official Agent Studio overview video ↗](https://www.youtube.com/watch?v=JXOzdo9S4F8)Linked from the official launch blog; provided as further viewing, not relied on for screen-level findings.

[Anthropic: Agent SDK overview ↗](https://code.claude.com/docs/en/agent-sdk/overview)General SDK capabilities; does not disclose Razorpay’s specific deployment.

[Razorpay official MCP server ↗](https://github.com/razorpay/razorpay-mcp-server)Public tool interface to payments APIs; not proof of Studio’s internal connector implementation.

[Razorpay webhook documentation ↗](https://razorpay.com/docs/webhooks/)Event notifications and asynchronous verification; general platform building blocks.

Research reviewed 13 October 2026. Sources are primarily official vendor material. The official video was visually inspected at the stated moments; no live agent installation was performed. This guide does not reproduce private financial records.