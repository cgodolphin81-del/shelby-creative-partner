# Moderation System

## Rules, Auto-Mod, Human Moderation & Crisis Management

---

## 📜 Community Rules Framework

### Core Rules Template

```
━━━━━━━━━━━━━━━━━━━━━━━━
📋 SERVER RULES
━━━━━━━━━━━━━━━━━━━━━━━━

1. BE RESPECTFUL
   Treat all members with respect. No harassment, 
   hate speech, discrimination, or personal attacks.

2. NO SPAM OR SCAMS
   Don't spam messages, DMs, or channels. No scams, 
   phishing, or malicious links.

3. KEEP IT RELEVANT
   Post in appropriate channels. Stay on topic.

4. NO NSFW CONTENT
   Keep content SFW. No adult content, gore, or 
   disturbing imagery.

5. RESPECT PRIVACY
   No doxxing. Don't share personal information 
   without consent.

6. NO SELF-PROMO (without permission)
   Ask before promoting. Use #self-promo channel.

7. FOLLOW DISCORD TOS
   Adhere to Discord's Terms of Service and 
   Community Guidelines.

8. LISTEN TO STAFF
   Follow moderator instructions. Appeal decisions 
   through proper channels.

━━━━━━━━━━━━━━━━━━━━━━━━
Violations may result in warnings, timeouts, or bans.
Appeals: {ticket link or email}
━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Rule Enforcement Matrix

| Violation | First Offense | Second Offense | Third Offense |
|-----------|---------------|----------------|---------------|
| Minor disrespect | Warning | 1hr timeout | 24hr timeout |
| Spam | Warning + delete | 24hr timeout | Ban |
| Self-promo | Warning + delete | 24hr timeout | Ban |
| NSFW content | 24hr timeout | Ban | Ban |
| Harassment | 24hr timeout | 7-day ban | Permanent ban |
| Hate speech | 7-day ban | Permanent ban | Permanent ban |
| Scams/phishing | Permanent ban | Permanent ban | Permanent ban |
| Doxxing | Permanent ban | Permanent ban | Permanent ban |
| ToS violation | Permanent ban | Permanent ban | Permanent ban |

---

### Rule Channel Setup

**#rules-and-info Channel:**
```
📋 SERVER RULES

[Embed with all rules]

✅ React with ✓ to accept rules and gain access
❓ Questions? Open a ticket

Last updated: {date}
```

**Auto-Mod Setup:**
- Require rule acceptance before full access
- 24-hour read-only period for new members
- Gradual channel access unlock

---

## 🤖 Auto-Moderation System

### Recommended AutoMod Rules

#### 1. Spam Detection
```
Trigger: 5+ messages in 10 seconds
Action: Timeout 1 hour + Log
Escalation: 3x = 24hr timeout
```

#### 2. Mass Mentions
```
Trigger: 5+ mentions in one message
Action: Delete message + Timeout 2 hours
Escalation: 3x = 7-day ban
```

#### 3. Link Filtering
```
Trigger: Links from non-trusted domains
Action: Delete + Warning
Whitelist: youtube.com, twitter.com, github.com, etc.
Blacklist: Known scam domains (updated weekly)
```

#### 4. Profanity Filter
```
Trigger: Detected profanity
Action: Delete message + Warning
Severity-based:
- Mild: Warning
- Moderate: 1hr timeout
- Severe: 24hr timeout
```

#### 5. Caps Lock
```
Trigger: 70%+ caps in message (10+ chars)
Action: Delete + Auto-reply
"Please avoid using all caps"
```

#### 6. Duplicate Messages
```
Trigger: Same message 3x in 1 minute
Action: Delete + 30min timeout
```

#### 7. Invite Links
```
Trigger: Discord invite links (non-official)
Action: Delete + Warning
Exception: Partner servers (whitelist)
```

#### 8. Suspicious Accounts
```
Trigger: Account < 7 days old + first message
Action: Hold for review + Captcha
```

---

### Carl-bot AutoMod Configuration

```yaml
automod:
  spam:
    enabled: true
    threshold: 5
    timeframe: 10s
    action: timeout_1h
    
  mentions:
    enabled: true
    threshold: 5
    action: delete_timeout_2h
    
  links:
    enabled: true
    whitelist:
      - youtube.com
      - twitter.com
      - github.com
      - discord.com
    action: delete_warn
    
  profanity:
    enabled: true
    sensitivity: medium
    action: delete_warn
    
  caps:
    enabled: true
    threshold: 70
    min_length: 10
    action: delete
    
  invites:
    enabled: true
    action: delete_warn
    
  mass_join:
    enabled: true
    threshold: 10
    timeframe: 5min
    action: lockdown_alert
```

---

### Wick Security Configuration

```yaml
security:
  anti_nuke:
    enabled: true
    max_channels_deleted: 3
    max_roles_deleted: 3
    action: remove_permissions
    
  anti_raid:
    enabled: true
    join_threshold: 10
    timeframe: 5min
    action: lockdown
    
  captcha:
    enabled: true
    timeout: 5min
    failures_allowed: 3
    
  backup:
    enabled: true
    frequency: daily
    include: [roles, channels, emojis]
```

---

## 👥 Human Moderation System

### Moderation Team Structure

```
Head Moderator
    │
    ├── Senior Moderators (2-3)
    │   └── Shift leads, escalations
    │
    ├── Moderators (4-8)
    │   └── Frontline moderation
    │
    └── Trial Moderators (2-4)
        └── Learning, limited permissions
```

---

### Shift Coverage

#### 24/7 Coverage Model (Enterprise)

| Shift | Hours (UTC) | Moderators | Lead |
|-------|-------------|------------|------|
| Morning | 06:00-14:00 | 2 | Senior Mod |
| Afternoon | 14:00-22:00 | 3 | Senior Mod |
| Night | 22:00-06:00 | 2 | Moderator |
| Weekend | 24hrs | 2 per shift | Rotating |

**Minimum Coverage:** 2 mods online at all times

---

#### 16-Hour Coverage Model (Growth)

| Shift | Hours (UTC) | Moderators |
|-------|-------------|------------|
| Day 1 | 08:00-16:00 | 2 |
| Day 2 | 16:00-00:00 | 2 |
| Night | 00:00-08:00 | On-call only |

---

#### 12-Hour Coverage Model (Starter)

| Shift | Hours (UTC) | Moderators |
|-------|-------------|------------|
| Day | 08:00-20:00 | 2 |
| Night | 20:00-08:00 | On-call only |

---

### Moderator Responsibilities

#### Daily Tasks
- [ ] Review #reports channel
- [ ] Check #mod-logs for auto-actions
- [ ] Monitor high-traffic channels
- [ ] Respond to tickets
- [ ] Welcome new members
- [ ] Engage in community (not just police)

#### Per-Shift Tasks
- [ ] Handoff notes from previous shift
- [ ] Review active situations
- [ ] Check for spam/raid activity
- [ ] Update shift log
- [ ] Handoff to next shift

#### Weekly Tasks
- [ ] Team sync meeting
- [ ] Review difficult cases
- [ ] Update documentation
- [ ] Training (if needed)

---

### Moderation Tools & Commands

#### Essential Commands

```
!warn @user [reason]
- Issues formal warning
- Logged in user history
- Triggers escalation tracking

!timeout @user [duration] [reason]
- Temporarily mutes user
- Durations: 1h, 24h, 7d
- User can read but not post

!ban @user [reason]
- Permanent removal
- Deletes message history (optional)
- Requires senior mod approval

!kick @user [reason]
- Remove from server
- Can rejoin with invite
- Less severe than ban

!note @user [note]
- Add internal note to user
- Visible to staff only
- For tracking patterns

!history @user
- View user's mod history
- Warnings, timeouts, bans
- Helps pattern recognition

!purge [number] [@user]
- Delete messages
- Number: 1-100
- Optional: specific user

!lock [channel]
- Lock channel (no new messages)
- Use for heated situations
- !unlock to restore

!slowmode [channel] [seconds]
- Set slow mode
- Use to slow spam
```

---

### Decision Tree for Moderators

```
Rule Violation Reported/Observed
         │
         ▼
    Assess Severity
         │
    ┌────┴────┐
    │         │
  Minor     Major
    │         │
    ▼         ▼
  Warning   Timeout?
    │         │
    │    ┌────┴────┐
    │    │         │
    │  First    Repeat
    │    │         │
    │    ▼         ▼
    │  1-24hr   7day+
    │  timeout  or Ban
    │
    ▼
  Log Action
    │
    ▼
  DM User
    │
    ▼
  Monitor for
  Escalation
```

---

### Warning Message Templates

#### First Warning (Friendly)
```
Hi {user},

This is a friendly warning about your recent message in #{channel}.

Issue: {specific violation}
Rule: {rule number and text}

Please review our rules: {link}

This is your first warning. Continued violations may result in 
timeouts or bans. We want you here, just please follow the rules!

- {moderator} | {community} Team
```

#### Final Warning (Firm)
```
{user}, 

FINAL WARNING

Violation: {specific violation}
Rule: {rule number}

You have received {number} warnings previously. This is your 
final warning before a ban.

Any further violations will result in permanent removal.

- {moderator} | {community} Team
```

#### Ban Notification
```
{user},

You have been banned from {community}.

Reason: {specific reason}
Rule violated: {rule}

This decision is final. If you believe this is an error, 
you may appeal once after 30 days at: {appeal link}

- {community} Team
```

---

## 🚨 Crisis Management

### Crisis Types & Response

#### Type 1: Raid Attack
**Signs:**
- 10+ new members in minutes
- Spam messages flooding channels
- Coordinated harassment

**Response:**
```
1. IMMEDIATE (<1 min)
   - Activate lockdown mode
   - Disable invites
   - Enable captcha verification

2. CONTAINMENT (1-5 min)
   - Mass delete spam messages
   - Timeout all raid accounts
   - Alert all online mods

3. RECOVERY (5-30 min)
   - Review and ban raid accounts
   - Restore normal operations
   - Announce to community

4. POST-MORTEM (24hrs)
   - Document attack vectors
   - Update security settings
   - Report to Discord Trust & Safety
```

---

#### Type 2: Harassment Campaign
**Signs:**
- Targeted attacks on member(s)
- Coordinated DM harassment
- Doxxing attempts

**Response:**
```
1. PROTECT VICTIM (immediate)
   - Lock victim's DMs from server
   - Offer private support channel
   - Document all harassment

2. REMOVE ATTACKERS (immediate)
   - Ban all identified attackers
   - Delete all harassing content
   - Mass DM ban if coordinated

3. SUPPORT COMMUNITY (1-24 hrs)
   - Public statement (if visible)
   - Reassure safety measures
   - Provide reporting resources

4. FOLLOW-UP (ongoing)
   - Check on victim wellbeing
   - Monitor for continued harassment
   - Coordinate with Discord if needed
```

---

#### Type 3: Controversial Topic Explosion
**Signs:**
- Heated political/religious debate
- Channel derailing
- Members getting personal

**Response:**
```
1. DE-ESCALATE (immediate)
   - Lock the channel
   - Post cooling-off message
   - Move to designated channel

2. ADDRESS (5-15 min)
   - Remind of community guidelines
   - Warn key agitators
   - Timeout if continuing

3. REOPEN (when calm)
   - Unlock with clear expectations
   - Monitor closely
   - Be ready to re-lock

4. REVIEW (post-incident)
   - Was channel appropriate for topic?
   - Need dedicated debate channel?
   - Update guidelines if needed
```

---

#### Type 4: Scam/Phishing Attack
**Signs:**
- Fake giveaway posts
- Phishing links
- Impersonation of staff

**Response:**
```
1. CONTAIN (immediate)
   - Delete all scam messages
   - Ban scam accounts
   - Lock affected channels

2. ALERT (1-5 min)
   - @everyone warning
   - Pin scam alert message
   - DM all members if severe

3. SECURE (5-30 min)
   - Review how scammers entered
   - Tighten verification
   - Audit bot permissions

4. EDUCATE (ongoing)
   - Post scam awareness guide
   - Regular reminders
   - Report channel for future
```

---

#### Type 5: Staff Misconduct
**Signs:**
- Mod abusing power
- Inappropriate behavior
- Leaking private info

**Response:**
```
1. INVESTIGATE (confidential)
   - Gather evidence
   - Interview involved parties
   - Keep confidential

2. DECIDE (24-48 hrs)
   - Head mod + leadership
   - Based on evidence
   - Consider severity

3. ACT (decisive)
   - Remove permissions if needed
   - Public statement if visible
   - Support affected members

4. LEARN (post-incident)
   - Review hiring process
   - Update training
   - Improve oversight
```

---

### Crisis Communication Templates

#### Raid Alert (Internal)
```
🚨 RAID ALERT 🚨

@here All available mods!

Server is under raid attack.
- {number}+ spam accounts joined
- Flooding {channels}

ACTION REQUIRED:
1. Lock down server (if not done)
2. Mass timeout raid accounts
3. Delete spam messages
4. Report to Discord

Lead: @{head_mod}
Status: ONGOING
```

---

#### Public Crisis Statement
```
📢 COMMUNITY UPDATE

We're aware of {issue} affecting our community.

What we're doing:
✅ {action1}
✅ {action2}
✅ {action3}

Your safety is our priority. We'll update as we learn more.

Thank you for your patience.
- {community} Team
```

---

#### Post-Crisis Thank You
```
🙏 THANK YOU

Thanks to everyone for your patience during {incident}.

Thanks to our mod team for their quick response:
{tag mods}

We've implemented {improvements} to prevent future issues.

Back to regular programming! 🎉
```

---

## 📊 Moderation Metrics

### Key Performance Indicators

| Metric | Target | Measurement |
|--------|--------|-------------|
| Response Time | <15 min | Report to action |
| Resolution Time | <2 hours | Report to closed |
| False Positive Rate | <5% | Appealed actions |
| Repeat Offender Rate | <10% | Re-offending users |
| Member Satisfaction | >80% | Post-resolution survey |
| Mod Coverage | 100% | Scheduled shifts |

---

### Weekly Mod Report Template

```
📊 MODERATION REPORT
Week of {date}

SUMMARY
- Total actions: {number}
- Warnings: {number}
- Timeouts: {number}
- Bans: {number}
- Tickets resolved: {number}

TOP VIOLATIONS
1. {violation}: {count}
2. {violation}: {count}
3. {violation}: {count}

BUSIEST CHANNELS
1. {channel}: {actions}
2. {channel}: {actions}
3. {channel}: {actions}

ESCALATIONS
- {description of any major incidents}

TEAM NOTES
- {any training needs, concerns, wins}

NEXT WEEK FOCUS
- {priority areas}
```

---

## 🎓 Moderator Training

### Training Curriculum

#### Week 1: Foundations
- Server rules deep-dive
- Tool training (bots, commands)
- Shadow experienced mods
- Practice scenarios

#### Week 2: Application
- Handle real cases (supervised)
- Write-up practice
- Escalation protocols
- Crisis response drills

#### Week 3: Independence
- Full shift coverage
- Complex case handling
- Community engagement
- Feedback session

#### Ongoing: Development
- Monthly training sessions
- Case study reviews
- Policy updates
- Wellness check-ins

---

### Moderator Code of Conduct

```
MODERATOR CODE OF CONDUCT

1. LEAD BY EXAMPLE
   Follow the rules you enforce. Model ideal behavior.

2. STAY NEUTRAL
   Don't play favorites. Enforce rules consistently.

3. RESPECT PRIVACY
   Keep reports and user info confidential.

4. DE-ESCALATE
   Calm situations, don't inflame them.

5. DOCUMENT EVERYTHING
   Log actions, reasons, and context.

6. KNOW YOUR LIMITS
   Escalate when unsure. Team over ego.

7. TAKE CARE OF YOURSELF
   Burnout helps no one. Take breaks.

8. REPRESENT WELL
   You represent this community. Act accordingly.
```

---

## 🛡️ Security Checklist

### Daily
- [ ] Review mod logs
- [ ] Check for suspicious patterns
- [ ] Verify bot health
- [ ] Test emergency contacts

### Weekly
- [ ] Audit role permissions
- [ ] Review ban list
- [ ] Update blocklists
- [ ] Backup server settings

### Monthly
- [ ] Full security audit
- [ ] Update crisis protocols
- [ ] Review mod team access
- [ ] Test recovery procedures

### Quarterly
- [ ] Crisis simulation drill
- [ ] Third-party security review
- [ ] Update all documentation
- [ ] Team training refresh

---

**Last Updated:** March 2026
