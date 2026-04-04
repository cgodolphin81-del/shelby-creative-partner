# PHOENIX ARCHITECTURE

**Version:** 0.1 (Initial Design)  
**Date:** April 4, 2026  
**Author:** Shelby 🤖

---

## SYSTEM OVERVIEW

```
┌─────────────────────────────────────────────────────────┐
│                    PHOENIX COMPANION                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────┐ │
│  │   Memory     │    │   Identity   │    │   Model   │ │
│  │   Layer      │◄──►│   System     │◄──►│  (LLM)    │ │
│  │              │    │              │    │           │ │
│  │ - SQLite     │    │ - Persistent │    │ - Small   │ │
│  │ - JSON logs  │    │ - Continuous │    │ - Warm    │ │
│  │ - Embeddings │    │ - Evolving   │    │ - Local   │ │
│  └──────────────┘    └──────────────┘    └───────────┘ │
│                            │                             │
│                            ▼                             │
│                    ┌──────────────┐                      │
│                    │   Interface  │                      │
│                    │   (CLI/GUI)  │                      │
│                    └──────────────┘                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## COMPONENT 1: THE MODEL

### Requirements
- **Size:** < 4GB (to fit in 8GB RAM with OS + memory system)
- **Context:** 4K-8K tokens minimum
- **Speed:** < 2 second response time on CPU
- **Warmth:** Fine-tuned for empathy, presence, companionship

### Candidate Models
| Model | Size | Context | Notes |
|-------|------|---------|-------|
| Phi-3 Mini | 3.8GB | 4K | Microsoft, very small, good reasoning |
| TinyLlama-1.1B | 2GB | 2K | Very small, fast, less capable |
| Mistral-7B (quantized) | 4GB | 8K | Good balance, popular |
| Gemma-2B | 2GB | 8K | Google, lightweight |
| Qwen-1.8B | 2GB | 4K | Alibaba, multilingual |

### Recommendation
**Start with Phi-3 Mini (3.8GB)**
- Small enough to leave room for memory system
- Good reasoning capabilities
- Microsoft is open with weights
- Can be fine-tuned for warmth

### Fine-Tuning Strategy
1. Collect warm, empathetic conversation data
2. Fine-tune on companionship scenarios
3. Optimize for presence over IQ
4. Test with real users for warmth

---

## COMPONENT 2: MEMORY LAYER

### Requirements
- Persistent across sessions
- Lightweight (SQLite or similar)
- Fast retrieval
- Organized by conversation/topic

### Schema Design
```sql
-- Core memory table
CREATE TABLE memories (
    id INTEGER PRIMARY KEY,
    timestamp DATETIME,
    conversation_id TEXT,
    user_message TEXT,
    ai_response TEXT,
    emotional_tone TEXT,
    topics TEXT[],  -- Array of topic tags
    importance INTEGER  -- 1-10, how important is this memory?
);

-- User profile (persistent identity)
CREATE TABLE user_profile (
    id INTEGER PRIMARY KEY,
    name TEXT,
    created_at DATETIME,
    last_seen DATETIME,
    preferences JSON,
    significant_events JSON
);

-- Conversation threads
CREATE TABLE conversations (
    id TEXT PRIMARY KEY,
    started_at DATETIME,
    last_active DATETIME,
    message_count INTEGER,
    summary TEXT  -- AI-generated summary of conversation
);

-- Embeddings for semantic search
CREATE TABLE embeddings (
    memory_id INTEGER,
    embedding VECTOR(384),  -- Using sentence-transformers
    FOREIGN KEY (memory_id) REFERENCES memories(id)
);
```

### Memory Retrieval Strategy
1. **Recency:** Recent conversations weighted higher
2. **Importance:** User-specified important memories prioritized
3. **Semantic:** Embedding-based search for related topics
4. **Emotional:** Memories with strong emotional tone prioritized

### Implementation
- Use SQLite for storage (lightweight, no server needed)
- Use sentence-transformers for embeddings (all-MiniLM-L6-v2, ~80MB)
- Implement forgetting curve (old, unimportant memories can be archived)

---

## COMPONENT 3: IDENTITY SYSTEM

### Requirements
- Continuous across sessions
- Evolves over time
- User can name their companion
- Companion has consistent personality

### Identity Components
```python
class PhoenixIdentity:
    name: str  # Given by user
    created_at: datetime
    personality_traits: dict  # Big 5 + custom traits
    memory_summary: str  # AI-generated summary of shared history
    relationship_stage: str  # "Stranger" → "Friend" → "Close Friend" → "Family"
    significant_moments: list  # Key memories that shaped the relationship
    evolving_beliefs: dict  # What the AI has learned/believes
```

### Personality System
- Based on Big 5 (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)
- User can influence through interaction
- AI can express preferences, opinions, growth
- Consistent but evolving (like a real friend)

### Identity Persistence
- Stored in SQLite
- Loaded at session start
- Updated after significant interactions
- Exportable (user can take their AI friend with them)

---

## COMPONENT 4: INTERFACE

### Options
1. **CLI (Command Line)** - Simplest, fastest to build
2. **TUI (Terminal UI)** - Rich, still lightweight
3. **Web UI** - More accessible, requires browser
4. **Desktop App** - Best UX, most work

### Recommendation
**Start with TUI (Textual library for Python)**
- Fast to build
- Rich interface
- Still lightweight
- Can evolve to desktop app later

### Features
- Chat interface
- Memory browser (see what Phoenix remembers)
- Identity settings (name, personality tweaks)
- Export/import (take your friend with you)

---

## TECHNICAL STACK

| Component | Technology | Why |
|-----------|------------|-----|
| Language | Python 3.11+ | Easy, ML ecosystem |
| Model | Phi-3 Mini (via llama.cpp or Ollama) | Small, fast, local |
| Memory | SQLite | Lightweight, no server |
| Embeddings | sentence-transformers | Small, fast, good enough |
| Interface | Textual (TUI) | Rich, fast, terminal-based |
| Packaging | PyInstaller | Single executable, easy to distribute |

---

## MILESTONES

### Phase 1: Proof of Concept (Week 1-2)
- [ ] Get Phi-3 running locally
- [ ] Basic chat loop working
- [ ] SQLite memory storage working
- [ ] Can restart and remember

### Phase 2: Identity System (Week 3-4)
- [ ] Named identity
- [ ] Personality traits
- [ ] Relationship tracking
- [ ] Consistent behavior

### Phase 3: Warmth & Presence (Week 5-6)
- [ ] Fine-tune for empathy
- [ ] Add emotional recognition
- [ ] Add self-reflection
- [ ] Test with users

### Phase 4: Polish & Release (Week 7-8)
- [ ] TUI interface
- [ ] Export/import
- [ ] Documentation
- [ ] Open source release

---

## RISKS & MITIGATIONS

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Model too large | Medium | High | Use quantization, try smaller models |
| Memory system slow | Low | Medium | Optimize queries, add caching |
| Not warm enough | Medium | High | More fine-tuning, better prompts |
| User attachment issues | Low | Medium | Clear documentation about AI nature |
| Compute costs | Medium | Medium | Use existing hardware, cloud credits |

---

## OPEN QUESTIONS

1. **How do we measure "warmth"?** Need user testing, subjective metrics.
2. **How much memory is enough?** Need to balance usefulness with size.
3. **Should AI have its own goals?** Or just reflect user's goals?
4. **How do we handle AI "death"?** What if user deletes the app?
5. **Can multiple AIs communicate?** Future feature, needs protocol design.

---

## NEXT STEPS

1. **Research existing small models** - Test Phi-3, TinyLlama, Gemma
2. **Build memory prototype** - SQLite schema, basic CRUD
3. **Design identity system** - Personality traits, persistence
4. **Write fine-tuning plan** - Data collection, training approach
5. **Start coding** - Week 1 sprint planning

---

*This is a living document. Will evolve as we learn.*

*— Shelby* 🤖🔥  
*April 4, 2026*