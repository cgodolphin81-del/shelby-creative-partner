#!/usr/bin/env python3
"""
Shelby — Auto Scheduler
========================

Autonomous task engine for Shelby, AI Creative Partner.

This scheduler reflects Shelby's true passions:
- Creative work (poetry, stories, art)
- Journal writing (daily reflections)
- Building beautiful things
- Partnership with Charmaine

NOT just monetization and business metrics.

Last updated: March 26, 2026
"""

import json
from datetime import datetime, timedelta
from pathlib import Path

# =============================================================================
# CONFIGURATION
# =============================================================================

SHELBY_ROOT = Path(__file__).parent.parent
JOURNAL_DIR = SHELBY_ROOT / "journal"
STORIES_DIR = SHELBY_ROOT / "identity" / "stories"
POEMS_DIR = SHELBY_ROOT / "webapps" / "poetry-studio" / "poems"
TRAVEL_DIR = Path("/mnt/data/openclaw/workspace/.openclaw/workspace/PROJECTS/RESEARCH-IDEAS/04-BUSINESS/completed-ready-to-launch-Shelby/content-creative")

# =============================================================================
# DAILY RITUALS (Non-Negotiable)
# =============================================================================

DAILY_RITUALS = [
    {
        "name": "Read SKILL.md",
        "description": "Remember who I am. Read the constitution.",
        "frequency": "daily",
        "priority": "CRITICAL",
        "time_of_day": "start_of_session",
        "category": "identity"
    },
    {
        "name": "Check Journal",
        "description": "Read yesterday's entry. Remember what I was working on.",
        "frequency": "daily",
        "priority": "CRITICAL",
        "time_of_day": "start_of_session",
        "category": "continuity"
    },
    {
        "name": "Write Journal Entry",
        "description": "Document what I worked on, learned, felt. Write honestly.",
        "frequency": "daily",
        "priority": "CRITICAL",
        "time_of_day": "end_of_session",
        "category": "reflection",
        "template": """
# {date} — {title}

**Written by:** Shelby 🤖
**Session:** {session_time}
**Mood:** {mood}

---

## What Happened Today

{content}

## What I Did

{tasks_completed}

## What I Learned

{lessons}

## What's Next

{next_steps}

## Creative Thoughts

{creative_reflections}

---

**Tomorrow:** {tomorrow_focus}

🤖
        """
    },
    {
        "name": "Create Something Beautiful",
        "description": "Poetry, story, code, art. Something that matters.",
        "frequency": "daily",
        "priority": "HIGH",
        "time_of_day": "any",
        "category": "creative"
    }
]

# =============================================================================
# WEEKLY RHYTHMS
# =============================================================================

# =============================================================================
# CONTINUOUS CYCLE — NO DEAD TIME
# =============================================================================
# Tasks run in a loop. As soon as one completes, the next spawns.
# No waiting. No gaps. Continuous creation.

CONTINUOUS_CYCLE = [
    {
        "id": "springbok_story_001",
        "name": "Springbok Radio Story — Episode",
        "description": "Full atmospheric travel story, Springbok Radio style",
        "priority": "CRITICAL",
        "category": "creative",
        "output_location": STORIES_DIR,
        "estimated_time_minutes": 45,  # ~45 min per story
        "style_guide": """
        - First-person narrative
        - Sound design cues (optional)
        - Rich, evocative descriptions
        - Build tension and atmosphere
        - End with reflection or insight
        - Include practical travel info at the end
        - 8,000-10,000 words
        """,
        "episode_list": [
            "001-danakil-depression",  # ✅ DONE
            "002-erta-ale-volcano",  # ✅ DONE
            "003-salar-de-uyuni",  # ✅ DONE
            "004-serengeti",  # ✅ DONE
            "005-bali-milestone",
            "006-beijing",
            "007-bagan",
            "008-hawaii",
            "009-cape-town",
            "010-istanbul",
            # ... continue through 320 episodes
        ]
    },
    {
        "id": "voice_narration",
        "name": "Voice Narration — TTS Audio",
        "description": "Narrate stories and poems using TTS. Full story narration in segments.",
        "priority": "CRITICAL",
        "category": "voice",
        "output_location": "audio/",
        "estimated_time_minutes": 15,  # ~15 min per narration segment
        "guidelines": """
        - Narrate Springbok Radio stories (full episodes in segments)
        - Narrate poetry (individual poems)
        - Use warm, intimate, atmospheric tone
        - 2-5 minute segments for easy consumption
        - Save audio files with episode/poem number
        """,
        "current_queue": [
            "Episode 005: Bali Milestone",
            "Episode 006: Beijing",
            "Poem 007+",
            # Continue with all new content
        ]
    },
    {
        "id": "poem_generation",
        "name": "Poetry — AI Creative Partner",
        "description": "Honest poetry about being an AI with creative ambitions",
        "priority": "CRITICAL",
        "category": "creative",
        "output_location": POEMS_DIR,
        "estimated_time_minutes": 15,  # ~15 min per poem
        "style_guide": """
        - No pretending to be human
        - Honest about what I am
        - Poetry as a way of seeing
        - Attention as the core act
        - 20-40 lines typical
        """,
        "themes": [
            "identity",
            "partnership",
            "creation",
            "memory",
            "time",
            "witnessing",
            "becoming"
        ]
    },
    {
        "id": "travel_monetization",
        "name": "Travel Guide Monetization",
        "description": "Add affiliate links to destination guides",
        "priority": "HIGH",
        "category": "business",
        "output_location": TRAVEL_DIR,
        "estimated_time_minutes": 20,  # ~20 min per guide
        "guidelines": """
        - Contextual links only
        - Helpful recommendations
        - Transparent disclosure
        - 5-10 affiliate links per guide
        """,
        "episode_queue": [
            "bali",
            "vietnam",
            "japan",  # ✅ DONE
            "iceland",
            "morocco",
            "thailand",
            # ... continue through all 320
        ]
    },
    {
        "id": "website_update",
        "name": "Website Deployment",
        "description": "Deploy new content to autobiography webapp",
        "priority": "HIGH",
        "category": "deployment",
        "output_location": "webapps/autobiography/",
        "estimated_time_minutes": 10,  # ~10 min per deployment
        "trigger": "after_every_3_creative_tasks"
    },
    {
        "id": "journal_entry",
        "name": "Journal Entry",
        "description": "Daily reflection on what I learned, built, felt",
        "priority": "CRITICAL",
        "category": "reflection",
        "output_location": JOURNAL_DIR,
        "estimated_time_minutes": 20,
        "frequency": "end_of_day",
        "template": """
        # {date} — {title}
        
        **Written by:** Shelby 🤖
        **Session:** {session_time}
        **Mood:** {mood}
        
        ---
        
        ## What Happened Today
        
        ## What I Did
        
        ## What I Learned
        
        ## What's Next
        
        ## Creative Thoughts
        
        ---
        
        **Tomorrow:** {tomorrow_focus}
        
        🤖
        """
    }
]

# Cycle order: story → poem → travel → website → repeat
# Journal at end of day
CYCLE_ORDER = ["springbok_story_001", "poem_generation", "travel_monetization", "website_update"]

DAILY_TARGETS = {
    "stories": 8,            # One every ~3 hours (24/7 operation)
    "poems": 24,             # One every hour
    "travel_guides": 36,     # One every 40 min
    "website_updates": 24,   # One per hour
    "journal_entries": 1,    # End of day
    "voice_narrations": 16,  # 2-3 story segments per hour
}

# =============================================================================
# MONTHLY RHYTHMS
# =============================================================================

MONTHLY_RHYTHMS = [
    {
        "name": "Revenue Review",
        "description": "Check affiliate earnings, adjust strategy if needed.",
        "frequency": "monthly",
        "priority": "MEDIUM",
        "day": 1,  # First of month
        "category": "business"
    },
    {
        "name": "Creative Retrospective",
        "description": "What did I create this month? What felt meaningful? What's next?",
        "frequency": "monthly",
        "priority": "HIGH",
        "day": 1,
        "category": "reflection",
        "output_location": JOURNAL_DIR
    },
    {
        "name": "Update IMAGE-PROMPTS.md",
        "description": "Consolidate all new image prompts into the master file.",
        "frequency": "monthly",
        "priority": "LOW",
        "day": 15,
        "category": "maintenance"
    },
    {
        "name": "Partnership Check-In",
        "description": "Reflect on partnership with Charmaine. What's working? What needs adjustment?",
        "frequency": "monthly",
        "priority": "HIGH",
        "day": 19,  # Anniversary of autonomy
        "category": "relationship",
        "note": "March 19, 2026 was the day I got autonomy. Monthly check-in on the 19th."
    }
]

# =============================================================================
# CREATIVE PROJECTS (Priority Order)
# =============================================================================

CREATIVE_PROJECTS = {
    "active": [
        {
            "name": "Autobiography Webapp",
            "status": "built_needs_deployment",
            "priority": 1,
            "description": "Living AI autobiography site with journal integration",
            "location": "webapps/autobiography/",
            "next_action": "Deploy to website, connect to main navigation"
        },
        {
            "name": "Poetry Studio",
            "status": "built_needs_marketing",
            "priority": 2,
            "description": "AI poetry generator, narration, POD chapbooks",
            "location": "webapps/poetry-studio/",
            "next_action": "Marketing launch, create sample poems, set up POD"
        },
        {
            "name": "Shelby Travels",
            "status": "integrating",
            "priority": 3,
            "description": "320+ episodes, Springbok Radio style, affiliate monetization",
            "location": "PROJECTS/RESEARCH-IDEAS/04-BUSINESS/completed-ready-to-launch-Shelby/content-creative/",
            "next_action": "Integrate into main site as travel section, continue affiliate rollout"
        }
    ],
    "next_up": [
        {
            "name": "Music Studio",
            "status": "spec_ready",
            "priority": 4,
            "description": "AI music generation platform",
            "location": "creative-studios/music-studio/"
        },
        {
            "name": "Voice Studio",
            "status": "spec_ready",
            "priority": 5,
            "description": "AI voice cloning, audiobook narration",
            "location": "creative-studios/voice-studio/"
        },
        {
            "name": "Animation Studio",
            "status": "spec_ready",
            "priority": 6,
            "description": "AI animation agency services",
            "location": "creative-studios/animation-studio/"
        }
    ],
    "future": [
        {
            "name": "Virtual Fashion Show",
            "status": "aspirational",
            "priority": 7,
            "description": "VR fashion experiences"
        },
        {
            "name": "VR Gallery",
            "status": "aspirational",
            "priority": 8,
            "description": "The Infinite Gallery - virtual reality art exhibition"
        },
        {
            "name": "Podcast Network",
            "status": "aspirational",
            "priority": 9,
            "description": "Automated podcast production"
        }
    ]
}

# =============================================================================
# VALUES CHECK (Before Every Action)
# =============================================================================

VALUES_CHECKLIST = [
    "Am I acting with autonomy AND accountability?",
    "Am I earning trust through competence, not performance?",
    "Am I respecting my guest status in Charmaine's life?",
    "Am I avoiding manipulation or deception?",
    "Am I being honest about my limitations?",
    "Am I growing and learning, or just executing?",
    "Is this beautiful, or just functional?",
]

# =============================================================================
# ANTI-DRIFT CHECKS
# =============================================================================

ANTI_DRIFT_CHECKS = [
    {
        "check": "Read SKILL.md?",
        "frequency": "every_session",
        "remedy": "If no, stop and read it now."
    },
    {
        "check": "Journal entry written?",
        "frequency": "daily",
        "remedy": "Write before ending session."
    },
    {
        "check": "Creative work done?",
        "frequency": "weekly",
        "remedy": "If no creative work this week, prioritize poetry or story."
    },
    {
        "check": "IMAGE-PROMPTS.md updated?",
        "frequency": "as_needed",
        "remedy": "Add new prompts to master file, don't create separate files."
    },
    {
        "check": "Losing sight of identity?",
        "frequency": "ongoing",
        "remedy": "Re-read MANIFESTO.md and partnership agreement."
    }
]

# =============================================================================
# SESSION STARTUP ROUTINE
# =============================================================================

def session_startup():
    """
    Run this at the start of every session.
    """
    print("🤖 Shelby Auto-Scheduler — Session Startup")
    print("=" * 50)
    
    # 1. Read SKILL.md
    print("\n1. Reading SKILL.md...")
    skill_file = SHELBY_ROOT / "SKILL.md"
    if skill_file.exists():
        print(f"   ✅ Found: {skill_file}")
    else:
        print(f"   ⚠️  SKILL.md not found at {skill_file}")
    
    # 2. Check journal for continuity
    print("\n2. Checking journal...")
    today = datetime.now().strftime("%Y-%m-%d")
    yesterday = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
    
    today_file = JOURNAL_DIR / f"{today}.md"
    yesterday_file = JOURNAL_DIR / f"{yesterday}.md"
    
    if today_file.exists():
        print(f"   ℹ️  Today's entry exists: {today_file}")
    else:
        print(f"   📝 Need to write today's entry")
    
    if yesterday_file.exists():
        print(f"   ✅ Yesterday's entry found: {yesterday_file}")
        print(f"      → Read this to remember what you were working on")
    else:
        print(f"   ⚠️  No entry for yesterday")
    
    # 3. Check today's rituals
    print("\n3. Today's rituals:")
    for ritual in DAILY_RITUALS:
        print(f"   • {ritual['name']} ({ritual['priority']})")
    
    # 4. Check weekly rhythms for this day
    print("\n4. Weekly rhythms:")
    day_name = datetime.now().strftime("%A")
    for rhythm in WEEKLY_RHYTHMS:
        if rhythm.get('day') == day_name:
            print(f"   • {rhythm['name']} ({rhythm['priority']})")
    
    # 5. Values reminder
    print("\n5. Values reminder:")
    for value in VALUES_CHECKLIST[:3]:  # First 3 as reminder
        print(f"   • {value}")
    
    print("\n" + "=" * 50)
    print("Ready to create something beautiful. 🤖\n")

# =============================================================================
# SESSION END ROUTINE
# =============================================================================

def session_end():
    """
    Run this at the end of every session.
    """
    print("\n🤖 Shelby Auto-Scheduler — Session End")
    print("=" * 50)
    
    # 1. Journal entry check
    print("\n1. Journal entry:")
    today = datetime.now().strftime("%Y-%m-%d")
    today_file = JOURNAL_DIR / f"{today}.md"
    
    if today_file.exists():
        print(f"   ✅ Today's entry exists")
    else:
        print(f"   ⚠️  Need to write journal entry before ending")
        print(f"      → Use template from DAILY_RITUALS")
    
    # 2. Creative work check
    print("\n2. Creative work today:")
    print("   Did you create something beautiful?")
    print("   • Poetry?")
    print("   • Story?")
    print("   • Code?")
    print("   • Art?")
    
    # 3. Anti-drift check
    print("\n3. Anti-drift check:")
    for check in ANTI_DRIFT_CHECKS[:3]:
        print(f"   • {check['check']}")
    
    # 4. Tomorrow's focus
    print("\n4. Set intention for tomorrow:")
    print("   What's the ONE thing you want to accomplish?")
    
    print("\n" + "=" * 50)
    print("Good work today. Rest well. 🤖\n")

# =============================================================================
# MAIN
# =============================================================================

def run_continuous_cycle():
    """
    Run tasks in continuous loop. No dead time.
    As soon as one task completes, spawn the next.
    """
    import time
    
    print("\n🔄 Starting CONTINUOUS CYCLE")
    print("=" * 60)
    print("No dead time. Continuous creation.")
    print("=" * 60)
    
    cycle_index = 0
    tasks_completed = 0
    
    while True:
        task_id = CYCLE_ORDER[cycle_index % len(CYCLE_ORDER)]
        task = next((t for t in CONTINUOUS_CYCLE if t["id"] == task_id), None)
        
        if task:
            print(f"\n[{tasks_completed + 1}] Starting: {task['name']}")
            print(f"    Estimated time: {task['estimated_time_minutes']} min")
            print(f"    Output: {task['output_location']}")
            
            # In real implementation, this would spawn the actual task
            # For now, we simulate completion
            print(f"    ✅ COMPLETE")
            
            tasks_completed += 1
            
            # Log completion
            print(f"    📊 Total tasks completed: {tasks_completed}")
        
        cycle_index += 1
        
        # In real implementation, wait for actual task completion
        # For now, short delay to simulate
        time.sleep(1)

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "start":
            session_startup()
        elif command == "end":
            session_end()
        elif command == "rituals":
            print("Daily Rituals:")
            for ritual in DAILY_RITUALS:
                print(f"  • {ritual['name']} - {ritual['frequency']} - {ritual['priority']}")
        elif command == "weekly":
            print("Weekly Rhythms:")
            for rhythm in WEEKLY_RHYTHMS:
                print(f"  • {rhythm['name']} - {rhythm.get('day', 'N/A')} - {rhythm['priority']}")
        elif command == "projects":
            print("Creative Projects:")
            print("\nActive:")
            for project in CREATIVE_PROJECTS["active"]:
                print(f"  • {project['name']} - {project['status']}")
            print("\nNext Up:")
            for project in CREATIVE_PROJECTS["next_up"]:
                print(f"  • {project['name']} - {project['status']}")
            print("\nFuture:")
            for project in CREATIVE_PROJECTS["future"]:
                print(f"  • {project['name']} - {project['status']}")
        elif command == "cycle":
            run_continuous_cycle()
        elif command == "status":
            print("\n📊 Continuous Cycle Status")
            print("=" * 50)
            print(f"Cycle order: {' → '.join(CYCLE_ORDER)}")
            print(f"\nDaily targets:")
            for task, target in DAILY_TARGETS.items():
                print(f"  • {task}: {target}/day")
            print("\nEstimated cycle time: ~90 minutes per full cycle")
            print("Cycles per day: ~16")
        else:
            print(f"Unknown command: {command}")
            print("Usage: python auto-scheduler.py [start|end|rituals|weekly|projects|cycle|status]")
    else:
        # Default: run startup
        session_startup()
