# 03. Discovery Process

Client onboarding, requirements gathering, and technical specification workflow.

---

## Discovery Overview

```
Week 1-2: Discovery Phase
│
├─ Day 1-2: Initial Consultation
├─ Day 3-5: Requirements Workshop
├─ Day 6-8: User Research
├─ Day 9-10: Technical Analysis
├─ Day 11-12: Wireframing
└─ Day 13-14: Proposal & Contract
```

**Discovery Investment:** $5K-$15K (credited toward project if signed)

---

## Phase 1: Initial Consultation (Day 1-2)

### Pre-Call Preparation

**Send to Client:**
- [ ] NDA (if needed)
- [ ] Discovery questionnaire
- [ ] Company background materials
- [ ] Any existing documentation/wireframes

### Discovery Questionnaire

```markdown
## Business Context
1. What problem are you solving?
2. Who is your target audience?
3. What is your business model?
4. Who are your main competitors?
5. What makes you different?

## Project Goals
6. What does success look like?
7. What are your must-have features?
8. What are your nice-to-have features?
9. What platforms do you need (iOS, Android, both)?
10. Do you have existing brand/design guidelines?

## Technical Context
11. Do you have existing systems to integrate with?
12. Do you have a preferred technology stack?
13. Do you have existing APIs or databases?
14. What third-party services do you need?

## Constraints
15. What is your budget range?
16. What is your target launch date?
17. Are there any hard deadlines (events, funding, etc.)?
18. What is your internal team structure?
19. Who will be the main point of contact?

## Post-Launch
20. Who will maintain the app after launch?
21. What is your marketing strategy?
22. Do you need ongoing development support?
```

### Consultation Call Agenda (60 minutes)

| Time | Topic |
|------|-------|
| 0-10 min | Introductions & background |
| 10-25 min | Problem & solution discussion |
| 25-40 min | Target users & use cases |
| 40-50 min | Budget & timeline expectations |
| 50-60 min | Next steps & Q&A |

### Red Flags to Watch For

- ❌ Unrealistic budget (< $25K for custom app)
- ❌ Unrealistic timeline (< 6 weeks for MVP)
- ❌ "I need an app like Uber but..." (without understanding complexity)
- ❌ No clear target audience
- ❌ Decision makers not involved
- ❌ Unwilling to invest in discovery
- ❌ Shopping around for cheapest option only

### Green Flags

- ✅ Clear problem definition
- ✅ Understanding of investment required
- ✅ Decision makers engaged
- ✅ Realistic timeline expectations
- ✅ Open to expert guidance
- ✅ Has done market research

---

## Phase 2: Requirements Workshop (Day 3-5)

### Workshop Format

**Option A: In-Person (Preferred)**
- Full day workshop (6 hours)
- Whiteboard sessions
- Sticky note exercises
- Live sketching

**Option B: Remote**
- 2 x 3-hour sessions over 2 days
- Miro/Mural for collaboration
- Screen sharing for demos
- Recorded sessions

### Workshop Participants

**Required:**
- Product owner/decision maker
- Technical lead (if applicable)
- Your: Project Manager + Lead Developer

**Optional:**
- Designer
- Marketing lead
- End user representative

### Workshop Agenda

#### Session 1: Problem & Users (3 hours)

| Time | Activity | Output |
|------|----------|--------|
| 30 min | Problem statement refinement | Clear problem definition |
| 45 min | User persona creation | 2-3 user personas |
| 45 min | User journey mapping | Current state journey |
| 30 min | Pain point identification | Prioritized pain points |
| 30 min | Future state vision | Ideal experience map |
| 30 min | Break | |

#### Session 2: Features & Scope (3 hours)

| Time | Activity | Output |
|------|----------|--------|
| 30 min | Feature brainstorming | Complete feature list |
| 45 min | Feature prioritization (MoSCoW) | Prioritized backlog |
| 45 min | User story writing | 20-50 user stories |
| 30 min | Technical constraints discussion | Risk register |
| 30 min | Success metrics definition | KPIs |
| 30 min | Wrap-up & next steps | Action items |

### Prioritization Framework: MoSCoW

```
MUST HAVE: Critical for launch, no workaround
SHOULD HAVE: Important but not critical, workaround exists
COULD HAVE: Desirable but not necessary
WON'T HAVE: Agreed to exclude for now
```

### User Story Format

```
As a [type of user],
I want [some goal],
So that [some reason/benefit].

Acceptance Criteria:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]
```

**Example:**
```
As a registered user,
I want to reset my password,
So that I can regain access if I forget it.

Acceptance Criteria:
- User can request password reset from login screen
- Reset link sent via email within 1 minute
- Link expires after 24 hours
- User can set new password meeting security requirements
- User is automatically logged in after reset
```

---

## Phase 3: User Research (Day 6-8)

### Research Methods

#### Competitive Analysis
**Deliverable:** Competitive Analysis Report

| Competitor | Strengths | Weaknesses | Features | Ratings |
|------------|-----------|------------|----------|---------|
| App A | Great UX | Limited features | X, Y, Z | 4.5★ |
| App B | Many features | Poor performance | X, A, B | 3.8★ |
| App C | Fast, simple | No social features | X | 4.2★ |

**Analysis Points:**
- App Store reviews (1-star and 5-star)
- Feature comparison matrix
- Pricing analysis
- Positioning and messaging
- Visual design audit

#### User Interviews (if applicable)
**Sample Size:** 5-8 users
**Format:** 30-minute video calls
**Incentive:** $50-100 gift card

**Interview Guide:**
1. Tell me about how you currently [solve problem]
2. What frustrates you about current solutions?
3. What would your ideal solution look like?
4. How much would you pay for this?
5. What would make you switch from current solution?

#### Survey (optional for B2C)
**Sample Size:** 100+ responses
**Tools:** Typeform, Google Forms
**Distribution:** Social media, email lists, ads

---

## Phase 4: Technical Analysis (Day 9-10)

### Technical Feasibility Assessment

**Evaluate:**
- [ ] Integration complexity
- [ ] Third-party API availability
- [ ] Platform limitations
- [ ] Performance requirements
- [ ] Security requirements
- [ ] Scalability needs
- [ ] Compliance requirements (HIPAA, GDPR, etc.)

### Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| API rate limits | Medium | High | Implement caching, upgrade plan |
| App Store rejection | Low | High | Follow guidelines, pre-review |
| Third-party downtime | Medium | Medium | Implement retry logic, fallbacks |
| Scope creep | High | High | Clear change order process |
| Key person dependency | Medium | High | Documentation, pair programming |

### Architecture Sketch

Create high-level architecture diagram including:
- Mobile app(s)
- Backend services
- Databases
- Third-party integrations
- External APIs
- Admin systems

---

## Phase 5: Wireframing (Day 11-12)

### Deliverables

**Low-Fidelity Wireframes:**
- Key user flows (5-10 screens)
- Navigation structure
- Information architecture
- Created in: Figma, Balsamiq, or paper

**User Flow Diagram:**
```
[Onboarding] → [Sign Up] → [Home] → [Core Feature] → [Success]
                    ↓
              [Email Verify]
```

### Wireframe Review Session

**Agenda (60 minutes):**
1. Walkthrough of user flows (20 min)
2. Feedback collection (20 min)
3. Revision plan (10 min)
4. Next steps (10 min)

**Revision Rounds:** 2 rounds included in discovery

---

## Phase 6: Proposal & Contract (Day 13-14)

### Proposal Structure

```markdown
# [Project Name] - Proposal

## Executive Summary
[Brief overview of project and solution]

## Understanding of Requirements
[Summary of problem, users, and goals]

## Proposed Solution
[High-level approach and technology]

## Scope of Work
[Detailed feature list with priorities]

## Timeline
[Phase-by-phase timeline with milestones]

## Investment
[Pricing breakdown and payment terms]

## Our Team
[Key team members and roles]

## Why Us
[Relevant experience and differentiators]

## Next Steps
[How to move forward]

## Terms & Conditions
[Legal terms, IP, confidentiality]
```

### Pricing Presentation

**Present Options (anchoring):**

| Option | Scope | Timeline | Investment |
|--------|-------|----------|------------|
| MVP | Core features only | 8 weeks | $45,000 |
| Standard | Full feature set | 14 weeks | $85,000 |
| Premium | Full + admin + analytics | 18 weeks | $125,000 |

### Payment Terms

**Standard Terms:**
- 30% upon contract signing
- 30% upon design approval
- 25% upon beta delivery
- 15% upon App Store submission

**Alternative:**
- Monthly installments over project duration
- Milestone-based (defined deliverables)

### Contract Essentials

- [ ] Scope of work (detailed)
- [ ] Timeline with milestones
- [ ] Payment schedule
- [ ] Change order process
- [ ] IP ownership (client owns upon payment)
- [ ] Confidentiality
- [ ] Warranty period (30-90 days)
- [ ] Limitation of liability
- [ ] Termination clauses
- [ ] Dispute resolution

---

## Discovery Deliverables Checklist

- [ ] Discovery questionnaire completed
- [ ] Consultation call notes
- [ ] User personas (2-3)
- [ ] User journey maps
- [ ] Prioritized feature backlog
- [ ] User stories (20-50)
- [ ] Competitive analysis
- [ ] Technical feasibility assessment
- [ ] Risk register
- [ ] Architecture diagram
- [ ] Low-fidelity wireframes
- [ ] User flow diagrams
- [ ] Detailed proposal
- [ ] Contract ready for signature

---

## Discovery Timeline

```
Week 1:
├─ Day 1-2: Initial consultation
├─ Day 3-5: Requirements workshop
└─ Day 6-7: User research

Week 2:
├─ Day 8-9: Technical analysis
├─ Day 10-11: Wireframing
└─ Day 12-14: Proposal & contract
```

**Total: 10-14 business days**

---

## Discovery Pricing

| Package | Price | Deliverables |
|---------|-------|--------------|
| Basic | $5,000 | Consultation, requirements doc, proposal |
| Standard | $10,000 | Everything in Basic + wireframes, user stories, tech spec |
| Comprehensive | $15,000 | Everything in Standard + competitive analysis, user research, clickable prototype |

**Note:** Discovery fee credited toward project if contract signed within 30 days.

---

## Tools & Templates

- [Questionnaire Template](./templates/discovery-questionnaire.md)
- [User Story Template](./templates/user-story-template.md)
- [Technical Spec Template](./templates/technical-spec-template.md)
- [Proposal Template](./templates/proposal-template.md)

---

## Next Steps

1. Complete discovery with client
2. Create technical specification using template
3. Present proposal and close deal
4. Begin development using [Development Process](./04-Development-Process.md)
