# Shelby AR Experiences — Operations Manual

**Version:** 1.0  
**Created:** March 23, 2026  
**Status:** Active  

---

## Table of Contents

1. [Project Intake Process](#1-project-intake-process)
2. [Client Onboarding Checklist](#2-client-onboarding-checklist)
3. [Creative Brief Template](#3-creative-brief-template)
4. [Asset Management System](#4-asset-management-system)
5. [Quality Assurance Checklist](#5-quality-assurance-checklist)
6. [Platform Submission Guide](#6-platform-submission-guide)
7. [Client Communication Protocols](#7-client-communication-protocols)
8. [Crisis Management](#8-crisis-management)
9. [Team Roles & Responsibilities](#9-team-roles--responsibilities)
10. [Tools & Software Stack](#10-tools--software-stack)

---

## 1. Project Intake Process

### 1.1 Lead Qualification (Sales)

**Initial Contact Form:**
```
- Company Name:
- Contact Person & Title:
- Email & Phone:
- How did you hear about us?
- Project Type: [Filter/Campaign/Product Viz/Educational/Enterprise]
- Budget Range: [<5K/5-15K/15-50K/50K+]
- Timeline: [ASAP/1 month/2-3 months/Flexible]
- Platforms of Interest:
- Project Description (2-3 sentences):
```

**Qualification Criteria:**

| Score | Criteria | Points |
|-------|----------|--------|
| **Budget Fit** | Matches our pricing tiers | 0-3 |
| **Timeline** | Realistic for scope | 0-2 |
| **Decision Maker** | Talking to authorized person | 0-2 |
| **Use Case** | Aligns with our expertise | 0-2 |
| **Engagement** | Responsive, clear communication | 0-1 |

**Total Score:**
- 8-10: Hot lead → Schedule discovery call within 48 hours
- 5-7: Warm lead → Nurture, schedule within 1 week
- <5: Cold lead → Add to newsletter, follow up quarterly

---

### 1.2 Discovery Call Script (30 minutes)

**Opening (5 min):**
- Introductions
- Review agenda
- Confirm decision-makers on call

**Discovery Questions (15 min):**
1. "What's the business objective behind this AR project?"
2. "Who is your target audience?"
3. "What platforms does your audience use most?"
4. "What does success look like? (metrics/goals)"
5. "What's your ideal launch date? What's driving that?"
6. "What's your budget range for this project?"
7. "Have you done AR before? What worked/didn't work?"
8. "Who else needs to be involved in the decision?"

**Presentation (5 min):**
- Brief overview of our process
- Relevant case studies (2-3)
- High-level timeline expectations

**Next Steps (5 min):**
- Confirm proposal timeline (3-5 business days)
- Request any additional materials (brand guidelines, assets)
- Schedule follow-up call

**Post-Call Actions:**
- Log notes in CRM within 24 hours
- Send thank-you email with recap
- Begin proposal development

---

### 1.3 Proposal Development

**Proposal Structure:**
1. Executive Summary (1 page)
2. Understanding of Objectives (1 page)
3. Proposed Solution (2-3 pages)
4. Scope of Work & Deliverables (2 pages)
5. Timeline & Milestones (1 page)
6. Investment (1 page)
7. About Shelby AR Experiences (1-2 pages)
8. Relevant Case Studies (2-4 pages)
9. Terms & Conditions (reference MSA)
10. Next Steps (1 page)

**Proposal Timeline:**
- Standard proposals: 3-5 business days
- Rush proposals: 24-48 hours (+25% fee)
- Enterprise proposals: 5-10 business days

**Follow-Up Cadence:**
- Day 1: Send proposal, schedule review call
- Day 3: Check-in email
- Day 7: Phone call
- Day 14: Final follow-up
- Day 30: Move to nurture campaign

---

## 2. Client Onboarding Checklist

### 2.1 Pre-Kickoff (Before Project Starts)

**Administrative:**
- [ ] Contract signed by both parties
- [ ] Deposit received (50%)
- [ ] NDA executed (if applicable)
- [ ] Client added to project management system
- [ ] Client portal access granted
- [ ] Internal kickoff scheduled

**Asset Collection:**
- [ ] Brand guidelines received
- [ ] Logo files (AI, EPS, PNG, SVG)
- [ ] Color palette (HEX, RGB, CMYK)
- [ ] Typography guidelines
- [ ] Product images/reference photos
- [ ] 3D models (if client-provided)
- [ ] Copy/messaging documents
- [ ] Music/audio assets (if applicable)
- [ ] Previous campaign examples (what they liked)

**Access & Permissions:**
- [ ] Social media account access (or confirmation client will submit)
- [ ] Analytics access (if integrating with existing)
- [ ] Website access (for WebAR integration)
- [ ] Any third-party platform logins

**Stakeholder Mapping:**
- [ ] Primary contact identified
- [ ] Decision-maker(s) identified
- [ ] Technical contact (if applicable)
- [ ] Communication preferences confirmed
- [ ] Approval workflow clarified

---

### 2.2 Kickoff Meeting Agenda (60-90 minutes)

**Attendees:**
- Client: Primary contact, decision-maker, technical lead (if applicable)
- Shelby AR: Project Manager, Creative Director, Lead Developer

**Agenda:**

| Time | Topic | Owner |
|------|-------|-------|
| 0-10 min | Introductions & icebreaker | PM |
| 10-20 min | Project overview & objectives | Client |
| 20-35 min | Creative direction & inspiration | Creative Director |
| 35-50 min | Technical approach & platform strategy | Lead Developer |
| 50-60 min | Timeline review & milestone dates | PM |
| 60-75 min | Communication protocols & tools | PM |
| 75-90 min | Q&A and next steps | All |

**Kickoff Deliverables:**
- Meeting recording (with permission)
- Meeting notes sent within 24 hours
- Updated project timeline
- Asset request follow-up (if missing items)

---

### 2.3 Project Setup

**Project Management:**
- [ ] Project created in PM tool (Asana/ClickUp/Linear)
- [ ] All milestones entered with due dates
- [ ] Team members assigned to tasks
- [ ] Client given view-only access (if appropriate)

**File Structure:**
```
/clients/[client-name]/[project-name]/
├── 01-admin/
│   ├── contract.pdf
│   ├── proposal.pdf
│   └── correspondence/
├── 02-brief/
│   ├── creative-brief.md
│   └── reference-images/
├── 03-assets/
│   ├── client-provided/
│   ├── 3d-models/
│   ├── textures/
│   └── audio/
├── 04-production/
│   ├── spark-ar/
│   ├── lens-studio/
│   ├── blender/
│   └── exports/
├── 05-reviews/
│   ├── v1/
│   ├── v2/
│   └── final/
├── 06-launch/
│   ├── qr-codes/
│   ├── social-assets/
│   └── analytics-setup/
└── 07-post-launch/
    ├── performance-report/
    └── case-study/
```

**Communication Channels:**
- [ ] Slack channel created (internal)
- [ ] Slack connect channel (with client, if appropriate)
- [ ] Email distribution list
- [ ] Weekly status call scheduled

---

## 3. Creative Brief Template

```
CREATIVE BRIEF

Project Name: [NAME]
Client: [CLIENT]
Date: [DATE]
Prepared By: [NAME]

1. PROJECT OVERVIEW
What are we creating and why?
[2-3 paragraph summary]

2. BUSINESS OBJECTIVES
What business problem are we solving?
- Primary Objective:
- Secondary Objectives:
- Success Metrics:

3. TARGET AUDIENCE
Who are we creating this for?
- Demographics:
- Psychographics:
- Behaviors:
- Platform Usage:

4. KEY MESSAGE
What's the one thing we want people to remember?
[Single sentence]

5. TONE & STYLE
How should this feel?
- Brand Adjectives:
- Visual Style References:
- Do's:
- Don'ts:

6. PLATFORM STRATEGY
Where will this live?
- Primary Platform:
- Secondary Platforms:
- Platform-Specific Considerations:

7. FUNCTIONAL REQUIREMENTS
What does it need to do?
- Core Interaction:
- Required Features:
- Technical Constraints:

8. COMPETITIVE LANDSCAPE
What else is out there?
- Competitor AR Experiences:
- What We Like:
- What We Can Do Better:

9. INSPIRATION & REFERENCES
Visual references, mood boards, examples:
[Attach/link to mood board]

10. TIMELINE & MILESTONES
Key dates:
- Concept Approval:
- First Review:
- Final Delivery:
- Launch Date:

11. BUDGET
Approved budget: $[AMOUNT]
Contingency: [X]%

12. STAKEHOLDERS
- Client Lead:
- Client Approver:
- Creative Director:
- Project Manager:
- Lead Developer:

APPROVALS:
Client: ___________________ Date: _______
Creative Director: _________ Date: _______
```

---

## 4. Asset Management System

### 4.1 File Naming Conventions

**General Format:**
```
[ProjectCode]_[AssetType]_[Description]_[Version]_[Date].[ext]

Example: NIKE_AR_Filter_FaceTracking_v2_20260323.zip
```

**Version Control:**
- v1, v2, v3 (minor revisions)
- v1.1, v1.2 (small tweaks)
- FINAL (approved version)
- FINAL_APPROVED (client-signed off)

**3D Model Files:**
```
[ProductName]_[LOD]_[Format].[ext]

Examples:
- Sneaker_LOD0_GLB.glb (high detail)
- Sneaker_LOD1_GLB.glb (medium detail)
- Sneaker_LOD2_GLB.glb (low detail)
- Sneaker_Source_BLEND.blend (source file)
```

**Texture Files:**
```
[ModelName]_[MapType]_[Resolution].[ext]

Examples:
- Sneaker_Albedo_2K.png
- Sneaker_Normal_2K.png
- Sneaker_Roughness_2K.png
- Sneaker_Metallic_2K.png
```

---

### 4.2 Asset Library Structure

```
/assets/
├── 3d-models/
│   ├── products/
│   ├── characters/
│   ├── environments/
│   └── props/
├── textures/
│   ├── materials/
│   ├── patterns/
│   └── hdri/
├── audio/
│   ├── music/
│   ├── sfx/
│   └── voiceover/
├── templates/
│   ├── spark-ar/
│   ├── lens-studio/
│   └── effect-house/
└── reference/
    ├── mood-boards/
    ├── competitor-analysis/
    └── trends/
```

---

### 4.3 Asset Quality Standards

**3D Models:**
- Topology: Clean quad-based mesh
- UVs: Properly unwrapped, no overlaps
- Scale: Real-world scale (meters)
- Origin: Centered at base/origin point
- Normals: Consistent, facing outward

**Textures:**
- Resolution: Power of 2 (1024, 2048, 4096)
- Format: PNG (lossless) or JPG (optimized)
- Color Space: sRGB for color, Linear for data maps
- Naming: Consistent with PBR workflow

**Code/Scripts:**
- Comments: All functions documented
- Formatting: Consistent style (Prettier/ESLint)
- Version Control: Git with meaningful commit messages

---

## 5. Quality Assurance Checklist

### 5.1 Pre-Submission QA

**Visual Quality:**
- [ ] Models render without artifacts
- [ ] Textures display correctly (no stretching)
- [ ] Lighting looks natural
- [ ] Colors match brand guidelines
- [ ] Animations are smooth (no popping)

**Functionality:**
- [ ] All interactions work as intended
- [ ] Touch targets are appropriately sized
- [ ] UI elements are readable
- [ ] Audio plays correctly (if applicable)
- [ ] No console errors

**Performance:**
- [ ] 30+ FPS on target devices
- [ ] Load time <3 seconds
- [ ] Memory usage <500MB
- [ ] File size within platform limits
- [ ] No memory leaks (tested over 5+ min)

**Tracking:**
- [ ] Face tracking stable (all angles)
- [ ] World tracking stable (various surfaces)
- [ ] Occlusion working correctly (if applicable)
- [ ] Hand tracking accurate (if applicable)

**Platform Compliance:**
- [ ] Follows platform content policies
- [ ] Proper disclosures (sponsored content)
- [ ] No prohibited content
- [ ] Age-appropriate
- [ ] Accessibility considerations met

---

### 5.2 Device Testing Matrix

**Required Test Devices:**

| Priority | iOS Device | Android Device |
|----------|------------|----------------|
| **Must Test** | iPhone 15 Pro | Samsung Galaxy S24 |
| **Must Test** | iPhone 12 | Google Pixel 7 |
| **Should Test** | iPhone SE (2022) | Samsung Galaxy A54 |
| **Nice to Have** | iPad Air | Samsung Galaxy Tab S8 |

**Test Scenarios:**

1. **Lighting Conditions:**
   - [ ] Bright daylight
   - [ ] Indoor office lighting
   - [ ] Low light/evening
   - [ ] Backlit scenarios

2. **User Demographics:**
   - [ ] Different skin tones (face tracking)
   - [ ] Various face shapes/sizes
   - [ ] Users with glasses
   - [ ] Users with facial hair

3. **Edge Cases:**
   - [ ] Multiple faces in frame
   - [ ] Face partially obscured
   - [ ] Rapid head movement
   - [ ] Extreme angles

4. **Network Conditions:**
   - [ ] WiFi (fast)
   - [ ] 4G/5G
   - [ ] Slow 3G (for WebAR)
   - [ ] Offline mode (if applicable)

---

### 5.3 User Testing Protocol

**Recruitment:**
- 5-10 participants matching target demographic
- Mix of AR-experienced and AR-naive users
- Incentive: $25-50 gift card per participant

**Session Structure (25 minutes):**

| Time | Activity | Notes |
|------|----------|-------|
| 0-5 min | Introduction & consent | Explain purpose, get permission to record |
| 5-10 min | First impressions | Unmoderated, observe natural interaction |
| 10-20 min | Task completion | Give specific tasks to complete |
| 20-25 min | Debrief interview | Ask about experience, likes, improvements |

**Tasks to Assign:**
- "Show me how you'd share this with a friend"
- "Try to [specific interaction]"
- "What do you think this button does?"
- "How would you describe this to someone?"

**Metrics to Capture:**
- Task completion rate (%)
- Time on task (seconds)
- Error count
- Confusion points (noted by moderator)
- NPS score (0-10)
- Verbatim quotes

**Post-Session:**
- Synthesize findings within 48 hours
- Prioritize issues (Critical/High/Medium/Low)
- Share report with team
- Create tickets for fixes

---

## 6. Platform Submission Guide

### 6.1 Instagram Spark AR

**Submission Requirements:**
- Account: Must be submitted from linked Instagram account
- File: .arexport format
- Size: <10MB
- Icon: 200x200px PNG, <1MB
- Preview Video: 15-30 seconds, 1080x1920, <30MB
- Name: 30 characters max
- Instructions: Clear usage instructions

**Review Process:**
1. Automated check (file format, size)
2. Human review (policy compliance)
3. Decision: Approved, Rejected, or Changes Requested

**Timeline:** 24-72 hours typical

**Common Rejection Reasons:**
- Trademark/copyright issues
- Misleading claims
- Poor performance
- Inappropriate content
- Broken functionality

**Resubmission:**
- Fix all noted issues
- Respond to each rejection point
- Resubmit (same queue, may be faster)

---

### 6.2 TikTok Effect House

**Submission Requirements:**
- Account: TikTok for Business account recommended
- File: .epk format
- Size: <20MB
- Icon: 512x512px PNG
- Preview Video: 15-60 seconds, vertical
- Name: 20 characters max
- Hashtags: 3-5 relevant hashtags

**Review Process:**
- Automated + manual review
- Policy compliance check
- Quality assessment

**Timeline:** 24-48 hours typical

**Special Considerations:**
- Music must be from TikTok library or original
- No political content
- Must comply with Community Guidelines

---

### 6.3 Snapchat Lens Studio

**Submission Requirements:**
- Account: Snapchat Publisher account
- File: .lens format
- Size: <4MB (standard), <8MB (Landmarker)
- Icon: 512x512px PNG
- Preview Video: 10-30 seconds, 1080x1920
- Name: 30 characters max
- Description: 100 characters max

**Review Process:**
- Manual review by Snapchat team
- Strict policy enforcement
- May request changes

**Timeline:** 3-5 business days typical

**Lens Categories:**
- World Lenses
- Face Lenses
- Hand Lenses
- Body Lenses
- Voice Lenses

**Special Programs:**
- Lens Explorer (featured lenses)
- Branded Lenses (paid promotion)

---

### 6.4 WebAR (8th Wall)

**Deployment Requirements:**
- HTTPS-enabled hosting
- 8th Wall account & API key
- Domain verification (for custom domains)

**Optimization:**
- Target load time: <3 seconds on 4G
- Use CDN for assets
- Minimize initial payload
- Implement lazy loading

**Analytics:**
- 8th Wall built-in analytics
- Google Analytics integration
- Custom event tracking

**Testing:**
- QR code testing on multiple devices
- Deep link testing
- Social media preview testing

---

### 6.5 Submission Checklist

**Before Submitting:**
- [ ] Final QA completed
- [ ] All stakeholders approved
- [ ] Assets optimized for platform
- [ ] Preview video created
- [ ] Icon designed per specs
- [ ] Name/description written
- [ ] Instructions clear
- [ ] Analytics configured
- [ ] Tracking links ready

**Day of Submission:**
- [ ] Submit to all platforms
- [ ] Log submission IDs
- [ ] Set up monitoring alerts
- [ ] Notify client of submission
- [ ] Prepare launch materials

**After Approval:**
- [ ] Test live version on multiple devices
- [ ] Verify analytics tracking
- [ ] Generate QR codes
- [ ] Create launch announcement
- [ ] Send client launch confirmation

---

## 7. Client Communication Protocols

### 7.1 Communication Channels

| Channel | Use Case | Response Time |
|---------|----------|---------------|
| **Email** | Formal approvals, contracts, deliverables | 24 hours |
| **Slack** | Quick questions, updates, files | 4 hours (business hours) |
| **Phone/Video** | Complex discussions, reviews | Scheduled |
| **Project Portal** | Status updates, milestone tracking | Real-time |
| **Emergency** | Critical bugs, launch issues | 1 hour |

---

### 7.2 Status Update Cadence

**Weekly Status Report (every Friday):**
```
Subject: Weekly Status - [Project Name] - [Date]

Hi [Client],

Here's this week's progress:

COMPLETED THIS WEEK:
- [Item 1]
- [Item 2]

IN PROGRESS:
- [Item 1] - [X]% complete, on track
- [Item 2] - [X]% complete, [any blockers]

NEXT WEEK:
- [Planned item 1]
- [Planned item 2]

BLOCKERS/DECISIONS NEEDED:
- [List any items requiring client input]

MILESTONE STATUS:
[Green/Yellow/Red] - [Brief explanation]

Best,
[Your Name]
```

**Milestone Reviews:**
- Scheduled at each major milestone
- 60-minute video call
- Demo of work-in-progress
- Feedback collection
- Next phase planning

---

### 7.3 Feedback & Revision Process

**Feedback Guidelines for Clients:**
- Provide specific, actionable feedback
- Reference timestamps for video reviews
- Consolidate feedback from all stakeholders
- Respond within agreed approval windows

**Revision Workflow:**
1. Client submits feedback (via portal/email)
2. PM logs feedback in tracking system
3. Team reviews and estimates effort
4. PM confirms timeline for revisions
5. Team implements changes
6. Updated version delivered for review
7. Repeat until approved

**Revision Limits:**
- Starter: 2 rounds
- Standard: 3-5 rounds
- Premium: Unlimited (within scope)

**Out-of-Scope Revisions:**
- PM notifies client
- Change order issued
- Work begins after approval

---

### 7.4 Escalation Path

**Level 1: Project Manager**
- Day-to-day issues
- Timeline adjustments
- Scope clarifications

**Level 2: Creative Director / Technical Lead**
- Creative disagreements
- Technical challenges
- Quality concerns

**Level 3: Founder/CEO**
- Contract disputes
- Major scope changes
- Relationship issues

**Escalation Timeline:**
- Level 1: Resolve within 24 hours
- Level 2: Escalate if not resolved in 48 hours
- Level 3: Escalate if not resolved in 72 hours

---

## 8. Crisis Management

### 8.1 Crisis Categories

**Category 1: Critical (Response: 1 hour)**
- Platform rejection days before launch
- Major bug in live experience
- Security breach
- Client data exposure

**Category 2: High (Response: 4 hours)**
- Performance issues affecting 50%+ users
- Key team member unavailable
- Client threatens to cancel
- Payment issues

**Category 3: Medium (Response: 24 hours)**
- Minor bugs in live experience
- Timeline slippage
- Scope creep concerns
- Team capacity issues

---

### 8.2 Crisis Response Protocol

**Step 1: Assess (First 30 minutes)**
- Gather facts
- Determine scope and impact
- Identify stakeholders
- Assign crisis lead

**Step 2: Contain (1-2 hours)**
- Stop the bleeding
- Implement workaround if available
- Communicate with affected parties
- Document everything

**Step 3: Resolve (24-72 hours)**
- Develop fix/solution
- Test thoroughly
- Deploy with monitoring
- Confirm resolution

**Step 4: Review (Within 1 week)**
- Post-mortem analysis
- Document lessons learned
- Update processes to prevent recurrence
- Client follow-up

---

### 8.3 Communication Templates

**Critical Bug Notification:**
```
Subject: URGENT: Issue with [AR Experience Name]

Hi [Client],

We've identified a critical issue affecting [X]% of users.

IMPACT: [Brief description of what's broken]
AFFECTED USERS: [Estimate]
WORKAROUND: [If available]

OUR ACTION PLAN:
1. [Immediate action]
2. [Fix development]
3. [Testing]
4. [Deployment]

TIMELINE: We expect resolution within [X] hours.

We'll provide updates every [X] hours until resolved.

Apologies for this issue. We're treating this as top priority.

Best,
[Name]
[Phone for immediate contact]
```

**Timeline Delay Notification:**
```
Subject: Timeline Update - [Project Name]

Hi [Client],

I'm writing to inform you of a timeline adjustment for [Project Name].

ORIGINAL DELIVERY: [Date]
REVISED DELIVERY: [Date]
DELAY: [X] days/weeks

REASON: [Honest, specific explanation]

IMPACT: [What this means for launch, dependencies]

MITIGATION: [What we're doing to minimize impact]

We apologize for this delay and are committed to delivering exceptional quality. Please let me know if you'd like to discuss.

Best,
[Name]
```

---

## 9. Team Roles & Responsibilities

### 9.1 Core Team Structure

**Creative Director**
- Creative vision & strategy
- Client presentations
- Quality oversight
- Team mentorship
- Rate: $150-250/hour

**3D Artist**
- 3D modeling & texturing
- Animation
- Asset optimization
- Style consistency
- Rate: $75-150/hour

**AR Developer**
- Platform development (Spark AR, Lens Studio, etc.)
- Interaction programming
- Performance optimization
- Platform submission
- Rate: $85-175/hour

**Project Manager**
- Client communication
- Timeline management
- Resource allocation
- Risk management
- Rate: $100-150/hour

**QA Tester**
- Device testing
- Bug reporting
- User testing coordination
- Platform compliance checks
- Rate: $50-75/hour

---

### 9.2 RACI Matrix

| Activity | Creative Director | 3D Artist | AR Dev | PM | QA | Client |
|----------|------------------|-----------|--------|-----|-----|--------|
| Creative Brief | A | C | C | R | - | C |
| 3D Modeling | C | R | I | I | - | I |
| AR Development | C | C | R | I | I | I |
| QA Testing | I | I | I | A | R | C |
| Platform Submission | I | I | R | A | C | I |
| Client Approval | I | I | I | R | - | A |
| Launch | C | C | C | R | C | A |

R = Responsible (does the work)
A = Accountable (owns the outcome)
C = Consulted (provides input)
I = Informed (kept in the loop)

---

### 9.3 Capacity Planning

**Utilization Targets:**
- Billable: 70-80%
- Professional Development: 10%
- Administrative: 10-20%

**Project Load Guidelines:**

| Role | Small Projects | Medium Projects | Large Projects |
|------|---------------|-----------------|----------------|
| Creative Director | 3-4 concurrent | 2-3 concurrent | 1-2 concurrent |
| 3D Artist | 4-5 concurrent | 2-3 concurrent | 1-2 concurrent |
| AR Developer | 4-6 concurrent | 3-4 concurrent | 2-3 concurrent |
| Project Manager | 6-8 concurrent | 4-6 concurrent | 3-4 concurrent |

**Hiring Triggers:**
- Utilization >85% for 4+ weeks
- Pipeline exceeds capacity by 50%+
- Specialized skill gap identified
- Enterprise client requires dedicated resource

---

## 10. Tools & Software Stack

### 10.1 Production Tools

**3D Creation:**
- Blender (Free) - Primary modeling tool
- Maya ($1,875/yr) - Complex animations
- Substance Painter ($19.90/mo) - Texturing
- ZBrush ($39.95/mo) - High-detail sculpting

**AR Development:**
- Spark AR Studio (Free) - Instagram/Facebook
- Lens Studio (Free) - Snapchat
- Effect House (Free) - TikTok
- 8th Wall ($99-999/mo) - WebAR
- Unity ($0-2,040/yr) - Custom apps

**Design:**
- Figma (Free-$15/mo) - UI/UX, mockups
- Adobe Creative Cloud ($54.99/mo) - Graphics, video
- Procreate ($12.99) - iPad illustration

---

### 10.2 Project Management

**Primary:**
- ClickUp ($12-19/user/mo) OR
- Asana ($10.99-24.99/user/mo) OR
- Linear ($8-12/user/mo)

**Time Tracking:**
- Toggl Track ($9-18/user/mo)
- Harvest ($10.80-21.60/user/mo)

**Documentation:**
- Notion ($8-15/user/mo)
- Google Workspace ($6-18/user/mo)

---

### 10.3 Communication

**Internal:**
- Slack ($7.25-12.50/user/mo)
- Zoom ($14.99-24.99/host/mo)

**Client-Facing:**
- Slack Connect (included with Slack)
- Email (Google Workspace)
- Loom (Free-$15/mo) - Async video updates

---

### 10.4 File Storage & Sharing

**Cloud Storage:**
- Google Drive (included with Workspace)
- Dropbox ($15-24/user/mo)
- AWS S3 ($0.023/GB/mo)

**Large File Transfer:**
- WeTransfer Pro ($12/mo)
- Frame.io ($15-45/user/mo) - Video reviews

**Version Control:**
- GitHub ($0-21/user/mo)
- GitLab ($0-29/user/mo)

---

### 10.5 Analytics & Monitoring

**Web Analytics:**
- Google Analytics 4 (Free)
- Hotjar ($32-805/mo) - Heatmaps

**AR Analytics:**
- Platform-native (Free)
- 8th Wall Analytics (included)
- Custom dashboards (Data Studio/Tableau)

**Performance Monitoring:**
- Sentry ($26-75/mo) - Error tracking
- New Relic ($0-99/mo) - Performance

---

### 10.6 Finance & Admin

**Invoicing:**
- QuickBooks ($25-70/mo)
- FreshBooks ($15-50/mo)
- Wave (Free)

**Contracts:**
- DocuSign ($25-40/user/mo)
- PandaDoc ($19-49/user/mo)

**CRM:**
- HubSpot (Free-$50/mo)
- Pipedrive ($14.90-99/user/mo)

---

### 10.7 Monthly Software Budget (Team of 6)

| Category | Monthly Cost |
|----------|--------------|
| 3D/Design Tools | $300 |
| AR Development | $500 |
| Project Management | $100 |
| Communication | $150 |
| Storage & Transfer | $100 |
| Analytics | $50 |
| Finance/Admin | $200 |
| **Total** | **$1,400/mo** |

---

## Appendix: Templates & Resources

**Downloadable Templates:**
- [ ] Creative Brief (Google Doc)
- [ ] Status Report (Google Doc)
- [ ] Feedback Form (Google Form)
- [ ] Bug Report Template (Google Doc)
- [ ] Launch Checklist (Google Sheet)
- [ ] Post-Mortem Template (Google Doc)

**Internal Resources:**
- [ ] Asset Library (shared drive)
- [ ] Code Snippet Library (GitHub)
- [ ] Platform Policy Summaries (Notion)
- [ ] Troubleshooting Guide (Notion)
- [ ] Client Case Studies (Notion)

---

**Document Control:**
- **Owner:** Shelby AR Experiences
- **Last Updated:** March 23, 2026
- **Next Review:** Quarterly
- **Confidentiality:** Internal Use Only

---

*This is a living document. Update as processes evolve and team grows.*
