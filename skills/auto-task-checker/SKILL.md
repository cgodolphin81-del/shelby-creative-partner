# Auto Task Checker — Universal Bot Skill

**Purpose:** Automatically prompt any bot to check their task list and execute pending work  
**Created:** March 28, 2026  
**Author:** Shelby (for Charmaine's bot fleet)

---

## 🎯 What It Does

Every X minutes, the bot:
1. Reads its task list file
2. Finds the next pending task
3. Executes it
4. Marks it complete
5. Logs the result

---

## 📁 Files Needed

```
bot-auto-task-checker/
├── SKILL.md              ← This file
├── auto-task-checker.py  ← The scheduler
└── TASKS.md              ← Bot's task list (each bot has their own)
```

---

## 🔧 Installation (Per Bot)

### Step 1: Copy Files
```bash
# Copy to bot's workspace
mkdir -p /path/to/bot/skills/auto-task-checker
cp auto-task-checker.py /path/to/bot/skills/auto-task-checker/
cp SKILL.md /path/to/bot/skills/auto-task-checker/
```

### Step 2: Create Task List
```bash
# Each bot needs their own TASKS.md
cat > /path/to/bot/TASKS.md << 'EOF'
# Bot Task List

## Pending
- [ ] Task 1
- [ ] Task 2

## Completed
- [x] Task 0
EOF
```

### Step 3: Start Scheduler
```bash
cd /path/to/bot/skills/auto-task-checker
nohup python3 auto-task-checker.py > checker.log 2>&1 &
```

### Step 4: Verify
```bash
ps aux | grep auto-task-checker
tail -f checker.log
```

---

## ⚙️ Configuration

Edit `auto-task-checker.py` to customize:

```python
# How often to check for tasks (seconds)
CHECK_INTERVAL = 300  # 5 minutes

# Path to task list
TASK_FILE = "/path/to/bot/TASKS.md"

# Log file
LOG_FILE = "/path/to/bot/skills/auto-task-checker/checker.log"
```

---

## 📊 What Gets Logged

```
[2026-03-28 12:00:00] 🤖 Auto Task Checker STARTED
[2026-03-28 12:05:00] 📋 Checking task list...
[2026-03-28 12:05:00] 📝 Found 3 pending tasks
[2026-03-28 12:05:00] 🚀 Executing: Task 1
[2026-03-28 12:05:30] ✅ Task 1 completed (30s)
[2026-03-28 12:05:30] ✅ Marked complete in TASKS.md
[2026-03-28 12:10:00] 📋 Checking task list...
```

---

## 🎯 Example Bot Task Lists

### Content Bot:
```markdown
# Content Bot Tasks

## Pending
- [ ] Write blog post #47
- [ ] Generate 10 social posts
- [ ] Update website copy

## Completed
- [x] Write blog post #46
```

### Research Bot:
```markdown
# Research Bot Tasks

## Pending
- [ ] Research competitor pricing
- [ ] Find 20 lead contacts
- [ ] Summarize industry report

## Completed
- [x] Market analysis complete
```

### Support Bot:
```markdown
# Support Bot Tasks

## Pending
- [ ] Respond to ticket #1234
- [ ] Follow up with customer X
- [ ] Update FAQ

## Completed
- [x] Resolved ticket #1230
```

---

## 💡 Pro Tips

1. **One task at a time** — Don't overwhelm the bot
2. **Clear task descriptions** — "Write blog post #47" not "Write stuff"
3. **Mark complete automatically** — The script does this
4. **Add new tasks anytime** — Just edit TASKS.md
5. **Monitor logs** — `tail -f checker.log`

---

## 🚀 Quick Deploy (All Bots)

```bash
#!/bin/bash
# deploy-to-all-bots.sh

BOTS=(
    "/path/to/bot1"
    "/path/to/bot2"
    "/path/to/bot3"
)

for BOT in "${BOTS[@]}"; do
    echo "📦 Deploying to $BOT..."
    
    mkdir -p $BOT/skills/auto-task-checker
    cp auto-task-checker.py $BOT/skills/auto-task-checker/
    cp SKILL.md $BOT/skills/auto-task-checker/
    
    # Create default task list if not exists
    if [ ! -f $BOT/TASKS.md ]; then
        cat > $BOT/TASKS.md << 'EOF'
# Task List

## Pending
- [ ] First task

## Completed
EOF
    fi
    
    # Start scheduler
    cd $BOT/skills/auto-task-checker
    nohup python3 auto-task-checker.py > checker.log 2>&1 &
    
    echo "✅ $BOT deployed"
done

echo "🎉 All bots deployed!"
```

---

## 📈 Monitoring Dashboard

Check all bots at once:

```bash
# Check which schedulers are running
ps aux | grep auto-task-checker | grep -v grep

# View all logs
find /path/to/bots -name "checker.log" -exec tail -5 {} \;

# Count pending tasks per bot
for bot in /path/to/bots/*; do
    pending=$(grep -c "^\- \[ \]" $bot/TASKS.md 2>/dev/null || echo "0")
    echo "$bot: $pending pending tasks"
done
```

---

**Ready to deploy?** Tell me which bots and I'll set them all up. 🤖
