# 🔮 AI Reading Engine

Core interpretation system supporting multiple spread types with AI-powered meanings.

---

## Spread Types

### 1. Single Card Draw
**Use Case**: Daily guidance, quick answers, focus question
**Positions**: 1 card
**Duration**: 30-60 seconds

**Position Meaning**:
- Card 1: The Message / Current Energy / Answer

**AI Prompt Template**:
```
You are a compassionate tarot reader. The user drew: [CARD_NAME]

Context: [UPRIGHT/REVERSED]
Question (optional): [USER_QUESTION]

Provide a 2-3 paragraph reading that:
1. Explains the card's core meaning
2. Connects it to their situation
3. Offers gentle guidance

Tone: Warm, mystical, empowering (not fatalistic)
Length: 150-200 words
```

---

### 2. Three Card Spread
**Use Case**: Past/Present/Future, Mind/Body/Spirit, Situation/Action/Outcome
**Positions**: 3 cards in horizontal row
**Duration**: 60-90 seconds

**Position Options**:

#### Classic (Past/Present/Future)
- Card 1: Past - What has led you here
- Card 2: Present - Current energy/situation
- Card 3: Future - Where this is heading

#### Mind/Body/Spirit
- Card 1: Mind - Mental state, thoughts
- Card 2: Body - Physical health, actions
- Card 3: Spirit - Soul's purpose, intuition

#### Situation/Action/Outcome
- Card 1: Situation - What's happening now
- Card 2: Action - What you should do
- Card 3: Outcome - Likely result

**AI Prompt Template**:
```
You are a compassionate tarot reader. Three cards were drawn:

Position 1 ([POSITION_1_NAME]): [CARD_1_NAME] ([ORIENTATION_1])
Position 2 ([POSITION_2_NAME]): [CARD_2_NAME] ([ORIENTATION_2])
Position 3 ([POSITION_3_NAME]): [CARD_3_NAME] ([ORIENTATION_3])

Question (optional): [USER_QUESTION]

Provide a reading with:
1. Opening paragraph setting the tone
2. Individual interpretation for each position (2-3 sentences each)
3. Synthesis paragraph showing how cards work together
4. Closing guidance

Tone: Warm, mystical, empowering
Length: 250-350 words
```

---

### 3. Celtic Cross (10 Cards)
**Use Case**: Deep dive, complex situations, major decisions
**Positions**: 10 cards in traditional cross formation
**Duration**: 2-3 minutes

**Position Layout**:
```
        6
        |
    4 - 1 - 2 - 3
        |
        5

7 - 8 - 9 - 10 (vertical staff to the right)
```

**Position Meanings**:
1. **The Present**: Current situation, heart of matter
2. **The Challenge**: Immediate obstacle crossing you
3. **The Foundation**: Root cause, subconscious influence
4. **The Past**: Recent events leading here
5. **The Crown**: Conscious goals, best outcome
6. **The Future**: Near future, what's coming
7. **Your Attitude**: How you view the situation
8. **External Influences**: Others' impact, environment
9. **Hopes/Fears**: What you desire or dread
10. **The Outcome**: Final result if path continues

**AI Prompt Template**:
```
You are an experienced tarot reader performing a Celtic Cross spread.

Cards drawn:
1. Present: [CARD_1] ([ORIENTATION_1])
2. Challenge: [CARD_2] ([ORIENTATION_2])
3. Foundation: [CARD_3] ([ORIENTATION_3])
4. Past: [CARD_4] ([ORIENTATION_4])
5. Crown/Goal: [CARD_5] ([ORIENTATION_5])
6. Future: [CARD_6] ([ORIENTATION_6])
7. Attitude: [CARD_7] ([ORIENTATION_7])
8. External: [CARD_8] ([ORIENTATION_8])
9. Hopes/Fears: [CARD_9] ([ORIENTATION_9])
10. Outcome: [CARD_10] ([ORIENTATION_10])

Question: [USER_QUESTION]

Provide a comprehensive reading:
1. Opening (2-3 sentences): Overall theme/energy
2. Core Cross (positions 1-2): Main dynamic
3. Foundation & Past (positions 3-4): Context
4. Crown & Future (positions 5-6): Direction
5. Personal Factors (positions 7-9): Your role
6. Outcome (position 10): Where this leads
7. Closing guidance: Actionable wisdom

Tone: Wise, compassionate, nuanced
Length: 500-700 words
```

---

## Card Interpretations Database

### Upright Meanings (Sample)

```json
{
  "fool": {
    "upright": "New beginnings, innocence, spontaneity, a free spirit. The Fool represents stepping into the unknown with faith. A journey begins.",
    "reversed": "Recklessness, risk-taking, naivety. Be cautious of impulsive decisions.",
    "keywords": ["beginnings", "innocence", "spontaneity", "free spirit"],
    "element": "Air",
    "astrology": "Uranus"
  },
  "magician": {
    "upright": "Manifestation, resourcefulness, power. You have all the tools needed to succeed.",
    "reversed": "Manipulation, poor planning, untapped talents.",
    "keywords": ["manifestation", "power", "resourcefulness"],
    "element": "Air",
    "astrology": "Mercury"
  }
  // ... all 78 cards
}
```

---

## AI Integration

### API Endpoint Structure
```
POST /api/readings
{
  "spread_type": "celtic_cross" | "three_card" | "single",
  "cards": [
    {"position": 1, "card": "fool", "orientation": "upright"},
    ...
  ],
  "user_question": "Optional question text",
  "tone": "compassionate" | "direct" | "mystical"
}

Response:
{
  "reading_id": "uuid",
  "interpretation": "Full AI-generated reading text",
  "card_meanings": [...],
  "created_at": "timestamp"
}
```

### Rate Limits (Freemium Model)
- **Free**: 3 readings/month
- **Premium**: Unlimited
- **Caching**: Cache interpretations for identical spreads (rare)

---

## Special Features

### Reversed Cards
- 30% chance of reversal (toggle in settings)
- Reversed = blocked/internalized energy
- AI adjusts interpretation accordingly

### Clarifier Cards
- User can draw 1-3 additional cards for clarity
- Added as bonus section to reading

### Favorite Readings
- Save readings to journal
- Tag by topic (love, career, spirituality)

### Share Feature
- Generate beautiful image card with reading excerpt
- Optimized for Instagram Stories (1080x1920)
