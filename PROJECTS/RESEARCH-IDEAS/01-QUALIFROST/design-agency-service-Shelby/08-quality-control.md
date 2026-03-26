# Quality Control

Frameworks and processes for maintaining design excellence, accessibility compliance, and brand consistency across all agency output.

---

## 🎯 Quality Pillars

| Pillar | Description | Measurement |
|--------|-------------|-------------|
| **Design Quality** | Visual excellence, craft, attention to detail | Design review scores, client satisfaction |
| **Accessibility** | WCAG 2.1 AA compliance, inclusive design | Audit pass rate, user testing with disabled users |
| **Brand Consistency** | Adherence to brand guidelines, cohesive experience | Brand audit scores, stakeholder feedback |
| **Usability** | Intuitive, efficient, satisfying user experience | Task success rate, SUS scores, error rates |

---

## 1. Design Reviews

**Systematic critique to ensure quality before delivery.**

### Review Types

#### Internal Design Critique (Weekly)
**Participants:** Design team (all levels)
**Duration:** 60-90 minutes
**Frequency:** Weekly

**Format:**
```
1. Presenter shares work (5 min)
   - Context and goals
   - Current state
   - Specific questions for the team

2. Silent review (5 min)
   - Everyone examines work
   - Write down feedback

3. Discussion (30-40 min)
   - Clarifying questions
   - Feedback (organized by theme)
   - Presenter responds

4. Action items (5 min)
   - What will be changed
   - Who does what
   - Timeline
```

**Feedback Framework (I Like, I Wish, I Wonder):**
- **I Like:** What's working well
- **I Wish:** Suggestions for improvement
- **I Wonder:** Questions and provocations

**Ground Rules:**
- Focus on the work, not the person
- Be specific and actionable
- Balance positive and constructive
- Presenter listens first, responds after
- No laptops/phones during critique

#### Client Design Review (Per Milestone)
**Participants:** Client stakeholders, design team, PM
**Duration:** 60 minutes
**Frequency:** At key milestones (wireframes, mockups, prototype)

**Format:**
```
1. Context setting (5 min)
   - What we're reviewing
   - What feedback we need

2. Walkthrough (20-30 min)
   - Present key screens/flows
   - Explain design decisions
   - Show variations (if applicable)

3. Feedback collection (20 min)
   - Guided discussion
   - Capture all feedback
   - Clarify and prioritize

4. Next steps (5 min)
   - What we'll incorporate
   - What needs further discussion
   - Timeline for revisions
```

**Feedback Capture Template:**
```markdown
## Design Review Feedback
**Project:** [Name]
**Date:** [Date]
**Attendees:** [Names]

### Feedback by Screen/Flow

#### [Screen/Flow Name]
| Feedback | Type | Priority | Owner | Status |
|----------|------|----------|-------|--------|
| [Feedback item] | Bug/Change/Nitpick | High/Med/Low | [Name] | Open/Done |

### Decisions Made
- [Decision 1]
- [Decision 2]

### Action Items
- [ ] [Action 1] - [Owner] - [Due Date]
- [ ] [Action 2] - [Owner] - [Due Date]
```

**Feedback Types:**
- **Bug:** Something is broken or incorrect (fix required)
- **Change:** Requested modification (discuss priority)
- **Nitpick:** Minor preference (optional, batch together)

#### Executive Design Review (Major Projects)
**Participants:** Agency leadership, client executives
**Duration:** 45-60 minutes
**Frequency:** At major milestones or project completion

**Focus:**
- Strategic alignment
- Business impact
- Brand representation
- Competitive differentiation

---

## 2. Accessibility Compliance

**Ensuring designs are usable by people with disabilities.**

### WCAG 2.1 AA Checklist

#### Perceivable
- [ ] **1.1.1 Non-text Content:** All images have alt text
- [ ] **1.2.1 Audio-only/Video-only:** Alternatives provided
- [ ] **1.3.1 Info and Relationships:** Semantic HTML, proper headings
- [ ] **1.3.2 Meaningful Sequence:** Logical reading order
- [ ] **1.3.3 Sensory Characteristics:** Not relying on color/shape alone
- [ ] **1.4.1 Use of Color:** Color not sole means of conveying info
- [ ] **1.4.3 Contrast (Minimum):** 4.5:1 for text, 3:1 for large text
- [ ] **1.4.4 Resize Text:** Text scalable to 200% without loss
- [ ] **1.4.5 Images of Text:** Text used instead of images where possible
- [ ] **1.4.10 Reflow:** No horizontal scrolling at 320px
- [ ] **1.4.11 Non-text Contrast:** 3:1 for UI components, graphics
- [ ] **1.4.12 Text Spacing:** No loss of content at increased spacing
- [ ] **1.4.13 Content on Hover/Focus:** Dismissible, hoverable, persistent

#### Operable
- [ ] **2.1.1 Keyboard:** All functionality keyboard accessible
- [ ] **2.1.2 No Keyboard Trap:** Users can navigate away
- [ ] **2.2.1 Timing Adjustable:** Users can extend time limits
- [ ] **2.2.2 Pause/Stop/Hide:** Moving content can be paused
- [ ] **2.3.1 Three Flashes:** No content flashes >3 times/second
- [ ] **2.4.1 Bypass Blocks:** Skip links for repeated content
- [ ] **2.4.2 Page Titled:** Descriptive, unique page titles
- [ ] **2.4.3 Focus Order:** Logical focus sequence
- [ ] **2.4.4 Link Purpose:** Link text describes destination
- [ ] **2.4.5 Multiple Ways:** Multiple ways to find pages
- [ ] **2.4.6 Headings and Labels:** Descriptive and clear
- [ ] **2.4.7 Focus Visible:** Keyboard focus is visible
- [ ] **2.5.1 Pointer Gestures:** Single pointer alternatives
- [ ] **2.5.2 Pointer Cancellation:** No down-event actions
- [ ] **2.5.3 Label in Name:** Visible labels match programmatic
- [ ] **2.5.4 Motion Actuation:** Motion can be disabled

#### Understandable
- [ ] **3.1.1 Language of Page:** Page language declared
- [ ] **3.1.2 Language of Parts:** Language changes marked
- [ ] **3.2.1 On Focus:** No context change on focus
- [ ] **3.2.2 On Input:** No context change on input alone
- [ ] **3.2.3 Consistent Navigation:** Consistent across pages
- [ ] **3.2.4 Consistent Identification:** Consistent labeling
- [ ] **3.3.1 Error Identification:** Errors described in text
- [ ] **3.3.2 Labels or Instructions:** Labels for user input
- [ ] **3.3.3 Error Suggestion:** Suggestions for correction
- [ ] **3.3.4 Error Prevention:** Reversible submissions or confirmed
- [ ] **3.4.1 Status Messages:** Status messages announced

#### Robust
- [ ] **4.1.1 Parsing:** Valid, well-formed code
- [ ] **4.1.2 Name, Role, Value:** Proper ARIA, accessible name
- [ ] **4.1.3 Status Messages:** Status messages programmatically determined

### Accessibility Review Process

#### Design Phase
**Tools:**
- Stark (Figma plugin)
- Able (Figma plugin)
- Color Contrast Analyzer

**Checklist:**
- [ ] Color contrast meets 4.5:1 minimum
- [ ] Color not sole means of conveying information
- [ ] Focus states designed for all interactive elements
- [ ] Text is legible at all breakpoints
- [ ] Touch targets minimum 44x44px (mobile)
- [ ] Error states include text descriptions
- [ ] Form labels are clear and associated

#### Development Phase
**Tools:**
- axe DevTools (browser extension)
- WAVE (web accessibility evaluation)
- Lighthouse (accessibility audit)
- Screen readers (NVDA, VoiceOver, JAWS)

**Checklist:**
- [ ] Semantic HTML used appropriately
- [ ] ARIA labels where needed
- [ ] Keyboard navigation tested
- [ ] Screen reader testing completed
- [ ] Focus management for dynamic content
- [ ] Alt text for all images
- [ ] Form accessibility (labels, error messages)

#### Testing with Users
**Recruit participants with:**
- Visual impairments (low vision, color blindness, blind)
- Motor impairments (limited dexterity, tremor)
- Cognitive impairments (dyslexia, ADHD, memory)
- Hearing impairments (deaf, hard of hearing)

**Methods:**
- Moderated usability testing
- Screen reader testing sessions
- Keyboard-only navigation testing
- Cognitive walkthrough

### Accessibility Documentation
```markdown
# Accessibility Statement

## Commitment
[Agency] is committed to ensuring digital accessibility for
people with disabilities. We continually improve the user
experience and apply relevant accessibility standards.

## Conformance Level
WCAG 2.1 Level AA

## Features
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Text resizing capability
- Alternative text for images

## Contact
If you experience accessibility barriers, contact us:
- Email: accessibility@[agency].com
- Phone: [number]
- Address: [address]

## Date
[Last updated date]
```

---

## 3. Brand Consistency

**Ensuring all output aligns with brand guidelines and voice.**

### Brand Audit Checklist

#### Visual Identity
- [ ] Logo usage follows guidelines (clear space, minimum size)
- [ ] Color palette used correctly (primary, secondary, accent)
- [ ] Typography matches brand system
- [ ] Imagery style consistent (photography, illustrations, icons)
- [ ] Iconography style consistent
- [ ] Spacing and grid system followed
- [ ] Button and CTA styles match brand

#### Voice and Tone
- [ ] Messaging aligns with brand voice (describe: friendly, professional, etc.)
- [ ] Tone appropriate for context and audience
- [ ] Grammar and style match brand guidelines
- [ ] Terminology consistent (product names, features)
- [ ] No jargon unless brand-appropriate

#### Experience
- [ ] Interaction patterns consistent with brand
- [ ] Microcopy reflects brand personality
- [ ] Error messages on-brand
- [ ] Loading states and animations match brand
- [ ] Email and notification templates on-brand

### Brand Review Process

#### Project Kickoff
**Brand briefing:**
- Review brand guidelines with project team
- Identify any brand gray areas or questions
- Confirm brand stakeholder for questions
- Document any project-specific brand adaptations

#### Mid-Project Brand Check
**Internal review:**
- Design lead reviews work against brand guidelines
- Flag any inconsistencies
- Correct before client review

#### Pre-Delivery Brand Audit
**Final check:**
- Complete brand audit checklist
- Document any exceptions (with approval)
- Update brand guidelines if new patterns created

### Brand Guidelines Template
```markdown
# [Brand] Design Guidelines

## Brand Overview
- Mission: [statement]
- Values: [list]
- Personality: [adjectives]
- Voice: [description]

## Visual Identity

### Logo
- Primary logo: [file]
- Variations: [files]
- Clear space: [specifications]
- Minimum size: [specifications]
- Don'ts: [examples]

### Color
- Primary palette: [colors with hex/RGB]
- Secondary palette: [colors]
- Usage guidelines: [when to use what]
- Accessibility: [contrast requirements]

### Typography
- Primary font: [name, weights, usage]
- Secondary font: [name, weights, usage]
- Hierarchy: [H1-H6, body, caption specs]
- Web fonts: [implementation notes]

### Imagery
- Photography style: [description, examples]
- Illustration style: [description, examples]
- Icon style: [description, examples]
- Don'ts: [examples]

### Layout
- Grid system: [specifications]
- Spacing scale: [values]
- Breakpoints: [values]
- Templates: [links]

### Components
- Buttons: [styles, states]
- Forms: [styles, behaviors]
- Navigation: [patterns]
- Cards: [variations]
- [Additional components]

## Voice and Tone
- Brand voice: [description]
- Tone by context: [table]
- Writing guidelines: [do's and don'ts]
- Terminology: [glossary]

## Examples
- Good examples: [links/screenshots]
- Bad examples: [links/screenshots]

## Resources
- Design files: [Figma links]
- Asset library: [link]
- Contact: [brand team contact]
```

---

## 4. Usability Quality

**Ensuring designs are intuitive, efficient, and satisfying.**

### Usability Heuristics (Nielsen)

**Rate each on scale of 0-4 (0 = not a problem, 4 = catastrophe):**

1. **Visibility of system status**
   - [ ] Users always know what's happening
   - [ ] Appropriate feedback within reasonable time
   - Score: ___

2. **Match between system and real world**
   - [ ] Speaks users' language
   - [ ] Follows real-world conventions
   - [ ] Information appears in logical order
   - Score: ___

3. **User control and freedom**
   - [ ] Emergency exits clearly marked
   - [ ] Easy to undo actions
   - [ ] Easy to navigate without explanation
   - Score: ___

4. **Consistency and standards**
   - [ ] Follows platform conventions
   - [ ] Internal consistency
   - [ ] No unnecessary variation
   - Score: ___

5. **Error prevention**
   - [ ] Eliminates error-prone conditions
   - [ ] Confirms before committing
   - [ ] Constraints to prevent errors
   - Score: ___

6. **Recognition rather than recall**
   - [ ] Objects, actions, options visible
   - [ ] Instructions visible or easily retrievable
   - [ ] Minimal memory load
   - Score: ___

7. **Flexibility and efficiency of use**
   - [ ] Accelerators for expert users
   - [ ] Customization possible
   - [ ] Supports both novice and expert
   - Score: ___

8. **Aesthetic and minimalist design**
   - [ ] No irrelevant information
   - [ ] Every unit of information is relevant
   - [ ] Visual hierarchy clear
   - Score: ___

9. **Help users recognize, diagnose, recover from errors**
   - [ ] Error messages in plain language
   - [ ] Precisely indicates problem
   - [ ] Constructively suggests solution
   - Score: ___

10. **Help and documentation**
    - [ ] Easy to search
    - [ ] Focused on user's task
    - [ ] Concrete steps listed
    - [ ] Not too large
    - Score: ___

**Total Score: ___ / 40**
**Average: ___ / 4**
**Target: < 1.0 average (minor issues only)**

### Usability Metrics

#### Task Success Rate
```
Task Success Rate = (Number of successful tasks / Total tasks) × 100

Target: 85%+ for critical tasks
```

#### Time on Task
```
Measure: Time from task start to successful completion
Benchmark: Compare to previous version or competitor
Target: Decrease over iterations
```

#### Error Rate
```
Error Rate = (Number of errors / Total opportunities for error) × 100

Types:
- Slip: Accidental action
- Mistake: Wrong decision
- Error: System-caused

Target: < 5% for critical flows
```

#### System Usability Scale (SUS)
**10-question survey, 0-100 score:**

1. I think I would like to use this system frequently.
2. I found the system unnecessarily complex.
3. I thought the system was easy to use.
4. I think I would need technical support to use this system.
5. I found the various functions well integrated.
6. I thought there was too much inconsistency.
7. I would imagine most people would learn quickly.
8. I found the system very cumbersome to use.
9. I felt confident using the system.
10. I needed to learn a lot before I could use the system.

**Scoring:**
- Odd questions: Score - 1
- Even questions: 5 - Score
- Sum × 2.5 = SUS Score

**Target:** 68+ (average), 80+ (excellent)

#### Single Ease Question (SEQ)
After each task:
```
Overall, how difficult or easy was this task to complete?

1 (Very Difficult) - 7 (Very Easy)

Target: 5.5+ average
```

### Usability Review Cadence

| Phase | Review Type | Participants | Frequency |
|-------|-------------|--------------|-----------|
| Wireframes | Heuristic evaluation | 2-3 designers | Before mockups |
| Mockups | Internal usability review | Design team | Before prototype |
| Prototype | Usability testing | 5-8 users | Before handoff |
| Live product | Ongoing monitoring | Analytics + feedback | Monthly |

---

## 📋 Quality Scorecard

### Project Quality Scorecard
```markdown
# Quality Scorecard: [Project Name]

## Design Quality (0-10)
- Visual craft: ___
- Attention to detail: ___
- Consistency: ___
- Innovation: ___
**Subtotal: ___ / 40**

## Accessibility (0-10)
- WCAG compliance: ___
- Keyboard navigation: ___
- Screen reader support: ___
- Color contrast: ___
**Subtotal: ___ / 40**

## Brand Consistency (0-10)
- Visual identity: ___
- Voice and tone: ___
- Experience patterns: ___
- Guidelines adherence: ___
**Subtotal: ___ / 40**

## Usability (0-10)
- Task success rate: ___
- Time on task: ___
- Error rate: ___
- SUS score: ___
**Subtotal: ___ / 40**

## Total Score: ___ / 160
## Percentage: ___%

## Grade: [A/B/C/D/F]
- A: 90-100%
- B: 80-89%
- C: 70-79%
- D: 60-69%
- F: < 60%

## Areas of Excellence
- [Area 1]
- [Area 2]

## Areas for Improvement
- [Area 1]
- [Area 2]

## Action Items
- [ ] [Item 1]
- [ ] [Item 2]
```

---

## 🔧 Quality Tools

### Design Review
- Figma (comments, version history)
- Miro (feedback boards)
- Frame.io (for video/motion)

### Accessibility
- Stark (Figma plugin)
- axe DevTools (browser)
- WAVE (web evaluation)
- Color Contrast Analyzer
- NVDA, VoiceOver, JAWS (screen readers)

### Brand Management
- Figma Libraries
- Zeroheight (documentation)
- Frontify (brand platform)
- Bynder (asset management)

### Usability Testing
- UserTesting
- Maze
- Lookback
- Hotjar (session recording)
- Optimal Workshop (IA testing)

---

## 📊 Quality Metrics Dashboard

### Monthly Quality Report
```markdown
# Quality Report - [Month Year]

## Overview
- Projects reviewed: [N]
- Average quality score: [X]/160
- Projects scoring A: [N]
- Projects scoring below B: [N]

## Accessibility
- WCAG audits completed: [N]
- Average compliance: [X]%
- Critical issues found: [N]
- Critical issues resolved: [N]

## Usability Testing
- Tests conducted: [N]
- Average task success: [X]%
- Average SUS score: [X]
- Top friction points: [list]

## Client Satisfaction
- CSAT score: [X]/5
- NPS: [X]
- Repeat client rate: [X]%

## Team Quality Metrics
- Design review participation: [X]%
- Feedback implementation rate: [X]%
- Rework rate: [X]%

## Initiatives This Month
- [Initiative 1]
- [Initiative 2]

## Focus for Next Month
- [Focus 1]
- [Focus 2]
```

---

## 🎯 Quality Best Practices

### Do
✅ Build quality checkpoints into process
✅ Make reviews routine, not exceptional
✅ Use checklists for consistency
✅ Involve whole team in quality culture
✅ Measure and track quality over time
✅ Celebrate quality wins
✅ Learn from quality failures

### Don't
❌ Leave quality to the end
❌ Make one person responsible for all quality
❌ Skip reviews to save time (costs more later)
❌ Ignore accessibility (legal and ethical risk)
❌ Accept "good enough" when excellence is possible
❌ Blame individuals for systemic issues
❌ Measure quality only by client satisfaction

---

*Quality control guide updated Q1 2026. Implement gradually, build culture over time.*
