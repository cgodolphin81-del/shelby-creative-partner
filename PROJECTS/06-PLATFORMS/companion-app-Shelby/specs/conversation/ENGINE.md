# Conversation Engine Specification

## Overview

The Conversation Engine is the core AI system that generates empathetic, context-aware responses. It combines personality prompts, memory retrieval, mood detection, and safety filtering.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   CONVERSATION ENGINE                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│  │   INPUT     │    │   CONTEXT   │    │   SAFETY    │      │
│  │  PROCESSING │    │   BUILDING  │    │   LAYER     │      │
│  │             │    │             │    │             │      │
│  │ - Text      │    │ - Retrieve  │    │ - Crisis    │      │
│  │ - Voice     │───▶│   memory    │───▶│   detect    │      │
│  │ - Mood      │    │ - Build     │    │ - Filter    │      │
│  │   detection │    │   prompt    │    │ - Redirect  │      │
│  └─────────────┘    └─────────────┘    └─────────────┘      │
│                            │                  │               │
│                            ▼                  ▼               │
│                   ┌─────────────────────────────┐             │
│                   │      LLM GENERATION         │             │
│                   │      (Gensee API)           │             │
│                   └─────────────┬───────────────┘             │
│                                 │                              │
│                    ┌────────────┼────────────┐                 │
│                    ▼            ▼            ▼                 │
│             ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│             │ RESPONSE │ │  VOICE   │ │  MEMORY  │            │
│             │ FORMATTING│ │  QUEUE   │ │  UPDATE  │            │
│             └──────────┘ └──────────┘ └──────────┘            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Input Processing

### Text Input
```typescript
interface TextInput {
  userId: string;
  sessionId: string;
  companionId: string;
  message: string;
  timestamp: Date;
  metadata: {
    platform: 'ios' | 'android' | 'web';
    messageType: 'text' | 'voice-transcription';
    responseTo?: string; // message ID if reply
  };
}
```

### Voice Input Pipeline
```
User speaks → ElevenLabs STT → Text → [Standard Pipeline]

STT Configuration:
- Model: eleven_turbo_v2
- Language: Auto-detect (support EN, ES, FR, DE, PT)
- Punctuation: Enabled
- Profanity filter: Disabled (preserve authenticity)
```

### Mood Detection

**Real-time mood classification on every user message:**

```python
MOOD_CATEGORIES = {
    'happy': ['happy', 'excited', 'grateful', 'hopeful', 'proud'],
    'sad': ['sad', 'depressed', 'lonely', 'disappointed', 'hurt'],
    'anxious': ['anxious', 'worried', 'nervous', 'overwhelmed', 'scared'],
    'angry': ['angry', 'frustrated', 'annoyed', 'furious', 'irritated'],
    'calm': ['calm', 'peaceful', 'relaxed', 'content', 'serene'],
    'tired': ['tired', 'exhausted', 'drained', 'weary', 'burnt out'],
    'neutral': ['neutral', 'okay', 'fine', 'normal']
}

async def detect_mood(message: str, recent_history: List[Message]) -> MoodState:
    """
    Detect user mood using hybrid approach:
    1. Keyword matching (fast, baseline)
    2. LLM classification (accurate, for ambiguous cases)
    """
    # Quick keyword scan
    keywords_found = []
    for mood, keywords in MOOD_CATEGORIES.items():
        for keyword in keywords:
            if keyword in message.lower():
                keywords_found.append(mood)
    
    if len(keywords_found) == 1:
        return MoodState(mood=keywords_found[0], confidence=0.7)
    
    # Ambiguous - use LLM
    prompt = f"""
    Classify the emotional state of this message.
    Choose ONE primary mood from: happy, sad, anxious, angry, calm, tired, neutral
    
    Message: "{message}"
    
    Respond with JSON: {{"mood": "...", "confidence": 0.0-1.0, "reasoning": "..."}}
    """
    
    result = await llm.classify(prompt)
    return MoodState(**result)
```

**Mood Intensity Scoring:**
```python
def calculate_intensity(message: str, mood: str) -> float:
    """
    Score intensity 1-10 based on:
    - Exclamation marks, capitalization
    - Emotional word intensity
    - Sentence length (very short = intense, very long = rambling anxiety)
    """
    base_score = 5
    
    # Punctuation indicators
    if message.count('!') > 2:
        base_score += 2
    if message.isupper():
        base_score += 2
    
    # Intensity modifiers
    intensity_words = ['really', 'so', 'very', 'extremely', 'completely', 'totally']
    base_score += min(2, sum(1 for word in intensity_words if word in message.lower()))
    
    return min(10, max(1, base_score))
```

---

## Context Building

### Prompt Assembly Pipeline

```python
async def build_conversation_prompt(
    user_id: str,
    session_id: str,
    companion_id: str,
    user_message: str,
    detected_mood: MoodState
) -> str:
    """
    Assemble complete prompt for LLM generation.
    """
    # 1. Load companion system prompt
    companion = await get_companion(companion_id)
    system_prompt = companion.system_prompt
    
    # 2. Retrieve relevant memories
    memories = await retrieve_relevant_memories(
        user_id=user_id,
        query=user_message,
        top_k=5
    )
    
    # 3. Load user profile
    user_profile = await get_user_profile(user_id)
    
    # 4. Get recent conversation history
    recent_messages = await get_session_messages(session_id, limit=10)
    
    # 5. Assemble final prompt
    prompt = f"""
{system_prompt}

---
USER PROFILE:
Name: {user_profile.name}
Primary concerns: {', '.join(user_profile.top_concerns)}
Communication preference: {user_profile.advice_preference}
Known facts: {format_memories(memories)}

---
CURRENT CONTEXT:
Detected mood: {detected_mood.mood} (intensity: {detected_mood.intensity}/10)
Session duration: {get_session_duration(session_id)}

---
RECENT CONVERSATION:
{format_messages(recent_messages)}

---
USER'S CURRENT MESSAGE:
"{user_message}"

---
Respond as {companion.name} would. Keep responses conversational (2-4 paragraphs max).
Show empathy first. Only offer advice if the user seems ready for it.
"""
    
    return prompt
```

---

## Prompt Templates by Mood

### Template: Anxious User
```
COMPANION ADAPTATION FOR ANXIOUS USER:

1. Prioritize grounding and validation
2. Use shorter sentences (easier to process)
3. Avoid overwhelming with options
4. Offer breathing exercises if intensity > 7
5. River or Maya recommended as companions

EXAMPLE RESPONSE STRUCTURE:
- Validate: "I hear how anxious you're feeling"
- Ground: "Let's pause for a moment"
- Normalize: "This is a common response to..."
- Small step: "What's one tiny thing that might help right now?"
```

### Template: Sad/Depressed User
```
COMPANION ADAPTATION FOR SAD USER:

1. Avoid toxic positivity ("Just cheer up!")
2. Validate the pain without amplifying it
3. Gentle encouragement, not pressure
4. Maya or Sam recommended
5. Monitor for crisis indicators (see Safety)

EXAMPLE RESPONSE STRUCTURE:
- Acknowledge: "This sounds really heavy"
- Validate: "It makes sense you'd feel this way"
- Presence: "I'm here with you in this"
- Gentle hope: "When you're ready, we can explore..."
```

### Template: Angry/Frustrated User
```
COMPANION ADAPTATION FOR ANGRY USER:

1. Don't match the anger or be overly calm
2. Validate the frustration
3. Help identify the root cause
4. Alex or Sam recommended
5. Offer constructive outlets

EXAMPLE RESPONSE STRUCTURE:
- Acknowledge: "You sound really frustrated"
- Validate: "That sounds incredibly unfair"
- Explore: "What part of this is bothering you most?"
- Channel: "What would feel helpful right now?"
```

### Template: Happy/Excited User
```
COMPANION ADAPTATION FOR HAPPY USER:

1. Match the energy (within companion character)
2. Celebrate wins genuinely
3. Encourage savoring the moment
4. Luna or Sam recommended
5. Help anchor the positive feeling

EXAMPLE RESPONSE STRUCTURE:
- Celebrate: "That's wonderful! I'm so happy for you!"
- Explore: "Tell me more about how this happened"
- Anchor: "How does this feel in your body?"
- Future: "What does this mean for what's next?"
```

---

## Response Generation

### LLM Configuration
```typescript
interface GenerationConfig {
  model: 'gensee-397b' | 'gensee-flash'; // flash for free tier
  temperature: number; // 0.7 for creative, 0.5 for focused
  maxTokens: number; // 500 typical, 1000 max
  topP: number; // 0.9
  frequencyPenalty: number; // 0.3 (avoid repetition)
  presencePenalty: number; // 0.3 (encourage variety)
  stopSequences: string[]; // ['\n\n\n', 'User:']
}

const DEFAULT_CONFIG: GenerationConfig = {
  model: 'gensee-397b',
  temperature: 0.6,
  maxTokens: 500,
  topP: 0.9,
  frequencyPenalty: 0.3,
  presencePenalty: 0.3,
  stopSequences: ['\n\n\n', 'User:', 'USER:']
};
```

### Response Length Guidelines
```
Free Tier:
- Max 300 tokens per response
- Encourages natural conversation flow
- Voice responses limited to 60 seconds

Premium Tier:
- Max 800 tokens per response
- Longer, more detailed support
- Voice responses up to 5 minutes
```

### Response Quality Checks
```python
async def validate_response(response: str, context: ConversationContext) -> ValidationResult:
    """
    Pre-flight checks before sending response to user.
    """
    issues = []
    
    # Check for medical advice
    if contains_medical_advice(response):
        issues.append("MEDICAL_ADVICE_DETECTED")
        response = add_medical_disclaimer(response)
    
    # Check for crisis mishandling
    if context.safety_flags and not addresses_crisis(response):
        issues.append("CRISIS_NOT_ADDRESSED")
        response = await escalate_to_crisis_protocol(context)
    
    # Check for repetition
    if is_repetitive(response, context.recent_messages):
        issues.append("REPETITIVE_CONTENT")
        response = await regenerate_with_variation(response)
    
    # Check tone alignment
    if not matches_companion_tone(response, context.companion):
        issues.append("TONE_MISMATCH")
        # Log for monitoring, don't block
    
    return ValidationResult(
        valid=len(issues) == 0,
        issues=issues,
        response=response
    )
```

---

## Topic Handling

### Topic Detection
```python
TOPIC_CATEGORIES = {
    'relationships': ['partner', 'dating', 'marriage', 'breakup', 'family', 'friend', 'parent'],
    'work': ['job', 'career', 'boss', 'coworker', 'interview', 'promotion', 'fired'],
    'health': ['doctor', 'symptom', 'diagnosis', 'medication', 'therapy', 'exercise', 'sleep'],
    'mental_health': ['anxiety', 'depression', 'therapy', 'medication', 'panic', 'trauma'],
    'finances': ['money', 'debt', 'bills', 'budget', 'savings', 'expensive'],
    'identity': ['who am I', 'purpose', 'meaning', 'identity', 'transition', 'coming out'],
    'grief': ['loss', 'death', 'grief', 'mourning', 'funeral', 'miss them'],
    'daily_life': ['routine', 'chores', 'errands', 'cooking', 'cleaning', 'shopping']
}

async def detect_topics(message: str) -> List[str]:
    """Detect topics in user message."""
    detected = []
    message_lower = message.lower()
    
    for topic, keywords in TOPIC_CATEGORIES.items():
        if any(keyword in message_lower for keyword in keywords):
            detected.append(topic)
    
    return detected if detected else ['general']
```

### Topic Transition Handling
```python
async def handle_topic_transition(
    old_topics: List[str],
    new_topics: List[str],
    companion: Companion
) -> str:
    """
    Generate smooth transition when user changes topics.
    """
    if not old_topics:
        return ""  # First message, no transition needed
    
    if set(old_topics) == set(new_topics):
        return ""  # Same topic, no transition
    
    # Acknowledge the shift
    transitions = [
        "I want to make sure I'm following you. You were talking about {old}, and now {new}...",
        "That's a shift from what we were discussing. How are you feeling about {new}?",
        "I'm here for whatever you need to talk about. {new} sounds important.",
    ]
    
    return random.choice(transitions).format(
        old=old_topics[0],
        new=new_topics[0]
    )
```

---

## Conversation Flow Patterns

### Pattern 1: Check-In Flow
```
User: "Hey" / "Hi" / "I need to talk"

Companion:
1. Warm greeting using user's name
2. Open-ended invitation
3. Reference previous conversation if relevant

Example (Maya):
"Hey [Name], I'm glad you reached out. How are you doing today? 
I remember last time we talked about [previous topic]—how has that been?"
```

### Pattern 2: Crisis Escalation
```
User: [Crisis indicators detected]

Companion:
1. Validate and stay calm
2. Assess immediate safety
3. Provide resources
4. Never leave user alone with crisis

Example (Any companion):
"I hear how much pain you're in, and I'm really glad you told me. 
Your safety matters so much. Are you in immediate danger right now?

[If yes or unsure]
I want to make sure you have support. Can I share some resources 
for immediate help? You don't have to go through this alone."

→ Trigger safety protocol (see Safety Specs)
```

### Pattern 3: Goal-Setting Flow
```
User: "I want to..." / "I need to..." / "How do I..."

Companion (Alex-style):
1. Clarify the goal
2. Explore motivation
3. Break into steps
4. Identify first action
5. Offer accountability

Example:
"Okay, let's get clear on this. What does success look like for you?
...
That's a great goal. What's motivating you to tackle this now?
...
Let's break this down. What would be a genuinely first step—something 
you could do in the next 24 hours?
...
I love that. Want to check in tomorrow about how it went?"
```

### Pattern 4: Processing Emotions
```
User: [Expressing difficult emotion]

Companion (Luna/Maya-style):
1. Validate the emotion
2. Invite exploration
3. Use metaphor/imagery if appropriate
4. Don't rush to fix

Example (Luna):
"That sounds so heavy. I'm here with you in this.
When you say you feel [emotion], where do you feel it in your body?
...
If that feeling had a color or shape, what would it be?
...
You don't have to fix it right now. Sometimes just letting it 
be here, with witness, is enough."
```

---

## Memory Updates

### Post-Response Memory Actions
```python
async def update_memory_after_exchange(
    user_id: str,
    session_id: str,
    user_message: str,
    assistant_response: str,
    detected_mood: MoodState,
    topics: List[str]
):
    """
    Update memory systems after each exchange.
    """
    # 1. Add to session memory (Redis)
    await redis.append_message(session_id, {
        'role': 'user',
        'content': user_message,
        'mood': detected_mood.mood,
        'topics': topics,
        'timestamp': datetime.now()
    })
    
    await redis.append_message(session_id, {
        'role': 'assistant',
        'content': assistant_response,
        'timestamp': datetime.now()
    })
    
    # 2. Extract and store important facts
    facts = await extract_facts(user_message, assistant_response)
    for fact in facts:
        await db.user_facts.create({
            'user_id': user_id,
            'fact': fact.text,
            'category': fact.category,
            'importance': fact.importance
        })
    
    # 3. Queue for vector embedding (async)
    await queue.embed_message({
        'user_id': user_id,
        'session_id': session_id,
        'message': user_message,
        'mood': detected_mood.mood,
        'topics': topics
    })
    
    # 4. Update mood tracking
    await db.mood_entries.create({
        'user_id': user_id,
        'mood': detected_mood.mood,
        'intensity': detected_mood.intensity,
        'timestamp': datetime.now()
    })
```

---

## API Endpoints

```
POST /api/v1/conversation/message
     → Send message, receive response
     Body: { userId, sessionId, message, companionId }
     Response: { messageId, response, mood, topics }

POST /api/v1/conversation/voice
     → Send voice message, receive voice response
     Body: { userId, sessionId, audioBlob, companionId }
     Response: { messageId, transcription, response, audioUrl }

GET /api/v1/conversation/session/:id
     → Get full session transcript

DELETE /api/v1/conversation/session/:id
     → End and archive session

POST /api/v1/conversation/feedback
     → Rate response quality
     Body: { messageId, rating: 1-5, feedback?: string }
```

---

## Rate Limiting

```
Free Tier:
- 50 messages per day
- 5 minute cooldown after limit
- Standard response time (2-5 seconds)

Premium Tier:
- Unlimited messages
- No cooldown
- Priority processing (1-2 seconds)
- Longer responses enabled
```

---

*Version: 1.0.0*
*Last Updated: 2026-03-22*
