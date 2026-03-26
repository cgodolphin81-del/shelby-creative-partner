# 📔 Journaling System

Reflection and tracking features to deepen the tarot practice.

---

## Prompt Library

### Daily Prompts (7)
1. "What energy do I want to invite today?"
2. "What is my intuition trying to tell me?"
3. "Where am I resisting change?"
4. "What does my soul need right now?"
5. "What am I grateful for today?"
6. "What fear wants to become courage?"
7. "How can I honor my inner wisdom today?"

### Love & Relationship Prompts (10)
1. "What pattern keeps appearing in my relationships?"
2. "What do I truly need in partnership?"
3. "How can I love myself more deeply?"
4. "What is this relationship teaching me?"
5. "What boundaries do I need to set?"
6. "What does healthy love look like to me?"
7. "Am I giving or losing myself in this connection?"
8. "What past wound needs healing before I love again?"
9. "What qualities do I seek in a partner?"
10. "How can I be more open to receiving love?"

### Career & Purpose Prompts (10)
1. "What work makes me feel most alive?"
2. "What is my soul's purpose?"
3. "What fear holds me back professionally?"
4. "What talent am I not fully using?"
5. "What does success mean to me (not society)?"
6. "Am I in alignment with my values?"
7. "What would I do if I knew I couldn't fail?"
8. "What step can I take this week toward my dreams?"
9. "What limiting beliefs about money do I hold?"
10. "How can I serve others through my gifts?"

### Spiritual Growth Prompts (10)
1. "What does spirituality mean to me?"
2. "When do I feel most connected to the divine?"
3. "What old belief needs to be released?"
4. "What is my shadow trying to show me?"
5. "How can I trust the universe more?"
6. "What practice nourishes my spirit?"
7. "What am I learning in this chapter of life?"
8. "Where do I need more faith?"
9. "What does my higher self want me to know?"
10. "How can I be more present?"

### Shadow Work Prompts (8)
1. "What trait in others triggers me? Why?"
2. "What emotion do I avoid feeling?"
3. "What story do I tell about myself that might not be true?"
4. "Where am I being dishonest (with myself or others)?"
5. "What would I do if no one judged me?"
6. "What part of myself have I abandoned?"
7. "What am I afraid to admit I want?"
8. "Where do I sabotage myself?"

### Moon Phase Prompts (4)
1. **New Moon**: "What intention am I setting?"
2. **Waxing Moon**: "What action am I taking toward my intention?"
3. **Full Moon**: "What am I releasing? What has bloomed?"
4. **Waning Moon**: "What needs to be let go?"

---

## Journal Entry Structure

```json
{
  "entry_id": "uuid",
  "user_id": "uuid",
  "created_at": "ISO timestamp",
  "prompt_id": "optional reference",
  "prompt_text": "What energy do I want to invite today?",
  "mood": ["calm", "hopeful", "anxious"],
  "reading_reference": "optional_reading_id",
  "entry_text": "User's written reflection...",
  "tags": ["daily", "gratitude", "intention"],
  "is_private": true,
  "word_count": 142
}
```

---

## Features

### 1. Reading Integration
- Link journal entries to specific tarot readings
- "How did this reading resonate?" follow-up prompts
- Track accuracy over time ("Did this prediction manifest?")

### 2. Mood Tracking
- Select mood tags when writing
- Visualize mood patterns over time
- Correlate with moon phases and reading themes

### 3. Search & Tags
- Search entries by keyword
- Filter by tags, date range, mood
- Export entries as PDF or Markdown

### 4. Reflection Prompts After Readings
After each reading, offer:
- "What resonates most?"
- "What feels challenging?"
- "What action will you take?"
- "Revisit this reading in 7 days" (reminder)

### 5. Progress Tracking
- Streak counter (days journaled)
- Total entries, word count
- "Most used tags" insights
- Monthly reflection summaries

### 6. Privacy
- All entries encrypted at rest
- Optional biometric lock
- No data used for AI training without consent

---

## Sample User Flow

```
1. User completes tarot reading
2. App suggests: "Want to reflect on this reading?"
3. User clicks → Journal screen opens
4. Pre-populated prompt: "What message from this reading speaks to you?"
5. User writes entry, adds tags
6. Entry saved, linked to reading
7. 7-day reminder set: "Revisit this reading"
```

---

## Notification Triggers

- **Daily**: "Time for your daily reflection?" (user-set time)
- **Post-Reading**: "Journal about this reading?" (immediate)
- **Weekly**: "What patterns emerged this week?" (Sunday evening)
- **Moon Phase**: "New moon intention setting" (phase-based)
- **Streak**: "3-day journal streak! 🔥" (motivational)

---

## Export Options

- **PDF**: Beautiful formatted document with card images
- **Markdown**: Plain text for other apps
- **Email**: Send to self as backup
- **Print**: Physical journal option (premium feature)
