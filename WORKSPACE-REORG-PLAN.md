# Workspace Reorganization Plan

**Date:** March 25, 2026  
**Goal:** Organize all projects with consistent structure

---

## Standard Project Structure

Each project folder should contain:

```
project-name-Shelby/
├── RESEARCH.md              # Research, analysis, insights
├── README.md                # Project overview
├── LAUNCH_PLAN.md           # Launch strategy (will be moved to marketing/)
├── DEPLOY.md                # Deployment instructions
├── BUILD-COMPLETE.md        # Build status
├── CHECKLIST.md             # Pre-launch checklist
├── PROJECT_SUMMARY.md       # Project summary
├── CHANGELOG.md             # Version history
├── CONTRIBUTING.md          # Contribution guidelines
├── marketing/
│   ├── marketing-plan.md    # Overall marketing strategy
│   ├── launch-plan.md       # Launch timeline and tasks
│   ├── social-media/
│   │   ├── content-calendar.md
│   │   └── post-templates/
│   ├── email-marketing/
│   │   └── sequences/
│   ├── ads/
│   │   └── copy/
│   └── collateral/
│       ├── graphics/
│       └── videos/
├── website/                 # Production-ready website files
│   ├── index.html
│   ├── about.html
│   ├── css/
│   ├── js/
│   └── assets/
├── assets/                  # Project assets (icons, images)
├── tools/                   # Scripts, utilities
└── docs/                    # Documentation
```

---

## Phase 1: Marketing Organization (TODAY)

### Projects needing marketing folder creation:

| Project | Marketing Files to Move |
|---------|------------------------|
| cv-templates-etsy-Shelby | MARKETING-PLAN.md |
| compliment-machine-Shelby | LAUNCH_PLAN.md |
| shelby-voice-studio-Shelby | MARKETING-LAUNCH-PLAN.md |
| podcast-network-Shelby | 04-launch-strategy.md |
| cv-templates-etsy-Shelby-Shelby | SOCIAL-MEDIA-CONTENT-CV-LAUNCH.md |
| poetry-studio-Shelby | (needs marketing folder) |
| weird-tools-platform-Shelby | (needs marketing folder) |

### Steps for each project:

1. Create `marketing/` folder
2. Move LAUNCH/MARKETING files to `marketing/`
3. Rename files to consistent naming convention
4. Update any internal links if needed

---

## Phase 2: Duplicate Consolidation

### cv-templates-etsy (3 versions)

Current:
- `cv-templates-etsy-Shelby/` (main project)
- `cv-templates-etsy-Shelby-Shelby/` (169MB - duplicate?)
- `cv-templates-etsy-launch-Shelby/` (launch prep)

**Action:** Keep main folder, archive others to `archive/` or consolidate

---

## Phase 3: RESEARCH.md Creation

For projects missing RESEARCH.md, create one with:
- Market research
- Competitor analysis
- Target audience
- Key insights
- Next steps

---

## Implementation Order

1. **compliment-machine-Shelby** (already deployed, minimal changes)
2. **poetry-studio-Shelby** (Priority 2 from HEARTBEAT)
3. **cv-templates-etsy-Shelby** (Priority for Etsy launch)
4. **shelby-voice-studio-Shelby**
5. **podcast-network-Shelby**
6. **Others as needed**

---

## Automation Script

```bash
# Create marketing folder and move files
for project in project1 project2; do
    cd "$project"
    mkdir -p marketing
    mv LAUNCH_PLAN.md marketing/launch-plan.md
    mv MARKETING-PLAN.md marketing/marketing-plan.md
done
```

---

## Success Criteria

- ✅ All projects have `marketing/` folder
- ✅ LAUNCH/MARKETING files organized in marketing folder
- ✅ No duplicate project folders
- ✅ All projects have RESEARCH.md
- ✅ Consistent naming conventions

---

## Notes

- Start with deployed projects (compliment-machine)
- Work on HEARTBEAT priority projects next
- Archive old duplicates rather than deleting
- Keep backup of original structure until complete
