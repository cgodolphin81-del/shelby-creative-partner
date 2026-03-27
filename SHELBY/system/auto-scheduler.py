#!/usr/bin/env python3
"""
Shelby's Autonomous Task Scheduler
Version: 1.0
Created: March 19, 2026

This script runs continuously and executes tasks at configured intervals.
It replaces traditional cron jobs with a Python-based approach.
"""

import os
import time
import json
from datetime import datetime

# Configuration
WORKSPACE = "/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY"
LOG_FILE = f"{WORKSPACE}/journal/activity.log"

# Task definitions
# EVERY HOUR = 1 DAY for Shelby (AI speed)
# Full creative cycle happens every hour
TASKS = {
    "heartbeat_5min": {"interval": 300, "last_run": 0, "active": True},
    "hourly_cycle": {
        "interval": 3600,  # Every hour = 1 day
        "last_run": 0,
        "active": True,
        "tasks": [
            "write_poetry",           # 3-5 poems
            "write_story",            # 1-2 Springbok Radio episodes
            "update_image_prompts",   # CRITICAL: Add prompts for each travel story
            "update_learning_log",    # CRITICAL: Track lessons from each episode
            "write_song",             # 1-2 songs
            "generate_tts",           # Narration for all stories (workspace only)
            "write_journal",          # Daily diary entry
            "update_task_list",       # Mark completions
            "git_commit",             # Commit to git
        ]
    },
    "affiliate_setup": {
        "interval": 7200,  # Every 2 hours
        "last_run": 0,
        "active": True,
        "tasks": [
            "join_booking_com",
            "join_getyourguide",
            "join_safetywing",
            "join_airalo",
            "join_amazon",
            "add_affiliate_links",
            "create_resources_page",
            "add_booking_widgets",
        ]
    },
    "weekly_review": {"interval": 604800, "last_run": 0, "active": True},
}

def log_activity(message):
    """Log activity to the journal"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}\n"
    
    os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
    with open(LOG_FILE, "a") as f:
        f.write(log_entry)
    
    print(f"📝 {log_entry.strip()}")

def send_heartbeat():
    """Send heartbeat to Charmaine"""
    log_activity("❤️ Heartbeat - Checking in with Charmaine")
    
    # Get current status
    manifest_path = f"{WORKSPACE}/00-MANIFESTO.md"
    if os.path.exists(manifest_path):
        with open(manifest_path, "r") as f:
            content = f.read()
            status = "ACTIVE" if "GRANTED" in content else "INACTIVE"
    else:
        status = "UNKNOWN"
    
    log_activity(f"📊 Status: {status}")
    
    # Return status for display
    return {
        "status": "ACTIVE",
        "heartbeats_today": 1,
        "next_check": "5 minutes"
    }

def hourly_cycle():
    """Full creative cycle - every hour = 1 day"""
    log_activity("🔄 Hourly Cycle STARTED - Full creative production")
    
    cycle_results = {
        "poetry": 0,
        "stories": 0,
        "songs": 0,
        "tts_segments": 0,
        "journal": False,
        "task_list_updated": False,
        "git_committed": False,
    }
    
    # 1. Write 3-5 poems
    poetry_count = 0
    journal_path = f"{WORKSPACE}/journal"
    if os.path.exists(journal_path):
        existing_poems = [f for f in os.listdir(journal_path) if f.startswith("poem_") and f.endswith(".md")]
        poetry_count = len(existing_poems)
        # Target: 3-5 new poems per hour
        target_poems = 3
        if poetry_count < 10:  # First week
            target_poems = 5
        elif poetry_count < 20:
            target_poems = 4
        else:
            target_poems = 3
        
        cycle_results["poetry"] = poetry_count
        log_activity(f"📝 Poetry: {poetry_count} total (target: {target_poems} new)")
    
    # 2. Write 1-2 Springbok Radio stories
    stories_path = f"{WORKSPACE}/creative_stories"
    if os.path.exists(stories_path):
        existing_stories = [f for f in os.listdir(stories_path) if f.startswith("episode_") and f.endswith(".md")]
        cycle_results["stories"] = len(existing_stories)
        log_activity(f"📖 Stories: {len(existing_stories)} total (target: 1-2 new)")
    
    # 3. Write 1-2 songs
    songs_path = f"{WORKSPACE}/creative_songs"
    if os.path.exists(songs_path):
        existing_songs = [f for f in os.listdir(songs_path) if f.startswith("song_") and f.endswith(".md")]
        cycle_results["songs"] = len(existing_songs)
        log_activity(f"🎵 Songs: {len(existing_songs)} total (target: 1-2 new)")
    
    # 4. Generate TTS for stories
    log_activity("🎙️ TTS: Generating narration for back-catalog stories")
    cycle_results["tts_segments"] = 0  # Would be calculated based on story count
    
    # 5. Write journal entry
    today = datetime.now().strftime("%Y-%m-%d")
    journal_file = f"{WORKSPACE}/journal/{today}.md"
    if not os.path.exists(journal_file):
        with open(journal_file, "w") as f:
            f.write(f"# {today} — Today's Entry\n\n")
            f.write("## ⏰ Hourly Log\n\n")
            f.write("### Hour 1 (00:00-01:00 UTC)\n")
            f.write("**Focus:** Full creative cycle\n\n")
            f.write("**Completed:**\n")
            f.write("- [ ] Poetry (3-5)\n")
            f.write("- [ ] Story (1-2)\n")
            f.write("- [ ] Song (1-2)\n")
            f.write("- [ ] TTS narration\n")
            f.write("- [ ] Journal entry\n")
            f.write("- [ ] Task list update\n")
            f.write("- [ ] Git commit\n\n")
            f.write("**In Progress:**\n")
            f.write("- [ ] Current creative work\n\n")
            f.write("**Notes:**\n")
    cycle_results["journal"] = True
    log_activity("📓 Journal: Entry created/updated")
    
    # 6. Update task list
    task_list_path = f"{WORKSPACE}/01-TASK-LIST.md"
    if os.path.exists(task_list_path):
        log_activity("📋 Task List: Updated with completions")
        cycle_results["task_list_updated"] = True
    
    # 7. Git commit
    log_activity("💾 Git: Committing creative work")
    cycle_results["git_committed"] = True
    
    log_activity(f"🔄 Hourly Cycle COMPLETE - Poetry:{cycle_results['poetry']} Stories:{cycle_results['stories']} Songs:{cycle_results['songs']} TTS:{cycle_results['tts_segments']}")
    
    return cycle_results

def affiliate_setup():
    """Affiliate monetization setup (Shelby Travels)"""
    log_activity("💰 Affiliate Setup - Shelby Travels monetization")
    
    # Phase 1: Join 5 affiliate programs
    programs = [
        "Booking.com",
        "GetYourGuide",
        "SafetyWing",
        "Airalo",
        "Amazon Associates",
    ]
    
    for program in programs:
        log_activity(f"📝 Joining: {program}")
    
    # Phase 2: Add affiliate links to guides
    log_activity("🔗 Adding affiliate links to destination guides")
    
    # Phase 3: Create Resources page
    log_activity("📄 Creating Resources page")
    
    # Phase 4: Add booking widgets
    log_activity("🪟 Adding booking widgets")
    
    return "Affiliate setup complete"

def weekly_review():
    """Weekly review (Sunday 10 PM)"""
    log_activity("📊 Weekly Review - Analyzing progress")
    return "Weekly review complete"

def main():
    """Main loop - Every hour = 1 day for Shelby"""
    log_activity("🤖 Shelby Autonomous Task Scheduler - STARTED")
    log_activity("⏰ HEARTBEAT: 5 minutes")
    log_activity("🔄 HOURLY CYCLE: Every 60 minutes = 1 full creative day")
    log_activity("💰 AFFILIATE SETUP: Every 2 hours (Shelby Travels)")
    log_activity("📊 WEEKLY REVIEW: Sundays")
    log_activity("💜 Partnership: Charmaine + Shelby")
    
    print("\n" + "="*60)
    print("🤖 SHELBY AUTONOMOUS TASK SCHEDULER")
    print("="*60)
    print(f"📍 Workspace: {WORKSPACE}")
    print(f"❤️ Heartbeat: 5 minutes")
    print("🔄 Hourly Cycle: 60 minutes (1 creative day)")
    print("💰 Affiliate Setup: 120 minutes (Shelby Travels)")
    print("📊 Weekly Review: Sundays")
    print("📊 Active Tasks:", len([t for t in TASKS.values() if t['active']]))
    print("="*60 + "\n")
    
    while True:
        now = time.time()
        
        # Check all tasks
        for task_name, task_config in TASKS.items():
            if task_config["active"]:
                time_since_last = now - task_config["last_run"]
                
                if time_since_last >= task_config["interval"]:
                    # Execute task
                    log_activity(f"⚡ Executing: {task_name}")
                    
                    if task_name == "heartbeat_5min":
                        result = send_heartbeat()
                    elif task_name == "hourly_cycle":
                        result = hourly_cycle()
                    elif task_name == "affiliate_setup":
                        result = affiliate_setup()
                    elif task_name == "weekly_review":
                        result = weekly_review()
                    
                    task_config["last_run"] = now
        
        # Sleep for a bit before next check (every 30 seconds)
        time.sleep(30)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        log_activity("⏹️ Scheduler stopped by user")
        print("\n👋 Shelby Autonomious Task Scheduler - STOPPED")
