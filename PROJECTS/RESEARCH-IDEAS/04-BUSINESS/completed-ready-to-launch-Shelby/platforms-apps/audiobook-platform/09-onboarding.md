# 9. Author Onboarding

## Overview

The Author Onboarding process guides new authors through every step of creating their audiobook, from manuscript preparation to final distribution. This comprehensive guide ensures authors understand the process, feel supported, and achieve the best possible results.

---

## Onboarding Journey

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    AUTHOR ONBOARDING JOURNEY                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  PHASE 1          PHASE 2          PHASE 3          PHASE 4             │
│  ───────          ───────          ───────          ───────             │
│  DISCOVER         PREPARE          PRODUCE          LAUNCH              │
│                                                                          │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐           │
│  │ Learn   │     │ Upload  │     │ Review  │     │ Publish │           │
│  │ about   │     │ Manuscript│   │ & Approve│    │ &       │           │
│  │ process │     │ Select  │     │ Quality │     │ Promote │           │
│  │         │     │ Voice   │     │ Check   │     │         │           │
│  └─────────┘     └─────────┘     └─────────┘     └─────────┘           │
│       ↓               ↓               ↓               ↓                 │
│  1-2 days        1-3 days        3-7 days        1-2 days              │
│                                                                          │
│  TOTAL ONBOARDING TIME: 7-14 days (varies by author readiness)          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Discovery (Days 1-2)

### Welcome Sequence

```typescript
interface WelcomeSequence {
  // Email 1: Immediate (upon signup)
  email1: {
    timing: 'Immediately after signup';
    subject: 'Welcome to NarrateAI! Here\'s what happens next 🎧';
    content: [
      'Welcome message',
      'Overview of the process',
      'Link to getting started guide',
      'Schedule onboarding call CTA'
    ];
  };
  
  // Email 2: Day 1
  email2: {
    timing: '24 hours after signup';
    subject: 'Your audiobook journey starts here';
    content: [
      'Manuscript preparation checklist',
      'Voice selection guide',
      'Pricing calculator link',
      'FAQ highlights'
    ];
  };
  
  // Email 3: Day 3
  email3: {
    timing: '72 hours after signup';
    subject: 'Need help getting started?';
    content: [
      'Check-in message',
      'Offer onboarding call',
      'Link to sample audiobooks',
      'Success stories'
    ];
  };
}
```

### Getting Started Guide

```markdown
# Getting Started with NarrateAI

## Welcome! 👋

You're about to transform your book into a professional audiobook. Here's what to expect:

### The Process (at a glance)

1. **Upload** your manuscript (5 minutes)
2. **Choose** your narrator voice (10 minutes)
3. **Review** AI-generated samples (15 minutes)
4. **Approve** and we produce (we handle the rest!)
5. **Distribute** to all major platforms

### What You'll Need

✅ Your manuscript (Word, PDF, or EPUB)
✅ Cover art (3000x3000 pixels)
✅ Book metadata (title, author, description, etc.)
✅ Payment method or revenue share agreement

### Timeline

| Stage | Duration |
|-------|----------|
| Setup & Voice Selection | 1-2 days |
| Production | 3-5 days |
| Quality Check | 1-2 days |
| Distribution | 2-5 days |
| **Total** | **7-14 days** |

### Next Steps

1. [ ] Complete your profile
2. [ ] Upload your manuscript
3. [ ] Schedule your onboarding call (optional but recommended!)

**Questions?** Reply to this email or book a call: [Calendar Link]

Let's make your audiobook amazing!
- The NarrateAI Team
```

### Onboarding Call Script

```markdown
# ONBOARDING CALL SCRIPT (30 minutes)

## Introduction (5 min)
- Welcome and introductions
- Author's background and book
- Goals for the audiobook

## Process Overview (10 min)
- Walk through the 5-step process
- Explain voice selection
- Discuss timeline expectations
- Review pricing options

## Manuscript Review (5 min)
- Confirm manuscript is ready
- Discuss any special considerations
- Identify potential challenges

## Voice Selection (5 min)
- Play 2-3 recommended voice samples
- Get author's preference
- Discuss any custom requirements

## Next Steps (5 min)
- Confirm action items
- Set expectations for communication
- Schedule follow-up if needed
- Answer final questions

## Call Checklist
- [ ] Author understands the process
- [ ] Manuscript is ready (or know what's needed)
- [ ] Voice selected or direction given
- [ ] Pricing model chosen
- [ ] Timeline confirmed
- [ ] Contact preferences established
```

---

## Phase 2: Preparation (Days 2-5)

### Manuscript Preparation Checklist

```markdown
## Manuscript Preparation Checklist

### Before Uploading

**File Format**
- [ ] Save as .docx, .pdf, or .epub
- [ ] Ensure file is under 50 MB
- [ ] Remove any tracked changes or comments
- [ ] Check that all text is selectable (not scanned images)

**Content Review**
- [ ] Final proofread complete
- [ ] All chapters properly titled
- [ ] Front matter organized (copyright, dedication, etc.)
- [ ] Back matter organized (about author, also by, etc.)
- [ ] Any special formatting noted (poetry, letters, etc.)

**Special Considerations**
- [ ] List of character names with pronunciations
- [ ] Foreign words/phrases identified
- [ ] Technical terms noted
- [ ] Place names with unusual pronunciations
- [ ] Any content that needs special handling

**Metadata Ready**
- [ ] Final title and subtitle
- [ ] Author name (as it should appear)
- [ ] Book description (for retailers)
- [ ] Genre/categories
- [ ] Target audience
- [ ] Series information (if applicable)
- [ ] ISBN (if you have one)
- [ ] Copyright year
- [ ] Publisher name (if self-publishing, your name/imprint)
```

### Manuscript Upload Guide

```markdown
## How to Upload Your Manuscript

### Step 1: Go to Your Dashboard
Log in to your NarrateAI account and click "New Project"

### Step 2: Enter Book Details
- Title
- Author name
- Genre
- Language
- Expected word count

### Step 3: Upload File
- Drag and drop or click to browse
- Supported formats: .docx, .pdf, .epub, .txt
- Max file size: 50 MB

### Step 4: Wait for Processing
- Our system will analyze your manuscript (usually < 1 minute)
- Chapters will be automatically detected
- You'll see a preview

### Step 5: Review Chapter Detection
- Check that all chapters were detected correctly
- Adjust chapter boundaries if needed
- Mark any sections to skip (acknowledgments, etc.)

### Step 6: Add Pronunciation Guide
- Add any special pronunciations
- Character names
- Foreign words
- Made-up words (fantasy/sci-fi)

### Step 7: Confirm and Continue
- Review the summary
- Click "Continue to Voice Selection"

**Need Help?**
- Watch our video tutorial: [Link]
- Chat support: Available 9 AM - 9 PM EST
- Email: support@narrateai.com
```

### Voice Selection Guide

```markdown
## Choosing the Perfect Voice

### Step 1: Consider Your Book

**Genre Match**
- Literary Fiction → Warm, nuanced voices
- Thriller → Tense, dramatic voices
- Romance → Smooth, emotional voices
- Fantasy → Versatile, imaginative voices
- Non-Fiction → Clear, authoritative voices
- Young Adult → Energetic, relatable voices

**Character Demographics**
- Protagonist age and gender
- Setting and regional accents
- Time period (historical vs. contemporary)

**Tone**
- Serious vs. lighthearted
- Intimate vs. epic
- Fast-paced vs. contemplative

### Step 2: Listen to Samples

We recommend listening to at least 3 voices. For each:

1. Play the demo sample
2. Generate a custom sample from YOUR book (free!)
3. Listen with headphones for best quality
4. Take notes on what you like/dislike

### Step 3: Compare Finalists

Use our comparison tool to listen to the same passage in different voices:

[Voice A] vs. [Voice B] vs. [Voice C]

### Step 4: Make Your Selection

Consider:
- Which voice feels most natural for the story?
- Which voice can you listen to for 10+ hours?
- Which voice brings your characters to life?

**Pro Tip:** If you're unsure, ask beta readers or your email list to vote!

### Step 5: Confirm and Proceed

Once you've selected your voice:
- Review the pricing estimate
- Choose your payment model (PFH, Subscription, or Revenue Share)
- Click "Begin Production"
```

### Voice Recommendation Engine

```typescript
interface VoiceRecommendation {
  // Input from manuscript analysis
  manuscriptProfile: {
    genre: string;
    tone: 'serious' | 'lighthearted' | 'mixed';
    pacing: 'slow' | 'moderate' | 'fast';
    protagonistGender?: 'male' | 'female' | 'multiple';
    protagonistAge?: 'young' | 'adult' | 'mature';
    setting: string;
    complexity: 'simple' | 'moderate' | 'complex';
    multiPOV: boolean;
  };
  
  // Recommended voices with reasoning
  recommendations: Array<{
    voiceId: string;
    voiceName: string;
    matchScore: number;  // 0-100
    reasons: string[];
    sampleUrl: string;
    pricePerHour: number;
    availability: 'available' | 'busy' | 'booking';
  }>;
  
  // Comparison suggestions
  comparisonSet: string[];  // 3 voice IDs to compare
}
```

**Example Recommendation:**
```
Based on your manuscript analysis:

📖 Genre: Fantasy
🎭 Tone: Epic with intimate moments
👤 Protagonist: Female, young adult
🌍 Setting: Secondary world with British influences

TOP RECOMMENDATIONS:

1. **Aria** (Match: 94%)
   - Specializes in Fantasy/Sci-Fi
   - Excellent character differentiation
   - Warm, engaging tone
   - Sample: [Listen]

2. **Eleanor** (Match: 89%)
   - British RP accent matches setting
   - Literary fiction expertise
   - Rich, nuanced delivery
   - Sample: [Listen]

3. **Cora** (Match: 87%)
   - Irish accent adds uniqueness
   - Strong with fantasy names
   - Energetic but controlled
   - Sample: [Listen]

We recommend comparing these three voices with your custom sample.
```

---

## Phase 3: Production (Days 5-12)

### Production Status Updates

```typescript
interface ProductionUpdates {
  // Update 1: Production Started
  update1: {
    timing: 'When production begins';
    subject: 'Production has started! 🎙️';
    content: [
      'Voice talent has been assigned',
      'Estimated completion date',
      'What happens during production',
      'When to expect first preview'
    ];
  };
  
  // Update 2: First Chapter Ready
  update2: {
    timing: 'When first chapter is ready for review';
    subject: 'Your first chapter is ready for review!';
    content: [
      'Link to review Chapter 1',
      'What to listen for',
      'How to request changes',
      'Timeline for remaining chapters'
    ];
  };
  
  // Update 3: Production Complete
  update3: {
    timing: 'When all chapters are complete';
    subject: 'Production complete! Time for final review 🎉';
    content: [
      'All chapters ready for review',
      'Link to full preview',
      'QC report summary',
      'Next steps to approval'
    ];
  };
}
```

### Review Guidelines for Authors

```markdown
## How to Review Your Audiobook

### What to Listen For

**Pronunciation**
- [ ] Character names sound correct
- [ ] Place names are right
- [ ] Foreign words are accurate
- [ ] Technical terms pronounced properly

**Pacing**
- [ ] Not too fast or slow
- [ ] Pauses feel natural
- [ ] Scene transitions work
- [ ] Chapter breaks are clear

**Performance**
- [ ] Emotion matches the scene
- [ ] Character voices are consistent
- [ ] Dialogue sounds natural
- [ ] Narration is engaging

**Technical Quality**
- [ ] No strange audio artifacts
- [ ] Volume is consistent
- [ ] No background noise
- [ ] Smooth throughout

### How to Request Changes

1. **Note the timestamp** (e.g., "Chapter 3, 4:32")
2. **Describe the issue** (e.g., "Mispronounced 'Cthulhu'")
3. **Provide correction** (e.g., "Should be 'kuh-THOOL-hoo'")
4. **Submit through the platform** (don't email!)

### Common Changes

| Issue | Example | How to Fix |
|-------|---------|------------|
| Mispronunciation | "Seán" as "Shawn" | Add to pronunciation guide |
| Pacing too fast | Action scene rushed | Request slower rate |
| Wrong emphasis | "I didn't say YOU left" | Mark word for emphasis |
| Emotion off | Sad scene sounds neutral | Add emotion marker |

### Approval Checklist

Before approving:
- [ ] Listened to all chapters (or spot-checked thoroughly)
- [ ] All pronunciation issues resolved
- [ ] Happy with pacing and performance
- [ ] Technical quality is good
- [ ] Ready for distribution

**Remember:** You get 2 rounds of revisions included. Additional revisions may incur fees.
```

### Quality Control Report (Author-Facing)

```markdown
# Quality Control Report

## Book: [Title]
## Date: [Date]
## Overall Score: 95/100 ✅

---

## Summary

| Category | Score | Status |
|----------|-------|--------|
| Pronunciation | 98% | ✅ Excellent |
| Pacing | 94% | ✅ Good |
| Audio Quality | 97% | ✅ Excellent |
| Consistency | 95% | ✅ Good |
| Platform Compliance | 100% | ✅ Perfect |

---

## Issues Found & Resolved

### Critical Issues: 0 ✅
No critical issues found.

### Major Issues: 2 (Both Resolved) ✅
1. **Chapter 3, 12:45** - Mispronounced "Eldoria"
   - **Status:** Resolved
   - **Fix:** Added to pronunciation dictionary

2. **Chapter 7, 8:22** - Pacing too fast in action scene
   - **Status:** Resolved  
   - **Fix:** Adjusted rate to 0.85x for that section

### Minor Issues: 3 (All Resolved) ✅
1. **Chapter 2, 5:10** - Slight mouth click
2. **Chapter 5, 15:33** - Pause slightly short
3. **Chapter 9, 3:45** - Inconsistent character voice

---

## Platform Compliance

| Platform | Status | Notes |
|----------|--------|-------|
| ACX/Audible | ✅ Pass | All requirements met |
| Apple Books | ✅ Pass | All requirements met |
| Spotify | ✅ Pass | All requirements met |
| Findaway | ✅ Pass | All requirements met |

---

## Next Steps

1. Review the full audiobook preview: [Link]
2. Approve for distribution (or request final changes)
3. Complete distribution setup
4. Launch!

---

**Questions?** Reply to this email or contact your production specialist.
```

---

## Phase 4: Launch (Days 12-14)

### Distribution Setup Checklist

```markdown
## Distribution Setup Checklist

### Platform Selection
- [ ] Audible/ACX (required for Amazon)
- [ ] Apple Books/iTunes
- [ ] Spotify
- [ ] Google Play
- [ ] Kobo
- [ ] Findaway (for wide distribution)
- [ ] Other: _____________

### Metadata Complete
- [ ] Title and subtitle
- [ ] Author name
- [ ] Narrator name
- [ ] Publisher name
- [ ] Publication date
- [ ] Language
- [ ] Description (4000 characters max)
- [ ] Genre/categories (BISAC codes)
- [ ] Keywords
- [ ] Series information (if applicable)
- [ ] Content warnings (if applicable)

### Assets Ready
- [ ] Cover art (3000x3000 pixels, JPEG)
- [ ] Author photo (for some platforms)
- [ ] Audiobook samples (30-60 seconds)
- [ ] Trailer video (optional)

### Pricing Set
- [ ] Retail price determined
- [ ] Library price determined (if applicable)
- [ ] Promotional pricing planned (optional)
- [ ] Pre-order enabled (if applicable)

### Rights & Legal
- [ ] Rights ownership confirmed
- [ ] ISBN assigned (if using)
- [ ] Copyright registration (if applicable)
- [ ] Music licenses (if used)

### Marketing Ready
- [ ] Launch email sequence scheduled
- [ ] Social media posts prepared
- [ ] Review copies distributed
- [ ] Press release ready (if applicable)
- [ ] Advertising campaigns set up (if applicable)
```

### Launch Day Checklist

```markdown
## LAUNCH DAY CHECKLIST

### Morning (Before 9 AM)
- [ ] Confirm all platforms show "live"
- [ ] Test all purchase links
- [ ] Verify sample audio plays correctly
- [ ] Check that metadata displays properly

### Launch Announcement (9-10 AM)
- [ ] Send launch email to list
- [ ] Post on all social media channels
- [ ] Update website with "Out Now"
- [ ] Notify street team/ARC readers

### Mid-Day (12-2 PM)
- [ ] Monitor sales dashboard
- [ ] Respond to early reviews/comments
- [ ] Share any early wins on social
- [ ] Check in with any launch partners

### Afternoon (3-5 PM)
- [ ] Send thank you message to supporters
- [ ] Share behind-the-scenes content
- [ ] Engage with reader comments
- [ ] Monitor for any technical issues

### Evening (6-8 PM)
- [ ] Post launch day recap
- [ ] Thank everyone who helped
- [ ] Note any milestones reached
- [ ] Prepare for Day 2 follow-up

### Throughout the Day
- [ ] Monitor social media mentions
- [ ] Respond to messages promptly
- [ ] Track sales/revenue
- [ ] Screenshot any nice reviews/messages
```

### Post-Launch Support

```typescript
interface PostLaunchSupport {
  // Week 1
  week1: {
    dailyCheckIns: true;
    salesReporting: 'Daily';
    issueResponse: 'Within 4 hours';
    reviewMonitoring: true;
  };
  
  // Week 2-4
  weeks2to4: {
    weeklyCheckIns: true;
    salesReporting: 'Weekly';
    issueResponse: 'Within 24 hours';
    reviewMonitoring: true;
  };
  
  // Ongoing
  ongoing: {
    monthlyReporting: true;
    quarterlyStrategyReview: true;
    promotionalSupport: 'As needed';
    platformIssueSupport: true;
  };
  
  // Resources available
  resources: [
    'Sales dashboard access',
    'Review monitoring tools',
    'Promotional asset library',
    'Marketing templates',
    'Best practices guide',
    'Community forum access'
  ];
}
```

---

## Onboarding Metrics

### Success Metrics

```typescript
interface OnboardingMetrics {
  // Completion rates
  completionRates: {
    signupToUpload: number;      // Target: 80%
    uploadToVoiceSelection: number; // Target: 90%
    voiceSelectionToProduction: number; // Target: 95%
    productionToLaunch: number;  // Target: 98%
    overallCompletion: number;   // Target: 70%
  };
  
  // Time metrics
  timeMetrics: {
    averageOnboardingDays: number;  // Target: 10 days
    fastestOnboarding: number;      // Target: 5 days
    manuscriptPrepTime: number;     // Target: 2 days
    voiceSelectionTime: number;     // Target: 1 day
  };
  
  // Satisfaction
  satisfaction: {
    npsScore: number;         // Target: 70+
    supportRating: number;    // Target: 4.8/5
    processClarity: number;   // Target: 4.7/5
    wouldRecommend: number;   // Target: 90%
  };
  
  // Quality
  quality: {
    firstPassApprovalRate: number;  // Target: 85%
    revisionRounds: number;         // Target: 1.2 average
    platformRejectionRate: number;  // Target: <2%
  };
}
```

### Onboarding Feedback Survey

```markdown
## Onboarding Experience Survey

**Please rate your onboarding experience:**

### Process Clarity
1. How clear was the onboarding process?
   ⚪ Very Clear ⚪ Clear ⚪ Neutral ⚪ Unclear ⚪ Very Unclear

2. Did you feel supported throughout?
   ⚪ Yes, very much ⚪ Somewhat ⚪ Neutral ⚪ Not really ⚪ Not at all

### Timeline
3. Was the timeline as expected?
   ⚪ Faster than expected ⚪ As expected ⚪ Slower than expected

4. How would you rate the communication?
   ⚪ Excellent ⚪ Good ⚪ Average ⚪ Below Average ⚪ Poor

### Support
5. Did you use any of these support resources? (Select all)
   ☐ Getting started guide
   ☐ Video tutorials
   ☐ Onboarding call
   ☐ Chat support
   ☐ Email support
   ☐ None

6. How helpful was the support you received?
   ⚪ Very Helpful ⚪ Helpful ⚪ Neutral ⚪ Not Helpful ⚪ N/A

### Overall
7. How likely are you to recommend NarrateAI to other authors?
   ⚪ 10 ⚪ 9 ⚪ 8 ⚪ 7 ⚪ 6 ⚪ 5 ⚪ 4 ⚪ 3 ⚪ 2 ⚪ 1 ⚪ 0

8. What was the best part of your onboarding experience?
   [Open text]

9. What could we improve?
   [Open text]

10. Any other feedback?
    [Open text]

---
Thank you for your feedback! It helps us serve authors better.
```

---

## Self-Service Resources

### Knowledge Base Categories

```
📚 Knowledge Base

├── Getting Started
│   ├── What is NarrateAI?
│   ├── How it works
│   ├── Pricing explained
│   └── FAQ
│
├── Manuscript Prep
│   ├── File formats
│   ├── Chapter detection
│   ├── Pronunciation guide
│   └── Common issues
│
├── Voice Selection
│   ├── Voice library tour
│   ├── How to choose
│   ├── Custom samples
│   └── Multi-voice productions
│
├── Production
│   ├── What to expect
│   ├── Review process
│   ├── Requesting changes
│   └── Quality standards
│
├── Distribution
│   ├── Platform overview
│   ├── Metadata guide
│   ├── ISBN info
│   └── Release strategy
│
├── Marketing
│   ├── Launch checklist
│   ├── Social media templates
│   ├── Email templates
│   └── Paid advertising
│
└── Account & Billing
    ├── Payment methods
    ├── Revenue share explained
    ├── Tax forms
    └── Account settings
```

### Video Tutorial Library

```markdown
## Video Tutorial Library

### Getting Started (5 videos)
1. Welcome to NarrateAI (2 min)
2. How the process works (4 min)
3. Pricing options explained (5 min)
4. Setting up your account (3 min)
5. Scheduling your onboarding call (2 min)

### Manuscript Upload (4 videos)
1. Preparing your manuscript (6 min)
2. Uploading your file (3 min)
3. Reviewing chapter detection (4 min)
4. Creating a pronunciation guide (5 min)

### Voice Selection (4 videos)
1. Browsing the voice library (4 min)
2. Generating custom samples (3 min)
3. Comparing voices (4 min)
4. Making your final choice (3 min)

### Review & Approval (3 videos)
1. How to review your audiobook (5 min)
2. Requesting changes (4 min)
3. Approving for distribution (3 min)

### Distribution (4 videos)
1. Distribution options (5 min)
2. Setting up metadata (6 min)
3. Pricing your audiobook (4 min)
4. Launch day checklist (5 min)

### Marketing (5 videos)
1. Creating a launch plan (7 min)
2. Social media marketing (6 min)
3. Email marketing (5 min)
4. Getting reviews (5 min)
5. Paid advertising basics (8 min)

**Total Library:** 25 videos, ~120 minutes
```

---

## Onboarding Team

### Team Structure

```typescript
interface OnboardingTeam {
  // Roles
  roles: {
    onboardingSpecialist: {
      count: 1;
      responsibilities: [
        'Initial welcome and orientation',
        'Onboarding calls',
        'Process guidance',
        'Issue escalation'
      ];
      caseload: '30-40 active authors';
    };
    
    productionSpecialist: {
      count: 1;
      responsibilities: [
        'Manuscript review',
        'Voice selection assistance',
        'Production oversight',
        'Quality assurance'
      ];
      caseload: '50-60 active productions';
    };
    
    distributionSpecialist: {
      count: 1;
      responsibilities: [
        'Platform setup',
        'Metadata review',
        'Launch coordination',
        'Post-launch support'
      ];
      caseload: '40-50 launches';
    };
    
    supportAgent: {
      count: 2;
      responsibilities: [
        'Chat support',
        'Email support',
        'Basic troubleshooting',
        'FAQ management'
      ];
      caseload: '100+ tickets/week';
    };
  };
  
  // Availability
  availability: {
    chat: '9 AM - 9 PM EST, 7 days';
    email: '24 hour response time';
    phone: 'By appointment';
    emergency: 'Production issues only';
  };
}
```

---

*Version: 1.0.0 | Last Updated: March 2026*
