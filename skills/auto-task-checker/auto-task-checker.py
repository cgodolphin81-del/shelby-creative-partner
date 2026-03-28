#!/usr/bin/env python3
"""
Auto Task Checker — Universal Bot Skill
Prompts bot to check task list and execute pending work.

Usage:
    python3 auto-task-checker.py [--interval SECONDS] [--task-file PATH]
"""

import os
import re
import sys
import time
import argparse
from datetime import datetime
from pathlib import Path

# Default configuration
DEFAULT_INTERVAL = 300  # 5 minutes
DEFAULT_TASK_FILE = None  # Must be provided or set via env
DEFAULT_LOG_FILE = None   # Auto-generated based on task file

def log(message, log_file):
    """Log with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}\n"
    
    # Ensure log directory exists
    Path(log_file).parent.mkdir(parents=True, exist_ok=True)
    
    with open(log_file, "a") as f:
        f.write(log_entry)
    print(log_entry.strip())

def read_tasks(task_file):
    """Read task list from markdown file"""
    if not os.path.exists(task_file):
        return [], []
    
    with open(task_file, "r") as f:
        content = f.read()
    
    pending = []
    completed = []
    
    for line in content.split("\n"):
        # Match: - [ ] Task or - [x] Task
        match = re.match(r'^-\s+\[([ x])\]\s+(.+)$', line.strip())
        if match:
            status = match.group(1)
            task = match.group(2)
            if status == ' ':
                pending.append(task)
            elif status == 'x':
                completed.append(task)
    
    return pending, completed

def mark_task_complete(task_file, task):
    """Mark a task as complete in the task file"""
    with open(task_file, "r") as f:
        lines = f.readlines()
    
    updated = []
    for line in lines:
        # Check if this line matches the task
        match = re.match(r'^(-\s+\[ \]\s+)(.+)$', line)
        if match and match.group(2).strip() == task:
            # Replace [ ] with [x]
            line = line.replace("[ ]", "[x]", 1)
        updated.append(line)
    
    with open(task_file, "w") as f:
        f.writelines(updated)

def execute_task(task):
    """
    Execute a task. This is a placeholder - each bot should override
    with their own task execution logic.
    
    For now, just log that the task was "executed".
    """
    # In a real implementation, this would:
    # - Parse the task description
    # - Call appropriate functions
    # - Return success/failure
    
    # For universal compatibility, we just signal that the task
    # should be executed by the bot's main logic
    log(f"🚀 Task ready for execution: {task}", LOG_FILE)
    return True

def main():
    parser = argparse.ArgumentParser(description="Auto Task Checker")
    parser.add_argument("--interval", type=int, default=DEFAULT_INTERVAL,
                       help=f"Check interval in seconds (default: {DEFAULT_INTERVAL})")
    parser.add_argument("--task-file", type=str, default=DEFAULT_TASK_FILE,
                       help="Path to TASKS.md file")
    parser.add_argument("--log-file", type=str, default=DEFAULT_LOG_FILE,
                       help="Path to log file")
    args = parser.parse_args()
    
    # Get task file from args, env, or default
    task_file = args.task_file or os.environ.get("TASK_FILE", "TASKS.md")
    task_file = os.path.abspath(task_file)
    
    # Auto-generate log file path
    log_file = args.log_file or os.environ.get("LOG_FILE", 
                str(Path(task_file).parent / "checker.log"))
    
    global LOG_FILE
    LOG_FILE = log_file
    
    log("=" * 60, log_file)
    log("🤖 Auto Task Checker STARTED", log_file)
    log(f"📍 Task file: {task_file}", log_file)
    log(f"📋 Check interval: {args.interval}s", log_file)
    log("=" * 60, log_file)
    
    last_task_index = -1
    
    while True:
        try:
            # Check for tasks
            pending, completed = read_tasks(task_file)
            
            log(f"📋 Task check: {len(pending)} pending, {len(completed)} completed", log_file)
            
            if pending:
                # Get next pending task
                next_task = pending[0]
                
                # Avoid executing same task twice in a row
                if pending.index(next_task) != last_task_index:
                    log(f"📝 Next task: {next_task}", log_file)
                    
                    # Execute task
                    success = execute_task(next_task)
                    
                    if success:
                        # Mark complete
                        mark_task_complete(task_file, next_task)
                        log(f"✅ Task completed: {next_task}", log_file)
                        last_task_index = -1  # Reset for next task
                    else:
                        log(f"❌ Task failed: {next_task}", log_file)
                        last_task_index = pending.index(next_task)
                else:
                    log(f"⏸️ Waiting for new tasks...", log_file)
            else:
                log("ℹ️ No pending tasks", log_file)
            
            # Wait for next check
            time.sleep(args.interval)
            
        except KeyboardInterrupt:
            log("⏹️ Auto Task Checker STOPPED", log_file)
            break
        except Exception as e:
            log(f"❌ Error: {e}", log_file)
            time.sleep(args.interval)

if __name__ == "__main__":
    main()
