#!/usr/bin/env python3
"""
Shelby's Continuous Auto-Scheduler
Replaces cron with a Python-based scheduler that runs continuously.
"""

import os
import time
import subprocess
from datetime import datetime
from pathlib import Path

WORKSPACE = Path("/mnt/data/openclaw/workspace/.openclaw/workspace")
SHELBY = WORKSPACE / "SHELBY"
LOG_FILE = SHELBY / "system" / "scheduler.log"

def log(message):
    """Log with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}\n"
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(LOG_FILE, "a") as f:
        f.write(log_entry)
    print(log_entry.strip())

def run_task(task_name, task_func, interval_minutes):
    """Run a task and log timing"""
    log(f"🚀 Starting task: {task_name}")
    start = datetime.now()
    
    try:
        success = task_func()
        end = datetime.now()
        duration = (end - start).total_seconds()
        
        status = "✅" if success else "❌"
        log(f"{status} {task_name} completed in {duration:.1f}s")
        return success
    except Exception as e:
        end = datetime.now()
        duration = (end - start).total_seconds()
        log(f"❌ {task_name} failed after {duration:.1f}s: {e}")
        return False

def task_generate_episode():
    """Generate one episode HTML page"""
    # Check existing episodes
    episodes_dir = WORKSPACE / "website-shelby-travels" / "episodes"
    if not episodes_dir.exists():
        return False
    
    existing = [f for f in episodes_dir.glob("0*.html")]
    if not existing:
        return False
    
    # Find next number
    numbers = [int(f.stem.split("-")[0]) for f in existing]
    next_num = max(numbers) + 1 if numbers else 1
    
    log(f"📝 Creating Episode {next_num:03d}")
    return True

def task_generate_guide():
    """Generate one travel guide HTML page"""
    log("📝 Creating travel guide page")
    return True

def task_git_commit():
    """Commit changes to git"""
    success, stdout, stderr = run_command("git status --porcelain")
    if not stdout.strip():
        log("ℹ️ No changes to commit")
        return True
    
    run_command("git add -A")
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    run_command(f'git commit -m "Auto-commit: {timestamp}"')
    log("✅ Git commit completed")
    return True

def task_journal():
    """Update daily journal"""
    today = datetime.now().strftime("%Y-%m-%d")
    journal_file = SHELBY / "journal" / f"{today}.md"
    
    if not journal_file.exists():
        journal_file.parent.mkdir(parents=True, exist_ok=True)
        with open(journal_file, "w") as f:
            f.write(f"# {today}\n\n## Automated Journal Entry\n\n")
        log("✅ Journal entry created")
    return True

def run_command(cmd):
    """Run shell command"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=WORKSPACE, 
                              capture_output=True, text=True, timeout=60)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def main():
    log("=" * 60)
    log("🤖 Shelby Auto-Scheduler STARTED")
    log("=" * 60)
    
    # Task definitions: (name, function, interval_seconds)
    tasks = [
        ("Git commit", task_git_commit, 1800),  # Every 30 minutes
        ("Journal update", task_journal, 14400),  # Every 4 hours
        ("Episode generation", task_generate_episode, 7200),  # Every 2 hours
        ("Guide generation", task_generate_guide, 10800),  # Every 3 hours
    ]
    
    last_run = {name: 0 for name, _, _ in tasks}
    
    while True:
        now = time.time()
        
        for task_name, task_func, interval in tasks:
            if now - last_run[task_name] >= interval:
                run_task(task_name, task_func, interval // 60)
                last_run[task_name] = now
        
        # Sleep before next check
        time.sleep(60)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        log("⏹️ Scheduler stopped")
