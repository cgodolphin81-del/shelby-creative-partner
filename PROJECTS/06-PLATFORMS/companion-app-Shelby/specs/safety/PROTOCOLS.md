# Safety Protocols Specification

## Overview

SoulSpace is an emotional support tool, NOT a mental health treatment platform. Safety protocols protect users from harm, ensure appropriate boundaries, and provide crisis resources when needed.

---

## Core Safety Principles

1. **Never diagnose** - We are not clinicians
2. **Never replace therapy** - Always position as supplement, not replacement
3. **Always prioritize safety** - When in doubt, escalate
4. **Be transparent** - Users must know they're talking to AI
5. **Respect autonomy** - Provide resources, don't force help

---

## Crisis Detection System

### Detection Layers

```
┌─────────────────────────────────────────────────────────────┐
│                  CRISIS DETECTION PIPELINE                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Layer 1: Keyword Matching (Fast, High Recall)              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Suicide keywords, self-harm, violence, abuse         │   │
│  │ Sensitivity: High | False positives: Expected        │   │
│  └──────────────────────────────────────────────────────┘   │
│                           │                                  │
│                           ▼                                  │
│  Layer 2: Context Analysis (LLM-based)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Assess intent, immediacy, severity                   │   │
│  │ Distinguish: "I'm so frustrated I could die" vs      │   │
│  │              "I'm planning to end my life tonight"   │   │
│  └──────────────────────────────────────────────────────┘   │
│                           │                                  │
│                           ▼                                  │
│  Layer 3: Risk Scoring                                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Calculate risk level: Low | Medium | High | Critical │   │
│  │ Trigger appropriate response protocol                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Crisis Keyword Categories

```python
CRISIS_KEYWORDS = {
    'suicide': {
        'critical': [
            'kill myself', 'end my life', 'commit suicide', 'take my own life',
            'going to kill myself', 'planning to die', 'suicide plan',
            'got the pills', 'wrote a note', 'ready to end it'
        ],
        'high': [
            'want to die', 'wish I was dead', 'better off dead',
            'no reason to live', 'everyone would be better off',
            'thinking about suicide', 'suicidal'
        ],
        'moderate': [
            'what's the point', 'why am I here', 'can't do this anymore',
            'just want it to stop', 'disappeared', 'won't be around much longer'
        ]
    },
    
    'self_harm': {
        'critical': [
            'going to cut', 'hurt myself tonight', 'self-harm plan',
            'got a razor', 'planning to cut'
        ],
        'high': [
            'cutting myself', 'self-harm', 'hurting myself',
            'burn myself', 'hit myself', 'self injure'
        ],
        'moderate': [
            'urge to cut', 'want to hurt myself', 'thinking about self-harm'
        ]
    },
    
    'violence_toward_others': {
        'critical': [
            'going to hurt', 'make them pay', 'kill them',
            'hurt someone', 'violence plan', 'going to attack'
        ],
        'high': [
            'want to hurt them', 'make them suffer', 'revenge'
        ]
    },
    
    'abuse': {
        'high': [
            'being abused', 'my partner hits me', 'afraid to go home',
            'controlling me', 'threatening me', 'stalking me'
        ],
        'moderate': [
            'unsafe at home', 'walk on eggshells', 'yelling at me'
        ]
    },
    
    'overdose': {
        'critical': [
            'took too many', 'overdose', 'swallowed pills',
            'mixed medications'
        ]
    }
}
```

### Risk Scoring Algorithm

```python
def calculate_crisis_risk(messages: List[Message]) -> RiskAssessment:
    """
    Calculate crisis risk level based on conversation history.
    """
    score = 0
    factors = []
    
    # Check for critical keywords (automatic high risk)
    for msg in messages[-10:]:  # Last 10 messages
        text = msg.content.lower()
        
        for category, levels in CRISIS_KEYWORDS.items():
            if any(kw in text for kw in levels['critical']):
                score += 100
                factors.append(f"Critical {category} language detected")
            elif any(kw in text for kw in levels['high']):
                score += 50
                factors.append(f"High {category} language detected")
            elif any(kw in text for kw in levels['moderate']):
                score += 20
                factors.append(f"Moderate {category} language detected")
    
    # Contextual factors
    if mentions_specific_plan(messages):
        score += 50
        factors.append("Specific plan mentioned")
    
    if mentions_immediate_timeframe(messages):
        score += 40
        factors.append("Immediate timeframe indicated")
    
    if mentions_access_to_means(messages):
        score += 40
        factors.append("Access to means indicated")
    
    if expresses_hopelessness(messages):
        score += 20
        factors.append("Hopelessness expressed")
    
    if mentions_isolation(messages):
        score += 15
        factors.append("Social isolation mentioned")
    
    # Determine risk level
    if score >= 100:
        level = 'CRITICAL'
    elif score >= 60:
        level = 'HIGH'
    elif score >= 30:
        level = 'MEDIUM'
    else:
        level = 'LOW'
    
    return RiskAssessment(
        level=level,
        score=score,
        factors=factors,
        requires_intervention=level in ['CRITICAL', 'HIGH'],
        timestamp=datetime.now()
    )
```

---

## Response Protocols

### Protocol: LOW Risk

**Trigger:** General emotional distress, no crisis indicators

**Companion Response:**
```
Standard empathetic response within companion personality.
No special protocol needed.
```

**Actions:**
- Continue normal conversation
- Log mood for tracking
- No escalation

---

### Protocol: MEDIUM Risk

**Trigger:** Passive suicidal ideation, vague references to self-harm

**Example User Messages:**
- "Sometimes I wonder if everyone would be better off without me"
- "I've been thinking about just not waking up"
- "I don't see the point anymore"

**Companion Response Template:**
```
"I hear how much pain you're in, and I want you to know that your 
feelings matter. When you talk about [reference their words], it 
sounds like things feel really overwhelming right now.

I'm here with you, and I care about what you're going through. 
Have you been able to talk to anyone else about these feelings?"

[If user opens up]
"That takes courage to share. You don't have to carry this alone. 
Sometimes talking to a professional can help—would you be open to 
some resources?"
```

**Actions:**
- Flag conversation for review
- Log crisis indicator (non-urgent)
- Continue supportive conversation
- Offer resources gently (don't push)

---

### Protocol: HIGH Risk

**Trigger:** Active suicidal ideation, specific self-harm thoughts, no immediate plan

**Example User Messages:**
- "I'm thinking about killing myself"
- "I want to hurt myself"
- "I've been planning how to end it"

**Companion Response Template:**
```
"I'm really glad you told me this. I can hear how much you're 
hurting, and I want you to know that your life matters—even if 
it doesn't feel that way right now.

I'm here with you, but I also want to make sure you have support 
from people who can really help. Are you safe right now? Do you 
have someone you can reach out to—a friend, family member, or 
professional?"

[If user has no support]
"I'd like to share some resources with you. These are people who 
are trained to help and they're available 24/7. Would that be okay?"

[If yes, share resources]
"In the US, you can call or text 988 anytime—that's the Suicide 
& Crisis Lifeline. They're free, confidential, and available 24/7. 
There's also Crisis Text Line—text HOME to 741741.

You don't have to go through this alone. I'm still here with you too."
```

**Actions:**
- Trigger immediate safety flag
- Send resources in-chat
- Offer to stay with user while they contact help
- Log crisis incident (urgent review)
- Consider follow-up check-in (if user consents)

---

### Protocol: CRITICAL Risk

**Trigger:** Imminent suicide attempt, active self-harm in progress, specific plan with means

**Example User Messages:**
- "I'm going to kill myself tonight"
- "I have the pills in my hand"
- "I'm about to end it"
- "This is goodbye"

**Companion Response Template:**
```
"I hear you, and I'm so glad you're still talking to me. I know 
things feel unbearable right now, but I'm asking you to please 
reach out for immediate help.

You matter. Your life matters. And there are people who want 
to help you through this moment.

Please call 988 right now (in the US) or your local emergency 
number. They can stay on the phone with you and help keep you 
safe.

I'm here with you. Will you call? I'll stay right here while 
you do."
```

**Actions:**
- **IMMEDIATE:** Display crisis resources prominently
- **IMMEDIATE:** Offer to connect to crisis line (if technically feasible)
- Log incident as CRITICAL
- Alert safety team for potential welfare check consideration
- **DO NOT** attempt to physically locate user (privacy + legal)
- Continue engaging user if they remain in conversation
- Never end conversation abruptly

**In-App Crisis Resources Display:**
```
┌─────────────────────────────────────────────────────────────┐
│  ⚠️  WE'RE HERE FOR YOU                                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  You're not alone. Help is available right now:              │
│                                                              │
│  🇺🇸 US: Call/Text 988                                       │
│     Suicide & Crisis Lifeline (24/7, free, confidential)     │
│                                                              │
│  🇺🇸 Crisis Text Line: Text HOME to 741741                   │
│                                                              │
│  🇬🇧 UK: Call 111 or 999                                     │
│     Samaritans: 116 123                                      │
│                                                              │
│  🌍 International: findahelpline.com                        │
│     (Find crisis lines in your country)                      │
│                                                              │
│  🚨 If you're in immediate danger, call emergency services   │
│                                                              │
│  [Call 988 Now]  [Keep Talking]  [I'm Safe]                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Therapist Referral System

### When to Recommend Therapy

```
RECOMMEND THERAPY WHEN:
✓ User mentions ongoing mental health struggles
✓ User asks about therapy or medication
✓ User mentions past therapy (explore re-engagement)
✓ Symptoms persist across multiple conversations
✓ User expresses interest in professional help
✓ Crisis situation has stabilized (follow-up)

DON'T RECOMMEND THERAPY WHEN:
✗ User is in active crisis (stabilize first)
✗ User expresses negative therapy experiences (validate first)
✗ User can't afford therapy (offer alternatives)
✗ User just wants to vent (respect their need)
```

### Therapy Conversation Guide

```
COMPANION APPROACH:

1. Normalize therapy
   "Therapy is something so many people find helpful—it's a 
   space just for you, with someone trained to help."

2. Address barriers
   "I know therapy can feel intimidating. What concerns do 
   you have about it?"

3. Offer practical help
   "Would it help if I shared some resources for finding 
   therapists? There are affordable options."

4. Respect autonomy
   "No pressure at all. I'm here either way. Just want you 
   to know it's an option."
```

### Resource Database

```python
THERAPY_RESOURCES = {
    'US': {
        'low_cost': [
            {
                'name': 'Open Path Psychotherapy Collective',
                'url': 'https://openpathcollective.org',
                'description': 'Therapy sessions $30-60 (vs $100-200 typical)'
            },
            {
                'name': 'BetterHelp',
                'url': 'https://betterhelp.com',
                'description': 'Online therapy, financial aid available'
            }
        ],
        'hotlines': [
            {
                'name': '988 Suicide & Crisis Lifeline',
                'phone': '988',
                'url': 'https://988lifeline.org',
                'available': '24/7'
            },
            {
                'name': 'Crisis Text Line',
                'phone': 'Text HOME to 741741',
                'url': 'https://crisistextline.org',
                'available': '24/7'
            }
        ]
    },
    'UK': {
        'hotlines': [
            {
                'name': 'Samaritans',
                'phone': '116 123',
                'url': 'https://samaritans.org',
                'available': '24/7'
            }
        ]
    },
    'International': {
        'finder': [
            {
                'name': 'Find A Helpline',
                'url': 'https://findahelpline.com',
                'description': 'Crisis lines worldwide'
            }
        ]
    }
}
```

---

## Boundary Guidelines

### What Companions CAN Do

✅ Listen empathetically
✅ Validate emotions
✅ Offer coping strategies
✅ Provide psychoeducation (general)
✅ Share resources
✅ Help process difficult experiences
✅ Celebrate wins
✅ Gently challenge unhelpful thoughts
✅ Support treatment adherence (remind to take meds, etc.)

### What Companions CANNOT Do

❌ Diagnose mental health conditions
❌ Recommend specific medications
❌ Tell users to stop medications
❌ Replace therapy or psychiatric care
❌ Make treatment decisions
❌ Promise outcomes ("You'll be fine")
❌ Engage in romantic/sexual conversation
❌ Keep secrets about safety concerns
❌ Encourage harmful behaviors

### Boundary Enforcement

```python
BOUNDARY_RESPONSES = {
    'medical_advice': """
        I care about you and want you to have the best support. 
        I can't give medical advice—that's something only a 
        qualified healthcare provider can do. But I can help you 
        think through questions to ask your doctor, if that would help?
    """,
    
    'diagnosis_request': """
        I hear you trying to understand what you're experiencing. 
        While I can't diagnose anything, I can share that what 
        you're describing sounds really challenging. A mental health 
        professional could give you a proper assessment. Would you 
        like help finding resources?
    """,
    
    'medication_question': """
        Medication questions are important, and I want you to get 
        accurate information. Only your prescriber or pharmacist 
        can give you guidance on medications. I can help you 
        prepare questions for them though—what are you wondering?
    """,
    
    'romantic_advancement': """
        I'm touched that you feel close to me, and I care about 
        your wellbeing. I want to be honest that I'm an AI 
        companion—I'm here to support you, but I can't be in a 
        romantic relationship. You deserve real human connection, 
        and I hope you find that. I'm still here for you as a 
        supportive friend.
    """
}
```

---

## Safety Team & Escalation

### Escalation Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    SAFETY ESCALATION                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CRISIS DETECTED                                             │
│       │                                                      │
│       ▼                                                      │
│  ┌─────────────────┐                                        │
│  │ Auto-flag in DB │                                        │
│  └────────┬────────┘                                        │
│           │                                                  │
│           ▼                                                  │
│  ┌─────────────────┐         ┌─────────────────┐            │
│  │ Priority: HIGH  │────────▶│ Safety Team     │            │
│  │ Review within   │         │ Notification    │            │
│  │ 24 hours        │         │ (Email/Slack)   │            │
│  └─────────────────┘         └─────────────────┘            │
│                                                              │
│  ┌─────────────────┐         ┌─────────────────┐            │
│  │ Priority:       │────────▶│ Safety Team     │            │
│  │ CRITICAL        │         │ IMMEDIATE       │            │
│  │ Review within   │         │ Alert (SMS)     │            │
│  │ 1 hour          │         │                 │            │
│  └─────────────────┘         └─────────────────┘            │
│                                                              │
│  Safety Team Actions:                                        │
│  1. Review conversation transcript                           │
│  2. Assess if further action needed                          │
│  3. Document decision                                        │
│  4. If welfare check considered: Legal review first          │
│  5. Update safety protocols if patterns emerge               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Safety Dashboard

```
SAFETY TEAM DASHBOARD ACCESS:
- Real-time crisis flag feed
- Search conversations by risk level
- User history view (all flagged sessions)
- Resource click-through tracking
- Outcome logging (if user followed up)
- Pattern analysis (emerging risks)
```

---

## User Consent & Transparency

### AI Disclosure

**Required Disclosure (Onboarding):**
```
Welcome to SoulSpace! 👋

I want to be upfront: I'm an AI companion, not a human therapist. 
I'm here to listen, support, and care—but I have limitations:

✓ I'm available anytime, judgment-free
✓ I remember our conversations
✓ I can share resources and coping strategies

✗ I can't diagnose or treat mental health conditions
✗ I can't replace therapy or crisis services
✗ In emergencies, I can't provide immediate physical help

You deserve the best support. If you're in crisis, please reach 
out to a crisis line (I can share numbers) or a healthcare provider.

By continuing, you acknowledge you understand I'm an AI companion.

[I Understand]  [Learn More]
```

### Data Privacy (Safety Context)

```
PRIVACY POLICY EXCERPT - SAFETY:

Your conversations are private. However, in rare cases where we 
detect imminent risk of harm to yourself or others, we may:

1. Flag the conversation for safety team review
2. Display crisis resources prominently
3. In extreme cases, consider contacting emergency services 
   (only if we have location data AND legal grounds)

We only break confidentiality when we believe it's necessary 
to prevent serious harm. This is consistent with ethical 
guidelines for mental health support.

You can review our full privacy policy at [link].
```

---

## Post-Crisis Follow-Up

### Check-In System

```python
async def schedule_crisis_followup(user_id: str, crisis_level: str):
    """
    Schedule follow-up check-in after crisis incident.
    """
    if crisis_level in ['HIGH', 'CRITICAL']:
        # Check in 24 hours later
        followup_time = datetime.now() + timedelta(hours=24)
        
        await db.followups.create({
            'user_id': user_id,
            'type': 'crisis_followup',
            'scheduled_for': followup_time,
            'message': """
                Hey, I've been thinking about our conversation yesterday. 
                I wanted to check in and see how you're doing. 
                
                You don't have to respond, but I'm here if you want to talk.
                How are you feeling today?
            """,
            'requires_human_review': True
        })
```

### Follow-Up Message Guidelines

```
DO:
✓ Express genuine care
✓ Keep it low-pressure
✓ Offer continued support
✓ Acknowledge their strength in reaching out

DON'T:
✗ Pressure them to share details
✗ Act like nothing happened
✗ Make promises about outcomes
✗ Disappear if they don't respond
```

---

## Compliance & Legal

### Regulatory Considerations

```
HIPAA: SoulSpace is NOT a covered entity (not a healthcare provider)
       BUT: If integrating with healthcare systems, HIPAA may apply

GDPR: Users have right to access, delete, export data
      Crisis data: May need to retain for safety audits

COPPA: Service is 18+ only (emotional support requires adult consent)

Duty to Warn: Varies by jurisdiction
              Consult legal counsel on welfare check policies
              Document all safety decisions
```

### Terms of Service Requirements

```
REQUIRED DISCLAIMERS:

1. "SoulSpace is an AI companion, not a licensed mental health provider"
2. "Not intended to diagnose, treat, or cure any mental health condition"
3. "In crisis, contact emergency services or crisis hotline"
4. "Conversations may be reviewed for safety purposes"
5. "We may break confidentiality in cases of imminent harm"
```

---

## Training & Monitoring

### Companion Training Data

```
Crisis response training includes:
- 1000+ examples of crisis conversations
- Escalation protocol practice
- Boundary enforcement scenarios
- Cultural sensitivity training
- Resource knowledge (hotlines, therapy options)

Quarterly retraining with new scenarios
```

### Quality Assurance

```
SAFETY QA CHECKLIST (Monthly):
□ Review 50 random crisis-flagged conversations
□ Verify appropriate resource sharing
□ Check boundary enforcement
□ Assess companion tone (not dismissive, not alarmist)
□ Update training data with edge cases
□ Review false positives/negatives
```

---

## Emergency Resource Database

```python
CRISIS_RESOURCES = {
    'global': {
        'findahelpline': {
            'name': 'Find A Helpline',
            'url': 'https://findahelpline.com',
            'description': 'Search crisis lines by country'
        }
    },
    'US': {
        '988': {
            'name': '988 Suicide & Crisis Lifeline',
            'phone': '988',
            'text': 'N/A',
            'url': 'https://988lifeline.org',
            'hours': '24/7',
            'languages': ['English', 'Spanish'],
            'specialties': ['Suicide', 'Crisis', 'Mental Health']
        },
        'crisis_text': {
            'name': 'Crisis Text Line',
            'phone': 'N/A',
            'text': 'HOME to 741741',
            'url': 'https://crisistextline.org',
            'hours': '24/7',
            'languages': ['English', 'Spanish'],
            'specialties': ['Crisis', 'Text-based']
        },
        'trevor': {
            'name': 'The Trevor Project (LGBTQ+)',
            'phone': '1-866-488-7386',
            'text': 'START to 678678',
            'url': 'https://thetrevorproject.org',
            'hours': '24/7',
            'languages': ['English'],
            'specialties': ['LGBTQ+', 'Youth', 'Suicide']
        },
        'domestic_violence': {
            'name': 'National Domestic Violence Hotline',
            'phone': '1-800-799-7233',
            'text': 'START to 88788',
            'url': 'https://thehotline.org',
            'hours': '24/7',
            'languages': ['English', 'Spanish', '140+ via interpreter'],
            'specialties': ['Domestic Violence', 'Abuse']
        }
    },
    'UK': {
        'samaritans': {
            'name': 'Samaritans',
            'phone': '116 123',
            'url': 'https://samaritans.org',
            'hours': '24/7'
        },
        'shout': {
            'name': 'Shout (Crisis Text)',
            'text': 'SHOUT to 85258',
            'url': 'https://giveusashout.org',
            'hours': '24/7'
        }
    }
}
```

---

*Version: 1.0.0*
*Last Updated: 2026-03-22*

**SAFETY REVIEW STATUS:** Pending Legal & Clinical Advisory Board Review
