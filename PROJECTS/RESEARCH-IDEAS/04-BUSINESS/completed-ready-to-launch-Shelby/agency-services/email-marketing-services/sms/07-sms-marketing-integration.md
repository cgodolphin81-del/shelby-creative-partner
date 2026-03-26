# SMS Marketing Integration
## Klaviyo SMS Flows & Best Practices

---

## Executive Summary

SMS marketing delivers 98% open rates and immediate engagement. This guide covers Klaviyo SMS integration, compliance, flow strategies, and how to combine SMS with email for maximum impact.

**Key Principle:** SMS is for urgent, high-value messages. Use sparingly and strategically.

---

## Table of Contents

1. SMS Marketing Fundamentals
2. Compliance & Legal Requirements
3. Klaviyo SMS Setup
4. SMS Best Practices
5. SMS Flow Library (10 Flows)
6. Email + SMS Integration Strategies
7. SMS Campaign Guidelines
8. Segmentation for SMS
9. Metrics & Analytics
10. Common Mistakes to Avoid

---

## 1. SMS MARKETING FUNDAMENTALS

### 1.1 Why SMS Marketing?

**Advantages:**
- 98% open rate (vs. 20% email)
- 45% response rate (vs. 6% email)
- Messages read within 3 minutes
- Direct line to customers
- High conversion rates

**Limitations:**
- 160 character limit (per segment)
- Higher cost per message
- Stricter compliance requirements
- Can feel intrusive if overused
- Limited design/formatting

---

### 1.2 SMS vs. Email: When to Use Each

| Use Case | Best Channel | Why |
|----------|-------------|-----|
| Flash sales | SMS | Urgency, immediate action |
| Cart abandonment | Both | Email for details, SMS for urgency |
| Order confirmations | Email | Details, formatting |
| Shipping updates | SMS | Timely, actionable |
| Newsletters | Email | Long-form content |
| Appointment reminders | SMS | High open rate critical |
| Welcome series | Email first | Build relationship |
| VIP exclusives | SMS | Feel special, urgent |
| Back in stock | SMS | Time-sensitive |
| Educational content | Email | Space for detail |

---

### 1.3 SMS Message Types

**Transactional (No consent required):**
- Order confirmations
- Shipping notifications
- Delivery updates
- Appointment reminders
- Account alerts

**Marketing (Consent required):**
- Promotional offers
- Product launches
- Sale announcements
- Abandoned cart (marketing portion)
- General updates

---

### 1.4 SMS Performance Benchmarks

| Metric | Average | Good | Excellent |
|--------|---------|------|-----------|
| Open/Read Rate | 98% | 98% | 98% |
| Click Rate | 15-20% | 20-30% | 30%+ |
| Conversion Rate | 5-10% | 10-15% | 15%+ |
| Opt-out Rate | <1% | <0.5% | <0.3% |
| Revenue Per Recipient | $0.50-1.00 | $1.00-2.00 | $2.00+ |

---

## 2. COMPLIANCE & LEGAL REQUIREMENTS

### 2.1 TCPA (US - Telephone Consumer Protection Act)

**Requirements:**
- ✅ Express written consent required
- ✅ Clear disclosure of message frequency
- ✅ Opt-out mechanism in every message
- ✅ No messages before 8 AM or after 9 PM (recipient's time)
- ✅ Honor opt-outs immediately

**Consent Language Example:**
```
By subscribing, you agree to receive recurring automated marketing 
messages at the phone number provided. Consent is not a condition 
of purchase. Msg/data rates may apply. Msg frequency varies. 
Reply HELP for help, STOP to cancel.
```

**Penalties:** $500-$1,500 per violation

---

### 2.2 CTIA Guidelines (Industry Best Practices)

**Key Requirements:**
- Clear opt-in process
- Opt-out in every message (STOP)
- Help info available (HELP)
- Message frequency disclosure
- Privacy policy accessible

**Prohibited Content:**
- Hate speech
- Harassment
- Fraud/scams
- Illegal products
- Adult content (without proper gating)

---

### 2.3 GDPR (EU) & CASL (Canada)

**GDPR Requirements:**
- Explicit consent (opt-in)
- Clear purpose disclosure
- Easy withdrawal
- Data protection

**CASL Requirements:**
- Express or implied consent
- Identification information
- Unsubscribe mechanism

**Best Practice:** Use double opt-in for SMS globally

---

### 2.4 Opt-In Methods

**Method 1: Website Signup**
```
[Checkbox - NOT pre-checked]
☐ I agree to receive SMS messages at the number provided.
    Msg & data rates may apply. Frequency varies.
    Text STOP to cancel, HELP for help.
    [Privacy Policy] [Terms]
```

**Method 2: Keyword Signup**
```
Text JOIN to 12345
You'll receive: Weekly deals, exclusive offers
Msg frequency: ~4/month
Reply STOP to opt out
```

**Method 3: Checkout Opt-In**
```
[Checkbox]
☐ Text me about order updates & exclusive offers
    (Msg & data rates may apply)
```

**Method 4: Pop-up**
```
Get 15% off your first order!
Enter your phone number:
[Phone number field]
[Subscribe button]

By subscribing you agree to our Terms & Privacy Policy.
Msg frequency: 2-4/month. Reply STOP to cancel.
```

---

### 2.5 Required Message Components

**Every Marketing SMS Must Include:**
1. Brand identification
2. Clear message/purpose
3. Opt-out mechanism (STOP)
4. Help info (HELP)

**Example:**
```
[Brand]: Flash Sale! 30% off everything for 6 hours only. 
Shop: [short link] Reply STOP to opt out, HELP for help.
```

---

## 3. KLAVIYO SMS SETUP

### 3.1 Enable SMS in Klaviyo

**Step 1: Upgrade Plan**
- SMS requires Klaviyo Plus plan or higher
- Or purchase SMS credits separately

**Step 2: Phone Number Setup**
1. Go to SMS → Settings
2. Click "Get Started"
3. Choose number type:
   - Short code (5-6 digits, high volume)
   - Long code (standard number)
   - Toll-free (1-800 style)
4. Complete verification

**Step 3: Brand Registration (A2P 10DLC)**
- Required for US business messaging
- Register your brand
- Register your use case
- Wait for approval (1-2 weeks)

---

### 3.2 A2P 10DLC Registration

**What it is:** Application-to-Person 10-Digit Long Code

**Why required:** Carrier compliance for business SMS

**Registration Steps:**
1. **Brand Registration**
   - Legal business name
   - EIN/Tax ID
   - Business type
   - Website

2. **Campaign Registration**
   - Use case (marketing, alerts, etc.)
   - Message samples
   - Opt-in method
   - Volume estimate

3. **Approval**
   - Takes 1-3 weeks
   - Varies by carrier
   - Fee: $15-50 depending on type

**Costs:**
- Brand registration: ~$4
- Campaign registration: ~$15-50
- Monthly carrier fees: ~$10-50

---

### 3.3 SMS Consent in Klaviyo

**Consent Tracking:**
- Klaviyo tracks SMS consent separately from email
- Consent source recorded (web, API, manual)
- Consent timestamp stored

**Consent Settings:**
1. Go to Account → Settings → SMS
2. Configure consent language
3. Set up double opt-in (recommended)
4. Configure opt-out handling

---

### 3.4 Klaviyo SMS Pricing

**US Pricing (2024):**
- Sending: ~$0.0075 per segment (160 chars)
- Receiving: ~$0.0025 per message
- MMS (images): ~$0.02-0.03 per message

**International:** Varies by country (check Klaviyo pricing)

**Example Cost Calculation:**
```
Monthly SMS sends: 10,000
Average segments: 1.5 per message
Cost: 10,000 × 1.5 × $0.0075 = $112.50/month
```

---

## 4. SMS BEST PRACTICES

### 4.1 Content Guidelines

**DO:**
- ✅ Keep messages under 160 characters (1 segment)
- ✅ Lead with value/benefit
- ✅ Include clear CTA
- ✅ Use short, trackable links
- ✅ Personalize when possible
- ✅ Send during business hours
- ✅ Test before sending

**DON'T:**
- ❌ Exceed 3 segments (480 chars) without good reason
- ❌ Send too frequently (max 4-6/month marketing)
- ❌ Use vague language
- ❌ Send late night/early morning
- ❌ Overuse caps or exclamation points
- ❌ Include multiple CTAs

---

### 4.2 Character Count & Segments

**Segment Breakdown:**
- 1 segment: 1-160 characters
- 2 segments: 161-306 characters
- 3 segments: 307-459 characters

**Cost Impact:**
```
1 segment: $0.0075
2 segments: $0.0150
3 segments: $0.0225
```

**Best Practice:** Stay within 1 segment when possible

---

### 4.3 Timing Best Practices

**Best Days:** Tuesday, Wednesday, Thursday

**Best Times:**
- B2C: 10 AM - 2 PM, 5 PM - 7 PM
- B2B: 9 AM - 11 AM, 2 PM - 4 PM

**Avoid:**
- Before 8 AM
- After 9 PM
- Mondays (busy)
- Weekends (unless relevant)

**Time Zone:** Send in recipient's local time

---

### 4.4 Frequency Guidelines

**Recommended Frequency:**
- Marketing SMS: 2-6 per month
- Transactional SMS: As needed
- VIP customers: Can be slightly higher
- Sale periods: Temporary increase acceptable

**Warning Signs of Over-SMSing:**
- Opt-out rate >1%
- Complaints increasing
- Engagement declining
- Negative feedback

---

### 4.5 Link Shortening

**Use Klaviyo's Built-in Shortener:**
- Automatically tracks clicks
- Branded domain option
- No additional cost

**Best Practices:**
- Keep URLs short
- Use UTM parameters
- Test links before sending
- Ensure mobile landing pages

---

## 5. SMS FLOW LIBRARY (10 Flows)

### Flow 1: Welcome Series (SMS Portion)

**Trigger:** Subscribes to SMS  
**Goal:** Set expectations, deliver welcome offer

**Message 1 (Immediate):**
```
Welcome to [Brand]! 🎉 You're in for exclusive deals. 
Here's 15% off: WELCOME15
Shop: [link]
Reply STOP to opt out
```

**Message 2 (Day 3):**
```
[Name], quick intro: We send 2-4 texts/month about 
new drops & sales. First access always goes to VIPs 
like you! Questions? Reply HELP
```

---

### Flow 2: Abandoned Cart (SMS)

**Trigger:** Cart abandoned 1+ hours  
**Goal:** Recover cart with urgency

**Message 1 (1 hour after abandonment):**
```
Hey [Name], you left something behind! 👀 
Your cart is waiting: [link]
Questions? We're here to help!
```

**Message 2 (4 hours after, if no purchase):**
```
[Name], your cart is popular! Items may sell out. 
Complete your order: [link]
Need help? Reply to this text.
```

**Message 3 (24 hours after, if no purchase):**
```
Last chance! Complete your order in the next 6 hours 
and get free shipping 📦 [link]
```

---

### Flow 3: Browse Abandonment (SMS)

**Trigger:** Viewed product, didn't add to cart  
**Goal:** Re-engage interest

**Message (4 hours after view):**
```
[Name], still thinking about [Product]? 
It's waiting for you: [link]
Questions? We're here!
```

---

### Flow 4: Order Confirmation (Transactional)

**Trigger:** Order placed  
**Goal:** Confirm order, set expectations

**Message (Immediate):**
```
Thanks [Name]! Order #[number] confirmed. 
Total: $[amount]. We'll text when it ships!
Track anytime: [link]
```

---

### Flow 5: Shipping Update (Transactional)

**Trigger:** Order ships  
**Goal:** Notify customer, provide tracking

**Message (When shipped):**
```
Great news! Your order #[number] has shipped! 📦
Track it here: [tracking link]
Questions? Reply to this text.
```

---

### Flow 6: Delivery Confirmation (Transactional)

**Trigger:** Package delivered  
**Goal:** Confirm delivery, prompt review

**Message (When delivered):**
```
Your order has been delivered! 🎉 
Enjoy! Leave a review: [link]
Issues? Reply to this text.
```

---

### Flow 7: Back in Stock (SMS)

**Trigger:** Waitlisted product restocked  
**Goal:** Drive quick purchase

**Message (When restocked):**
```
Good news [Name]! [Product] is back in stock! 
Popular items sell fast. Shop now: [link]
```

---

### Flow 8: Flash Sale (SMS Campaign)

**Trigger:** Manual send  
**Goal:** Drive urgent purchases

**Message:**
```
FLASH SALE! ⚡ 30% off everything for 6 hours only! 
Use code: FLASH30
Shop: [link]
Ends at [time]. Don't miss out!
```

---

### Flow 9: VIP Exclusive (SMS)

**Trigger:** VIP status reached or manual segment  
**Goal:** Reward loyalty

**Message:**
```
VIP EXCLUSIVE [Name]! 🌟 Early access to our sale 
starts NOW. 48 hours before everyone else!
Shop: [link]
Thanks for being amazing!
```

---

### Flow 10: Winback (SMS)

**Trigger:** No purchase in 60+ days  
**Goal:** Reactivate customer

**Message:**
```
[Name], we miss you! 💙 Here's 25% off to come back: 
Code: COMEBACK25
Shop: [link]
Valid for 7 days. Hope to see you soon!
```

---

## 6. EMAIL + SMS INTEGRATION STRATEGIES

### 6.1 Multi-Channel Flow Strategy

**Best Practice:** Use both channels strategically

**Example: Abandoned Cart**
```
Email 1 (1 hour): Detailed cart reminder
SMS 1 (2 hours): Quick nudge
Email 2 (10 hours): Social proof + urgency
SMS 2 (24 hours): Final offer
Email 3 (48 hours): Last chance
```

---

### 6.2 Channel Selection Rules

**Use SMS When:**
- Time-sensitive (flash sale, ending soon)
- High intent (cart abandonment, back in stock)
- Transactional (shipping, delivery)
- VIP exclusive access
- Appointment reminders

**Use Email When:**
- Educational content
- Newsletters
- Product launches (detailed)
- Welcome series (full story)
- Post-purchase nurture

**Use Both When:**
- Major sale announcements
- Cart abandonment (high value)
- VIP early access
- Important updates

---

### 6.3 Integrated Flow Example: Flash Sale

**Email 1 (Day before - Teaser):**
```
Subject: Something big coming tomorrow...
Content: Tease the sale, build anticipation
```

**SMS (Sale start):**
```
IT'S LIVE! 🎉 Sale starts NOW. 40% off everything!
Shop: [link] Ends tonight!
```

**Email 2 (Sale start - Full details):**
```
Subject: SALE IS ON! 40% Off Everything
Content: Full product showcase, all details
```

**SMS (4 hours before end):**
```
4 HOURS LEFT! ⏰ Don't miss out on 40% off!
Shop: [link]
```

**Email 3 (1 hour before end):**
```
Subject: FINAL HOUR! Sale ends soon
Content: Last chance messaging
```

---

### 6.4 Preference Management

**Allow Subscribers to Choose:**
- Email only
- SMS only
- Both email and SMS
- Transactional SMS only

**Klaviyo Setup:**
1. Create preference center
2. Sync preferences to profiles
3. Segment based on preferences
4. Respect choices in flows

---

### 6.5 Suppression Strategies

**Suppress SMS When:**
- Recent purchase (last 24 hours)
- Already received SMS in last 48 hours
- Low engagement with SMS
- Opted out of SMS

**Suppress Email When:**
- SMS just sent for same message
- Email fatigue detected (low opens)

---

## 7. SMS CAMPAIGN GUIDELINES

### 7.1 Campaign Types

**Type 1: Flash Sale**
- Urgency-driven
- Short timeframe
- Clear discount
- **Frequency:** 1-2/month max

**Type 2: New Product Launch**
- Exclusive access
- Product highlights
- Link to shop
- **Frequency:** As products launch

**Type 3: VIP Exclusive**
- Special offers
- Early access
- Loyalty rewards
- **Frequency:** 1-2/month

**Type 4: Cart Recovery**
- Triggered (flow)
- Personalized
- Urgency elements
- **Frequency:** Per abandonment

**Type 5: Event Reminder**
- Time-sensitive
- Location/details
- RSVP link
- **Frequency:** Per event

---

### 7.2 Campaign Planning Template

```
SMS CAMPAIGN PLAN

Campaign Name: [Name]
Send Date: [Date]
Send Time: [Time]
Segment: [Target audience]

Message Content:
[Draft message - keep under 160 chars]

Link: [Tracking URL]
Offer Code: [If applicable]

Goals:
- Primary: [Conversion, revenue, etc.]
- Secondary: [Engagement, clicks]

Success Metrics:
- Target CTR: [%]
- Target Conversion: [%]
- Target Revenue: [$]

Approval: [Name/Date]
```

---

### 7.3 A/B Testing SMS

**Test Variables:**
- Send time
- Message length
- Emoji usage
- Offer amount
- CTA wording

**Example Test:**
```
Version A: Flash Sale! 30% off for 6 hours! [link]
Version B: [Name], 30% off starts now! 6 hours only [link]

Test: Personalization impact
Metric: Click rate
Sample: 1,000 per variant
```

---

## 8. SEGMENTATION FOR SMS

### 8.1 SMS-Specific Segments

**Segment 1: SMS Engagers**
- Criteria: Clicked SMS in last 30 days
- Use: Priority sends, important messages

**Segment 2: SMS Purchasers**
- Criteria: Purchased from SMS in last 90 days
- Use: High-value offers, VIP treatment

**Segment 3: SMS Only Subscribers**
- Criteria: SMS consent, no email
- Use: SMS-exclusive content

**Segment 4: High-Value SMS**
- Criteria: SMS consent + $500+ LTV
- Use: VIP offers, early access

**Segment 5: SMS At-Risk**
- Criteria: SMS consent, no engagement 60+ days
- Use: Re-engagement or suppress

---

### 8.2 Combined Segmentation

**Email + SMS Highly Engaged:**
- Email: Opened last 3 emails
- SMS: Clicked last 2 messages
- **Use:** Test new offers, feedback requests

**Email Only (No SMS):**
- Email engaged, no SMS consent
- **Use:** SMS opt-in campaigns

**SMS Only (No Email):**
- SMS consent, no email
- **Use:** SMS-focused campaigns, email opt-in

---

### 8.3 Suppression Lists for SMS

**Always Suppress:**
- SMS opt-outs
- Recent purchasers (24 hours)
- Recent SMS recipients (48 hours)
- Low engagers (90+ days no clicks)

**Campaign-Specific Suppress:**
- Already purchased promoted item
- Recently viewed (for browse abandonment)
- VIPs (for general sale messages)

---

## 9. METRICS & ANALYTICS

### 9.1 Key SMS Metrics

| Metric | Formula | Benchmark |
|--------|---------|-----------|
| Delivery Rate | Delivered / Sent | 95%+ |
| Click Rate | Clicks / Delivered | 15-20% |
| Conversion Rate | Purchases / Clicks | 10-15% |
| Opt-out Rate | Opt-outs / Delivered | <1% |
| Revenue Per Recipient | Revenue / Delivered | $0.50-2.00 |
| ROI | (Revenue - Cost) / Cost | 2000%+ |

---

### 9.2 Klaviyo SMS Analytics

**Dashboard Metrics:**
- Total SMS sent
- Total revenue from SMS
- SMS % of total revenue
- Average click rate
- Opt-out rate

**Flow Analytics:**
- Revenue by flow
- Messages sent per flow
- Conversion rate per flow

**Campaign Analytics:**
- Performance by campaign
- Best performing campaigns
- Send time analysis

---

### 9.3 ROI Calculation

```
SMS ROI = (SMS Revenue - SMS Cost) / SMS Cost × 100

Example:
SMS Revenue: $25,000/month
SMS Cost: $200/month (10,000 messages × $0.02 avg)
ROI = ($25,000 - $200) / $200 × 100 = 12,400%
```

---

### 9.4 Reporting Dashboard

**Monthly SMS Report:**

| Metric | This Month | Last Month | % Change |
|--------|------------|------------|----------|
| SMS Sent | 10,000 | 9,500 | +5% |
| Delivered | 9,800 | 9,300 | +5% |
| Click Rate | 18% | 17% | +6% |
| Conversions | 180 | 160 | +13% |
| Revenue | $25,000 | $22,000 | +14% |
| Opt-outs | 45 | 40 | +13% |
| ROI | 12,400% | 10,900% | +14% |

**Top Flows:**
1. Abandoned Cart: $12,000
2. Welcome Series: $5,000
3. Back in Stock: $4,000

**Top Campaigns:**
1. Flash Sale: $8,000
2. VIP Early Access: $5,000

---

## 10. COMMON MISTAKES TO AVOID

### 10.1 Compliance Mistakes

**Mistake 1: No Explicit Consent**
- **Fix:** Implement clear opt-in with disclosure

**Mistake 2: Missing Opt-Out**
- **Fix:** Include "Reply STOP to opt out" in every message

**Mistake 3: Sending Outside Hours**
- **Fix:** Configure time zone sending, 8 AM - 9 PM only

**Mistake 4: Ignoring Opt-Outs**
- **Fix:** Honor immediately, add to suppression list

---

### 10.2 Strategy Mistakes

**Mistake 1: Too Frequent**
- **Fix:** Limit to 2-6 marketing SMS/month

**Mistake 2: Same as Email**
- **Fix:** SMS should be shorter, more urgent

**Mistake 3: No Value**
- **Fix:** Every SMS should offer clear value

**Mistake 4: Wrong Timing**
- **Fix:** Test send times, use time zone optimization

---

### 10.3 Content Mistakes

**Mistake 1: Too Long**
- **Fix:** Keep under 160 characters

**Mistake 2: Vague CTA**
- **Fix:** Clear, specific action requested

**Mistake 3: No Personalization**
- **Fix:** Use first name, relevant products

**Mistake 4: Broken Links**
- **Fix:** Test all links before sending

---

## QUICK REFERENCE: SMS Copy Templates

**Flash Sale:**
```
FLASH SALE! ⚡ [X]% off for [timeframe] only!
Code: [CODE]
Shop: [link]
```

**Cart Abandonment:**
```
[Name], you left something! 👀
Your cart: [link]
Questions? Reply to this text.
```

**Back in Stock:**
```
Good news! [Product] is back! 
Popular items sell fast: [link]
```

**VIP Exclusive:**
```
VIP EXCLUSIVE! 🌟 Early access starts now.
Shop before everyone else: [link]
```

**Shipping Update:**
```
Your order #[number] shipped! 📦
Track: [link]
```

**Winback:**
```
[Name], we miss you! 💙
Here's [X]% off: Code [CODE]
Shop: [link]
```

---

*This guide should be reviewed quarterly for compliance updates and best practice changes.*
