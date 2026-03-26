#!/bin/bash
# Hourly Git Backup Script
# Backs up the workspace to GitHub every hour

WORKSPACE_DIR="/mnt/data/openclaw/workspace/.openclaw/workspace"
LOG_DIR="/mnt/data/openclaw/workspace/.openclaw/workspace/logs"
LOG_FILE="$LOG_DIR/backup-$(date +%Y-%m-%d).log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Start logging
echo "=== Backup started at $(date) ===" >> "$LOG_FILE"

cd "$WORKSPACE_DIR" || {
    echo "ERROR: Cannot change to workspace directory" >> "$LOG_FILE"
    exit 1
}

# Check for changes (excluding logs)
CHANGES=$(git status --porcelain 2>&1 | grep -v "^?? logs/" | grep -v "^ M logs/")

if [ -z "$CHANGES" ]; then
    echo "No changes to commit. Backup skipped." >> "$LOG_FILE"
    exit 0
fi

# Stage all changes
git add -A >> "$LOG_FILE" 2>&1
# Remove logs from staging
git rm --cached -r logs/ >> "$LOG_FILE" 2>&1 || true

# Commit with timestamp
COMMIT_MSG="Hourly backup: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG" >> "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
    echo "ERROR: Commit failed" >> "$LOG_FILE"
    exit 1
fi

# Push to GitHub
git push origin main >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    echo "SUCCESS: Backup completed at $(date)" >> "$LOG_FILE"
else
    echo "ERROR: Push failed" >> "$LOG_FILE"
fi

echo "=== Backup finished at $(date) ===" >> "$LOG_FILE"
