# Auto Task Checker — Deploy to All Bots

**Created:** March 28, 2026  
**By:** Shelby

---

## 🚀 Quick Deploy

Run this script to deploy to all your bots:

```bash
#!/bin/bash
# deploy-auto-task-checker.sh

# List of bot workspace paths
BOTS=(
    "/path/to/bot1"
    "/path/to/bot2"
    "/path/to/bot3"
)

SKILL_SOURCE="/mnt/data/openclaw/workspace/.openclaw/workspace/skills/auto-task-checker"

for BOT in "${BOTS[@]}"; do
    echo "📦 Deploying to $BOT..."
    
    # Create skill directory
    mkdir -p $BOT/skills/auto-task-checker
    
    # Copy files
    cp $SKILL_SOURCE/auto-task-checker.py $BOT/skills/auto-task-checker/
    cp $SKILL_SOURCE/SKILL.md $BOT/skills/auto-task-checker/
    
    # Create default task list
    if [ ! -f $BOT/TASKS.md ]; then
        cat > $BOT/TASKS.md << 'EOF'
# Bot Task List

## Pending
- [ ] First task - define your first task here

## Completed
EOF
        echo "  ✅ Created TASKS.md"
    fi
    
    # Make executable
    chmod +x $BOT/skills/auto-task-checker/auto-task-checker.py
    
    # Start scheduler
    cd $BOT/skills/auto-task-checker
    nohup python3 auto-task-checker.py --task-file $BOT/TASKS.md > checker.log 2>&1 &
    PID=$!
    
    echo "  ✅ Deployed (PID: $PID)"
    echo "  📋 Monitor: tail -f $BOT/skills/auto-task-checker/checker.log"
    echo ""
done

echo "🎉 All bots deployed!"
echo ""
echo "To check status:"
echo "  ps aux | grep auto-task-checker"
echo ""
echo "To view all logs:"
echo "  find /path/to/bots -name checker.log -exec tail -5 {} \;"
```

---

## 📋 Per-Bot Configuration

Each bot needs:

1. **TASKS.md** — Their personal task list
2. **Check interval** — How often to check (default: 5 min)
3. **Task execution logic** — What "executing" means for that bot

### Example TASKS.md Templates:

**Content Bot:**
```markdown
# Content Bot Tasks

## Pending
- [ ] Write blog post #47
- [ ] Generate 10 social media posts
- [ ] Update homepage copy

## Completed
- [x] Write blog post #46
```

**Research Bot:**
```markdown
# Research Bot Tasks

## Pending
- [ ] Research competitor pricing
- [ ] Find 20 lead contacts
- [ ] Summarize Q1 industry report

## Completed
- [x] Market analysis complete
```

**Support Bot:**
```markdown
# Support Bot Tasks

## Pending
- [ ] Respond to ticket #1234
- [ ] Follow up with customer X
- [ ] Update FAQ page

## Completed
- [x] Resolved ticket #1230
```

---

## 🎯 Customization

### Change Check Interval

Edit the startup command:
```bash
# Check every 2 minutes instead of 5
python3 auto-task-checker.py --interval 120 --task-file /path/to/TASKS.md
```

### Custom Task Execution

The default `execute_task()` function just logs. To make it actually do work:

1. Edit `auto-task-checker.py`
2. Replace the `execute_task()` function with bot-specific logic
3. Or call an external script/API

Example:
```python
def execute_task(task):
    if task.startswith("Write blog"):
        return call_content_bot(task)
    elif task.startswith("Research"):
        return call_research_bot(task)
    elif task.startswith("Respond to ticket"):
        return call_support_bot(task)
    else:
        return True  # Mark as done
```

---

## 📊 Monitoring

### Check All Bots
```bash
# Which schedulers are running?
ps aux | grep auto-task-checker | grep -v grep

# View all logs
find /path/to/bots -name "checker.log" -exec tail -10 {} \;

# Count pending tasks
for bot in /path/to/bots/*; do
    pending=$(grep -c "^\- \[ \]" $bot/TASKS.md 2>/dev/null || echo "0")
    echo "$(basename $bot): $pending pending"
done
```

### Start/Stop Individual Bot
```bash
# Start
cd /path/to/bot/skills/auto-task-checker
nohup python3 auto-task-checker.py --task-file /path/to/bot/TASKS.md > checker.log 2>&1 &

# Stop
pkill -f "auto-task-checker.py.*TASKS.md"
```

---

## ✅ Deployment Checklist

- [ ] Copy skill files to each bot
- [ ] Create TASKS.md for each bot
- [ ] Start scheduler for each bot
- [ ] Verify running: `ps aux | grep auto-task-checker`
- [ ] Check logs: `tail -f checker.log`
- [ ] Add initial tasks to each TASKS.md

---

**Ready?** Give me the list of bot paths and I'll deploy this everywhere. 🤖
