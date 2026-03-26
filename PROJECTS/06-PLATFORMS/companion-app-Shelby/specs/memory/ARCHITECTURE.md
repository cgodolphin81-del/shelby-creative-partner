# Memory Architecture Specification

## Overview

SoulSpace implements a multi-layered memory system enabling companions to remember users, maintain conversation continuity, and personalize interactions over time.

---

## Memory Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    MEMORY ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  SHORT-TERM  │  │  WORKING     │  │  LONG-TERM   │       │
│  │  (Session)   │  │  (Context)   │  │  (Persistent)│       │
│  │              │  │              │  │              │       │
│  │  Current     │  │  Last 10     │  │  User        │       │
│  │  conversation│  │  messages    │  │  profile,    │       │
│  │  context     │  │  + embeddings│  │  preferences,│       │
│  │              │  │              │  │  key events  │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
│         │                 │                 │                │
│         └─────────────────┼─────────────────┘                │
│                           │                                  │
│                  ┌────────▼────────┐                         │
│                  │  VECTOR STORE   │                         │
│                  │  (Semantic      │                         │
│                  │   Retrieval)    │                         │
│                  └────────┬────────┘                         │
│                           │                                  │
│                  ┌────────▼────────┐                         │
│                  │  RELATIONAL DB  │                         │
│                  │  (Structured    │                         │
│                  │   User Data)    │                         │
│                  └─────────────────┘                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Layer 1: Short-Term Memory (Session)

**Purpose:** Maintain context within a single conversation session.

**Implementation:**
- In-memory cache (Redis)
- TTL: 2 hours (extends with activity)
- Stores: Full conversation transcript, detected mood, active topics

**Data Structure:**
```typescript
interface SessionMemory {
  sessionId: string;
  userId: string;
  companionId: string;
  startTime: Date;
  lastActivity: Date;
  messages: Message[];
  detectedMood: MoodState;
  activeTopics: string[];
  safetyFlags: SafetyFlag[];
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  mood?: string;
  topics?: string[];
  voiceUsed?: boolean;
}
```

**Redis Schema:**
```
Key: session:{sessionId}
Value: JSON serialized SessionMemory
TTL: 7200 seconds (2 hours)
```

---

## Layer 2: Working Memory (Context Window)

**Purpose:** Provide recent context for AI responses without overwhelming the model.

**Implementation:**
- Sliding window of last 10 messages
- Summarized context from earlier in conversation
- Embedded for semantic search

**Context Assembly:**
```
┌─────────────────────────────────────────────────────────────┐
│  SYSTEM PROMPT (companion personality)                       │
├─────────────────────────────────────────────────────────────┤
│  USER PROFILE SUMMARY (name, preferences, key facts)         │
├─────────────────────────────────────────────────────────────┤
│  CONVERSATION SUMMARY (earlier topics, resolved issues)      │
├─────────────────────────────────────────────────────────────┤
│  RECENT MESSAGES (last 10 exchanges)                         │
├─────────────────────────────────────────────────────────────┤
│  CURRENT USER MESSAGE                                        │
└─────────────────────────────────────────────────────────────┘
```

**Token Budget:**
- System prompt: ~500 tokens
- User profile: ~200 tokens
- Conversation summary: ~300 tokens
- Recent messages: ~800 tokens
- **Total: ~1,800 tokens** (leaves room for response)

---

## Layer 3: Long-Term Memory (Persistent)

**Purpose:** Store enduring user information for personalization.

### 3A: Structured User Data (PostgreSQL)

**Tables:**

```sql
-- Core user profile
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  timezone VARCHAR(50),
  language VARCHAR(10) DEFAULT 'en',
  subscription_tier VARCHAR(20) DEFAULT 'free',
  preferences JSONB DEFAULT '{}'
);

-- User preferences
CREATE TABLE user_preferences (
  user_id UUID REFERENCES users(id),
  primary_companion_id VARCHAR(50),
  favorite_companions VARCHAR(50)[],
  voice_enabled BOOLEAN DEFAULT true,
  notification_settings JSONB,
  privacy_settings JSONB,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Key life events (user-provided)
CREATE TABLE user_life_events (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  event_type VARCHAR(50), -- 'relationship', 'work', 'health', 'family', 'other'
  description TEXT,
  emotional_impact INTEGER, -- 1-5 scale
  created_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Conversation history (metadata only)
CREATE TABLE conversation_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  companion_id VARCHAR(50),
  started_at TIMESTAMP DEFAULT NOW(),
  ended_at TIMESTAMP,
  message_count INTEGER,
  mood_summary JSONB,
  topics_covered VARCHAR(100)[],
  safety_incidents INTEGER DEFAULT 0
);

-- User-provided important facts
CREATE TABLE user_facts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  category VARCHAR(50), -- 'family', 'work', 'hobbies', 'goals', 'fears'
  fact TEXT,
  importance INTEGER, -- 1-5 scale
  created_at TIMESTAMP DEFAULT NOW(),
  last_referenced TIMESTAMP
);
```

### 3B: Vector Memory (Pinecone/Weaviate)

**Purpose:** Semantic search across all conversation history.

**Vector Database Choice:**
- **Primary:** Pinecone (managed, scalable)
- **Alternative:** Weaviate (open-source, self-hosted)

**Index Schema:**
```yaml
index_name: soulspace-conversations
dimension: 1536  # OpenAI/embedding model
metric: cosine

metadata_fields:
  - user_id: string
  - session_id: string
  - message_id: string
  - role: string (user/assistant)
  - companion_id: string
  - timestamp: number
  - mood: string
  - topics: string[]
  - is_important: boolean
```

**Embedding Strategy:**
```python
# What gets embedded:
- All user messages (always)
- Assistant messages marked as "important"
- User facts and life events

# Embedding model:
- text-embedding-3-small (cost-effective)
- Or text-embedding-3-large (higher quality, premium users)

# Batch processing:
- Embed asynchronously after session ends
- Batch size: 100 vectors
- Retry on failure with exponential backoff
```

**Retrieval Logic:**
```python
async def retrieve_relevant_memories(
    user_id: str,
    query: str,
    top_k: int = 5,
    time_decay: bool = True
) -> List[MemoryResult]:
    """
    Retrieve semantically relevant memories for current conversation.
    
    Args:
        user_id: User identifier
        query: Current user message or topic
        top_k: Number of results to return
        time_decay: Apply recency boost
    
    Returns:
        List of relevant memories with scores
    """
    # Generate embedding for query
    query_embedding = await embed(query)
    
    # Build filter
    metadata_filter = {"user_id": user_id}
    
    # Apply time decay boost (recent memories weighted higher)
    if time_decay:
        # Pinecone hybrid search with recency boost
        results = await vector_store.hybrid_search(
            vector=query_embedding,
            filter=metadata_filter,
            top_k=top_k,
            alpha=0.7  # 70% semantic, 30% recency
        )
    else:
        results = await vector_store.similarity_search(
            vector=query_embedding,
            filter=metadata_filter,
            top_k=top_k
        )
    
    return results
```

---

## Memory Consolidation

**Purpose:** Periodically summarize and compress old conversations.

**Process:**
```
Every 24 hours (or after 10+ sessions):
1. Identify sessions older than 7 days
2. Extract key facts, events, and insights
3. Generate summary using LLM
4. Store summary in user profile
5. Archive raw conversation (optional deletion per privacy settings)
```

**Consolidation Prompt:**
```
You are summarizing a user's conversation history for long-term memory.

Extract and organize:
1. KEY FACTS: Concrete information about the user (name, job, relationships, location)
2. RECURRING THEMES: Topics that appear frequently
3. EMOTIONAL PATTERNS: Common emotional states, triggers, coping strategies
4. GOALS & VALUES: What the user cares about, aspirations
5. IMPORTANT EVENTS: Significant life events mentioned

Format as JSON:
{
  "facts": [...],
  "themes": [...],
  "patterns": [...],
  "goals": [...],
  "events": [...]
}

Be concise. Only include information that would help a companion 
personalize future conversations.
```

---

## User Preferences Memory

**Stored Preferences:**
```typescript
interface UserPreferences {
  // Communication
  preferredCompanion: string;
  companionSwitchingEnabled: boolean;
  voiceEnabled: boolean;
  voiceSpeed: number; // 0.8 - 1.2
  
  // Conversation style
  advicePreference: 'minimal' | 'balanced' | 'active';
  humorLevel: 'none' | 'light' | 'moderate';
  formalityLevel: 'casual' | 'neutral' | 'formal';
  
  // Topics
  preferredTopics: string[];
  avoidedTopics: string[];
  triggerWarnings: string[];
  
  // Notifications
  checkInEnabled: boolean;
  checkInTime: string; // "09:00"
  motivationalMessages: boolean;
  
  // Privacy
  dataRetentionDays: number; // 30, 90, 365, indefinite
  allowMemoryConsolidation: boolean;
  allowAnonymizedDataUse: boolean;
}
```

---

## Mood Tracking & Memory

**Purpose:** Track emotional patterns over time.

**Data Structure:**
```typescript
interface MoodEntry {
  userId: string;
  timestamp: Date;
  mood: 'happy' | 'sad' | 'anxious' | 'angry' | 'calm' | 'tired' | 'excited';
  intensity: number; // 1-10
  triggers?: string[];
  companionId: string;
  sessionDuration: number; // minutes
  userReported?: boolean; // vs AI-detected
}

interface MoodPattern {
  userId: string;
  averageMood: string;
  moodVariability: number;
  commonTriggers: string[];
  bestTimeOfDay: string;
  worstTimeOfDay: string;
  improvementTrend: 'improving' | 'stable' | 'declining';
  lastUpdated: Date;
}
```

**Weekly Mood Report (Premium Feature):**
```
"Hey [Name], here's your emotional wellness check-in:

📊 This Week in Review
- Average mood: Calm (6.5/10)
- Best day: Wednesday
- Most common feeling: Anxious (Mon-Tue)

🌱 Patterns We Noticed
- You feel calmer after morning conversations
- Work stress peaks on Mondays
- Sleep quality correlates with mood

💡 Gentle Suggestions
- Try a River session before bed
- Consider scheduling Alex for Monday mornings
```

---

## Privacy & Data Controls

**User Controls:**
```
Settings → Privacy → Memory

☐ Allow conversation memory (required for personalization)
☐ Allow mood tracking
☐ Allow memory consolidation (summarization)
☐ Allow anonymized data for model improvement

Data Retention:
○ 30 days
○ 90 days
○ 1 year
○ Indefinite (recommended for continuity)

[Delete All Memory] (irreversible)
[Export My Data] (JSON download)
```

**GDPR Compliance:**
- Right to access: Export feature
- Right to deletion: Delete all memory
- Right to correction: Edit user facts
- Data portability: Standard JSON format

---

## API Endpoints

```
GET  /api/v1/user/memory/summary
     → Returns consolidated user memory summary

GET  /api/v1/user/memory/facts
     → Returns user-provided facts

POST /api/v1/user/memory/facts
     → Add new fact

DELETE /api/v1/user/memory/facts/:id
     → Remove fact

GET  /api/v1/user/memory/conversations
     → List conversation history (metadata)

GET  /api/v1/user/memory/conversations/:id
     → Get full conversation transcript

DELETE /api/v1/user/memory/conversations/:id
     → Delete specific conversation

POST /api/v1/user/memory/consolidate
     → Trigger manual consolidation

DELETE /api/v1/user/memory/all
     → Delete all user memory (GDPR)

GET  /api/v1/user/memory/export
     → Download all data (JSON)
```

---

## Technical Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Session Cache | Redis | Short-term memory |
| Relational DB | PostgreSQL 15 | User data, preferences |
| Vector DB | Pinecone | Semantic search |
| Embeddings | OpenAI text-embedding-3 | Vector generation |
| ORM | Prisma | Database access |
| Queue | Bull (Redis) | Async memory tasks |

---

*Version: 1.0.0*
*Last Updated: 2026-03-22*
