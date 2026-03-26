# Client Discovery Framework

**Purpose:** Systematically identify high-value automation opportunities during client discovery
**Version:** 1.0
**Use:** Sales calls, audits, strategy sessions

---

## Phase 1: Pre-Discovery Preparation (30 minutes)

### 1.1 Company Research Checklist

| Research Area | What to Look For | Where to Find It |
|---------------|------------------|------------------|
| **Business Model** | How they make money, pricing, customers | Website, About page, Pricing page |
| **Tech Stack** | What software they use | BuiltWith, LinkedIn, job postings |
| **Team Size** | Number of employees, departments | LinkedIn, About page |
| **Pain Signals** | Complaints, reviews, support issues | Google Reviews, Trustpilot, social media |
| **Growth Stage** | Hiring, expanding, new products | News, press releases, LinkedIn posts |
| **Competitors** | Who they compete with, industry standards | Google search, industry reports |

### 1.2 Hypothesis Generation

Before the call, write down 3-5 automation hypotheses:

```
Hypothesis 1: "Based on their [observation], they probably spend significant time on [process]"
Hypothesis 2: "Companies their size typically struggle with [common pain point]"
Hypothesis 3: "Their use of [tool] suggests they might need help with [related process]"
```

**Example:**
> "Based on their e-commerce site with 50+ products, they probably spend 10+ hours/week on order processing and customer service emails."

---

## Phase 2: Discovery Call Framework (60 minutes)

### 2.1 Call Structure

| Segment | Time | Purpose |
|---------|------|---------|
| Rapport & Context | 5 min | Build trust, set expectations |
| Business Overview | 10 min | Understand their model |
| Pain Point Discovery | 20 min | Uncover problems |
| Process Deep-Dive | 15 min | Map specific workflows |
| Impact Quantification | 5 min | Calculate cost of problems |
| Next Steps | 5 min | Set expectations |

---

### 2.2 Question Bank by Category

#### BUSINESS MODEL QUESTIONS

```
1. "Walk me through how a customer finds you and becomes a paying client."
2. "What does your typical customer look like?"
3. "How do you currently make money? (products, services, subscriptions)"
4. "What's your biggest growth priority right now?"
5. "If you could 10x one part of your business, what would it be?"
```

#### TEAM & CAPACITY QUESTIONS

```
1. "How many people are on your team? How is it structured?"
2. "Who handles [customer service / sales / operations / marketing]?"
3. "Are team members working at capacity or do they have bandwidth?"
4. "What tasks do people complain about most?"
5. "If you could free up 10 hours per week for each team member, what would they do with that time?"
```

#### PAIN POINT QUESTIONS (The Gold)

```
1. "What's the most frustrating part of running your business day-to-day?"
2. "What tasks feel like a waste of your time?"
3. "Where do things fall through the cracks most often?"
4. "What do customers complain about most?"
5. "What takes way longer than it should?"
6. "What do you wish you could just 'set and forget'?"
7. "If you had a magic wand, what would you automate tomorrow?"
```

#### PROCESS-SPECIFIC QUESTIONS

**For Lead Generation:**
```
1. "How do leads currently find you?"
2. "What happens when someone expresses interest?"
3. "How quickly do you respond to new leads?"
4. "How do you track leads through your pipeline?"
5. "What % of leads convert to customers?"
```

**For Customer Service:**
```
1. "How do customers reach you with questions?"
2. "What are the most common questions you get?"
3. "How do you currently respond to support requests?"
4. "What's your average response time?"
5. "How do you track customer issues?"
```

**For Operations:**
```
1. "Walk me through what happens after a customer pays."
2. "What information needs to be entered into multiple systems?"
3. "How do you know what needs to be done each day?"
4. "What reports do you need to create regularly?"
5. "Where do errors most commonly occur?"
```

---

### 2.3 The "5 Whys" Technique

When they mention a problem, dig deeper:

```
Client: "We're spending too much time on data entry."

You: "Tell me more about that. What data are you entering?"
Client: "Customer information from forms into our CRM."

You: "Why does it need to be entered manually?"
Client: "Our form platform doesn't connect to our CRM."

You: "Why not? Have you looked into integration options?"
Client: "We tried Zapier but it was too complicated to set up."

You: "Why was it complicated?"
Client: "We didn't have anyone technical to configure it properly."

ROOT CAUSE: Lack of technical expertise, not the problem itself.
YOUR SOLUTION: Done-for-you setup + training.
```

---

## Phase 3: Process Mapping Exercise

### 3.1 Current State Map Template

For each major process, map:

```
PROCESS: [Name]
TRIGGER: [What starts this process?]
STEPS:
  1. [Step description] → [Who does it] → [Time required] → [Tools used]
  2. [Step description] → [Who does it] → [Time required] → [Tools used]
  3. [Step description] → [Who does it] → [Time required] → [Tools used]
OUTPUT: [What's the result?]
FREQUENCY: [How often does this happen?]
PAIN POINTS: [What goes wrong?]
```

**Example - Lead Processing:**

```
PROCESS: New Lead Handling
TRIGGER: Form submission on website

STEPS:
  1. Form submitted → System → 0 min → Typeform
  2. Email notification sent → System → 0 min → Gmail
  3. Sales rep checks email → Sarah → 5 min → Gmail
  4. Copy lead info to CRM → Sarah → 10 min → HubSpot
  5. Send personal email → Sarah → 5 min → Gmail
  6. Log call attempt → Sarah → 3 min → HubSpot

OUTPUT: Lead contacted and in CRM
FREQUENCY: 20 times per day
PAIN POINTS: 
  - Leads wait 2-4 hours before contact
  - Sarah sometimes forgets to log in CRM
  - Weekend leads don't get contacted until Monday
```

### 3.2 Future State Map Template

```
PROCESS: [Name] (Automated)
TRIGGER: [Same trigger]
STEPS:
  1. [Step description] → [System] → [Time] → [Tool]
  2. [Step description] → [System] → [Time] → [Tool]
  3. [Human task if needed] → [Who] → [Time] → [Tool]
OUTPUT: [Same or improved result]
FREQUENCY: [Same]
IMPROVEMENTS:
  - [List specific improvements]
```

**Example - Lead Processing (Automated):**

```
PROCESS: New Lead Handling (Automated)
TRIGGER: Form submission on website

STEPS:
  1. Form submitted → Zapier → 0 min → Typeform
  2. Lead created in CRM → Zapier → 0 min → HubSpot
  3. Lead scored automatically → Zapier → 0 min → HubSpot
  4. Personal email sent → Zapier → 0 min → Gmail
  5. Slack alert to sales → Zapier → 0 min → Slack
  6. HIGH-INTENT: Call task created → Zapier → 0 min → HubSpot

OUTPUT: Lead contacted in <5 min, fully tracked
FREQUENCY: 20 times per day
IMPROVEMENTS:
  - Response time: 2-4 hours → <5 minutes
  - No manual data entry
  - 100% of leads tracked
  - Weekend leads handled automatically
  - Sarah saves 23 min per lead = 7.5 hours/week
```

---

## Phase 4: Opportunity Scoring

### 4.1 Automation Opportunity Scorecard

Rate each identified opportunity:

| Criteria | Score (1-5) | Weight | Weighted Score |
|----------|-------------|--------|----------------|
| **Time Savings** | | 3x | |
| **Error Reduction** | | 2x | |
| **Revenue Impact** | | 3x | |
| **Customer Experience** | | 2x | |
| **Technical Feasibility** | | 2x | |
| **Client Buy-in** | | 2x | |
| **TOTAL** | | | ___ / 70 |

**Scoring Guide:**

| Score | Meaning |
|-------|---------|
| 5 | Exceptional - clear, measurable impact |
| 4 | Strong - significant benefit expected |
| 3 | Moderate - worthwhile improvement |
| 2 | Limited - minor benefit |
| 1 | Minimal - not worth pursuing |

### 4.2 Priority Matrix

Plot opportunities on this matrix:

```
                    HIGH IMPACT
                        │
        ┌───────────────┼───────────────┐
        │   DO FIRST    │   MAJOR       │
        │   (Quick Wins)│   PROJECTS    │
        │               │               │
LOW     ├───────────────┼───────────────┤    HIGH
EFFORT  │   FILL-INS    │   AVOID       │    EFFORT
        │   (Low Value) │   (Money Pits)│
        │               │               │
        └───────────────┼───────────────┘
                        │
                    LOW IMPACT
```

**Action Rules:**
- **DO FIRST:** High impact, low effort → Include in Phase 1
- **MAJOR PROJECTS:** High impact, high effort → Plan for Phase 2-3
- **FILL-INS:** Low impact, low effort → Do if time permits
- **AVOID:** Low impact, high effort → Don't do

---

## Phase 5: Quantification Framework

### 5.1 Time Savings Calculation

```
TIME SAVINGS = (Current Time - Automated Time) × Frequency

Example:
- Current: 15 minutes per lead
- Automated: 1 minute per lead (review only)
- Frequency: 20 leads/day × 5 days = 100/week

Weekly Savings: (15 - 1) × 100 = 1,400 minutes = 23.3 hours
Monthly Savings: 23.3 × 4.33 = 101 hours
Annual Savings: 101 × 12 = 1,212 hours

At $30/hour loaded cost: 1,212 × $30 = $36,360/year
```

### 5.2 Error Cost Calculation

```
ERROR COST = Error Frequency × Cost Per Error

Example:
- Data entry errors: 5 per week
- Cost per error: $50 (time to fix + customer impact)
- Weekly cost: 5 × $50 = $250
- Annual cost: $250 × 52 = $13,000

With 90% error reduction: $13,000 × 0.90 = $11,700 saved/year
```

### 5.3 Revenue Impact Calculation

```
REVENUE IMPACT = Improvement in Metric × Value Per Unit

Example - Faster Lead Response:
- Current conversion: 15%
- Expected conversion (5-min response): 25%
- Monthly leads: 400
- Current customers: 400 × 15% = 60
- New customers: 400 × 25% = 100
- Additional customers: 40
- Avg customer value: $5,000
- Additional revenue: 40 × $5,000 = $200,000/year
```

---

## Phase 6: Recommendation Framework

### 6.1 Solution Packaging

Package opportunities into tiers:

```
┌─────────────────────────────────────────────────────────┐
│  TIER 1: FOUNDATION ($3,000-5,000)                      │
│  - Core automation that solves biggest pain             │
│  - Quick implementation (1-2 weeks)                     │
│  - Immediate ROI                                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  TIER 2: GROWTH ($5,000-10,000)                         │
│  - Expanded automation across departments               │
│  - Integration between systems                          │
│  - 4-6 week implementation                              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  TIER 3: TRANSFORMATION ($10,000-25,000)                │
│  - End-to-end process automation                        │
│  - Advanced AI/ML capabilities                          │
│  - 8-12 week implementation                             │
└─────────────────────────────────────────────────────────┘
```

### 6.2 Recommendation Template

```
BASED ON OUR DISCOVERY, HERE'S WHAT WE RECOMMEND:

PRIMARY OPPORTUNITY: [Name]
- Current State: [Problem description]
- Proposed Solution: [Automation description]
- Investment: $[Amount]
- Expected ROI: [X]% in [Y] months
- Implementation Time: [Z] weeks

SECONDARY OPPORTUNITY: [Name]
- [Same format]

OPTIONAL ADD-ONS:
- [Add-on 1]: $[Amount]
- [Add-on 2]: $[Amount]

RECOMMENDED APPROACH:
We recommend starting with [Primary Opportunity] because [reason].
This will [benefit], and then we can expand to [Secondary] in Phase 2.

NEXT STEPS:
1. We'll send a detailed proposal within 48 hours
2. Schedule a follow-up call to review
3. Upon approval, kickoff within [timeframe]
```

---

## Phase 7: Discovery Call Checklist

### Pre-Call
- [ ] Research company (website, LinkedIn, reviews)
- [ ] Identify 3-5 automation hypotheses
- [ ] Prepare discovery questions
- [ ] Test video/audio setup
- [ ] Have note-taking system ready

### During Call
- [ ] Build rapport (5 min)
- [ ] Understand business model (10 min)
- [ ] Uncover pain points (20 min)
- [ ] Map key processes (15 min)
- [ ] Quantify impact (5 min)
- [ ] Set next steps (5 min)
- [ ] Request recording permission

### Post-Call
- [ ] Send thank-you email within 2 hours
- [ ] Complete opportunity scorecard
- [ ] Calculate ROI estimates
- [ ] Prepare recommendation summary
- [ ] Schedule proposal delivery

---

## Discovery Call Script (Condensed)

```
OPENING (5 min)
"Hey [Name], thanks for making time! I'm excited to learn about [Company].
Before we dive in, this call is about understanding your business and seeing
if we can help. I'll be asking a lot of questions - sound good?"

BUSINESS OVERVIEW (10 min)
"Let's start with the basics - walk me through your business model..."

PAIN DISCOVERY (20 min)
"What's the most frustrating part of running the business day-to-day?"
[Use 5 Whys technique to dig deeper]

PROCESS MAPPING (15 min)
"Let's dig into [specific process]. Walk me through what happens when..."

IMPACT QUANTIFICATION (5 min)
"If we could [solve problem], what would that be worth to you?"

NEXT STEPS (5 min)
"Based on what you've shared, I think we can help with [X, Y, Z].
I'll send a proposal within 48 hours. Does [day/time] work to review?"

CLOSING
"Great! Thanks for your time today. I'll be in touch soon!"
```

---

*Framework Version: 1.0 | [Your Agency Name] | Internal Use*
