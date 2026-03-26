# User Onboarding Flow Guide

Design onboarding experiences that activate users and drive long-term retention.

---

## Onboarding Fundamentals

### The Onboarding Funnel
```
Sign Up → Account Setup → First Value → Habit Formation → Advocacy
   │           │              │              │              │
   ▼           ▼              ▼              ▼              ▼
 100%        60-80%        40-60%        20-40%        5-15%
```

### Key Metrics
| Metric | Definition | Target |
|--------|------------|--------|
| **Activation Rate** | % who reach AHA moment | 40-60% |
| **Time to Value** | Time to first value | < 5 min |
| **Day 1 Retention** | Return next day | 40-60% |
| **Day 7 Retention** | Return week later | 25-40% |
| **Day 30 Retention** | Return month later | 15-30% |

---

## Phase 1: Sign-Up Optimization

### Reduce Friction

#### What to Ask (Minimum)
- ✅ Email address
- ✅ Password (or SSO)
- ❌ Phone number (unless required)
- ❌ Company size (ask later)
- ❌ Use case (ask later)

#### Progressive Profiling
```
Sign Up          → Email + Password only
First Login      → Name + role
After First Action → Company info
Before Upgrade   → Payment details
```

### SSO Options
| Provider | Implementation | Conversion Lift |
|----------|----------------|-----------------|
| Google | 1-2 hours | +20-30% |
| Microsoft | 2-4 hours | +15-25% |
| GitHub | 1-2 hours | +10-20% (dev tools) |
| Apple | 2-4 hours | +10-15% (consumer) |

### Sign-Up Page Best Practices
- [ ] Clear value proposition
- [ ] Social proof (logos, user count)
- [ ] No navigation (focus on conversion)
- [ ] Password requirements visible
- [ ] Terms/privacy links
- [ ] Alternative: "Continue with Google"
- [ ] Mobile optimized

---

## Phase 2: First-Time User Experience

### The Welcome Sequence

#### Option A: Guided Tour
**Best for:** Complex products, multiple features

```
1. Welcome modal
2. Highlight key feature #1
3. Prompt to try it
4. Celebrate completion
5. Move to feature #2
6. Repeat 3-5 times max
```

**Tools:**
- Intro.js
- Shepherd.js
- Pendo
- Appcues

#### Option B: Empty State Guidance
**Best for:** Simple products, intuitive UIs

```
┌─────────────────────────────────┐
│  📭 No projects yet            │
│                                 │
│  Create your first project to  │
│  get started.                   │
│                                 │
│  [+ Create Project]             │
│                                 │
│  Or watch a 2-min tutorial →   │
└─────────────────────────────────┘
```

#### Option C: Checklist Onboarding
**Best for:** Products with clear setup steps

```
🎯 Get Started

☐ Create your first project
☐ Invite a team member
☐ Complete your profile
☐ Connect your calendar

[3/4 complete - 75%]
```

**Psychological triggers:**
- Progress bar (completion urge)
- Specific actions (clear next step)
- Celebration on completion

### Checklist Best Practices
1. **3-5 items max** - Don't overwhelm
2. **Easy first win** - Build momentum
3. **Value-focused** - Each item delivers value
4. **Progress visible** - Show completion %
5. **Celebration** - Confetti, message, badge

---

## Phase 3: Finding the AHA Moment

### What is an AHA Moment?
The moment when a user:
1. Experiences core value
2. Understands the product
3. Wants to keep using it

### Examples
| Product | AHA Moment |
|---------|------------|
| Slack | Send/receive first message |
| Dropbox | Install + see file sync |
| Zoom | Join first meeting |
| Canva | Create first design |
| Notion | Create first page with content |
| Figma | Create design + share link |

### How to Find Your AHA Moment

#### Step 1: Analyze Power Users
- What actions do they take in first session?
- What actions correlate with retention?
- What's the common path?

#### Step 2: Correlation Analysis
```
Action                    │ Correlation with Retention
──────────────────────────┼────────────────────────────
Created first project     │ 0.72
Invited team member       │ 0.65
Uploaded file             │ 0.58
Completed profile         │ 0.31
Viewed help docs          │ 0.15
```

#### Step 3: Validate with Surveys
Ask retained users:
- "When did you realize this product was valuable?"
- "What specific moment made you want to keep using it?"

### Optimize Time to AHA

| Current Time | Target | Strategy |
|--------------|--------|----------|
| > 10 min | < 5 min | Reduce steps |
| > 5 min | < 2 min | Pre-populate data |
| > 2 min | < 1 min | Template/demo data |
| > 1 min | < 30 sec | Instant value |

---

## Phase 4: Activation Strategies

### Email Onboarding Sequence

#### Day 0: Welcome (Immediate)
```
Subject: Welcome to [Product]! Here's how to get started

Hi [Name],

Thanks for joining [Product]! You're now part of [social proof].

Your next step: [Single clear action]

[CTA Button: Take Action]

Need help? Reply to this email or check our [Help Center].

Cheers,
The [Product] Team
```

#### Day 1: Value Reinforcement
```
Subject: Quick tip to get more from [Product]

Hi [Name],

Did you know you can [valuable feature]?

Here's how:
1. Step one
2. Step two
3. Done!

[CTA: Try It Now]

This is how [customer type] use [Product] to [outcome].
```

#### Day 3: Social Proof
```
Subject: How [Similar Company] uses [Product]

Hi [Name],

[Company] was struggling with [problem].

After using [Product], they [specific result].

Here's their story → [Case Study]

What will you achieve?
```

#### Day 7: Check-in
```
Subject: How's it going?

Hi [Name],

Just checking in! Have you had a chance to [key action]?

If you're stuck, I'm happy to help:
- [Link to tutorial]
- [Link to book a call]
- [Reply to this email]

Best,
[Founder/Support name]
```

#### Day 14: Last Attempt
```
Subject: Last chance to explore [Product]

Hi [Name],

Not sure if [Product] is right for you?

Here's what you might be missing:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

Or we can help you get set up: [Book a Demo]

No pressure either way!
```

### In-App Messaging

#### Triggers for Messages
| Trigger | Message Type | Goal |
|---------|--------------|------|
| First login | Welcome modal | Orient user |
| Feature discovery | Tooltip | Drive adoption |
| Stuck/abandoned | Help prompt | Reduce friction |
| Milestone reached | Celebration | Reinforce behavior |
| Inactive 3 days | Re-engagement | Bring back |

#### Message Best Practices
- Keep it short (1-2 sentences)
- Single clear action
- Easy to dismiss
- Don't interrupt flow
- Test timing carefully

---

## Phase 5: Retention Strategies

### Retention by Cohort

Track retention by:
- Sign-up date (weekly cohorts)
- Acquisition channel
- Plan type
- User segment

```
Cohort: Week of Jan 1
Day 1:  100% ████████████████████
Day 7:   45% █████████
Day 14:  35% ███████
Day 30:  28% ██████
Day 60:  22% ████
Day 90:  18% ███
```

### Retention Tactics

#### 1. Habit Formation
- Daily/weekly value delivery
- Notifications (not spam)
- Streaks and gamification
- Regular new content/features

#### 2. Ongoing Education
- Weekly tips email
- In-app feature highlights
- Webinars/workshops
- Knowledge base articles

#### 3. Success Milestones
```
🏆 First Project Created
🏆 First Team Member Invited
🏆 10 Projects Milestone
🏆 Power User (30-day streak)
🏆 Advocate (5 referrals)
```

#### 4. Proactive Support
- Monitor usage patterns
- Reach out before churn signals
- Offer help, not sales
- Celebrate their wins

### Churn Signals

| Signal | Risk Level | Action |
|--------|------------|--------|
| No login 7 days | Medium | Email re-engagement |
| No login 14 days | High | Personal outreach |
| Usage declining | Medium | Check-in + offer help |
| Support ticket unresolved | High | Escalate immediately |
| Downgrade request | High | Retention offer |
| Cancellation initiated | Critical | Save flow |

---

## Onboarding Templates

### Template 1: B2B SaaS (High-Touch)

```
Day 0:  Welcome email + calendar invite for onboarding call
Day 1:  Onboarding call (30 min)
Day 2:  Recap email + action items
Day 3:  Check-in: "How's setup going?"
Day 7:  First value check + offer additional help
Day 14: Success review + expansion conversation
Day 30: QBR (Quarterly Business Review)
```

### Template 2: PLG SaaS (Self-Serve)

```
Day 0:  Welcome email + getting started guide
Day 1:  Tip: Complete your profile
Day 2:  Tip: Invite your team
Day 3:  Case study: How [company] succeeded
Day 5:  Feature highlight: Did you know...?
Day 7:  Check-in: Need help?
Day 14: Upgrade nudge (if using free tier)
Day 30: Success story + feature roundup
```

### Template 3: Freemium Consumer

```
Day 0:  Welcome + AHA moment guidance
Day 1:  Quick win tutorial
Day 3:  Social proof: Join X users
Day 7:  Premium feature teaser
Day 14: Limited-time upgrade offer
Day 21: Last chance offer
Day 30: Win-back campaign
```

---

## Onboarding Metrics Dashboard

### Daily Tracking
| Metric | Target | Status |
|--------|--------|--------|
| New signups | - | - |
| Activation rate | 40%+ | 🟡 |
| Time to AHA | < 5 min | 🟢 |
| Day 1 retention | 50%+ | 🟢 |

### Weekly Tracking
| Metric | Target | Trend |
|--------|--------|-------|
| Week 1 retention | 30%+ | ↗️ |
| Feature adoption | 60%+ | → |
| Support tickets | < 5% of users | ↘️ |
| NPS (new users) | 30+ | ↗️ |

### Monthly Tracking
| Metric | Target | Actual |
|--------|--------|--------|
| Month 1 retention | 25%+ | - |
| Free → Paid | 3%+ | - |
| Expansion MRR | 5%+ | - |
| Churn rate | < 5% | - |

---

## Onboarding Tools

### Analytics
| Tool | Best For | Price |
|------|----------|-------|
| Mixpanel | Event tracking | Free-$500/mo |
| Amplitude | Product analytics | Free-$1K/mo |
| PostHog | Open source, all-in-one | Free-$500/mo |
| Heap | Auto-capture events | Custom |

### Onboarding Platforms
| Tool | Best For | Price |
|------|----------|-------|
| Appcues | No-code onboarding | $249+/mo |
| Pendo | Enterprise onboarding | Custom |
| Userpilot | Product growth | $299+/mo |
| Intercom | Messaging + support | $74+/mo |

### Email
| Tool | Best For | Price |
|------|----------|-------|
| Customer.io | Behavioral emails | $150+/mo |
| SendGrid | Transactional | Free-$90/mo |
| Resend | Developer-friendly | Free-$25/mo |
| Mailchimp | General purpose | Free-$20/mo |

### Session Recording
| Tool | Best For | Price |
|------|----------|-------|
| Hotjar | Heatmaps + recordings | Free-$80/mo |
| FullStory | Full session replay | Custom |
| LogRocket | Dev-focused | $99+/mo |

---

## A/B Testing Onboarding

### What to Test
1. **Sign-up flow**
   - Email only vs. SSO
   - Number of fields
   - Copy/messaging

2. **First-time experience**
   - Tour vs. checklist vs. empty state
   - Number of steps
   - Copy/tone

3. **Email sequence**
   - Send times
   - Subject lines
   - CTAs
   - Number of emails

4. **In-app messages**
   - Timing
   - Copy
   - Design
   - Triggers

### Testing Framework
```
Hypothesis: [Change] will improve [metric] by [X]%

Test: A (control) vs. B (variant)

Sample size: [Calculate based on baseline]

Duration: [Minimum 1 week, until significance]

Success criteria: [Specific metric improvement]

Result: [Win/Loss/Inconclusive]

Learnings: [What we discovered]
```

---

## Common Onboarding Mistakes

### ❌ Too Many Steps
**Problem:** Users drop off before reaching value
**Fix:** Reduce to 3-5 essential steps

### ❌ No Clear Next Action
**Problem:** Users don't know what to do
**Fix:** Single, obvious CTA at each step

### ❌ Feature Dump
**Problem:** Overwhelming users with all features
**Fix:** Reveal features progressively

### ❌ Ignoring Segments
**Problem:** One-size-fits-all onboarding
**Fix:** Segment by role, use case, behavior

### ❌ No Follow-Up
**Problem:** Users get stuck and churn
**Fix:** Automated check-ins + human outreach

### ❌ Measuring Wrong Metrics
**Problem:** Optimizing for signups, not activation
**Fix:** Focus on activation and retention

---

## Onboarding Checklist

### Pre-Launch
- [ ] Sign-up flow tested and optimized
- [ ] Welcome email sequence ready
- [ ] In-app onboarding built
- [ ] Analytics tracking implemented
- [ ] AHA moment defined and measured
- [ ] Support resources available
- [ ] Team trained on onboarding process

### Post-Launch
- [ ] Daily activation rate monitoring
- [ ] Weekly retention analysis
- [ ] User feedback collection
- [ ] A/B testing roadmap
- [ ] Onboarding iteration schedule
- [ ] Churn analysis and intervention

---

*Guide Version: 1.0 | Last Updated: 2026*
