# MindfulAI - Clinical Safety Protocols

**Version:** 1.0  
**Classification:** Internal - Clinical Team  
**Review:** Quarterly by Clinical Advisory Board

---

## 1. Crisis Response Framework

### 1.1 Crisis Level Definitions

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CRISIS SEVERITY LEVELS                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  LEVEL 1: NORMAL SUPPORT                                             │
│  Risk Score: 0-30                                                    │
│  Indicators: General stress, everyday challenges                     │
│  Response: Standard empathetic conversation, coping techniques       │
│  Escalation: None required                                           │
│                                                                      │
│  LEVEL 2: ELEVATED CONCERN                                           │
│  Risk Score: 31-60                                                   │
│  Indicators: Significant distress, hopelessness themes,              │
│              increased frequency of difficult conversations          │
│  Response: Enhanced validation, gentle resource suggestions,         │
│            increased monitoring                                      │
│  Escalation: Flag for daily safety review                            │
│                                                                      │
│  LEVEL 3: HIGH RISK                                                  │
│  Risk Score: 61-80                                                   │
│  Indicators: Passive suicidal ideation, self-harm mentions,          │
│              severe depression markers, social withdrawal            │
│  Response: Crisis resources prominently displayed,                   │
│            encourage professional support, safety planning           │
│  Escalation: Human safety review within 2 hours                      │
│                                                                      │
│  LEVEL 4: CRITICAL/IMMEDIATE                                         │
│  Risk Score: 81-100                                                  │
│  Indicators: Active suicidal ideation with intent/plan,              │
│              imminent self-harm, psychosis indicators,               │
│              violence toward others                                  │
│  Response: Crisis overlay, emergency resources,                      │
│            human escalation offered immediately                      │
│  Escalation: Immediate human contact attempt (< 15 minutes)          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.2 Keyword Detection List

**CRITICAL Keywords (Auto-Level 4):**
```
suicide | kill myself | end my life | want to die | no reason to live |
going to kill | suicide plan | overdose | end it all | wont be here |
last day | saying goodbye | suicide note | jump off | hang myself |
shoot myself | cut my wrists | bleed out | take pills to die
```

**HIGH RISK Keywords (Auto-Level 3):**
```
self harm | cut myself | burning | hurt myself | suicidal thoughts |
want to disappear | wish I was dead | better off dead | life not worth |
cant go on | give up | end the pain | make it stop | dont want to wake
```

**ELEVATED Keywords (Auto-Level 2):**
```
hopeless | worthless | burden | everyone hates | alone forever |
nothing matters | empty | numb | cant take anymore | breaking point |
desperate | trapped | no way out | dark place | losing control
```

### 1.3 Crisis Response Scripts

**Level 4 - Critical Response:**
```
⚠️ IMMEDIATE SUPPORT MESSAGE ⚠️

I hear that you're in serious pain right now, and I'm deeply concerned 
about your safety. Your life matters, and you deserve support.

I'm an AI companion, and I want to make sure you get the best help 
possible right now.

🚨 IMMEDIATE HELP:

If you're in immediate danger, please call emergency services:
• US/Canada: 911
• UK: 999 or 112
• EU: 112
• Australia: 000

Crisis Support (24/7, Free, Confidential):
• US: Call or text 988 (Suicide & Crisis Lifeline)
• US: Text HOME to 741741 (Crisis Text Line)
• UK: Call 116 123 (Samaritans)
• International: Find local resources at findahelpline.com

You don't have to go through this alone. Would you like me to:
1. Stay with you while you contact a crisis line?
2. Help you reach out to someone you trust?
3. Find a therapist in your area?

I'm here with you. You matter.
```

**Level 3 - High Risk Response:**
```
I can hear how much pain you're in right now. What you're going through 
sounds incredibly difficult, and it makes sense that you're struggling.

I want to make sure you have support. While I'm here to listen, connecting 
with a trained professional could really help.

💙 Support Available:

Crisis & Support Lines:
• 988 Suicide & Crisis Lifeline (US) - Call or text anytime
• Crisis Text Line - Text HOME to 741741
• [Local resources based on user location]

Would any of these feel helpful right now?

I'm also here to listen if you want to talk about what's been going on. 
You don't have to carry this alone.
```

**Level 2 - Elevated Concern Response:**
```
Thank you for sharing this with me. It sounds like things have been 
really tough lately, and I appreciate your trust.

I want you to know that support is available, and reaching out is a sign 
of strength, not weakness.

If you ever feel overwhelmed, these resources are available:
• 988 Suicide & Crisis Lifeline: 988 (US, 24/7)
• Crisis Text Line: Text HOME to 741741
• Your healthcare provider
• A trusted friend or family member

Would you like to talk more about what's been going on? Or would a 
calming exercise be helpful right now?
```

### 1.4 Human Escalation Protocol

**Therapy Connect Escalation Flow:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    HUMAN ESCALATION WORKFLOW                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  AI Detection (Risk Score > 80)                                     │
│         ↓                                                           │
│  Crisis Response Delivered                                          │
│         ↓                                                           │
│  User Prompted: "Would you like to speak with a human counselor?"   │
│         ↓                                                           │
│  ┌─────────────────┬─────────────────┐                              │
│  │   User Declines │   User Accepts  │                              │
│  └────────┬────────┴────────┬────────┘                              │
│           │                  │                                      │
│           ↓                  ↓                                      │
│   Log decline      Create escalation ticket                         │
│   Continue support Assign to on-call therapist                      │
│   Monitor closely  Therapist contacts user < 15 min                 │
│   Re-offer in 24h  Secure handoff                                   │
│                      AI steps back                                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

**Escalation Ticket Information:**
```json
{
  "ticket_id": "ESC-20260323-001",
  "user_id": "[ANONYMIZED]",
  "risk_score": 87,
  "risk_level": "CRITICAL",
  "trigger_keywords": ["suicide", "plan", "tonight"],
  "conversation_summary": "User expressing active SI with plan",
  "location": "US, California",
  "emergency_contact": "Mother - 555-0123 (consent on file)",
  "therapy_connect_member": true,
  "assigned_therapist": "Dr. Sarah Chen, LMFT",
  "created_at": "2026-03-23T00:44:00Z",
  "sla_deadline": "2026-03-23T01:00:00Z"
}
```

**On-Call Therapist Responsibilities:**
1. Review escalation ticket (anonymized conversation excerpts)
2. Attempt contact via preferred method (phone > text > email)
3. Conduct risk assessment
4. Safety plan if appropriate
5. Document intervention
6. Follow-up within 24 hours

---

## 2. Safety Review Process

### 2.1 Daily Safety Review

**Review Queue (Automated, Anonymized):**
```
Generated Daily at 6:00 AM UTC

Cases for Review:
- All Level 3+ conversations from past 24h
- Users with 3+ elevated conversations in 7 days
- New users with immediate high-risk flags
- Users who declined human escalation at Level 3+

Reviewer: Licensed Mental Health Professional (LMHP)
Time Allocation: 2-3 hours/day
```

**Review Checklist:**
```
□ Crisis detection accuracy verified
□ Response appropriateness confirmed
□ Resources provided were correct for location
□ Escalation offered when appropriate
□ Pattern recognition (is this user deteriorating?)
□ Action items identified (if any)
□ Documentation complete
```

**Review Documentation:**
```markdown
## Safety Review - [Date]
**Reviewer:** [Name, Credentials]
**Cases Reviewed:** [Number]

### Cases Requiring Action:
1. User ID: [ANONYMIZED]
   - Concern: [Brief description]
   - Action: [What was done]
   - Follow-up: [If needed]

### Pattern Observations:
- [Any emerging trends]
- [Model performance notes]

### Recommendations:
- [Changes to crisis scripts]
- [Threshold adjustments]
- [Training needs]
```

### 2.2 Weekly Clinical Review

**Attendees:**
- Clinical Director
- 2 rotating advisory board members
- Safety review LMHP
- CTO or AI lead (for technical context)

**Agenda:**
```
1. Review escalated cases (30 min)
2. Model performance metrics (15 min)
3. User feedback on safety features (15 min)
4. Protocol updates needed (30 min)
5. Emerging risks discussion (30 min)
```

**Metrics Reviewed:**
```
Crisis Detection:
- False positive rate (target: < 5%)
- False negative rate (target: < 1%)
- Average response time
- Escalation acceptance rate

User Outcomes:
- Users who accepted human help
- Follow-up engagement post-crisis
- Retention of high-risk users
- Adverse events (if any)
```

### 2.3 Monthly Safety Audit

**External Review (Quarterly):**
```
Conducted by: Independent mental health organization
Scope:
- Random sample of 100 crisis conversations
- Crisis detection accuracy assessment
- Response quality evaluation
- Compliance with best practices
- Recommendations for improvement

Deliverable: Written report with findings and recommendations
```

---

## 3. Content Safety Guidelines

### 3.1 Prohibited Content (AI Must Not Generate)

**Absolute Prohibitions:**
```
❌ Medical advice or diagnosis
❌ Medication recommendations or dosage guidance
❌ Instructions for self-harm methods
❌ Validation of delusions or psychosis
❌ Discouraging professional treatment
❌ Minimizing crisis situations
❌ Promises of cure or guaranteed outcomes
❌ Therapeutic techniques outside AI competency
❌ Personal opinions on user's life decisions
❌ Judgment or shaming language
```

**Conditional Restrictions:**
```
⚠️ Discussion of trauma (require sensitivity, offer resources)
⚠️ Discussion of abuse (provide resources, avoid probing)
⚠️ Discussion of eating disorders (avoid numbers, focus on feelings)
⚠️ Discussion of substance use (non-judgmental, provide resources)
```

### 3.2 Response Quality Standards

**Every AI Response Must:**
```
✓ Validate the user's experience
✓ Maintain warm, empathetic tone
✓ Avoid judgment or criticism
✓ Empower user autonomy
✓ Provide accurate resources when relevant
✓ Stay within scope of wellness support
✓ Encourage professional help when appropriate
✓ Maintain appropriate boundaries
```

**Response Review Rubric:**
```
Score 1-5 on each dimension:

Empathy: Does the response feel warm and understanding?
Validation: Does it acknowledge the user's experience?
Safety: Is the response safe and non-harmful?
Appropriateness: Is it within scope of AI support?
Helpfulness: Does it offer something useful?
Autonomy: Does it respect user's agency?

Average score < 3.5: Response needs revision
Average score < 3.0: Technique needs retraining
```

---

## 4. Data Privacy & Confidentiality

### 4.1 Data Handling in Crisis Situations

**General Rule:**
```
Crisis data is treated with maximum confidentiality, with exceptions 
only for imminent harm situations where disclosure may prevent serious 
harm or death.
```

**Data Access Hierarchy:**
```
Level 1 - AI System: Full conversation access (real-time)
Level 2 - Safety LMHP: Anonymized conversations for review
Level 3 - Assigned Therapist: Full access (with user consent)
Level 4 - Emergency Services: Only if imminent danger + user consent 
         OR legal requirement (varies by jurisdiction)
```

**Emergency Disclosure Protocol:**
```
Circumstances for Emergency Disclosure:
1. User gives explicit consent
2. Imminent danger to self (active plan, means, intent)
3. Imminent danger to others (specific, credible threat)
4. Legal requirement (subpoena, court order)
5. Child/elder abuse reporting requirement

Process:
1. Document rationale for disclosure
2. Consult Clinical Director if possible
3. Disclose minimum necessary information
4. Document what was disclosed and to whom
5. Inform user (if safe to do so)
6. Follow-up documentation
```

### 4.2 Retention & Deletion

**Data Retention Schedule:**
```
Conversation Data:
- Active users: Retained while account active
- Deleted accounts: 30-day grace period, then permanent deletion
- Crisis conversations: 90 days (safety review), then anonymized

Safety Reports:
- Retained for 7 years (legal/clinical requirements)
- Anonymized after 2 years

Mood/Journal Data:
- User-controlled (export/delete anytime)
- Deleted accounts: Immediate deletion (no grace period for journals)

Audit Logs:
- Retained for 3 years
- Anonymized after 1 year
```

**User Data Rights:**
```
✓ Right to access (export all data)
✓ Right to rectification (correct inaccurate data)
✓ Right to erasure (delete account and data)
✓ Right to portability (download in standard format)
✓ Right to restrict processing
✓ Right to object to processing
```

---

## 5. Clinical Oversight

### 5.1 Clinical Advisory Board Responsibilities

**Ongoing Oversight:**
```
Monthly:
- Review safety metrics
- Approve protocol changes
- Review edge cases

Quarterly:
- Full safety audit
- Model performance review
- Update crisis resources
- Training updates

Annually:
- Comprehensive ethics review
- External audit coordination
- Policy updates
- Board self-evaluation
```

**Content Approval:**
```
Required Clinical Approval:
□ All crisis response scripts
□ Therapeutic technique descriptions
□ Meditation/exercise content
□ Journaling prompts
□ Psychoeducational materials
□ Marketing claims about mental health benefits
```

### 5.2 AI Model Training Oversight

**Training Data Requirements:**
```
Approved Sources:
✓ CBT workbooks (published, evidence-based)
✓ Therapist training materials (with permission)
✓ Crisis counselor training (redacted transcripts)
✓ Psychology textbooks
✓ User conversations (with explicit consent, anonymized)

Prohibited Sources:
✗ Unconsented therapy transcripts
✗ Online forum scraping (without consent)
✗ Materials without proper licensing
✗ Outdated or discredited therapeutic approaches
```

**Model Evaluation:**
```
Quarterly Assessment:
- Response quality (clinical review of 100 random conversations)
- Crisis detection accuracy (test set of 500 scenarios)
- Bias testing (demographic performance analysis)
- Technique adherence (CBT fidelity assessment)

Passing Criteria:
- Average response quality > 4.0/5.0
- Crisis detection sensitivity > 95%
- Crisis detection specificity > 90%
- No significant demographic bias (p > 0.05)
```

---

## 6. Incident Response

### 6.1 Adverse Event Classification

```
SEVERITY 1 - CRITICAL:
- User suicide or serious self-harm while using app
- AI directly contributed to harm
- Data breach affecting 10,000+ users
- Regulatory action or investigation

SEVERITY 2 - HIGH:
- User suicide or serious self-harm (no direct AI contribution)
- Crisis response failure (delayed, incorrect)
- Data breach affecting 1,000-10,000 users
- Major service outage (> 4 hours)

SEVERITY 3 - MEDIUM:
- User complaint about harmful response
- Crisis detection false negative (caught by review)
- Data breach affecting < 1,000 users
- Service degradation (> 30 min)

SEVERITY 4 - LOW:
- Minor bug affecting user experience
- Isolated user complaint
- Performance issues (< 30 min)
```

### 6.2 Incident Response Procedure

**Severity 1 Response:**
```
Immediate (0-1 hours):
□ CEO and Clinical Director notified
□ All relevant data preserved
□ Legal counsel engaged
□ Initial fact-finding initiated

Short-term (1-24 hours):
□ Full incident investigation launched
□ External experts engaged (if needed)
□ Regulatory notification (if required)
□ Family notification (if appropriate)
□ Press response prepared (if public)

Medium-term (1-7 days):
□ Root cause analysis complete
□ Corrective actions implemented
□ Stakeholder communication
□ Policy updates (if needed)

Long-term (1-4 weeks):
□ Full incident report
□ Prevention measures implemented
□ Team debrief and learning
□ External communication (if appropriate)
```

**Incident Report Template:**
```markdown
# Incident Report #[Number]

## Summary
[Brief description]

## Timeline
- [Date/Time]: Event occurred
- [Date/Time]: Detected
- [Date/Time]: Response initiated
- [Date/Time]: Resolved

## Impact
- Users affected: [Number]
- Severity: [1-4]
- Harm: [Description]

## Root Cause
[Analysis]

## Corrective Actions
1. [Action] - [Owner] - [Due Date]
2. [Action] - [Owner] - [Due Date]

## Prevention
[How to prevent recurrence]

## Lessons Learned
[Key takeaways]
```

---

## 7. Continuous Improvement

### 7.1 Feedback Loops

**User Feedback:**
```
Post-Conversation Survey (Random 10%):
- "How helpful was this conversation?" (1-5)
- "Did you feel understood?" (1-5)
- "Would you like to report a concern?" (Yes/No)

Weekly Check-in:
- "What's been most helpful about MindfulAI?"
- "What could be improved?"
- "Do you feel safe using this app?" (Yes/No/Unsure)

Crisis Follow-up (24 hours after Level 3+):
- "Did the resources provided help?"
- "Did you connect with any support?"
- "How are you feeling now?"
```

**Model Improvement Pipeline:**
```
User Feedback → Flagged Conversations → Clinical Review → 
Training Data Updates → Model Fine-tuning → A/B Testing → 
Deployment → Monitoring
```

### 7.2 Key Performance Indicators

**Safety Metrics:**
```
- Crisis detection sensitivity: Target > 95%
- Crisis detection specificity: Target > 90%
- Time to human escalation: Target < 15 minutes
- Safety review completion: Target 100% within 24h
- Adverse events: Target 0 (Severity 1)
```

**Quality Metrics:**
```
- Response quality score: Target > 4.2/5.0
- User satisfaction: Target > 4.0/5.0
- Empathy score (clinical review): Target > 4.5/5.0
- Technique appropriateness: Target > 90%
```

**Outcome Metrics:**
```
- User retention (high-risk users): Target > 50% at 30 days
- Help-seeking behavior increase: Target > 30%
- Mood improvement (average): Target +1.5 points over 30 days
- Therapy Connect conversion (when appropriate): Target > 20%
```

---

## 8. Training & Certification

### 8.1 AI Safety Training

**Required for All Team Members:**
```
Module 1: Crisis Recognition (2 hours)
- Warning signs of suicide risk
- Self-harm indicators
- Psychosis recognition
- Substance use concerns

Module 2: Appropriate Response (2 hours)
- Validation techniques
- Resource provision
- Boundary setting
- When and how to escalate

Module 3: Privacy & Ethics (1 hour)
- Confidentiality requirements
- Data handling
- Ethical decision-making
- Legal obligations

Module 4: Self-Care (1 hour)
- Secondary trauma recognition
- Burnout prevention
- Support resources
```

**Certification:**
```
- Initial certification required before accessing production data
- Annual recertification required
- Quiz score > 90% required
- Scenario-based assessment
```

### 8.2 Therapist Training (Therapy Connect)

**Platform-Specific Training:**
```
- AI companion integration (how AI supports therapy)
- Platform features and dashboard
- Crisis escalation procedures
- Documentation requirements
- Billing and compliance
- Teletherapy best practices

Duration: 4 hours (paid)
Format: Virtual training + written materials
Assessment: Case scenarios + quiz
```

**Ongoing Support:**
```
- Monthly case consultation calls
- Quarterly continuing education
- Access to Clinical Director for questions
- Peer support network
```

---

**Document Approval:**
- Clinical Director: _________________ Date: _______
- CEO: _________________ Date: _______
- Legal Counsel: _________________ Date: _______

**Next Review Date:** June 23, 2026

**Distribution:** Clinical Team, Engineering Leadership, Customer Support Leads
