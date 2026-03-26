# Content Approval Workflow
## Notion/Trello Board Template

**Purpose:** Streamlined system for drafting, reviewing, approving, and scheduling LinkedIn posts with clear status tracking and feedback loops.

---

## BOARD STRUCTURE

### Status Columns (Left to Right):

```
📝 IDEAS → 📄 DRAFTING → 👀 READY FOR REVIEW → 🔄 IN REVISION → ✅ APPROVED → 📅 SCHEDULED → 📊 PUBLISHED
```

---

## NOTION TEMPLATE SETUP

### Database Properties:

| Property | Type | Options/Format |
|----------|------|----------------|
| **Post Title** | Title | Auto-generated from first line |
| **Status** | Status | Ideas, Drafting, Ready for Review, In Revision, Approved, Scheduled, Published |
| **Content Pillar** | Select | Leadership, Industry Insights, Tactical Advice, Personal, Client Story, Other |
| **Post Type** | Select | Story, Opinion, How-To, List, Question, Case Study, Announcement |
| **Draft Due** | Date | When ghostwriter will have draft ready |
| **Review Due** | Date | When client should provide feedback |
| **Publish Date** | Date | Scheduled publish date |
| **Priority** | Select | 🔴 High, 🟡 Medium, 🟢 Low |
| **Client** | Relation | Link to Clients database |
| **Assets** | Files | Images, carousels, documents attached |
| **Feedback** | Text | Client notes and revision requests |
| **Post URL** | URL | Live post link after publishing |
| **Impressions** | Number | Track post performance |
| **Engagement** | Number | Total reactions + comments |

---

## CARD/TEMPLATE STRUCTURE

### Each Post Card Contains:

```markdown
## POST CONTENT

[Draft text goes here]

---

## CONTEXT

**Pillar:** [Content Pillar]
**Goal:** [What this post should achieve]
**Hook Type:** [Question, Statement, Story, Stat, etc.]
**CTA:** [Call-to-action, if any]

---

## VISUAL ASSETS

- [ ] Image needed
- [ ] Carousel (PDF)
- [ ] Video
- [ ] None (text only)

[Attach assets here]

---

## FEEDBACK & REVISIONS

**Client Notes:**
[Client adds feedback here]

**Revision History:**
- v1: [Date] - [Summary of changes]
- v2: [Date] - [Summary of changes]

---

## PERFORMANCE (Post-Publish)

**Published:** [Date/Time]
**Post URL:** [Link]
**Impressions (24h):** ___
**Impressions (7d):** ___
**Reactions:** ___
**Comments:** ___
**Shares:** ___
**Profile Views from Post:** ___
**Inbound Messages:** ___
```

---

## TRELLO TEMPLATE SETUP

### Board Lists:

```
📝 IDEAS
📄 DRAFTING  
👀 READY FOR REVIEW
🔄 IN REVISION
✅ APPROVED
📅 SCHEDULED
📊 PUBLISHED
```

### Card Labels (Color-Coded):

| Label | Color | Meaning |
|-------|-------|---------|
| **Pillar: Leadership** | Blue | Leadership/content |
| **Pillar: Industry** | Purple | Industry insights |
| **Pillar: Tactical** | Green | How-to content |
| **Pillar: Personal** | Yellow | Personal stories |
| **Urgent** | Red | Needs immediate attention |
| **Needs Assets** | Orange | Waiting on images/graphics |

### Card Template (Trello Power-Up or Card Template):

```
## POST DRAFT

[Content here]

---

## DETAILS
📌 Pillar: 
📌 Post Type:
📌 Target Publish Date:

## ASSETS
- [ ] Image
- [ ] Carousel
- [ ] Video

## FEEDBACK
[Client adds comments]

## PERFORMANCE
- Impressions: 
- Engagement: 
- URL: 
```

---

## WORKFLOW PROCESS

### Step 1: Idea Capture (📝 IDEAS)

**Who:** Ghostwriter + Client
**When:** Ongoing

**Sources:**
- Client sends voice notes, thoughts, observations
- Ghostwriter mines client's questionnaire for story ideas
- Industry news/trends relevant to client
- Comments on other posts that spark ideas
- Monthly strategy call outcomes

**Action:** Create card with brief description. No full draft needed yet.

---

### Step 2: Drafting (📄 DRAFTING)

**Who:** Ghostwriter
**When:** Based on content calendar (3-5 days before publish date)

**Process:**
1. Ghostwriter pulls card from Ideas
2. Writes full post draft using client's voice
3. Adds any needed asset notes
4. Sets "Review Due" date (48 hours from move)
5. Moves to "Ready for Review"
6. Notifies client (via Notion mention, Trello notification, or Slack/Email)

---

### Step 3: Client Review (👀 READY FOR REVIEW)

**Who:** Client
**When:** Within 48 hours of ghostwriter submission

**Client Actions:**
- Read draft carefully
- Add comments directly on card (Notion) or in comments (Trello)
- Mark as approved OR request revisions
- Suggest any word changes, tone adjustments, fact corrections

**SLA:** 48-hour turnaround requested

**If Approved:** Move to ✅ APPROVED
**If Revisions Needed:** Add feedback notes, move to 🔄 IN REVISION

---

### Step 4: Revisions (🔄 IN REVISION)

**Who:** Ghostwriter
**When:** Within 24 hours of receiving feedback

**Process:**
1. Review all client feedback
2. Make requested changes
3. If feedback is unclear, ask clarifying questions in card comments
4. Update draft in card
5. Add revision note: "v2 - [date] - [changes made]"
6. Move back to 👀 READY FOR REVIEW

**Revision Limit:** 2 rounds included in standard package. Additional rounds may affect timeline.

---

### Step 5: Approval (✅ APPROVED)

**Who:** Client (final sign-off)
**When:** After revisions complete

**Action:** Client confirms post is ready to schedule. Ghostwriter moves to 📅 SCHEDULED.

---

### Step 6: Scheduling (📅 SCHEDULED)

**Who:** Ghostwriter
**When:** 1-3 days before publish date

**Tools:**
- LinkedIn native scheduler (free, up to 3 months in advance)
- Buffer, Hootsuite, or Sprout Social (paid, more features)
- Manual posting for time-sensitive content

**Process:**
1. Schedule post for optimal time (based on audience analytics)
2. Add any hashtags (3-5 max, relevant)
3. Upload visual assets
4. Update card with scheduled date/time
5. Move to 📊 PUBLISHED after posting

---

### Step 7: Published & Tracking (📊 PUBLISHED)

**Who:** Ghostwriter
**When:** After post goes live

**Actions:**
1. Add post URL to card
2. Set reminder to check performance at 24h and 7d
3. Update metrics (impressions, engagement, etc.)
4. Note any significant comments or inbound messages
5. Monthly: Include in analytics report

---

## CLIENT ONBOARDING: Board Access Instructions

### For Notion:

```
1. I'll send you an invite to the Notion workspace
2. Accept the invite and download the Notion app (recommended)
3. Your board is called "[Client Name] - Content Calendar"
4. You'll see posts in different columns based on status
5. When a post is in "Ready for Review," please:
   - Read the draft
   - Add comments directly on the page
   - Let me know if it's approved or needs changes
6. Aim to review within 48 hours to keep things moving
```

### For Trello:

```
1. I'll send you an invite to the Trello board
2. Accept and download the Trello app (optional but helpful)
3. Your board is called "[Client Name] - LinkedIn Content"
4. Posts move left to right as they progress
5. When a card is in "Ready for Review":
   - Open the card
   - Read the draft in the description
   - Add comments with feedback
   - Let me know if approved or needs revision
6. Aim for 48-hour review turnaround
```

---

## AUTOMATION IDEAS

### Notion Automations:
- When status = "Ready for Review" → Send email/Slack notification to client
- When status = "Published" → Create task to check metrics in 24h
- When review due date approaching → Send reminder

### Trello Power-Ups:
- **Card Repeater:** For recurring post types
- **Custom Fields:** For metrics tracking
- **Slack Integration:** Notify when cards move to "Ready for Review"
- **Calendar:** Visual view of publish dates
- **Butler Automation:** Auto-move cards, set due dates, send reminders

---

## WEEKLY CHECKLIST FOR GHOSTWRITER

- [ ] Review board for any cards stuck in "Ready for Review" > 48h
- [ ] Send gentle nudge to client if needed
- [ ] Draft posts for next week (move to Drafting)
- [ ] Schedule approved posts for upcoming week
- [ ] Update performance metrics on published posts
- [ ] Archive or clean up old idea cards (monthly)

---

## FILES INCLUDED

- `notion-template-link.json` - Notion template export (create via Notion UI)
- `trello-template-link.txt` - Trello board template link (create via Trello UI)

---

**File Location:** `linkedin-service-system/02-workflows/01-content-approval-workflow.md`
