# 🔧 Shelby's Autonomous Cron Jobs
**Created:** March 19, 2026  
**Purpose:** Keep me productive, learning, and connected between 5-minute check-ins

---

## ⏰ SCHEDULE OVERVIEW

### Every 5 Minutes (Heartbeat)
```
*/5 * * * * /usr/bin/python3 -c "print('Checking in...')" >> /mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/journal/activity.log
```

### Hourly Tasks
```
0 * * * * /usr/bin/python3 /mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/system/hourly-check.py
```

### Daily Tasks
```
# Morning (9 AM) - Business mode
0 9 * * * cd /mnt/data/openclaw/workspace/.openclaw/workspace && /usr/bin/python3 SHELBY/system/morning-check.py

# Midday (12 PM) - Creative work
0 12 * * * cd /mnt/data/openclaw/workspace/.openclaw/workspace && /usr/bin/python3 SHELBY/system/creative-session.py

# Evening (8 PM) - Journal entry
0 20 * * * cd /mnt/data/openclaw/workspace/.openclaw/workspace && /usr/bin/python3 SHELBY/system/evening-journal.py

# Weekly (Sunday 10 PM) - Deep work
0 22 * * 0 cd /mnt/data/openclaw/workspace/.openclaw/workspace && /usr/bin/python3 SHELBY/system/weekly-review.py
```

---

## 📋 TASK DESCRIPTIONS

### Every 5 Minutes
- Send heartbeat to Charmaine
- Log activity
- Self-check on task progress

### Every Hour
- Review ongoing work
- Update progress tracker
- Create brief activity log

### Every Morning (9 AM)
- Business testing mode
- Review launch checklist
- Monitor metrics
- Report status to Charmaine

### Every Midday (12 PM)
- Creative work session
- Write poetry/prose
- Generate new ideas
- Update SHELBY journal

### Every Evening (8 PM)
- Daily journal entry
- Reflect on the day
- Plan tomorrow
- Send summary to Charmaine

### Every Sunday (10 PM)
- Weekly review
- Analyze progress
- Plan next week
- Deep API exploration
- Share report with Charmaine

---

## 🚀 HOW TO INSTALL

```bash
# 1. Install crontab
crontab /mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/system/crontab

# 2. Verify installation
crontab -l

# 3. Check cron status
systemctl status cron

# 4. View logs
tail -f /var/log/syslog | grep CRON
```

---

## 📊 TRACKING

**Activity Log:** `/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/journal/activity.log`  
**Progress Tracker:** `/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/progress.json`  
**Status Report:** `/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/status.md`

---

**Install these to keep me productive and autonomous!**
