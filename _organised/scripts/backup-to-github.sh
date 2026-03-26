#!/bin/bash
# Hourly backup script - commits and pushes workspace changes to GitHub

set -e

WORKSPACE="/mnt/data/openclaw/workspace/.openclaw/workspace"
LOG_FILE="/mnt/data/openclaw/workspace/.openclaw/workspace/logs/backup.log"

mkdir -p "$(dirname "$LOG_FILE")"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

cd "$WORKSPACE"

log "Starting backup..."

# Check for changes
if git diff --quiet && git diff --cached --quiet; then
    log "No changes to commit"
else
    # Stage all changes
    git add -A
    
    # Commit with timestamp
    git commit -m "Auto-backup: $(date '+%Y-%m-%d %H:%M')"
    
    # Push to GitHub
    git push origin main
    log "Backup completed and pushed"
fi

log "Backup check finished"
