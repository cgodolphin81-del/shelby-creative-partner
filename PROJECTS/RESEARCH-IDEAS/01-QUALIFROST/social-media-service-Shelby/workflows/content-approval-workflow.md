# Content Approval Workflow

## Notion/Trello Board Structure & Process

---

## Overview

This document outlines the complete content approval workflow using either Notion or Trello. The system ensures quality control, brand consistency, and timely content delivery.

---

## Workflow Stages

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   IDEA/     │ -> │   DRAFTING  │ -> │   REVIEW    │ -> │  APPROVED   │ -> │  SCHEDULED  │
│  BACKLOG    │    │             │    │             │    │             │    │  /PUBLISHED │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## OPTION 1: NOTION SETUP

### Database Structure

#### Main Database: "Content Calendar"

**Properties:**

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| Content Title | Title | Text |
| Status | Status | Idea → Drafting → In Review → Approved → Scheduled → Published |
| Platform | Multi-select | Instagram, LinkedIn, Twitter, Facebook, TikTok, Multiple |
| Content Type | Select | Feed Post, Reel, Story, Carousel, Thread, Article, Video, Graphic |
| Content Pillar | Select | Educational, Inspirational, Promotional, Engagement, BTS |
| Due Date | Date | Date picker |
| Publish Date | Date | Date picker |
| Assigned To | Person | Team member |
| Approver | Person | Client/Manager |
| Priority | Select | Low, Medium, High, Urgent |
| Caption | Text | Long-form text |
| Hashtags | Text | Hashtag list |
| Visual Assets | Files | Images, videos |
| Link | URL | External links |
| Notes | Text | Internal notes |
| Client Feedback | Text | Client comments |

### Board View Setup

**Group by:** Status
**Sort by:** Publish Date (ascending)
**Filter:** Current month (optional)

**Column Order:**
1. 📝 Idea Backlog
2. ✏️ Drafting
3. 👀 In Review
4. ✅ Approved
5. 📅 Scheduled
6. 📤 Published

### Template Buttons

Create templates for each content type:

**Instagram Post Template:**
```
## Caption
[Write caption here]

## Hashtags
#hashtag1 #hashtag2 #hashtag3

## Visual Notes
[Description of image/graphic needed]

## CTA
[Call-to-action]

## Notes
[Any special instructions]
```

**LinkedIn Post Template:**
```
## Headline
[Write headline]

## Body
[Write post content]

## CTA
[Call-to-action]

## Hashtags
#hashtag1 #hashtag2

## Notes
[Any special instructions]
```

**Twitter Thread Template:**
```
## Hook (Tweet 1)
[Write opening tweet]

## Thread Body
Tweet 2: [Content]
Tweet 3: [Content]
Tweet 4: [Content]
Tweet 5: [Content]

## CTA (Final Tweet)
[Call-to-action]

## Notes
[Any special instructions]
```

### Views to Create

**1. Main Board (Kanban)**
- Group by: Status
- Show: All properties

**2. Calendar View**
- Group by: Platform
- Sort by: Publish Date

**3. Platform-Specific Views**
- Filter by: Platform = Instagram
- Filter by: Platform = LinkedIn
- Filter by: Platform = Twitter

**4. My Tasks**
- Filter by: Assigned To = Me
- Group by: Status

**5. Awaiting Approval**
- Filter by: Status = In Review
- Sort by: Due Date

---

## OPTION 2: TRELLO SETUP

### Board Structure

**Board Name:** [Client Name] - Content Calendar

### Lists (Left to Right)

**1. 📝 IDEA BACKLOG**
- Capture all content ideas here
- No deadline required
- Review weekly for promotion to Drafting

**2. ✏️ DRAFTING**
- Content being created
- Must have assigned team member
- Must have target publish date

**3. 👀 IN REVIEW**
- Ready for client/manager approval
- Add due date for feedback
- Tag approver in comments

**4. ✅ APPROVED**
- Content has been approved
- Ready for scheduling
- Include any revision notes

**5. 📅 SCHEDULED**
- Content scheduled in management tool
- Include scheduling confirmation
- Add link to scheduled post

**6. 📤 PUBLISHED**
- Content is live
- Archive after 30 days

**7. 🗑️ REJECTED/ON HOLD**
- Content not moving forward
- Include reason in comments

### Card Template

**Card Title Format:**
`[Platform] - [Content Type] - [Brief Description]`

Example: `Instagram - Reel - Product Demo March`

**Card Checklist:**

```
Content Creation
☐ Caption written
☐ Visual created
☐ Hashtags researched
☐ Links verified
☐ Internal review complete

Approval
☐ Submitted for review
☐ Client feedback addressed
☐ Final approval received

Publishing
☐ Scheduled in [tool]
☐ Publish date confirmed
☐ Post-published check complete
```

**Card Labels:**

| Color | Label | Usage |
|-------|-------|-------|
| Red | Urgent | Time-sensitive content |
| Orange | High Priority | Important campaigns |
| Yellow | Medium Priority | Regular content |
| Green | Low Priority | Nice-to-have content |
| Blue | Instagram | Platform identifier |
| Purple | LinkedIn | Platform identifier |
| Pink | Twitter | Platform identifier |
| Black | Needs Visual | Awaiting design |

**Card Description Template:**

```markdown
## Content Details

**Platform:** [Platform]
**Content Type:** [Type]
**Content Pillar:** [Pillar]
**Target Publish Date:** [Date]

## Copy

**Caption/Post:**
[Full copy here]

**Hashtags:**
[Hashtag list]

**CTA:**
[Call-to-action]

**Links:**
[URLs to include]

## Visual Requirements

**Type:** [Image/Video/Graphic/Carousel]
**Dimensions:** [Size]
**Description:** [What the visual should show]
**Assets:** [Attach files or link to Drive]

## Notes

[Any additional context, instructions, or references]
```

### Power-Ups to Enable

- **Calendar:** View cards by date
- **Custom Fields:** Add platform, content type fields
- **Card Repeater:** For recurring content
- **Slack:** Notifications for status changes
- **Google Drive:** Attach assets directly

### Automation Rules (Butler)

**When card is moved to "In Review":**
- Add due date 2 days out
- Comment: "@[approver] Ready for review!"
- Add label "Awaiting Approval"

**When card is moved to "Approved":**
- Remove "Awaiting Approval" label
- Comment: "✅ Approved! Ready to schedule."

**When card is moved to "Published":**
- Add checkmark to "Published" checklist item
- Set due date to 30 days out (for archiving)

**Every Monday at 9 AM:**
- Comment on all cards in "Drafting" with overdue dates
- Create summary card of week's content

---

## APPROVAL PROCESS

### Stage 1: Idea Submission

**Who:** Content Creator / Strategist
**When:** Ongoing, reviewed weekly

**Process:**
1. Add card to "Idea Backlog"
2. Include brief description
3. Tag relevant content pillar
4. No visual needed yet

**Acceptance Criteria:**
- [ ] Clear concept described
- [ ] Aligned with content pillars
- [ ] Platform identified

---

### Stage 2: Drafting

**Who:** Content Creator
**When:** Based on content calendar timeline

**Process:**
1. Move card from "Idea" to "Drafting"
2. Assign to creator
3. Set draft due date (3-5 days before publish)
4. Create full content:
   - Write caption/copy
   - Create/source visuals
   - Research hashtags
   - Add all links

**Acceptance Criteria:**
- [ ] Complete caption/copy
- [ ] Visual asset attached
- [ ] Hashtags included
- [ ] Links verified
- [ ] Brand guidelines followed
- [ ] Internal checklist complete

---

### Stage 3: Internal Review

**Who:** Account Manager / Team Lead
**When:** 2-3 days before publish date

**Process:**
1. Review all content elements
2. Check brand alignment
3. Verify accuracy
4. Approve or request revisions

**If Approved:**
- Move to "In Review"
- Tag client approver
- Add review due date

**If Revisions Needed:**
- Add comment with feedback
- Keep in "Drafting"
- Set revision deadline

**Review Checklist:**
- [ ] Copy is on-brand
- [ ] No typos or errors
- [ ] Visual quality is high
- [ ] Links work correctly
- [ ] Hashtags are relevant
- [ ] CTA is clear
- [ ] Complies with guidelines

---

### Stage 4: Client Review

**Who:** Client / Designated Approver
**When:** 1-2 days before publish date

**Process:**
1. Client receives notification
2. Reviews content in board
3. Provides feedback or approval

**Response Options:**

**✅ Approved:**
- Move card to "Approved"
- Proceed to scheduling

**🔄 Revisions Needed:**
- Add comment with specific feedback
- Move back to "Drafting"
- Creator addresses feedback
- Resubmit for review

**❌ Rejected:**
- Move to "Rejected/On Hold"
- Document reason
- Discuss alternative approach

**SLA:** Client to respond within 24 hours

---

### Stage 5: Scheduling

**Who:** Social Media Manager
**When:** After approval, before publish date

**Process:**
1. Move card to "Scheduled"
2. Add to scheduling tool (Later, Buffer, Hootsuite, etc.)
3. Confirm date and time
4. Add scheduling confirmation to card:
   - Tool used
   - Scheduled time
   - Link to scheduled post

**Checklist:**
- [ ] Added to scheduling tool
- [ ] Correct date/time
- [ ] All assets uploaded
- [ ] Preview looks correct
- [ ] Link to scheduled post added

---

### Stage 6: Publishing & Post-Publish

**Who:** Social Media Manager (automated or manual)
**When:** Scheduled publish time

**Process:**
1. Content publishes automatically (or manually)
2. Move card to "Published"
3. Monitor for 1 hour after publish
4. Respond to initial comments
5. Check for any issues

**Post-Publish Checklist:**
- [ ] Post published successfully
- [ ] No technical issues
- [ ] Initial engagement monitored
- [ ] Comments responded to
- [ ] Performance tracked

---

## REVISION PROCESS

### Revision Levels

**Level 1: Minor Edits**
- Typos, small copy tweaks
- Handled via card comments
- No card movement needed

**Level 2: Moderate Revisions**
- Copy rewrites, visual adjustments
- Move back to "Drafting"
- Resubmit after changes

**Level 3: Major Overhaul**
- Concept change, new direction
- Move to "Rejected/On Hold"
- New card created if needed

### Revision Tracking

**In Card Comments:**
```
Revision Request - [Date]
Requested by: [Name]

Changes needed:
1. [Specific change 1]
2. [Specific change 2]
3. [Specific change 3]

Due: [Date]
```

**After Revision:**
```
Revision Complete - [Date]

Changes made:
1. [Change 1 - done]
2. [Change 2 - done]
3. [Change 3 - done]

Ready for re-review.
```

---

## RUSH CONTENT PROCESS

### Definition
Content needed in less than 48 hours

### Process

1. **Label card:** Add "🚨 RUSH" label
2. **Priority:** Set to "Urgent"
3. **Notify:** Tag team in comments
4. **Expedited Review:** 4-hour turnaround
5. **Client Notification:** Alert client of rush timeline

### Rush Checklist

- [ ] Business justification documented
- [ ] Team notified
- [ ] Client aware of expedited timeline
- [ ] All standard checks still completed
- [ ] Post-mortem scheduled (if applicable)

---

## RECURRING CONTENT

### Setup

**For Trello:** Use Card Repeater Power-Up
**For Notion:** Use template button + recurring date

### Common Recurring Cards

| Content | Frequency | Template |
|---------|-----------|----------|
| Weekly Tips | Every Monday | [Template link] |
| Motivation Monday | Weekly | [Template link] |
| Feature Friday | Weekly | [Template link] |
| Month-End Recap | Monthly | [Template link] |
| Product Spotlight | Bi-weekly | [Template link] |

---

## TEAM ROLES & RESPONSIBILITIES

| Role | Responsibilities | Access Level |
|------|-----------------|--------------|
| Content Creator | Draft content, create visuals | Edit all cards |
| Social Media Manager | Schedule, publish, monitor | Edit all cards |
| Account Manager | Internal review, client liaison | Edit all cards |
| Client Approver | Review and approve content | Comment + Move to Approved |
| Team Lead | Oversight, quality control | Full access |

---

## NOTIFICATIONS & ALERTS

### Trello Notifications

**Enable:**
- Card moved to "In Review" → Notify approver
- Card commented on → Notify assignee
- Due date approaching (24h) → Notify assignee
- Card overdue → Notify assignee + manager

### Notion Notifications

**Set up:**
- @mentions in comments
- Status change alerts
- Due date reminders

### Slack Integration (Optional)

**Channels:**
- `#content approvals` - New items for review
- `#content published` - Live content notifications
- `#content urgent` - Rush requests

---

## REPORTING

### Weekly Content Report

Generated every Monday:

| Metric | Count |
|--------|-------|
| Content Published | [Num] |
| Content in Pipeline | [Num] |
| Avg Approval Time | [Hours] |
| Revision Rate | [%] |
| On-Time Publishing | [%] |

### Monthly Metrics

- Total content pieces created
- Approval turnaround time
- Revision frequency
- Platform distribution
- Content type distribution

---

## BEST PRACTICES

### ✅ DO

- Keep card titles clear and descriptive
- Update status immediately when changed
- Tag team members for visibility
- Add all context in the card (not in DMs)
- Use checklists for consistency
- Archive published cards monthly
- Document all feedback in comments

### ❌ DON'T

- Skip the internal review step
- Schedule without approval
- Make changes without documenting
- Let cards sit in "In Review" >48 hours
- Publish without final check
- Ignore overdue cards

---

## TROUBLESHOOTING

### Common Issues

**Issue:** Client not responding to approval requests
**Solution:** Set up automated reminders, escalate to account manager after 48 hours

**Issue:** Content constantly needs revisions
**Solution:** Schedule calibration meeting, review brand guidelines, create more detailed templates

**Issue:** Cards getting stuck in workflow
**Solution:** Weekly workflow audit, identify bottlenecks, adjust process

**Issue:** Missing assets
**Solution:** Don't move to "In Review" without all assets attached

---

## ONBOARDING NEW TEAM MEMBERS

### Training Checklist

- [ ] Board access granted
- [ ] This document reviewed
- [ ] Shadow experienced team member (2 cards)
- [ ] Create test card with feedback
- [ ] Independent card creation approved
- [ ] Full workflow participation

### Quick Reference Card

Create a one-page cheat sheet with:
- Workflow stages
- Key deadlines
- Contact list
- Common templates

---

*Workflow Version: 1.0 | Last Updated: March 2026*
*Customize for each client's specific approval chain and tools*
