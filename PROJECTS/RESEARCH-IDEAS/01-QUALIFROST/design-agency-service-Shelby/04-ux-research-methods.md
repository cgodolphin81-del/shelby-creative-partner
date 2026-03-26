# UX Research Methods

Comprehensive guide to user research methodologies, when to use each, and how to execute effectively.

---

## 📚 Research Method Matrix

| Method | When to Use | Sample Size | Timeline | Cost |
|--------|-------------|-------------|----------|------|
| User Interviews | Discovery, problem validation | 5-10 users | 1-2 weeks | $ |
| Surveys | Quantitative validation | 100-500+ | 1-2 weeks | $ |
| Usability Testing | Design validation | 5-8 users | 1 week | $$ |
| Analytics Review | Existing products | N/A | 3-5 days | $ |
| Card Sorting | Information architecture | 15-30 users | 1 week | $ |
| Tree Testing | IA validation | 20-50 users | 1 week | $ |
| Diary Studies | Longitudinal behaviors | 5-10 users | 2-4 weeks | $$$ |
| A/B Testing | Design optimization | 1000+ users | 2-4 weeks | $$ |
| Contextual Inquiry | Deep behavioral understanding | 3-5 users | 1-2 weeks | $$$ |
| Heuristic Evaluation | Quick usability assessment | 3-5 experts | 3-5 days | $ |

---

## 1. User Interviews

**Qualitative deep-dive into user motivations, behaviors, and needs.**

### When to Use
- Early discovery phase
- Understanding problem space
- Validating assumptions
- Exploring user motivations
- Gathering feedback on concepts

### Sample Size
- **5-8 users** for a single user segment
- **10-15 users** for multiple segments
- Saturation typically occurs at 5-7 users per segment

### Duration
- **45-60 minutes** per interview
- **1-2 weeks** for recruitment, interviewing, and analysis

### Execution Guide

#### Recruitment
**Screening criteria:**
- Match target persona characteristics
- Mix of experience levels (if applicable)
- Incentivize appropriately ($50-150 per session)

**Recruitment channels:**
- Existing customer base
- User testing panels (User Interviews, Respondent)
- Social media ads
- Referrals

#### Interview Guide Structure
```
1. Introduction (5 min)
   - Welcome and consent
   - Purpose of session
   - Recording permission

2. Background & Context (10 min)
   - Role and responsibilities
   - Relevant experience
   - Current tools/workflows

3. Core Topics (25 min)
   - Current behaviors
   - Pain points and frustrations
   - Goals and motivations
   - Reaction to concepts (if applicable)

4. Wrap-up (5 min)
   - Any additional thoughts
   - Next steps
   - Thank you and incentive
```

#### Question Types
**Open-ended:**
- "Tell me about the last time you..."
- "How do you currently handle...?"
- "What would make this easier?"

**Probing:**
- "Can you say more about that?"
- "What made you decide to...?"
- "How did that make you feel?"

**Avoid:**
- Leading questions ("Don't you think...?")
- Yes/no questions
- Hypotheticals ("Would you ever...?")

#### Analysis
1. **Transcribe** recordings (Otter.ai, Rev)
2. **Code** transcripts for themes
3. **Affinity diagram** insights
4. **Synthesize** into findings report
5. **Present** to stakeholders

### Deliverables
- Interview recordings (with consent)
- Note summaries per participant
- Affinity map of themes
- Key findings report
- Persona inputs
- Recommendation document

### Common Pitfalls
❌ Talking more than listening
❌ Leading the witness
❌ Skipping recruitment screening
❌ Not recording sessions
❌ Analyzing before all interviews complete

---

## 2. Surveys

**Quantitative data collection at scale.**

### When to Use
- Validating qualitative findings
- Measuring prevalence of behaviors
- Segmenting user base
- Gathering feedback post-launch
- Prioritizing features

### Sample Size
- **Minimum 100 responses** for basic validity
- **300-500+** for segment analysis
- **1000+** for A/B test validation

### Duration
- **1-2 weeks** for design, distribution, and analysis
- Survey completion: 5-10 minutes max

### Execution Guide

#### Question Design
**Question types:**
- **Multiple choice** - Single select
- **Checkboxes** - Multiple select
- **Likert scale** - Agreement levels (1-5 or 1-7)
- **NPS** - Likelihood to recommend (0-10)
- **Open-ended** - Qualitative feedback (use sparingly)

**Best practices:**
- Keep it short (5-10 minutes max)
- One question per concept
- Avoid double-barreled questions
- Randomize answer order (when appropriate)
- Include "Prefer not to answer" options
- Pilot test before launching

#### Distribution Channels
- Email lists (existing users)
- In-app intercepts
- Social media
- Paid panels
- Customer success teams

#### Analysis
1. **Clean data** (remove incomplete, speeders)
2. **Descriptive statistics** (frequencies, means)
3. **Cross-tabs** (segment analysis)
4. **Significance testing** (if comparing groups)
5. **Open-ended coding** (thematic analysis)

### Deliverables
- Survey instrument
- Response data (CSV)
- Summary report with charts
- Key findings and recommendations
- Segment analysis (if applicable)

### Tools
- Typeform (beautiful, higher completion)
- Google Forms (free, basic)
- SurveyMonkey (enterprise features)
- Qualtrics (advanced research)

---

## 3. Usability Testing

**Observing users complete tasks to identify usability issues.**

### When to Use
- Validating design concepts
- Identifying usability issues
- Comparing design alternatives
- Pre-launch validation
- Post-launch optimization

### Sample Size
- **5 users** finds ~85% of issues
- **8 users** for multiple segments
- **10+ users** for statistical confidence

### Duration
- **1 week** for planning, testing, and reporting
- **45-60 minutes** per session

### Types of Usability Testing

#### Moderated Testing
**Format:** Live facilitator via video or in-person
**Best for:** Complex tasks, probing questions, concept testing
**Cost:** Higher ($100-200/user incentive + moderator time)

#### Unmoderated Testing
**Format:** Self-guided via platform
**Best for:** Simple tasks, larger samples, budget constraints
**Cost:** Lower ($30-50/user via platform)

#### Remote vs. In-Person
| | Remote | In-Person |
|---|--------|-----------|
| Cost | Lower | Higher |
| Recruitment | Easier | Harder |
| Observation | Screen + audio | Full body language |
| Flexibility | High | Lower |
| Setup | Minimal | Lab required |

### Execution Guide

#### Test Plan
```markdown
# Usability Test Plan

## Objectives
[What do we want to learn?]

## Tasks
1. [Task 1 - specific, actionable]
2. [Task 2]
3. [Task 3]

## Success Metrics
- Task completion rate
- Time on task
- Error rate
- Satisfaction (SEQ or SUS)

## Participants
[Recruitment criteria]

## Script
[Introduction, tasks, questions, wrap-up]
```

#### Task Design
**Good tasks:**
- "Find a pair of running shoes under $100 and add to cart"
- "Sign up for a free trial account"
- "Update your profile picture"

**Bad tasks:**
- "Click the blue button" (leading)
- "Is this easy to use?" (vague)
- "How would you search for products?" (hypothetical)

#### Metrics to Track
- **Task completion** (success/failure)
- **Time on task**
- **Errors** (wrong clicks, navigation issues)
- **Assistance needed** (hints required)
- **Satisfaction** (Single Ease Question: 1-7 scale)

### Deliverables
- Test plan and script
- Session recordings
- Findings report with severity ratings
- Video highlights reel
- Prioritized recommendations

### Tools
- **Moderated:** Zoom, Lookback, UserTesting
- **Unmoderated:** Maze, UserTesting, TryMyUI
- **In-person:** Screen recording software, observation room

---

## 4. Analytics Review

**Understanding user behavior through quantitative data.**

### When to Use
- Existing products
- Identifying friction points
- Validating research findings
- Prioritizing optimization opportunities
- Measuring impact of changes

### Duration
- **3-5 days** for initial analysis
- **Ongoing** for monitoring

### Key Metrics to Analyze

#### Acquisition
- Traffic sources
- Campaign performance
- Landing page conversion

#### Activation
- Sign-up completion rate
- Onboarding funnel drop-off
- Time to first value

#### Engagement
- DAU/MAU ratio
- Session duration
- Feature usage
- Return rate

#### Retention
- Cohort retention curves
- Churn rate
- Reactivation rate

#### Revenue
- Conversion rate
- Average order value
- Customer lifetime value

### Tools
- **Web:** Google Analytics, Mixpanel, Amplitude
- **Mobile:** Firebase, AppsFlyer, Adjust
- **Product:** Pendo, Heap, FullStory
- **Session Recording:** Hotjar, Crazy Egg, FullStory

### Analysis Framework
1. **Define questions** (What are we trying to learn?)
2. **Identify relevant metrics**
3. **Segment data** (by user type, channel, behavior)
4. **Identify patterns** (trends, anomalies, correlations)
5. **Generate hypotheses** (why is this happening?)
6. **Recommend actions** (what should we do?)

### Deliverables
- Analytics dashboard
- Funnel analysis
- Cohort analysis
- Key findings report
- Hypothesis document for testing

---

## 5. Card Sorting

**Understanding how users categorize information.**

### When to Use
- Designing information architecture
- Organizing content
- Creating navigation structures
- Validating category labels

### Sample Size
- **15-30 users** for reliable patterns
- **50+ users** for complex sites

### Duration
- **1 week** for setup, testing, analysis

### Types

#### Open Card Sort
**Format:** Users create their own categories
**Best for:** Exploring mental models, new content areas

#### Closed Card Sort
**Format:** Users sort into predefined categories
**Best for:** Validating existing structure

#### Hybrid
**Format:** Predefined categories + option to create new
**Best for:** Balance of structure and flexibility

### Execution Guide
1. **Select content items** (40-60 cards typical)
2. **Choose platform** (OptimalSort, Miro, physical cards)
3. **Recruit participants** matching target users
4. **Run sessions** (20-30 minutes each)
5. **Analyze patterns** (similarity matrices, dendrograms)
6. **Define structure** based on findings

### Deliverables
- Card sort activity
- Similarity matrix
- Dendrogram visualization
- Recommended information architecture
- Category naming recommendations

---

## 6. Tree Testing

**Validating information architecture findability.**

### When to Use
- Testing site structure
- Validating navigation labels
- Before visual design investment
- After card sorting

### Sample Size
- **20-50 users** for reliable data
- More for complex sites

### Duration
- **1 week** for setup, testing, analysis

### Execution Guide
1. **Create tree structure** (text-only hierarchy)
2. **Define tasks** ("Find X", "Where would you go to...?")
3. **Recruit participants**
4. **Run test** (10-15 minutes per user)
5. **Analyze results** (success rate, path analysis)

### Metrics
- **Success rate** (% who found correct location)
- **Directness** (% who went straight there)
- **Time on task**
- **Path analysis** (where did they go wrong?)

### Deliverables
- Tree test results
- Success rate by task
- Path visualization
- Problem area identification
- IA recommendations

### Tools
- Optimal Workshop (Treejack)
- UserZoom
- Maze

---

## 7. Diary Studies

**Longitudinal understanding of behaviors and experiences.**

### When to Use
- Understanding habits over time
- Capturing in-the-moment feedback
- Studying infrequent activities
- Tracking behavior change

### Sample Size
- **5-10 users** for qualitative depth
- **20-30 users** for pattern identification

### Duration
- **2-4 weeks** typical
- Can extend to months for habit formation

### Execution Guide
1. **Define focus** (what behaviors to track)
2. **Create entry template** (consistent structure)
3. **Recruit committed participants**
4. **Brief participants** (expectations, incentives)
5. **Monitor and prompt** (keep engagement high)
6. **Conduct exit interviews** (deeper follow-up)
7. **Analyze patterns** over time

### Data Collection Methods
- Mobile app entries
- Email prompts
- SMS check-ins
- Photo/video uploads
- Voice memos

### Deliverables
- Diary entries (compiled)
- Timeline visualization
- Pattern analysis
- Key insights report
- Persona enhancements

---

## 8. A/B Testing

**Comparing design alternatives with real users.**

### When to Use
- Optimizing conversion rates
- Testing design variations
- Validating hypotheses
- Post-launch improvements

### Sample Size
- **1000+ users per variant** for statistical significance
- Depends on baseline conversion rate and MDE

### Duration
- **2-4 weeks** minimum (depends on traffic)

### Execution Guide
1. **Define hypothesis** (If we X, then Y will happen because Z)
2. **Identify metric** (primary and secondary)
3. **Create variants** (A = control, B = variation)
4. **Determine sample size** (power analysis)
5. **Run test** (until significance reached)
6. **Analyze results** (statistical significance, practical significance)
7. **Implement winner** or iterate

### Statistical Considerations
- **Significance level:** 95% confidence (p < 0.05)
- **Power:** 80% minimum
- **Multiple testing correction** if running many tests
- **Avoid peeking** (don't stop early)

### Deliverables
- Test hypothesis document
- Variant designs
- Test results report
- Statistical analysis
- Implementation recommendation

### Tools
- Optimizely
- Google Optimize (being sunset; alternatives needed)
- VWO
- LaunchDarkly (for feature flags)

---

## 9. Contextual Inquiry

**Observing users in their natural environment.**

### When to Use
- Understanding complex workflows
- Enterprise/B2B products
- Physical+digital experiences
- Deep empathy building

### Sample Size
- **3-5 users** for deep insights
- Focus on depth over breadth

### Duration
- **1-2 weeks** for field visits and analysis
- **2-4 hours** per observation session

### Execution Guide
1. **Recruit participants** in relevant contexts
2. **Schedule observations** (workplace, home, etc.)
3. **Observe quietly** (master-apprentice model)
4. **Ask questions** in context ("What are you doing now?")
5. **Document** (notes, photos, video with consent)
6. **Debrief** (clarify observations)
7. **Synthesize** findings

### Deliverables
- Observation notes
- Photo/video documentation
- Workflow diagrams
- Pain point analysis
- Opportunity areas

---

## 10. Heuristic Evaluation

**Expert review against usability principles.**

### When to Use
- Quick usability assessment
- Early design review
- Budget-constrained projects
- Complement to user testing

### Sample Size
- **3-5 evaluators** finds most issues

### Duration
- **3-5 days** for review and reporting

### Nielsen's 10 Heuristics
1. Visibility of system status
2. Match between system and real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help users recognize, diagnose, recover from errors
10. Help and documentation

### Execution Guide
1. **Brief evaluators** on heuristics and scope
2. **Independent review** (2 hours per evaluator)
3. **Document issues** (screenshot, heuristic, severity)
4. **Consolidate findings** (remove duplicates)
5. **Severity rating** (0-4 scale)
6. **Prioritize recommendations**

### Severity Scale
- **0:** Not a usability problem
- **1:** Cosmetic problem
- **2:** Minor usability problem
- **3:** Major usability problem
- **4:** Usability catastrophe

### Deliverables
- Issue list with screenshots
- Heuristic mapping
- Severity ratings
- Prioritized recommendations

---

## 📊 Research Planning Template

```markdown
# Research Plan: [Project Name]

## Background
[Context and problem statement]

## Research Goals
- [ ] Goal 1
- [ ] Goal 2
- [ ] Goal 3

## Research Questions
1. [Primary question]
2. [Secondary question]
3. [Tertiary question]

## Methods
| Method | Purpose | Timeline | Owner |
|--------|---------|----------|-------|
| [Method 1] | [Why this method] | [Dates] | [Name] |
| [Method 2] | [Why this method] | [Dates] | [Name] |

## Participants
| Segment | Count | Criteria | Recruitment |
|---------|-------|----------|-------------|
| [Segment 1] | [N] | [Criteria] | [Method] |
| [Segment 2] | [N] | [Criteria] | [Method] |

## Timeline
- Week 1: [Activities]
- Week 2: [Activities]
- Week 3: [Activities]

## Deliverables
- [ ] Deliverable 1
- [ ] Deliverable 2
- [ ] Deliverable 3

## Budget
| Item | Cost |
|------|------|
| Incentives | $X |
| Tools | $X |
| Recruitment | $X |
| **Total** | **$X** |
```

---

## 🎯 Method Selection by Phase

| Phase | Primary Methods | Secondary Methods |
|-------|-----------------|-------------------|
| Discovery | User Interviews, Analytics Review | Heuristic Evaluation, Stakeholder Interviews |
| Research | User Interviews, Surveys, Contextual Inquiry | Diary Studies, Competitive Analysis |
| IA Design | Card Sorting, Tree Testing | User Interviews |
| Design Validation | Usability Testing, A/B Testing | Heuristic Evaluation |
| Post-Launch | Analytics Review, Surveys, A/B Testing | User Interviews |

---

*Research methods guide updated Q1 2026. Adapt based on project constraints and goals.*
