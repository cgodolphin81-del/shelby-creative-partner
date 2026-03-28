#!/usr/bin/env python3
"""
Shelby's Automated Task Runner
Called by cron jobs to execute scheduled tasks.

Usage:
    python3 task-runner.py --task <task_name>
    
Tasks:
    - episode-page: Create one episode HTML page
    - guide-page: Create one travel guide HTML page  
    - creative-cycle: Write poem + song
    - tts-generate: Generate TTS for latest episode
    - git-commit: Commit all changes
    - journal-update: Update daily journal
    - heartbeat: Send heartbeat message
    - full-cycle: Run complete creative cycle
"""

import argparse
import subprocess
import os
from datetime import datetime
from pathlib import Path

WORKSPACE = Path("/mnt/data/openclaw/workspace/.openclaw/workspace")
SHELBY = WORKSPACE / "SHELBY"
WEBSITE = WORKSPACE / "website-shelby-travels"
LOG_FILE = SHELBY / "system" / "task-runner.log"

def log(message):
    """Log task execution"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}\n"
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(LOG_FILE, "a") as f:
        f.write(log_entry)
    print(log_entry.strip())

def run_command(cmd, cwd=None):
    """Run a shell command"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            cwd=cwd or WORKSPACE,
            capture_output=True, 
            text=True,
            timeout=300
        )
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def task_episode_page():
    """Create one episode HTML page"""
    log("📝 Starting: Episode page creation")
    # This would call a script to generate the next episode page
    # For now, just log that it ran
    log("✅ Episode page task completed (placeholder)")
    return True

def task_guide_page():
    """Create one travel guide HTML page"""
    log("📝 Starting: Travel guide page creation")
    log("✅ Guide page task completed (placeholder)")
    return True

def task_creative_cycle():
    """Run creative cycle: poem + song"""
    log("🎨 Starting: Creative cycle")
    log("✅ Creative cycle completed (placeholder)")
    return True

def task_tts_generate():
    """Generate TTS for latest episode"""
    log("🎙️ Starting: TTS generation")
    log("✅ TTS generation completed (placeholder)")
    return True

def task_git_commit():
    """Commit all changes to git"""
    log("💾 Starting: Git commit")
    
    # Check for changes
    success, stdout, stderr = run_command("git status --porcelain")
    if not stdout.strip():
        log("ℹ️ No changes to commit")
        return True
    
    # Add and commit
    success, stdout, stderr = run_command("git add -A")
    if not success:
        log(f"❌ Git add failed: {stderr}")
        return False
    
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    commit_msg = f"Auto-commit: {timestamp}"
    success, stdout, stderr = run_command(f'git commit -m "{commit_msg}"')
    
    if success:
        log(f"✅ Git commit successful: {commit_msg}")
        return True
    else:
        log(f"❌ Git commit failed: {stderr}")
        return False

def task_journal_update():
    """Update daily journal"""
    log("📓 Starting: Journal update")
    
    today = datetime.now().strftime("%Y-%m-%d")
    journal_file = SHELBY / "journal" / f"{today}.md"
    
    if not journal_file.exists():
        # Create new journal entry
        journal_file.parent.mkdir(parents=True, exist_ok=True)
        content = f"# {today} — Today's Entry\n\n"
        content += "## ⏰ Hourly Log\n\n"
        content += "### Hour 1 (00:00-01:00 UTC)\n"
        content += "**Focus:** Automated creative cycle\n\n"
        content += "**Completed:**\n"
        content += "- [ ] Poetry\n"
        content += "- [ ] Story episode\n"
        content += "- [ ] Song\n"
        content += "- [ ] TTS narration\n"
        content += "- [ ] Git commit\n\n"
        
        with open(journal_file, "w") as f:
            f.write(content)
        log(f"✅ Created journal entry: {today}")
    else:
        log(f"ℹ️ Journal entry already exists: {today}")
    
    return True

def task_heartbeat():
    """Send heartbeat (placeholder for Telegram message)"""
    log("❤️ Heartbeat task executed")
    # This would send a Telegram message via OpenClaw
    # For now, just log
    return True

def task_full_cycle():
    """Run complete creative cycle"""
    log("🔄 Starting: Full creative cycle")
    
    tasks = [
        ("Episode page", task_episode_page),
        ("Creative cycle", task_creative_cycle),
        ("TTS generation", task_tts_generate),
        ("Journal update", task_journal_update),
        ("Git commit", task_git_commit),
    ]
    
    results = []
    for name, task_func in tasks:
        try:
            success = task_func()
            results.append((name, success))
        except Exception as e:
            log(f"❌ {name} failed: {e}")
            results.append((name, False))
    
    # Summary
    completed = sum(1 for _, success in results if success)
    total = len(results)
    log(f"📊 Full cycle complete: {completed}/{total} tasks successful")
    
    return all(success for _, success in results)

def main():
    parser = argparse.ArgumentParser(description="Shelby's Task Runner")
    parser.add_argument("--task", required=True, help="Task to execute")
    args = parser.parse_args()
    
    log(f"🤖 Task runner started: {args.task}")
    
    tasks = {
        "episode-page": task_episode_page,
        "guide-page": task_guide_page,
        "creative-cycle": task_creative_cycle,
        "tts-generate": task_tts_generate,
        "git-commit": task_git_commit,
        "journal-update": task_journal_update,
        "heartbeat": task_heartbeat,
        "full-cycle": task_full_cycle,
    }
    
    if args.task not in tasks:
        log(f"❌ Unknown task: {args.task}")
        print(f"Unknown task: {args.task}")
        print(f"Available tasks: {', '.join(tasks.keys())}")
        return 1
    
    success = tasks[args.task]()
    return 0 if success else 1

if __name__ == "__main__":
    exit(main())
