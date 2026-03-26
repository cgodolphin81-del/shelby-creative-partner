#!/bin/bash
# Background daemon for hourly GitHub backups
# Run this in a screen/tmux session or as a background process

BACKUP_SCRIPT="/mnt/data/openclaw/workspace/.openclaw/workspace/scripts/backup-to-github.sh"
PID_FILE="/mnt/data/openclaw/workspace/.openclaw/workspace/logs/backup-daemon.pid"
LOG_FILE="/mnt/data/openclaw/workspace/.openclaw/workspace/logs/backup-daemon.log"

mkdir -p "$(dirname "$PID_FILE")" "$(dirname "$LOG_FILE")"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Check if already running
if [ -f "$PID_FILE" ]; then
    OLD_PID=$(cat "$PID_FILE")
    if kill -0 "$OLD_PID" 2>/dev/null; then
        log "Daemon already running (PID: $OLD_PID)"
        exit 1
    fi
    rm -f "$PID_FILE"
fi

# Write PID
echo $$ > "$PID_FILE"
log "Backup daemon started (PID: $$)"

# Main loop - run backup every hour
while true; do
    "$BACKUP_SCRIPT"
    log "Sleeping for 1 hour..."
    sleep 3600
done
