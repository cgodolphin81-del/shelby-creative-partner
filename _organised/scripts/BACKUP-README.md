# GitHub Backup System

Automated hourly backups of the workspace to GitHub.

## Components

- **backup-to-github.sh** - Main backup script (commits and pushes changes)
- **backup-daemon.sh** - Background daemon that runs backup every hour
- **backup.service** & **backup.timer** - systemd files (for future use if systemd becomes available)

## Status

The backup daemon is currently running in the background (PID stored in `logs/backup-daemon.pid`).

## Logs

- Backup activity: `logs/backup.log`
- Daemon activity: `logs/backup-daemon.log`

## Manual Commands

```bash
# Run a manual backup
./scripts/backup-to-github.sh

# Check daemon status
ps aux | grep backup-daemon

# View logs
tail -f logs/backup.log
tail -f logs/backup-daemon.log

# Stop the daemon
kill $(cat logs/backup-daemon.pid)
```

## How It Works

1. Every hour, the daemon runs `backup-to-github.sh`
2. The script checks for any uncommitted changes
3. If changes exist, it commits them with a timestamp and pushes to GitHub
4. If no changes, it logs "No changes to commit" and waits for the next hour
