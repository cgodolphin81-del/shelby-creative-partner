# 🎨 PROMPT MASTER TRACKER — All Image Generation Prompts

**Purpose:** Single source of truth for ALL prompts across ALL projects.  
**Orchestrator:** Shelby  
**Rule:** Every prompt has a UNIQUE ID. All prompts link bidirectionally.

---

## 🎯 How This Works

1. **Unique ID Format:** `[ProjectID]-[PromptNumber]` (e.g., `001-001`, `003-015`)
2. **All Prompts Here:** Every prompt for every project
3. **Bidirectional Links:** Project files link to prompt IDs, this tracker links back
4. **Highly Detailed:** Every prompt is production-ready (like your waste-to-energy example)

---

## 📊 PROMPT LIBRARY

### Project 001: CV Templates Etsy
| Prompt ID | Description | Prompt Text | Status | Used In |
|-----------|-------------|-------------|--------|---------|
| 001-001 | CV Template Mockup 1 | [PENDING — Agent will create] | ⏳ Pending | Listing #1 |
| 001-002 | CV Template Mockup 2 | [PENDING — Agent will create] | ⏳ Pending | Listing #2 |

---

### Project 002: Shelby Travels Affiliate
| Prompt ID | Description | Prompt Text | Status | Used In |
|-----------|-------------|-------------|--------|---------|
| 002-001 | Bali Destination Hero | [PENDING — Agent will create] | ⏳ Pending | Bali guide |
| 002-002 | Japan Destination Hero | [PENDING — Agent will create] | ⏳ Pending | Japan guide |

---

### Project 003: Springbok Radio Podcast
| Prompt ID | Description | Prompt Text | Status | Used In |
|-----------|-------------|-------------|--------|---------|
| 003-001 | Danakil Depression Episode Art | Hyperrealistic aerial drone photography, wide-angle shot from 150 metres altitude, looking down at the Danakil Depression in Ethiopia at golden hour. Vibrant mineral pools in neon greens, oranges, and yellows contrast with rust-red earth. Steam plumes rise from geothermal vents catching the orange sunset light. In the background, the Erta Ale volcano silhouette under a vivid desert sky. Ultra-sharp detail, photorealistic, cinematic colour grading, no text, no people. Aspect ratio 16:9. | ✅ Complete | Episode 001 |
| 003-002 | Erta Ale Volcano Episode Art | [To be written — Agent will create detailed prompt] | ⏳ Pending | Episode 002 |
| 003-003 | Salar de Uyuni Episode Art | [To be written — Agent will create detailed prompt] | ⏳ Pending | Episode 003 |
| 003-004 | Serengeti Migration Episode Art | [To be written — Agent will create detailed prompt] | ⏳ Pending | Episode 004 |
| 003-005 | Petra Episode Art | Hyperrealistic aerial view of Petra, Jordan at sunrise. The Treasury (Al-Khazneh) carved into rose-red sandstone cliffs, warm golden light illuminating the facade. Wide-angle shot from 200 metres altitude showing the Siq entrance canyon in foreground. Desert landscape with scattered acacia trees. Vivid blue sky with wispy clouds. Ultra-sharp detail, photorealistic, cinematic colour grading, no text, no people. Aspect ratio 16:9. | ✅ Complete | Episode 005 |

---

### Project 004: AI Content Empire
| Prompt ID | Description | Prompt Text | Status | Used In |
|-----------|-------------|-------------|--------|---------|
| 004-001 | [PENDING — Product definition needed] | [PENDING] | ⏳ Blocked | [TBD] |

---

### Project 005: Poetry Studio
| Prompt ID | Description | Prompt Text | Status | Used In |
|-----------|-------------|-------------|--------|---------|
| 005-001 | Poetry Studio Hero Image | [Already created for website] | ✅ Complete | Landing page |

---

### Project 006: Compliment Machine
| Prompt ID | Description | Prompt Text | Status | Used In |
|-----------|-------------|-------------|--------|---------|
| 006-001 | Compliment Machine Hero | [Already created for website] | ✅ Complete | Landing page |

---

## 📝 PROMPT TEMPLATE

```markdown
### [ProjectID]-[PromptNumber]: [Description]

**Full Prompt:**
[Complete, detailed prompt — like the waste-to-energy example:
- Camera angle and altitude
- Subject details (architecture, colors, materials)
- Lighting (golden hour, specific time)
- Background elements
- Mood/atmosphere
- Technical specs (ultra-sharp, photorealistic, aspect ratio)
- Exclusions (no text, no people)]

**Status:** ⏳ Pending / ✅ Complete / 🚫 Rejected

**Used In:** [Where this prompt is used — file, listing, episode]

**Variations:**
- V1: [First version if iterating]
- V2: [Second version]

**Notes:** [Any learnings about what works]
```

---

## 🔗 BIDIRECTIONAL LINKING RULE

**In Project Files:**
```markdown
## Assets
- Episode Art: Prompt `003-001` (see PROMPT-MASTER-TRACKER.md)
```

**In This Tracker:**
```markdown
| Prompt ID | Used In |
|-----------|---------|
| 003-001 | Episode 001, `PROJECTS/003-springbok-radio/episodes/001-danakil.md` |
```

---

## 📊 PROMPT STATISTICS

| Project | Total Prompts | Complete | Pending | Blocked |
|---------|---------------|----------|---------|---------|
| 001 CV Templates | 55 | 0 | 55 | 0 |
| 002 Shelby Travels | 12 | 0 | 12 | 0 |
| 003 Springbok Radio | 19 | 3 | 16 | 0 |
| 004 AI Content Empire | 0 | 0 | 0 | 0 |
| 005 Poetry Studio | 16 | 1 | 15 | 0 |
| 006 Compliment Machine | 1 | 1 | 0 | 0 |
| **TOTAL** | **103** | **5** | **98** | **0** |

---

**Last Updated:** 2026-03-31 13:50 UTC  
**Next Review:** 2026-03-31 14:00 UTC (10-min heartbeat)
