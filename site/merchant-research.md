# A merchant’s working life

Research tree · 13 October 2026 · 10 buckets · 52 subtrees · 208 pain points · 106 sources

[Open the FigJam board — partial update; sync blocked by plan limit](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg)

## Purpose and evidence boundaries

This is a desk-research map of general merchant needs, created before selecting a product opportunity. It combines official fintech and commerce product documentation with two independent research sources. Every first-person pain statement is an analyst-created hypothesis, not a quote from an interviewed merchant. Related source links establish workflow context and examples of products addressing it; they do not prove the prevalence, severity, or exact wording of each hypothesis.

The map is mutually exclusive by primary merchant job: each pain has one main home. Companies and underlying causes may span buckets. Cross-links preserve those relationships without duplicating the pain. It is collectively exhaustive only within the defined scope of general commerce and business operations. It is not an exhaustive account of every sector, jurisdiction, enterprise process, or personal circumstance. Clinical practice, detailed food safety, industrial manufacturing, regulated financial services and legal/tax obligations require their own research extensions.

The three prioritization tabs now rank all 208 pain hypotheses by primary outcome. Their weighted opportunity scores are provisional analyst judgments. The separate 0–5 provider ratings estimate documented product coverage for a specific job, not percentages solved or measured competitive performance. Frequency, severity, willingness to pay, merchant data access and current workarounds remain to be validated through interviews and observed records. A problem having a product solution does not mean the pain is solved for every merchant. A public capability not being found does not prove it is absent.

Reviewed on 13 October 2026. Most sources are vendor descriptions. Performance claims are not adopted as universal facts. The independent evidence comes from US contexts and is not extrapolated to India. US-market examples include companies founded elsewhere; the geography labels describe the relevant market, not a claim that all are US-founded startups.

**FigJam status:** Only bucket 01 has been updated; Figma Starter MCP tool-call limit blocked the remaining board changes and final layout. This text and the portable .drawio tree contain the full analysis.

## Fintech coverage scoring and data boundaries

Analyst-estimated coverage of the specific merchant job, not measured percent solved, product quality, market share or investment intensity.

Intensity is expressed by the same per-pain coverage score plus product focus: core fintech, fintech infrastructure, finance software or an adjacent commerce tool. A provider may be core to its own market yet score low on this particular pain.

Confidence is separate from the score. Public product documentation supports capability presence; it rarely proves merchant outcomes. Zero is a bounded research finding, not a verified absence.

Score within the specified merchant segment. Square US, Mondu UK/EU and Mercury US are design comparisons, not recommendations or proof of availability to Priya in India. No overall vendor average is presented because the scale is ordinal and the needs differ.

Native means observable by the appropriate fintech product if it is actually used—not automatically held by Razorpay. Connected data needs a permitted purpose, merchant authorization, relevant customer consent and appropriate access controls. Cross-merchant training or reuse is not assumed.

Retains all 200 original IDs and adds eight insurance/treasury pains under bucket 10. Scores and interventions are hypotheses to validate, not interview findings.

- 0 — No direct support identified in reviewed evidence; absence is unverified, not proof the company has never built it.
- 1 — Enabling input or adjacent feature; the merchant still assembles most of the solution.
- 2 — Partial coverage: a useful part of the job is addressed, with material gaps or limited rollout.
- 3 — Substantial workflow coverage; important integrations, exceptions or manual decisions remain.
- 4 — Strong documented coverage for the specified segment and configured workflow; real-world pain may remain.
- 5 — Mostly addressed for a narrowly defined eligible job, supported by implementation and outcome evidence. No 5 is assigned in this desk review.

## The illustrative merchant

**Name:** Priya, founder of Nila Home

**Status:** Fictional composite for research, not an interviewed merchant

**Business:** An independent Bengaluru home-care and fragrance brand selling cleaning refills, candles and gift sets.

**Scale:** Illustrative operating assumptions: 6 employees, 1 physical shop, 1 small stockroom, around 1,200 monthly orders, and about 45 product variants. These are invented to make scenarios concrete, not market benchmarks.

**Channels:** Shop counter, own online store, WhatsApp inquiries, occasional marketplace sales and a small wholesale account base.

**Payments:** UPI, cards, selected COD orders and bank transfers against wholesale invoices. A refill subscription is a possible next stage, not an assumption that every customer subscribes.

**Team:** Priya makes commercial decisions; a store lead handles retail; an operations lead handles stock and shipping; a part-time accountant closes the books. Roles overlap when someone is absent.

**Goals:** Pay the team and suppliers on time; deliver reliably; know real contribution; earn repeat business; grow without losing control.

**Tensions:** Sales versus usable cash; recovery versus customer trust; automation versus control; growth versus working capital; more data versus time to decide.

### A day in Priya’s life

| Time | Event | Buckets |
|---|---|---|
| 08:30 | Check usable cash and supplier bills | 08,10 |
| 09:30 | Receive stock and investigate mismatched counts | 02 |
| 10:30 | Review new-customer inquiries and campaigns | 03 |
| 12:00 | Handle a checkout problem and verify a pending payment | 04,05 |
| 14:00 | Pack orders and resolve a missed pickup | 06 |
| 16:00 | Review a return and a dispute deadline | 07 |
| 17:30 | Contact a wholesale customer about an overdue invoice | 05 |
| 18:00 | Consider a repeat-purchase campaign and its economics | 09 |
| 19:00 | Reconcile deposits, review approvals and switch off an unsafe workflow | 08,01 |

### Merchant variations

These are overlays for different business models, not a claim that Priya operates all of them.

- **Solo — Individual seller / freelancer:** Few transactions, minimal staff, phone-first work. Simplicity, cash confirmation and invoice follow-up matter; sophisticated experiments may be infeasible.
- **Retail — Physical or omnichannel retailer:** Queues, cash/UPI confirmation, inventory across locations, returns and repeat visits.
- **Online — D2C / ecommerce company:** Acquisition, checkout, payment failures, shipping, COD, returns and cross-channel attribution.
- **B2B — Wholesaler / professional services business:** Quotes, trade credit, milestones, deductions, large receivables and supplier finance.
- **Subscription — Recurring goods or digital service:** Mandates, failed renewals, plan changes, entitlement, voluntary cancellation and earned-revenue timing.
- **Service — Salon, clinic-like appointment business, tutor or studio:** Bookable capacity, staff calendars, no-shows, deposits, service completion and repeat appointments. Sector-specific clinical/legal obligations are outside this map.
- **Food — Cafe / food merchant:** Perishability, time-sensitive production, staffing, delivery and daily cash. Food-specific licensing and safety requirements require a dedicated extension.

## The 10 primary jobs

| ID | Bucket | Boundary |
|---|---|---|
| 01 | Establish and control the business | Owns entity/processor access, technology reliability, permissions, privacy and business continuity. Transaction fraud belongs in 07; tax recordkeeping in 08; staff cost/payment in 10. |
| 02 | Choose the offer and prepare supply | Owns assortment, base pricing, supplier readiness, inventory and capacity planning. Executing an accepted order belongs in 06; paying suppliers in 10. |
| 03 | Acquire qualified new demand | Owns discovery through qualified interest from prospective customers. Checkout friction belongs in 04; campaigns to previous buyers in 09. |
| 04 | Convert intent into an agreed order | Owns choice, cart, price disclosure and order commitment. Processing the payment instruction belongs in 05; inventory planning in 02. An abandoned checkout with no attempted payment belongs here. |
| 05 | Collect the agreed customer payment | Owns payment authorization, failures, recurring debits and overdue invoices. Funds already collected but not received/matched belong in 08. Voluntary relationship churn belongs in 09. |
| 06 | Deliver the promised value | Owns order execution, dispatch, delivery, service delivery and failed-delivery/RTO prevention. Post-delivery returns or compensation belong in 07; stock planning in 02; carrier COD remittance in 08. |
| 07 | Resolve exceptions and protect value | Owns contested/reversed transactions and loss protection, including transaction-fraud decisions before payment. Failed payment execution is 05; failed delivery prevention is 06; future relationship retention is 09. |
| 08 | Receive, reconcile and account for money | Owns settlement, remittance, matching, fee audit and financial/tax records. Unpaid customer obligations are 05; cash allocation and financing decisions are 10. |
| 09 | Retain and grow existing relationships | Owns post-purchase relationship, voluntary churn, loyalty, replenishment and expansion. Failed debits are 05; a live refund/dispute is 07; acquisition of genuinely new buyers is 03. |
| 10 | Fund and sustain business operations | Owns liquidity planning, financing, supplier/staff payments, recurring spend and business resource allocation. Supply selection is 02; customer collections 05; accounting facts 08; permissions and continuity controls 01. Insurance risk transfer and treasury policy also live here; transaction disputes remain in 07. |

## The detailed tree

## 01. Establish and control the business

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=4-55)

**Job:** Become eligible to trade and keep systems, people and automation under control.

**Boundary:** Owns entity/processor access, technology reliability, permissions, privacy and business continuity. Transaction fraud belongs in 07; tax recordkeeping in 08; staff cost/payment in 10.

**Illustrative moment:** Before opening, Priya needs payment activation. Later, a former contractor still has account access and a connector silently stops syncing.

**Razorpay coverage:** Razorpay covers onboarding, payment integration and agent controls. RAY helps navigate payment operations. General incorporation, enterprise IT and whole-business continuity remain broader than these products.

[R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [U01: Stripe](https://stripe.com/atlas), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments)

### 01.1. 1A. Eligibility and activation

**Latent need hypothesis:** I need a predictable route to opening, with one clear next step when someone rejects my application.

**Related product/workflow sources:** [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [U01: Stripe](https://stripe.com/atlas)

#### 01.1.1 — My launch is ready but the payment account is not approved

*Research hypothesis · Applies to: All*

- **Need:** See the missing requirement, responsible party and next step for my business type.
- **Observable signal:** Days at each activation stage; rejection reasons; resubmissions.
- **Outcome to measure:** Time to first live payment; launch days lost.
- **Related workflow evidence:** [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [U01: Stripe](https://stripe.com/atlas)


**Fintech role:** Direct — Merchant onboarding / KYB / account verification

- **Observable in the relevant fintech product:** Submitted business identity, verification status and bank details.
- **Needs connected merchant data:** Entity documents, ownership changes, category and country requirements.
- **Proposed intervention:** Explain rejection reasons and prepare a verifiable activation checklist.
- **Limit:** The fintech cannot bypass underwriting, sanctions or bank approval.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Onboarding / account activation; India; product-specific eligibility | 3/5 | Activation guidance exists; end-to-end resolution remains conditional.  Confidence: Medium. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Atlas / account setup; US / supported entities | 3/5 | Substantial fit for this specific pain. Company setup and account administration workflows. Incorporation is not payment approval; local requirements still apply. Confidence: Medium. | [U01: Stripe](https://stripe.com/atlas), [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Setu — Account Aggregator gateway; India | 2/5 | Partial fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Medium. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |

#### 01.1.2 — My legal name, shop name and bank details do not match

*Research hypothesis · Applies to: Solo, Retail, B2B*

- **Need:** Resolve identity inconsistencies before repeatedly uploading documents.
- **Observable signal:** Name mismatches; failed bank verification; support contacts.
- **Outcome to measure:** First-pass verification rate; rework hours.
- **Related workflow evidence:** [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [U01: Stripe](https://stripe.com/atlas)


**Fintech role:** Direct — Merchant onboarding / KYB / account verification

- **Observable in the relevant fintech product:** Submitted business identity, verification status and bank details.
- **Needs connected merchant data:** Entity documents, ownership changes, category and country requirements.
- **Proposed intervention:** Explain rejection reasons and prepare a verifiable activation checklist.
- **Limit:** The fintech cannot bypass underwriting, sanctions or bank approval.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Onboarding / account activation; India; product-specific eligibility | 3/5 | Verification inputs help; legal identity corrections require the merchant.  Confidence: Medium. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Atlas / account setup; US / supported entities | 2/5 | Partial fit for this specific pain. Company setup and account administration workflows. Incorporation is not payment approval; local requirements still apply. Confidence: Medium. | [U01: Stripe](https://stripe.com/atlas), [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Setu — Account Aggregator gateway; India | 2/5 | Partial fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Medium. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |

#### 01.1.3 — I do not know whether my category or new country is supported

*Research hypothesis · Applies to: All*

- **Need:** Confirm eligibility and required approvals before spending on expansion.
- **Observable signal:** Category restrictions; location/payment-method availability; rejected applications.
- **Outcome to measure:** Expansion cost committed before eligibility confirmation.
- **Related workflow evidence:** [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [U01: Stripe](https://stripe.com/atlas)


**Fintech role:** Direct — Merchant onboarding / KYB / account verification

- **Observable in the relevant fintech product:** Submitted business identity, verification status and bank details.
- **Needs connected merchant data:** Entity documents, ownership changes, category and country requirements.
- **Proposed intervention:** Explain rejection reasons and prepare a verifiable activation checklist.
- **Limit:** The fintech cannot bypass underwriting, sanctions or bank approval.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Onboarding / account activation; India; product-specific eligibility | 3/5 | Published onboarding scope helps; eligibility is account-specific.  Confidence: Medium. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Atlas / account setup; US / supported entities | 3/5 | Substantial fit for this specific pain. Company setup and account administration workflows. Incorporation is not payment approval; local requirements still apply. Confidence: Medium. | [U01: Stripe](https://stripe.com/atlas), [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Setu — Account Aggregator gateway; India | 1/5 | Enabling / adjacent fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Low. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |

#### 01.1.4 — Changing the owner, bank account or entity interrupts my trading

*Research hypothesis · Applies to: All*

- **Need:** Understand change verification and preserve a traceable transition.
- **Observable signal:** Pending account changes; document expiry; activation holds.
- **Outcome to measure:** Downtime during business changes; time to restore access.
- **Related workflow evidence:** [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [U01: Stripe](https://stripe.com/atlas)


**Fintech role:** Direct — Merchant onboarding / KYB / account verification

- **Observable in the relevant fintech product:** Submitted business identity, verification status and bank details.
- **Needs connected merchant data:** Entity documents, ownership changes, category and country requirements.
- **Proposed intervention:** Explain rejection reasons and prepare a verifiable activation checklist.
- **Limit:** The fintech cannot bypass underwriting, sanctions or bank approval.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Onboarding / account activation; India; product-specific eligibility | 2/5 | Account administration helps; uninterrupted migration is not established.  Confidence: Medium. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Atlas / account setup; US / supported entities | 2/5 | Partial fit for this specific pain. Company setup and account administration workflows. Incorporation is not payment approval; local requirements still apply. Confidence: Medium. | [U01: Stripe](https://stripe.com/atlas), [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Setu — Account Aggregator gateway; India | 1/5 | Enabling / adjacent fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Low. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |

### 01.2. 1B. Systems and integration

**Latent need hypothesis:** I need confidence that the business keeps working when I am not watching every connection.

**Related product/workflow sources:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration)

#### 01.2.1 — Checkout works in a demo but live orders fail

*Research hypothesis · Applies to: Online, Subscription*

- **Need:** Validate real payment, order, notification and refund paths before launch.
- **Observable signal:** Test/live configuration; end-to-end completion; integration errors.
- **Outcome to measure:** Live defect rate; lost orders after releases.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration)


**Fintech role:** Direct — Payment integration / financial-system events

- **Observable in the relevant fintech product:** Payment requests, API errors, event IDs, timestamps and delivery attempts.
- **Needs connected merchant data:** Store order IDs, inventory/ERP sync status and deployment history.
- **Proposed intervention:** Trace failures, deduplicate events and route unresolved financial handoffs.
- **Limit:** A payment provider sees its event boundary; it cannot certify all connected systems.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Integration docs / webhooks / AP integrations; India; product-specific eligibility | 3/5 | Integration support exists; live configuration still needs testing.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Zoho — Books / Inventory; India / supported editions | 1/5 | Enabling / adjacent fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Low. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 01.2.2 — A delayed or repeated event creates the wrong order status

*Research hypothesis · Applies to: Online, B2B, Subscription*

- **Need:** Process each payment event reliably and resolve missing updates.
- **Observable signal:** Webhook retries; event age; duplicate order/payment references.
- **Outcome to measure:** Unmatched events; duplicate fulfillment; correction time.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration)


**Fintech role:** Direct — Payment integration / financial-system events

- **Observable in the relevant fintech product:** Payment requests, API errors, event IDs, timestamps and delivery attempts.
- **Needs connected merchant data:** Store order IDs, inventory/ERP sync status and deployment history.
- **Proposed intervention:** Trace failures, deduplicate events and route unresolved financial handoffs.
- **Limit:** A payment provider sees its event boundary; it cannot certify all connected systems.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Integration docs / webhooks / AP integrations; India; product-specific eligibility | 3/5 | Event handling enables recovery; merchant-side deduplication matters.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 01.2.3 — My store, stock tool and finance tool disagree after a sync fails

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Know which connection is stale and recover without overwriting good data.
- **Observable signal:** Last sync; failed jobs; conflicting identifiers; data freshness.
- **Outcome to measure:** Hours with stale data; manual repairs.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration)


**Fintech role:** Direct — Payment integration / financial-system events

- **Observable in the relevant fintech product:** Payment requests, API errors, event IDs, timestamps and delivery attempts.
- **Needs connected merchant data:** Store order IDs, inventory/ERP sync status and deployment history.
- **Proposed intervention:** Trace failures, deduplicate events and route unresolved financial handoffs.
- **Limit:** A payment provider sees its event boundary; it cannot certify all connected systems.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Integration docs / webhooks / AP integrations; India; product-specific eligibility | 2/5 | ERP links cover some finance handoffs, not every stock system.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Stripe — Payments / Billing; US / supported markets | 2/5 | Partial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 01.2.4 — I depend on a developer for every payment or workflow change

*Research hypothesis · Applies to: Solo, Online, B2B*

- **Need:** Make supported changes with clear previews, testing and rollback.
- **Observable signal:** Change backlog; configuration errors; agency turnaround.
- **Outcome to measure:** Time and cost per safe change.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration)


**Fintech role:** Direct — Payment integration / financial-system events

- **Observable in the relevant fintech product:** Payment requests, API errors, event IDs, timestamps and delivery attempts.
- **Needs connected merchant data:** Store order IDs, inventory/ERP sync status and deployment history.
- **Proposed intervention:** Trace failures, deduplicate events and route unresolved financial handoffs.
- **Limit:** A payment provider sees its event boundary; it cannot certify all connected systems.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Integration docs / webhooks / AP integrations; India; product-specific eligibility | 3/5 | Hosted and configured flows reduce effort; custom changes remain.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

### 01.3. 1C. Roles and accountable delegation

**Latent need hypothesis:** I want to delegate routine work without handing over control of all my money and customer data.

**Related product/workflow sources:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments)

#### 01.3.1 — Staff share the owner login because roles are inconvenient

*Research hypothesis · Applies to: Retail, B2B, Service*

- **Need:** Give each person only the permissions required for their work.
- **Observable signal:** Shared logins; broad roles; owner-only bottlenecks.
- **Outcome to measure:** Unauthorized changes; approval waiting time.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments)


**Fintech role:** Direct — Account permissions / payment approvals

- **Observable in the relevant fintech product:** Users, roles, approval queues and recorded financial actions.
- **Needs connected merchant data:** Employment status, agency contracts, delegated limits and escalation contacts.
- **Proposed intervention:** Recommend least-privilege access and route time-sensitive approvals.
- **Limit:** Revoking one account does not revoke every external credential.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dashboard roles / AP approvals / agent controls; India; product-specific eligibility | 3/5 | Separate roles reduce shared login dependence.  Confidence: Medium. | [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Teams and roles; US / supported markets | 4/5 | Strong fit for this specific pain. Scoped dashboard access and team administration. Outside systems and all workflow approvals are not covered. Confidence: Medium. | [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

#### 01.3.2 — An employee or agency leaves but still has access

*Research hypothesis · Applies to: All*

- **Need:** Revoke access across tools and reassign unfinished work.
- **Observable signal:** Inactive users; unrevoked keys; orphaned tasks.
- **Outcome to measure:** Time to remove access; unattended work.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments)


**Fintech role:** Direct — Account permissions / payment approvals

- **Observable in the relevant fintech product:** Users, roles, approval queues and recorded financial actions.
- **Needs connected merchant data:** Employment status, agency contracts, delegated limits and escalation contacts.
- **Proposed intervention:** Recommend least-privilege access and route time-sensitive approvals.
- **Limit:** Revoking one account does not revoke every external credential.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dashboard roles / AP approvals / agent controls; India; product-specific eligibility | 3/5 | Removal of provider access is supported; external offboarding remains.  Confidence: Medium. | [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Teams and roles; US / supported markets | 4/5 | Strong fit for this specific pain. Scoped dashboard access and team administration. Outside systems and all workflow approvals are not covered. Confidence: Medium. | [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

#### 01.3.3 — I cannot tell who changed an offer, refund or bank detail

*Research hypothesis · Applies to: All*

- **Need:** Keep a readable record of actor, reason, time and approval.
- **Observable signal:** Audit logs; configuration changes; action ownership.
- **Outcome to measure:** Investigation time; unexplained changes.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments)


**Fintech role:** Direct — Account permissions / payment approvals

- **Observable in the relevant fintech product:** Users, roles, approval queues and recorded financial actions.
- **Needs connected merchant data:** Employment status, agency contracts, delegated limits and escalation contacts.
- **Proposed intervention:** Recommend least-privilege access and route time-sensitive approvals.
- **Limit:** Revoking one account does not revoke every external credential.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dashboard roles / AP approvals / agent controls; India; product-specific eligibility | 2/5 | Some controls/logs exist; one audit trail for every action is unverified.  Confidence: Medium. | [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Teams and roles; US / supported markets | 3/5 | Substantial fit for this specific pain. Scoped dashboard access and team administration. Outside systems and all workflow approvals are not covered. Confidence: Medium. | [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

#### 01.3.4 — An approval is stuck because only I can authorize it

*Research hypothesis · Applies to: Retail, B2B, Service*

- **Need:** Delegate bounded decisions and route genuine exceptions to a backup.
- **Observable signal:** Approval queue age; absence schedules; threshold breaches.
- **Outcome to measure:** Decision turnaround; overdue approvals.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments)


**Fintech role:** Direct — Account permissions / payment approvals

- **Observable in the relevant fintech product:** Users, roles, approval queues and recorded financial actions.
- **Needs connected merchant data:** Employment status, agency contracts, delegated limits and escalation contacts.
- **Proposed intervention:** Recommend least-privilege access and route time-sensitive approvals.
- **Limit:** Revoking one account does not revoke every external credential.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dashboard roles / AP approvals / agent controls; India; product-specific eligibility | 4/5 | AP has multi-layer approvals; governance still defines delegates.  Confidence: Medium. | [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Teams and roles; US / supported markets | 2/5 | Partial fit for this specific pain. Scoped dashboard access and team administration. Outside systems and all workflow approvals are not covered. Confidence: Medium. | [F12: Stripe](https://docs.stripe.com/get-started/account/teams) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

### 01.4. 1D. Data permission and customer trust

**Latent need hypothesis:** I need to know what a tool is using and be able to withdraw access without losing my business history.

**Related product/workflow sources:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/)

#### 01.4.1 — I do not understand which customer data a new agent can read

*Research hypothesis · Applies to: All*

- **Need:** See the data sources, fields, purpose and permission scope before enabling it.
- **Observable signal:** Connected accounts; requested scopes; data lineage.
- **Outcome to measure:** Permission comprehension; unnecessary access removed.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/)


**Fintech role:** Direct — Financial-data consent / connected apps

- **Observable in the relevant fintech product:** Provider-held records, access scopes and authorization events where exposed.
- **Needs connected merchant data:** Consent records across marketing tools, contracts, retention and model-training terms.
- **Proposed intervention:** Show a data-access ledger and propagate permitted revocation requests.
- **Limit:** Service processing, sharing, retention and model training are distinct permissions.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio guardrails / connected data; India; product-specific eligibility | 2/5 | Merchant-scoped controls are described; a complete data-access view needs checking.  Confidence: Medium. | [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Setu — Account Aggregator gateway; India | 3/5 | Substantial fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Medium. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |
| Plaid — Financial data APIs; US / supported markets | 3/5 | Substantial fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Medium. | [F20: Plaid](https://plaid.com/products/) |

#### 01.4.2 — A customer opts out in one tool but another keeps messaging

*Research hypothesis · Applies to: Retail, Online, Subscription*

- **Need:** Carry communication preferences across every active workflow.
- **Observable signal:** Consent records; suppressions; conflicting customer identifiers.
- **Outcome to measure:** Messages after opt-out; complaint rate.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/)


**Fintech role:** Direct — Financial-data consent / connected apps

- **Observable in the relevant fintech product:** Provider-held records, access scopes and authorization events where exposed.
- **Needs connected merchant data:** Consent records across marketing tools, contracts, retention and model-training terms.
- **Proposed intervention:** Show a data-access ledger and propagate permitted revocation requests.
- **Limit:** Service processing, sharing, retention and model training are distinct permissions.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio guardrails / connected data; India; product-specific eligibility | 2/5 | Agent communication checks exist; cross-tool opt-out synchronization is unverified.  Confidence: Medium. | [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Setu — Account Aggregator gateway; India | 1/5 | Enabling / adjacent fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Low. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |
| Plaid — Financial data APIs; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Low. | [F20: Plaid](https://plaid.com/products/) |

#### 01.4.3 — I cannot distinguish using my data for my business from model training

*Research hypothesis · Applies to: All*

- **Need:** Get explicit product-specific answers about processing, retention and training use.
- **Observable signal:** Contracts; privacy notices; settings; provider responses.
- **Outcome to measure:** Unresolved data-use questions before activation.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/)


**Fintech role:** Direct — Financial-data consent / connected apps

- **Observable in the relevant fintech product:** Provider-held records, access scopes and authorization events where exposed.
- **Needs connected merchant data:** Consent records across marketing tools, contracts, retention and model-training terms.
- **Proposed intervention:** Show a data-access ledger and propagate permitted revocation requests.
- **Limit:** Service processing, sharing, retention and model training are distinct permissions.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio guardrails / connected data; India; product-specific eligibility | 1/5 | Guardrail material does not settle all training and retention terms.  Confidence: Low. | [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Setu — Account Aggregator gateway; India | 1/5 | Enabling / adjacent fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Low. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |
| Plaid — Financial data APIs; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Low. | [F20: Plaid](https://plaid.com/products/) |

#### 01.4.4 — A vendor change leaves my customer records and history trapped

*Research hypothesis · Applies to: All*

- **Need:** Export usable records and preserve consent and transaction links.
- **Observable signal:** Export completeness; stable IDs; migration errors.
- **Outcome to measure:** Migration downtime; records lost.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/)


**Fintech role:** Direct — Financial-data consent / connected apps

- **Observable in the relevant fintech product:** Provider-held records, access scopes and authorization events where exposed.
- **Needs connected merchant data:** Consent records across marketing tools, contracts, retention and model-training terms.
- **Proposed intervention:** Show a data-access ledger and propagate permitted revocation requests.
- **Limit:** Service processing, sharing, retention and model training are distinct permissions.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio guardrails / connected data; India; product-specific eligibility | 2/5 | Connected records help; complete portability across vendors is unverified.  Confidence: Medium. | [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Setu — Account Aggregator gateway; India | 2/5 | Partial fit for this specific pain. Consent and financial-data fetch infrastructure. Requires eligible participants and permitted purpose; not unrestricted data access. Confidence: Medium. | [F21: Setu](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api) |
| Plaid — Financial data APIs; US / supported markets | 2/5 | Partial fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Medium. | [F20: Plaid](https://plaid.com/products/) |

### 01.5. 1E. Safe automation and continuity

**Latent need hypothesis:** I need a reliable fallback and freedom to stop an automation without stopping the whole business.

**Related product/workflow sources:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

#### 01.5.1 — An AI recommendation sounds confident but uses stale or wrong facts

*Research hypothesis · Applies to: All*

- **Need:** See the source, timestamp and uncertainty before trusting the answer.
- **Observable signal:** Source freshness; conflicting totals; unsupported claims.
- **Outcome to measure:** Wrong recommendations accepted; correction time.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Agent execution / financial continuity

- **Observable in the relevant fintech product:** Inputs, action logs, permissions, statuses and failure codes.
- **Needs connected merchant data:** Source freshness, business exceptions, fallback owners and recovery procedures.
- **Proposed intervention:** Require evidence-linked recommendations, action limits and a human fallback.
- **Limit:** Logs and approvals reduce risk but do not establish guaranteed accuracy or uptime.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / RazorpayX agents; India; product-specific eligibility | 2/5 | Conversational summaries need source freshness and calculation checks.  Confidence: Low–medium: rollout or access needs validation. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Square — Square AI; US edition | 2/5 | Partial fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Medium. | [F17: Square](https://squareup.com/us/en/ai) |

#### 01.5.2 — An agent acts beyond the amount or task I intended

*Research hypothesis · Applies to: All*

- **Need:** Define allowed actions, money limits, review gates and immediate pause.
- **Observable signal:** Scope violations; amount thresholds; action logs.
- **Outcome to measure:** Blocked unsafe actions; unwanted actions executed.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Agent execution / financial continuity

- **Observable in the relevant fintech product:** Inputs, action logs, permissions, statuses and failure codes.
- **Needs connected merchant data:** Source freshness, business exceptions, fallback owners and recovery procedures.
- **Proposed intervention:** Require evidence-linked recommendations, action limits and a human fallback.
- **Limit:** Logs and approvals reduce risk but do not establish guaranteed accuracy or uptime.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / RazorpayX agents; India; product-specific eligibility | 3/5 | Scoped actions and approval controls are described; rollout varies.  Confidence: Low–medium: rollout or access needs validation. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Square — Square AI; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Low. | [F17: Square](https://squareup.com/us/en/ai) |

#### 01.5.3 — Automation fails halfway and nobody owns the remaining work

*Research hypothesis · Applies to: All*

- **Need:** See partial completion, safe retry state and a named human handoff.
- **Observable signal:** Failed actions; retry count; unresolved queue age.
- **Outcome to measure:** Time to recover; duplicate actions.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Agent execution / financial continuity

- **Observable in the relevant fintech product:** Inputs, action logs, permissions, statuses and failure codes.
- **Needs connected merchant data:** Source freshness, business exceptions, fallback owners and recovery procedures.
- **Proposed intervention:** Require evidence-linked recommendations, action limits and a human fallback.
- **Limit:** Logs and approvals reduce risk but do not establish guaranteed accuracy or uptime.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / RazorpayX agents; India; product-specific eligibility | 2/5 | Logs and pause help; complete cross-system compensation is unverified.  Confidence: Low–medium: rollout or access needs validation. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Square — Square AI; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Low. | [F17: Square](https://squareup.com/us/en/ai) |

#### 01.5.4 — An outage or account lockout leaves me unable to operate

*Research hypothesis · Applies to: All*

- **Need:** Keep an incident plan, recovery access and an appropriate fallback channel.
- **Observable signal:** Provider status; device/network health; recovery contacts.
- **Outcome to measure:** Trading downtime; time to restore essential operations.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Agent execution / financial continuity

- **Observable in the relevant fintech product:** Inputs, action logs, permissions, statuses and failure codes.
- **Needs connected merchant data:** Source freshness, business exceptions, fallback owners and recovery procedures.
- **Proposed intervention:** Require evidence-linked recommendations, action limits and a human fallback.
- **Limit:** Logs and approvals reduce risk but do not establish guaranteed accuracy or uptime.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / RazorpayX agents; India; product-specific eligibility | 2/5 | Provider support does not replace an independent operating fallback.  Confidence: Low–medium: rollout or access needs validation. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Square — Square AI; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Low. | [F17: Square](https://squareup.com/us/en/ai) |

## 02. Choose the offer and prepare supply

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=4-265)

**Job:** Have the right product, service capacity and economics ready before selling.

**Boundary:** Owns assortment, base pricing, supplier readiness, inventory and capacity planning. Executing an accepted order belongs in 06; paying suppliers in 10.

**Illustrative moment:** Priya runs out of popular refills while gift sets sit unsold. A wholesale order looks attractive until she includes packing, shipping and credit terms.

**Razorpay coverage:** RazorpayX AP Automation covers supplier onboarding, purchase orders, invoice intake and matching. These are meaningful procurement capabilities. SKU demand, physical stock, product costing and capacity planning still require merchant operational systems.

[R10: Razorpay](https://razorpay.com/magic-checkout/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf), [F01: Razorpay](https://razorpay.com/x/ap-automation/)

### 02.1. 2A. Assortment and product readiness

**Latent need hypothesis:** I need to know which products deserve cash, shelf space and attention.

**Related product/workflow sources:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

#### 02.1.1 — I cannot tell whether a bestseller also makes money

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Compare contribution after product, fulfillment, channel and expected return costs.
- **Observable signal:** SKU sales; landed cost; discounts; shipping; returns.
- **Outcome to measure:** Contribution per SKU; loss-making sales.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Sales economics / inventory capital

- **Observable in the relevant fintech product:** Receipts, refunds, processing fees and payment-linked sales trends.
- **Needs connected merchant data:** SKU-level costs, inventory aging, variant catalog, returns and channel fees.
- **Proposed intervention:** Join cash outcomes to product costs and suggest stock or assortment reviews.
- **Limit:** Payment totals cannot identify SKU profit or prove future demand alone.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / RAY / AP financial inputs; India; product-specific eligibility | 2/5 | Sales and cost inputs help; full contribution modelling is unverified.  Confidence: Medium. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 02.1.2 — Slow products trap money that I need for popular products

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Identify aging stock and decide whether to bundle, transfer or stop reordering.
- **Observable signal:** Stock age; sell-through; replenishment lead time.
- **Outcome to measure:** Aged inventory value; working capital released.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Sales economics / inventory capital

- **Observable in the relevant fintech product:** Receipts, refunds, processing fees and payment-linked sales trends.
- **Needs connected merchant data:** SKU-level costs, inventory aging, variant catalog, returns and channel fees.
- **Proposed intervention:** Join cash outcomes to product costs and suggest stock or assortment reviews.
- **Limit:** Payment totals cannot identify SKU profit or prove future demand alone.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / RAY / AP financial inputs; India; product-specific eligibility | 1/5 | Receipts reveal cash timing; inventory aging needs a separate source.  Confidence: Low. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 02.1.3 — Product variants and descriptions differ across channels

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Maintain accurate, consistent specifications and sellable variants.
- **Observable signal:** Catalog mismatch; missing attributes; rejected listings.
- **Outcome to measure:** Listing errors; wrong-item orders.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Sales economics / inventory capital

- **Observable in the relevant fintech product:** Receipts, refunds, processing fees and payment-linked sales trends.
- **Needs connected merchant data:** SKU-level costs, inventory aging, variant catalog, returns and channel fees.
- **Proposed intervention:** Join cash outcomes to product costs and suggest stock or assortment reviews.
- **Limit:** Payment totals cannot identify SKU profit or prove future demand alone.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / RAY / AP financial inputs; India; product-specific eligibility | 1/5 | Billing/catalog inputs are adjacent; universal catalog synchronization is unverified.  Confidence: Low. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 02.1.4 — I introduce a product without knowing whether demand will repeat

*Research hypothesis · Applies to: Retail, Online, Subscription*

- **Need:** Test demand with limited exposure and avoid mistaking launch novelty for durable demand.
- **Observable signal:** First/repeat sales; cohorts; waitlist; return reasons.
- **Outcome to measure:** Repeat demand; unsold launch inventory.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Sales economics / inventory capital

- **Observable in the relevant fintech product:** Receipts, refunds, processing fees and payment-linked sales trends.
- **Needs connected merchant data:** SKU-level costs, inventory aging, variant catalog, returns and channel fees.
- **Proposed intervention:** Join cash outcomes to product costs and suggest stock or assortment reviews.
- **Limit:** Payment totals cannot identify SKU profit or prove future demand alone.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / RAY / AP financial inputs; India; product-specific eligibility | 1/5 | Aggregate trends are not product-level repeat-demand validation.  Confidence: Low. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 2/5 | Partial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

### 02.2. 2B. Price, bundles and commercial terms

**Latent need hypothesis:** I need prices that customers accept and that leave enough money to run the business.

**Related product/workflow sources:** [R07: Razorpay](https://razorpay.com/engage/), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

#### 02.2.1 — My selling price does not reflect rising input costs

*Research hypothesis · Applies to: All*

- **Need:** See margin erosion before deciding whether to change price, pack size or supplier.
- **Observable signal:** Cost changes; margin by SKU; competitor context when permitted.
- **Outcome to measure:** Contribution margin; price-change conversion.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Pricing / financing / billing terms

- **Observable in the relevant fintech product:** Paid amounts, discounts, refunds and recurring billing events.
- **Needs connected merchant data:** Product costs, quantities, negotiated terms, service usage and fulfillment costs.
- **Proposed intervention:** Model net contribution and make terms or plan changes reviewable.
- **Limit:** Payment data does not determine willingness to pay or the optimal price.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Offers / Subscriptions / AP cost inputs; India; product-specific eligibility | 1/5 | Cost visibility is an input; repricing recommendations are unverified.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 2/5 | Partial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

#### 02.2.2 — A bundle sells well but gives away too much margin

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Understand bundle economics including component stock and discounts.
- **Observable signal:** Bundle mix; cost allocation; cannibalized standalone sales.
- **Outcome to measure:** Incremental contribution per bundle.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Pricing / financing / billing terms

- **Observable in the relevant fintech product:** Paid amounts, discounts, refunds and recurring billing events.
- **Needs connected merchant data:** Product costs, quantities, negotiated terms, service usage and fulfillment costs.
- **Proposed intervention:** Model net contribution and make terms or plan changes reviewable.
- **Limit:** Payment data does not determine willingness to pay or the optimal price.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Offers / Subscriptions / AP cost inputs; India; product-specific eligibility | 2/5 | Offer tooling exists; optimal bundle economics need external costs.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 2/5 | Partial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

#### 02.2.3 — Wholesale quotes ignore minimum quantities and special handling

*Research hypothesis · Applies to: B2B*

- **Need:** Price order-specific packing, delivery and credit costs explicitly.
- **Observable signal:** Quote revisions; order size; special requests; payment terms.
- **Outcome to measure:** Quote-to-order margin; exceptions per quote.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Pricing / financing / billing terms

- **Observable in the relevant fintech product:** Paid amounts, discounts, refunds and recurring billing events.
- **Needs connected merchant data:** Product costs, quantities, negotiated terms, service usage and fulfillment costs.
- **Proposed intervention:** Model net contribution and make terms or plan changes reviewable.
- **Limit:** Payment data does not determine willingness to pay or the optimal price.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Offers / Subscriptions / AP cost inputs; India; product-specific eligibility | 2/5 | Supplier-side records help; customer quote costing is separate.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 2/5 | Partial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

#### 02.2.4 — Subscription plans create billing confusion or unprofitable usage

*Research hypothesis · Applies to: Subscription, Service*

- **Need:** Align plan limits, included value and charging terms before selling.
- **Observable signal:** Usage distribution; plan costs; customer questions.
- **Outcome to measure:** Margin by plan; billing complaints.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Pricing / financing / billing terms

- **Observable in the relevant fintech product:** Paid amounts, discounts, refunds and recurring billing events.
- **Needs connected merchant data:** Product costs, quantities, negotiated terms, service usage and fulfillment costs.
- **Proposed intervention:** Model net contribution and make terms or plan changes reviewable.
- **Limit:** Payment data does not determine willingness to pay or the optimal price.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Offers / Subscriptions / AP cost inputs; India; product-specific eligibility | 3/5 | Recurring plans are supported; usage economics remain a separate analysis.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 4/5 | Strong fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

### 02.3. 2C. Demand and replenishment

**Latent need hypothesis:** I need enough stock for likely demand without betting the business on an optimistic forecast.

**Related product/workflow sources:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I04: Shiprocket](https://www.shiprocket.in/features/)

#### 02.3.1 — I discover a stockout only after customers try to buy

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Anticipate replenishment using demand, supplier lead time and safety stock.
- **Observable signal:** Available stock; sales velocity; lead-time variation.
- **Outcome to measure:** Stockout days; unfulfilled demand.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Inventory financing / reorder decisions

- **Observable in the relevant fintech product:** Sales receipts, payable commitments and funding availability.
- **Needs connected merchant data:** Stock by SKU/location, lead times, expiry, shrinkage and demand calendar.
- **Proposed intervention:** Estimate cash needed for replenishment and flag financed stock at risk.
- **Limit:** Financing cannot correct physical counts or create missing demand.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment / BillMe / AP inputs; India; product-specific eligibility | 1/5 | Sales inputs help; authoritative stockout prevention is not established.  Confidence: Low. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 4/5 | Strong fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| CredAble — Working-capital programs; India / partner programs | 1/5 | Enabling / adjacent fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Low. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

#### 02.3.2 — Festival demand makes normal reorder rules unreliable

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Use scenarios and uncertainty rather than treating last month as the forecast.
- **Observable signal:** Seasonality; campaigns; forecast ranges; stock cover.
- **Outcome to measure:** Lost peak sales; leftover seasonal stock.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Inventory financing / reorder decisions

- **Observable in the relevant fintech product:** Sales receipts, payable commitments and funding availability.
- **Needs connected merchant data:** Stock by SKU/location, lead times, expiry, shrinkage and demand calendar.
- **Proposed intervention:** Estimate cash needed for replenishment and flag financed stock at risk.
- **Limit:** Financing cannot correct physical counts or create missing demand.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment / BillMe / AP inputs; India; product-specific eligibility | 1/5 | Forecasting revenue is adjacent to festival SKU replenishment.  Confidence: Low. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 2/5 | Partial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| CredAble — Working-capital programs; India / partner programs | 2/5 | Partial fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Medium. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

#### 02.3.3 — Online and shop stock are counted separately and oversold

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Maintain available-to-promise stock after reservations and transfers.
- **Observable signal:** Stock movements; reservations; sync lag.
- **Outcome to measure:** Oversell cancellations; stock accuracy.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Inventory financing / reorder decisions

- **Observable in the relevant fintech product:** Sales receipts, payable commitments and funding availability.
- **Needs connected merchant data:** Stock by SKU/location, lead times, expiry, shrinkage and demand calendar.
- **Proposed intervention:** Estimate cash needed for replenishment and flag financed stock at risk.
- **Limit:** Financing cannot correct physical counts or create missing demand.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment / BillMe / AP inputs; India; product-specific eligibility | 1/5 | Cross-location inventory consistency is not established in reviewed products.  Confidence: Low. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 4/5 | Strong fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| CredAble — Working-capital programs; India / partner programs | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Credit access does not establish good supplier performance or profitable growth. Confidence: Low. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

#### 02.3.4 — Expiry, breakage or shrinkage makes recorded stock misleading

*Research hypothesis · Applies to: Retail, Online, Food*

- **Need:** Distinguish physical, sellable, reserved and damaged units.
- **Observable signal:** Cycle counts; batch expiry; damage logs.
- **Outcome to measure:** Stock write-offs; inventory variance.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Inventory financing / reorder decisions

- **Observable in the relevant fintech product:** Sales receipts, payable commitments and funding availability.
- **Needs connected merchant data:** Stock by SKU/location, lead times, expiry, shrinkage and demand calendar.
- **Proposed intervention:** Estimate cash needed for replenishment and flag financed stock at risk.
- **Limit:** Financing cannot correct physical counts or create missing demand.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment / BillMe / AP inputs; India; product-specific eligibility | 1/5 | Financial records do not independently detect expiry or shrinkage.  Confidence: Low. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |
| CredAble — Working-capital programs; India / partner programs | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Credit access does not establish good supplier performance or profitable growth. Confidence: Low. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

### 02.4. 2D. Suppliers and purchasing readiness

**Latent need hypothesis:** I need reliable supply and a way to recover when a supplier fails.

**Related product/workflow sources:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)

#### 02.4.1 — A supplier promises a date but repeatedly delivers late

*Research hypothesis · Applies to: Retail, Online, Food*

- **Need:** Track confirmed lead times and prepare alternatives before stock runs out.
- **Observable signal:** Purchase orders; promised/actual arrival; defect rates.
- **Outcome to measure:** Supplier reliability; stockout exposure.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Procurement / purchase orders / supplier finance

- **Observable in the relevant fintech product:** Approved suppliers, POs, invoices, receipts and payment terms if using AP.
- **Needs connected merchant data:** Quality inspection, supplier promises, landed costs and alternative quotations.
- **Proposed intervention:** Match commercial evidence and compare purchase financing or terms.
- **Limit:** A finance platform cannot ensure the supplier actually delivers acceptable goods.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / Source to Pay; India; product-specific eligibility | 2/5 | PO records support monitoring; delivery performance scoring is not established.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| CredAble — Working-capital programs; India / partner programs | 1/5 | Enabling / adjacent fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Low. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

#### 02.4.2 — The supplier minimum order is larger than I can sell

*Research hypothesis · Applies to: Solo, Retail, Online*

- **Need:** Compare purchase quantity, storage, expiry and cash commitment.
- **Observable signal:** Minimum quantities; demand forecast; shelf life.
- **Outcome to measure:** Excess purchase value; stock turnover.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Procurement / purchase orders / supplier finance

- **Observable in the relevant fintech product:** Approved suppliers, POs, invoices, receipts and payment terms if using AP.
- **Needs connected merchant data:** Quality inspection, supplier promises, landed costs and alternative quotations.
- **Proposed intervention:** Match commercial evidence and compare purchase financing or terms.
- **Limit:** A finance platform cannot ensure the supplier actually delivers acceptable goods.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / Source to Pay; India; product-specific eligibility | 2/5 | PO controls help; reducing minimum orders or financing all stock is not promised.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| CredAble — Working-capital programs; India / partner programs | 3/5 | Substantial fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Medium. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

#### 02.4.3 — The received batch is short or defective and evidence is scattered

*Research hypothesis · Applies to: Retail, Online, Food*

- **Need:** Record receiving checks and resolve quantity/quality differences.
- **Observable signal:** Purchase order; goods receipt; photos; supplier correspondence.
- **Outcome to measure:** Supplier credit recovered; defect resolution time.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Procurement / purchase orders / supplier finance

- **Observable in the relevant fintech product:** Approved suppliers, POs, invoices, receipts and payment terms if using AP.
- **Needs connected merchant data:** Quality inspection, supplier promises, landed costs and alternative quotations.
- **Proposed intervention:** Match commercial evidence and compare purchase financing or terms.
- **Limit:** A finance platform cannot ensure the supplier actually delivers acceptable goods.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / Source to Pay; India; product-specific eligibility | 3/5 | Matching improves discrepancy detection; quality evidence still comes from operations.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| CredAble — Working-capital programs; India / partner programs | 1/5 | Enabling / adjacent fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Low. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

#### 02.4.4 — I want backup suppliers but cannot compare true landed cost

*Research hypothesis · Applies to: Retail, Online, B2B*

- **Need:** Compare quality, freight, duties, lead time and reliability consistently.
- **Observable signal:** Quotes; transport; taxes/duties; historical performance.
- **Outcome to measure:** Landed cost; supply concentration.
- **Related workflow evidence:** [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Procurement / purchase orders / supplier finance

- **Observable in the relevant fintech product:** Approved suppliers, POs, invoices, receipts and payment terms if using AP.
- **Needs connected merchant data:** Quality inspection, supplier promises, landed costs and alternative quotations.
- **Proposed intervention:** Match commercial evidence and compare purchase financing or terms.
- **Limit:** A finance platform cannot ensure the supplier actually delivers acceptable goods.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / Source to Pay; India; product-specific eligibility | 2/5 | Purchase records help comparisons; complete landed-cost sourcing remains partial.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| CredAble — Working-capital programs; India / partner programs | 2/5 | Partial fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Medium. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |

### 02.5. 2E. Service and production capacity

**Latent need hypothesis:** I need to sell only the capacity I can reliably deliver.

**Related product/workflow sources:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html)

#### 02.5.1 — A service slot appears available but the right employee is not

*Research hypothesis · Applies to: Service*

- **Need:** Match bookings to skills, calendars and required resources.
- **Observable signal:** Staff skills; working hours; room/equipment availability.
- **Outcome to measure:** Double bookings; rescheduling rate.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html)


**Fintech role:** Adjacent — Capacity economics / wage and asset financing

- **Observable in the relevant fintech product:** Payroll costs, payment demand by time and capital spending.
- **Needs connected merchant data:** Staff skills, rosters, bookings, machine availability and production dependencies.
- **Proposed intervention:** Quantify the cost of idle capacity or an interruption; support funding decisions.
- **Limit:** Finance can enable capacity but cannot create staff availability or repair machinery.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payroll / payments / capital-adjacent inputs; India; product-specific eligibility | 1/5 | Payroll records do not determine bookable skills or shifts.  Confidence: Low. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| Square — Appointments; US edition | 4/5 | Strong fit for this specific pain. Booking and staff availability connect to service payments. Not an industrial capacity planner or staffing guarantee. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments) |
| Plum — Business insurance / benefits; India | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Low. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

#### 02.5.2 — Peak demand overwhelms production even though inputs are available

*Research hypothesis · Applies to: Food, B2B, Retail*

- **Need:** Plan realistic daily throughput and promise capacity accordingly.
- **Observable signal:** Work-in-progress; task duration; equipment constraints.
- **Outcome to measure:** Backlog; on-time completion.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html)


**Fintech role:** Adjacent — Capacity economics / wage and asset financing

- **Observable in the relevant fintech product:** Payroll costs, payment demand by time and capital spending.
- **Needs connected merchant data:** Staff skills, rosters, bookings, machine availability and production dependencies.
- **Proposed intervention:** Quantify the cost of idle capacity or an interruption; support funding decisions.
- **Limit:** Finance can enable capacity but cannot create staff availability or repair machinery.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payroll / payments / capital-adjacent inputs; India; product-specific eligibility | 1/5 | Payment peaks are a signal; production scheduling is outside verified scope.  Confidence: Low. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| Square — Appointments; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Booking and staff availability connect to service payments. Not an industrial capacity planner or staffing guarantee. Confidence: Low. | [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments) |
| Plum — Business insurance / benefits; India | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Low. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

#### 02.5.3 — Quiet hours waste paid staff time and fixed capacity

*Research hypothesis · Applies to: Service, Food*

- **Need:** Recognize unused capacity and test suitable offers or schedules.
- **Observable signal:** Utilization by hour; labor availability; demand patterns.
- **Outcome to measure:** Capacity utilization; contribution per staffed hour.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html)


**Fintech role:** Adjacent — Capacity economics / wage and asset financing

- **Observable in the relevant fintech product:** Payroll costs, payment demand by time and capital spending.
- **Needs connected merchant data:** Staff skills, rosters, bookings, machine availability and production dependencies.
- **Proposed intervention:** Quantify the cost of idle capacity or an interruption; support funding decisions.
- **Limit:** Finance can enable capacity but cannot create staff availability or repair machinery.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payroll / payments / capital-adjacent inputs; India; product-specific eligibility | 1/5 | Cost and receipt data enable analysis; scheduling action is unverified.  Confidence: Low. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| Square — Appointments; US edition | 3/5 | Substantial fit for this specific pain. Booking and staff availability connect to service payments. Not an industrial capacity planner or staffing guarantee. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments) |
| Plum — Business insurance / benefits; India | 1/5 | Enabling / adjacent fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Low. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

#### 02.5.4 — One absent employee or broken machine disrupts every commitment

*Research hypothesis · Applies to: Service, Food, B2B*

- **Need:** Create backup capacity and early escalation for critical dependencies.
- **Observable signal:** Single points of failure; absence; maintenance status.
- **Outcome to measure:** Cancelled commitments; recovery time.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html)


**Fintech role:** Adjacent — Capacity economics / wage and asset financing

- **Observable in the relevant fintech product:** Payroll costs, payment demand by time and capital spending.
- **Needs connected merchant data:** Staff skills, rosters, bookings, machine availability and production dependencies.
- **Proposed intervention:** Quantify the cost of idle capacity or an interruption; support funding decisions.
- **Limit:** Finance can enable capacity but cannot create staff availability or repair machinery.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payroll / payments / capital-adjacent inputs; India; product-specific eligibility | 1/5 | Finance can support replacement capacity; interruption prevention remains operational.  Confidence: Low. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| Square — Appointments; US edition | 2/5 | Partial fit for this specific pain. Booking and staff availability connect to service payments. Not an industrial capacity planner or staffing guarantee. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments) |
| Plum — Business insurance / benefits; India | 2/5 | Partial fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Medium. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

## 03. Acquire qualified new demand

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-310)

**Job:** Help suitable new customers discover and trust the business at an affordable cost.

**Boundary:** Owns discovery through qualified interest from prospective customers. Checkout friction belongs in 04; campaigns to previous buyers in 09.

**Illustrative moment:** Priya buys ads but sees visits without profitable first orders. She cannot tell whether a creator campaign brought customers or only views.

**Razorpay coverage:** Razorpay Engage supports acquisition and transaction-led promotions; Magic Checkout affects later conversion. GoKwik and commerce tools span more channels. No blanket claim that Razorpay lacks marketing or AI campaigns.

[R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

### 03.1. 3A. Discovery and channel access

**Latent need hypothesis:** I need a dependable stream of appropriate prospects beyond my existing contacts.

**Related product/workflow sources:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

#### 03.1.1 — People who would value my product never discover the business

*Research hypothesis · Applies to: Solo, Retail, Online, Service*

- **Need:** Reach a relevant audience through channels the merchant can maintain.
- **Observable signal:** Qualified visits; local discovery; inquiry sources.
- **Outcome to measure:** New qualified prospects; first-order contribution.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Payment-linked discovery / merchant distribution

- **Observable in the relevant fintech product:** Transactions by channel and identified new customers within the provider footprint.
- **Needs connected merchant data:** Audience reach, catalog, location, ad exposure and marketplace conditions.
- **Proposed intervention:** Identify undersupplied channels and assess acquisition economics with consent.
- **Limit:** A processor does not observe every non-buyer or have automatic cross-merchant marketing rights.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / agentic commerce; India; product-specific eligibility | 2/5 | Engagement and new commerce channels help; qualified reach is not guaranteed.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R20: Razorpay](https://razorpay.com/sprint/26) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Pine Labs — Affordability-led merchant reach; India | 1/5 | Enabling / adjacent fit for this specific pain. Financing options can attract eligible high-value buyers. Does not independently supply general discovery or ad distribution. Confidence: Low. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |

#### 03.1.2 — My business depends on one marketplace or advertising platform

*Research hypothesis · Applies to: Online, B2B*

- **Need:** Understand channel concentration and test affordable alternatives.
- **Observable signal:** Revenue/lead share by channel; policy interruptions.
- **Outcome to measure:** Concentration risk; profitable channel diversity.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Payment-linked discovery / merchant distribution

- **Observable in the relevant fintech product:** Transactions by channel and identified new customers within the provider footprint.
- **Needs connected merchant data:** Audience reach, catalog, location, ad exposure and marketplace conditions.
- **Proposed intervention:** Identify undersupplied channels and assess acquisition economics with consent.
- **Limit:** A processor does not observe every non-buyer or have automatic cross-merchant marketing rights.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / agentic commerce; India; product-specific eligibility | 1/5 | Multiple payment channels do not eliminate platform dependence.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R20: Razorpay](https://razorpay.com/sprint/26) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Pine Labs — Affordability-led merchant reach; India | 1/5 | Enabling / adjacent fit for this specific pain. Financing options can attract eligible high-value buyers. Does not independently supply general discovery or ad distribution. Confidence: Low. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |

#### 03.1.3 — My offline shop is invisible to nearby people ready to buy

*Research hypothesis · Applies to: Retail, Food, Service*

- **Need:** Keep location, hours, availability and contact information discoverable.
- **Observable signal:** Local inquiries; inaccurate listings; visit-to-sale records.
- **Outcome to measure:** Qualified footfall; first visits converted.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Payment-linked discovery / merchant distribution

- **Observable in the relevant fintech product:** Transactions by channel and identified new customers within the provider footprint.
- **Needs connected merchant data:** Audience reach, catalog, location, ad exposure and marketplace conditions.
- **Proposed intervention:** Identify undersupplied channels and assess acquisition economics with consent.
- **Limit:** A processor does not observe every non-buyer or have automatic cross-merchant marketing rights.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / agentic commerce; India; product-specific eligibility | 1/5 | No complete local-intent acquisition workflow was verified.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R20: Razorpay](https://razorpay.com/sprint/26) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Pine Labs — Affordability-led merchant reach; India | 1/5 | Enabling / adjacent fit for this specific pain. Financing options can attract eligible high-value buyers. Does not independently supply general discovery or ad distribution. Confidence: Low. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |

#### 03.1.4 — My catalog is unsuitable for a new discovery channel

*Research hypothesis · Applies to: Online*

- **Need:** Provide accurate structured product information and supported buying paths.
- **Observable signal:** Missing attributes; feed errors; rejected products.
- **Outcome to measure:** Eligible listings; qualified traffic from new channel.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Payment-linked discovery / merchant distribution

- **Observable in the relevant fintech product:** Transactions by channel and identified new customers within the provider footprint.
- **Needs connected merchant data:** Audience reach, catalog, location, ad exposure and marketplace conditions.
- **Proposed intervention:** Identify undersupplied channels and assess acquisition economics with consent.
- **Limit:** A processor does not observe every non-buyer or have automatic cross-merchant marketing rights.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / agentic commerce; India; product-specific eligibility | 2/5 | Agentic commerce is a channel direction; catalog readiness remains merchant work.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R20: Razorpay](https://razorpay.com/sprint/26) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Pine Labs — Affordability-led merchant reach; India | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Does not independently supply general discovery or ad distribution. Confidence: Low. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |

### 03.2. 3B. Audience and qualification

**Latent need hypothesis:** I need buyers whose needs fit my offer, not just cheap clicks or a long lead list.

**Related product/workflow sources:** [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [R07: Razorpay](https://razorpay.com/engage/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

#### 03.2.1 — Ads bring people outside my service area or price range

*Research hypothesis · Applies to: All*

- **Need:** Target audiences compatible with delivery, budget and product use.
- **Observable signal:** Unserviceable leads; location; inquiry reasons.
- **Outcome to measure:** Qualified lead rate; wasted acquisition spend.
- **Related workflow evidence:** [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [R07: Razorpay](https://razorpay.com/engage/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Audience economics / transaction-derived qualification

- **Observable in the relevant fintech product:** Spend, order value, refunds and repeat transactions for connected identities.
- **Needs connected merchant data:** Advertising audiences, service area, product fit, inquiries and fulfillment costs.
- **Proposed intervention:** Compare audience contribution and route inquiries using verified business constraints.
- **Limit:** Payment correlation cannot establish a prospect’s intent or eligibility.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe segmentation; India; product-specific eligibility | 2/5 | Customer segmentation helps; prospect geography needs campaign data.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 03.2.2 — My team spends time on inquiries that will never become orders

*Research hypothesis · Applies to: B2B, Service*

- **Need:** Qualify intent and requirements without dismissing legitimate small buyers.
- **Observable signal:** Inquiry details; response history; quote acceptance.
- **Outcome to measure:** Time per qualified lead; qualification errors.
- **Related workflow evidence:** [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [R07: Razorpay](https://razorpay.com/engage/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Audience economics / transaction-derived qualification

- **Observable in the relevant fintech product:** Spend, order value, refunds and repeat transactions for connected identities.
- **Needs connected merchant data:** Advertising audiences, service area, product fit, inquiries and fulfillment costs.
- **Proposed intervention:** Compare audience contribution and route inquiries using verified business constraints.
- **Limit:** Payment correlation cannot establish a prospect’s intent or eligibility.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe segmentation; India; product-specific eligibility | 1/5 | General sales-lead qualification is not a verified core workflow.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 03.2.3 — My campaign attracts a use case the product does not actually serve

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Align acquisition promises with verified product suitability.
- **Observable signal:** Ad claims; inquiry needs; qualification feedback.
- **Outcome to measure:** Unsuitable leads; avoidable acquisition spend.
- **Related workflow evidence:** [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [R07: Razorpay](https://razorpay.com/engage/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Audience economics / transaction-derived qualification

- **Observable in the relevant fintech product:** Spend, order value, refunds and repeat transactions for connected identities.
- **Needs connected merchant data:** Advertising audiences, service area, product fit, inquiries and fulfillment costs.
- **Proposed intervention:** Compare audience contribution and route inquiries using verified business constraints.
- **Limit:** Payment correlation cannot establish a prospect’s intent or eligibility.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe segmentation; India; product-specific eligibility | 1/5 | Messaging tools do not determine product fit on their own.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 03.2.4 — I cannot tell whether a high-traffic audience is profitable

*Research hypothesis · Applies to: Online, Subscription*

- **Need:** Evaluate first-order economics and observed later value by acquisition cohort.
- **Observable signal:** Acquisition source; net sales; returns; contribution.
- **Outcome to measure:** Acquisition payback; cohort contribution.
- **Related workflow evidence:** [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [R07: Razorpay](https://razorpay.com/engage/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Audience economics / transaction-derived qualification

- **Observable in the relevant fintech product:** Spend, order value, refunds and repeat transactions for connected identities.
- **Needs connected merchant data:** Advertising audiences, service area, product fit, inquiries and fulfillment costs.
- **Proposed intervention:** Compare audience contribution and route inquiries using verified business constraints.
- **Limit:** Payment correlation cannot establish a prospect’s intent or eligibility.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe segmentation; India; product-specific eligibility | 2/5 | Transaction segments help; audience profit needs costs and acquisition data.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 2/5 | Partial fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Medium. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

### 03.3. 3C. Trust and pre-sale questions

**Latent need hypothesis:** I need to answer doubts convincingly while protecting the business from promises it cannot keep.

**Related product/workflow sources:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/)

#### 03.3.1 — New shoppers fear the store is unreliable

*Research hypothesis · Applies to: Solo, Online*

- **Need:** Show clear policies, identity, support access and credible proof.
- **Observable signal:** Trust-related questions; policy visits; checkout exits.
- **Outcome to measure:** Trust-related abandonment; inquiry conversion.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/)


**Fintech role:** Adjacent — Trust signals / pre-sale financial questions

- **Observable in the relevant fintech product:** Verified merchant account, receipts, complaints, payment and refund policies.
- **Needs connected merchant data:** Product facts, delivery promises, reviews, support context and store identity.
- **Proposed intervention:** Provide verifiable payment assurances and answer bounded policy questions.
- **Limit:** Account verification is not a guarantee of merchant quality or truthful advertising.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment identity / Agent Studio / feedback; India; product-specific eligibility | 2/5 | Recognizable payment and refund flows help; business reputation remains separate.  Confidence: Medium. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Gorgias — AI customer support; Global / supported ecommerce | 2/5 | Partial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 03.3.2 — Prospects ask the same questions but I answer too slowly

*Research hypothesis · Applies to: All*

- **Need:** Provide accurate answers about products, price and service limits.
- **Observable signal:** Response time; unanswered inquiries; recurring topics.
- **Outcome to measure:** Lead response time; assisted conversion.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/)


**Fintech role:** Adjacent — Trust signals / pre-sale financial questions

- **Observable in the relevant fintech product:** Verified merchant account, receipts, complaints, payment and refund policies.
- **Needs connected merchant data:** Product facts, delivery promises, reviews, support context and store identity.
- **Proposed intervention:** Provide verifiable payment assurances and answer bounded policy questions.
- **Limit:** Account verification is not a guarantee of merchant quality or truthful advertising.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment identity / Agent Studio / feedback; India; product-specific eligibility | 2/5 | Specialist agents cover defined workflows; broad presales support is partial.  Confidence: Medium. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Gorgias — AI customer support; Global / supported ecommerce | 4/5 | Strong fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 03.3.3 — An assistant invents a delivery date or product claim to close a sale

*Research hypothesis · Applies to: All*

- **Need:** Constrain answers to verified catalog, policies and serviceability.
- **Observable signal:** Unsupported answers; promised versus actual service.
- **Outcome to measure:** Misleading promises; complaint and cancellation rate.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/)


**Fintech role:** Adjacent — Trust signals / pre-sale financial questions

- **Observable in the relevant fintech product:** Verified merchant account, receipts, complaints, payment and refund policies.
- **Needs connected merchant data:** Product facts, delivery promises, reviews, support context and store identity.
- **Proposed intervention:** Provide verifiable payment assurances and answer bounded policy questions.
- **Limit:** Account verification is not a guarantee of merchant quality or truthful advertising.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment identity / Agent Studio / feedback; India; product-specific eligibility | 2/5 | Guardrails are described; hallucination prevention is not proven.  Confidence: Medium. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Gorgias — AI customer support; Global / supported ecommerce | 2/5 | Partial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 03.3.4 — Poor or fake reviews distort the first impression of my business

*Research hypothesis · Applies to: Retail, Online, Service, Food*

- **Need:** Understand legitimate feedback, respond and distinguish suspicious activity.
- **Observable signal:** Review patterns; verified orders; recurring concerns.
- **Outcome to measure:** Resolved concerns; trustworthy review coverage.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/)


**Fintech role:** Adjacent — Trust signals / pre-sale financial questions

- **Observable in the relevant fintech product:** Verified merchant account, receipts, complaints, payment and refund policies.
- **Needs connected merchant data:** Product facts, delivery promises, reviews, support context and store identity.
- **Proposed intervention:** Provide verifiable payment assurances and answer bounded policy questions.
- **Limit:** Account verification is not a guarantee of merchant quality or truthful advertising.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment identity / Agent Studio / feedback; India; product-specific eligibility | 1/5 | Feedback collection helps; fake-review detection is unverified.  Confidence: Low. | [R19: Razorpay](https://razorpay.com/blog/documents-required-for-payment-gateway), [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Gorgias — AI customer support; Global / supported ecommerce | 2/5 | Partial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

### 03.4. 3D. Acquisition spend and creative work

**Latent need hypothesis:** I need to learn which investment brings additional profitable customers before scaling it.

**Related product/workflow sources:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

#### 03.4.1 — I keep spending on ads because revenue rises, despite shrinking profit

*Research hypothesis · Applies to: Online*

- **Need:** Compare acquired contribution against campaign and fulfillment costs.
- **Observable signal:** Ad spend; net new orders; discounts; returns.
- **Outcome to measure:** New-customer contribution after acquisition cost.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Marketing spend control / growth finance

- **Observable in the relevant fintech product:** Card/ad spending, receipts, refunds and funding repayments.
- **Needs connected merchant data:** Campaign IDs, creative variants, margins, stock and acquisition attribution.
- **Proposed intervention:** Set affordable campaign budgets and compare contribution before financing expansion.
- **Limit:** More credit or higher sales does not establish positive incremental return.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / Engage / RAY; India; product-specific eligibility | 2/5 | Spend controls and campaign data help; causal contribution is unverified.  Confidence: Medium. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [R07: Razorpay](https://razorpay.com/engage/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Clearco — Ecommerce funding; Eligible US ecommerce | 1/5 | Enabling / adjacent fit for this specific pain. Funds approved inventory and growth needs. Credit provision is adjacent to attribution and creative optimization. Confidence: Low. | [F28: Clearco](https://www.clear.co/ecommerce-funding) |

#### 03.4.2 — Creative production consumes time with little learning

*Research hypothesis · Applies to: Solo, Online, Service*

- **Need:** Record which messages and product benefits attract suitable customers.
- **Observable signal:** Creative variants; qualified clicks; first purchases.
- **Outcome to measure:** Cost per useful learning; first-order conversion.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Marketing spend control / growth finance

- **Observable in the relevant fintech product:** Card/ad spending, receipts, refunds and funding repayments.
- **Needs connected merchant data:** Campaign IDs, creative variants, margins, stock and acquisition attribution.
- **Proposed intervention:** Set affordable campaign budgets and compare contribution before financing expansion.
- **Limit:** More credit or higher sales does not establish positive incremental return.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / Engage / RAY; India; product-specific eligibility | 1/5 | Campaign tooling is adjacent; creative learning is not established.  Confidence: Low. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [R07: Razorpay](https://razorpay.com/engage/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Low. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Clearco — Ecommerce funding; Eligible US ecommerce | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Credit provision is adjacent to attribution and creative optimization. Confidence: Low. | [F28: Clearco](https://www.clear.co/ecommerce-funding) |

#### 03.4.3 — An influencer reports views but I cannot connect them to sales

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Use agreed tracking and realistic attribution limits.
- **Observable signal:** Links/codes; new customer records; campaign dates.
- **Outcome to measure:** Tracked new orders; incremental lift if tested.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Marketing spend control / growth finance

- **Observable in the relevant fintech product:** Card/ad spending, receipts, refunds and funding repayments.
- **Needs connected merchant data:** Campaign IDs, creative variants, margins, stock and acquisition attribution.
- **Proposed intervention:** Set affordable campaign budgets and compare contribution before financing expansion.
- **Limit:** More credit or higher sales does not establish positive incremental return.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / Engage / RAY; India; product-specific eligibility | 2/5 | Tracked engagement helps; influence attribution remains incomplete.  Confidence: Medium. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [R07: Razorpay](https://razorpay.com/engage/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 1/5 | Enabling / adjacent fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Low. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Clearco — Ecommerce funding; Eligible US ecommerce | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Credit provision is adjacent to attribution and creative optimization. Confidence: Low. | [F28: Clearco](https://www.clear.co/ecommerce-funding) |

#### 03.4.4 — I scale a campaign just as stock or delivery capacity runs out

*Research hypothesis · Applies to: Retail, Online, Food*

- **Need:** Connect acquisition plans with available supply and fulfillment limits.
- **Observable signal:** Campaign spend; stock cover; shipping backlog.
- **Outcome to measure:** Spend on unavailable offers; preventable cancellations.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Marketing spend control / growth finance

- **Observable in the relevant fintech product:** Card/ad spending, receipts, refunds and funding repayments.
- **Needs connected merchant data:** Campaign IDs, creative variants, margins, stock and acquisition attribution.
- **Proposed intervention:** Set affordable campaign budgets and compare contribution before financing expansion.
- **Limit:** More credit or higher sales does not establish positive incremental return.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / Engage / RAY; India; product-specific eligibility | 1/5 | Spending controls can pause budgets; stock-aware autonomous scaling is unverified.  Confidence: Low. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [R07: Razorpay](https://razorpay.com/engage/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Clearco — Ecommerce funding; Eligible US ecommerce | 2/5 | Partial fit for this specific pain. Funds approved inventory and growth needs. Credit provision is adjacent to attribution and creative optimization. Confidence: Medium. | [F28: Clearco](https://www.clear.co/ecommerce-funding) |

### 03.5. 3E. First-customer measurement

**Latent need hypothesis:** I need to know whether acquisition creates durable demand, without counting the same sale twice.

**Related product/workflow sources:** [R07: Razorpay](https://razorpay.com/engage/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)

#### 03.5.1 — Several platforms claim credit for the same first purchase

*Research hypothesis · Applies to: Online*

- **Need:** Use one deduplicated order record and state attribution assumptions.
- **Observable signal:** Order IDs; source claims; attribution windows.
- **Outcome to measure:** Duplicate attributed revenue; reporting variance.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Acquisition measurement / revenue evidence

- **Observable in the relevant fintech product:** Unique orders, transaction IDs, refunds and customer identifiers in scope.
- **Needs connected merchant data:** Exposure data, channel IDs, cross-channel identity and randomized holdouts.
- **Proposed intervention:** Deduplicate revenue and compare incremental acquired customers with uncertainty.
- **Limit:** Payment records alone cannot identify why a purchase happened.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe / transaction reports; India; product-specific eligibility | 1/5 | Reports supply outcomes; complete multi-channel attribution is unverified.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 2/5 | Partial fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Medium. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 03.5.2 — Repeat customers are counted as newly acquired customers

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Resolve identity across store and online channels before calculating acquisition cost.
- **Observable signal:** Customer IDs; matching quality; prior purchase records.
- **Outcome to measure:** Misclassified new customers; acquisition-cost accuracy.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Acquisition measurement / revenue evidence

- **Observable in the relevant fintech product:** Unique orders, transaction IDs, refunds and customer identifiers in scope.
- **Needs connected merchant data:** Exposure data, channel IDs, cross-channel identity and randomized holdouts.
- **Proposed intervention:** Deduplicate revenue and compare incremental acquired customers with uncertainty.
- **Limit:** Payment records alone cannot identify why a purchase happened.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe / transaction reports; India; product-specific eligibility | 3/5 | Customer-history segmentation is meaningful within the linked footprint.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 3/5 | Substantial fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Medium. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 3/5 | Substantial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 03.5.3 — Campaign results look strong because a festival would have lifted sales anyway

*Research hypothesis · Applies to: Online, Subscription*

- **Need:** Compare against a credible baseline or randomized test when volume permits.
- **Observable signal:** Holdout/control outcomes; seasonality; confidence intervals.
- **Outcome to measure:** Incremental first orders and contribution.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Acquisition measurement / revenue evidence

- **Observable in the relevant fintech product:** Unique orders, transaction IDs, refunds and customer identifiers in scope.
- **Needs connected merchant data:** Exposure data, channel IDs, cross-channel identity and randomized holdouts.
- **Proposed intervention:** Deduplicate revenue and compare incremental acquired customers with uncertainty.
- **Limit:** Payment records alone cannot identify why a purchase happened.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe / transaction reports; India; product-specific eligibility | 0/5 | No documented randomized new-customer lift workflow was found.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 03.5.4 — Early campaign data is too small to support a confident decision

*Research hypothesis · Applies to: Solo, Online, Service*

- **Need:** Show uncertainty and avoid scaling from a few lucky orders.
- **Observable signal:** Sample size; variance; conversion lag.
- **Outcome to measure:** Premature decisions; test completion quality.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Acquisition measurement / revenue evidence

- **Observable in the relevant fintech product:** Unique orders, transaction IDs, refunds and customer identifiers in scope.
- **Needs connected merchant data:** Exposure data, channel IDs, cross-channel identity and randomized holdouts.
- **Proposed intervention:** Deduplicate revenue and compare incremental acquired customers with uncertainty.
- **Limit:** Payment records alone cannot identify why a purchase happened.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe / transaction reports; India; product-specific eligibility | 1/5 | Analytics exist; automatic uncertainty-aware decisions are unverified.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

## 04. Convert intent into an agreed order

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-520)

**Job:** Help an interested customer confidently choose and commit to an order, quote or booking.

**Boundary:** Owns choice, cart, price disclosure and order commitment. Processing the payment instruction belongs in 05; inventory planning in 02. An abandoned checkout with no attempted payment belongs here.

**Illustrative moment:** A customer likes Priya’s gift set but leaves after seeing shipping charges. Another cannot complete checkout comfortably on a phone.

**Razorpay coverage:** Magic Checkout, offers/affordability and Agent Studio cart recovery directly overlap this bucket. Shopify, GoKwik and Gorgias supply comparable or adjacent workflows.

[R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R07: Razorpay](https://razorpay.com/engage/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)

### 04.1. 4A. Choice and order configuration

**Latent need hypothesis:** I need customers to assemble the right order without help or preventable mistakes.

**Related product/workflow sources:** [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U06: Square](https://squareup.com/us/en/appointments)

#### 04.1.1 — Customers cannot select the right size, scent, quantity or service

*Research hypothesis · Applies to: Retail, Online, Service*

- **Need:** Explain options and validate combinations before the order is placed.
- **Observable signal:** Variant changes; help requests; configuration errors.
- **Outcome to measure:** Order completion; wrong-variant returns.
- **Related workflow evidence:** [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U06: Square](https://squareup.com/us/en/appointments)


**Fintech role:** Adjacent — Quote / cart / booking connected to payment

- **Observable in the relevant fintech product:** Quote/payment-link amounts, selected line items and abandoned checkout states.
- **Needs connected merchant data:** Product configuration, service calendar, quote scope and saved cart.
- **Proposed intervention:** Keep financial terms consistent and support deposits or staged collection.
- **Limit:** Payment links cannot choose an appropriate product or negotiate commercial scope alone.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Payment Links / Subscriptions; India; product-specific eligibility | 1/5 | Checkout receives selections; product suitability is outside verified scope.  Confidence: Low. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments / Retail; US edition | 3/5 | Substantial fit for this specific pain. Product and booking configuration integrated with taking payment. Complex B2B scoping and suitability remain merchant work. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments), [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |
| Mondu — Trade accounts / B2B terms; UK / Europe | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Financing does not resolve product configuration or service-calendar problems. Confidence: Low. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

#### 04.1.2 — A customer wants to change their cart but loses their progress

*Research hypothesis · Applies to: Online*

- **Need:** Preserve selections and make quantity, address and option edits clear.
- **Observable signal:** Cart edits; session resets; repeated data entry.
- **Outcome to measure:** Edit-to-completion rate; restart frequency.
- **Related workflow evidence:** [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U06: Square](https://squareup.com/us/en/appointments)


**Fintech role:** Adjacent — Quote / cart / booking connected to payment

- **Observable in the relevant fintech product:** Quote/payment-link amounts, selected line items and abandoned checkout states.
- **Needs connected merchant data:** Product configuration, service calendar, quote scope and saved cart.
- **Proposed intervention:** Keep financial terms consistent and support deposits or staged collection.
- **Limit:** Payment links cannot choose an appropriate product or negotiate commercial scope alone.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Payment Links / Subscriptions; India; product-specific eligibility | 2/5 | Checkout convenience helps; full cart-edit persistence depends on the store.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments / Retail; US edition | 3/5 | Substantial fit for this specific pain. Product and booking configuration integrated with taking payment. Complex B2B scoping and suitability remain merchant work. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments), [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |
| Mondu — Trade accounts / B2B terms; UK / Europe | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Financing does not resolve product configuration or service-calendar problems. Confidence: Low. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

#### 04.1.3 — A complex B2B quote stalls while both sides clarify the scope

*Research hypothesis · Applies to: B2B*

- **Need:** Capture quantities, specifications, delivery and acceptance terms together.
- **Observable signal:** Quote revisions; unanswered questions; scope changes.
- **Outcome to measure:** Quote acceptance time; rework after acceptance.
- **Related workflow evidence:** [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U06: Square](https://squareup.com/us/en/appointments)


**Fintech role:** Adjacent — Quote / cart / booking connected to payment

- **Observable in the relevant fintech product:** Quote/payment-link amounts, selected line items and abandoned checkout states.
- **Needs connected merchant data:** Product configuration, service calendar, quote scope and saved cart.
- **Proposed intervention:** Keep financial terms consistent and support deposits or staged collection.
- **Limit:** Payment links cannot choose an appropriate product or negotiate commercial scope alone.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Payment Links / Subscriptions; India; product-specific eligibility | 1/5 | Collection tools follow an agreement; scope negotiation is not covered.  Confidence: Low. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments / Retail; US edition | 2/5 | Partial fit for this specific pain. Product and booking configuration integrated with taking payment. Complex B2B scoping and suitability remain merchant work. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments), [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |
| Mondu — Trade accounts / B2B terms; UK / Europe | 2/5 | Partial fit for this specific pain. Approved deferred payment terms support B2B ordering. Financing does not resolve product configuration or service-calendar problems. Confidence: Medium. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

#### 04.1.4 — A service customer cannot find a suitable appointment or package

*Research hypothesis · Applies to: Service*

- **Need:** Show real options and offer a waitlist or alternative time appropriately.
- **Observable signal:** No-slot searches; abandoned bookings; waitlist demand.
- **Outcome to measure:** Booking conversion; unfilled suitable slots.
- **Related workflow evidence:** [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U06: Square](https://squareup.com/us/en/appointments)


**Fintech role:** Adjacent — Quote / cart / booking connected to payment

- **Observable in the relevant fintech product:** Quote/payment-link amounts, selected line items and abandoned checkout states.
- **Needs connected merchant data:** Product configuration, service calendar, quote scope and saved cart.
- **Proposed intervention:** Keep financial terms consistent and support deposits or staged collection.
- **Limit:** Payment links cannot choose an appropriate product or negotiate commercial scope alone.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Payment Links / Subscriptions; India; product-specific eligibility | 1/5 | Payment links collect deposits; an appointment engine is not verified.  Confidence: Low. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments / Retail; US edition | 4/5 | Strong fit for this specific pain. Product and booking configuration integrated with taking payment. Complex B2B scoping and suitability remain merchant work. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments), [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |
| Mondu — Trade accounts / B2B terms; UK / Europe | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Financing does not resolve product configuration or service-calendar problems. Confidence: Low. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

### 04.2. 4B. Total cost and affordability

**Latent need hypothesis:** I need to make the total commitment understandable before the customer loses trust.

**Related product/workflow sources:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/)

#### 04.2.1 — Unexpected shipping or fees make the customer abandon the order

*Research hypothesis · Applies to: Online*

- **Need:** Show payable total and conditions early enough for an informed choice.
- **Observable signal:** Exits after shipping/tax display; price questions.
- **Outcome to measure:** Cost-surprise abandonment; completed contribution.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/)


**Fintech role:** Direct — Checkout affordability / offers / total-price disclosure

- **Observable in the relevant fintech product:** Order total, fees, method eligibility, offers and accepted financed amounts.
- **Needs connected merchant data:** Shipping rates, true margins, promotion budgets and customer credit eligibility.
- **Proposed intervention:** Explain total cost and present eligible payment or offer alternatives.
- **Limit:** Only authorized lenders decide credit; discounts must preserve merchant constraints.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Engage / payment methods; India; product-specific eligibility | 3/5 | Checkout can show totals; upstream fee choices remain merchant policy.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Pine Labs — Affordability / Pay Later; India | 1/5 | Enabling / adjacent fit for this specific pain. Partner-led instalments at merchant checkout. Buyer, lender and product eligibility; financing is not a discount or guaranteed profit. Confidence: Low. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 04.2.2 — A high-value order is unaffordable in one payment

*Research hypothesis · Applies to: Retail, Online, Service*

- **Need:** Offer eligible payment options with clear costs and terms.
- **Observable signal:** Order value; affordability-option usage; eligibility failures.
- **Outcome to measure:** Profitable conversion by payment option.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/)


**Fintech role:** Direct — Checkout affordability / offers / total-price disclosure

- **Observable in the relevant fintech product:** Order total, fees, method eligibility, offers and accepted financed amounts.
- **Needs connected merchant data:** Shipping rates, true margins, promotion budgets and customer credit eligibility.
- **Proposed intervention:** Explain total cost and present eligible payment or offer alternatives.
- **Limit:** Only authorized lenders decide credit; discounts must preserve merchant constraints.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Engage / payment methods; India; product-specific eligibility | 4/5 | Affordability options address eligible buyers, not universal purchasing power.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Pine Labs — Affordability / Pay Later; India | 4/5 | Strong fit for this specific pain. Partner-led instalments at merchant checkout. Buyer, lender and product eligibility; financing is not a discount or guaranteed profit. Confidence: Medium. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 04.2.3 — Coupon conditions are confusing or the code does not work

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Explain eligibility and apply permitted offers consistently.
- **Observable signal:** Coupon errors; stacking attempts; support contacts.
- **Outcome to measure:** Offer redemption errors; checkout completion.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/)


**Fintech role:** Direct — Checkout affordability / offers / total-price disclosure

- **Observable in the relevant fintech product:** Order total, fees, method eligibility, offers and accepted financed amounts.
- **Needs connected merchant data:** Shipping rates, true margins, promotion budgets and customer credit eligibility.
- **Proposed intervention:** Explain total cost and present eligible payment or offer alternatives.
- **Limit:** Only authorized lenders decide credit; discounts must preserve merchant constraints.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Engage / payment methods; India; product-specific eligibility | 3/5 | Offer presentation helps; rules and integration must match actual eligibility.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Pine Labs — Affordability / Pay Later; India | 3/5 | Substantial fit for this specific pain. Partner-led instalments at merchant checkout. Buyer, lender and product eligibility; financing is not a discount or guaranteed profit. Confidence: Medium. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 04.2.4 — A discount increases orders but makes the order unprofitable

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Set contribution-aware limits before exposing an offer.
- **Observable signal:** Cart costs; discount combinations; shipping subsidy.
- **Outcome to measure:** Contribution per completed order; below-floor orders.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/)


**Fintech role:** Direct — Checkout affordability / offers / total-price disclosure

- **Observable in the relevant fintech product:** Order total, fees, method eligibility, offers and accepted financed amounts.
- **Needs connected merchant data:** Shipping rates, true margins, promotion budgets and customer credit eligibility.
- **Proposed intervention:** Explain total cost and present eligible payment or offer alternatives.
- **Limit:** Only authorized lenders decide credit; discounts must preserve merchant constraints.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Engage / payment methods; India; product-specific eligibility | 2/5 | Offer tools do not independently guarantee order contribution.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R07: Razorpay](https://razorpay.com/engage/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Pine Labs — Affordability / Pay Later; India | 1/5 | Enabling / adjacent fit for this specific pain. Partner-led instalments at merchant checkout. Buyer, lender and product eligibility; financing is not a discount or guaranteed profit. Confidence: Low. | [F30: Pine Labs](https://www.pinelabs.com/pos-products/paylater) |
| Stripe — Payments / Billing; US / supported markets | 2/5 | Partial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

### 04.3. 4C. Checkout usability and accessibility

**Latent need hypothesis:** I need a short, reliable buying path for the devices and languages my customers actually use.

**Related product/workflow sources:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts)

#### 04.3.1 — Customers repeatedly type details on a small mobile screen

*Research hypothesis · Applies to: Online*

- **Need:** Reduce unnecessary entry and validate clearly without losing information.
- **Observable signal:** Field errors; completion time; device/browser breakdown.
- **Outcome to measure:** Checkout completion; field abandonment.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts)


**Fintech role:** Direct — Hosted checkout / tokenization / POS

- **Observable in the relevant fintech product:** Session errors, completion time, chosen method and payment outcomes.
- **Needs connected merchant data:** Device accessibility, page speed, store queue and customer input behavior.
- **Proposed intervention:** Remove redundant entry, surface checkout defects and simplify acceptance.
- **Limit:** The merchant site, network and physical staffing still influence completion.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / POS; India; product-specific eligibility | 4/5 | Prefill and checkout convenience directly address repeated entry.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [F07: Razorpay](https://razorpay.com/pos/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 04.3.2 — Forced signup blocks a customer who only wants to buy once

*Research hypothesis · Applies to: Online*

- **Need:** Allow an appropriate low-friction path and explain any necessary account step.
- **Observable signal:** Signup exits; authentication errors; guest completion.
- **Outcome to measure:** Account-step abandonment.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts)


**Fintech role:** Direct — Hosted checkout / tokenization / POS

- **Observable in the relevant fintech product:** Session errors, completion time, chosen method and payment outcomes.
- **Needs connected merchant data:** Device accessibility, page speed, store queue and customer input behavior.
- **Proposed intervention:** Remove redundant entry, surface checkout defects and simplify acceptance.
- **Limit:** The merchant site, network and physical staffing still influence completion.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / POS; India; product-specific eligibility | 3/5 | A simpler checkout helps; mandatory store signup is still merchant-controlled.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [F07: Razorpay](https://razorpay.com/pos/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 04.3.3 — The checkout is slow, broken or hard to understand

*Research hypothesis · Applies to: Online*

- **Need:** Identify actual friction by device, accessibility needs and language.
- **Observable signal:** Load time; error logs; session events; usability observations.
- **Outcome to measure:** Completion by device/language; critical errors.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts)


**Fintech role:** Direct — Hosted checkout / tokenization / POS

- **Observable in the relevant fintech product:** Session errors, completion time, chosen method and payment outcomes.
- **Needs connected merchant data:** Device accessibility, page speed, store queue and customer input behavior.
- **Proposed intervention:** Remove redundant entry, surface checkout defects and simplify acceptance.
- **Limit:** The merchant site, network and physical staffing still influence completion.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / POS; India; product-specific eligibility | 3/5 | Hosted payment UX covers part of the site performance problem.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [F07: Razorpay](https://razorpay.com/pos/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 04.3.4 — Store queues make in-person customers leave before billing

*Research hypothesis · Applies to: Retail, Food*

- **Need:** Speed item entry and support suitable queue/payment arrangements.
- **Observable signal:** Queue time; billing duration; abandoned queues.
- **Outcome to measure:** Served customers per hour; queue abandonment.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts)


**Fintech role:** Direct — Hosted checkout / tokenization / POS

- **Observable in the relevant fintech product:** Session errors, completion time, chosen method and payment outcomes.
- **Needs connected merchant data:** Device accessibility, page speed, store queue and customer input behavior.
- **Proposed intervention:** Remove redundant entry, surface checkout defects and simplify acceptance.
- **Limit:** The merchant site, network and physical staffing still influence completion.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / POS; India; product-specific eligibility | 3/5 | POS directly helps acceptance; queues also depend on staffing and billing.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [F07: Razorpay](https://razorpay.com/pos/) |
| Stripe — Payments / Billing; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Low. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 4/5 | Strong fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

### 04.4. 4D. Promise and confidence before commitment

**Latent need hypothesis:** I need the customer to understand what they will receive and when.

**Related product/workflow sources:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I04: Shiprocket](https://www.shiprocket.in/features/)

#### 04.4.1 — The delivery promise is unclear until after purchase

*Research hypothesis · Applies to: Online*

- **Need:** Show realistic dates and location restrictions before commitment.
- **Observable signal:** Serviceability; carrier estimates; date-related exits.
- **Outcome to measure:** Promise-related abandonment; late commitments.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Order promise / COD risk / confirmation

- **Observable in the relevant fintech product:** Order totals, payment state, COD/prepaid choice and risk inputs.
- **Needs connected merchant data:** Serviceable address, delivery capacity, return policy and booking acceptance.
- **Proposed intervention:** Validate financial commitment and offer approved alternatives when risk is high.
- **Limit:** A risk score should not be mistaken for proof of customer intent.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Agent Studio COD; India; product-specific eligibility | 2/5 | Checkout can expose a promise; fulfillment accuracy needs logistics data.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| GoKwik — Connected engagement; India / ecommerce | 2/5 | Partial fit for this specific pain. Order-context messaging and engagement. Shipping commitments and risk outcomes need external systems. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Retail POS; US edition | 2/5 | Partial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 04.4.2 — The customer cannot find return or cancellation conditions

*Research hypothesis · Applies to: Online, Service, Subscription*

- **Need:** Make applicable policies visible and understandable at decision time.
- **Observable signal:** Policy searches; support questions; policy-page exits.
- **Outcome to measure:** Policy-related abandonment; later misunderstandings.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Order promise / COD risk / confirmation

- **Observable in the relevant fintech product:** Order totals, payment state, COD/prepaid choice and risk inputs.
- **Needs connected merchant data:** Serviceable address, delivery capacity, return policy and booking acceptance.
- **Proposed intervention:** Validate financial commitment and offer approved alternatives when risk is high.
- **Limit:** A risk score should not be mistaken for proof of customer intent.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Agent Studio COD; India; product-specific eligibility | 2/5 | Policies can be presented; correctness remains merchant-owned.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| GoKwik — Connected engagement; India / ecommerce | 2/5 | Partial fit for this specific pain. Order-context messaging and engagement. Shipping commitments and risk outcomes need external systems. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 04.4.3 — COD choice attracts orders that may never be accepted

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Balance buyer preference with explainable risk and prepaid alternatives.
- **Observable signal:** COD acceptance; customer history; location/order risk.
- **Outcome to measure:** Delivered contribution; legitimate buyers blocked.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Order promise / COD risk / confirmation

- **Observable in the relevant fintech product:** Order totals, payment state, COD/prepaid choice and risk inputs.
- **Needs connected merchant data:** Serviceable address, delivery capacity, return policy and booking acceptance.
- **Proposed intervention:** Validate financial commitment and offer approved alternatives when risk is high.
- **Limit:** A risk score should not be mistaken for proof of customer intent.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Agent Studio COD; India; product-specific eligibility | 3/5 | COD confirmation and risk tools overlap directly; false blocks remain possible.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| GoKwik — Connected engagement; India / ecommerce | 2/5 | Partial fit for this specific pain. Order-context messaging and engagement. Shipping commitments and risk outcomes need external systems. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Retail POS; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Low. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 04.4.4 — The customer is unsure whether the order or booking was accepted

*Research hypothesis · Applies to: All*

- **Need:** Show an unambiguous confirmation and route unresolved status checks.
- **Observable signal:** Missing confirmation; duplicate submissions; status inquiries.
- **Outcome to measure:** Duplicate orders; confirmation-related contacts.
- **Related workflow evidence:** [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I04: Shiprocket](https://www.shiprocket.in/features/)


**Fintech role:** Data-enabled — Order promise / COD risk / confirmation

- **Observable in the relevant fintech product:** Order totals, payment state, COD/prepaid choice and risk inputs.
- **Needs connected merchant data:** Serviceable address, delivery capacity, return policy and booking acceptance.
- **Proposed intervention:** Validate financial commitment and offer approved alternatives when risk is high.
- **Limit:** A risk score should not be mistaken for proof of customer intent.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / Agent Studio COD; India; product-specific eligibility | 3/5 | Payment/order status helps; confirmation requires correct system integration.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| GoKwik — Connected engagement; India / ecommerce | 3/5 | Substantial fit for this specific pain. Order-context messaging and engagement. Shipping commitments and risk outcomes need external systems. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Retail POS; US edition | 4/5 | Strong fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

### 04.5. 4E. Abandoned-intent recovery

**Latent need hypothesis:** I need to recover genuine unfinished purchases without chasing people who were only browsing.

**Related product/workflow sources:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)

#### 04.5.1 — I treat every abandoned cart as money that can be recovered

*Research hypothesis · Applies to: Online*

- **Need:** Separate browsing, price comparison, technical friction and genuine intent.
- **Observable signal:** Abandonment stage; payment attempts; customer response.
- **Outcome to measure:** Recovery eligibility accuracy; wasted contacts.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Abandoned-intent messaging / payment links

- **Observable in the relevant fintech product:** Checkout or cart events only when integrated; subsequent payment outcomes.
- **Needs connected merchant data:** Consent, current cart, purchase across channels, product margins and suppression lists.
- **Proposed intervention:** Rank recoverable intent and coordinate permitted reminders or offers.
- **Limit:** A cart total is an opportunity estimate, not earned or certainly recoverable revenue.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio cart recovery / Engage; India; product-specific eligibility | 2/5 | Recovery agent exists; realizable value and incremental lift need validation.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R07: Razorpay](https://razorpay.com/engage/) |
| GoKwik — KwikEngage; India / connected ecommerce | 2/5 | Partial fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Marketing automation; US edition | 2/5 | Partial fit for this specific pain. Connected customer and engagement workflows. Detailed cart coverage depends on store integration; no general causal-profit promise. Confidence: Medium. | [F15: Square](https://squareup.com/us/en/marketing), [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory) |

#### 04.5.2 — Recovery messages arrive after the customer already purchased

*Research hypothesis · Applies to: Online*

- **Need:** Check current order state and stop redundant follow-ups.
- **Observable signal:** Latest order status; message queue delay; cross-device match.
- **Outcome to measure:** Messages after purchase; complaints.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Abandoned-intent messaging / payment links

- **Observable in the relevant fintech product:** Checkout or cart events only when integrated; subsequent payment outcomes.
- **Needs connected merchant data:** Consent, current cart, purchase across channels, product margins and suppression lists.
- **Proposed intervention:** Rank recoverable intent and coordinate permitted reminders or offers.
- **Limit:** A cart total is an opportunity estimate, not earned or certainly recoverable revenue.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio cart recovery / Engage; India; product-specific eligibility | 3/5 | Context-aware actions help; purchases outside connected sources may be missed.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R07: Razorpay](https://razorpay.com/engage/) |
| GoKwik — KwikEngage; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Marketing automation; US edition | 2/5 | Partial fit for this specific pain. Connected customer and engagement workflows. Detailed cart coverage depends on store integration; no general causal-profit promise. Confidence: Medium. | [F15: Square](https://squareup.com/us/en/marketing), [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory) |

#### 04.5.3 — Every recovery attempt starts with a discount

*Research hypothesis · Applies to: Online*

- **Need:** Address the actual objection using approved options, including no incentive.
- **Observable signal:** Reason for abandonment; offer history; contribution floor.
- **Outcome to measure:** Incremental recovered contribution; discount leakage.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Abandoned-intent messaging / payment links

- **Observable in the relevant fintech product:** Checkout or cart events only when integrated; subsequent payment outcomes.
- **Needs connected merchant data:** Consent, current cart, purchase across channels, product margins and suppression lists.
- **Proposed intervention:** Rank recoverable intent and coordinate permitted reminders or offers.
- **Limit:** A cart total is an opportunity estimate, not earned or certainly recoverable revenue.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio cart recovery / Engage; India; product-specific eligibility | 3/5 | Approved-offer controls help avoid arbitrary discounts.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R07: Razorpay](https://razorpay.com/engage/) |
| GoKwik — KwikEngage; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Marketing automation; US edition | 2/5 | Partial fit for this specific pain. Connected customer and engagement workflows. Detailed cart coverage depends on store integration; no general causal-profit promise. Confidence: Medium. | [F15: Square](https://squareup.com/us/en/marketing), [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory) |

#### 04.5.4 — Several tools contact the same person repeatedly

*Research hypothesis · Applies to: Online*

- **Need:** Coordinate contact timing, consent, frequency and stopping conditions.
- **Observable signal:** Cross-tool contact history; opt-out; purchase completion.
- **Outcome to measure:** Duplicate outreach; net recovery after contact costs.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage), [U09: Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts), [E01: Baymard Institute](https://baymard.com/lists/cart-abandonment-rate)


**Fintech role:** Data-enabled — Abandoned-intent messaging / payment links

- **Observable in the relevant fintech product:** Checkout or cart events only when integrated; subsequent payment outcomes.
- **Needs connected merchant data:** Consent, current cart, purchase across channels, product margins and suppression lists.
- **Proposed intervention:** Rank recoverable intent and coordinate permitted reminders or offers.
- **Limit:** A cart total is an opportunity estimate, not earned or certainly recoverable revenue.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio cart recovery / Engage; India; product-specific eligibility | 2/5 | One workflow can enforce limits; cross-vendor orchestration is unverified.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R07: Razorpay](https://razorpay.com/engage/) |
| GoKwik — KwikEngage; India / connected ecommerce | 2/5 | Partial fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |
| Square — Marketing automation; US edition | 2/5 | Partial fit for this specific pain. Connected customer and engagement workflows. Detailed cart coverage depends on store integration; no general causal-profit promise. Confidence: Medium. | [F15: Square](https://squareup.com/us/en/marketing), [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory) |

## 05. Collect the agreed customer payment

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-731)

**Job:** Turn an authorized amount due into one verified successful collection.

**Boundary:** Owns payment authorization, failures, recurring debits and overdue invoices. Funds already collected but not received/matched belong in 08. Voluntary relationship churn belongs in 09.

**Illustrative moment:** Priya sees failed UPI payments, an unpaid wholesale invoice and a subscription renewal that did not debit. Each requires a different recovery action.

**Razorpay coverage:** Razorpay payments, Optimizer, UPI AutoPay, recovery agents, payment links and Smart Collect cover substantial parts. Do not frame generic retries or invoice reminders as missing capabilities.

[R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R14: Razorpay](https://razorpay.com/smart-collect/), [R02: Razorpay](https://razorpay.com/agent-studio/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [U14: BILL](https://www.bill.com/product/accounts-receivable/)

### 05.1. 5A. Authorization and payment success

**Latent need hypothesis:** I need willing customers to complete payment through a working method.

**Related product/workflow sources:** [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)

#### 05.1.1 — A bank or payment route fails even though the buyer wants to pay

*Research hypothesis · Applies to: All*

- **Need:** Identify the failing route and offer a supported alternative safely.
- **Observable signal:** Failure codes; issuer/method/time success; provider health.
- **Outcome to measure:** Payment success rate; unique orders recovered.
- **Related workflow evidence:** [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Payment acceptance / routing / authentication

- **Observable in the relevant fintech product:** Attempt status, method, issuer/route, failure codes and timestamps.
- **Needs connected merchant data:** Order intent, supported fallback options and merchant-country configuration.
- **Proposed intervention:** Diagnose the failed route and present a safe supported alternative.
- **Limit:** No processor controls every issuer or can guarantee all legitimate payments succeed.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Optimizer / payment gateway / international collections; India; product-specific eligibility | 4/5 | Routing directly addresses route-level failure within supported providers.  Confidence: Medium. | [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Cashfree — FlowWise payment routing; India / supported markets | 4/5 | Strong fit for this specific pain. Payment route orchestration to respond to performance conditions. Not a general ERP, customer support or fulfillment product. Confidence: Medium. | [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 05.1.2 — The preferred payment method is missing or ineligible

*Research hypothesis · Applies to: All*

- **Need:** Explain supported methods and offer relevant available alternatives.
- **Observable signal:** Method selection; eligibility failures; method-related exits.
- **Outcome to measure:** Payment completion by method and customer group.
- **Related workflow evidence:** [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Payment acceptance / routing / authentication

- **Observable in the relevant fintech product:** Attempt status, method, issuer/route, failure codes and timestamps.
- **Needs connected merchant data:** Order intent, supported fallback options and merchant-country configuration.
- **Proposed intervention:** Diagnose the failed route and present a safe supported alternative.
- **Limit:** No processor controls every issuer or can guarantee all legitimate payments succeed.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Optimizer / payment gateway / international collections; India; product-specific eligibility | 4/5 | Broad methods help; bank, device and buyer eligibility still apply.  Confidence: Medium. | [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Cashfree — FlowWise payment routing; India / supported markets | 3/5 | Substantial fit for this specific pain. Payment route orchestration to respond to performance conditions. Not a general ERP, customer support or fulfillment product. Confidence: Medium. | [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 05.1.3 — Authentication times out or an app switch breaks the journey

*Research hypothesis · Applies to: Online, Subscription*

- **Need:** Preserve payment context and clearly explain recovery steps.
- **Observable signal:** OTP/3DS/app-switch events; timeouts; return callbacks.
- **Outcome to measure:** Authentication completion; retries per order.
- **Related workflow evidence:** [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Payment acceptance / routing / authentication

- **Observable in the relevant fintech product:** Attempt status, method, issuer/route, failure codes and timestamps.
- **Needs connected merchant data:** Order intent, supported fallback options and merchant-country configuration.
- **Proposed intervention:** Diagnose the failed route and present a safe supported alternative.
- **Limit:** No processor controls every issuer or can guarantee all legitimate payments succeed.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Optimizer / payment gateway / international collections; India; product-specific eligibility | 3/5 | Optimized payment flows help; external authentication remains a constraint.  Confidence: Medium. | [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Cashfree — FlowWise payment routing; India / supported markets | 3/5 | Substantial fit for this specific pain. Payment route orchestration to respond to performance conditions. Not a general ERP, customer support or fulfillment product. Confidence: Medium. | [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 05.1.4 — International customers cannot pay with familiar local options

*Research hypothesis · Applies to: Online, B2B, Subscription*

- **Need:** Offer supported currencies, methods and authentication flows.
- **Observable signal:** Country/issuer declines; method coverage; FX presentation.
- **Outcome to measure:** Cross-border authorization and completion.
- **Related workflow evidence:** [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Payment acceptance / routing / authentication

- **Observable in the relevant fintech product:** Attempt status, method, issuer/route, failure codes and timestamps.
- **Needs connected merchant data:** Order intent, supported fallback options and merchant-country configuration.
- **Proposed intervention:** Diagnose the failed route and present a safe supported alternative.
- **Limit:** No processor controls every issuer or can guarantee all legitimate payments succeed.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Optimizer / payment gateway / international collections; India; product-specific eligibility | 3/5 | International acceptance exists; familiar local methods vary by market.  Confidence: Medium. | [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F44: Razorpay](https://razorpay.com/solutions/e-commerce/) |
| Cashfree — FlowWise payment routing; India / supported markets | 2/5 | Partial fit for this specific pain. Payment route orchestration to respond to performance conditions. Not a general ERP, customer support or fulfillment product. Confidence: Medium. | [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

### 05.2. 5B. Ambiguous and duplicate collections

**Latent need hypothesis:** I need one trustworthy answer about whether money was collected before acting again.

**Related product/workflow sources:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)

#### 05.2.1 — The customer says money was debited but my order shows unpaid

*Research hypothesis · Applies to: All*

- **Need:** Check the authoritative payment state and explain pending resolution.
- **Observable signal:** Payment/order IDs; pending status; bank/provider events.
- **Outcome to measure:** Resolution time; duplicate payment requests.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Direct — Collection status / capture / reconciliation

- **Observable in the relevant fintech product:** Payment ID, order reference, authorization, capture and refund events.
- **Needs connected merchant data:** Merchant order state, cashier confirmation and customer claim.
- **Proposed intervention:** Recheck authoritative status, prevent duplicate actions and escalate stale states.
- **Limit:** A screenshot or webhook arrival alone should not overrule authoritative records.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payments dashboard / order integration / POS; India; product-specific eligibility | 4/5 | Payment-state lookup and reconciliation support ambiguous outcomes.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F07: Razorpay](https://razorpay.com/pos/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — POS transaction records; US edition | 3/5 | Substantial fit for this specific pain. In-person payment state and order-linked records. External payments and incorrect cashier processes remain outside its control. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |

#### 05.2.2 — A retry collects twice for the same purchase

*Research hypothesis · Applies to: All*

- **Need:** Tie retries to the same obligation and prevent duplicate collection.
- **Observable signal:** Duplicate references; amounts; timestamps; retry requests.
- **Outcome to measure:** Duplicate charges per unique order.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Direct — Collection status / capture / reconciliation

- **Observable in the relevant fintech product:** Payment ID, order reference, authorization, capture and refund events.
- **Needs connected merchant data:** Merchant order state, cashier confirmation and customer claim.
- **Proposed intervention:** Recheck authoritative status, prevent duplicate actions and escalate stale states.
- **Limit:** A screenshot or webhook arrival alone should not overrule authoritative records.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payments dashboard / order integration / POS; India; product-specific eligibility | 3/5 | Safe integration can prevent duplicates; incorrect external retries remain possible.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F07: Razorpay](https://razorpay.com/pos/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — POS transaction records; US edition | 3/5 | Substantial fit for this specific pain. In-person payment state and order-linked records. External payments and incorrect cashier processes remain outside its control. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |

#### 05.2.3 — A card payment is authorized but never captured

*Research hypothesis · Applies to: Online, B2B*

- **Need:** Track authorization expiry and capture according to the order workflow.
- **Observable signal:** Authorized-not-captured age; capture failures.
- **Outcome to measure:** Expired authorizations; recoverable capture value.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Direct — Collection status / capture / reconciliation

- **Observable in the relevant fintech product:** Payment ID, order reference, authorization, capture and refund events.
- **Needs connected merchant data:** Merchant order state, cashier confirmation and customer claim.
- **Proposed intervention:** Recheck authoritative status, prevent duplicate actions and escalate stale states.
- **Limit:** A screenshot or webhook arrival alone should not overrule authoritative records.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payments dashboard / order integration / POS; India; product-specific eligibility | 4/5 | Capture workflow is supported; timeout monitoring still matters.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F07: Razorpay](https://razorpay.com/pos/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — POS transaction records; US edition | 3/5 | Substantial fit for this specific pain. In-person payment state and order-linked records. External payments and incorrect cashier processes remain outside its control. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |

#### 05.2.4 — A cashier accepts a payment screenshot as proof

*Research hypothesis · Applies to: Solo, Retail, Food*

- **Need:** Verify the actual received transaction before marking the bill paid.
- **Observable signal:** Provider confirmation; receipt/reference match.
- **Outcome to measure:** False payment acknowledgments; cash loss.
- **Related workflow evidence:** [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Direct — Collection status / capture / reconciliation

- **Observable in the relevant fintech product:** Payment ID, order reference, authorization, capture and refund events.
- **Needs connected merchant data:** Merchant order state, cashier confirmation and customer claim.
- **Proposed intervention:** Recheck authoritative status, prevent duplicate actions and escalate stale states.
- **Limit:** A screenshot or webhook arrival alone should not overrule authoritative records.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payments dashboard / order integration / POS; India; product-specific eligibility | 3/5 | POS confirmation reduces screenshot dependence; staff must use verified status.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F07: Razorpay](https://razorpay.com/pos/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Stripe — Payments / Billing; US / supported markets | 2/5 | Partial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — POS transaction records; US edition | 4/5 | Strong fit for this specific pain. In-person payment state and order-linked records. External payments and incorrect cashier processes remain outside its control. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail) |

### 05.3. 5C. Recurring payment execution

**Latent need hypothesis:** I need consented recurring payments to run reliably while respecting customer changes.

**Related product/workflow sources:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)

#### 05.3.1 — A subscriber abandons mandate setup before the first debit

*Research hypothesis · Applies to: Subscription*

- **Need:** Explain the mandate and resume incomplete registration appropriately.
- **Observable signal:** Setup stage; authorization status; consent record.
- **Outcome to measure:** Mandate completion; first successful debit.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Mandates / subscription billing / retry

- **Observable in the relevant fintech product:** Mandate state, debit schedule, failure codes and renewal/cancellation events.
- **Needs connected merchant data:** Customer entitlement, changed plans, alternate payments and contact preferences.
- **Proposed intervention:** Fix setup friction, time permitted retries and keep billing synchronized.
- **Limit:** Canceling service, canceling a mandate and recording a payment must be reconciled.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / UPI AutoPay / revenue recovery agents; India; product-specific eligibility | 3/5 | Mandate setup is supported; abandonment cannot be eliminated.  Confidence: Medium. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

#### 05.3.2 — A renewal fails because funds or the payment instrument are temporarily unavailable

*Research hypothesis · Applies to: Subscription*

- **Need:** Choose permitted retry timing and an alternate recovery path.
- **Observable signal:** Failure reason; mandate/card state; retry outcomes.
- **Outcome to measure:** Recovered renewals; avoidable service interruption.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Mandates / subscription billing / retry

- **Observable in the relevant fintech product:** Mandate state, debit schedule, failure codes and renewal/cancellation events.
- **Needs connected merchant data:** Customer entitlement, changed plans, alternate payments and contact preferences.
- **Proposed intervention:** Fix setup friction, time permitted retries and keep billing synchronized.
- **Limit:** Canceling service, canceling a mandate and recording a payment must be reconciled.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / UPI AutoPay / revenue recovery agents; India; product-specific eligibility | 3/5 | Retry and recovery tools exist; AutoPay feature rollout may be limited.  Confidence: Medium. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Stripe — Payments / Billing; US / supported markets | 4/5 | Strong fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 4/5 | Strong fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

#### 05.3.3 — Retries keep running after a customer cancels or pays another way

*Research hypothesis · Applies to: Subscription*

- **Need:** Synchronize entitlement, mandate and outstanding-balance state.
- **Observable signal:** Cancellation time; latest payment; queued retries.
- **Outcome to measure:** Charges after cancellation; redundant retry cost.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Mandates / subscription billing / retry

- **Observable in the relevant fintech product:** Mandate state, debit schedule, failure codes and renewal/cancellation events.
- **Needs connected merchant data:** Customer entitlement, changed plans, alternate payments and contact preferences.
- **Proposed intervention:** Fix setup friction, time permitted retries and keep billing synchronized.
- **Limit:** Canceling service, canceling a mandate and recording a payment must be reconciled.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / UPI AutoPay / revenue recovery agents; India; product-specific eligibility | 3/5 | Cancellation/state events help; external-payment joins remain necessary.  Confidence: Medium. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

#### 05.3.4 — Plan changes create the wrong amount or billing date

*Research hypothesis · Applies to: Subscription*

- **Need:** Reconcile agreed plan terms, proration and billing schedule before charging.
- **Observable signal:** Plan events; amount changes; billing calculations.
- **Outcome to measure:** Billing errors; credit adjustments.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries)


**Fintech role:** Direct — Mandates / subscription billing / retry

- **Observable in the relevant fintech product:** Mandate state, debit schedule, failure codes and renewal/cancellation events.
- **Needs connected merchant data:** Customer entitlement, changed plans, alternate payments and contact preferences.
- **Proposed intervention:** Fix setup friction, time permitted retries and keep billing synchronized.
- **Limit:** Canceling service, canceling a mandate and recording a payment must be reconciled.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / UPI AutoPay / revenue recovery agents; India; product-specific eligibility | 3/5 | Plan lifecycle tooling exists; supported methods and change rules differ.  Confidence: Medium. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 4/5 | Strong fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |

### 05.4. 5D. Invoices and trade credit collection

**Latent need hypothesis:** I need to get paid on time without damaging a useful customer relationship.

**Related product/workflow sources:** [U14: BILL](https://www.bill.com/product/accounts-receivable/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R14: Razorpay](https://razorpay.com/smart-collect/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/)

#### 05.4.1 — I forget which business customers owe me and when

*Research hypothesis · Applies to: B2B, Solo, Service*

- **Need:** Maintain an accurate aging view with one owner for each follow-up.
- **Observable signal:** Invoice due date; open balance; aging buckets.
- **Outcome to measure:** Days sales outstanding; overdue balance.
- **Related workflow evidence:** [U14: BILL](https://www.bill.com/product/accounts-receivable/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R14: Razorpay](https://razorpay.com/smart-collect/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/)


**Fintech role:** Direct — Accounts receivable / invoice collection / trade credit

- **Observable in the relevant fintech product:** Invoice amount/due date, payment reference, part-payment and aging if integrated.
- **Needs connected merchant data:** Debtor contacts, disputes, promised payments and approved credit policy.
- **Proposed intervention:** Prioritize overdue balances, reconcile deductions and prepare contextual reminders.
- **Limit:** Collecting a debt is different from approving more credit or resolving a contract dispute.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / invoices / receivables agent; India; product-specific eligibility | 3/5 | Invoice and collection views help; agent availability needs confirmation.  Confidence: Medium. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |
| Mondu — B2B trade accounts; UK / Europe | 3/5 | Substantial fit for this specific pain. Approved trade accounts and deferred collections. Eligibility and contractual risk transfer apply; not an unrestricted credit line. Confidence: Medium. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

#### 05.4.2 — A reminder goes to the wrong contact or ignores a payment dispute

*Research hypothesis · Applies to: B2B, Service*

- **Need:** Contact the responsible person with the invoice context and pause unresolved cases.
- **Observable signal:** Accounts-payable contact; dispute notes; reminders.
- **Outcome to measure:** Reminder relevance; time to resolution/payment.
- **Related workflow evidence:** [U14: BILL](https://www.bill.com/product/accounts-receivable/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R14: Razorpay](https://razorpay.com/smart-collect/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/)


**Fintech role:** Direct — Accounts receivable / invoice collection / trade credit

- **Observable in the relevant fintech product:** Invoice amount/due date, payment reference, part-payment and aging if integrated.
- **Needs connected merchant data:** Debtor contacts, disputes, promised payments and approved credit policy.
- **Proposed intervention:** Prioritize overdue balances, reconcile deductions and prepare contextual reminders.
- **Limit:** Collecting a debt is different from approving more credit or resolving a contract dispute.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / invoices / receivables agent; India; product-specific eligibility | 2/5 | Contextual receivables assistance is described; dispute-aware suppression needs testing.  Confidence: Medium. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |
| Mondu — B2B trade accounts; UK / Europe | 2/5 | Partial fit for this specific pain. Approved trade accounts and deferred collections. Eligibility and contractual risk transfer apply; not an unrestricted credit line. Confidence: Medium. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

#### 05.4.3 — A customer makes a part-payment without explaining the deduction

*Research hypothesis · Applies to: B2B*

- **Need:** Track the remaining obligation and distinguish deduction from settlement.
- **Observable signal:** Invoice balance; remittance details; credits; withholding.
- **Outcome to measure:** Unresolved deductions; collection accuracy.
- **Related workflow evidence:** [U14: BILL](https://www.bill.com/product/accounts-receivable/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R14: Razorpay](https://razorpay.com/smart-collect/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/)


**Fintech role:** Direct — Accounts receivable / invoice collection / trade credit

- **Observable in the relevant fintech product:** Invoice amount/due date, payment reference, part-payment and aging if integrated.
- **Needs connected merchant data:** Debtor contacts, disputes, promised payments and approved credit policy.
- **Proposed intervention:** Prioritize overdue balances, reconcile deductions and prepare contextual reminders.
- **Limit:** Collecting a debt is different from approving more credit or resolving a contract dispute.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / invoices / receivables agent; India; product-specific eligibility | 2/5 | References and receipt matching help; short-pay reasoning remains partial.  Confidence: Medium. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |
| Mondu — B2B trade accounts; UK / Europe | 3/5 | Substantial fit for this specific pain. Approved trade accounts and deferred collections. Eligibility and contractual risk transfer apply; not an unrestricted credit line. Confidence: Medium. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

#### 05.4.4 — Late-paying customers keep placing new orders on credit

*Research hypothesis · Applies to: B2B*

- **Need:** Make credit exposure visible before extending more terms.
- **Observable signal:** Overdue balance; open orders; agreed credit limit.
- **Outcome to measure:** Bad debt exposure; overdue concentration.
- **Related workflow evidence:** [U14: BILL](https://www.bill.com/product/accounts-receivable/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R14: Razorpay](https://razorpay.com/smart-collect/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/)


**Fintech role:** Direct — Accounts receivable / invoice collection / trade credit

- **Observable in the relevant fintech product:** Invoice amount/due date, payment reference, part-payment and aging if integrated.
- **Needs connected merchant data:** Debtor contacts, disputes, promised payments and approved credit policy.
- **Proposed intervention:** Prioritize overdue balances, reconcile deductions and prepare contextual reminders.
- **Limit:** Collecting a debt is different from approving more credit or resolving a contract dispute.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / invoices / receivables agent; India; product-specific eligibility | 1/5 | No general merchant trade-credit policy engine was verified.  Confidence: Low. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |
| Mondu — B2B trade accounts; UK / Europe | 4/5 | Strong fit for this specific pain. Approved trade accounts and deferred collections. Eligibility and contractual risk transfer apply; not an unrestricted credit line. Confidence: Medium. | [F27: Mondu](https://www.mondu.ai/en-gb/partnerships/) |

### 05.5. 5E. Recovery economics and customer treatment

**Latent need hypothesis:** I need recovery effort to be proportionate, permitted and measurable.

**Related product/workflow sources:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [U14: BILL](https://www.bill.com/product/accounts-receivable/)

#### 05.5.1 — I cannot prioritize which failed payments or invoices to work first

*Research hypothesis · Applies to: All*

- **Need:** Rank by recoverable value, age, reason, cost and customer context.
- **Observable signal:** Unique unpaid obligations; reason; contact cost; probability estimates.
- **Outcome to measure:** Net cash recovered per unit of effort.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Recovery operations / fair treatment / value measurement

- **Observable in the relevant fintech product:** Failed obligations, retry history, collection fees and unique successful payments.
- **Needs connected merchant data:** Contact permissions, disputes, expected recovery, costs and treatment history.
- **Proposed intervention:** Choose a permitted next step and compare net unique recoveries with a baseline.
- **Limit:** Repeated attempts are not additional sales; contact and repayment constraints apply.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / AutoPay recovery; India; product-specific eligibility | 3/5 | Recovery tools provide workflows; optimal cross-product prioritization is not proven.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R12: Razorpay](https://razorpay.com/blog/?p=26313) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 05.5.2 — Repeated retries or calls cost more than the amount recovered

*Research hypothesis · Applies to: All*

- **Need:** Limit attempts and stop when expected recovery no longer justifies cost.
- **Observable signal:** Attempt count; provider/message fees; response.
- **Outcome to measure:** Recovery contribution after fees; wasted attempts.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Recovery operations / fair treatment / value measurement

- **Observable in the relevant fintech product:** Failed obligations, retry history, collection fees and unique successful payments.
- **Needs connected merchant data:** Contact permissions, disputes, expected recovery, costs and treatment history.
- **Proposed intervention:** Choose a permitted next step and compare net unique recoveries with a baseline.
- **Limit:** Repeated attempts are not additional sales; contact and repayment constraints apply.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / AutoPay recovery; India; product-specific eligibility | 2/5 | Automation reduces effort; cost-aware stopping is not fully established.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R12: Razorpay](https://razorpay.com/blog/?p=26313) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 05.5.3 — Someone already rejected further contact but the recovery flow continues

*Research hypothesis · Applies to: All*

- **Need:** Honor consent, refusal and approved channel/frequency limits.
- **Observable signal:** Opt-out; call outcome; suppression state.
- **Outcome to measure:** Prohibited contacts; complaints.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Recovery operations / fair treatment / value measurement

- **Observable in the relevant fintech product:** Failed obligations, retry history, collection fees and unique successful payments.
- **Needs connected merchant data:** Contact permissions, disputes, expected recovery, costs and treatment history.
- **Proposed intervention:** Choose a permitted next step and compare net unique recoveries with a baseline.
- **Limit:** Repeated attempts are not additional sales; contact and repayment constraints apply.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / AutoPay recovery; India; product-specific eligibility | 2/5 | Consent checks are described; all external opt-outs must be joined.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R12: Razorpay](https://razorpay.com/blog/?p=26313) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 05.5.4 — Recovered-payment reports count retries as separate sales

*Research hypothesis · Applies to: All*

- **Need:** Measure distinct paid obligations and account for later refunds.
- **Observable signal:** Order/invoice IDs; attempts; refunds; recovery attribution.
- **Outcome to measure:** Deduplicated net recovery; reporting accuracy.
- **Related workflow evidence:** [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Recovery operations / fair treatment / value measurement

- **Observable in the relevant fintech product:** Failed obligations, retry history, collection fees and unique successful payments.
- **Needs connected merchant data:** Contact permissions, disputes, expected recovery, costs and treatment history.
- **Proposed intervention:** Choose a permitted next step and compare net unique recoveries with a baseline.
- **Limit:** Repeated attempts are not additional sales; contact and repayment constraints apply.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent Studio / RAY / AutoPay recovery; India; product-specific eligibility | 3/5 | Transaction reporting helps deduplication; causal recovery still needs a baseline.  Confidence: Low–medium: rollout or access needs validation. | [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R12: Razorpay](https://razorpay.com/blog/?p=26313) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

## 06. Deliver the promised value

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-941)

**Job:** Complete each accepted order or service reliably, at a sustainable cost.

**Boundary:** Owns order execution, dispatch, delivery, service delivery and failed-delivery/RTO prevention. Post-delivery returns or compensation belong in 07; stock planning in 02; carrier COD remittance in 08.

**Illustrative moment:** Priya has paid orders waiting to be packed, a courier pickup that did not happen and two customers marked unreachable.

**Razorpay coverage:** Razorpay Magic Checkout and Agent Studio address COD confirmation, RTO risk and feedback. They are not evidenced as full warehouse, dispatch or service-delivery systems. Shiprocket, Zoho and Square cover adjacent execution.

[R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U06: Square](https://squareup.com/us/en/appointments), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

### 06.1. 6A. Order handoff and preparation

**Latent need hypothesis:** I need every accepted order to become an accurate task that someone owns.

**Related product/workflow sources:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices)

#### 06.1.1 — A paid order never reaches the packing team

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Detect missing handoffs between order capture and fulfillment.
- **Observable signal:** Paid orders without fulfillment task; event delay.
- **Outcome to measure:** Orders stuck before preparation; handoff time.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices)


**Fintech role:** Data-enabled — Paid-order handoff / fulfillment release

- **Observable in the relevant fintech product:** Verified paid/captured status and refund/cancellation events.
- **Needs connected merchant data:** Packing queue, SKUs, stock reservation, address changes and dispatch state.
- **Proposed intervention:** Release only valid orders, flag missing handoffs and show revenue at risk.
- **Limit:** Financial confirmation cannot guarantee correct picking or physical execution.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment webhooks / Magic Checkout integration; India; product-specific eligibility | 3/5 | Payment events enable handoff; the store must consume and act on them.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R10: Razorpay](https://razorpay.com/magic-checkout/) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 4/5 | Strong fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 06.1.2 — Workers pick the wrong variant or omit an item

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Match picking and packing to the accepted order and record checks.
- **Observable signal:** Pick scans; packing checks; mismatch reports.
- **Outcome to measure:** Wrong/missing-item rate; rework cost.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices)


**Fintech role:** Data-enabled — Paid-order handoff / fulfillment release

- **Observable in the relevant fintech product:** Verified paid/captured status and refund/cancellation events.
- **Needs connected merchant data:** Packing queue, SKUs, stock reservation, address changes and dispatch state.
- **Proposed intervention:** Release only valid orders, flag missing handoffs and show revenue at risk.
- **Limit:** Financial confirmation cannot guarantee correct picking or physical execution.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment webhooks / Magic Checkout integration; India; product-specific eligibility | 0/5 | No direct packing-accuracy workflow was verified.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R10: Razorpay](https://razorpay.com/magic-checkout/) |
| Stripe — Payments / Billing; US / supported markets | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Merchant setup and external banks still determine outcomes. Confidence: Low. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 06.1.3 — Urgent and ordinary orders compete with no clear priority

*Research hypothesis · Applies to: Retail, Online, B2B*

- **Need:** Sequence work by commitment, availability and delivery cutoff.
- **Observable signal:** Promised dates; queue age; cutoff; order readiness.
- **Outcome to measure:** On-time dispatch; urgent-order misses.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices)


**Fintech role:** Data-enabled — Paid-order handoff / fulfillment release

- **Observable in the relevant fintech product:** Verified paid/captured status and refund/cancellation events.
- **Needs connected merchant data:** Packing queue, SKUs, stock reservation, address changes and dispatch state.
- **Proposed intervention:** Release only valid orders, flag missing handoffs and show revenue at risk.
- **Limit:** Financial confirmation cannot guarantee correct picking or physical execution.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment webhooks / Magic Checkout integration; India; product-specific eligibility | 1/5 | Payment value is an input; packing priority needs operational rules.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R10: Razorpay](https://razorpay.com/magic-checkout/) |
| Stripe — Payments / Billing; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Low. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 2/5 | Partial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 06.1.4 — A customer changes an address or item after preparation starts

*Research hypothesis · Applies to: Online*

- **Need:** Apply changes only while feasible and synchronize every affected system.
- **Observable signal:** Order stage; edit timestamps; label/packing state.
- **Outcome to measure:** Avoidable reshipments; change handling time.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html), [U08: Square](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices)


**Fintech role:** Data-enabled — Paid-order handoff / fulfillment release

- **Observable in the relevant fintech product:** Verified paid/captured status and refund/cancellation events.
- **Needs connected merchant data:** Packing queue, SKUs, stock reservation, address changes and dispatch state.
- **Proposed intervention:** Release only valid orders, flag missing handoffs and show revenue at risk.
- **Limit:** Financial confirmation cannot guarantee correct picking or physical execution.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment webhooks / Magic Checkout integration; India; product-specific eligibility | 1/5 | Checkout data helps at order time; post-packing changes need the fulfillment tool.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R10: Razorpay](https://razorpay.com/magic-checkout/) |
| Stripe — Payments / Billing; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Low. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

### 06.2. 6B. Dispatch and carrier choice

**Latent need hypothesis:** I need the delivery option that best fits the promised service and order economics.

**Related product/workflow sources:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)

#### 06.2.1 — The cheapest courier performs poorly on particular routes

*Research hypothesis · Applies to: Online*

- **Need:** Compare route-level reliability, price and promise fit.
- **Observable signal:** Carrier/pincode delivery rate; delay; total shipping cost.
- **Outcome to measure:** Delivered contribution; on-time delivery.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Adjacent — Logistics economics / carrier invoices / transit protection

- **Observable in the relevant fintech product:** Shipping bills and paid order value where connected.
- **Needs connected merchant data:** Lane reliability, pickup events, dimensions, parcel splits and claims.
- **Proposed intervention:** Compare delivered contribution after freight and flag unsupported charges.
- **Limit:** Carrier selection and physical service remain operational; fintech supplies costs or protection.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP / financial records; no core carrier planner; India; product-specific eligibility | 1/5 | Financial cost data helps; route-level courier optimization is unverified.  Confidence: Low. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/) |
| Shiprocket — Shipping / NDR; India / supported routes | 4/5 | Strong fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 06.2.2 — Missed pickups cause late delivery despite on-time packing

*Research hypothesis · Applies to: Online, B2B*

- **Need:** Track pickup commitments and escalate before the cutoff is lost.
- **Observable signal:** Ready time; pickup scans; failed pickup records.
- **Outcome to measure:** Pickup adherence; dispatch delay.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Adjacent — Logistics economics / carrier invoices / transit protection

- **Observable in the relevant fintech product:** Shipping bills and paid order value where connected.
- **Needs connected merchant data:** Lane reliability, pickup events, dimensions, parcel splits and claims.
- **Proposed intervention:** Compare delivered contribution after freight and flag unsupported charges.
- **Limit:** Carrier selection and physical service remain operational; fintech supplies costs or protection.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP / financial records; no core carrier planner; India; product-specific eligibility | 0/5 | No direct pickup execution workflow was verified.  Confidence: Low. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/) |
| Shiprocket — Shipping / NDR; India / supported routes | 3/5 | Substantial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Zoho — Books / Inventory; India / supported editions | 1/5 | Enabling / adjacent fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Low. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 06.2.3 — Packaging dimensions cause unexpected shipping charges

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Record accurate package measurements and audit billed differences.
- **Observable signal:** Measured/billed weight; dimensions; packaging type.
- **Outcome to measure:** Shipping variance; disputed charges recovered.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Adjacent — Logistics economics / carrier invoices / transit protection

- **Observable in the relevant fintech product:** Shipping bills and paid order value where connected.
- **Needs connected merchant data:** Lane reliability, pickup events, dimensions, parcel splits and claims.
- **Proposed intervention:** Compare delivered contribution after freight and flag unsupported charges.
- **Limit:** Carrier selection and physical service remain operational; fintech supplies costs or protection.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP / financial records; no core carrier planner; India; product-specific eligibility | 1/5 | AP records expose charges; weight disputes need shipment evidence.  Confidence: Low. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/) |
| Shiprocket — Shipping / NDR; India / supported routes | 3/5 | Substantial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 06.2.4 — Multi-package or split orders confuse customers and staff

*Research hypothesis · Applies to: Online, B2B*

- **Need:** Track each parcel against one order and explain separate arrivals.
- **Observable signal:** Parcel IDs; item allocation; delivery status.
- **Outcome to measure:** Split-order inquiries; missing-parcel incidents.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Adjacent — Logistics economics / carrier invoices / transit protection

- **Observable in the relevant fintech product:** Shipping bills and paid order value where connected.
- **Needs connected merchant data:** Lane reliability, pickup events, dimensions, parcel splits and claims.
- **Proposed intervention:** Compare delivered contribution after freight and flag unsupported charges.
- **Limit:** Carrier selection and physical service remain operational; fintech supplies costs or protection.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP / financial records; no core carrier planner; India; product-specific eligibility | 0/5 | Payment data does not manage split-parcel communication.  Confidence: Low. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/) |
| Shiprocket — Shipping / NDR; India / supported routes | 3/5 | Substantial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

### 06.3. 6C. In-transit visibility and intervention

**Latent need hypothesis:** I need to fix delivery problems while a sale can still be saved.

**Related product/workflow sources:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

#### 06.3.1 — Customers keep asking where their order is

*Research hypothesis · Applies to: Online*

- **Need:** Provide current tracking and proactively explain meaningful delays.
- **Observable signal:** Tracking freshness; delay events; contact reasons.
- **Outcome to measure:** Where-is-my-order contacts; resolution time.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Adjacent — In-transit financial risk / cross-border documents

- **Observable in the relevant fintech product:** Paid amount, refunds and insurance/finance exposure where contracted.
- **Needs connected merchant data:** Tracking scans, delivery exceptions, customs documents and support messages.
- **Proposed intervention:** Surface value at risk and prepare evidence for permitted logistics intervention.
- **Limit:** Processor records alone cannot locate a parcel or release customs holds.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment context / support integrations; India; product-specific eligibility | 1/5 | Order/payment context helps support; native tracking is not established.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 4/5 | Strong fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Gorgias — AI customer support; Global / supported ecommerce | 4/5 | Strong fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

#### 06.3.2 — The courier marks a customer unreachable without a useful next step

*Research hypothesis · Applies to: Online*

- **Need:** Confirm the issue and request a feasible reattempt promptly.
- **Observable signal:** NDR reason; customer response; reattempt window.
- **Outcome to measure:** NDR recovery; avoidable RTO.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Adjacent — In-transit financial risk / cross-border documents

- **Observable in the relevant fintech product:** Paid amount, refunds and insurance/finance exposure where contracted.
- **Needs connected merchant data:** Tracking scans, delivery exceptions, customs documents and support messages.
- **Proposed intervention:** Surface value at risk and prepare evidence for permitted logistics intervention.
- **Limit:** Processor records alone cannot locate a parcel or release customs holds.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment context / support integrations; India; product-specific eligibility | 1/5 | Specialist context is adjacent; courier follow-up is a logistics workflow.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 4/5 | Strong fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Gorgias — AI customer support; Global / supported ecommerce | 3/5 | Substantial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

#### 06.3.3 — A parcel is stuck but nobody notices until the customer complains

*Research hypothesis · Applies to: Online, B2B*

- **Need:** Flag abnormal transit and assign follow-up ownership.
- **Observable signal:** Time since scan; route benchmark; carrier exceptions.
- **Outcome to measure:** Time to detect/resolve delay; late deliveries.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Adjacent — In-transit financial risk / cross-border documents

- **Observable in the relevant fintech product:** Paid amount, refunds and insurance/finance exposure where contracted.
- **Needs connected merchant data:** Tracking scans, delivery exceptions, customs documents and support messages.
- **Proposed intervention:** Surface value at risk and prepare evidence for permitted logistics intervention.
- **Limit:** Processor records alone cannot locate a parcel or release customs holds.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment context / support integrations; India; product-specific eligibility | 1/5 | Financial exposure can prioritize cases; tracking requires external events.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 3/5 | Substantial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Gorgias — AI customer support; Global / supported ecommerce | 3/5 | Substantial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

#### 06.3.4 — An international shipment stalls over missing information

*Research hypothesis · Applies to: Online, B2B*

- **Need:** Prepare required shipment data and coordinate exception resolution.
- **Observable signal:** Customs holds; missing invoice fields; carrier requests.
- **Outcome to measure:** Clearance time; avoidable international cancellations.
- **Related workflow evidence:** [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Adjacent — In-transit financial risk / cross-border documents

- **Observable in the relevant fintech product:** Paid amount, refunds and insurance/finance exposure where contracted.
- **Needs connected merchant data:** Tracking scans, delivery exceptions, customs documents and support messages.
- **Proposed intervention:** Surface value at risk and prepare evidence for permitted logistics intervention.
- **Limit:** Processor records alone cannot locate a parcel or release customs holds.
- **Gap classification:** Adjacent operational need

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment context / support integrations; India; product-specific eligibility | 1/5 | Payment records assist documentation; customs execution is outside verified scope.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 2/5 | Partial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| Gorgias — AI customer support; Global / supported ecommerce | 2/5 | Partial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

### 06.4. 6D. Acceptance and failed-delivery prevention

**Latent need hypothesis:** I need legitimate orders to be accepted without rejecting good customers unnecessarily.

**Related product/workflow sources:** [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)

#### 06.4.1 — COD buyers forget or change their minds before delivery

*Research hypothesis · Applies to: Online*

- **Need:** Confirm intent and communicate the actual delivery/payment expectations.
- **Observable signal:** Confirmation response; delivery date; acceptance history.
- **Outcome to measure:** COD acceptance; net delivered contribution.
- **Related workflow evidence:** [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Data-enabled — COD risk / address validation / RTO economics

- **Observable in the relevant fintech product:** Payment choice, prepaid conversion and connected historical outcomes.
- **Needs connected merchant data:** Address serviceability, delivery confirmation, COD acceptance and returned stock.
- **Proposed intervention:** Confirm intent, offer eligible alternatives and monitor loss versus false rejection.
- **Limit:** Past outcomes do not prove current intent; errors need review and correction.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / COD agent; India; product-specific eligibility | 3/5 | COD confirmation targets this problem; acceptance cannot be guaranteed.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 3/5 | Substantial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| GoKwik — KwikEngage; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |

#### 06.4.2 — A delivery address is incomplete or unserviceable

*Research hypothesis · Applies to: Online*

- **Need:** Correct necessary details before dispatch or a reattempt.
- **Observable signal:** Address errors; serviceability; delivery feedback.
- **Outcome to measure:** Address-caused delivery failures.
- **Related workflow evidence:** [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Data-enabled — COD risk / address validation / RTO economics

- **Observable in the relevant fintech product:** Payment choice, prepaid conversion and connected historical outcomes.
- **Needs connected merchant data:** Address serviceability, delivery confirmation, COD acceptance and returned stock.
- **Proposed intervention:** Confirm intent, offer eligible alternatives and monitor loss versus false rejection.
- **Limit:** Past outcomes do not prove current intent; errors need review and correction.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / COD agent; India; product-specific eligibility | 3/5 | Checkout address tools help; carrier serviceability must remain current.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 3/5 | Substantial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| GoKwik — KwikEngage; India / connected ecommerce | 2/5 | Partial fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |

#### 06.4.3 — Risk rules block too many genuine COD customers

*Research hypothesis · Applies to: Online*

- **Need:** Review error rates and allow appropriate approved alternatives.
- **Observable signal:** Blocked orders; successful appeals; later outcomes.
- **Outcome to measure:** False blocks; losses avoided versus sales lost.
- **Related workflow evidence:** [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Data-enabled — COD risk / address validation / RTO economics

- **Observable in the relevant fintech product:** Payment choice, prepaid conversion and connected historical outcomes.
- **Needs connected merchant data:** Address serviceability, delivery confirmation, COD acceptance and returned stock.
- **Proposed intervention:** Confirm intent, offer eligible alternatives and monitor loss versus false rejection.
- **Limit:** Past outcomes do not prove current intent; errors need review and correction.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / COD agent; India; product-specific eligibility | 2/5 | Risk decisions need error-rate visibility; fair-review coverage is not fully verified.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 2/5 | Partial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| GoKwik — KwikEngage; India / connected ecommerce | 2/5 | Partial fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Medium. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |

#### 06.4.4 — Returned-to-origin parcels disappear from sellable stock for weeks

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Track reverse transit, receiving and condition before restocking.
- **Observable signal:** RTO status; inbound scan; condition check.
- **Outcome to measure:** RTO cycle time; inventory recovered.
- **Related workflow evidence:** [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132)


**Fintech role:** Data-enabled — COD risk / address validation / RTO economics

- **Observable in the relevant fintech product:** Payment choice, prepaid conversion and connected historical outcomes.
- **Needs connected merchant data:** Address serviceability, delivery confirmation, COD acceptance and returned stock.
- **Proposed intervention:** Confirm intent, offer eligible alternatives and monitor loss versus false rejection.
- **Limit:** Past outcomes do not prove current intent; errors need review and correction.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Magic Checkout / COD agent; India; product-specific eligibility | 1/5 | RTO prevention helps upstream; returned-stock control remains external.  Confidence: Low. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Shiprocket — Shipping / NDR; India / supported routes | 3/5 | Substantial fit for this specific pain. Shipping and failed-delivery workflows with transaction consequences. Operational peer; not classified here as a pure fintech company. Confidence: Medium. | [I04: Shiprocket](https://www.shiprocket.in/features/), [I05: Shiprocket](https://support.shiprocket.in/support/solutions/folders/152000000132) |
| GoKwik — KwikEngage; India / connected ecommerce | 1/5 | Enabling / adjacent fit for this specific pain. Messaging and engagement linked to merchant customer and order context. Does not prove universal incremental-profit optimization. Confidence: Low. | [I03: GoKwik](https://www.gokwik.co/product/kwikengage) |

### 06.5. 6E. Service and digital delivery

**Latent need hypothesis:** I need customers to receive the booked service or digital entitlement at the promised time.

**Related product/workflow sources:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/)

#### 06.5.1 — A customer does not show up and the reserved slot is wasted

*Research hypothesis · Applies to: Service*

- **Need:** Confirm appointments, offer rescheduling and apply disclosed policies.
- **Observable signal:** Attendance; reminder response; cancellation time.
- **Outcome to measure:** No-show rate; recovered capacity.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/)


**Fintech role:** Data-enabled — Deposits / entitlements / milestone evidence

- **Observable in the relevant fintech product:** Payment/deposit status, subscription entitlement trigger and invoice reference.
- **Needs connected merchant data:** Attendance, service schedule, access provisioning and signed acceptance.
- **Proposed intervention:** Connect valid payment to delivery, enforce approved deposit policy and preserve evidence.
- **Limit:** Payment is not proof of attendance, useful service or accepted work.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment Links / Subscriptions / events; India; product-specific eligibility | 2/5 | Deposits help deter no-shows; full attendance management is external.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments; US edition | 4/5 | Strong fit for this specific pain. Booking, payment and no-show-related workflows. Policy configuration and staff reliability remain merchant responsibilities. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments) |
| Stripe — Payments / Billing; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Low. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 06.5.2 — Staff delays cascade into every later appointment

*Research hypothesis · Applies to: Service, Food*

- **Need:** Detect schedule slippage and coordinate realistic customer updates.
- **Observable signal:** Actual service duration; queue; staff status.
- **Outcome to measure:** Wait time; late starts; rescheduling cost.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/)


**Fintech role:** Data-enabled — Deposits / entitlements / milestone evidence

- **Observable in the relevant fintech product:** Payment/deposit status, subscription entitlement trigger and invoice reference.
- **Needs connected merchant data:** Attendance, service schedule, access provisioning and signed acceptance.
- **Proposed intervention:** Connect valid payment to delivery, enforce approved deposit policy and preserve evidence.
- **Limit:** Payment is not proof of attendance, useful service or accepted work.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment Links / Subscriptions / events; India; product-specific eligibility | 0/5 | No service-scheduling engine was verified.  Confidence: Low. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments; US edition | 3/5 | Substantial fit for this specific pain. Booking, payment and no-show-related workflows. Policy configuration and staff reliability remain merchant responsibilities. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments) |
| Stripe — Payments / Billing; US / supported markets | 0/5 | No direct support found fit for this specific pain. The cited offering addresses a neighboring job rather than this need. Merchant setup and external banks still determine outcomes. Confidence: Low. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 06.5.3 — Payment succeeds but digital access is never granted

*Research hypothesis · Applies to: Subscription, Service*

- **Need:** Connect verified payment with correct entitlement and repair failures.
- **Observable signal:** Payment/entitlement mismatch; provisioning errors.
- **Outcome to measure:** Time to access; paid-but-blocked customers.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/)


**Fintech role:** Data-enabled — Deposits / entitlements / milestone evidence

- **Observable in the relevant fintech product:** Payment/deposit status, subscription entitlement trigger and invoice reference.
- **Needs connected merchant data:** Attendance, service schedule, access provisioning and signed acceptance.
- **Proposed intervention:** Connect valid payment to delivery, enforce approved deposit policy and preserve evidence.
- **Limit:** Payment is not proof of attendance, useful service or accepted work.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment Links / Subscriptions / events; India; product-specific eligibility | 3/5 | Subscription/payment events support provisioning; the app must grant access.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Booking, payment and no-show-related workflows. Policy configuration and staff reliability remain merchant responsibilities. Confidence: Low. | [U06: Square](https://squareup.com/us/en/appointments) |
| Stripe — Payments / Billing; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

#### 06.5.4 — B2B work is delivered but acceptance proof is missing

*Research hypothesis · Applies to: B2B, Service*

- **Need:** Capture agreed milestones, delivery records and customer acceptance.
- **Observable signal:** Work completion; sign-off; delivery evidence.
- **Outcome to measure:** Unaccepted completed work; billing delay.
- **Related workflow evidence:** [U06: Square](https://squareup.com/us/en/appointments), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772), [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/)


**Fintech role:** Data-enabled — Deposits / entitlements / milestone evidence

- **Observable in the relevant fintech product:** Payment/deposit status, subscription entitlement trigger and invoice reference.
- **Needs connected merchant data:** Attendance, service schedule, access provisioning and signed acceptance.
- **Proposed intervention:** Connect valid payment to delivery, enforce approved deposit policy and preserve evidence.
- **Limit:** Payment is not proof of attendance, useful service or accepted work.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Payment Links / Subscriptions / events; India; product-specific eligibility | 2/5 | Invoices record a claim; signed delivery acceptance needs a separate source.  Confidence: Medium. | [R17: Razorpay](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/), [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/) |
| Square — Appointments; US edition | 2/5 | Partial fit for this specific pain. Booking, payment and no-show-related workflows. Policy configuration and staff reliability remain merchant responsibilities. Confidence: Medium. | [U06: Square](https://squareup.com/us/en/appointments) |
| Stripe — Payments / Billing; US / supported markets | 2/5 | Partial fit for this specific pain. Payment lifecycle, integration events and recurring collection tools. Merchant setup and external banks still determine outcomes. Confidence: Medium. | [F09: Stripe](https://docs.stripe.com/payments/payment-intents), [F10: Stripe](https://docs.stripe.com/webhooks), [U02: Stripe](https://stripe.com/blog/how-we-built-it-smart-retries), [F47: Stripe](https://docs.stripe.com/billing/subscriptions/change-price) |

## 07. Resolve exceptions and protect value

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-1152)

**Job:** Handle returns, refunds, disputes and fraud fairly while limiting avoidable loss.

**Boundary:** Owns contested/reversed transactions and loss protection, including transaction-fraud decisions before payment. Failed payment execution is 05; failed delivery prevention is 06; future relationship retention is 09.

**Illustrative moment:** A delivered item arrives damaged, a customer asks for an exchange, and a bank dispute arrives with a deadline. Priya needs distinct policies and evidence for each.

**Razorpay coverage:** Razorpay supports refunds, wallet refunds and Agent Studio dispute response. Magic Checkout provides risk controls. Public evidence here does not establish a complete AI product-exchange optimizer; Return Prime and Loop show deeper returns workflows.

[R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U03: Stripe](https://stripe.com/radar), [U04: Stripe](https://stripe.com/payments/dispute-management), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

### 07.1. 7A. Return eligibility and diagnosis

**Latent need hypothesis:** I need to understand what went wrong and resolve it consistently without punishing honest customers.

**Related product/workflow sources:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

#### 07.1.1 — Return requests arrive across channels with incomplete order details

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Create one case tied to the order, item, reason and policy.
- **Observable signal:** Duplicate tickets; missing order IDs; return reasons.
- **Outcome to measure:** Time to first resolution; duplicate case rate.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Return decision / refund liability / reverse movement

- **Observable in the relevant fintech product:** Original payment, refundable balance and reversal history.
- **Needs connected merchant data:** Item identity, return policy, condition, reasons, pickup and inspection.
- **Proposed intervention:** Join evidence to a return case and estimate the financial effect of valid resolutions.
- **Limit:** Payment data cannot inspect goods or determine every commercial entitlement.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent feedback / refund APIs / integrations; India; product-specific eligibility | 2/5 | Refund/order context exists; unified return intake is mainly integrated.  Confidence: Medium. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 4/5 | Strong fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 4/5 | Strong fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

#### 07.1.2 — Staff apply the return policy differently to similar customers

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Make eligibility and approved exceptions clear and traceable.
- **Observable signal:** Policy version; case attributes; exception approvals.
- **Outcome to measure:** Inconsistent decisions; escalations.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Return decision / refund liability / reverse movement

- **Observable in the relevant fintech product:** Original payment, refundable balance and reversal history.
- **Needs connected merchant data:** Item identity, return policy, condition, reasons, pickup and inspection.
- **Proposed intervention:** Join evidence to a return case and estimate the financial effect of valid resolutions.
- **Limit:** Payment data cannot inspect goods or determine every commercial entitlement.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent feedback / refund APIs / integrations; India; product-specific eligibility | 2/5 | Guardrails help permitted actions; policy adjudication needs product context.  Confidence: Medium. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 3/5 | Substantial fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

#### 07.1.3 — Generic return reasons hide a recurring quality or sizing defect

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Capture useful structured reasons and review product-level patterns.
- **Observable signal:** Reason text; SKU/batch; photos; defect incidence.
- **Outcome to measure:** Repeat defects; preventable return rate.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Return decision / refund liability / reverse movement

- **Observable in the relevant fintech product:** Original payment, refundable balance and reversal history.
- **Needs connected merchant data:** Item identity, return policy, condition, reasons, pickup and inspection.
- **Proposed intervention:** Join evidence to a return case and estimate the financial effect of valid resolutions.
- **Limit:** Payment data cannot inspect goods or determine every commercial entitlement.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent feedback / refund APIs / integrations; India; product-specific eligibility | 2/5 | Feedback can reveal patterns; root-cause quality investigation remains partial.  Confidence: Medium. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 3/5 | Substantial fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

#### 07.1.4 — A return is approved but reverse pickup and inspection are delayed

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Track each stage until the item is inspected and the case resolved.
- **Observable signal:** Pickup; inbound scan; inspection; case age.
- **Outcome to measure:** Return turnaround; recoverable stock value.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Data-enabled — Return decision / refund liability / reverse movement

- **Observable in the relevant fintech product:** Original payment, refundable balance and reversal history.
- **Needs connected merchant data:** Item identity, return policy, condition, reasons, pickup and inspection.
- **Proposed intervention:** Join evidence to a return case and estimate the financial effect of valid resolutions.
- **Limit:** Payment data cannot inspect goods or determine every commercial entitlement.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Agent feedback / refund APIs / integrations; India; product-specific eligibility | 1/5 | Refund execution does not control reverse pickup or inspection.  Confidence: Low. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 3/5 | Substantial fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

### 07.2. 7B. Exchange and fair alternatives

**Latent need hypothesis:** I need to preserve a useful customer relationship when another solution fits their actual need.

**Related product/workflow sources:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/)

#### 07.2.1 — A customer requests a refund for a fixable variant mismatch

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Offer an available, relevant exchange while preserving valid refund choice.
- **Observable signal:** Return reason; replacement stock; exchange acceptance.
- **Outcome to measure:** Net value retained after exchange costs.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/)


**Fintech role:** Data-enabled — Exchange / store-credit liability / refund alternatives

- **Observable in the relevant fintech product:** Paid/refunded amount, credit issued and redemption if supported.
- **Needs connected merchant data:** Customer preference, suitable available stock, margin and incentive cost.
- **Proposed intervention:** Offer a consented exchange or refund and show net value after obligations.
- **Limit:** Store credit is a liability until resolved under the applicable accounting treatment.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Wallet refunds / Engage / linked returns; India; product-specific eligibility | 3/5 | Wallet/refund partnerships support alternatives; suitability still matters.  Confidence: Medium. | [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R07: Razorpay](https://razorpay.com/engage/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 4/5 | Strong fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 4/5 | Strong fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

#### 07.2.2 — An exchange recommendation suggests an unavailable or unsuitable item

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Use current stock and stated customer needs for recommendations.
- **Observable signal:** Inventory freshness; suitability attributes; repeat returns.
- **Outcome to measure:** Successful exchanges; second-return rate.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/)


**Fintech role:** Data-enabled — Exchange / store-credit liability / refund alternatives

- **Observable in the relevant fintech product:** Paid/refunded amount, credit issued and redemption if supported.
- **Needs connected merchant data:** Customer preference, suitable available stock, margin and incentive cost.
- **Proposed intervention:** Offer a consented exchange or refund and show net value after obligations.
- **Limit:** Store credit is a liability until resolved under the applicable accounting treatment.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Wallet refunds / Engage / linked returns; India; product-specific eligibility | 2/5 | An alternative needs live inventory; universal matching is unverified.  Confidence: Medium. | [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R07: Razorpay](https://razorpay.com/engage/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 3/5 | Substantial fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

#### 07.2.3 — Store credit looks like recovered revenue even when it remains unused

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Track credit liability, redemption and actual incremental repurchase separately.
- **Observable signal:** Credits issued/redeemed/expired; associated orders.
- **Outcome to measure:** Redeemed contribution; outstanding credit liability.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/)


**Fintech role:** Data-enabled — Exchange / store-credit liability / refund alternatives

- **Observable in the relevant fintech product:** Paid/refunded amount, credit issued and redemption if supported.
- **Needs connected merchant data:** Customer preference, suitable available stock, margin and incentive cost.
- **Proposed intervention:** Offer a consented exchange or refund and show net value after obligations.
- **Limit:** Store credit is a liability until resolved under the applicable accounting treatment.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Wallet refunds / Engage / linked returns; India; product-specific eligibility | 2/5 | Credit records help; profit and liability treatment need accounting.  Confidence: Medium. | [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R07: Razorpay](https://razorpay.com/engage/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 3/5 | Substantial fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 3/5 | Substantial fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

#### 07.2.4 — Incentives to avoid refunds exceed the margin saved

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Compare exchange/credit incentives with shipping, item and service costs.
- **Observable signal:** Incentive value; reverse logistics; retained margin.
- **Outcome to measure:** Net retained contribution; customer satisfaction.
- **Related workflow evidence:** [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/)


**Fintech role:** Data-enabled — Exchange / store-credit liability / refund alternatives

- **Observable in the relevant fintech product:** Paid/refunded amount, credit issued and redemption if supported.
- **Needs connected merchant data:** Customer preference, suitable available stock, margin and incentive cost.
- **Proposed intervention:** Offer a consented exchange or refund and show net value after obligations.
- **Limit:** Store credit is a liability until resolved under the applicable accounting treatment.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Wallet refunds / Engage / linked returns; India; product-specific eligibility | 2/5 | Offer controls help; net-margin-aware optimization is unverified.  Confidence: Medium. | [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R07: Razorpay](https://razorpay.com/engage/), [F05: Razorpay](https://razorpay.com/docs/payments/refunds/) |
| Return Prime — Thrive AI / returns; India / connected ecommerce | 2/5 | Partial fit for this specific pain. Returns and exchange assistance to preserve suitable orders. Merchant policy, stock and customer consent still govern the resolution. Confidence: Medium. | [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands) |
| Loop — Returns / exchanges; US-led / supported ecommerce | 2/5 | Partial fit for this specific pain. Return and exchange workflows. Announced or coming-soon agent capabilities are not counted as broadly deployed. Confidence: Medium. | [U12: Loop](https://www.loopreturns.com/launches/spring-2026/) |

### 07.3. 7C. Refund accuracy and communication

**Latent need hypothesis:** I need to return the right amount once and give the customer a trustworthy status.

**Related product/workflow sources:** [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

#### 07.3.1 — The refund amount is wrong after a partial return or bundled discount

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Calculate against the actual paid amount, item allocation and policy.
- **Observable signal:** Original payment; discounts; returned items; previous refunds.
- **Outcome to measure:** Refund calculation errors; adjustment cost.
- **Related workflow evidence:** [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Refund authorization / execution / status

- **Observable in the relevant fintech product:** Original transaction, refundable amount, refund ID, state and references.
- **Needs connected merchant data:** Item-level entitlement, discount allocation, support approvals and customer communication.
- **Proposed intervention:** Validate an approved refund and communicate verified progress.
- **Limit:** Bank completion and the correct commercial amount are not fully controlled by the gateway.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Refund APIs / dashboard / team controls; India; product-specific eligibility | 3/5 | Partial refund tools exist; bundle allocation needs order-level logic.  Confidence: Medium. | [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Refunds; US / supported markets | 3/5 | Substantial fit for this specific pain. Refund amount and state management linked to the original payment. Commerce entitlement and external bank timelines remain. Confidence: Medium. | [F11: Stripe](https://docs.stripe.com/refunds) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 07.3.2 — Two staff members refund the same complaint

*Research hypothesis · Applies to: All*

- **Need:** Coordinate cases and check prior refund state before execution.
- **Observable signal:** Refund IDs; case IDs; pending/processed amount.
- **Outcome to measure:** Duplicate refunds; financial loss.
- **Related workflow evidence:** [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Refund authorization / execution / status

- **Observable in the relevant fintech product:** Original transaction, refundable amount, refund ID, state and references.
- **Needs connected merchant data:** Item-level entitlement, discount allocation, support approvals and customer communication.
- **Proposed intervention:** Validate an approved refund and communicate verified progress.
- **Limit:** Bank completion and the correct commercial amount are not fully controlled by the gateway.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Refund APIs / dashboard / team controls; India; product-specific eligibility | 3/5 | Transaction limits help; safe concurrent approvals still need controls.  Confidence: Medium. | [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Refunds; US / supported markets | 3/5 | Substantial fit for this specific pain. Refund amount and state management linked to the original payment. Commerce entitlement and external bank timelines remain. Confidence: Medium. | [F11: Stripe](https://docs.stripe.com/refunds) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 07.3.3 — The customer cannot see where a delayed refund is stuck

*Research hypothesis · Applies to: All*

- **Need:** Provide status, reference and appropriate escalation without inventing an arrival date.
- **Observable signal:** Refund state; provider reference; elapsed time.
- **Outcome to measure:** Refund-related contacts; resolution time.
- **Related workflow evidence:** [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Refund authorization / execution / status

- **Observable in the relevant fintech product:** Original transaction, refundable amount, refund ID, state and references.
- **Needs connected merchant data:** Item-level entitlement, discount allocation, support approvals and customer communication.
- **Proposed intervention:** Validate an approved refund and communicate verified progress.
- **Limit:** Bank completion and the correct commercial amount are not fully controlled by the gateway.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Refund APIs / dashboard / team controls; India; product-specific eligibility | 4/5 | Status workflows directly help; bank delays remain possible.  Confidence: Medium. | [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Refunds; US / supported markets | 4/5 | Strong fit for this specific pain. Refund amount and state management linked to the original payment. Commerce entitlement and external bank timelines remain. Confidence: Medium. | [F11: Stripe](https://docs.stripe.com/refunds) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

#### 07.3.4 — A refund approval waits because the merchant fears abuse

*Research hypothesis · Applies to: All*

- **Need:** Separate routine eligible refunds from cases needing evidence or approval.
- **Observable signal:** Policy eligibility; risk signals; approval queue.
- **Outcome to measure:** Time to refund; manual review yield.
- **Related workflow evidence:** [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772)


**Fintech role:** Direct — Refund authorization / execution / status

- **Observable in the relevant fintech product:** Original transaction, refundable amount, refund ID, state and references.
- **Needs connected merchant data:** Item-level entitlement, discount allocation, support approvals and customer communication.
- **Proposed intervention:** Validate an approved refund and communicate verified progress.
- **Limit:** Bank completion and the correct commercial amount are not fully controlled by the gateway.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Refund APIs / dashboard / team controls; India; product-specific eligibility | 2/5 | Permissions help; fraud-versus-service judgment is not fully automated.  Confidence: Medium. | [F05: Razorpay](https://razorpay.com/docs/payments/refunds/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/) |
| Stripe — Refunds; US / supported markets | 2/5 | Partial fit for this specific pain. Refund amount and state management linked to the original payment. Commerce entitlement and external bank timelines remain. Confidence: Medium. | [F11: Stripe](https://docs.stripe.com/refunds) |
| Square — Retail POS; US edition | 3/5 | Substantial fit for this specific pain. Connects payment, inventory and purchasing records. Only supported connected channels; physical stock still needs accurate records. Confidence: Medium. | [F13: Square](https://squareup.com/us/en/point-of-sale/retail), [F18: Square](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail) |

### 07.4. 7D. Disputes and chargebacks

**Latent need hypothesis:** I need to respond with accurate evidence before deadlines and learn why disputes happen.

**Related product/workflow sources:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U04: Stripe](https://stripe.com/payments/dispute-management)

#### 07.4.1 — A dispute deadline passes while evidence sits in several tools

*Research hypothesis · Applies to: Online, B2B, Subscription*

- **Need:** Gather order, payment, delivery and communication records into one case.
- **Observable signal:** Deadline; missing evidence; connector status.
- **Outcome to measure:** On-time response; avoidable default losses.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U04: Stripe](https://stripe.com/payments/dispute-management)


**Fintech role:** Direct — Dispute evidence / chargeback management

- **Observable in the relevant fintech product:** Dispute reason, deadline, payment authentication and submitted evidence.
- **Needs connected merchant data:** Delivery/usage proof, customer communications, policy acceptance and response cost.
- **Proposed intervention:** Assemble evidence, recommend contest or accept, and track repeated causes.
- **Limit:** Winning remains the issuer/network decision; strongest evidence is often external.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dispute workflows / Agent Studio; India; product-specific eligibility | 3/5 | Specialist dispute preparation is described; evidence completeness remains conditional.  Confidence: Medium. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Smart Disputes; US / supported markets | 4/5 | Strong fit for this specific pain. Dispute evidence and response automation. Not guaranteed wins; product terms and eligible disputes vary. Confidence: Medium. | [U04: Stripe](https://stripe.com/payments/dispute-management) |
| Gorgias — AI customer support; Global / supported ecommerce | 2/5 | Partial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

#### 07.4.2 — I spend more fighting a weak dispute than its recoverable value

*Research hypothesis · Applies to: Online, B2B*

- **Need:** Assess eligibility, evidence quality, cost and win uncertainty.
- **Observable signal:** Dispute amount/reason; evidence; handling cost.
- **Outcome to measure:** Net dispute recovery; time per case.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U04: Stripe](https://stripe.com/payments/dispute-management)


**Fintech role:** Direct — Dispute evidence / chargeback management

- **Observable in the relevant fintech product:** Dispute reason, deadline, payment authentication and submitted evidence.
- **Needs connected merchant data:** Delivery/usage proof, customer communications, policy acceptance and response cost.
- **Proposed intervention:** Assemble evidence, recommend contest or accept, and track repeated causes.
- **Limit:** Winning remains the issuer/network decision; strongest evidence is often external.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dispute workflows / Agent Studio; India; product-specific eligibility | 2/5 | No complete expected-net-value decision engine was verified.  Confidence: Medium. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Smart Disputes; US / supported markets | 3/5 | Substantial fit for this specific pain. Dispute evidence and response automation. Not guaranteed wins; product terms and eligible disputes vary. Confidence: Medium. | [U04: Stripe](https://stripe.com/payments/dispute-management) |
| Gorgias — AI customer support; Global / supported ecommerce | 1/5 | Enabling / adjacent fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Low. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

#### 07.4.3 — A customer does not recognize the billing description

*Research hypothesis · Applies to: Online, Subscription*

- **Need:** Make charge identity and purchase details easy to verify.
- **Observable signal:** Unrecognized-charge reasons; descriptor; receipts.
- **Outcome to measure:** Avoidable disputes; inquiry resolution.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U04: Stripe](https://stripe.com/payments/dispute-management)


**Fintech role:** Direct — Dispute evidence / chargeback management

- **Observable in the relevant fintech product:** Dispute reason, deadline, payment authentication and submitted evidence.
- **Needs connected merchant data:** Delivery/usage proof, customer communications, policy acceptance and response cost.
- **Proposed intervention:** Assemble evidence, recommend contest or accept, and track repeated causes.
- **Limit:** Winning remains the issuer/network decision; strongest evidence is often external.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dispute workflows / Agent Studio; India; product-specific eligibility | 2/5 | Payment and support context can help; descriptor configuration must be checked.  Confidence: Medium. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Smart Disputes; US / supported markets | 3/5 | Substantial fit for this specific pain. Dispute evidence and response automation. Not guaranteed wins; product terms and eligible disputes vary. Confidence: Medium. | [U04: Stripe](https://stripe.com/payments/dispute-management) |
| Gorgias — AI customer support; Global / supported ecommerce | 1/5 | Enabling / adjacent fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Low. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

#### 07.4.4 — The same underlying issue keeps generating new chargebacks

*Research hypothesis · Applies to: Online, Subscription*

- **Need:** Link dispute reasons to product, fulfillment or billing defects.
- **Observable signal:** Reason codes; cohorts; affected products; recurring failures.
- **Outcome to measure:** Repeat dispute incidence; root-cause fixes.
- **Related workflow evidence:** [R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [U04: Stripe](https://stripe.com/payments/dispute-management)


**Fintech role:** Direct — Dispute evidence / chargeback management

- **Observable in the relevant fintech product:** Dispute reason, deadline, payment authentication and submitted evidence.
- **Needs connected merchant data:** Delivery/usage proof, customer communications, policy acceptance and response cost.
- **Proposed intervention:** Assemble evidence, recommend contest or accept, and track repeated causes.
- **Limit:** Winning remains the issuer/network decision; strongest evidence is often external.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Dispute workflows / Agent Studio; India; product-specific eligibility | 2/5 | Case data exposes repetition; fixing underlying fulfillment needs other teams.  Confidence: Medium. | [R02: Razorpay](https://razorpay.com/agent-studio/), [F04: Razorpay](https://razorpay.com/blog/how-to-use-razorpay-dashboard/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/) |
| Stripe — Smart Disputes; US / supported markets | 3/5 | Substantial fit for this specific pain. Dispute evidence and response automation. Not guaranteed wins; product terms and eligible disputes vary. Confidence: Medium. | [U04: Stripe](https://stripe.com/payments/dispute-management) |
| Gorgias — AI customer support; Global / supported ecommerce | 2/5 | Partial fit for this specific pain. Order-aware customer support and permitted actions. Needs connected product and policy data; not primarily fintech. Confidence: Medium. | [U13: Gorgias](https://docs.gorgias.com/en-US/ai-agent-explained-497772) |

### 07.5. 7E. Fraud, abuse and fair review

**Latent need hypothesis:** I need to stop real losses while protecting legitimate sales and customers.

**Related product/workflow sources:** [U03: Stripe](https://stripe.com/radar), [U04: Stripe](https://stripe.com/payments/dispute-management), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/)

#### 07.5.1 — Stolen credentials or automated attacks create risky payments

*Research hypothesis · Applies to: Online, Subscription*

- **Need:** Screen relevant risk signals and use proportionate verification.
- **Observable signal:** Transaction patterns; device/risk signals; later confirmed fraud.
- **Outcome to measure:** Fraud loss; legitimate acceptance.
- **Related workflow evidence:** [U03: Stripe](https://stripe.com/radar), [U04: Stripe](https://stripe.com/payments/dispute-management), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/)


**Fintech role:** Direct — Transaction fraud / abuse / review

- **Observable in the relevant fintech product:** Payment velocity, authentication, instrument/device risk and disputes in scope.
- **Needs connected merchant data:** Promotion histories, returns, account identity and manually reviewed outcomes.
- **Proposed intervention:** Flag risk, apply bounded controls and measure false declines alongside losses.
- **Limit:** Scores are uncertain; permissions and sensitive attributes require careful handling.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Shield cross-border / exporter risk dashboard / COD risk; India; product-specific eligibility | 3/5 | Shield and risk controls address specified flows; exporter scope is not universal domestic coverage.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [F43: Razorpay](https://razorpay.com/blog/built-in-payment-gateway-fraud-detection-india/) |
| Stripe — Radar; US / supported markets | 4/5 | Strong fit for this specific pain. Payment-risk detection, review and configurable rules. Fraud evolves; cross-tool promotion/return abuse needs additional data. Confidence: Medium. | [U03: Stripe](https://stripe.com/radar) |
| Cashfree — RiskShield; India | 3/5 | Substantial fit for this specific pain. Payment risk monitoring and configurable fraud controls. Product tier, payment scope and false-positive outcomes need verification. Confidence: Medium. | [F45: Cashfree](https://www.cashfree.com/news-room/cashfree-payments-launches-riskshield-to-empower-merchants-curb-cyber-payment-frauds-in-real-time/) |

#### 07.5.2 — Strict risk rules reject good customers and I cannot see the tradeoff

*Research hypothesis · Applies to: Online*

- **Need:** Measure false positives and allow controlled review or alternate verification.
- **Observable signal:** Declines; appeals; verified good outcomes.
- **Outcome to measure:** Good sales lost; loss prevented.
- **Related workflow evidence:** [U03: Stripe](https://stripe.com/radar), [U04: Stripe](https://stripe.com/payments/dispute-management), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/)


**Fintech role:** Direct — Transaction fraud / abuse / review

- **Observable in the relevant fintech product:** Payment velocity, authentication, instrument/device risk and disputes in scope.
- **Needs connected merchant data:** Promotion histories, returns, account identity and manually reviewed outcomes.
- **Proposed intervention:** Flag risk, apply bounded controls and measure false declines alongside losses.
- **Limit:** Scores are uncertain; permissions and sensitive attributes require careful handling.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Shield cross-border / exporter risk dashboard / COD risk; India; product-specific eligibility | 2/5 | Controls exist; transparent lost-sales tradeoffs need outcome measurement.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [F43: Razorpay](https://razorpay.com/blog/built-in-payment-gateway-fraud-detection-india/) |
| Stripe — Radar; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment-risk detection, review and configurable rules. Fraud evolves; cross-tool promotion/return abuse needs additional data. Confidence: Medium. | [U03: Stripe](https://stripe.com/radar) |
| Cashfree — RiskShield; India | 2/5 | Partial fit for this specific pain. Payment risk monitoring and configurable fraud controls. Product tier, payment scope and false-positive outcomes need verification. Confidence: Medium. | [F45: Cashfree](https://www.cashfree.com/news-room/cashfree-payments-launches-riskshield-to-empower-merchants-curb-cyber-payment-frauds-in-real-time/) |

#### 07.5.3 — Repeated coupon or return abuse escapes separate systems

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Connect permitted account, order and return histories with human review.
- **Observable signal:** Repeated incentives; return ratios; linked cases.
- **Outcome to measure:** Confirmed abuse loss; mistaken accusations.
- **Related workflow evidence:** [U03: Stripe](https://stripe.com/radar), [U04: Stripe](https://stripe.com/payments/dispute-management), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/)


**Fintech role:** Direct — Transaction fraud / abuse / review

- **Observable in the relevant fintech product:** Payment velocity, authentication, instrument/device risk and disputes in scope.
- **Needs connected merchant data:** Promotion histories, returns, account identity and manually reviewed outcomes.
- **Proposed intervention:** Flag risk, apply bounded controls and measure false declines alongside losses.
- **Limit:** Scores are uncertain; permissions and sensitive attributes require careful handling.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Shield cross-border / exporter risk dashboard / COD risk; India; product-specific eligibility | 1/5 | Separated commerce systems limit cross-channel abuse detection.  Confidence: Low. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [F43: Razorpay](https://razorpay.com/blog/built-in-payment-gateway-fraud-detection-india/) |
| Stripe — Radar; US / supported markets | 2/5 | Partial fit for this specific pain. Payment-risk detection, review and configurable rules. Fraud evolves; cross-tool promotion/return abuse needs additional data. Confidence: Medium. | [U03: Stripe](https://stripe.com/radar) |
| Cashfree — RiskShield; India | 1/5 | Enabling / adjacent fit for this specific pain. Payment risk monitoring and configurable fraud controls. Product tier, payment scope and false-positive outcomes need verification. Confidence: Low. | [F45: Cashfree](https://www.cashfree.com/news-room/cashfree-payments-launches-riskshield-to-empower-merchants-curb-cyber-payment-frauds-in-real-time/) |

#### 07.5.4 — Fraud detection gives a score without an actionable explanation

*Research hypothesis · Applies to: All*

- **Need:** Show the evidence, uncertainty and permitted decision choices.
- **Observable signal:** Risk reasons; missing data; reviewer decisions.
- **Outcome to measure:** Review quality; time per decision.
- **Related workflow evidence:** [U03: Stripe](https://stripe.com/radar), [U04: Stripe](https://stripe.com/payments/dispute-management), [R10: Razorpay](https://razorpay.com/magic-checkout/), [I06: Return Prime](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands), [U12: Loop](https://www.loopreturns.com/launches/spring-2026/)


**Fintech role:** Direct — Transaction fraud / abuse / review

- **Observable in the relevant fintech product:** Payment velocity, authentication, instrument/device risk and disputes in scope.
- **Needs connected merchant data:** Promotion histories, returns, account identity and manually reviewed outcomes.
- **Proposed intervention:** Flag risk, apply bounded controls and measure false declines alongside losses.
- **Limit:** Scores are uncertain; permissions and sensitive attributes require careful handling.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Shield cross-border / exporter risk dashboard / COD risk; India; product-specific eligibility | 2/5 | Risk inputs help; explanations and appeal outcomes need checking.  Confidence: Medium. | [R10: Razorpay](https://razorpay.com/magic-checkout/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [F43: Razorpay](https://razorpay.com/blog/built-in-payment-gateway-fraud-detection-india/) |
| Stripe — Radar; US / supported markets | 3/5 | Substantial fit for this specific pain. Payment-risk detection, review and configurable rules. Fraud evolves; cross-tool promotion/return abuse needs additional data. Confidence: Medium. | [U03: Stripe](https://stripe.com/radar) |
| Cashfree — RiskShield; India | 2/5 | Partial fit for this specific pain. Payment risk monitoring and configurable fraud controls. Product tier, payment scope and false-positive outcomes need verification. Confidence: Medium. | [F45: Cashfree](https://www.cashfree.com/news-room/cashfree-payments-launches-riskshield-to-empower-merchants-curb-cyber-payment-frauds-in-real-time/) |

## 08. Receive, reconcile and account for money

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-1362)

**Job:** Know where collected money is, match it to business records and produce trustworthy accounts.

**Boundary:** Owns settlement, remittance, matching, fee audit and financial/tax records. Unpaid customer obligations are 05; cash allocation and financing decisions are 10.

**Illustrative moment:** Priya’s sales report, courier COD statement and bank balance all differ. Her accountant needs to separate normal timing from missing funds or incorrect deductions.

**Razorpay coverage:** Razorpay settlements, reports, Smart Collect and RAY cover substantial payment visibility and matching. Whole-ledger reconciliation, tax close and revenue recognition require additional systems and context.

[R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R14: Razorpay](https://razorpay.com/smart-collect/), [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I08: Clear](https://cleartax.in/gst), [U05: Stripe](https://stripe.com/revenue-recognition)

### 08.1. 8A. Settlement and remittance visibility

**Latent need hypothesis:** I need to know when collected money will become available and why something is delayed.

**Related product/workflow sources:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)

#### 08.1.1 — Sales are successful but the money is not yet in my bank

*Research hypothesis · Applies to: All*

- **Need:** Distinguish authorized, captured, pending settlement and bank-received states.
- **Observable signal:** Settlement schedule; capture date; bank credit.
- **Outcome to measure:** Unexpected settlement delay; forecast accuracy.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Settlement / remittance / currency receipt

- **Observable in the relevant fintech product:** Captured amounts, settlement batches, payout state, deductions and FX in scope.
- **Needs connected merchant data:** Bank credits, marketplace/courier remittance, bank holidays and contracted terms.
- **Proposed intervention:** Trace a collection to usable bank cash and isolate the blocking party.
- **Limit:** A provider usually sees only its own settlement rail without additional connections.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlements / Smart Collect / international transfers; India; product-specific eligibility | 4/5 | Settlement tracking directly addresses own-rail cash visibility.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R14: Razorpay](https://razorpay.com/smart-collect/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 4/5 | Strong fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Medium. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 08.1.2 — A payout is held or fails without a clear owner for resolution

*Research hypothesis · Applies to: All*

- **Need:** See the actual status, requested evidence and next escalation.
- **Observable signal:** Hold reason; bank details; settlement failure events.
- **Outcome to measure:** Time to release/resolve; unresolved balance.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Settlement / remittance / currency receipt

- **Observable in the relevant fintech product:** Captured amounts, settlement batches, payout state, deductions and FX in scope.
- **Needs connected merchant data:** Bank credits, marketplace/courier remittance, bank holidays and contracted terms.
- **Proposed intervention:** Trace a collection to usable bank cash and isolate the blocking party.
- **Limit:** A provider usually sees only its own settlement rail without additional connections.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlements / Smart Collect / international transfers; India; product-specific eligibility | 3/5 | Failure states help; bank/provider resolution may still require support.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R14: Razorpay](https://razorpay.com/smart-collect/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 3/5 | Substantial fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Medium. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 08.1.3 — COD cash collected by the courier is not remitted as expected

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Match delivered COD orders with carrier collection and remittance.
- **Observable signal:** Delivery proof; COD ledger; remittance batches.
- **Outcome to measure:** Overdue COD receivable; missing cash.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Settlement / remittance / currency receipt

- **Observable in the relevant fintech product:** Captured amounts, settlement batches, payout state, deductions and FX in scope.
- **Needs connected merchant data:** Bank credits, marketplace/courier remittance, bank holidays and contracted terms.
- **Proposed intervention:** Trace a collection to usable bank cash and isolate the blocking party.
- **Limit:** A provider usually sees only its own settlement rail without additional connections.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlements / Smart Collect / international transfers; India; product-specific eligibility | 1/5 | No complete native courier-COD remittance workflow was verified.  Confidence: Low. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R14: Razorpay](https://razorpay.com/smart-collect/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 1/5 | Enabling / adjacent fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Low. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 08.1.4 — International receipts arrive net of unfamiliar conversions and deductions

*Research hypothesis · Applies to: Online, B2B, Subscription*

- **Need:** Track original currency, conversion, fees and net bank credit.
- **Observable signal:** FX rate; payment advice; bank statement; fee detail.
- **Outcome to measure:** Unexplained FX/fee variance; remittance matching.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Settlement / remittance / currency receipt

- **Observable in the relevant fintech product:** Captured amounts, settlement batches, payout state, deductions and FX in scope.
- **Needs connected merchant data:** Bank credits, marketplace/courier remittance, bank holidays and contracted terms.
- **Proposed intervention:** Trace a collection to usable bank cash and isolate the blocking party.
- **Limit:** A provider usually sees only its own settlement rail without additional connections.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlements / Smart Collect / international transfers; India; product-specific eligibility | 3/5 | International collection disclosures help; currency and fee coverage varies.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [R14: Razorpay](https://razorpay.com/smart-collect/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 4/5 | Strong fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Medium. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

### 08.2. 8B. Transaction matching

**Latent need hypothesis:** I need one traceable chain from order to payment to settlement to bank.

**Related product/workflow sources:** [R14: Razorpay](https://razorpay.com/smart-collect/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U14: BILL](https://www.bill.com/product/accounts-receivable/)

#### 08.2.1 — One bank deposit contains hundreds of sales and deductions

*Research hypothesis · Applies to: All*

- **Need:** Break settlement batches into their underlying transactions.
- **Observable signal:** Settlement IDs; transaction reports; bank credits.
- **Outcome to measure:** Unmatched value; reconciliation time.
- **Related workflow evidence:** [R14: Razorpay](https://razorpay.com/smart-collect/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Reconciliation / account references / accounting joins

- **Observable in the relevant fintech product:** Payment, refund, dispute, settlement IDs and references.
- **Needs connected merchant data:** Invoices, bank statements, marketplace exports and accounting-period rules.
- **Proposed intervention:** Match known flows, explain residual differences and route exceptions.
- **Limit:** Automatic matching needs stable identifiers; ambiguous matches should remain reviewable.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / settlement reports / AP ERP; India; product-specific eligibility | 4/5 | Own-rail settlement breakdowns support batch matching.  Confidence: Medium. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 4/5 | Strong fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 08.2.2 — A bank transfer arrives without an invoice reference

*Research hypothesis · Applies to: B2B, Solo, Service*

- **Need:** Identify the payer and obligation without guessing.
- **Observable signal:** Customer identifiers; remittance advice; amount/date matches.
- **Outcome to measure:** Unallocated cash; incorrect allocations.
- **Related workflow evidence:** [R14: Razorpay](https://razorpay.com/smart-collect/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Reconciliation / account references / accounting joins

- **Observable in the relevant fintech product:** Payment, refund, dispute, settlement IDs and references.
- **Needs connected merchant data:** Invoices, bank statements, marketplace exports and accounting-period rules.
- **Proposed intervention:** Match known flows, explain residual differences and route exceptions.
- **Limit:** Automatic matching needs stable identifiers; ambiguous matches should remain reviewable.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / settlement reports / AP ERP; India; product-specific eligibility | 4/5 | Virtual collection identifiers support invoice-linked bank transfer receipt.  Confidence: Medium. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 4/5 | Strong fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 08.2.3 — Refunds and disputes appear in a later period than the sale

*Research hypothesis · Applies to: All*

- **Need:** Link reversals to originals while preserving accounting dates.
- **Observable signal:** Original IDs; reversal dates; settlement adjustments.
- **Outcome to measure:** Unexplained period differences; adjustment accuracy.
- **Related workflow evidence:** [R14: Razorpay](https://razorpay.com/smart-collect/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Reconciliation / account references / accounting joins

- **Observable in the relevant fintech product:** Payment, refund, dispute, settlement IDs and references.
- **Needs connected merchant data:** Invoices, bank statements, marketplace exports and accounting-period rules.
- **Proposed intervention:** Match known flows, explain residual differences and route exceptions.
- **Limit:** Automatic matching needs stable identifiers; ambiguous matches should remain reviewable.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / settlement reports / AP ERP; India; product-specific eligibility | 3/5 | Event records help; cross-period accounting policy remains external.  Confidence: Medium. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 4/5 | Strong fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 08.2.4 — Marketplaces and gateways use incompatible formats and identifiers

*Research hypothesis · Applies to: Online, Retail*

- **Need:** Normalize records and route ambiguous matches for review.
- **Observable signal:** Files/APIs; order references; duplicate/missing fields.
- **Outcome to measure:** Auto-match quality; exception backlog.
- **Related workflow evidence:** [R14: Razorpay](https://razorpay.com/smart-collect/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I02: Juspay](https://juspay.io/payment-orchestration), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Reconciliation / account references / accounting joins

- **Observable in the relevant fintech product:** Payment, refund, dispute, settlement IDs and references.
- **Needs connected merchant data:** Invoices, bank statements, marketplace exports and accounting-period rules.
- **Proposed intervention:** Match known flows, explain residual differences and route exceptions.
- **Limit:** Automatic matching needs stable identifiers; ambiguous matches should remain reviewable.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Smart Collect / settlement reports / AP ERP; India; product-specific eligibility | 2/5 | Multiple formats need a broader reconciliation layer than gateway reporting.  Confidence: Medium. | [R14: Razorpay](https://razorpay.com/smart-collect/), [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

### 08.3. 8C. Fees, deductions and leakage

**Latent need hypothesis:** I need to know whether every deduction is expected and justified.

**Related product/workflow sources:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)

#### 08.3.1 — Processing fees differ from my agreed commercial terms

*Research hypothesis · Applies to: All*

- **Need:** Compare actual charges with the applicable contract and payment mix.
- **Observable signal:** Fee schedules; invoices; transaction attributes.
- **Outcome to measure:** Incorrect fees identified and recovered.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Fee audit / deductions / settlement financing

- **Observable in the relevant fintech product:** Observed provider fees, settlement adjustments and offered access charges.
- **Needs connected merchant data:** Commercial contracts, courier weights, marketplace terms and bank alternatives.
- **Proposed intervention:** Compare realized deductions with agreed terms and queue material mismatches.
- **Limit:** A report is not an independent audit of whether charges were commercially correct.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlement reports / AP / instant settlement; India; product-specific eligibility | 2/5 | Fee visibility exists; automated contract-to-fee auditing is unverified.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

#### 08.3.2 — Shipping or marketplace deductions are silently accepted

*Research hypothesis · Applies to: Online*

- **Need:** Audit billed charges against shipment/order records and allowed terms.
- **Observable signal:** Weight disputes; commissions; penalties; contract terms.
- **Outcome to measure:** Disputed deductions; net value recovered.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Fee audit / deductions / settlement financing

- **Observable in the relevant fintech product:** Observed provider fees, settlement adjustments and offered access charges.
- **Needs connected merchant data:** Commercial contracts, courier weights, marketplace terms and bank alternatives.
- **Proposed intervention:** Compare realized deductions with agreed terms and queue material mismatches.
- **Limit:** A report is not an independent audit of whether charges were commercially correct.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlement reports / AP / instant settlement; India; product-specific eligibility | 1/5 | AP can record charges; logistics and marketplace contesting need evidence.  Confidence: Low. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

#### 08.3.3 — Small unmatched amounts are repeatedly written off

*Research hypothesis · Applies to: All*

- **Need:** Aggregate recurring exceptions and investigate systemic causes.
- **Observable signal:** Exception frequency; amount patterns; write-off reasons.
- **Outcome to measure:** Preventable write-offs; unresolved aging.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Fee audit / deductions / settlement financing

- **Observable in the relevant fintech product:** Observed provider fees, settlement adjustments and offered access charges.
- **Needs connected merchant data:** Commercial contracts, courier weights, marketplace terms and bank alternatives.
- **Proposed intervention:** Compare realized deductions with agreed terms and queue material mismatches.
- **Limit:** A report is not an independent audit of whether charges were commercially correct.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlement reports / AP / instant settlement; India; product-specific eligibility | 2/5 | Matching helps find residuals; policy determines investigation versus write-off.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

#### 08.3.4 — Instant access to funds is offered without a clear cost comparison

*Research hypothesis · Applies to: All*

- **Need:** Compare speed, fee and actual cash need before choosing settlement options.
- **Observable signal:** Available balance; timing; fees; upcoming obligations.
- **Outcome to measure:** Avoidable financing/settlement cost.
- **Related workflow evidence:** [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/), [I04: Shiprocket](https://www.shiprocket.in/features/), [I10: PayGlocal](https://payglocal.in/)


**Fintech role:** Direct — Fee audit / deductions / settlement financing

- **Observable in the relevant fintech product:** Observed provider fees, settlement adjustments and offered access charges.
- **Needs connected merchant data:** Commercial contracts, courier weights, marketplace terms and bank alternatives.
- **Proposed intervention:** Compare realized deductions with agreed terms and queue material mismatches.
- **Limit:** A report is not an independent audit of whether charges were commercially correct.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Settlement reports / AP / instant settlement; India; product-specific eligibility | 2/5 | Access options exist; independent all-in financing comparison is unverified.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |

### 08.4. 8D. Bookkeeping, tax and evidence

**Latent need hypothesis:** I need accurate records that my accountant can close without repeatedly asking me to reconstruct events.

**Related product/workflow sources:** [I08: Clear](https://cleartax.in/gst), [U05: Stripe](https://stripe.com/revenue-recognition), [R16: Razorpay](https://razorpay.com/payroll/founder/), [R14: Razorpay](https://razorpay.com/smart-collect/)

#### 08.4.1 — Sales invoices, purchase records and tax data contain mismatches

*Research hypothesis · Applies to: All*

- **Need:** Reconcile documents and resolve missing or inconsistent entries.
- **Observable signal:** Invoice IDs; tax records; purchase/sales registers.
- **Outcome to measure:** Unresolved mismatches; close rework.
- **Related workflow evidence:** [I08: Clear](https://cleartax.in/gst), [U05: Stripe](https://stripe.com/revenue-recognition), [R16: Razorpay](https://razorpay.com/payroll/founder/), [R14: Razorpay](https://razorpay.com/smart-collect/)


**Fintech role:** Direct — Bookkeeping / tax evidence / revenue recognition

- **Observable in the relevant fintech product:** Receipts, payouts, invoices, reimbursements and settlement reports in scope.
- **Needs connected merchant data:** Ledger categories, tax registrations, obligations, delivered service and personal spending.
- **Proposed intervention:** Prepare reconciled evidence and explain cash versus earned revenue.
- **Limit:** Tax/accounting decisions require the applicable rules and a complete ledger.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Reports / AP integration / Payroll compliance; India; product-specific eligibility | 2/5 | Connected records help; complete GST/bookkeeping is not a gateway feature.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R16: Razorpay](https://razorpay.com/payroll/founder/) |
| Zoho — Books / Inventory; India / supported editions | 4/5 | Strong fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Stripe — Revenue Recognition; US / supported markets | 2/5 | Partial fit for this specific pain. Revenue-recognition workflow from connected billing and transaction records. General business bookkeeping, inventory and all local tax duties are broader. Confidence: Medium. | [U05: Stripe](https://stripe.com/revenue-recognition) |

#### 08.4.2 — Business and personal transactions are mixed together

*Research hypothesis · Applies to: Solo, Service*

- **Need:** Classify transactions and retain supporting evidence consistently.
- **Observable signal:** Accounts; receipts; owner transfers; categories.
- **Outcome to measure:** Unclassified items; accountant rework.
- **Related workflow evidence:** [I08: Clear](https://cleartax.in/gst), [U05: Stripe](https://stripe.com/revenue-recognition), [R16: Razorpay](https://razorpay.com/payroll/founder/), [R14: Razorpay](https://razorpay.com/smart-collect/)


**Fintech role:** Direct — Bookkeeping / tax evidence / revenue recognition

- **Observable in the relevant fintech product:** Receipts, payouts, invoices, reimbursements and settlement reports in scope.
- **Needs connected merchant data:** Ledger categories, tax registrations, obligations, delivered service and personal spending.
- **Proposed intervention:** Prepare reconciled evidence and explain cash versus earned revenue.
- **Limit:** Tax/accounting decisions require the applicable rules and a complete ledger.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Reports / AP integration / Payroll compliance; India; product-specific eligibility | 2/5 | Business accounts assist separation; classification still needs user context.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R16: Razorpay](https://razorpay.com/payroll/founder/) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Stripe — Revenue Recognition; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Revenue-recognition workflow from connected billing and transaction records. General business bookkeeping, inventory and all local tax duties are broader. Confidence: Low. | [U05: Stripe](https://stripe.com/revenue-recognition) |

#### 08.4.3 — Cash receipts are mistaken for earned revenue or profit

*Research hypothesis · Applies to: Subscription, B2B*

- **Need:** Separate collections, liabilities, earned revenue and costs appropriately.
- **Observable signal:** Subscription periods; advances; credit balances; ledger rules.
- **Outcome to measure:** Revenue accuracy; unexplained balance changes.
- **Related workflow evidence:** [I08: Clear](https://cleartax.in/gst), [U05: Stripe](https://stripe.com/revenue-recognition), [R16: Razorpay](https://razorpay.com/payroll/founder/), [R14: Razorpay](https://razorpay.com/smart-collect/)


**Fintech role:** Direct — Bookkeeping / tax evidence / revenue recognition

- **Observable in the relevant fintech product:** Receipts, payouts, invoices, reimbursements and settlement reports in scope.
- **Needs connected merchant data:** Ledger categories, tax registrations, obligations, delivered service and personal spending.
- **Proposed intervention:** Prepare reconciled evidence and explain cash versus earned revenue.
- **Limit:** Tax/accounting decisions require the applicable rules and a complete ledger.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Reports / AP integration / Payroll compliance; India; product-specific eligibility | 1/5 | Sales summaries do not establish an accrual-revenue system.  Confidence: Low. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R16: Razorpay](https://razorpay.com/payroll/founder/) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Stripe — Revenue Recognition; US / supported markets | 4/5 | Strong fit for this specific pain. Revenue-recognition workflow from connected billing and transaction records. General business bookkeeping, inventory and all local tax duties are broader. Confidence: Medium. | [U05: Stripe](https://stripe.com/revenue-recognition) |

#### 08.4.4 — Month-end work depends on missing receipts and manual exports

*Research hypothesis · Applies to: All*

- **Need:** Collect evidence continuously and preserve audit-ready links.
- **Observable signal:** Missing documents; export tasks; exception age.
- **Outcome to measure:** Days to close; manual close hours.
- **Related workflow evidence:** [I08: Clear](https://cleartax.in/gst), [U05: Stripe](https://stripe.com/revenue-recognition), [R16: Razorpay](https://razorpay.com/payroll/founder/), [R14: Razorpay](https://razorpay.com/smart-collect/)


**Fintech role:** Direct — Bookkeeping / tax evidence / revenue recognition

- **Observable in the relevant fintech product:** Receipts, payouts, invoices, reimbursements and settlement reports in scope.
- **Needs connected merchant data:** Ledger categories, tax registrations, obligations, delivered service and personal spending.
- **Proposed intervention:** Prepare reconciled evidence and explain cash versus earned revenue.
- **Limit:** Tax/accounting decisions require the applicable rules and a complete ledger.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Reports / AP integration / Payroll compliance; India; product-specific eligibility | 3/5 | ERP and AP integrations reduce manual work; full close remains broader.  Confidence: Medium. | [R13: Razorpay](https://razorpay.com/docs/payments/settlements/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R16: Razorpay](https://razorpay.com/payroll/founder/) |
| Zoho — Books / Inventory; India / supported editions | 4/5 | Strong fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |
| Stripe — Revenue Recognition; US / supported markets | 3/5 | Substantial fit for this specific pain. Revenue-recognition workflow from connected billing and transaction records. General business bookkeeping, inventory and all local tax duties are broader. Confidence: Medium. | [U05: Stripe](https://stripe.com/revenue-recognition) |

### 08.5. 8E. Decision-ready financial understanding

**Latent need hypothesis:** I need consistent numbers and explanations that help me decide what to do next.

**Related product/workflow sources:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [U05: Stripe](https://stripe.com/revenue-recognition), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)

#### 08.5.1 — Two dashboards report different revenue for the same period

*Research hypothesis · Applies to: All*

- **Need:** Expose definitions, time zones, taxes, refunds and recognition basis.
- **Observable signal:** Metric definitions; date ranges; included statuses.
- **Outcome to measure:** Reporting variance; reconciliation effort.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [U05: Stripe](https://stripe.com/revenue-recognition), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Data-enabled — Financial intelligence / revenue diagnosis

- **Observable in the relevant fintech product:** Transactions, settlement timing, fees and bank records if connected.
- **Needs connected merchant data:** Inventory, channel demand, order delivery, cost ledger and reporting definitions.
- **Proposed intervention:** Reconcile definitions and explain changes with evidence and uncertainty.
- **Limit:** An AI narrative cannot recover missing data or prove causation from correlations.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RAY / RazorpayX cashflow / BillMe; India; product-specific eligibility | 2/5 | Conversational access helps; cross-system revenue definitions need alignment.  Confidence: Medium. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Square AI; US edition | 2/5 | Partial fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Medium. | [F17: Square](https://squareup.com/us/en/ai) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 08.5.2 — Revenue falls but I cannot separate demand loss from payment or delivery failure

*Research hypothesis · Applies to: All*

- **Need:** Break changes into observable stages and avoid unsupported causal claims.
- **Observable signal:** Funnel counts; success rates; stockouts; delivery outcomes.
- **Outcome to measure:** Time to diagnose; confirmed causes addressed.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [U05: Stripe](https://stripe.com/revenue-recognition), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Data-enabled — Financial intelligence / revenue diagnosis

- **Observable in the relevant fintech product:** Transactions, settlement timing, fees and bank records if connected.
- **Needs connected merchant data:** Inventory, channel demand, order delivery, cost ledger and reporting definitions.
- **Proposed intervention:** Reconcile definitions and explain changes with evidence and uncertainty.
- **Limit:** An AI narrative cannot recover missing data or prove causation from correlations.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RAY / RazorpayX cashflow / BillMe; India; product-specific eligibility | 3/5 | Payment root-cause analysis is described; delivery and demand require extra data.  Confidence: Medium. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Square AI; US edition | 2/5 | Partial fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Medium. | [F17: Square](https://squareup.com/us/en/ai) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 08.5.3 — I see total sales but not net contribution by product or channel

*Research hypothesis · Applies to: All*

- **Need:** Connect costs and reversals to sales with stated allocation assumptions.
- **Observable signal:** Net sales; product/fulfillment/channel costs.
- **Outcome to measure:** Contribution visibility; loss-making segments found.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [U05: Stripe](https://stripe.com/revenue-recognition), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Data-enabled — Financial intelligence / revenue diagnosis

- **Observable in the relevant fintech product:** Transactions, settlement timing, fees and bank records if connected.
- **Needs connected merchant data:** Inventory, channel demand, order delivery, cost ledger and reporting definitions.
- **Proposed intervention:** Reconcile definitions and explain changes with evidence and uncertainty.
- **Limit:** An AI narrative cannot recover missing data or prove causation from correlations.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RAY / RazorpayX cashflow / BillMe; India; product-specific eligibility | 2/5 | Sales segmentation is useful; full net contribution needs product/channel costs.  Confidence: Medium. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Square AI; US edition | 3/5 | Substantial fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Medium. | [F17: Square](https://squareup.com/us/en/ai) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 08.5.4 — An AI summary gives an answer without showing the calculation

*Research hypothesis · Applies to: All*

- **Need:** Provide underlying records, definitions and a reproducible calculation.
- **Observable signal:** Query lineage; inputs; excluded records; formula.
- **Outcome to measure:** Answer verification; numerical error rate.
- **Related workflow evidence:** [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [U05: Stripe](https://stripe.com/revenue-recognition), [I01: Cashfree](https://www.cashfree.com/blog/smart-payment-routing/)


**Fintech role:** Data-enabled — Financial intelligence / revenue diagnosis

- **Observable in the relevant fintech product:** Transactions, settlement timing, fees and bank records if connected.
- **Needs connected merchant data:** Inventory, channel demand, order delivery, cost ledger and reporting definitions.
- **Proposed intervention:** Reconcile definitions and explain changes with evidence and uncertainty.
- **Limit:** An AI narrative cannot recover missing data or prove causation from correlations.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RAY / RazorpayX cashflow / BillMe; India; product-specific eligibility | 2/5 | No universal evidence-linked calculation trail was verified for every AI answer.  Confidence: Medium. | [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/) |
| Square — Square AI; US edition | 2/5 | Partial fit for this specific pain. Business questions and content assistance based on connected Square data. Not a general proof of causal growth, profit or external demand. Confidence: Medium. | [F17: Square](https://squareup.com/us/en/ai) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

## 09. Retain and grow existing relationships

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-1573)

**Job:** Earn another useful, profitable purchase and keep customers who still value the offer.

**Boundary:** Owns post-purchase relationship, voluntary churn, loyalty, replenishment and expansion. Failed debits are 05; a live refund/dispute is 07; acquisition of genuinely new buyers is 03.

**Illustrative moment:** Priya knows many buyers never return but does not know whether to wait, remind, educate, recommend another product or offer a benefit.

**Razorpay coverage:** Engage and BillMe already offer customer data, segmentation, loyalty and automated campaigns. AutoPay has cancellation win-back. Individual next-purchase prediction and causal profit measurement remain unverified in reviewed Razorpay public materials.

[R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)

### 09.1. 9A. Identity and relationship context

**Latent need hypothesis:** I need to recognize the same customer and understand their actual experience before contacting them.

**Related product/workflow sources:** [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)

#### 09.1.1 — The same customer appears as several people across store and website

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Resolve identity carefully and retain uncertainty where matching is weak.
- **Observable signal:** Contact IDs; purchase history; match confidence.
- **Outcome to measure:** Duplicate profiles; wrong-person personalization.
- **Related workflow evidence:** [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Payment-linked identity / customer history

- **Observable in the relevant fintech product:** Customer identifiers, order/receipt history and payment-linked profiles.
- **Needs connected merchant data:** Store/website identities, complaints, consent and staff-owned notes.
- **Proposed intervention:** Build a permissioned relationship view and suppress inappropriate outreach.
- **Limit:** Matching is imperfect; identity across merchants is not automatically permitted.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / Engage customer data; India; product-specific eligibility | 3/5 | Unified customer records help; disconnected identifiers still need resolution.  Confidence: Medium. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R07: Razorpay](https://razorpay.com/engage/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 4/5 | Strong fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 3/5 | Substantial fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Medium. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 09.1.2 — I market to a customer without noticing an unresolved complaint

*Research hypothesis · Applies to: All*

- **Need:** Use current service context to pause or adapt relationship outreach.
- **Observable signal:** Open support cases; refund status; recent feedback.
- **Outcome to measure:** Insensitive outreach; complaint escalation.
- **Related workflow evidence:** [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Payment-linked identity / customer history

- **Observable in the relevant fintech product:** Customer identifiers, order/receipt history and payment-linked profiles.
- **Needs connected merchant data:** Store/website identities, complaints, consent and staff-owned notes.
- **Proposed intervention:** Build a permissioned relationship view and suppress inappropriate outreach.
- **Limit:** Matching is imperfect; identity across merchants is not automatically permitted.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / Engage customer data; India; product-specific eligibility | 2/5 | Campaign context exists; complaint joins and suppression need verification.  Confidence: Medium. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R07: Razorpay](https://razorpay.com/engage/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 09.1.3 — I cannot distinguish a regular buyer from a one-time gift purchaser

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Understand purchase purpose and repeat patterns without inventing intent.
- **Observable signal:** Product mix; timing; gift indicators; customer responses.
- **Outcome to measure:** Segment usefulness; irrelevant messages.
- **Related workflow evidence:** [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Payment-linked identity / customer history

- **Observable in the relevant fintech product:** Customer identifiers, order/receipt history and payment-linked profiles.
- **Needs connected merchant data:** Store/website identities, complaints, consent and staff-owned notes.
- **Proposed intervention:** Build a permissioned relationship view and suppress inappropriate outreach.
- **Limit:** Matching is imperfect; identity across merchants is not automatically permitted.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / Engage customer data; India; product-specific eligibility | 2/5 | Purchase segmentation helps; motive requires more than receipt frequency.  Confidence: Medium. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R07: Razorpay](https://razorpay.com/engage/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 3/5 | Substantial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 2/5 | Partial fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Medium. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 09.1.4 — Customer history disappears when a staff member leaves

*Research hypothesis · Applies to: B2B, Service, Retail*

- **Need:** Keep shared relationship notes with appropriate access and consent.
- **Observable signal:** Unlogged conversations; account ownership; missing context.
- **Outcome to measure:** Repeat explanations; handover time.
- **Related workflow evidence:** [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Payment-linked identity / customer history

- **Observable in the relevant fintech product:** Customer identifiers, order/receipt history and payment-linked profiles.
- **Needs connected merchant data:** Store/website identities, complaints, consent and staff-owned notes.
- **Proposed intervention:** Build a permissioned relationship view and suppress inappropriate outreach.
- **Limit:** Matching is imperfect; identity across merchants is not automatically permitted.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe / Engage customer data; India; product-specific eligibility | 3/5 | A shared platform preserves recorded history, not unrecorded staff knowledge.  Confidence: Medium. | [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R07: Razorpay](https://razorpay.com/engage/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 3/5 | Substantial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 2/5 | Partial fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Medium. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

### 09.2. 9B. Replenishment and repeat timing

**Latent need hypothesis:** I need to be helpful at the right moment without discounting customers who would return anyway.

**Related product/workflow sources:** [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)

#### 09.2.1 — I do not know when a customer is likely to need the product again

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Estimate a reorder window using sufficient relevant history and uncertainty.
- **Observable signal:** Order intervals; product/quantity; seasonality.
- **Outcome to measure:** Incremental repeat contribution; timing accuracy.
- **Related workflow evidence:** [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Repeat purchase / replenishment timing

- **Observable in the relevant fintech product:** Purchase intervals, spend, category and customer ID in the merchant footprint.
- **Needs connected merchant data:** SKU consumption, gifts, off-platform purchases, stock and consent.
- **Proposed intervention:** Estimate a repeat window and test whether a reminder adds useful purchases.
- **Limit:** A prediction is not certainty; non-purchase outside the footprint is unobserved.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe Auto Engagement / Engage; India; product-specific eligibility | 2/5 | Automated journeys exist; individual next-order prediction is not established.  Confidence: Medium. | [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R07: Razorpay](https://razorpay.com/engage/) |
| Klaviyo — Predictive analytics; Global / data-eligible merchants | 4/5 | Strong fit for this specific pain. Predictive customer timing and value from connected commerce data. Model eligibility and sufficient history matter; prediction is not causal lift. Confidence: Medium. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 09.2.2 — Everyone receives the same reminder despite different buying patterns

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Adapt timing to customer and product context when data supports it.
- **Observable signal:** Customer cadence; prior response; message history.
- **Outcome to measure:** Repeat conversion versus baseline; opt-outs.
- **Related workflow evidence:** [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Repeat purchase / replenishment timing

- **Observable in the relevant fintech product:** Purchase intervals, spend, category and customer ID in the merchant footprint.
- **Needs connected merchant data:** SKU consumption, gifts, off-platform purchases, stock and consent.
- **Proposed intervention:** Estimate a repeat window and test whether a reminder adds useful purchases.
- **Limit:** A prediction is not certainty; non-purchase outside the footprint is unobserved.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe Auto Engagement / Engage; India; product-specific eligibility | 3/5 | Segmentation/journeys are supported; advanced timing precision needs evidence.  Confidence: Medium. | [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R07: Razorpay](https://razorpay.com/engage/) |
| Klaviyo — Predictive analytics; Global / data-eligible merchants | 4/5 | Strong fit for this specific pain. Predictive customer timing and value from connected commerce data. Model eligibility and sufficient history matter; prediction is not causal lift. Confidence: Medium. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 3/5 | Substantial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 09.2.3 — Customers have not returned but I do not know why

*Research hypothesis · Applies to: All*

- **Need:** Ask or infer cautiously among timing, product fit, price and service issues.
- **Observable signal:** Feedback; return reasons; purchase gap; support history.
- **Outcome to measure:** Explained lapse reasons; useful follow-up rate.
- **Related workflow evidence:** [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Repeat purchase / replenishment timing

- **Observable in the relevant fintech product:** Purchase intervals, spend, category and customer ID in the merchant footprint.
- **Needs connected merchant data:** SKU consumption, gifts, off-platform purchases, stock and consent.
- **Proposed intervention:** Estimate a repeat window and test whether a reminder adds useful purchases.
- **Limit:** A prediction is not certainty; non-purchase outside the footprint is unobserved.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe Auto Engagement / Engage; India; product-specific eligibility | 2/5 | Dormancy signals help; why a customer left remains uncertain.  Confidence: Medium. | [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R07: Razorpay](https://razorpay.com/engage/) |
| Klaviyo — Predictive analytics; Global / data-eligible merchants | 3/5 | Substantial fit for this specific pain. Predictive customer timing and value from connected commerce data. Model eligibility and sufficient history matter; prediction is not causal lift. Confidence: Medium. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 09.2.4 — A campaign promotes a refill the customer already bought elsewhere in my business

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Check recent purchases across connected channels before sending.
- **Observable signal:** Latest order; channel sync; queued messages.
- **Outcome to measure:** Redundant prompts; wasted incentives.
- **Related workflow evidence:** [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [I03: GoKwik](https://www.gokwik.co/product/kwikengage)


**Fintech role:** Data-enabled — Repeat purchase / replenishment timing

- **Observable in the relevant fintech product:** Purchase intervals, spend, category and customer ID in the merchant footprint.
- **Needs connected merchant data:** SKU consumption, gifts, off-platform purchases, stock and consent.
- **Proposed intervention:** Estimate a repeat window and test whether a reminder adds useful purchases.
- **Limit:** A prediction is not certainty; non-purchase outside the footprint is unobserved.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — BillMe Auto Engagement / Engage; India; product-specific eligibility | 2/5 | Linked histories help suppress duplicates; unconnected channels remain blind spots.  Confidence: Medium. | [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R07: Razorpay](https://razorpay.com/engage/) |
| Klaviyo — Predictive analytics; Global / data-eligible merchants | 3/5 | Substantial fit for this specific pain. Predictive customer timing and value from connected commerce data. Model eligibility and sufficient history matter; prediction is not causal lift. Confidence: Medium. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 3/5 | Substantial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

### 09.3. 9C. Loyalty and incentives

**Latent need hypothesis:** I need loyalty spending to build durable relationships and remain understandable to customers.

**Related product/workflow sources:** [R07: Razorpay](https://razorpay.com/engage/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)

#### 09.3.1 — Rewards are confusing, unavailable or difficult to redeem

*Research hypothesis · Applies to: Retail, Online, Food*

- **Need:** Make balance, eligibility, expiry and redemption clear.
- **Observable signal:** Redemption errors; unused balance; support contacts.
- **Outcome to measure:** Successful redemption; loyalty complaints.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Loyalty / incentives / reward liabilities

- **Observable in the relevant fintech product:** Earned points, redemptions, payment history and campaign outcomes where integrated.
- **Needs connected merchant data:** Offer costs, margins, true customer responsiveness and control groups.
- **Proposed intervention:** Simplify rewards and test smaller incentives against a no-incentive baseline.
- **Limit:** Redemption or repeat-purchase correlation does not prove the reward caused it.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe loyalty; India; product-specific eligibility | 3/5 | Loyalty tooling directly helps enrollment and redemption.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 4/5 | Strong fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 2/5 | Partial fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Medium. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 09.3.2 — I give the largest discount to customers who need no incentive

*Research hypothesis · Applies to: Retail, Online, Subscription*

- **Need:** Test no-offer and lower-cost actions before assuming discount necessity.
- **Observable signal:** Purchase propensity; experiment outcomes; offer cost.
- **Outcome to measure:** Incremental contribution; discount avoided.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Loyalty / incentives / reward liabilities

- **Observable in the relevant fintech product:** Earned points, redemptions, payment history and campaign outcomes where integrated.
- **Needs connected merchant data:** Offer costs, margins, true customer responsiveness and control groups.
- **Proposed intervention:** Simplify rewards and test smaller incentives against a no-incentive baseline.
- **Limit:** Redemption or repeat-purchase correlation does not prove the reward caused it.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe loyalty; India; product-specific eligibility | 2/5 | Segmentation helps targeting; incremental incentive need is unverified.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 09.3.3 — Frequent promotions train customers to wait for the next sale

*Research hypothesis · Applies to: Retail, Online*

- **Need:** Track dependence on discounts and test other sources of value.
- **Observable signal:** Full-price share; interpurchase gaps; promo history.
- **Outcome to measure:** Full-price contribution; long-run repeat rate.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Loyalty / incentives / reward liabilities

- **Observable in the relevant fintech product:** Earned points, redemptions, payment history and campaign outcomes where integrated.
- **Needs connected merchant data:** Offer costs, margins, true customer responsiveness and control groups.
- **Proposed intervention:** Simplify rewards and test smaller incentives against a no-incentive baseline.
- **Limit:** Redemption or repeat-purchase correlation does not prove the reward caused it.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe loyalty; India; product-specific eligibility | 1/5 | Promotion tools do not by themselves prevent discount dependence.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

#### 09.3.4 — My loyalty program earns points but does not change behavior

*Research hypothesis · Applies to: Retail, Online, Food*

- **Need:** Evaluate incremental visits and profit, accounting for reward obligations.
- **Observable signal:** Rewards issued/redeemed; control outcomes; contribution.
- **Outcome to measure:** Incremental loyalty contribution; reward liability.
- **Related workflow evidence:** [R07: Razorpay](https://razorpay.com/engage/), [R18: Razorpay](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Loyalty / incentives / reward liabilities

- **Observable in the relevant fintech product:** Earned points, redemptions, payment history and campaign outcomes where integrated.
- **Needs connected merchant data:** Offer costs, margins, true customer responsiveness and control groups.
- **Proposed intervention:** Simplify rewards and test smaller incentives against a no-incentive baseline.
- **Limit:** Redemption or repeat-purchase correlation does not prove the reward caused it.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe loyalty; India; product-specific eligibility | 2/5 | Program metrics help; randomized behavioral impact needs a design.  Confidence: Medium. | [R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |
| Adyen — Unified commerce insights / loyalty inputs; Global supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Connects payment-derived shopper insights and loyalty identification. Merchant must supply the loyalty system and other business context. Confidence: Low. | [F38: Adyen](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights), [F39: Adyen](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/) |

### 09.4. 9D. Voluntary churn and expansion

**Latent need hypothesis:** I need to understand why a customer wants to leave and offer a suitable choice without trapping them.

**Related product/workflow sources:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)

#### 09.4.1 — A subscriber cancels because they need a pause, not a permanent exit

*Research hypothesis · Applies to: Subscription*

- **Need:** Offer an appropriate approved pause or plan option with a clear cancel route.
- **Observable signal:** Cancellation reason; usage; billing cycle.
- **Outcome to measure:** Retained value after costs; later satisfaction.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Voluntary retention / subscription change / account expansion

- **Observable in the relevant fintech product:** Renewal, plan, invoice and payment history.
- **Needs connected merchant data:** Usage, satisfaction, cancellation reasons, account health and customer preferences.
- **Proposed intervention:** Present a suitable pause/change or account-review action under merchant policy.
- **Limit:** A saved subscription without customer value can create complaints rather than growth.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / Engage / feedback agent; India; product-specific eligibility | 2/5 | Billing state can change; personalized cancellation-save orchestration is unverified.  Confidence: Medium. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R07: Razorpay](https://razorpay.com/engage/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 4/5 | Strong fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 09.4.2 — An unused plan keeps renewing until the customer becomes angry

*Research hypothesis · Applies to: Subscription, Service*

- **Need:** Recognize low engagement and help customers understand or change their plan.
- **Observable signal:** Product usage; support requests; renewal dates.
- **Outcome to measure:** Active use; avoidable complaints and refunds.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Voluntary retention / subscription change / account expansion

- **Observable in the relevant fintech product:** Renewal, plan, invoice and payment history.
- **Needs connected merchant data:** Usage, satisfaction, cancellation reasons, account health and customer preferences.
- **Proposed intervention:** Present a suitable pause/change or account-review action under merchant policy.
- **Limit:** A saved subscription without customer value can create complaints rather than growth.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / Engage / feedback agent; India; product-specific eligibility | 1/5 | Renewal execution is covered; proactive unused-plan care needs usage data.  Confidence: Low. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R07: Razorpay](https://razorpay.com/engage/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 1/5 | Enabling / adjacent fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Low. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 09.4.3 — A satisfied customer could use another service but receives random upsells

*Research hypothesis · Applies to: B2B, Service, Subscription*

- **Need:** Recommend an expansion that fits observed needs and availability.
- **Observable signal:** Current products; usage; explicit interest; eligibility.
- **Outcome to measure:** Incremental expansion contribution; acceptance.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Voluntary retention / subscription change / account expansion

- **Observable in the relevant fintech product:** Renewal, plan, invoice and payment history.
- **Needs connected merchant data:** Usage, satisfaction, cancellation reasons, account health and customer preferences.
- **Proposed intervention:** Present a suitable pause/change or account-review action under merchant policy.
- **Limit:** A saved subscription without customer value can create complaints rather than growth.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / Engage / feedback agent; India; product-specific eligibility | 2/5 | Targeted offers exist; suitability-aware expansion needs more context.  Confidence: Medium. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R07: Razorpay](https://razorpay.com/engage/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

#### 09.4.4 — A key business customer quietly reduces orders before leaving

*Research hypothesis · Applies to: B2B*

- **Need:** Notice changes and equip the relationship owner with context.
- **Observable signal:** Order cadence; volume; complaints; contract dates.
- **Outcome to measure:** Account retention; preventable contraction.
- **Related workflow evidence:** [R12: Razorpay](https://razorpay.com/blog/?p=26313), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)


**Fintech role:** Data-enabled — Voluntary retention / subscription change / account expansion

- **Observable in the relevant fintech product:** Renewal, plan, invoice and payment history.
- **Needs connected merchant data:** Usage, satisfaction, cancellation reasons, account health and customer preferences.
- **Proposed intervention:** Present a suitable pause/change or account-review action under merchant policy.
- **Limit:** A saved subscription without customer value can create complaints rather than growth.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Subscriptions / Engage / feedback agent; India; product-specific eligibility | 2/5 | Purchase trends help; B2B account-health intervention is not fully verified.  Confidence: Medium. | [F06: Razorpay](https://razorpay.com/docs/payments/subscriptions/), [R07: Razorpay](https://razorpay.com/engage/), [R02: Razorpay](https://razorpay.com/agent-studio/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Square — Customer Directory / Marketing / Loyalty; US edition | 2/5 | Partial fit for this specific pain. Connects customer purchase history, audience groups and loyalty workflows. Identity matching and causal impact are incomplete without additional evidence. Confidence: Medium. | [F14: Square](https://squareup.com/us/en/point-of-sale/features/customer-directory), [F15: Square](https://squareup.com/us/en/marketing), [F16: Square](https://squareup.com/us/en/software/loyalty) |

### 09.5. 9E. Incrementality and learning

**Latent need hypothesis:** I need evidence that contacting customers changed the outcome, not just that a sale happened afterward.

**Related product/workflow sources:** [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/)

#### 09.5.1 — A campaign claims every later purchase as recovered revenue

*Research hypothesis · Applies to: Retail, Online, Subscription*

- **Need:** Compare with a credible untreated baseline and avoid duplicate attribution.
- **Observable signal:** Randomized holdout where feasible; order linkage; time window.
- **Outcome to measure:** Incremental orders and contribution with uncertainty.
- **Related workflow evidence:** [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/)


**Fintech role:** Data-enabled — Incremental value / experimental learning

- **Observable in the relevant fintech product:** Unique purchases, refunds, campaign actions and collected amounts.
- **Needs connected merchant data:** Random assignment, untreated baseline, product costs, opt-outs and long-term outcomes.
- **Proposed intervention:** Compare no action, reminder and offer on net incremental contribution.
- **Limit:** Do not confuse attribution with causality; small samples may be inconclusive.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe campaign measurement; India; product-specific eligibility | 1/5 | Campaign sales metrics exist; causal recovery accounting is not established.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 4/5 | Strong fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Klaviyo — Predictive customer analytics; Global / eligible data | 1/5 | Enabling / adjacent fit for this specific pain. Customer-level prediction can inform treatment selection. The cited predictive feature alone does not establish causal profit experimentation. Confidence: Low. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |

#### 09.5.2 — The best message by clicks is not the best by profit

*Research hypothesis · Applies to: All*

- **Need:** Evaluate final orders, refunds, incentives and communication costs.
- **Observable signal:** Delivery/click/order events; costs; delayed returns.
- **Outcome to measure:** Incremental net contribution per eligible customer.
- **Related workflow evidence:** [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/)


**Fintech role:** Data-enabled — Incremental value / experimental learning

- **Observable in the relevant fintech product:** Unique purchases, refunds, campaign actions and collected amounts.
- **Needs connected merchant data:** Random assignment, untreated baseline, product costs, opt-outs and long-term outcomes.
- **Proposed intervention:** Compare no action, reminder and offer on net incremental contribution.
- **Limit:** Do not confuse attribution with causality; small samples may be inconclusive.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe campaign measurement; India; product-specific eligibility | 1/5 | Engagement and sales reporting do not fully optimize net contribution.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 3/5 | Substantial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Klaviyo — Predictive customer analytics; Global / eligible data | 1/5 | Enabling / adjacent fit for this specific pain. Customer-level prediction can inform treatment selection. The cited predictive feature alone does not establish causal profit experimentation. Confidence: Low. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |

#### 09.5.3 — I cannot compare doing nothing, reminding and offering a discount

*Research hypothesis · Applies to: Retail, Online, Subscription*

- **Need:** Test permitted actions on comparable customers at sufficient sample size.
- **Observable signal:** Assigned action; eligibility; outcomes; confidence.
- **Outcome to measure:** Action-specific uplift; decision uncertainty.
- **Related workflow evidence:** [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/)


**Fintech role:** Data-enabled — Incremental value / experimental learning

- **Observable in the relevant fintech product:** Unique purchases, refunds, campaign actions and collected amounts.
- **Needs connected merchant data:** Random assignment, untreated baseline, product costs, opt-outs and long-term outcomes.
- **Proposed intervention:** Compare no action, reminder and offer on net incremental contribution.
- **Limit:** Do not confuse attribution with causality; small samples may be inconclusive.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe campaign measurement; India; product-specific eligibility | 1/5 | No complete documented randomized three-way profit test was found.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 4/5 | Strong fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Klaviyo — Predictive customer analytics; Global / eligible data | 1/5 | Enabling / adjacent fit for this specific pain. Customer-level prediction can inform treatment selection. The cited predictive feature alone does not establish causal profit experimentation. Confidence: Low. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |

#### 09.5.4 — An apparent short-term win causes later opt-outs or discount dependence

*Research hypothesis · Applies to: All*

- **Need:** Observe longer-term effects before scaling the action.
- **Observable signal:** Opt-outs; repeat rate; full-price share; complaints.
- **Outcome to measure:** Long-term contribution; customer harm signals.
- **Related workflow evidence:** [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/)


**Fintech role:** Data-enabled — Incremental value / experimental learning

- **Observable in the relevant fintech product:** Unique purchases, refunds, campaign actions and collected amounts.
- **Needs connected merchant data:** Random assignment, untreated baseline, product costs, opt-outs and long-term outcomes.
- **Proposed intervention:** Compare no action, reminder and offer on net incremental contribution.
- **Limit:** Do not confuse attribution with causality; small samples may be inconclusive.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Engage / BillMe campaign measurement; India; product-specific eligibility | 1/5 | Long-run opt-outs and discount effects are not established as a closed loop.  Confidence: Low. | [R07: Razorpay](https://razorpay.com/engage/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/) |
| Chargebee — Billing / Growth / Retention; Global / subscription businesses | 2/5 | Partial fit for this specific pain. Subscription retention and measurement, including configured control groups. Subscription-specific; profitability and long-term causal effects need extra data. Confidence: Medium. | [F32: Chargebee](https://www.chargebee.com/growth/retention/), [F33: Chargebee](https://www.chargebee.com/docs/growth/reporting/dashboards-trends), [U11: Chargebee](https://www.chargebee.com/docs/growth/plays/plays-overview), [F46: Chargebee](https://www.chargebee.com/billing/) |
| Klaviyo — Predictive customer analytics; Global / eligible data | 1/5 | Enabling / adjacent fit for this specific pain. Customer-level prediction can inform treatment selection. The cited predictive feature alone does not establish causal profit experimentation. Confidence: Low. | [U10: Klaviyo](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce) |

## 10. Fund and sustain business operations

[Open this subtree in FigJam](https://www.figma.com/board/wWXkJsuZGxzymRT6PAazzg?node-id=5-1783)

**Job:** Have enough affordable cash, people and operating discipline to keep promises and grow.

**Boundary:** Owns liquidity planning, financing, supplier/staff payments, recurring spend and business resource allocation. Supply selection is 02; customer collections 05; accounting facts 08; permissions and continuity controls 01. Insurance risk transfer and treasury policy also live here; transaction disputes remain in 07.

**Illustrative moment:** Priya can show accounting profit but must pay salaries and a supplier before receivables and COD cash arrive. Growth creates a funding gap.

**Razorpay coverage:** RazorpayX covers AP, payouts, payroll, corporate cards and connected banking. Credit availability is account-specific; historical Capital material is separated from current card products. Insurance and treasury investing were not verified as dedicated merchant workflows.

[R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [R15: Razorpay](https://razorpay.com/x/), [R16: Razorpay](https://razorpay.com/payroll/founder/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/)

### 10.1. 10A. Cash visibility and planning

**Latent need hypothesis:** I need to know whether I can meet my next obligations without confusing sales, profit and usable cash.

**Related product/workflow sources:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/)

#### 10.1.1 — I have money across accounts but no reliable available-cash view

*Research hypothesis · Applies to: All*

- **Need:** Combine usable balances and identify restricted or already-committed funds.
- **Observable signal:** Bank balances; pending payments; reserves; scheduled payouts.
- **Outcome to measure:** Available-cash accuracy; unexpected shortfalls.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Connected banking / cash forecasting

- **Observable in the relevant fintech product:** Cleared and available balances, transactions and scheduled payouts where connected.
- **Needs connected merchant data:** Open receivables, payroll, purchase commitments, returns and financing repayments.
- **Proposed intervention:** Prepare a cash runway view and stress-test upcoming obligations.
- **Limit:** Pending receipts are not spendable cash; forecasts require reconciled assumptions.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX connected banking / cashflow agents; India; product-specific eligibility | 3/5 | Connected banking addresses the view; supported accounts and beta access vary.  Confidence: Low–medium: rollout or access needs validation. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Plaid — Financial data APIs; US / supported markets | 2/5 | Partial fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Medium. | [F20: Plaid](https://plaid.com/products/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 3/5 | Substantial fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

#### 10.1.2 — Payroll and supplier bills fall due before customer cash arrives

*Research hypothesis · Applies to: All*

- **Need:** Forecast inflows/outflows with timing uncertainty and actionable scenarios.
- **Observable signal:** Receivables; settlements; COD; payroll; bill dates.
- **Outcome to measure:** Cash shortfall days; forecast error.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Connected banking / cash forecasting

- **Observable in the relevant fintech product:** Cleared and available balances, transactions and scheduled payouts where connected.
- **Needs connected merchant data:** Open receivables, payroll, purchase commitments, returns and financing repayments.
- **Proposed intervention:** Prepare a cash runway view and stress-test upcoming obligations.
- **Limit:** Pending receipts are not spendable cash; forecasts require reconciled assumptions.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX connected banking / cashflow agents; India; product-specific eligibility | 3/5 | Cashflow insights help planning; full obligation coverage needs integrations.  Confidence: Low–medium: rollout or access needs validation. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Plaid — Financial data APIs; US / supported markets | 2/5 | Partial fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Medium. | [F20: Plaid](https://plaid.com/products/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 3/5 | Substantial fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

#### 10.1.3 — A large order looks like growth but requires cash before collection

*Research hypothesis · Applies to: Retail, Online, B2B*

- **Need:** Model inventory, delivery and credit terms before committing.
- **Observable signal:** Order margin; upfront costs; payment schedule.
- **Outcome to measure:** Peak funding gap; cash-adjusted order viability.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Connected banking / cash forecasting

- **Observable in the relevant fintech product:** Cleared and available balances, transactions and scheduled payouts where connected.
- **Needs connected merchant data:** Open receivables, payroll, purchase commitments, returns and financing repayments.
- **Proposed intervention:** Prepare a cash runway view and stress-test upcoming obligations.
- **Limit:** Pending receipts are not spendable cash; forecasts require reconciled assumptions.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX connected banking / cashflow agents; India; product-specific eligibility | 2/5 | Forecasting can expose a gap; purchase-order financing is a separate capability.  Confidence: Low–medium: rollout or access needs validation. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Plaid — Financial data APIs; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Low. | [F20: Plaid](https://plaid.com/products/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 3/5 | Substantial fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

#### 10.1.4 — Forecasts ignore returns, delayed invoices or a weaker sales week

*Research hypothesis · Applies to: All*

- **Need:** Stress-test realistic downside cases and show assumptions.
- **Observable signal:** Delay distributions; refund patterns; demand scenarios.
- **Outcome to measure:** Forecast resilience; avoided emergency borrowing.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/)


**Fintech role:** Direct — Connected banking / cash forecasting

- **Observable in the relevant fintech product:** Cleared and available balances, transactions and scheduled payouts where connected.
- **Needs connected merchant data:** Open receivables, payroll, purchase commitments, returns and financing repayments.
- **Proposed intervention:** Prepare a cash runway view and stress-test upcoming obligations.
- **Limit:** Pending receipts are not spendable cash; forecasts require reconciled assumptions.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX connected banking / cashflow agents; India; product-specific eligibility | 2/5 | AI forecasts still need explicit downside scenarios and complete liabilities.  Confidence: Low–medium: rollout or access needs validation. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/) |
| Plaid — Financial data APIs; US / supported markets | 1/5 | Enabling / adjacent fit for this specific pain. Supplies authorized bank balances, transactions and verification inputs. Infrastructure, not a complete merchant-facing decision or action workflow. Confidence: Low. | [F20: Plaid](https://plaid.com/products/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 2/5 | Partial fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

### 10.2. 10B. Access to suitable finance

**Latent need hypothesis:** I need enough funding at terms I understand and can repay under realistic sales conditions.

**Related product/workflow sources:** [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

#### 10.2.1 — I cannot buy stock because sales cash is locked in receivables

*Research hypothesis · Applies to: Retail, Online, B2B*

- **Need:** Compare suitable invoice, order or working-capital options where eligible.
- **Observable signal:** Receivable quality; purchase orders; funding gap.
- **Outcome to measure:** Orders funded; total financing cost.
- **Related workflow evidence:** [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Credit access / underwriting / finance comparison

- **Observable in the relevant fintech product:** Payment history, settlement cashflow and existing repayments in scope.
- **Needs connected merchant data:** Bank/GST records, receivables quality, purpose, credit offers and existing debt.
- **Proposed intervention:** Assemble an application, compare repayment scenarios and flag cash shortfalls.
- **Limit:** Only an authorized lender approves credit; funding is not proof a plan is viable.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards; historical Capital lending evidence; India; product-specific eligibility | 2/5 | Credit product presence helps; current broad working-capital availability is uncertain.  Confidence: Low–medium: rollout or access needs validation. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| CredAble — Working-capital programs; India / partner programs | 4/5 | Strong fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Medium. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 4/5 | Strong fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

#### 10.2.2 — Loan applications require records scattered across tools

*Research hypothesis · Applies to: All*

- **Need:** Prepare consistent financial evidence without repeated manual reconstruction.
- **Observable signal:** Bank/payment history; accounts; required documents.
- **Outcome to measure:** Application effort; time to decision.
- **Related workflow evidence:** [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Credit access / underwriting / finance comparison

- **Observable in the relevant fintech product:** Payment history, settlement cashflow and existing repayments in scope.
- **Needs connected merchant data:** Bank/GST records, receivables quality, purpose, credit offers and existing debt.
- **Proposed intervention:** Assemble an application, compare repayment scenarios and flag cash shortfalls.
- **Limit:** Only an authorized lender approves credit; funding is not proof a plan is viable.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards; historical Capital lending evidence; India; product-specific eligibility | 2/5 | Historical transaction-based prefill exists; current eligibility needs confirmation.  Confidence: Low–medium: rollout or access needs validation. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| CredAble — Working-capital programs; India / partner programs | 3/5 | Substantial fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Medium. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 3/5 | Substantial fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

#### 10.2.3 — An advertised rate hides the true effect on my cashflow

*Research hypothesis · Applies to: All*

- **Need:** Understand total repayment, fees, timing and adverse sales scenarios.
- **Observable signal:** Repayment schedule; fees; revenue-linked deductions.
- **Outcome to measure:** Affordable debt service; effective total cost.
- **Related workflow evidence:** [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Credit access / underwriting / finance comparison

- **Observable in the relevant fintech product:** Payment history, settlement cashflow and existing repayments in scope.
- **Needs connected merchant data:** Bank/GST records, receivables quality, purpose, credit offers and existing debt.
- **Proposed intervention:** Assemble an application, compare repayment scenarios and flag cash shortfalls.
- **Limit:** Only an authorized lender approves credit; funding is not proof a plan is viable.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards; historical Capital lending evidence; India; product-specific eligibility | 2/5 | Published product terms help; a neutral all-in comparison is not verified.  Confidence: Low–medium: rollout or access needs validation. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| CredAble — Working-capital programs; India / partner programs | 2/5 | Partial fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Medium. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 2/5 | Partial fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

#### 10.2.4 — I borrow for growth that never earns enough to repay the cost

*Research hypothesis · Applies to: All*

- **Need:** Test demand and contribution assumptions before taking on funding.
- **Observable signal:** Growth scenario; unit economics; cash sensitivity.
- **Outcome to measure:** Return on funded activity; repayment stress.
- **Related workflow evidence:** [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/), [U14: BILL](https://www.bill.com/product/accounts-receivable/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Credit access / underwriting / finance comparison

- **Observable in the relevant fintech product:** Payment history, settlement cashflow and existing repayments in scope.
- **Needs connected merchant data:** Bank/GST records, receivables quality, purpose, credit offers and existing debt.
- **Proposed intervention:** Assemble an application, compare repayment scenarios and flag cash shortfalls.
- **Limit:** Only an authorized lender approves credit; funding is not proof a plan is viable.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards; historical Capital lending evidence; India; product-specific eligibility | 1/5 | Credit access does not validate incremental operating returns.  Confidence: Low–medium: rollout or access needs validation. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F03: Razorpay](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/) |
| CredAble — Working-capital programs; India / partner programs | 2/5 | Partial fit for this specific pain. Finances eligible payables, receivables and purchase-order needs. Credit access does not establish good supplier performance or profitable growth. Confidence: Medium. | [F41: CredAble](https://credable.in/), [I09: CredAble](https://credable.in/pre-shipment-financing-platform-for-banks/) |
| KredX — Supply-chain finance / cash management; India / program eligibility | 2/5 | Partial fit for this specific pain. Factoring, trade finance and cash-management workflows. Eligibility, counterparties and total cost constrain practical access. Confidence: Medium. | [F29: KredX](https://www.kredx.com/) |

### 10.3. 10C. Supplier and operating payments

**Latent need hypothesis:** I need to pay the right counterparty the right amount at the right time.

**Related product/workflow sources:** [R15: Razorpay](https://razorpay.com/x/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)

#### 10.3.1 — Supplier invoices arrive in email and chat and are missed

*Research hypothesis · Applies to: All*

- **Need:** Capture obligations centrally and assign approval owners.
- **Observable signal:** Invoices; due dates; missing approvals; reminders.
- **Outcome to measure:** Late fees; overdue payables; handling time.
- **Related workflow evidence:** [R15: Razorpay](https://razorpay.com/x/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Accounts payable / supplier payment / discounting

- **Observable in the relevant fintech product:** Invoice intake, verified payee, approval state, payment status and PO matches.
- **Needs connected merchant data:** Supplier contracts, cash forecasts, dispute status and early-payment offers.
- **Proposed intervention:** Prepare approved payments, flag duplicates and compare timing economics.
- **Limit:** A valid invoice does not authorize automatic payment outside merchant limits.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / payouts / vendor verification; India; product-specific eligibility | 4/5 | Invoice intake centralizes the workflow; adoption still matters.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R15: Razorpay](https://razorpay.com/x/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 10.3.2 — The same supplier bill is paid twice or against wrong bank details

*Research hypothesis · Applies to: All*

- **Need:** Check duplicates and verify changes before disbursement.
- **Observable signal:** Invoice identifiers; beneficiary changes; prior payments.
- **Outcome to measure:** Duplicate/wrong payments; prevented loss.
- **Related workflow evidence:** [R15: Razorpay](https://razorpay.com/x/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Accounts payable / supplier payment / discounting

- **Observable in the relevant fintech product:** Invoice intake, verified payee, approval state, payment status and PO matches.
- **Needs connected merchant data:** Supplier contracts, cash forecasts, dispute status and early-payment offers.
- **Proposed intervention:** Prepare approved payments, flag duplicates and compare timing economics.
- **Limit:** A valid invoice does not authorize automatic payment outside merchant limits.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / payouts / vendor verification; India; product-specific eligibility | 4/5 | Matching and verification address duplicates and payee errors.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R15: Razorpay](https://razorpay.com/x/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 10.3.3 — Approval delays damage supplier relationships or stop supply

*Research hypothesis · Applies to: Retail, Online, B2B, Food*

- **Need:** Route approvals based on policy and expose urgent blocked bills.
- **Observable signal:** Approval age; due dates; supplier holds.
- **Outcome to measure:** On-time payments; supply interruptions.
- **Related workflow evidence:** [R15: Razorpay](https://razorpay.com/x/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Accounts payable / supplier payment / discounting

- **Observable in the relevant fintech product:** Invoice intake, verified payee, approval state, payment status and PO matches.
- **Needs connected merchant data:** Supplier contracts, cash forecasts, dispute status and early-payment offers.
- **Proposed intervention:** Prepare approved payments, flag duplicates and compare timing economics.
- **Limit:** A valid invoice does not authorize automatic payment outside merchant limits.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / payouts / vendor verification; India; product-specific eligibility | 4/5 | Configurable approval workflows directly support routing and control.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R15: Razorpay](https://razorpay.com/x/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

#### 10.3.4 — I pay early without knowing whether preserving cash is more valuable

*Research hypothesis · Applies to: All*

- **Need:** Compare approved discounts, due dates and cash needs.
- **Observable signal:** Early-payment terms; cash forecast; financing costs.
- **Outcome to measure:** Net benefit from payment timing.
- **Related workflow evidence:** [R15: Razorpay](https://razorpay.com/x/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)


**Fintech role:** Direct — Accounts payable / supplier payment / discounting

- **Observable in the relevant fintech product:** Invoice intake, verified payee, approval state, payment status and PO matches.
- **Needs connected merchant data:** Supplier contracts, cash forecasts, dispute status and early-payment offers.
- **Proposed intervention:** Prepare approved payments, flag duplicates and compare timing economics.
- **Limit:** A valid invoice does not authorize automatic payment outside merchant limits.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — AP Automation / payouts / vendor verification; India; product-specific eligibility | 2/5 | Payment automation exists; cash-versus-discount optimization is not established.  Confidence: Medium. | [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R15: Razorpay](https://razorpay.com/x/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| BILL — Accounts receivable / payable; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Invoice tracking, collection follow-up, approval and payment workflows. Commercial disputes and unusual deductions may require manual resolution. Confidence: Medium. | [U14: BILL](https://www.bill.com/product/accounts-receivable/), [F25: BILL](https://www.bill.com/product/accounts-payable) |

### 10.4. 10D. People, payroll and everyday execution

**Latent need hypothesis:** I need a team I can schedule and pay accurately without spending every week fixing administration.

**Related product/workflow sources:** [R16: Razorpay](https://razorpay.com/payroll/founder/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

#### 10.4.1 — I cannot find or retain staff with the skills the business needs

*Research hypothesis · Applies to: Retail, Service, Food, B2B*

- **Need:** Understand role requirements, workload and avoidable sources of turnover.
- **Observable signal:** Vacancies; turnover; overtime; employee feedback.
- **Outcome to measure:** Unfilled role days; turnover cost.
- **Related workflow evidence:** [R16: Razorpay](https://razorpay.com/payroll/founder/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Payroll / reimbursement / employee financial benefits

- **Observable in the relevant fintech product:** Salary components, reimbursements and payroll payment status.
- **Needs connected merchant data:** Attendance, leave, commissions, benefit eligibility and employment changes.
- **Proposed intervention:** Reconcile payable amounts, speed approved reimbursement and expose recurring admin work.
- **Limit:** Payroll software cannot guarantee recruitment, skill availability or staff retention.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX Payroll / corporate cards; India; product-specific eligibility | 1/5 | Payroll supports the employment relationship; staffing quality is not solved.  Confidence: Low. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Gusto — Payroll / benefits; US | 2/5 | Partial fit for this specific pain. Payroll connected with time and employee administration. US rules and plan scope apply; hiring success remains outside the software. Confidence: Medium. | [F34: Gusto](https://gusto.com/product/payroll/hourly) |
| Plum — Business insurance / benefits; India | 2/5 | Partial fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Medium. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

#### 10.4.2 — Attendance, leave and commissions produce payroll mistakes

*Research hypothesis · Applies to: Retail, Service, Food, B2B*

- **Need:** Reconcile approved inputs before salary calculation and payment.
- **Observable signal:** Attendance; leave; commission rules; payroll exceptions.
- **Outcome to measure:** Payroll corrections; on-time salary payment.
- **Related workflow evidence:** [R16: Razorpay](https://razorpay.com/payroll/founder/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Payroll / reimbursement / employee financial benefits

- **Observable in the relevant fintech product:** Salary components, reimbursements and payroll payment status.
- **Needs connected merchant data:** Attendance, leave, commissions, benefit eligibility and employment changes.
- **Proposed intervention:** Reconcile payable amounts, speed approved reimbursement and expose recurring admin work.
- **Limit:** Payroll software cannot guarantee recruitment, skill availability or staff retention.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX Payroll / corporate cards; India; product-specific eligibility | 4/5 | Payroll addresses salary computation from correct attendance inputs.  Confidence: Medium. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Gusto — Payroll / benefits; US | 4/5 | Strong fit for this specific pain. Payroll connected with time and employee administration. US rules and plan scope apply; hiring success remains outside the software. Confidence: Medium. | [F34: Gusto](https://gusto.com/product/payroll/hourly) |
| Plum — Business insurance / benefits; India | 1/5 | Enabling / adjacent fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Low. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

#### 10.4.3 — Employees pay business expenses and wait too long for reimbursement

*Research hypothesis · Applies to: All*

- **Need:** Provide a clear submission, evidence, approval and payment path.
- **Observable signal:** Receipts; claims; approval/payment age.
- **Outcome to measure:** Reimbursement turnaround; employee follow-ups.
- **Related workflow evidence:** [R16: Razorpay](https://razorpay.com/payroll/founder/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Payroll / reimbursement / employee financial benefits

- **Observable in the relevant fintech product:** Salary components, reimbursements and payroll payment status.
- **Needs connected merchant data:** Attendance, leave, commissions, benefit eligibility and employment changes.
- **Proposed intervention:** Reconcile payable amounts, speed approved reimbursement and expose recurring admin work.
- **Limit:** Payroll software cannot guarantee recruitment, skill availability or staff retention.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX Payroll / corporate cards; India; product-specific eligibility | 3/5 | Reimbursement and cards reduce delays; approval processes still matter.  Confidence: Medium. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Gusto — Payroll / benefits; US | 3/5 | Substantial fit for this specific pain. Payroll connected with time and employee administration. US rules and plan scope apply; hiring success remains outside the software. Confidence: Medium. | [F34: Gusto](https://gusto.com/product/payroll/hourly) |
| Plum — Business insurance / benefits; India | 1/5 | Enabling / adjacent fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Low. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

#### 10.4.4 — Routine administration leaves the owner no time to improve the business

*Research hypothesis · Applies to: Solo, Retail, Online, B2B, Service, Food*

- **Need:** Identify repetitive tasks, assign ownership and automate only suitable work.
- **Observable signal:** Time diary; repeated tasks; backlog; exception rate.
- **Outcome to measure:** Owner hours reclaimed; essential tasks missed.
- **Related workflow evidence:** [R16: Razorpay](https://razorpay.com/payroll/founder/), [U07: Square](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Direct — Payroll / reimbursement / employee financial benefits

- **Observable in the relevant fintech product:** Salary components, reimbursements and payroll payment status.
- **Needs connected merchant data:** Attendance, leave, commissions, benefit eligibility and employment changes.
- **Proposed intervention:** Reconcile payable amounts, speed approved reimbursement and expose recurring admin work.
- **Limit:** Payroll software cannot guarantee recruitment, skill availability or staff retention.
- **Gap classification:** Integration / execution gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX Payroll / corporate cards; India; product-specific eligibility | 3/5 | Finance administration is automated in parts, not all owner responsibilities.  Confidence: Medium. | [R16: Razorpay](https://razorpay.com/payroll/founder/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Gusto — Payroll / benefits; US | 3/5 | Substantial fit for this specific pain. Payroll connected with time and employee administration. US rules and plan scope apply; hiring success remains outside the software. Confidence: Medium. | [F34: Gusto](https://gusto.com/product/payroll/hourly) |
| Plum — Business insurance / benefits; India | 2/5 | Partial fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Medium. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |

### 10.5. 10E. Sustainable growth and resource allocation

**Latent need hypothesis:** I need to choose which opportunities deserve scarce cash and attention, including when to stop.

**Related product/workflow sources:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

#### 10.5.1 — Unused software, recurring fees and overlapping services accumulate

*Research hypothesis · Applies to: All*

- **Need:** Review utilization, renewals and cancellation consequences.
- **Observable signal:** Vendor spend; usage; renewal dates; contract terms.
- **Outcome to measure:** Avoidable recurring spend removed.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Spend governance / resource allocation / financial exit

- **Observable in the relevant fintech product:** Recurring charges, supplier commitments, debt and payment obligations in scope.
- **Needs connected merchant data:** Software usage, operating plans, lease/staff liabilities and closure obligations.
- **Proposed intervention:** Prioritize material cash leaks and compare scenarios before committing resources.
- **Limit:** Financial optimization cannot decide the business strategy or discharge legal duties alone.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / AP / RAY / cashflow; India; product-specific eligibility | 2/5 | Spend reports and savings concierge help; usage-based SaaS cleanup is partial.  Confidence: Medium. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 4/5 | Strong fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 10.5.2 — Many problems compete for attention and every dashboard says urgent

*Research hypothesis · Applies to: All*

- **Need:** Prioritize by business impact, controllability, effort and confidence.
- **Observable signal:** Backlogs; opportunity estimates; costs; dependencies.
- **Outcome to measure:** Realized benefit per unit of effort.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Spend governance / resource allocation / financial exit

- **Observable in the relevant fintech product:** Recurring charges, supplier commitments, debt and payment obligations in scope.
- **Needs connected merchant data:** Software usage, operating plans, lease/staff liabilities and closure obligations.
- **Proposed intervention:** Prioritize material cash leaks and compare scenarios before committing resources.
- **Limit:** Financial optimization cannot decide the business strategy or discharge legal duties alone.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / AP / RAY / cashflow; India; product-specific eligibility | 2/5 | Insights help triage; a unified business priority optimizer is unverified.  Confidence: Medium. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 3/5 | Substantial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Zoho — Books / Inventory; India / supported editions | 2/5 | Partial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 10.5.3 — Expansion to a second store or channel hides new fixed costs

*Research hypothesis · Applies to: Retail, Online, Service, Food*

- **Need:** Model staffing, stock, rent, systems and demand before committing.
- **Observable signal:** Capacity plan; fixed costs; sales assumptions; cash scenario.
- **Outcome to measure:** Break-even progress; downside cash exposure.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Spend governance / resource allocation / financial exit

- **Observable in the relevant fintech product:** Recurring charges, supplier commitments, debt and payment obligations in scope.
- **Needs connected merchant data:** Software usage, operating plans, lease/staff liabilities and closure obligations.
- **Proposed intervention:** Prioritize material cash leaks and compare scenarios before committing resources.
- **Limit:** Financial optimization cannot decide the business strategy or discharge legal duties alone.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / AP / RAY / cashflow; India; product-specific eligibility | 2/5 | Costs can be surfaced; expansion profitability needs a full scenario model.  Confidence: Medium. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

#### 10.5.4 — Closing a product, location or business leaves obligations unresolved

*Research hypothesis · Applies to: All*

- **Need:** Plan outstanding deliveries, refunds, staff/vendor payments and records.
- **Observable signal:** Open orders; liabilities; contracts; closure tasks.
- **Outcome to measure:** Unresolved obligations; closure cost and time.
- **Related workflow evidence:** [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [U15: Ramp](https://ramp.com/accounts-payable), [U16: Ramp](https://support.ramp.com/getting-started-with-ramp-procurement-policies/), [E02: Federal Reserve Banks](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)


**Fintech role:** Data-enabled — Spend governance / resource allocation / financial exit

- **Observable in the relevant fintech product:** Recurring charges, supplier commitments, debt and payment obligations in scope.
- **Needs connected merchant data:** Software usage, operating plans, lease/staff liabilities and closure obligations.
- **Proposed intervention:** Prioritize material cash leaks and compare scenarios before committing resources.
- **Limit:** Financial optimization cannot decide the business strategy or discharge legal duties alone.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — Corporate cards / AP / RAY / cashflow; India; product-specific eligibility | 1/5 | Records help list obligations; complete closure execution is outside scope.  Confidence: Low. | [F02: Razorpay](https://razorpay.com/x/corporate-cards/), [F01: Razorpay](https://razorpay.com/x/ap-automation/), [R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/), [R05: Razorpay](https://razorpay.com/agentic-business-banking/) |
| Ramp — Intelligence / Procurement; US-led / eligible entities | 2/5 | Partial fit for this specific pain. Connects expense, invoice and purchasing controls with financial analysis. Cannot guarantee supplier quality, business demand or universal AI accuracy. Confidence: Medium. | [F23: Ramp](https://ramp.com/intelligence), [F24: Ramp](https://ramp.com/procurement) |
| Zoho — Books / Inventory; India / supported editions | 3/5 | Substantial fit for this specific pain. Connects accounting, stock and purchasing information. Not a lender; merchant data and accounting setup must be reliable. Confidence: Medium. | [F31: Zoho](https://www.zoho.com/in/books/), [I07: Zoho](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html) |

### 10.6. 10F. Insurance and financial protection

**Latent need hypothesis:** I need to know which business losses I can absorb and which require protection.

**Related product/workflow sources:** [F35: Plum](https://www.plumhq.com/business), [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/)

#### 10.6.1 — I have no clear view of uninsured business losses

*Research hypothesis · Applies to: All*

- **Need:** Compare exposures, limits, deductibles and exclusions before choosing protection.
- **Observable signal:** Assets; payroll; revenue dependency; policies; exclusions.
- **Outcome to measure:** Uncovered exposure; claim-ready records; policy renewal gaps.
- **Related workflow evidence:** [F35: Plum](https://www.plumhq.com/business), [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/)


**Fintech role:** Direct — Insurance purchase / renewal / financial claim support

- **Observable in the relevant fintech product:** Premiums, insured values, policy and claim status if using an insurtech.
- **Needs connected merchant data:** Asset inventory, incidents, exposure, policy wording, documents and exclusions.
- **Proposed intervention:** Prepare a protection review or claim evidence pack and track outstanding steps.
- **Limit:** Insurer decisions and policy wording govern coverage; not every loss is insurable.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — No dedicated merchant protection workflow verified; India; product-specific eligibility | 0/5 | No dedicated business exposure/coverage adviser was found in reviewed offerings.  Confidence: Low. | [R15: Razorpay](https://razorpay.com/x/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Plum — Business insurance / benefits; India | 3/5 | Substantial fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Medium. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |
| ERGO NEXT — Commercial property insurance; US | 3/5 | Substantial fit for this specific pain. Digital access to commercial property and covered business-income protection. Exclusions and insured events govern payment; not universal interruption cover. Confidence: Medium. | [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/) |

#### 10.6.2 — Policy renewals and changes in my business leave gaps in cover

*Research hypothesis · Applies to: All*

- **Need:** Reassess insured values and renewals when stock, staff or locations change.
- **Observable signal:** Policy dates; asset values; location changes; coverage limits.
- **Outcome to measure:** Days without cover; underinsurance identified.
- **Related workflow evidence:** [F35: Plum](https://www.plumhq.com/business), [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/)


**Fintech role:** Direct — Insurance purchase / renewal / financial claim support

- **Observable in the relevant fintech product:** Premiums, insured values, policy and claim status if using an insurtech.
- **Needs connected merchant data:** Asset inventory, incidents, exposure, policy wording, documents and exclusions.
- **Proposed intervention:** Prepare a protection review or claim evidence pack and track outstanding steps.
- **Limit:** Insurer decisions and policy wording govern coverage; not every loss is insurable.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — No dedicated merchant protection workflow verified; India; product-specific eligibility | 0/5 | No insurance renewal and underinsurance workflow was verified.  Confidence: Low. | [R15: Razorpay](https://razorpay.com/x/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Plum — Business insurance / benefits; India | 3/5 | Substantial fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Medium. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |
| ERGO NEXT — Commercial property insurance; US | 3/5 | Substantial fit for this specific pain. Digital access to commercial property and covered business-income protection. Exclusions and insured events govern payment; not universal interruption cover. Confidence: Medium. | [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/) |

#### 10.6.3 — A covered loss occurs but claim evidence is scattered

*Research hypothesis · Applies to: All*

- **Need:** Assemble financial and incident evidence and track a claim without promising a payout.
- **Observable signal:** Incident records; invoices; stock values; claim status.
- **Outcome to measure:** Time to complete evidence; claim resolution time.
- **Related workflow evidence:** [F35: Plum](https://www.plumhq.com/business), [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/)


**Fintech role:** Direct — Insurance purchase / renewal / financial claim support

- **Observable in the relevant fintech product:** Premiums, insured values, policy and claim status if using an insurtech.
- **Needs connected merchant data:** Asset inventory, incidents, exposure, policy wording, documents and exclusions.
- **Proposed intervention:** Prepare a protection review or claim evidence pack and track outstanding steps.
- **Limit:** Insurer decisions and policy wording govern coverage; not every loss is insurable.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — No dedicated merchant protection workflow verified; India; product-specific eligibility | 1/5 | Payment records can support evidence; insurance claim handling is not verified.  Confidence: Low. | [R15: Razorpay](https://razorpay.com/x/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Plum — Business insurance / benefits; India | 3/5 | Substantial fit for this specific pain. Insurance and benefits access and administration. Policy-specific coverage and insurer claim decisions; not loss prevention. Confidence: Medium. | [F35: Plum](https://www.plumhq.com/business), [F40: Plum](https://www.plumhq.com/) |
| ERGO NEXT — Commercial property insurance; US | 3/5 | Substantial fit for this specific pain. Digital access to commercial property and covered business-income protection. Exclusions and insured events govern payment; not universal interruption cover. Confidence: Medium. | [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/) |

#### 10.6.4 — Protection is offered at checkout but the cover or seller obligation is unclear

*Research hypothesis · Applies to: All*

- **Need:** Explain optional protection, eligibility, price and servicing responsibilities.
- **Observable signal:** Coverage terms; opt-in; premium; cancellations; complaints.
- **Outcome to measure:** Informed uptake; mis-selling complaints; claim friction.
- **Related workflow evidence:** [F35: Plum](https://www.plumhq.com/business), [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/)


**Fintech role:** Direct — Insurance purchase / renewal / financial claim support

- **Observable in the relevant fintech product:** Premiums, insured values, policy and claim status if using an insurtech.
- **Needs connected merchant data:** Asset inventory, incidents, exposure, policy wording, documents and exclusions.
- **Proposed intervention:** Prepare a protection review or claim evidence pack and track outstanding steps.
- **Limit:** Insurer decisions and policy wording govern coverage; not every loss is insurable.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — No dedicated merchant protection workflow verified; India; product-specific eligibility | 0/5 | No merchant-wide optional protection distribution workflow was verified.  Confidence: Low. | [R15: Razorpay](https://razorpay.com/x/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Riskcovry — Embedded insurance; India / supported partners | 3/5 | Substantial infrastructure fit; merchant-specific cover clarity and customer understanding still need validation. Correct disclosures, servicing and claims still need contracted roles. Confidence: Medium. | [F42: Riskcovry](https://www.riskcovry.com/) |
| ERGO NEXT — Commercial property insurance; US | 0/5 | No direct merchant-checkout protection-distribution support identified in the reviewed commercial-property source. Exclusions and insured events govern payment; not universal interruption cover. Confidence: Low. | [F36: ERGO NEXT](https://www.nextinsurance.com/commercial-property-insurance/) |

### 10.7. 10G. Treasury and currency exposure

**Latent need hypothesis:** I need spare cash to work without jeopardizing upcoming obligations.

**Related product/workflow sources:** [F26: Airwallex](https://www.airwallex.com/en-eu/business-account), [F37: Mercury](https://mercury.com/treasury)

#### 10.7.1 — Idle cash earns little but I fear being unable to pay tomorrow

*Research hypothesis · Applies to: All*

- **Need:** Separate operating reserves from genuinely investable surplus.
- **Observable signal:** Cleared balances; upcoming obligations; access periods; investment terms.
- **Outcome to measure:** Liquidity buffer breaches; net return after costs.
- **Related workflow evidence:** [F26: Airwallex](https://www.airwallex.com/en-eu/business-account), [F37: Mercury](https://mercury.com/treasury)


**Fintech role:** Direct — Treasury / multi-currency accounts / finance comparison

- **Observable in the relevant fintech product:** Balances, transfer timing, FX conversions and investment transactions in scope.
- **Needs connected merchant data:** Obligations, entity eligibility, risk tolerance, investment terms and currency commitments.
- **Proposed intervention:** Separate operational cash from surplus and compare transparent liquidity/FX scenarios.
- **Limit:** Treasury products involve different risks; no universal suitability or return is assumed.
- **Gap classification:** Potential product gap

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX cash views / international receipt conversion; India; product-specific eligibility | 1/5 | Cash visibility is adjacent; an eligible surplus-investment engine is not established.  Confidence: Low. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Mercury — Treasury; US eligible entities | 4/5 | Strong fit for this specific pain. Cash investment and transfer workflows. Investment risk and liquidity restrictions remain; not universal SME availability. Confidence: Medium. | [F37: Mercury](https://mercury.com/treasury) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 2/5 | Partial fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Medium. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |

#### 10.7.2 — I concentrate all operating cash with one account provider

*Research hypothesis · Applies to: All*

- **Need:** Monitor concentration and maintain an approved continuity plan.
- **Observable signal:** Balances by provider; transfer access; upcoming commitments.
- **Outcome to measure:** Concentration; access downtime; usable backup liquidity.
- **Related workflow evidence:** [F26: Airwallex](https://www.airwallex.com/en-eu/business-account), [F37: Mercury](https://mercury.com/treasury)


**Fintech role:** Direct — Treasury / multi-currency accounts / finance comparison

- **Observable in the relevant fintech product:** Balances, transfer timing, FX conversions and investment transactions in scope.
- **Needs connected merchant data:** Obligations, entity eligibility, risk tolerance, investment terms and currency commitments.
- **Proposed intervention:** Separate operational cash from surplus and compare transparent liquidity/FX scenarios.
- **Limit:** Treasury products involve different risks; no universal suitability or return is assumed.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX cash views / international receipt conversion; India; product-specific eligibility | 2/5 | Multi-account visibility helps; independent continuity and concentration policy remain.  Confidence: Medium. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Mercury — Treasury; US eligible entities | 1/5 | Enabling / adjacent fit for this specific pain. Cash investment and transfer workflows. Investment risk and liquidity restrictions remain; not universal SME availability. Confidence: Low. | [F37: Mercury](https://mercury.com/treasury) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 2/5 | Partial fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Medium. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |

#### 10.7.3 — Currency movements change the margin between quoting and settlement

*Research hypothesis · Applies to: All*

- **Need:** Estimate net exposure and compare permitted currency-conversion choices.
- **Observable signal:** Invoice currencies; timing; supplier payables; quoted FX rates.
- **Outcome to measure:** Realized FX variance; margin after conversion costs.
- **Related workflow evidence:** [F26: Airwallex](https://www.airwallex.com/en-eu/business-account), [F37: Mercury](https://mercury.com/treasury)


**Fintech role:** Direct — Treasury / multi-currency accounts / finance comparison

- **Observable in the relevant fintech product:** Balances, transfer timing, FX conversions and investment transactions in scope.
- **Needs connected merchant data:** Obligations, entity eligibility, risk tolerance, investment terms and currency commitments.
- **Proposed intervention:** Separate operational cash from surplus and compare transparent liquidity/FX scenarios.
- **Limit:** Treasury products involve different risks; no universal suitability or return is assumed.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX cash views / international receipt conversion; India; product-specific eligibility | 2/5 | Collection FX exists; comprehensive exposure management or hedging is unverified.  Confidence: Medium. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Mercury — Treasury; US eligible entities | 1/5 | Enabling / adjacent fit for this specific pain. Cash investment and transfer workflows. Investment risk and liquidity restrictions remain; not universal SME availability. Confidence: Low. | [F37: Mercury](https://mercury.com/treasury) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 3/5 | Substantial fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Medium. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |

#### 10.7.4 — I cannot compare finance products on net cost, risk and availability

*Research hypothesis · Applies to: All*

- **Need:** Compare explicit fees, repayment timing, eligibility and risks on common assumptions.
- **Observable signal:** Offers; fees; cashflows; covenants; liquidity constraints.
- **Outcome to measure:** Decision errors; unexpected fees; cash shortfalls.
- **Related workflow evidence:** [F26: Airwallex](https://www.airwallex.com/en-eu/business-account), [F37: Mercury](https://mercury.com/treasury)


**Fintech role:** Direct — Treasury / multi-currency accounts / finance comparison

- **Observable in the relevant fintech product:** Balances, transfer timing, FX conversions and investment transactions in scope.
- **Needs connected merchant data:** Obligations, entity eligibility, risk tolerance, investment terms and currency commitments.
- **Proposed intervention:** Separate operational cash from surplus and compare transparent liquidity/FX scenarios.
- **Limit:** Treasury products involve different risks; no universal suitability or return is assumed.
- **Gap classification:** Partial or uncertain coverage

| Provider / product | Coverage | Assessment and limits | Evidence |
|---|---|---|---|
| Razorpay — RazorpayX cash views / international receipt conversion; India; product-specific eligibility | 1/5 | Product terms are inputs; independent cross-product suitability comparison is unverified.  Confidence: Low. | [R05: Razorpay](https://razorpay.com/agentic-business-banking/), [F08: Razorpay](https://razorpay.com/accept-international-payments/bank-transfers/), [F02: Razorpay](https://razorpay.com/x/corporate-cards/) |
| Mercury — Treasury; US eligible entities | 2/5 | Partial fit for this specific pain. Cash investment and transfer workflows. Investment risk and liquidity restrictions remain; not universal SME availability. Confidence: Medium. | [F37: Mercury](https://mercury.com/treasury) |
| Airwallex — Global accounts / FX; EU source edition / eligible global entities | 2/5 | Partial fit for this specific pain. Currency collection, conversion, transfers and accounting connections. Not automatically available to an Indian entity; not a full hedging or tax adviser. Confidence: Medium. | [F26: Airwallex](https://www.airwallex.com/en-eu/business-account) |

## Razorpay’s AI and existing product coverage

### RAY / Agentic Dashboard

Ask questions about payments, settlements and refunds; retrieve reports and take supported contextual actions.

**Data:** Merchant payment and account records.

**Control:** Read the underlying transaction and action before relying on it; verify current account access and supported operations.

**Public status and limitation:** The October 2025 announcement describes early access. It is evidence of the interface direction, not universal availability.

[R01: Razorpay](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/)

### RAY on WhatsApp

Payment summaries, failed-payment recovery links, settlement nudges, aggregate sales forecasts and diagnosis of payment-performance changes.

**Data:** Payments, settlement information and connected payment intelligence.

**Control:** Sensitive account actions require authentication as described by Razorpay. Forecasts still need assumptions and source visibility.

**Public status and limitation:** September 2026 announcement describes live early partners. Do not equate aggregate sales forecasting with predicting each customer’s next purchase.

[R04: Razorpay](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/)

### Agent Studio

Specialists for cart recovery, failed-subscription recovery, COD confirmation, disputes and post-delivery feedback.

**Data:** Merchant payment records plus authorized store, order, logistics and communication sources.

**Control:** Approved offers, scoped access, review gates, validation, consent and audit logs are described. July 2026 terms clarify that pause prevents new runs but in-progress runs may finish; authorised AI sub-processors may process data. Actual configuration and product-specific terms need confirmation.

**Public status and limitation:** March 2026 explanation describes early access; the current product page advertises agents and sign-up. Separate marketing availability from deployment in a particular merchant account.

[R02: Razorpay](https://razorpay.com/agent-studio/), [R03: Razorpay](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/), [P01: Razorpay](https://razorpay.com/tnc/agent-studio/)

### RazorpayX agentic banking

Cashflow visibility, customer-invoice follow-up and payout assistance.

**Data:** Connected bank balances, transactions, invoices and payout instructions.

**Control:** Payout authorization and account permissions matter independently of the quality of the conversation.

**Public status and limitation:** June 2026 release explicitly calls Cashflow Insights and Payout Agent beta for Connected Banking+ users; verify Receivables Agent rollout separately.

[R05: Razorpay](https://razorpay.com/agentic-business-banking/), [R06: Razorpay](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/)

### Agentic payments / commerce

Enable shopper-facing conversational discovery and payment inside supported apps or AI experiences.

**Data:** Merchant catalog, prices, availability and approved payment instructions.

**Control:** Customer intent, authorization and accurate commercial terms are essential.

**Public status and limitation:** Sprint 2026 lists announced capabilities. A launch listing alone does not show general access or identical support across channels.

[R20: Razorpay](https://razorpay.com/sprint/26)

### Existing growth and payment tools

Engage/BillMe handle segmentation, offers, loyalty and campaigns; Magic Checkout handles conversion/COD; Optimizer routes payments; AutoPay supports recurring recovery.

**Data:** Varies by product: payment, order, customer, inventory and campaign records.

**Control:** Merchant configuration, offer limits, workflows and product-specific permissions.

**Public status and limitation:** Substantial overlap already exists. Public materials reviewed do not establish a complete individual reorder-prediction plus randomized incremental-profit workflow.

[R07: Razorpay](https://razorpay.com/engage/), [R08: Razorpay](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/), [R09: Razorpay](https://razorpay.com/blog/personalized-marketing-journeys/), [R10: Razorpay](https://razorpay.com/magic-checkout/), [R11: Razorpay](https://razorpay.com/optimizer-intelligent-payments-routing/), [R12: Razorpay](https://razorpay.com/blog/?p=26313)

## Avoid confusing business outcomes

| Outcome | Meaning | Main bucket |
|---|---|---|
| New demand | A suitable new customer discovers and considers the business. | 03 |
| Conversion | Existing interest becomes an agreed order or booking. | 04 |
| Payment recovery | An unpaid, agreed obligation becomes a verified collection. | 05 |
| Delivery recovery | An at-risk accepted order is successfully fulfilled. | 06 |
| Value retention | A valid exchange or resolved dispute preserves value after costs. | 07 |
| Cash recovery / release | Already-collected or due remittance reaches the correct bank/ledger. | 08 |
| Repeat growth | An existing relationship produces additional useful purchases. | 09 |
| Margin / liquidity improvement | Costs or timing improve; this is not automatically new revenue. | 02,08,10 |

**Measurement discipline:** A recovered transaction is not necessarily incremental revenue. A credit balance is not automatically earned revenue. Lower costs improve contribution, while faster settlement improves liquidity. Compare like-for-like eligible customers or obligations, deduplicate order IDs, allow for reversals, and subtract intervention costs before claiming benefit.

## Cross-links between pain points

- **02.3.3 → 06.1.3:** Inventory synchronization failure can prevent an accepted order from becoming ready for dispatch.
- **04.5.2 → 05.2.1:** Ambiguous payment state can trigger an inappropriate cart-recovery message.
- **06.3.3 → 07.4.4:** Delivery delays can later appear as disputes; fix the originating delivery issue.
- **07.2.3 → 08.4.3:** Store credit retained in the business remains an obligation until appropriately redeemed/recognized.
- **08.1.3 → 10.1.2:** Late COD remittance creates a cash gap even when orders are delivered.
- **07.1.3 → 02.1.4:** Recurring product defects should inform assortment and product changes.
- **09.3.2 → 10.1.4:** Discounting affects both contribution and cash forecasts.
- **01.4.2 → 09.2.2:** Reliable consent is a prerequisite for personalized outreach.
- **03.4.4 → 02.3.1:** Campaign scaling must account for replenishment constraints.
- **05.3.2 → 09.4.1:** A failed renewal and a voluntary cancellation are different churn mechanisms.

## Interview prompts to validate the map

1. Tell me about the last sale you expected but did not complete. Show the records you used to investigate it.
2. Walk me through yesterday from opening to closing. Where did you copy information, wait, chase someone or override a tool?
3. Which problem repeats most often, which costs the most, and which causes the most anxiety? These can be different problems.
4. Show one successful recovery and one failed recovery. What happened after the apparent success, including refunds and costs?
5. Which decisions can your team make today? Which still require you, and why?
6. What customer data is actually available and connected? Which facts do you have to ask the customer or an employee?
7. What do you do when you are uncertain? What would make you trust a recommendation enough to approve it?
8. When would doing nothing be better than sending another message, retrying a payment or issuing an offer?
9. Which tool do you pay for but rarely use? Which spreadsheet or WhatsApp thread remains essential?
10. What would you measure to decide whether an intervention was worth the money and effort?

## How to validate the prioritization

For each shortlisted pain, validate merchant segment, frequency, severity, current workaround, existing-tool adoption, accessible data, controllable action and measurable outcome. Start with a rule or manual baseline when it can solve the job. AI becomes useful when context varies enough to justify prediction, language understanding or multi-step coordination; calculations, permissions and financial limits still need deterministic validation.

## Source register

### R01 — Razorpay: Agentic Dashboard with RAY

India · Vendor announcement · Reviewed 13 October 2026

Conversational access to payments, settlements and refunds; report downloads and contextual follow-up actions. The announcement describes early access, not universal availability.

[Read source](https://razorpay.com/blog/razorpay-agentic-dashboard-your-dashboard-just-conversational-with-ray/)

### R02 — Razorpay: Agent Studio

India · Product page · Reviewed 13 October 2026

Specialist agents for cart recovery, COD confirmation, dispute response, subscription recovery and customer feedback; connected systems and action controls. Product descriptions do not establish effectiveness for every merchant.

[Read source](https://razorpay.com/agent-studio/)

### R03 — Razorpay: Agent Studio principles and merchant control

India · Vendor explanation · Reviewed 13 October 2026

Describes merchant-scoped connected data, approved offers, review mode, permissions, communication consent, action validation, logs and pause controls. Treat these as vendor-stated design commitments; confirm configuration and availability in a live account.

[Read source](https://razorpay.com/blog/razorpay-agent-studio-principles-guardrails-and-merchant-control/)

### R04 — Razorpay: RAY on WhatsApp

India · Vendor announcement · Reviewed 13 October 2026

Describes payment summaries, recovery links, settlement nudges, aggregate sales forecasting and payment root-cause analysis. Aggregate forecasting does not establish individual next-purchase prediction.

[Read source](https://razorpay.com/blog/meet-ray-your-always-on-ai-account-manager-now-live-on-whatsapp/)

### R05 — Razorpay: RazorpayX Agentic Banking

India · Product page · Reviewed 13 October 2026

Agentic banking workflows spanning cashflow, receivables and payouts. Connected banking eligibility and rollout must be checked separately.

[Read source](https://razorpay.com/agentic-business-banking/)

### R06 — Razorpay: Agentic connected banking launch

India · Vendor announcement · Reviewed 13 October 2026

Cashflow Insights and Payout Agent described as beta for Connected Banking+ users; Receivables Agent described for invoice follow-ups. Do not infer equal release status for every agent.

[Read source](https://razorpay.com/newsroom/for-the-first-time-in-india-businesses-on-razorpayx-can-now-bank-with-ai-agents-that-work-while-they-sleep/)

### R07 — Razorpay: Engage growth marketing suite

India · Product page · Reviewed 13 October 2026

Offers, loyalty wallets, gift cards, digital bills, transaction-based targeting and campaign execution. Retention and repeat-purchase tooling already exist.

[Read source](https://razorpay.com/engage/)

### R08 — Razorpay: BillMe customer data and retention suite

India · Vendor product explanation · Reviewed 13 October 2026

Unifies online/offline customer data, supports historical and behavioral segments, coupons, surveys and multichannel engagement.

[Read source](https://razorpay.com/blog/everything-you-need-to-know-about-razorpaybillme/)

### R09 — Razorpay: BillMe Auto Engagement

India · Vendor product explanation · Reviewed 13 October 2026

Merchant-designed post-purchase journeys, triggered messaging, product recommendations and campaign/repeat-purchase tracking. Does not document a randomized holdout workflow.

[Read source](https://razorpay.com/blog/personalized-marketing-journeys/)

### R10 — Razorpay: Magic Checkout

India · Product page · Reviewed 13 October 2026

Checkout autofill, payment recommendations, offers, affordability and COD risk/RTO controls. RTO concerns failed delivery and is different from a customer return after delivery.

[Read source](https://razorpay.com/magic-checkout/)

### R11 — Razorpay: Optimizer payment orchestration

India · Product page · Reviewed 13 October 2026

Multiple payment providers, smart routing, manual rules, fallback routes and cost/success optimization.

[Read source](https://razorpay.com/optimizer-intelligent-payments-routing/)

### R12 — Razorpay: UPI AutoPay Intelligent Revenue-Protect

India · Vendor announcement · Reviewed 13 October 2026

Mandate setup recovery, configurable intelligent retries, WhatsApp recovery and cancellation win-back using approved discounts, pause or alternate payment options. Retry engine described as beta/early access.

[Read source](https://razorpay.com/blog/?p=26313)

### R13 — Razorpay: About settlements

India · Documentation · Reviewed 13 October 2026

Explains movement of captured payment funds to merchant bank accounts and settlement operations. Payment success and settlement are separate states.

[Read source](https://razorpay.com/docs/payments/settlements/)

### R14 — Razorpay: Smart Collect 2.0

India · Product page · Reviewed 13 October 2026

Customer identifiers, bank-transfer collection, notifications and automatic matching of incoming UPI/IMPS/NEFT/RTGS payments.

[Read source](https://razorpay.com/smart-collect/)

### R15 — Razorpay: RazorpayX business finance suite

India · Product page · Reviewed 13 October 2026

Business banking and outgoing money workflows including vendor payments, payouts and payroll; not just customer payment collection.

[Read source](https://razorpay.com/x/)

### R16 — Razorpay: RazorpayX Payroll

India · Product page · Reviewed 13 October 2026

Payroll, employee reimbursements, leave integrations and compliance workflows. Plan coverage should be checked; pricing is not compared in this study.

[Read source](https://razorpay.com/payroll/founder/)

### R17 — Razorpay: Payment integration steps

India · Documentation · Reviewed 13 October 2026

Demonstrates integration, verification and payment handling work needed to reliably connect checkout and merchant systems.

[Read source](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/)

### R18 — Razorpay: Wallet refunds and ClickPost

India · Vendor product explanation · Reviewed 13 October 2026

Refund to source or brand wallet through Engage and ClickPost, intended to retain customer value and facilitate repurchase. Wallet balances are not automatically recognized revenue.

[Read source](https://razorpay.com/blog/how-d2c-brands-can-stop-losing-customers-at-the-refund-stage/)

### R19 — Razorpay: Payment gateway onboarding documents

India · Vendor guide · Reviewed 13 October 2026

Describes entity-dependent identity, business and bank documentation. Used as evidence of onboarding tasks, not as a definitive legal checklist.

[Read source](https://razorpay.com/blog/documents-required-for-payment-gateway)

### R20 — Razorpay: Sprint 2026 agentic payments

India · Launch directory · Reviewed 13 October 2026

Announced agentic commerce, integration assistance and commerce capabilities; launch-directory presence alone does not prove universal production availability.

[Read source](https://razorpay.com/sprint/26)

### I01 — Cashfree: FlowWise smart payment routing

India · Vendor product explanation · Reviewed 13 October 2026

Routing across configured gateways plus consolidated refunds, settlements and reconciliation.

[Read source](https://www.cashfree.com/blog/smart-payment-routing/)

### I02 — Juspay: Payment orchestration

India / global · Product page · Reviewed 13 October 2026

Predictive, fallback and cost-based routing; outage monitoring; configurable payment flows across providers.

[Read source](https://juspay.io/payment-orchestration)

### I03 — GoKwik: KwikEngage

India · Product page · Reviewed 13 October 2026

Lifecycle messaging, cart recovery, WhatsApp checkout, segmentation, AI calling and support workflows.

[Read source](https://www.gokwik.co/product/kwikengage)

### I04 — Shiprocket: Shipping platform features

India · Product page · Reviewed 13 October 2026

Courier choice, order/channel connections, tracking, COD cashflow, shipping charges and non-delivery management. Adjacent commerce infrastructure, not a payment gateway.

[Read source](https://www.shiprocket.in/features/)

### I05 — Shiprocket: Non-delivery report workflows

India · Support documentation · Reviewed 13 October 2026

Customer contact, corrected delivery information, reattempt requests and escalation for undelivered parcels.

[Read source](https://support.shiprocket.in/support/solutions/folders/152000000132)

### I06 — Return Prime: Thrive AI for returns

India / global · Vendor announcement · Reviewed 13 October 2026

Personalizes exchange/store-credit incentives using purchase and return behavior, with recovery reporting. Claimed lift and ROI are vendor claims, not independent benchmarks.

[Read source](https://www.returnprime.com/blog/introducing-thrive-ai-the-returns-revenue-engine-for-d2c-brands)

### I07 — Zoho: Real-time inventory management

India / global · Vendor product explanation · Reviewed 13 October 2026

Stock synchronization, warehouses and commerce integrations address inventory fragmentation. Adjacent business software, not a fintech startup.

[Read source](https://www.zoho.com/inventory/academy/inventory-management/real-time-management-with-zoho-inventory.html)

### I08 — Clear: GST reconciliation software

India · Product page · Reviewed 13 October 2026

Invoice reconciliation, filing and input-credit workflows; AI-assisted matching. No tax rates or eligibility conclusions are prescribed here.

[Read source](https://cleartax.in/gst)

### I09 — CredAble: Pre-shipment financing platform

India · Product page · Reviewed 13 October 2026

Enables financing at purchase-order stage before an invoice exists, illustrating the distinction between finance needs and collections.

[Read source](https://credable.in/pre-shipment-financing-platform-for-banks/)

### I10 — PayGlocal: Cross-border payments infrastructure

India / cross-border · Product page · Reviewed 13 October 2026

International cards and local collection rails, recurring payments, INR settlement and remittance documentation.

[Read source](https://payglocal.in/)

### U01 — Stripe: Atlas

US / global · Product page · Reviewed 13 October 2026

US business incorporation and related setup tasks; not a general Indian incorporation service.

[Read source](https://stripe.com/atlas)

### U02 — Stripe: Smart Retries

US / global · Vendor engineering explanation · Reviewed 13 October 2026

Predicts when to retry failed payments using network signals; supports recovery of involuntary subscription churn.

[Read source](https://stripe.com/blog/how-we-built-it-smart-retries)

### U03 — Stripe: Radar

US / global · Product page · Reviewed 13 October 2026

Transaction/account fraud and abuse screening, custom controls and dispute capabilities.

[Read source](https://stripe.com/radar)

### U04 — Stripe: Smart Disputes

US / global · Product page · Reviewed 13 October 2026

Dispute prevention/deflection and AI preparation and submission of evidence for eligible disputes.

[Read source](https://stripe.com/payments/dispute-management)

### U05 — Stripe: Revenue Recognition

US / global · Product page · Reviewed 13 October 2026

Accounting for revenue over time; distinguishes cash received from revenue earned, especially for subscriptions.

[Read source](https://stripe.com/revenue-recognition)

### U06 — Square: Appointments

US · Product page · Reviewed 13 October 2026

Service booking and scheduling workflows, relevant to capacity, cancellations and no-shows rather than shipped inventory.

[Read source](https://squareup.com/us/en/appointments)

### U07 — Square: Bookable team members and access

US · Support documentation · Reviewed 13 October 2026

Role-based calendar access and reassignment of appointments when staff leave.

[Read source](https://squareup.com/help/us/en/article/5350-create-staff-member-profiles-for-square-appointments)

### U08 — Square: Invoice inventory tracking

US · Support documentation · Reviewed 13 October 2026

Committed inventory tied to invoice payments helps avoid selling the same stock twice; availability depends on plan.

[Read source](https://squareup.com/help/us/en/article/8330-use-inventory-tracking-for-square-invoices)

### U09 — Shopify: Abandoned checkout recovery

US / global; Canadian company · Support documentation · Reviewed 13 October 2026

Recovery workflows, channel limits and payment-event review. The cited page identifies itself as the legacy experience; used for workflow context, not current UI instructions.

[Read source](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts)

### U10 — Klaviyo: Predictive analytics for ecommerce

US / global · Product page · Reviewed 13 October 2026

Expected next order, predicted lifetime value, churn-risk segments and per-customer send timing; depends on adequate connected history.

[Read source](https://www.klaviyo.com/solutions/ai/predictive-analytics-for-ecommerce)

### U11 — Chargebee: Growth Plays

India-founded / US and global markets · Documentation · Reviewed 13 October 2026

Acquisition, expansion and retention plays; tests of offers/pricing/cancellation pages and control groups for lift measurement.

[Read source](https://www.chargebee.com/docs/growth/plays/plays-overview)

### U12 — Loop: Spring 2026 releases

US / global · Product release page · Reviewed 13 October 2026

AI exchange recommendations, return forecasts, fraud tools and order-editing capabilities. Loop Agent and several other features are explicitly marked coming soon on the cited page.

[Read source](https://www.loopreturns.com/launches/spring-2026/)

### U13 — Gorgias: AI Agent explained

US / global · Support documentation · Reviewed 13 October 2026

Shopping assistance and support for tracking, cancellations, returns and missing items; connected actions and human handoff.

[Read source](https://docs.gorgias.com/en-US/ai-agent-explained-497772)

### U14 — BILL: Accounts Receivable

US · Product page · Reviewed 13 October 2026

Invoice tracking, reminders, collection methods and accounting sync.

[Read source](https://www.bill.com/product/accounts-receivable/)

### U15 — Ramp: Accounts Payable

US / global · Product page · Reviewed 13 October 2026

Invoice capture, approval and payment workflows for supplier spending.

[Read source](https://ramp.com/accounts-payable)

### U16 — Ramp: Procurement agents

US / global · Support documentation · Reviewed 13 October 2026

Natural-language review criteria for procurement agents, illustrating controlled delegation and vendor approval workflows.

[Read source](https://support.ramp.com/getting-started-with-ramp-procurement-policies/)

### E01 — Baymard Institute: Cart abandonment reasons

US shopper research · Independent UX research · Reviewed 13 October 2026

Documents cost, delivery, trust and checkout-friction reasons; also shows that some abandonment is ordinary browsing. Do not apply US survey percentages directly to an Indian merchant.

[Read source](https://baymard.com/lists/cart-abandonment-rate)

### E02 — Federal Reserve Banks: 2026 Employer Firms report, 2025 survey

US · Merchant survey · Reviewed 13 October 2026

US small employers report customer acquisition/sales, staffing and cost pressures. Convenience sample of 6,525 employer firms; not a representative measure of all merchants or India.

[Read source](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)

### F01 — Razorpay: AP Automation / Source to Pay

India · Official product documentation · Reviewed 13 October 2026

Vendor onboarding, invoice intake, purchase orders, goods-receipt matching, approval workflows, payouts and ERP integration. This materially extends coverage beyond sending supplier payments.

[Read source](https://razorpay.com/x/ap-automation/)

### F02 — Razorpay: Corporate cards and spend controls

India · Official product page; redirects observed · Reviewed 13 October 2026

Advertises corporate cards, spending limits, category controls, reports and a savings concierge. Capital and line-of-credit landing URLs redirect here; historical loan material is not proof of general current loan availability.

[Read source](https://razorpay.com/x/corporate-cards/)

### F03 — Razorpay: Historical working-capital loan workflow

India · Historical official documentation · Reviewed 13 October 2026

Historical documentation describes transaction-history-based invitations, partner lending and settlement-linked repayment. Current merchant eligibility and rollout were not established; treat as historical evidence.

[Read source](https://d6xcmfyh68wv8.cloudfront.net/docs/x/capital/working-capital-loans/)

### F04 — Razorpay: Dashboard team permissions

India · Historical official explanation · Reviewed 13 October 2026

Describes individual accounts and owner, operations and finance roles, plus payment and dispute operations. Older article: verify current role granularity.

[Read source](https://razorpay.com/blog/how-to-use-razorpay-dashboard/)

### F05 — Razorpay: Refund operations

India · Official product documentation · Reviewed 13 October 2026

Refund APIs and dashboard workflows address execution and tracking. They do not independently resolve merchandise eligibility, the correct commercial amount or every bank delay.

[Read source](https://razorpay.com/docs/payments/refunds/)

### F06 — Razorpay: Subscriptions

India · Official product documentation · Reviewed 13 October 2026

Recurring plans and subscription payment lifecycle; method-specific setup and supported changes must be checked. Billing operation is distinct from voluntary customer retention.

[Read source](https://razorpay.com/docs/payments/subscriptions/)

### F07 — Razorpay: POS payments and digital billing

India · Official product page · Reviewed 13 October 2026

In-store payment terminals, digital billing, offers and loyalty. Checkout-speed marketing claims are not treated as independently verified queue reductions.

[Read source](https://razorpay.com/pos/)

### F08 — Razorpay: International bank transfers

India / international collections · Official product documentation · Reviewed 13 October 2026

International collection accounts and conversion into Indian settlement workflows; published currency and fee terms require account-specific checks.

[Read source](https://razorpay.com/accept-international-payments/bank-transfers/)

### F09 — Stripe: Payment lifecycle and duplicate prevention

US / supported markets · Official product documentation · Reviewed 13 October 2026

Payment state tracking and idempotency support consistent collection. Merchant integrations must still associate the correct order and handle asynchronous outcomes.

[Read source](https://docs.stripe.com/payments/payment-intents)

### F10 — Stripe: Webhook reliability

US / supported markets · Official product documentation · Reviewed 13 October 2026

Documents event delivery, retries and integration handling. A payment event is an input to fulfillment, not proof that goods were delivered.

[Read source](https://docs.stripe.com/webhooks)

### F11 — Stripe: Refund workflows

US / supported markets · Official product documentation · Reviewed 13 October 2026

Full and partial refunds and refund lifecycle; commercial decisions and customer-bank completion remain separate.

[Read source](https://docs.stripe.com/refunds)

### F12 — Stripe: Team permissions

US / supported markets · Official product documentation · Reviewed 13 October 2026

Dashboard teams and access roles. Access must be scoped per business and product.

[Read source](https://docs.stripe.com/get-started/account/teams)

### F13 — Square: Retail inventory and commerce operations

US product edition · Official product documentation · Reviewed 13 October 2026

Payment-linked retail operations include stock by location/channel, inventory history and purchasing. Stock accuracy still depends on the operational records.

[Read source](https://squareup.com/us/en/point-of-sale/retail)

### F14 — Square: Customer Directory

US product edition · Official product documentation · Reviewed 13 October 2026

Customer profiles, purchase histories, deduplication, groups and integration with marketing and loyalty. Cross-channel coverage depends on linked identities and connected channels.

[Read source](https://squareup.com/us/en/point-of-sale/features/customer-directory)

### F15 — Square: Marketing

US product edition · Official product documentation · Reviewed 13 October 2026

Merchant marketing and automated engagement tied to the Square ecosystem. Campaign activity is not a causal measure of incremental profit.

[Read source](https://squareup.com/us/en/marketing)

### F16 — Square: Loyalty

US product edition · Official product documentation · Reviewed 13 October 2026

Reward enrollment and redemption integrated with merchant transactions. Commercial program design and incrementality remain merchant decisions.

[Read source](https://squareup.com/us/en/software/loyalty)

### F17 — Square: Square AI

US product edition · Official product documentation · Reviewed 13 October 2026

Conversational business insights and content assistance based on connected business data. It does not establish reliable inference about customers or channels not observed.

[Read source](https://squareup.com/us/en/ai)

### F18 — Square: Purchase orders

US product edition · Official product documentation · Reviewed 13 October 2026

Purchase orders connect vendors, inventory ordering and receiving. They do not guarantee supplier performance.

[Read source](https://squareup.com/help/us/en/article/8258-create-purchase-orders-with-square-for-retail)

### F19 — Square: Loan eligibility

US product edition · Official product documentation · Reviewed 13 October 2026

Loan eligibility uses merchant account and processing conditions; an offer is not guaranteed. Lending supports liquidity, not proof of profitable demand.

[Read source](https://squareup.com/help/us/en/article/8544-review-loan-eligibility-requirements)

### F20 — Plaid: Financial data products

US / supported markets · Official product documentation · Reviewed 13 October 2026

Bank-account connections, balances, categorized transactions, identity and risk inputs. These are infrastructure inputs requiring authorization and a downstream merchant workflow.

[Read source](https://plaid.com/products/)

### F21 — Setu: Account Aggregator gateway

India · Official product documentation · Reviewed 13 October 2026

Consent and financial-data-fetch infrastructure across supported institutions. Integration and permitted financial-information-user access are necessary; not unrestricted access to every merchant bank account.

[Read source](https://setu.co/credit-infrastructure/credit-intelligence/account-aggregator-api)

### F22 — Perfios: Financial analysis and underwriting infrastructure

India / international · Official platform page · Reviewed 13 October 2026

Financial-data analysis, digital onboarding, underwriting and risk infrastructure for financial institutions. Merchant benefit is commonly mediated through a lender or platform.

[Read source](https://perfios.ai/)

### F23 — Ramp: Finance intelligence

US-led / eligibility varies · Official product documentation · Reviewed 13 October 2026

AI assistance for financial workflows, expense review, invoice processing and spend understanding. Scope follows the connected Ramp records and product configuration.

[Read source](https://ramp.com/intelligence)

### F24 — Ramp: Procurement

US-led / eligibility varies · Official product documentation · Reviewed 13 October 2026

Purchasing intake, approval and vendor/procurement workflows. Physical quality inspection and reliable delivery still require operational evidence.

[Read source](https://ramp.com/procurement)

### F25 — BILL: Accounts payable

US-led / eligibility varies · Official product documentation · Reviewed 13 October 2026

Invoice capture, approvals, vendor payments and accounting workflow. Does not settle all commercial disagreements with suppliers.

[Read source](https://www.bill.com/product/accounts-payable)

### F26 — Airwallex: Global business accounts

EU edition / global platform · Official product documentation · Reviewed 13 October 2026

Multi-currency collection accounts, foreign exchange, transfers, cards and accounting connections. This source describes an EU edition; availability and rules differ by entity country.

[Read source](https://www.airwallex.com/en-eu/business-account)

### F27 — Mondu: B2B deferred payments

UK / Europe · Official product documentation · Reviewed 13 October 2026

Net terms, instalments and trade-account infrastructure, with merchant upfront-payment and default-risk arrangements subject to approval and contract.

[Read source](https://www.mondu.ai/en-gb/partnerships/)

### F28 — Clearco: Ecommerce funding eligibility

US eligible ecommerce · Official product documentation · Reviewed 13 October 2026

Funding for inventory and growth; published criteria include a US-incorporated business, operating history and revenue threshold. This is an adjacent lending approach, not universally available SME finance.

[Read source](https://www.clear.co/ecommerce-funding)

### F29 — KredX: Supply-chain finance and cash management

India / cross-border · Official product documentation · Reviewed 13 October 2026

Products span factoring, receivables, payables, dynamic discounting and trade finance. Eligibility, counterparties and contracts govern access.

[Read source](https://www.kredx.com/)

### F30 — Pine Labs: Pay Later / affordability

India · Official product documentation · Reviewed 13 October 2026

Partner-financed instalment payment options at merchant checkout. Coverage depends on issuer/lender, product and buyer eligibility.

[Read source](https://www.pinelabs.com/pos-products/paylater)

### F31 — Zoho: Books accounting

India edition · Official product documentation · Reviewed 13 October 2026

India accounting, invoices, bank reconciliation and tax-related records; business/accounting software adjacent to fintech, not a payment processor.

[Read source](https://www.zoho.com/in/books/)

### F32 — Chargebee: Retention

Global subscription businesses · Official product documentation · Reviewed 13 October 2026

Cancellation experiences and subscription retention workflows. An observed save is not automatically a lasting, incremental save.

[Read source](https://www.chargebee.com/growth/retention/)

### F33 — Chargebee: Retention lift and controls

Global subscription businesses · Official product documentation · Reviewed 13 October 2026

Global control can measure incremental impact of configured retention plays. It does not by itself establish long-run product-level contribution for every merchant.

[Read source](https://www.chargebee.com/docs/growth/reporting/dashboards-trends)

### F34 — Gusto: Hourly payroll

US · Official product documentation · Reviewed 13 October 2026

Payroll with time, hiring/onboarding and benefits-related workflows for supported US businesses. It cannot directly solve workforce shortages.

[Read source](https://gusto.com/product/payroll/hourly)

### F35 — Plum: Business insurance

India · Official product documentation · Reviewed 13 October 2026

Business risk insurance distribution, including specified cyber, liability, assets and crime risks. Covered events, exclusions and claims remain policy-dependent.

[Read source](https://www.plumhq.com/business)

### F36 — ERGO NEXT: Commercial property insurance

US · Official product documentation · Reviewed 13 October 2026

Commercial property and business-income protection for covered losses. This transfers defined financial risk rather than preventing every interruption.

[Read source](https://www.nextinsurance.com/commercial-property-insurance/)

### F37 — Mercury: Treasury cash management

US eligible entities · Official product documentation · Reviewed 13 October 2026

Treasury investment and transfer automation for eligible businesses. Investment risk, access timing and entity eligibility must be checked separately from operating cash.

[Read source](https://mercury.com/treasury)

### F38 — Adyen: Shopper insights

Global supported markets · Official product documentation · Reviewed 13 October 2026

Cross-channel payment-derived shopper insights through dashboards or data integration. Broader customer identity and business context depend on merchant systems.

[Read source](https://help.adyen.com/knowledge/unified-commerce/insights/how-can-i-view-my-shopper-insights)

### F39 — Adyen: Payment-linked loyalty

Global supported markets · Official product documentation · Reviewed 13 October 2026

Provides payment-linked identification to query a merchant loyalty system. It is not itself a complete marketing or reward-optimization program.

[Read source](https://docs.adyen.com/unified-commerce/loyalty-program/payment-linked-loyalty/)

### F40 — Plum: Employee benefits

India · Official product documentation · Reviewed 13 October 2026

Employee insurance and benefits administration. Benefits can support retention, but do not guarantee hiring or employee satisfaction.

[Read source](https://www.plumhq.com/)

### F41 — CredAble: Working-capital infrastructure

India / global · Official product documentation · Reviewed 13 October 2026

Payables and receivables financing infrastructure, including supply-chain programs delivered with financing partners. A merchant must meet program conditions.

[Read source](https://credable.in/)

### F42 — Riskcovry: Embedded insurance distribution

India / supported partners · Official product documentation · Reviewed 13 October 2026

Insurance distribution and embedded journeys. This establishes infrastructure for optional protection, not proof every coverage explanation or claim is resolved.

[Read source](https://www.riskcovry.com/)

### F43 — Razorpay: Fraud controls and scope

India / flow-specific · Official explanation, 8 October 2026 · Reviewed 13 October 2026

Distinguishes cross-border Shield risk, exporter risk-dashboard rules and COD/RTO controls. Do not generalize exporter-specific functionality to all domestic merchants.

[Read source](https://razorpay.com/blog/built-in-payment-gateway-fraud-detection-india/)

### F44 — Razorpay: Ecommerce payment methods

India · Official product documentation · Reviewed 13 October 2026

Supported acceptance includes cards, UPI and several EMI/pay-later methods; enablement and buyer eligibility vary.

[Read source](https://razorpay.com/solutions/e-commerce/)

### F45 — Cashfree: RiskShield

India · Official announcement · Reviewed 13 October 2026

Risk monitoring and rules/ML products for merchant payment fraud. The announced reduction target is not treated as measured merchant-wide performance.

[Read source](https://www.cashfree.com/news-room/cashfree-payments-launches-riskshield-to-empower-merchants-curb-cyber-payment-frauds-in-real-time/)

### F46 — Chargebee: Billing and subscription lifecycle

Global / supported businesses · Official product documentation · Reviewed 13 October 2026

Billing automation, pricing models, invoicing and subscription lifecycle. Usage and entitlement integrations are still required for accurate business outcomes.

[Read source](https://www.chargebee.com/billing/)

### F47 — Stripe: Subscription price changes

US / supported markets · Official product documentation · Reviewed 13 October 2026

Documents changes to subscription pricing and related billing behavior. Merchant policy and external service entitlement must remain synchronized.

[Read source](https://docs.stripe.com/billing/subscriptions/change-price)

### P01 — Razorpay: Agent Studio terms — controls, data and runtime boundaries

India / product-specific conditions · Official product terms · Reviewed 13 October 2026

Terms effective 1 July 2026 describe configurable approval thresholds, manual/scheduled/event triggers, audit trails, and authorised AI sub-processors. Pause stops new runs while in-progress runs may finish. These details qualify broader marketing claims; per-agent availability and contract terms need verification.

[Read source](https://razorpay.com/tnc/agent-studio/)

### A01 — Anthropic: Building effective agents

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Distinguishes predefined workflows from agents whose model chooses tools and next steps; recommends starting with simpler patterns.

[Read source](https://www.anthropic.com/engineering/building-effective-agents)

### A02 — scikit-learn: Gradient-boosted trees for classification and regression

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Reference for candidate tabular prediction models. A possible model family, not evidence that Razorpay uses it for a particular agent.

[Read source](https://scikit-learn.org/stable/modules/ensemble.html)

### A03 — scikit-learn: Probability calibration

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Predicted probabilities need calibration and evaluation; ranking quality alone does not validate expected-value decisions.

[Read source](https://scikit-learn.org/stable/modules/calibration.html)

### A04 — scikit-survival: Introduction to survival analysis

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Time-to-event modelling handles observations whose next event has not yet occurred. Useful methodological reference for reorder or collection timing.

[Read source](https://scikit-survival.readthedocs.io/en/stable/user_guide/00-introduction.html)

### A05 — PyWhy / EconML: CausalForestDML

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Reference for heterogeneous treatment-effect estimation. Merchant pilots still need causal identification, overlap and preferably randomized action assignment.

[Read source](https://www.pywhy.org/EconML/_autosummary/econml.dml.CausalForestDML.html)

### A06 — statsmodels: Exponential smoothing

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Provides forecasting baselines for level, trend and seasonality. A simple baseline should precede complex demand models.

[Read source](https://www.statsmodels.org/stable/examples/notebooks/generated/exponential_smoothing.html)

### A07 — XGBoost: Learning to rank

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Reference for ranking models and grouped relevance labels; clicks alone do not establish incremental merchant profit.

[Read source](https://xgboost.readthedocs.io/en/stable/tutorials/learning_to_rank.html)

### A08 — Google OR-Tools: Constraint optimization

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Constraint solvers can handle scheduling and resource feasibility without learning a predictive model.

[Read source](https://developers.google.com/optimization/cp)

### A09 — Anthropic: Evaluating AI agents

Method reference / global · Official methodology documentation · Reviewed 13 October 2026

Evaluate tool trajectories and final outcomes, including failure behaviour; agent success is more than a fluent answer.

[Read source](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)

### A10 — Razorpay: Agent Studio launch and published agent lineup

India; eligibility and rollout vary · Official product announcement · Reviewed 13 October 2026

Describes Claude Agent SDK, Dispute Responder, Subscription Recovery, cart conversion, Cashflow Forecaster, RTO Shield/Insights and Settlement Insights. Announcement and beta descriptions do not establish a publicly callable agent API.

[Read source](https://razorpay.com/blog/?p=26292)

## Prioritization: growth, revenue recovery and other opportunities

All 208 pains are assigned once by primary outcome. Ratings are provisional analyst judgments, not measured prevalence or TAM. Lower Razorpay coverage alone does not imply a good AI opportunity. Scores are weighted 0–5 ratings normalized to /100; compare within a tab. Differences of 5 points or less are not decision-grade evidence.

| Factor | Meaning | Anchors |
|---|---|---|
| Value at stake | Potential net benefit per affected merchant, conditional on the problem existing. Growth: incremental fulfilled contribution; recovery: valid net collections or retained sales; other: avoided cost, cash delay or control harm. | 0: no outcome path · 1: small inconvenience · 3: material recurring loss/effort · 5: business-critical value at risk |
| Frequency | How often an affected merchant encounters the decision. Kept separate from severity; an infrequent loss may still have high value. | 0: no recurring case · 1: exceptional/annual · 3: monthly or episodic clusters · 5: daily or across many transactions |
| Reach | Relative breadth across the seven merchant lenses in this atlas. This is a qualitative proxy, not TAM, merchant counts or measured prevalence. | 0: no identifiable audience · 1: narrow edge case · 3: meaningful segment · 5: several broad merchant types |
| Room to improve | Residual workflow gap after considering existing Razorpay products and the proposed enhancement. Scored independently; not simply 5 minus the coverage score. | 0: no credible extra job · 1: mainly adoption/configuration · 3: integration or exception gap · 5: no direct workflow identified and a concrete unmet job |
| Data & action | Ability to access authorised reliable signals and complete a controllable, reviewable intervention in a first pilot. Includes integration effort, action risk and dependencies. | 0: inaccessible or prohibited · 1: missing signal/action route · 3: plausible connector plus human approval · 5: reliable authorised data and bounded action already available |
| AI advantage | Benefit of prediction, interpretation or contextual coordination over a simple rule, existing product or manual baseline. AI includes statistical ML; an LLM is not required for every step. | 0: unnecessary · 1: rules/arithmetic sufficient · 3: mixed context with plausible AI benefit · 5: essential contextual reasoning with a credible evaluable advantage |
| Measurability | Ability to attribute and verify the outcome, including costs, reversals and a comparison baseline. | 0: no observable result · 1: indirect/long-lag · 3: observable with attribution limits · 5: identifiable obligations/orders and a feasible controlled comparison |

### Growth priorities

Create additional demand, improve conversion before a specific failure, or increase useful repeat purchases and customer value. Includes measurement and data prerequisites; these are explicitly labelled.

Weights: Value at stake 25%, Frequency 10%, Reach 10%, Room to improve 15%, Data & action 15%, AI advantage 15%, Measurability 10%.

| Rank | ID | Pain | RP | Value | Freq | Reach | Room | Data | AI | Measure | Score /100 | Fit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 09.2.1 | I do not know when a customer is likely to need the product again | 2 | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 87.0 | Explore AI enhancement |
| 2 | 09.3.2 | I give the largest discount to customers who need no incentive | 2 | 5 | 4 | 4 | 3 | 4 | 4 | 5 | 84.0 | Explore AI enhancement |
| 3 | 02.3.1 | I discover a stockout only after customers try to buy | 1 | 5 | 4 | 4 | 4 | 3 | 4 | 4 | 82.0 | Explore AI enhancement |
| 4 | 03.2.4 | I cannot tell whether a high-traffic audience is profitable | 2 | 5 | 4 | 4 | 4 | 3 | 4 | 4 | 82.0 | Explore AI enhancement |
| 5 | 03.4.1 | I keep spending on ads because revenue rises, despite shrinking profit | 2 | 5 | 4 | 4 | 4 | 3 | 4 | 4 | 82.0 | Explore AI enhancement |
| 6 | 07.5.2 | Strict risk rules reject good customers and I cannot see the tradeoff | 2 | 5 | 4 | 3 | 3 | 3 | 4 | 4 | 77.0 | Explore AI enhancement |
| 7 | 02.3.2 | Festival demand makes normal reorder rules unreliable | 1 | 5 | 3 | 3 | 4 | 3 | 4 | 3 | 76.0 | Explore AI enhancement |
| 8 | 09.2.2 | Everyone receives the same reminder despite different buying patterns | 3 | 4 | 4 | 4 | 2 | 4 | 4 | 5 | 76.0 | Explore AI enhancement |
| 9 | 09.4.3 | A satisfied customer could use another service but receives random upsells | 2 | 4 | 4 | 4 | 3 | 3 | 4 | 5 | 76.0 | Explore AI enhancement |
| 10 | 02.5.3 | Quiet hours waste paid staff time and fixed capacity | 1 | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 75.0 | Explore AI enhancement |
| 11 | 10.1.3 | A large order looks like growth but requires cash before collection | 2 | 5 | 3 | 3 | 3 | 3 | 4 | 4 | 75.0 | Explore AI enhancement |
| 12 | 02.2.2 | A bundle sells well but gives away too much margin | 2 | 4 | 4 | 4 | 3 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 13 | 03.3.2 | Prospects ask the same questions but I answer too slowly | 2 | 4 | 4 | 4 | 3 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 14 | 03.4.4 | I scale a campaign just as stock or delivery capacity runs out | 1 | 4 | 4 | 4 | 4 | 3 | 3 | 4 | 74.0 | Explore AI enhancement |
| 15 | 09.1.3 | I cannot distinguish a regular buyer from a one-time gift purchaser | 2 | 4 | 4 | 4 | 3 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 16 | 09.2.3 | Customers have not returned but I do not know why | 2 | 4 | 4 | 4 | 3 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 17 | 09.3.3 | Frequent promotions train customers to wait for the next sale | 1 | 4 | 4 | 4 | 4 | 3 | 3 | 4 | 74.0 | Explore AI enhancement |
| 18 | 03.2.2 | My team spends time on inquiries that will never become orders | 1 | 4 | 3 | 3 | 4 | 3 | 4 | 4 | 73.0 | Explore AI enhancement |
| 19 | 03.5.4 | Early campaign data is too small to support a confident decision | 1 | 4 | 3 | 3 | 4 | 3 | 4 | 4 | 73.0 | Explore AI enhancement |
| 20 | 04.1.3 | A complex B2B quote stalls while both sides clarify the scope | 1 | 4 | 3 | 3 | 4 | 3 | 4 | 4 | 73.0 | Explore AI enhancement |
| 21 | 04.2.4 | A discount increases orders but makes the order unprofitable | 2 | 4 | 4 | 4 | 3 | 3 | 3 | 5 | 73.0 | Explore AI enhancement |
| 22 | 09.5.3 | I cannot compare doing nothing, reminding and offering a discount | 1 | 4 | 4 | 4 | 4 | 3 | 2 | 5 | 73.0 | Rules first |
| 23 | 10.5.3 | Expansion to a second store or channel hides new fixed costs | 2 | 5 | 3 | 3 | 3 | 3 | 4 | 3 | 73.0 | Explore AI enhancement |
| 24 | 03.1.1 | People who would value my product never discover the business | 2 | 5 | 3 | 4 | 4 | 2 | 3 | 3 | 72.0 | Validate access first |
| 25 | 09.5.4 | An apparent short-term win causes later opt-outs or discount dependence | 1 | 4 | 4 | 4 | 4 | 3 | 3 | 3 | 72.0 | Explore AI enhancement |
| 26 | 10.2.1 | I cannot buy stock because sales cash is locked in receivables | 2 | 5 | 3 | 3 | 3 | 3 | 3 | 4 | 72.0 | Explore AI enhancement |
| 27 | 02.1.4 | I introduce a product without knowing whether demand will repeat | 1 | 4 | 3 | 3 | 4 | 3 | 4 | 3 | 71.0 | Explore AI enhancement |
| 28 | 03.1.4 | My catalog is unsuitable for a new discovery channel | 2 | 4 | 3 | 3 | 4 | 3 | 4 | 3 | 71.0 | Explore AI enhancement |
| 29 | 03.2.1 | Ads bring people outside my service area or price range | 2 | 4 | 4 | 4 | 3 | 3 | 3 | 4 | 71.0 | Explore AI enhancement |
| 30 | 03.5.1 | Several platforms claim credit for the same first purchase | 1 | 4 | 4 | 4 | 4 | 3 | 2 | 4 | 71.0 | Rules first |
| 31 | 09.1.2 | I market to a customer without noticing an unresolved complaint | 2 | 4 | 4 | 4 | 3 | 3 | 3 | 4 | 71.0 | Explore AI enhancement |
| 32 | 03.5.3 | Campaign results look strong because a festival would have lifted sales anyway | 0 | 4 | 4 | 4 | 4 | 3 | 1 | 5 | 70.0 | Rules first |
| 33 | 04.1.1 | Customers cannot select the right size, scent, quantity or service | 1 | 4 | 3 | 3 | 4 | 2 | 4 | 4 | 70.0 | Validate access first |
| 34 | 04.3.3 | The checkout is slow, broken or hard to understand | 3 | 4 | 4 | 4 | 2 | 3 | 3 | 5 | 70.0 | Explore AI enhancement |
| 35 | 09.3.4 | My loyalty program earns points but does not change behavior | 2 | 4 | 4 | 4 | 3 | 3 | 2 | 5 | 70.0 | Rules first |
| 36 | 09.5.1 | A campaign claims every later purchase as recovered revenue | 1 | 4 | 4 | 4 | 4 | 3 | 1 | 5 | 70.0 | Rules first |
| 37 | 09.5.2 | The best message by clicks is not the best by profit | 1 | 4 | 4 | 4 | 4 | 3 | 1 | 5 | 70.0 | Rules first |
| 38 | 09.1.1 | The same customer appears as several people across store and website | 3 | 4 | 4 | 4 | 2 | 3 | 3 | 4 | 68.0 | Explore AI enhancement |
| 39 | 09.2.4 | A campaign promotes a refill the customer already bought elsewhere in my business | 2 | 4 | 4 | 4 | 3 | 3 | 2 | 4 | 68.0 | Rules first |
| 40 | 02.2.3 | Wholesale quotes ignore minimum quantities and special handling | 2 | 4 | 3 | 3 | 3 | 3 | 3 | 4 | 67.0 | Explore AI enhancement |
| 41 | 02.5.1 | A service slot appears available but the right employee is not | 1 | 4 | 3 | 3 | 4 | 3 | 2 | 4 | 67.0 | Rules first |
| 42 | 02.5.2 | Peak demand overwhelms production even though inputs are available | 1 | 4 | 4 | 3 | 4 | 3 | 2 | 3 | 67.0 | Rules first |
| 43 | 04.1.4 | A service customer cannot find a suitable appointment or package | 1 | 4 | 3 | 3 | 4 | 3 | 2 | 4 | 67.0 | Rules first |
| 44 | 04.2.1 | Unexpected shipping or fees make the customer abandon the order | 3 | 4 | 4 | 4 | 2 | 3 | 2 | 5 | 67.0 | Rules first |
| 45 | 04.4.1 | The delivery promise is unclear until after purchase | 2 | 4 | 4 | 3 | 3 | 3 | 2 | 4 | 66.0 | Rules first |
| 46 | 03.1.2 | My business depends on one marketplace or advertising platform | 1 | 4 | 3 | 3 | 4 | 2 | 3 | 3 | 65.0 | Validate access first |
| 47 | 03.1.3 | My offline shop is invisible to nearby people ready to buy | 1 | 4 | 3 | 3 | 4 | 3 | 2 | 3 | 65.0 | Rules first |
| 48 | 03.2.3 | My campaign attracts a use case the product does not actually serve | 1 | 4 | 3 | 3 | 4 | 2 | 3 | 3 | 65.0 | Validate access first |
| 49 | 03.4.3 | An influencer reports views but I cannot connect them to sales | 2 | 4 | 3 | 3 | 3 | 3 | 3 | 3 | 65.0 | Explore AI enhancement |
| 50 | 04.3.4 | Store queues make in-person customers leave before billing | 3 | 4 | 4 | 3 | 2 | 3 | 2 | 5 | 65.0 | Rules first |
| 51 | 03.3.1 | New shoppers fear the store is unreliable | 2 | 4 | 3 | 4 | 3 | 3 | 2 | 3 | 64.0 | Rules first |
| 52 | 05.1.4 | International customers cannot pay with familiar local options | 3 | 4 | 3 | 3 | 2 | 3 | 3 | 4 | 64.0 | Explore AI enhancement |
| 53 | 03.3.4 | Poor or fake reviews distort the first impression of my business | 1 | 3 | 3 | 3 | 4 | 3 | 3 | 3 | 63.0 | Explore AI enhancement |
| 54 | 03.5.2 | Repeat customers are counted as newly acquired customers | 3 | 4 | 4 | 3 | 2 | 3 | 2 | 4 | 63.0 | Rules first |
| 55 | 02.1.3 | Product variants and descriptions differ across channels | 1 | 3 | 4 | 3 | 4 | 3 | 2 | 3 | 62.0 | Rules first |
| 56 | 03.4.2 | Creative production consumes time with little learning | 1 | 3 | 4 | 3 | 4 | 2 | 3 | 3 | 62.0 | Validate access first |
| 57 | 04.4.2 | The customer cannot find return or cancellation conditions | 2 | 3 | 3 | 3 | 3 | 3 | 3 | 4 | 62.0 | Explore AI enhancement |
| 58 | 04.2.2 | A high-value order is unaffordable in one payment | 4 | 4 | 3 | 3 | 1 | 3 | 2 | 5 | 60.0 | Rules first |
| 59 | 04.2.3 | Coupon conditions are confusing or the code does not work | 3 | 3 | 4 | 3 | 2 | 3 | 2 | 5 | 60.0 | Rules first |
| 60 | 09.3.1 | Rewards are confusing, unavailable or difficult to redeem | 3 | 3 | 4 | 3 | 2 | 3 | 2 | 5 | 60.0 | Rules first |
| 61 | 04.1.2 | A customer wants to change their cart but loses their progress | 2 | 3 | 3 | 3 | 2 | 3 | 2 | 4 | 56.0 | Rules first |
| 62 | 04.3.1 | Customers repeatedly type details on a small mobile screen | 4 | 3 | 4 | 4 | 1 | 3 | 1 | 5 | 56.0 | Rules first |
| 63 | 09.1.4 | Customer history disappears when a staff member leaves | 3 | 3 | 4 | 3 | 2 | 3 | 2 | 3 | 56.0 | Rules first |
| 64 | 04.3.2 | Forced signup blocks a customer who only wants to buy once | 3 | 3 | 3 | 3 | 2 | 3 | 1 | 5 | 55.0 | Rules first |

### Revenue recovery priorities

Rescue identifiable purchase intent, an existing payment obligation, an at-risk accepted order, or an existing customer relationship. Retained sales and collected receivables must be reported separately from newly earned revenue.

Weights: Value at stake 25%, Frequency 15%, Reach 5%, Room to improve 15%, Data & action 20%, AI advantage 10%, Measurability 10%.

| Rank | ID | Pain | RP | Value | Freq | Reach | Room | Data | AI | Measure | Score /100 | Fit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 05.5.1 | I cannot prioritize which failed payments or invoices to work first | 3 | 5 | 5 | 4 | 3 | 4 | 4 | 5 | 87.0 | Explore AI enhancement |
| 2 | 05.4.3 | A customer makes a part-payment without explaining the deduction | 2 | 5 | 4 | 3 | 4 | 4 | 4 | 5 | 86.0 | Explore AI enhancement |
| 3 | 04.5.1 | I treat every abandoned cart as money that can be recovered | 2 | 5 | 4 | 4 | 3 | 4 | 4 | 5 | 84.0 | Explore AI enhancement |
| 4 | 04.5.3 | Every recovery attempt starts with a discount | 3 | 5 | 4 | 4 | 3 | 4 | 4 | 5 | 84.0 | Explore AI enhancement |
| 5 | 05.4.2 | A reminder goes to the wrong contact or ignores a payment dispute | 2 | 5 | 4 | 3 | 3 | 4 | 4 | 5 | 83.0 | Explore AI enhancement |
| 6 | 06.3.2 | The courier marks a customer unreachable without a useful next step | 1 | 5 | 4 | 3 | 4 | 3 | 4 | 5 | 82.0 | Explore AI enhancement |
| 7 | 09.4.4 | A key business customer quietly reduces orders before leaving | 2 | 5 | 4 | 3 | 3 | 4 | 4 | 4 | 81.0 | Explore AI enhancement |
| 8 | 07.4.1 | A dispute deadline passes while evidence sits in several tools | 3 | 5 | 4 | 3 | 2 | 4 | 4 | 5 | 80.0 | Explore AI enhancement |
| 9 | 05.1.1 | A bank or payment route fails even though the buyer wants to pay | 4 | 5 | 5 | 4 | 1 | 4 | 3 | 5 | 79.0 | Explore AI enhancement |
| 10 | 05.3.2 | A renewal fails because funds or the payment instrument are temporarily unavailable | 3 | 5 | 5 | 3 | 2 | 3 | 4 | 5 | 79.0 | Explore AI enhancement |
| 11 | 05.5.2 | Repeated retries or calls cost more than the amount recovered | 2 | 4 | 4 | 4 | 3 | 4 | 4 | 5 | 79.0 | Explore AI enhancement |
| 12 | 06.5.4 | B2B work is delivered but acceptance proof is missing | 2 | 5 | 4 | 3 | 3 | 3 | 4 | 5 | 79.0 | Explore AI enhancement |
| 13 | 06.4.3 | Risk rules block too many genuine COD customers | 2 | 4 | 4 | 3 | 3 | 4 | 4 | 5 | 78.0 | Explore AI enhancement |
| 14 | 07.2.1 | A customer requests a refund for a fixable variant mismatch | 3 | 4 | 4 | 3 | 3 | 4 | 4 | 5 | 78.0 | Explore AI enhancement |
| 15 | 07.2.2 | An exchange recommendation suggests an unavailable or unsuitable item | 2 | 4 | 4 | 3 | 3 | 4 | 4 | 5 | 78.0 | Explore AI enhancement |
| 16 | 09.4.1 | A subscriber cancels because they need a pause, not a permanent exit | 2 | 4 | 4 | 3 | 3 | 4 | 4 | 5 | 78.0 | Explore AI enhancement |
| 17 | 06.3.3 | A parcel is stuck but nobody notices until the customer complains | 1 | 4 | 4 | 3 | 4 | 3 | 4 | 5 | 77.0 | Explore AI enhancement |
| 18 | 01.2.2 | A delayed or repeated event creates the wrong order status | 3 | 4 | 5 | 4 | 2 | 4 | 2 | 5 | 75.0 | Rules first |
| 19 | 07.4.2 | I spend more fighting a weak dispute than its recoverable value | 2 | 4 | 3 | 3 | 3 | 4 | 4 | 5 | 75.0 | Explore AI enhancement |
| 20 | 06.5.1 | A customer does not show up and the reserved slot is wasted | 2 | 4 | 4 | 3 | 3 | 3 | 4 | 5 | 74.0 | Explore AI enhancement |
| 21 | 07.2.4 | Incentives to avoid refunds exceed the margin saved | 2 | 4 | 4 | 3 | 3 | 3 | 4 | 5 | 74.0 | Explore AI enhancement |
| 22 | 04.5.2 | Recovery messages arrive after the customer already purchased | 3 | 4 | 4 | 4 | 3 | 4 | 1 | 5 | 73.0 | Rules first |
| 23 | 05.2.1 | The customer says money was debited but my order shows unpaid | 4 | 4 | 5 | 4 | 2 | 4 | 1 | 5 | 73.0 | Rules first |
| 24 | 05.1.3 | Authentication times out or an app switch breaks the journey | 3 | 4 | 4 | 4 | 2 | 3 | 4 | 5 | 72.0 | Explore AI enhancement |
| 25 | 06.3.4 | An international shipment stalls over missing information | 1 | 4 | 3 | 3 | 4 | 3 | 4 | 4 | 72.0 | Explore AI enhancement |
| 26 | 01.2.1 | Checkout works in a demo but live orders fail | 3 | 4 | 4 | 3 | 2 | 3 | 4 | 5 | 71.0 | Explore AI enhancement |
| 27 | 04.5.4 | Several tools contact the same person repeatedly | 2 | 4 | 4 | 4 | 3 | 4 | 1 | 4 | 71.0 | Rules first |
| 28 | 05.3.1 | A subscriber abandons mandate setup before the first debit | 3 | 4 | 4 | 3 | 2 | 3 | 4 | 5 | 71.0 | Explore AI enhancement |
| 29 | 06.2.2 | Missed pickups cause late delivery despite on-time packing | 0 | 4 | 4 | 3 | 4 | 3 | 2 | 4 | 71.0 | Rules first |
| 30 | 06.4.1 | COD buyers forget or change their minds before delivery | 3 | 4 | 4 | 3 | 2 | 3 | 4 | 5 | 71.0 | Explore AI enhancement |
| 31 | 06.4.2 | A delivery address is incomplete or unserviceable | 3 | 4 | 4 | 3 | 2 | 3 | 4 | 5 | 71.0 | Explore AI enhancement |
| 32 | 04.4.3 | COD choice attracts orders that may never be accepted | 3 | 4 | 4 | 4 | 2 | 3 | 3 | 5 | 70.0 | Explore AI enhancement |
| 33 | 05.5.4 | Recovered-payment reports count retries as separate sales | 3 | 4 | 4 | 4 | 2 | 4 | 1 | 5 | 70.0 | Rules first |
| 34 | 05.4.1 | I forget which business customers owe me and when | 3 | 4 | 4 | 3 | 2 | 3 | 2 | 5 | 67.0 | Rules first |
| 35 | 06.1.1 | A paid order never reaches the packing team | 3 | 4 | 4 | 3 | 2 | 3 | 2 | 5 | 67.0 | Rules first |
| 36 | 06.5.3 | Payment succeeds but digital access is never granted | 3 | 4 | 4 | 3 | 2 | 3 | 2 | 5 | 67.0 | Rules first |
| 37 | 05.2.3 | A card payment is authorized but never captured | 4 | 4 | 4 | 3 | 1 | 4 | 1 | 5 | 66.0 | Rules first |
| 38 | 05.1.2 | The preferred payment method is missing or ineligible | 4 | 4 | 4 | 4 | 1 | 3 | 2 | 5 | 65.0 | Rules first |
| 39 | 06.1.4 | A customer changes an address or item after preparation starts | 1 | 3 | 3 | 3 | 4 | 3 | 2 | 4 | 63.0 | Rules first |
| 40 | 04.4.4 | The customer is unsure whether the order or booking was accepted | 3 | 3 | 4 | 3 | 2 | 3 | 2 | 5 | 62.0 | Rules first |
| 41 | 07.4.3 | A customer does not recognize the billing description | 2 | 3 | 3 | 3 | 3 | 3 | 2 | 4 | 60.0 | Rules first |

### Other opportunities

Improve liquidity, cost, margin, reliability, governance or business continuity. Returning money already collected, recovering excess fees and insurance proceeds belong here; they are not new merchant sales.

Weights: Value at stake 25%, Frequency 15%, Reach 10%, Room to improve 10%, Data & action 20%, AI advantage 10%, Measurability 10%.

| Rank | ID | Pain | RP | Value | Freq | Reach | Room | Data | AI | Measure | Score /100 | Fit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 01.5.3 | Automation fails halfway and nobody owns the remaining work | 2 | 5 | 4 | 5 | 3 | 4 | 4 | 4 | 85.0 | Explore AI enhancement |
| 2 | 10.1.4 | Forecasts ignore returns, delayed invoices or a weaker sales week | 2 | 5 | 5 | 5 | 3 | 3 | 4 | 4 | 84.0 | Explore AI enhancement |
| 3 | 08.2.4 | Marketplaces and gateways use incompatible formats and identifiers | 2 | 4 | 5 | 4 | 3 | 4 | 4 | 5 | 83.0 | Explore AI enhancement |
| 4 | 08.5.3 | I see total sales but not net contribution by product or channel | 2 | 5 | 5 | 5 | 3 | 3 | 3 | 4 | 82.0 | Explore AI enhancement |
| 5 | 10.1.2 | Payroll and supplier bills fall due before customer cash arrives | 3 | 5 | 5 | 5 | 2 | 3 | 4 | 4 | 82.0 | Explore AI enhancement |
| 6 | 08.1.3 | COD cash collected by the courier is not remitted as expected | 1 | 5 | 4 | 3 | 4 | 4 | 2 | 5 | 81.0 | Rules first |
| 7 | 08.3.2 | Shipping or marketplace deductions are silently accepted | 1 | 5 | 4 | 4 | 4 | 3 | 3 | 5 | 81.0 | Explore AI enhancement |
| 8 | 10.1.1 | I have money across accounts but no reliable available-cash view | 3 | 5 | 5 | 5 | 2 | 3 | 2 | 5 | 80.0 | Rules first |
| 9 | 08.4.1 | Sales invoices, purchase records and tax data contain mismatches | 2 | 5 | 4 | 4 | 3 | 3 | 4 | 4 | 79.0 | Explore AI enhancement |
| 10 | 08.5.2 | Revenue falls but I cannot separate demand loss from payment or delivery failure | 3 | 5 | 4 | 4 | 3 | 3 | 4 | 4 | 79.0 | Explore AI enhancement |
| 11 | 10.5.2 | Many problems compete for attention and every dashboard says urgent | 2 | 4 | 5 | 5 | 3 | 3 | 4 | 4 | 79.0 | Explore AI enhancement |
| 12 | 01.5.2 | An agent acts beyond the amount or task I intended | 3 | 5 | 4 | 5 | 2 | 4 | 1 | 4 | 77.0 | Rules first |
| 13 | 02.1.1 | I cannot tell whether a bestseller also makes money | 2 | 4 | 5 | 5 | 3 | 3 | 3 | 4 | 77.0 | Explore AI enhancement |
| 14 | 01.5.1 | An AI recommendation sounds confident but uses stale or wrong facts | 2 | 4 | 4 | 5 | 3 | 3 | 4 | 4 | 76.0 | Explore AI enhancement |
| 15 | 10.6.3 | A covered loss occurs but claim evidence is scattered | 1 | 5 | 3 | 3 | 4 | 3 | 4 | 4 | 76.0 | Explore AI enhancement |
| 16 | 08.1.1 | Sales are successful but the money is not yet in my bank | 4 | 4 | 5 | 4 | 1 | 4 | 2 | 5 | 75.0 | Rules first |
| 17 | 08.2.1 | One bank deposit contains hundreds of sales and deductions | 4 | 4 | 5 | 4 | 1 | 4 | 2 | 5 | 75.0 | Rules first |
| 18 | 10.3.2 | The same supplier bill is paid twice or against wrong bank details | 4 | 5 | 4 | 4 | 1 | 4 | 1 | 5 | 75.0 | Rules first |
| 19 | 02.1.2 | Slow products trap money that I need for popular products | 1 | 4 | 4 | 4 | 4 | 3 | 3 | 4 | 74.0 | Explore AI enhancement |
| 20 | 02.2.1 | My selling price does not reflect rising input costs | 1 | 4 | 4 | 4 | 4 | 3 | 3 | 4 | 74.0 | Explore AI enhancement |
| 21 | 05.5.3 | Someone already rejected further contact but the recovery flow continues | 2 | 4 | 4 | 4 | 3 | 4 | 1 | 5 | 74.0 | Rules first |
| 22 | 06.2.1 | The cheapest courier performs poorly on particular routes | 1 | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 23 | 07.1.3 | Generic return reasons hide a recurring quality or sizing defect | 2 | 4 | 4 | 4 | 3 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 24 | 07.5.3 | Repeated coupon or return abuse escapes separate systems | 1 | 4 | 4 | 3 | 4 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 25 | 08.2.2 | A bank transfer arrives without an invoice reference | 4 | 4 | 4 | 4 | 1 | 4 | 3 | 5 | 74.0 | Explore AI enhancement |
| 26 | 10.2.4 | I borrow for growth that never earns enough to repay the cost | 1 | 5 | 3 | 3 | 4 | 3 | 4 | 3 | 74.0 | Explore AI enhancement |
| 27 | 10.5.1 | Unused software, recurring fees and overlapping services accumulate | 2 | 4 | 4 | 4 | 3 | 3 | 3 | 5 | 74.0 | Explore AI enhancement |
| 28 | 10.7.3 | Currency movements change the margin between quoting and settlement | 2 | 5 | 3 | 3 | 3 | 3 | 4 | 4 | 74.0 | Explore AI enhancement |
| 29 | 07.5.1 | Stolen credentials or automated attacks create risky payments | 3 | 5 | 4 | 3 | 2 | 3 | 3 | 4 | 73.0 | Explore AI enhancement |
| 30 | 01.2.3 | My store, stock tool and finance tool disagree after a sync fails | 2 | 4 | 4 | 4 | 3 | 3 | 3 | 4 | 72.0 | Explore AI enhancement |
| 31 | 01.4.1 | I do not understand which customer data a new agent can read | 2 | 4 | 4 | 4 | 3 | 4 | 1 | 4 | 72.0 | Rules first |
| 32 | 01.4.2 | A customer opts out in one tool but another keeps messaging | 2 | 4 | 4 | 4 | 3 | 4 | 1 | 4 | 72.0 | Rules first |
| 33 | 05.3.3 | Retries keep running after a customer cancels or pays another way | 3 | 4 | 4 | 4 | 2 | 4 | 1 | 5 | 72.0 | Rules first |
| 34 | 05.4.4 | Late-paying customers keep placing new orders on credit | 1 | 4 | 4 | 3 | 4 | 3 | 3 | 4 | 72.0 | Explore AI enhancement |
| 35 | 07.4.4 | The same underlying issue keeps generating new chargebacks | 2 | 4 | 4 | 3 | 3 | 3 | 4 | 4 | 72.0 | Explore AI enhancement |
| 36 | 07.5.4 | Fraud detection gives a score without an actionable explanation | 2 | 4 | 4 | 3 | 3 | 3 | 4 | 4 | 72.0 | Explore AI enhancement |
| 37 | 08.1.2 | A payout is held or fails without a clear owner for resolution | 3 | 4 | 4 | 3 | 2 | 3 | 4 | 5 | 72.0 | Explore AI enhancement |
| 38 | 08.3.1 | Processing fees differ from my agreed commercial terms | 2 | 4 | 4 | 4 | 3 | 3 | 2 | 5 | 72.0 | Rules first |
| 39 | 08.4.3 | Cash receipts are mistaken for earned revenue or profit | 1 | 4 | 4 | 4 | 4 | 3 | 2 | 4 | 72.0 | Rules first |
| 40 | 08.4.4 | Month-end work depends on missing receipts and manual exports | 3 | 4 | 4 | 4 | 2 | 3 | 4 | 4 | 72.0 | Explore AI enhancement |
| 41 | 08.5.1 | Two dashboards report different revenue for the same period | 2 | 4 | 4 | 4 | 3 | 3 | 3 | 4 | 72.0 | Explore AI enhancement |
| 42 | 10.3.1 | Supplier invoices arrive in email and chat and are missed | 4 | 4 | 4 | 4 | 1 | 4 | 2 | 5 | 72.0 | Rules first |
| 43 | 10.3.3 | Approval delays damage supplier relationships or stop supply | 4 | 4 | 4 | 4 | 1 | 4 | 2 | 5 | 72.0 | Rules first |
| 44 | 10.3.4 | I pay early without knowing whether preserving cash is more valuable | 2 | 4 | 4 | 3 | 3 | 3 | 3 | 5 | 72.0 | Explore AI enhancement |
| 45 | 08.3.3 | Small unmatched amounts are repeatedly written off | 2 | 3 | 4 | 4 | 3 | 3 | 4 | 5 | 71.0 | Explore AI enhancement |
| 46 | 10.7.4 | I cannot compare finance products on net cost, risk and availability | 1 | 4 | 3 | 3 | 4 | 3 | 4 | 4 | 71.0 | Explore AI enhancement |
| 47 | 01.3.1 | Staff share the owner login because roles are inconvenient | 3 | 4 | 4 | 4 | 2 | 4 | 1 | 4 | 70.0 | Rules first |
| 48 | 02.3.3 | Online and shop stock are counted separately and oversold | 1 | 4 | 4 | 4 | 4 | 3 | 1 | 4 | 70.0 | Rules first |
| 49 | 02.4.1 | A supplier promises a date but repeatedly delivers late | 2 | 4 | 4 | 3 | 3 | 3 | 3 | 4 | 70.0 | Explore AI enhancement |
| 50 | 02.4.3 | The received batch is short or defective and evidence is scattered | 3 | 4 | 4 | 3 | 2 | 3 | 4 | 4 | 70.0 | Explore AI enhancement |
| 51 | 05.2.4 | A cashier accepts a payment screenshot as proof | 3 | 4 | 4 | 3 | 2 | 4 | 1 | 5 | 70.0 | Rules first |
| 52 | 06.1.3 | Urgent and ordinary orders compete with no clear priority | 1 | 4 | 4 | 3 | 4 | 3 | 2 | 4 | 70.0 | Rules first |
| 53 | 06.5.2 | Staff delays cascade into every later appointment | 0 | 4 | 4 | 3 | 4 | 3 | 2 | 4 | 70.0 | Rules first |
| 54 | 07.3.4 | A refund approval waits because the merchant fears abuse | 2 | 4 | 4 | 3 | 3 | 3 | 3 | 4 | 70.0 | Explore AI enhancement |
| 55 | 08.2.3 | Refunds and disputes appear in a later period than the sale | 3 | 4 | 4 | 4 | 2 | 3 | 2 | 5 | 70.0 | Rules first |
| 56 | 09.4.2 | An unused plan keeps renewing until the customer becomes angry | 1 | 4 | 4 | 3 | 3 | 3 | 3 | 4 | 70.0 | Explore AI enhancement |
| 57 | 10.4.2 | Attendance, leave and commissions produce payroll mistakes | 4 | 4 | 4 | 4 | 1 | 4 | 1 | 5 | 70.0 | Rules first |
| 58 | 01.3.2 | An employee or agency leaves but still has access | 3 | 4 | 3 | 4 | 3 | 4 | 1 | 4 | 69.0 | Rules first |
| 59 | 05.2.2 | A retry collects twice for the same purchase | 3 | 4 | 3 | 4 | 2 | 4 | 1 | 5 | 69.0 | Rules first |
| 60 | 10.2.2 | Loan applications require records scattered across tools | 2 | 4 | 3 | 3 | 3 | 3 | 4 | 4 | 69.0 | Explore AI enhancement |
| 61 | 10.7.1 | Idle cash earns little but I fear being unable to pay tomorrow | 1 | 4 | 3 | 3 | 4 | 3 | 3 | 4 | 69.0 | Explore AI enhancement |
| 62 | 01.3.4 | An approval is stuck because only I can authorize it | 4 | 4 | 4 | 4 | 1 | 4 | 1 | 4 | 68.0 | Rules first |
| 63 | 02.2.4 | Subscription plans create billing confusion or unprofitable usage | 3 | 4 | 4 | 3 | 2 | 3 | 3 | 4 | 68.0 | Explore AI enhancement |
| 64 | 02.4.2 | The supplier minimum order is larger than I can sell | 2 | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 68.0 | Explore AI enhancement |
| 65 | 05.3.4 | Plan changes create the wrong amount or billing date | 3 | 4 | 4 | 3 | 2 | 3 | 2 | 5 | 68.0 | Rules first |
| 66 | 06.1.2 | Workers pick the wrong variant or omit an item | 0 | 4 | 4 | 3 | 4 | 3 | 1 | 4 | 68.0 | Rules first |
| 67 | 06.4.4 | Returned-to-origin parcels disappear from sellable stock for weeks | 1 | 4 | 4 | 3 | 4 | 3 | 1 | 4 | 68.0 | Rules first |
| 68 | 08.5.4 | An AI summary gives an answer without showing the calculation | 2 | 4 | 4 | 4 | 3 | 3 | 1 | 4 | 68.0 | Rules first |
| 69 | 10.4.4 | Routine administration leaves the owner no time to improve the business | 3 | 4 | 4 | 4 | 2 | 3 | 3 | 3 | 68.0 | Explore AI enhancement |
| 70 | 10.6.1 | I have no clear view of uninsured business losses | 0 | 5 | 3 | 2 | 5 | 2 | 3 | 3 | 68.0 | Validate access first |
| 71 | 10.7.2 | I concentrate all operating cash with one account provider | 2 | 5 | 3 | 3 | 3 | 3 | 2 | 3 | 68.0 | Rules first |
| 72 | 01.3.3 | I cannot tell who changed an offer, refund or bank detail | 2 | 3 | 4 | 4 | 3 | 4 | 1 | 4 | 67.0 | Rules first |
| 73 | 01.4.3 | I cannot distinguish using my data for my business from model training | 1 | 4 | 3 | 4 | 4 | 3 | 2 | 3 | 67.0 | Rules first |
| 74 | 02.4.4 | I want backup suppliers but cannot compare true landed cost | 2 | 4 | 3 | 3 | 3 | 3 | 4 | 3 | 67.0 | Explore AI enhancement |
| 75 | 03.3.3 | An assistant invents a delivery date or product claim to close a sale | 2 | 4 | 3 | 4 | 3 | 3 | 3 | 3 | 67.0 | Explore AI enhancement |
| 76 | 06.2.3 | Packaging dimensions cause unexpected shipping charges | 1 | 3 | 4 | 3 | 4 | 3 | 2 | 5 | 67.0 | Rules first |
| 77 | 06.3.1 | Customers keep asking where their order is | 1 | 3 | 4 | 4 | 4 | 3 | 2 | 4 | 67.0 | Rules first |
| 78 | 07.1.1 | Return requests arrive across channels with incomplete order details | 2 | 3 | 4 | 4 | 3 | 3 | 3 | 4 | 67.0 | Explore AI enhancement |
| 79 | 07.1.2 | Staff apply the return policy differently to similar customers | 2 | 3 | 4 | 4 | 3 | 3 | 3 | 4 | 67.0 | Explore AI enhancement |
| 80 | 07.3.1 | The refund amount is wrong after a partial return or bundled discount | 3 | 4 | 3 | 4 | 2 | 3 | 2 | 5 | 67.0 | Rules first |
| 81 | 08.4.2 | Business and personal transactions are mixed together | 2 | 3 | 4 | 4 | 3 | 3 | 3 | 4 | 67.0 | Explore AI enhancement |
| 82 | 10.2.3 | An advertised rate hides the true effect on my cashflow | 2 | 4 | 3 | 3 | 3 | 3 | 3 | 4 | 67.0 | Explore AI enhancement |
| 83 | 10.5.4 | Closing a product, location or business leaves obligations unresolved | 1 | 4 | 3 | 2 | 4 | 3 | 4 | 3 | 67.0 | Explore AI enhancement |
| 84 | 10.6.2 | Policy renewals and changes in my business leave gaps in cover | 0 | 4 | 3 | 3 | 5 | 2 | 3 | 4 | 67.0 | Validate access first |
| 85 | 01.5.4 | An outage or account lockout leaves me unable to operate | 2 | 5 | 3 | 4 | 3 | 2 | 2 | 3 | 66.0 | Rules first |
| 86 | 02.3.4 | Expiry, breakage or shrinkage makes recorded stock misleading | 1 | 4 | 4 | 4 | 4 | 2 | 2 | 3 | 66.0 | Rules first |
| 87 | 01.2.4 | I depend on a developer for every payment or workflow change | 3 | 3 | 4 | 4 | 2 | 3 | 3 | 4 | 65.0 | Explore AI enhancement |
| 88 | 07.1.4 | A return is approved but reverse pickup and inspection are delayed | 1 | 3 | 4 | 3 | 4 | 3 | 2 | 4 | 65.0 | Rules first |
| 89 | 07.3.2 | Two staff members refund the same complaint | 3 | 4 | 3 | 4 | 2 | 3 | 1 | 5 | 65.0 | Rules first |
| 90 | 07.3.3 | The customer cannot see where a delayed refund is stuck | 4 | 3 | 4 | 4 | 1 | 4 | 2 | 4 | 65.0 | Rules first |
| 91 | 08.1.4 | International receipts arrive net of unfamiliar conversions and deductions | 3 | 4 | 3 | 3 | 2 | 3 | 2 | 5 | 65.0 | Rules first |
| 92 | 10.4.3 | Employees pay business expenses and wait too long for reimbursement | 3 | 3 | 4 | 4 | 2 | 3 | 2 | 5 | 65.0 | Rules first |
| 93 | 10.4.1 | I cannot find or retain staff with the skills the business needs | 1 | 4 | 4 | 3 | 4 | 2 | 2 | 3 | 64.0 | Rules first |
| 94 | 07.2.3 | Store credit looks like recovered revenue even when it remains unused | 2 | 3 | 4 | 3 | 3 | 3 | 1 | 5 | 63.0 | Rules first |
| 95 | 08.3.4 | Instant access to funds is offered without a clear cost comparison | 2 | 3 | 3 | 3 | 3 | 3 | 2 | 5 | 62.0 | Rules first |
| 96 | 01.1.1 | My launch is ready but the payment account is not approved | 3 | 3 | 4 | 3 | 2 | 3 | 2 | 4 | 61.0 | Rules first |
| 97 | 02.5.4 | One absent employee or broken machine disrupts every commitment | 1 | 4 | 3 | 3 | 4 | 2 | 2 | 3 | 61.0 | Rules first |
| 98 | 01.1.2 | My legal name, shop name and bank details do not match | 3 | 3 | 3 | 3 | 2 | 3 | 3 | 4 | 60.0 | Explore AI enhancement |
| 99 | 06.2.4 | Multi-package or split orders confuse customers and staff | 0 | 3 | 3 | 3 | 4 | 3 | 1 | 4 | 60.0 | Rules first |
| 100 | 10.6.4 | Protection is offered at checkout but the cover or seller obligation is unclear | 0 | 3 | 3 | 3 | 5 | 2 | 3 | 3 | 60.0 | Validate access first |
| 101 | 01.4.4 | A vendor change leaves my customer records and history trapped | 2 | 4 | 3 | 3 | 3 | 2 | 2 | 3 | 59.0 | Rules first |
| 102 | 01.1.4 | Changing the owner, bank account or entity interrupts my trading | 2 | 4 | 3 | 2 | 3 | 2 | 2 | 3 | 57.0 | Rules first |
| 103 | 01.1.3 | I do not know whether my category or new country is supported | 3 | 3 | 3 | 2 | 2 | 3 | 3 | 3 | 56.0 | Explore AI enhancement |

The interactive artifact contains row-level residual opportunities, data dependencies, AI/rule baselines, outcome measures, validation questions and links to existing provider evidence. Related opportunities share upside and must not be added together. All scoring data is stored in prioritization.json. The detailed directional solution atlas is in solution-directions.md, with machine-readable records in solution-directions.json.


## Solution approaches and related-pain families

| ID | Solution approach | Razorpay direction | Family |
|---|---|---|---|
| 01.1.1 | LLM copilot / fixed workflow | Build on existing | FAM-45 — Business eligibility and identity |
| 01.1.2 | LLM copilot / fixed workflow | Build on existing | FAM-45 — Business eligibility and identity |
| 01.1.3 | LLM copilot / fixed workflow | Build on existing | FAM-45 — Business eligibility and identity |
| 01.1.4 | Rules / statistics / workflow | Extend existing | FAM-73 — Changing the owner, bank account or entity interrupts my trading |
| 01.2.1 | Hybrid agent + rules | Extend existing | FAM-74 — Checkout works in a demo but live orders fail |
| 01.2.2 | Rules / statistics / workflow | Extend existing | FAM-17 — Paid order fulfilment integrity |
| 01.2.3 | Hybrid agent + rules | Extend existing | FAM-26 — Partial failure and inconsistent systems |
| 01.2.4 | Hybrid agent + rules | Extend existing | FAM-75 — I depend on a developer for every payment or workflow change |
| 01.3.1 | Rules / statistics / workflow | Extend existing | FAM-44 — Access lifecycle and delegation |
| 01.3.2 | Rules / statistics / workflow | Extend existing | FAM-44 — Access lifecycle and delegation |
| 01.3.3 | Rules / statistics / workflow | Extend existing | FAM-25 — Evidence and automation trust |
| 01.3.4 | Rules / statistics / workflow | Extend existing | FAM-44 — Access lifecycle and delegation |
| 01.4.1 | Rules / statistics / workflow | Extend existing | FAM-46 — Data scope and reuse clarity |
| 01.4.2 | Rules / statistics / workflow | Extend existing | FAM-24 — Permissioned outreach |
| 01.4.3 | LLM copilot / fixed workflow | Extend existing | FAM-46 — Data scope and reuse clarity |
| 01.4.4 | Rules / statistics / workflow | Extend existing | FAM-46 — Data scope and reuse clarity |
| 01.5.1 | LLM copilot / fixed workflow | Extend existing | FAM-25 — Evidence and automation trust |
| 01.5.2 | Rules / statistics / workflow | Extend existing | FAM-47 — Safe automation boundaries |
| 01.5.3 | Hybrid agent + rules | Extend existing | FAM-26 — Partial failure and inconsistent systems |
| 01.5.4 | Rules / statistics / workflow | Extend existing | FAM-47 — Safe automation boundaries |
| 02.1.1 | Rules / statistics / workflow | Adjacent / new workflow | FAM-13 — Contribution as a reusable foundation |
| 02.1.2 | Rules / statistics / workflow | Adjacent / new workflow | FAM-49 — Stock economics |
| 02.1.3 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-39 — Approved product information |
| 02.1.4 | Rules / statistics / workflow | Adjacent / new workflow | FAM-50 — Product and price demand tests |
| 02.2.1 | Rules / statistics / workflow | Adjacent / new workflow | FAM-50 — Product and price demand tests |
| 02.2.2 | Rules / statistics / workflow | Adjacent / new workflow | FAM-76 — A bundle sells well but gives away too much margin |
| 02.2.3 | Hybrid agent + rules | Adjacent / new workflow | FAM-51 — Commercial quote economics |
| 02.2.4 | Rules / statistics / workflow | Adjacent / new workflow | FAM-52 — Subscription plan correctness |
| 02.3.1 | Predictive ML + workflow | Adjacent / new workflow | FAM-05 — Supply-aware growth |
| 02.3.2 | Predictive ML + workflow | Adjacent / new workflow | FAM-05 — Supply-aware growth |
| 02.3.3 | Rules / statistics / workflow | Adjacent / new workflow | FAM-35 — Inventory truth after a loss or return |
| 02.3.4 | Rules / statistics / workflow | Adjacent / new workflow | FAM-35 — Inventory truth after a loss or return |
| 02.4.1 | Predictive ML + workflow | Extend existing | FAM-53 — Supplier performance and alternatives |
| 02.4.2 | Rules / statistics / workflow | Extend existing | FAM-49 — Stock economics |
| 02.4.3 | Hybrid agent + rules | Extend existing | FAM-54 — Purchasing evidence and obligations |
| 02.4.4 | LLM copilot / fixed workflow | Extend existing | FAM-53 — Supplier performance and alternatives |
| 02.5.1 | Rules / statistics / workflow | Adjacent / new workflow | FAM-43 — Capacity-aware operating plan |
| 02.5.2 | Rules / statistics / workflow | Adjacent / new workflow | FAM-43 — Capacity-aware operating plan |
| 02.5.3 | Predictive ML + workflow | Adjacent / new workflow | FAM-77 — Quiet hours waste paid staff time and fixed capacity |
| 02.5.4 | Rules / statistics / workflow | Adjacent / new workflow | FAM-43 — Capacity-aware operating plan |
| 03.1.1 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-56 — Discovery diversification |
| 03.1.2 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-56 — Discovery diversification |
| 03.1.3 | Rules / statistics / workflow | Adjacent / new workflow | FAM-56 — Discovery diversification |
| 03.1.4 | LLM copilot / fixed workflow | Extend existing | FAM-39 — Approved product information |
| 03.2.1 | Predictive ML + workflow | Extend existing | FAM-78 — Ads bring people outside my service area or price range |
| 03.2.2 | Hybrid agent + rules | Adjacent / new workflow | FAM-40 — Presales qualification and response |
| 03.2.3 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-40 — Presales qualification and response |
| 03.2.4 | LLM copilot / fixed workflow | Extend existing | FAM-04 — Profitable acquisition decisions |
| 03.3.1 | LLM copilot / fixed workflow | Extend existing | FAM-79 — New shoppers fear the store is unreliable |
| 03.3.2 | Hybrid agent + rules | Adjacent / new workflow | FAM-40 — Presales qualification and response |
| 03.3.3 | LLM copilot / fixed workflow | Extend existing | FAM-39 — Approved product information |
| 03.3.4 | LLM copilot / fixed workflow | Extend existing | FAM-38 — Interpreting customer/product feedback |
| 03.4.1 | Hybrid agent + rules | Extend existing | FAM-04 — Profitable acquisition decisions |
| 03.4.2 | LLM copilot / fixed workflow | Extend existing | FAM-57 — Campaign learning with limited evidence |
| 03.4.3 | Rules / statistics / workflow | Extend existing | FAM-57 — Campaign learning with limited evidence |
| 03.4.4 | Predictive ML + workflow | Extend existing | FAM-05 — Supply-aware growth |
| 03.5.1 | Rules / statistics / workflow | Extend existing | FAM-80 — Several platforms claim credit for the same first purchase |
| 03.5.2 | Rules / statistics / workflow | Extend existing | FAM-18 — Customer identity and context |
| 03.5.3 | Rules / statistics / workflow | Extend existing | FAM-04 — Profitable acquisition decisions |
| 03.5.4 | Rules / statistics / workflow | Extend existing | FAM-57 — Campaign learning with limited evidence |
| 04.1.1 | Hybrid agent + rules | Adjacent / new workflow | FAM-41 — Configuration and sensible expansion |
| 04.1.2 | Rules / statistics / workflow | Build on existing | FAM-59 — Checkout persistence and entry friction |
| 04.1.3 | Hybrid agent + rules | Adjacent / new workflow | FAM-51 — Commercial quote economics |
| 04.1.4 | Rules / statistics / workflow | Adjacent / new workflow | FAM-42 — Feasible booking and no-show handling |
| 04.2.1 | Rules / statistics / workflow | Build on existing | FAM-58 — Transparent checkout terms |
| 04.2.2 | Rules / statistics / workflow | Build on existing | FAM-58 — Transparent checkout terms |
| 04.2.3 | Rules / statistics / workflow | Build on existing | FAM-58 — Transparent checkout terms |
| 04.2.4 | Rules / statistics / workflow | Build on existing | FAM-13 — Contribution as a reusable foundation |
| 04.3.1 | Rules / statistics / workflow | Build on existing | FAM-59 — Checkout persistence and entry friction |
| 04.3.2 | Rules / statistics / workflow | Build on existing | FAM-59 — Checkout persistence and entry friction |
| 04.3.3 | LLM copilot / fixed workflow | Build on existing | FAM-60 — Checkout performance and queues |
| 04.3.4 | Rules / statistics / workflow | Build on existing | FAM-60 — Checkout performance and queues |
| 04.4.1 | Predictive ML + workflow | Extend existing | FAM-19 — Realistic shipping promises |
| 04.4.2 | LLM copilot / fixed workflow | Build on existing | FAM-81 — The customer cannot find return or cancellation conditions |
| 04.4.3 | Predictive ML + workflow | Extend existing | FAM-27 — COD intent and address quality |
| 04.4.4 | Rules / statistics / workflow | Extend existing | FAM-32 — Payment-state confirmation |
| 04.5.1 | Hybrid agent + rules | Extend existing | FAM-08 — Understanding abandoned intent |
| 04.5.2 | Rules / statistics / workflow | Extend existing | FAM-09 — Avoid redundant recovery contact |
| 04.5.3 | Hybrid agent + rules | Extend existing | FAM-08 — Understanding abandoned intent |
| 04.5.4 | Rules / statistics / workflow | Extend existing | FAM-09 — Avoid redundant recovery contact |
| 05.1.1 | Predictive ML + workflow | Build on existing | FAM-48 — Payment path alternatives |
| 05.1.2 | Rules / statistics / workflow | Build on existing | FAM-48 — Payment path alternatives |
| 05.1.3 | Hybrid agent + rules | Build on existing | FAM-48 — Payment path alternatives |
| 05.1.4 | Rules / statistics / workflow | Build on existing | FAM-82 — International customers cannot pay with familiar local options |
| 05.2.1 | Rules / statistics / workflow | Build on existing | FAM-32 — Payment-state confirmation |
| 05.2.2 | Rules / statistics / workflow | Build on existing | FAM-31 — Non-duplicative financial actions |
| 05.2.3 | Rules / statistics / workflow | Build on existing | FAM-83 — A card payment is authorized but never captured |
| 05.2.4 | Rules / statistics / workflow | Build on existing | FAM-32 — Payment-state confirmation |
| 05.3.1 | Hybrid agent + rules | Extend existing | FAM-30 — Recurring payment start and recovery |
| 05.3.2 | Hybrid agent + rules | Extend existing | FAM-30 — Recurring payment start and recovery |
| 05.3.3 | Rules / statistics / workflow | Extend existing | FAM-15 — Subscription retention and safe renewal |
| 05.3.4 | Rules / statistics / workflow | Extend existing | FAM-52 — Subscription plan correctness |
| 05.4.1 | Rules / statistics / workflow | Extend existing | FAM-16 — Invoice-to-cash visibility |
| 05.4.2 | Hybrid agent + rules | Extend existing | FAM-07 — B2B deduction and dispute resolution |
| 05.4.3 | Hybrid agent + rules | Extend existing | FAM-07 — B2B deduction and dispute resolution |
| 05.4.4 | Predictive ML + workflow | Adjacent / new workflow | FAM-84 — Late-paying customers keep placing new orders on credit |
| 05.5.1 | Hybrid agent + rules | Extend existing | FAM-06 — Recovery case economics |
| 05.5.2 | Hybrid agent + rules | Extend existing | FAM-06 — Recovery case economics |
| 05.5.3 | Rules / statistics / workflow | Extend existing | FAM-09 — Avoid redundant recovery contact |
| 05.5.4 | Rules / statistics / workflow | Extend existing | FAM-71 — Traceable financial outcomes |
| 06.1.1 | Rules / statistics / workflow | Adjacent / new workflow | FAM-17 — Paid order fulfilment integrity |
| 06.1.2 | Rules / statistics / workflow | Adjacent / new workflow | FAM-61 — Delivery preparation and changes |
| 06.1.3 | Rules / statistics / workflow | Adjacent / new workflow | FAM-61 — Delivery preparation and changes |
| 06.1.4 | Hybrid agent + rules | Adjacent / new workflow | FAM-61 — Delivery preparation and changes |
| 06.2.1 | Predictive ML + workflow | Adjacent / new workflow | FAM-19 — Realistic shipping promises |
| 06.2.2 | Rules / statistics / workflow | Adjacent / new workflow | FAM-62 — Shipment handoff and communication |
| 06.2.3 | Rules / statistics / workflow | Adjacent / new workflow | FAM-85 — Packaging dimensions cause unexpected shipping charges |
| 06.2.4 | Rules / statistics / workflow | Adjacent / new workflow | FAM-62 — Shipment handoff and communication |
| 06.3.1 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-62 — Shipment handoff and communication |
| 06.3.2 | Hybrid agent + rules | Adjacent / new workflow | FAM-10 — Delivery exception rescue |
| 06.3.3 | Hybrid agent + rules | Adjacent / new workflow | FAM-10 — Delivery exception rescue |
| 06.3.4 | Hybrid agent + rules | Adjacent / new workflow | FAM-10 — Delivery exception rescue |
| 06.4.1 | Hybrid agent + rules | Extend existing | FAM-27 — COD intent and address quality |
| 06.4.2 | LLM copilot / fixed workflow | Extend existing | FAM-27 — COD intent and address quality |
| 06.4.3 | Predictive ML + workflow | Extend existing | FAM-28 — Genuine-customer risk review |
| 06.4.4 | Rules / statistics / workflow | Extend existing | FAM-35 — Inventory truth after a loss or return |
| 06.5.1 | Hybrid agent + rules | Adjacent / new workflow | FAM-42 — Feasible booking and no-show handling |
| 06.5.2 | Rules / statistics / workflow | Adjacent / new workflow | FAM-42 — Feasible booking and no-show handling |
| 06.5.3 | Rules / statistics / workflow | Adjacent / new workflow | FAM-17 — Paid order fulfilment integrity |
| 06.5.4 | Hybrid agent + rules | Adjacent / new workflow | FAM-07 — B2B deduction and dispute resolution |
| 07.1.1 | LLM copilot / fixed workflow | Extend existing | FAM-34 — Return case progression |
| 07.1.2 | Rules / statistics / workflow | Extend existing | FAM-34 — Return case progression |
| 07.1.3 | LLM copilot / fixed workflow | Extend existing | FAM-38 — Interpreting customer/product feedback |
| 07.1.4 | Rules / statistics / workflow | Extend existing | FAM-34 — Return case progression |
| 07.2.1 | Hybrid agent + rules | Extend existing | FAM-11 — Suitable exchange and retained value |
| 07.2.2 | Predictive ML + workflow | Extend existing | FAM-11 — Suitable exchange and retained value |
| 07.2.3 | Rules / statistics / workflow | Extend existing | FAM-71 — Traceable financial outcomes |
| 07.2.4 | Rules / statistics / workflow | Extend existing | FAM-11 — Suitable exchange and retained value |
| 07.3.1 | Rules / statistics / workflow | Build on existing | FAM-36 — Refund evidence and status |
| 07.3.2 | Rules / statistics / workflow | Build on existing | FAM-31 — Non-duplicative financial actions |
| 07.3.3 | Rules / statistics / workflow | Build on existing | FAM-36 — Refund evidence and status |
| 07.3.4 | Predictive ML + workflow | Build on existing | FAM-36 — Refund evidence and status |
| 07.4.1 | Hybrid agent + rules | Extend existing | FAM-86 — A dispute deadline passes while evidence sits in several tools |
| 07.4.2 | Predictive ML + workflow | Extend existing | FAM-06 — Recovery case economics |
| 07.4.3 | LLM copilot / fixed workflow | Extend existing | FAM-29 — Dispute prevention through clarity |
| 07.4.4 | LLM copilot / fixed workflow | Extend existing | FAM-29 — Dispute prevention through clarity |
| 07.5.1 | Predictive ML + workflow | Extend existing | FAM-87 — Stolen credentials or automated attacks create risky payments |
| 07.5.2 | Predictive ML + workflow | Extend existing | FAM-28 — Genuine-customer risk review |
| 07.5.3 | Hybrid agent + rules | Extend existing | FAM-88 — Repeated coupon or return abuse escapes separate systems |
| 07.5.4 | LLM copilot / fixed workflow | Extend existing | FAM-28 — Genuine-customer risk review |
| 08.1.1 | Rules / statistics / workflow | Extend existing | FAM-63 — Settlement release and escalation |
| 08.1.2 | Hybrid agent + rules | Extend existing | FAM-63 — Settlement release and escalation |
| 08.1.3 | Rules / statistics / workflow | Extend existing | FAM-63 — Settlement release and escalation |
| 08.1.4 | Rules / statistics / workflow | Extend existing | FAM-64 — International net receipts and FX |
| 08.2.1 | Rules / statistics / workflow | Extend existing | FAM-33 — Reconciliation across periods and formats |
| 08.2.2 | Rules / statistics / workflow | Extend existing | FAM-16 — Invoice-to-cash visibility |
| 08.2.3 | Rules / statistics / workflow | Extend existing | FAM-33 — Reconciliation across periods and formats |
| 08.2.4 | Hybrid agent + rules | Extend existing | FAM-33 — Reconciliation across periods and formats |
| 08.3.1 | Hybrid agent + rules | Adjacent / new workflow | FAM-20 — Fee and deduction claims |
| 08.3.2 | Hybrid agent + rules | Adjacent / new workflow | FAM-20 — Fee and deduction claims |
| 08.3.3 | Hybrid agent + rules | Adjacent / new workflow | FAM-89 — Small unmatched amounts are repeatedly written off |
| 08.3.4 | Rules / statistics / workflow | Adjacent / new workflow | FAM-65 — Finance term comparability |
| 08.4.1 | Hybrid agent + rules | Extend existing | FAM-37 — Accounting close readiness |
| 08.4.2 | LLM copilot / fixed workflow | Extend existing | FAM-37 — Accounting close readiness |
| 08.4.3 | Rules / statistics / workflow | Extend existing | FAM-71 — Traceable financial outcomes |
| 08.4.4 | LLM copilot / fixed workflow | Extend existing | FAM-37 — Accounting close readiness |
| 08.5.1 | LLM copilot / fixed workflow | Extend existing | FAM-12 — Explaining merchant performance |
| 08.5.2 | Hybrid agent + rules | Extend existing | FAM-12 — Explaining merchant performance |
| 08.5.3 | Rules / statistics / workflow | Extend existing | FAM-13 — Contribution as a reusable foundation |
| 08.5.4 | LLM copilot / fixed workflow | Extend existing | FAM-12 — Explaining merchant performance |
| 09.1.1 | Rules / statistics / workflow | Extend existing | FAM-18 — Customer identity and context |
| 09.1.2 | Rules / statistics / workflow | Extend existing | FAM-24 — Permissioned outreach |
| 09.1.3 | Predictive ML + workflow | Extend existing | FAM-18 — Customer identity and context |
| 09.1.4 | Rules / statistics / workflow | Extend existing | FAM-90 — Customer history disappears when a staff member leaves |
| 09.2.1 | Predictive ML + workflow | Extend existing | FAM-01 — Reorder timing and recent-purchase suppression |
| 09.2.2 | Predictive ML + workflow | Extend existing | FAM-01 — Reorder timing and recent-purchase suppression |
| 09.2.3 | Hybrid agent + rules | Extend existing | FAM-14 — Learning why customers leave |
| 09.2.4 | Rules / statistics / workflow | Extend existing | FAM-01 — Reorder timing and recent-purchase suppression |
| 09.3.1 | Rules / statistics / workflow | Extend existing | FAM-70 — Responsible rewards |
| 09.3.2 | Predictive ML + workflow | Extend existing | FAM-02 — Choosing whether to incentivise |
| 09.3.3 | Predictive ML + workflow | Extend existing | FAM-02 — Choosing whether to incentivise |
| 09.3.4 | Rules / statistics / workflow | Extend existing | FAM-70 — Responsible rewards |
| 09.4.1 | Hybrid agent + rules | Extend existing | FAM-15 — Subscription retention and safe renewal |
| 09.4.2 | Predictive ML + workflow | Extend existing | FAM-15 — Subscription retention and safe renewal |
| 09.4.3 | Hybrid agent + rules | Extend existing | FAM-41 — Configuration and sensible expansion |
| 09.4.4 | Hybrid agent + rules | Adjacent / new workflow | FAM-14 — Learning why customers leave |
| 09.5.1 | Rules / statistics / workflow | Extend existing | FAM-03 — Campaign incrementality and delayed effects |
| 09.5.2 | Rules / statistics / workflow | Extend existing | FAM-03 — Campaign incrementality and delayed effects |
| 09.5.3 | Rules / statistics / workflow | Extend existing | FAM-02 — Choosing whether to incentivise |
| 09.5.4 | Rules / statistics / workflow | Extend existing | FAM-03 — Campaign incrementality and delayed effects |
| 10.1.1 | Rules / statistics / workflow | Extend existing | FAM-23 — Cash visibility and reserves |
| 10.1.2 | Hybrid agent + rules | Extend existing | FAM-21 — Cash commitments and downside |
| 10.1.3 | Rules / statistics / workflow | Extend existing | FAM-22 — Financing a viable order |
| 10.1.4 | Predictive ML + workflow | Extend existing | FAM-21 — Cash commitments and downside |
| 10.2.1 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-22 — Financing a viable order |
| 10.2.2 | Hybrid agent + rules | Adjacent / new workflow | FAM-91 — Loan applications require records scattered across tools |
| 10.2.3 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-65 — Finance term comparability |
| 10.2.4 | Predictive ML + workflow | Adjacent / new workflow | FAM-21 — Cash commitments and downside |
| 10.3.1 | LLM copilot / fixed workflow | Extend existing | FAM-54 — Purchasing evidence and obligations |
| 10.3.2 | Rules / statistics / workflow | Extend existing | FAM-31 — Non-duplicative financial actions |
| 10.3.3 | Rules / statistics / workflow | Extend existing | FAM-55 — Approvals and payment timing |
| 10.3.4 | Rules / statistics / workflow | Extend existing | FAM-55 — Approvals and payment timing |
| 10.4.1 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-66 — Staff and admin workload |
| 10.4.2 | Rules / statistics / workflow | Build on existing | FAM-67 — Payroll and employee expenses |
| 10.4.3 | LLM copilot / fixed workflow | Build on existing | FAM-67 — Payroll and employee expenses |
| 10.4.4 | LLM copilot / fixed workflow | Build on existing | FAM-66 — Staff and admin workload |
| 10.5.1 | LLM copilot / fixed workflow | Extend existing | FAM-68 — Recurring costs and closing obligations |
| 10.5.2 | Hybrid agent + rules | Extend existing | FAM-72 — Opportunity and expansion planning |
| 10.5.3 | Rules / statistics / workflow | Adjacent / new workflow | FAM-72 — Opportunity and expansion planning |
| 10.5.4 | Hybrid agent + rules | Adjacent / new workflow | FAM-68 — Recurring costs and closing obligations |
| 10.6.1 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-69 — Insurance coverage maintenance |
| 10.6.2 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-69 — Insurance coverage maintenance |
| 10.6.3 | Hybrid agent + rules | Adjacent / new workflow | FAM-92 — A covered loss occurs but claim evidence is scattered |
| 10.6.4 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-69 — Insurance coverage maintenance |
| 10.7.1 | Rules / statistics / workflow | Adjacent / new workflow | FAM-23 — Cash visibility and reserves |
| 10.7.2 | Rules / statistics / workflow | Adjacent / new workflow | FAM-23 — Cash visibility and reserves |
| 10.7.3 | Predictive ML + workflow | Adjacent / new workflow | FAM-64 — International net receipts and FX |
| 10.7.4 | LLM copilot / fixed workflow | Adjacent / new workflow | FAM-65 — Finance term comparability |