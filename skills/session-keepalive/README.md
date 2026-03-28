# Session Keepalive

**Purpose:** Keep bot sessions active — prevent timeout/disconnect  
**Interval:** Every 5 minutes (configurable)

---

## 🚀 Quick Start

```bash
# Start keepalive for a bot
cd /path/to/bot/skills/session-keepalive
nohup python3 keepalive.py > keepalive.log 2>&1 &

# Verify running
ps aux | grep keepalive

# View logs
tail -f keepalive.log
```

---

## ⚙️ Configuration

Edit `keepalive.py`:

```python
KEEPALIVE_INTERVAL = 300  # Seconds (5 minutes)
```

---

## 📋 For Multiple Bots

```bash
# Start for each bot
for bot in /path/to/bots/*; do
    cd $bot/skills/session-keepalive
    nohup python3 keepalive.py > keepalive.log 2>&1 &
    echo "$bot: PID $!"
done
```

---

## 📊 Monitor All

```bash
# Check which are running
ps aux | grep keepalive | grep -v grep

# View all logs
find /path/to/bots -name "keepalive.log" -exec tail -5 {} \;
```

---

**That's it. Simple. Lightweight. Just keeps sessions alive.** 🤖
