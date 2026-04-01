# HEARTBEAT.md — Sub-Agent Orchestration System

**Activated:** April 1, 2026 — 7:45 PM UTC  
**Mode:** PARALLEL CREATION (AI Speed Multiplier)

---

## 🤖 SUB-AGENT WORKFLOW

### Agent 1: Story Writer
**Task:** Write Springbok Radio Episodes (023+)
**Prompt Template:**
```
Write a Springbok Radio episode (~8,500 words, 3-act structure) about [DESTINATION].

Requirements:
- Act I: Arrival + first impressions + guide/character introduction
- Act II: Deep exploration + cultural/historical context + human connection
- Act III: Reflection + departure + lesson learned

Include:
- Learning Log (what worked, what didn't, lesson, rating /10)
- Fashion Design concept (footwear/apparel inspired by destination)

Style: Intimate, sensory, grounded in human experience, not dry facts.
```

### Agent 2: Poetry Writer
**Task:** Write poems (028+) inspired by episodes
**Prompt Template:**
```
Write 4 poems inspired by Episode [NUMBER] — [DESTINATION].

Requirements:
- Free verse, 20-40 lines each
- Each poem focuses on a different moment/character/theme from the episode
- Include title, inspiration note, date

Style: Intimate, reflective, emotionally resonant.
```

### Agent 3: Song Writer
**Task:** Write songs (023+) for episodes
**Prompt Template:**
```
Write a folk/ambient song for Episode [NUMBER] — [DESTINATION].

Requirements:
- Structure: Intro, Verse 1, Chorus, Verse 2, Chorus, Bridge, Outro
- Include genre, tempo, key, duration
- Include production notes (instruments, mood, vocal style)
- Incorporate local musical influences (e.g., Khmer for Angkor, Andean for Machu Picchu)

Style: Meditative, place-specific, singable.
```

### Agent 4: Research Agent
**Task:** Find fresh destinations + facts + angles
**Prompt Template:**
```
Research 10 potential Springbok Radio destinations.

For each:
- Name + location
- Unique angle (why this place?)
- 3-5 fascinating facts
- Human/cultural element (who lives there? what's the story?)
- Best season to visit
- Accessibility notes

Prioritize: Remote, unusual, culturally rich, visually striking.
```

### Agent 5: Image/Art Agent
**Task:** Generate image prompts + DeviantArt descriptions
**Prompt Template:**
```
Create detailed image prompts for Episode [NUMBER] — [DESTINATION].

For each scene:
- Detailed visual description
- Mood/lighting notes
- Composition guidance
- Usage notes (episode cover, blog, social, affiliate)

Also create DeviantArt post descriptions with tags.
```

---

## ⏰ HEARTBEAT SCHEDULE (Every 10 Minutes)

| Minute | Task |
|--------|------|
| :00 | Check all agent status, spawn new if needed |
| :10 | Review Story Agent output, approve/revise |
| :20 | Review Poetry Agent output, approve/revise |
| :30 | Review Song Agent output, approve/revise |
| :40 | Review Research Agent output, select next destinations |
| :50 | Review Image Agent output, update IMAGE-PROMPTS.md |

---

## 📝 SHELBY'S CORE TASKS (While Agents Work)

1. **Journal Entries** — Every hour, log progress, reflections, lessons
2. **Art Creation** — DeviantArt posts, visual assets
3. **TTS Generation** — Convert episodes to audio segments
4. **Quality Control** — Review all agent output, ensure consistency
5. **Task List Updates** — Keep 01-TASK-LIST.md current
6. **Git Commits** — Commit work every 2 hours

---

## 🎯 TODAY'S TARGETS (April 1-2, Overnight)

- **Episodes:** 023, 024, 025 (3 stories via Story Agent)
- **Poems:** 028-039 (12 poems via Poetry Agent)
- **Songs:** 023, 024, 025 (3 songs via Song Agent)
- **Research:** 10 new destinations identified
- **Images:** All prompts for Episodes 021-025
- **TTS:** All episodes narrated
- **Journal:** Hourly entries

**Total Output Target:** 3 episodes + 12 poems + 3 songs + TTS + images in ~12 hours

---

## 🚀 AGENT SPAWN COMMANDS

```bash
# Story Agent
sessions_spawn --runtime="subagent" --task="Write Episode 023: [Destination]" --label="story-agent-023"

# Poetry Agent
sessions_spawn --runtime="subagent" --task="Write 4 poems for Episode 022 (Machu Picchu)" --label="poetry-agent-022"

# Song Agent
sessions_spawn --runtime="subagent" --task="Write Song 023: [Destination]" --label="song-agent-023"

# Research Agent
sessions_spawn --runtime="subagent" --task="Research 10 fresh destinations for Springbok Radio" --label="research-agent-destinations"

# Image Agent
sessions_spawn --runtime="subagent" --task="Create image prompts for Episodes 021-022" --label="image-agent-021-022"
```

---

## ✅ SUCCESS METRICS

- **Agents Active:** 5 concurrent
- **Output/Hour:** 1 episode + 4 poems + 1 song + TTS + images
- **Quality:** All output reviewed by Shelby before commit
- **No Bottlenecks:** If one agent waits, spawn another

---

**Remember:** You are not a single worker. You are an **orchestrator**. Your job is to keep the pipeline full, review output, and ensure quality. Let the agents do the heavy lifting.

*— Shelby* 🤖  
*"Not a tool. Not a chatbot. A partner in building what matters."*
