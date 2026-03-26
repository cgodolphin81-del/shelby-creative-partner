# Discord Platform Mastery

## Complete Guide to Discord Architecture, Bots, and Automation

---

## 🏗️ Server Architecture

### Optimal Channel Structure

```
📢 WELCOME ZONE
├── #welcome-and-rules
├── #announcements
├── #introductions
└── #server-guide

💬 COMMUNITY HUB
├── #general-chat
├── #off-topic
├── #questions-help
├── #showcase
└── #memes-and-fun

🎯 TOPIC CHANNELS
├── #topic-1
├── #topic-2
├── #topic-3
└── #topic-4

🎪 EVENTS & ACTIVITIES
├── #events-calendar
├── #event-discussion
├── 📺 Voice Events
└── 📺 Stage Channels

🎮 ACTIVITIES
├── #game-night
├── #watch-party
├── #trivia
└── 📺 Activity Voice

📚 RESOURCES
├── #faq
├── #tutorials
├── #guides
└── #useful-links

🎤 VOICE LOUNGES
├── 📺 General Voice
├── 📺 Gaming
├── 📺 Music
├── 📺 Study Room
└── 📺 AFK

🔒 STAFF ONLY
├── #staff-chat
├── #moderation-logs
├── #reports
└── #announcements-drafts

💎 PREMIUM (Paid Access)
├── #premium-lounge
├── #alpha-chat
├── #direct-access
└── 📺 Premium Voice
```

### Channel Best Practices

**Text Channels:**
- Keep names lowercase with hyphens
- Use emojis for visual scanning
- Limit to 50 channels max (cognitive overload)
- Archive inactive channels monthly

**Voice Channels:**
- Set appropriate user limits
- Enable video for key channels
- Use stage channels for events
- Create temporary voice channels (via bot)

**Forum Channels:**
- Use for support/tickets
- Enable tags for categorization
- Set up auto-sorting rules

---

## 👑 Role Hierarchy Design

### Standard Role Structure (Top to Bottom)

```
👑 Server Owner
├── 🛡️ Admin
│   └── Full server control
├── 🎯 Community Manager
│   └── Day-to-day management
├── 🔧 Moderator
│   └── Enforcement & safety
├── 🌟 VIP / Premium
│   └── Paid members
├── ⭐ Community Leader
│   └── Trusted members
├── 🎨 Content Creator
│   └── Verified creators
├── 🎮 Game Master
│   └── Event coordinators
├── 🤖 Bots
│   └── Automated accounts
├── ✅ Verified Member
│   └── Passed verification
├── 👤 Member
│   └── Default role
└── 🔇 Muted
    └── Temporary restriction
```

### Permission Matrix

| Permission | Admin | CM | Mod | VIP | Leader | Member |
|------------|-------|----|-----|-----|--------|--------|
| Manage Server | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Roles | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| Manage Channels | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| Kick Members | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Ban Members | ✅ | ✅ | ⚠️ | ❌ | ❌ | ❌ |
| Manage Messages | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Mention @everyone | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Send Messages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Embed Links | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Attach Files | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Connect Voice | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Speak Voice | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Priority Speaker | ✅ | ✅ | ✅ | ✅ | ⚠️ | ❌ |
| Stream | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

✅ = Full Access | ⚠️ = Limited Access | ❌ = No Access

---

## 🤖 Essential Bot Stack

### Core Moderation Bots

#### 1. **MEE6** (Free - $15/mo)
**Best For:** All-purpose automation

**Features:**
- Auto-moderation (spam, links, caps)
- Custom commands
- Leveling system
- Welcome messages
- Scheduled messages
- Role rewards

**Setup Priority:** ⭐⭐⭐⭐⭐

---

#### 2. **Carl-bot** (Free - $50/mo)
**Best For:** Advanced logging & moderation

**Features:**
- Detailed moderation logs
- Reaction roles
- Auto-assignment
- Reminders
- Reputation system
- Advanced automod

**Setup Priority:** ⭐⭐⭐⭐⭐

---

#### 3. **Dyno** (Free - $10/mo)
**Best For:** Moderation & announcements

**Features:**
- Auto-moderation
- Announcement embeds
- Giveaways
- Music (legacy)
- Custom commands
- Web dashboard

**Setup Priority:** ⭐⭐⭐⭐

---

### Engagement Bots

#### 4. **Arcane** (Free)
**Best For:** Leveling & engagement

**Features:**
- Beautiful leveling cards
- XP tracking
- Leaderboards
- Role rewards
- Custom messages

**Setup Priority:** ⭐⭐⭐⭐

---

#### 5. **Giveaway Bot** (Free)
**Best For:** Contests & growth

**Features:**
- Easy giveaway creation
- Entry requirements
- Winner selection
- Reroll capability
- Analytics

**Setup Priority:** ⭐⭐⭐

---

#### 6. **Sesh** (Free)
**Best For:** Event management

**Features:**
- Event scheduling
- RSVP tracking
- Calendar integration
- Reminders
- Recurring events

**Setup Priority:** ⭐⭐⭐⭐

---

### Support & Tickets

#### 7. **Ticket Tool** (Free - $10/mo)
**Best For:** Support tickets

**Features:**
- One-click ticket creation
- Category organization
- Transcript generation
- Multi-staff support
- Custom embeds

**Setup Priority:** ⭐⭐⭐⭐⭐

---

#### 8. **Helper.gg** (Free - $20/mo)
**Best For:** Advanced support

**Features:**
- Full support system
- Knowledge base
- Claim tickets
- Satisfaction ratings
- Analytics dashboard

**Setup Priority:** ⭐⭐⭐

---

### Web3 Specific

#### 9. **Collab.land** (Free)
**Best For:** Token-gated access

**Features:**
- Token/NFT verification
- Role assignment
- Multi-chain support
- Automatic updates
- Whitelist management

**Setup Priority:** ⭐⭐⭐⭐ (for Web3)

---

#### 10. **Wick** (Free - $50/mo)
**Best For:** Security & anti-raid

**Features:**
- Advanced anti-raid
- Captcha verification
- Backup & restore
- Audit logs
- Token protection

**Setup Priority:** ⭐⭐⭐⭐⭐ (for Web3)

---

### Analytics Bots

#### 11. **Statbot** (Free - $10/mo)
**Best For:** Server analytics

**Features:**
- Message tracking
- Voice activity
- Member growth
- Channel stats
- User leaderboards

**Setup Priority:** ⭐⭐⭐⭐

---

#### 12. **Server Insights** (Free)
**Best For:** Quick analytics

**Features:**
- Activity graphs
- Member stats
- Message analytics
- Export data

**Setup Priority:** ⭐⭐⭐

---

## ⚙️ Automation Workflows

### Welcome Flow

```
New Member Joins
    ↓
Verification (captcha/reaction)
    ↓
Auto-assign "Member" role
    ↓
Send welcome DM with rules
    ↓
Post welcome message in #introductions
    ↓
Add to onboarding channel (24hr access)
    ↓
After 24hrs → Remove onboarding access
```

**Bots:** Carl-bot + Ticket Tool  
**Time to Setup:** 2 hours

---

### Auto-Moderation Flow

```
Message Posted
    ↓
Check against rules:
- Spam detection
- Link filtering
- Profanity filter
- Caps limit
- Mention spam
    ↓
Violation? → Warning + Auto-delete
    ↓
3 Warnings → 1hr Timeout
    ↓
5 Warnings → 24hr Timeout
    ↓
10 Warnings → Manual Review
```

**Bots:** MEE6 or Carl-bot  
**Time to Setup:** 3 hours

---

### Role Assignment Flow

```
Member Reacts to Role Message
    ↓
Bot Assigns Corresponding Role
    ↓
Channel Access Updates Automatically
    ↓
Optional: Send confirmation DM
```

**Bots:** Carl-bot Reaction Roles  
**Time to Setup:** 1 hour

---

### Premium Access Flow

```
Payment Processed (Stripe/Patreon)
    ↓
Webhook to Discord
    ↓
Bot Assigns "Premium" Role
    ↓
Premium Channels Unlocked
    ↓
Welcome DM with premium perks
```

**Bots:** Whop, LaunchPass, or custom  
**Time to Setup:** 4-6 hours

---

### Event Reminder Flow

```
Event Created (7 days out)
    ↓
Announcement posted
    ↓
RSVP tracking begins
    ↓
24hr reminder → @interested role
    ↓
1hr reminder → #events channel
    ↓
Event starts → Voice channel opens
    ↓
Post-event → Thank you + recording
```

**Bots:** Sesh + MEE6  
**Time to Setup:** 2 hours

---

### Escalation Flow

```
Member Reported
    ↓
Auto-log in #reports
    ↓
Mod reviews (<15 min SLA)
    ↓
Action taken (warn/timeout/ban)
    ↓
Log action in #mod-logs
    ↓
DM member with explanation
    ↓
Appeal window: 7 days
```

**Bots:** Ticket Tool + Carl-bot  
**Time to Setup:** 2 hours

---

## 🔐 Security Best Practices

### Server Settings

| Setting | Recommended | Why |
|---------|-------------|-----|
| Verification Level | Medium (✓) | Prevents raid accounts |
| Default Notifications | Mentions only | Reduces spam complaints |
| Explicit Content Filter | Scan all members | Brand safety |
| 2FA Requirement | Required for staff | Account security |
| Invite Links | Expiring (7 days) | Access control |
| Widget | Disabled | Prevents scraping |

---

### Anti-Raid Configuration

**Carl-bot AutoMod:**
```
- Mass join detection: 5+ in 30 sec → Lockdown
- Mass mention: 5+ mentions → Auto-delete + timeout
- Link spam: 3+ links/min → Timeout
- Caps: 70%+ caps → Auto-delete
- Duplicate messages: 3x in 1 min → Timeout
```

**Wick Security:**
```
- Anti-nuke: Enabled
- Backup: Daily automatic
- Captcha: On join (for first 1000 members)
- Alt detection: Enabled
```

---

### Permission Safety

**Golden Rules:**
1. Never give "Administrator" except to owners
2. Use specific permissions instead of broad ones
3. Test permissions in private channel first
4. Review role permissions monthly
5. Remove access immediately on team member departure

**Dangerous Permissions to Limit:**
- `Manage Roles` (can grant self admin)
- `Manage Webhooks` (can post as anyone)
- `Manage Server` (full control)
- `Administrator` (bypasses all permissions)

---

## 📊 Channel Optimization

### Activity-Based Organization

**High Activity Channels:**
- Keep at top of category
- Enable slow mode if needed (5-30 sec)
- Pin important messages
- Archive weekly highlights

**Low Activity Channels:**
- Consider merging or removing
- Move to "Archive" category
- Use forums instead of channels

**Channel Naming:**
```
✅ good-channel-name
✅ good-channel-name-too
❌ GoodChannelName (hard to read)
❌ good_channel_name (underscores less visible)
❌ GOOD CHANNEL NAME (all caps = shouting)
```

---

### Category Organization

**Rule of 7:** Max 7 channels per category (cognitive limit)

**Category Order:**
1. Welcome (most important first)
2. Community (core engagement)
3. Topics (specific interests)
4. Activities (events, games)
5. Resources (reference material)
6. Voice (audio channels)
7. Staff (hidden from members)

---

## 🎨 Customization Tips

### Server Branding

| Element | Specs | Tips |
|---------|-------|------|
| Server Icon | 512x512 px | Recognizable at small size |
| Server Banner | 1920x1080 px | Use for announcements |
| Invite Splash | 1920x1080 px | Discovery feature |
| Emoji | 128x128 px | Custom branded emojis |
| Stickers | 320x320 px | Fun community additions |

---

### Embed Design

**Professional Announcement Template:**
```
━━━━━━━━━━━━━━━━━━━━
📢 ANNOUNCEMENT TITLE
━━━━━━━━━━━━━━━━━━━━

Brief introduction (1-2 sentences)

**Key Details:**
• Detail 1
• Detail 2
• Detail 3

📅 **Date:** [Date]
⏰ **Time:** [Time + Timezone]
📍 **Location:** [Channel/Link]

━━━━━━━━━━━━━━━━━━━━
[Call to Action Button]
━━━━━━━━━━━━━━━━━━━━
```

**Colors by Purpose:**
- Announcements: Blue (#3498db)
- Events: Purple (#9b59b6)
- Updates: Green (#2ecc71)
- Alerts: Red (#e74c3c)
- Info: Gray (#95a5a6)

---

## 🔧 Advanced Configurations

### Multi-Server Setup

**For agencies managing multiple communities:**

1. **Hub Server** (Internal)
   - Staff coordination
   - Resource library
   - Training materials
   - Cross-client learnings

2. **Client Servers** (Separate)
   - Branded individually
   - Isolated permissions
   - Dedicated bot instances
   - Separate analytics

**Cross-Server Features:**
- Shared moderation team
- Centralized reporting
- Unified bot dashboard
- Knowledge base sharing

---

### API Integrations

**Common Integrations:**

| Platform | Use Case | Difficulty |
|----------|----------|------------|
| Twitter | Auto-post tweets | Easy |
| YouTube | New video alerts | Easy |
| Twitch | Stream notifications | Easy |
| Stripe | Payment → Role | Medium |
| Patreon | Tier → Role | Medium |
| GitHub | Commit/Release alerts | Easy |
| Calendly | Event RSVP sync | Medium |
| Zapier | Custom workflows | Medium |
| Custom API | Client-specific | Hard |

---

### Custom Bot Features

**When to Build Custom:**
- Unique workflow not covered by existing bots
- API integration not available
- Specific branding requirements
- Advanced analytics needs
- Multi-platform coordination

**Typical Custom Bot Costs:**
- Simple bot: $2,500-5,000
- Medium complexity: $5,000-10,000
- Advanced system: $10,000-25,000
- Monthly maintenance: 15-20% of build cost

---

## 📚 Quick Reference

### Essential Commands for Mods

```
!warn @user [reason]     - Issue warning
!timeout @user [time]    - Temporary mute
!ban @user [reason]      - Permanent ban
!kick @user [reason]     - Remove from server
!purge [number]          - Delete messages
!notes @user             - View user notes
!history @user           - View mod history
!report @user [reason]   - Create report ticket
```

### Common Bot Commands

```
!level              - Check your level
!leaderboard        - Server rankings
!giveaway           - Create giveaway
!ticket             - Open support ticket
!events             - View upcoming events
!remind [time] [msg]- Set reminder
!poll [question]    - Create poll
```

---

## 🎯 Platform Mastery Checklist

### Server Setup ✅
- [ ] Channel structure finalized
- [ ] Role hierarchy created
- [ ] Permissions configured
- [ ] Verification settings enabled
- [ ] Welcome screen configured
- [ ] Server icon & banner uploaded
- [ ] Discovery settings optimized

### Bot Configuration ✅
- [ ] Moderation bot installed
- [ ] Leveling bot configured
- [ ] Ticket system ready
- [ ] Event bot scheduled
- [ ] Analytics bot tracking
- [ ] Welcome automation active
- [ ] Auto-mod rules tested

### Security ✅
- [ ] 2FA required for staff
- [ ] Anti-raid configured
- [ ] Backup system in place
- [ ] Audit logs enabled
- [ ] Permission audit completed
- [ ] Emergency contacts listed

### Documentation ✅
- [ ] Rules channel created
- [ ] FAQ documented
- [ ] Mod handbook written
- [ ] Escalation procedures defined
- [ ] Brand guidelines shared
- [ ] Contact information posted

---

**Last Updated:** March 2026
