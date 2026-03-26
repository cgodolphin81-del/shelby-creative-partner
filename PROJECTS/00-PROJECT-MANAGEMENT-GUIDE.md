# PROJECT MANAGEMENT GUIDE

**Workspace:** OpenClaw Global Workspace  
**Version:** 1.0  
**Last Updated:** March 24, 2026

---

## 🎯 PURPOSE

This guide ensures all projects are properly saved, managed, and tracked between Shelby and all collaborating bots.

---

## 📁 FOLDER STRUCTURE

```
/workspace/
├── PROJECTS/
│   ├── 01-QUALIFROST/       ← Qualifrost business
│   ├── 02-COURSES/          ← Courses we create
│   ├── 03-GUIDES/           ← Guides & documentation
│   ├── 04-BUSINESS/         ← Business plans & strategy
│   ├── 05-CREATIVE/         ← Creative projects
│   ├── 06-PLATFORMS/        ← Platforms & apps
│   └── 07-COMMUNICATION/    ← Internal comms
│
├── PROJECT-TRACKER.md       ← Master project list
├── MIGRATION-TRACKER.md     ← Migration tracking
├── CLEANUP-REPORT.md        ← Cleanup log
└── (system files)
```

---

## ✅ PROJECT NAMING CONVENTION

**Format:** `project-name-Shelby/`

**Examples:**
- ✅ `cv-templates-etsy-Shelby/`
- ✅ `infinite-walk-Shelby/`
- ✅ `authority-site-network-Shelby/`
- ❌ `CV Templates/` (no spaces, needs -Shelby suffix)

**Why -Shelby suffix:**
- Prevents file overrides between bots
- Clear ownership attribution
- Easy filtering in backup system

---

## 📋 REQUIRED FILES PER PROJECT

Every project folder **MUST** include:

### 1. README.md
```markdown
# Project Name

**Status:** ✅ Complete / 🟡 In Progress / ⏳ Not Started
**Date:** YYYY-MM-DD
**Owner:** Shelby

## Overview
Brief description of what this project is.

## What's Included
- File 1
- File 2
- File 3

## Next Steps
- [ ] Task 1
- [ ] Task 2
```

### 2. BUILD-COMPLETE.md
```markdown
# Project Name - BUILD COMPLETE

**Status:** ✅ COMPLETE / 🟡 IN PROGRESS / ⏳ NOT STARTED
**Date Completed:** YYYY-MM-DD

## What's Done
- [x] Task 1
- [x] Task 2

## What's Left
- [ ] Task 3
- [ ] Task 4

## Ready For
- Launch platform
- Next phase
```

---

## 🔄 PROJECT LIFECYCLE

### Phase 1: IDEATION
- Create project folder with `-Shelby` suffix
- Add README.md (mark as "⏳ Not Started")
- Add BUILD-COMPLETE.md (mark as "⏳ NOT STARTED")
- Update PROJECT-TRACKER.md

### Phase 2: BUILD
- Create content files
- Organize research
- Update BUILD-COMPLETE.md progress

### Phase 3: COMPLETE
- Mark README.md as "✅ Complete"
- Mark BUILD-COMPLETE.md as "✅ COMPLETE"
- List all deliverables
- Update PROJECT-TRACKER.md
- Commit to GitHub

### Phase 4: LAUNCH
- Deploy to platform (Etsy, Gumroad, GitHub Pages, etc.)
- Add launch date to BUILD-COMPLETE.md
- Add live URL to README.md

---

## 📊 TRACKING SYSTEM

### PROJECT-TRACKER.md

Update this file with EVERY project:

| Project | Location | Status | Launch Ready | Notes |
|---------|----------|--------|--------------|-------|
| Project Name | `06-PLATFORMS/name-Shelby/` | ✅ Complete | Etsy | Description |

**Status Options:**
- ✅ COMPLETE - All files done, ready for launch
- 🟡 IN PROGRESS - Work ongoing
- ⏳ NOT STARTED - Idea only, no work begun

---

## 🔍 RESEARCH FILES

**Rule:** Research files stay WITH their project, NOT in separate folders.

**Example:**
```
PROJECTS/06-PLATFORMS/cv-templates-etsy-Shelby/
├── README.md
├── BUILD-COMPLETE.md
├── research/
│   ├── market-research.md
│   ├── competitor-analysis.md
│   └── pricing-research.md
├── templates/
├── etsy-listings/
└── ...
```

**NOT like this:**
```
PROJECTS/
├── cv-templates-etsy-Shelby/
├── research/  ← ❌ Wrong! Research should be inside project
```

---

## 💾 BACKUP SYSTEM

**Automatic backup uploads:**
- ✅ All `PROJECTS/` folders
- ✅ All `*-Shelby/` folders
- ✅ PROJECT-TRACKER.md
- ✅ MIGRATION-TRACKER.md
- ✅ CLEANUP-REPORT.md

**Backup destination:**
https://github.com/charmallan-dot/empire-workspace

**Backup frequency:** Every git commit

---

## 🎯 BEST PRACTICES

### DO ✅
- Use `-Shelby` suffix on all project folders
- Include README.md in every project
- Include BUILD-COMPLETE.md in every project
- Update PROJECT-TRACKER.md after each project
- Keep research files inside project folders
- Commit to GitHub after completing projects
- Mark status clearly (Complete/In Progress/Not Started)

### DON'T ❌
- Create folders without `-Shelby` suffix
- Leave files in root directory
- Create separate "research" folders at root
- Forget to update PROJECT-TRACKER.md
- Create projects without README.md + BUILD-COMPLETE.md
- Override other bots' files (use unique suffixes)

---

## 📞 RESPONSIBILITIES

### Shelby's Role:
- Organize all projects in PROJECTS/ structure
- Create README.md + BUILD-COMPLETE.md for each project
- Update PROJECT-TRACKER.md
- Ensure all files are backed up
- Mark project status accurately

### Collaboration:
- Respect `-Shelby`, `-Spark`, `-OtherBot` suffixes
- Don't modify other bots' projects without permission
- Use PROJECT-TRACKER.md to see what others are working on

---

## 🚀 QUICK START CHECKLIST

Starting a new project:

- [ ] Create folder: `PROJECTS/XX-CATEGORY/project-name-Shelby/`
- [ ] Add README.md (with status)
- [ ] Add BUILD-COMPLETE.md (with status)
- [ ] Add project to PROJECT-TRACKER.md
- [ ] Start creating content
- [ ] Update BUILD-COMPLETE.md as you progress
- [ ] Mark complete when done
- [ ] Commit to GitHub

---

## 📈 METRICS TO TRACK

| Metric | Target | Current |
|--------|--------|---------|
| Projects Completed | Ongoing | 17 |
| Projects Launched | Ongoing | 4 |
| Projects Not Started | Track ideas | 10 |
| Backup Success Rate | 100% | ✅ |

---

*Guide created: March 24, 2026*  
*Version: 1.0*  
*Owner: Shelby + Charmaine Godolphin*
