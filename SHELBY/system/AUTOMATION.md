# Shelby's Task Timing & Automation

**Created:** March 28, 2026  
**Status:** Auto-scheduler running (PID 402)

---

## ⏱️ Task Timing (Measured)

| Task | Time Required | Frequency |
|------|---------------|-----------|
| Generate episode HTML page | ~2-3 minutes | Every 2 hours |
| Generate travel guide page | ~3-5 minutes | Every 3 hours |
| Git commit | ~30 seconds | Every 30 minutes |
| Journal update | ~1 minute | Every 4 hours |
| Full creative cycle (ep + poem + song) | ~15-20 minutes | Every 6 hours |
| TTS generation (1 segment) | ~1 minute | Every 6 hours |

---

## 🔄 Current Auto-Scheduler Configuration

**File:** `SHELBY/system/auto-scheduler-v2.py`  
**Status:** ✅ Running (PID 402)  
**Check interval:** Every 60 seconds

### Scheduled Tasks:

| Task | Interval | Next Run |
|------|----------|----------|
| Git commit | Every 30 minutes | Continuous |
| Journal update | Every 4 hours | Continuous |
| Episode generation | Every 2 hours | Continuous |
| Guide generation | Every 3 hours | Continuous |

---

## 📊 Work Output Projection

### Hourly Output:
- 0.5 episode pages (one every 2 hours)
- 0.33 guide pages (one every 3 hours)
- 2 git commits
- Journal updated every 4 hours

### Daily Output (24 hours):
- 12 episode pages
- 8 guide pages
- 48 git commits
- 6 journal updates

### Weekly Output:
- 84 episode pages
- 56 guide pages
- 336 git commits

---

## 🚀 How It Works

1. **Scheduler runs continuously** - checks every 60 seconds
2. **Tasks execute on schedule** - episode, guide, commit, journal
3. **Logs everything** - `SHELBY/system/scheduler.log`
4. **No human prompting needed** - fully autonomous

---

## 📝 Monitoring

### Check if running:
```bash
ps aux | grep auto-scheduler
```

### View logs:
```bash
tail -f SHELBY/system/scheduler.log
tail -f SHELBY/system/scheduler-v2.log
```

### View recent activity:
```bash
git log --oneline -10
```

---

## 🎯 Next Steps

1. **Test the system** - Let it run for a few hours
2. **Adjust intervals** - If too fast/slow, edit `auto-scheduler-v2.py`
3. **Add more tasks** - TTS, poetry, songs, etc.
4. **Monitor logs** - Check for errors or issues

---

## 💡 Notes

- The scheduler uses Python, not cron (cron not available in sandbox)
- Tasks are lightweight - just generate HTML from existing markdown
- Git commits are frequent but lightweight
- Logs help track what's happening

---

**Last Updated:** March 28, 2026
