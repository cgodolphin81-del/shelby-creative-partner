# Compliance Guide - WhatsApp Marketing Legal Requirements

## ⚠️ CRITICAL IMPORTANCE

**Read this before sending ANY messages.** Compliance violations can result in:
- Permanent API access ban
- Phone number blacklisting
- Legal fines (GDPR: up to €20M or 4% of revenue)
- Reputation damage
- Client lawsuits

---

## 📋 COMPLIANCE FRAMEWORK

### Three-Layer Compliance

```
┌─────────────────────────────────────────┐
│           LAYER 1: WHATSAPP             │
│         Platform Rules (Meta)           │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│           LAYER 2: LEGAL                │
│      GDPR, TCPA, CCPA, Local Laws       │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│           LAYER 3: BEST PRACTICE        │
│      Industry Standards & Ethics        │
└─────────────────────────────────────────┘
```

---

## 🔵 LAYER 1: WHATSAPP PLATFORM RULES

### WhatsApp Commerce Policy

**Prohibited Content:**
- ❌ Adult products/services
- ❌ Alcohol (varies by region)
- ❌ Tobacco/vaping products
- ❌ Drugs/pharmaceuticals (prescription)
- ❌ Weapons/ammunition
- ❌ Gambling/lottery
- ❌ Multi-level marketing
- ❌ Get-rich-quick schemes
- ❌ Misleading claims
- ❌ Counterfeit goods

**Restricted Content (requires pre-approval):**
- ⚠️ Dating services
- ⚠️ Cryptocurrency
- ⚠️ Debt collection
- ⚠️ Political content
- ⚠️ Health/medical claims
- ⚠️ Financial services

### Messaging Policies

#### Opt-In Requirements

**VALID opt-in methods:**
```
✅ Customer checks box: "Yes, send me WhatsApp updates"
✅ Customer texts keyword to short code
✅ Customer provides number during checkout (with clear disclosure)
✅ Customer scans QR code labeled "Join WhatsApp list"
✅ Customer clicks "Message us on WhatsApp" button
✅ Customer initiates conversation first
```

**INVALID opt-in methods:**
```
❌ Pre-checked boxes (must be unchecked by default)
❌ Buying email/phone lists
❌ Scraping contacts from websites/social media
❌ Adding customers without explicit consent
❌ Hidden in terms & conditions
❌ "By using our service you agree to WhatsApp messages"
```

#### Opt-In Documentation

**You MUST be able to prove opt-in for every contact:**

```
RECORD KEEPING REQUIREMENTS:

For each contact, store:
- Phone number (with country code)
- Opt-in date & timestamp
- Opt-in method (checkbox, keyword, etc.)
- Opt-in source (which form/page/campaign)
- IP address (if online opt-in)
- Exact opt-in language shown to user
- Any preferences selected (categories, frequency)

Retention: Keep for 2 years after opt-out
```

#### Opt-Out Requirements

**Every message MUST include:**
```
- Clear opt-out mechanism
- Simple keyword (STOP, UNSUBSCRIBE, etc.)
- Immediate processing (within seconds)
- Confirmation message after opt-out
- No further messages after opt-out (ever)
```

**Opt-Out Best Practices:**
```
✅ Accept multiple keywords: STOP, END, CANCEL, QUIT, UNSUBSCRIBE
✅ Make it easy to find (include in every message)
✅ Process instantly (automated)
✅ Send confirmation: "You've been unsubscribed..."
✅ Offer resubscribe option: "Reply START to rejoin"
✅ Honor across all campaigns (not just one)
```

### Message Quality Standards

#### Quality Rating System

Meta assigns a 0-5 quality rating to your phone number:

| Rating | Status | Consequences |
|--------|--------|--------------|
| 4-5 | High | Full limits, priority support |
| 3 | Medium | Normal operations |
| 2 | Low | Warning, may face limits |
| 1 | Very Low | Temporary restrictions |
| 0 | Flagged | Immediate ban risk |

#### Factors Affecting Quality

**Positive Factors:**
- High open rates (>80%)
- High reply rates (>20%)
- Low block rates (<1%)
- Low report rates (<0.1%)
- Quick responses to customer messages
- Valuable, relevant content

**Negative Factors:**
- High block rates (>5%)
- High report rates (>1%)
- Low engagement (<10% open rate)
- Sending to cold/unengaged lists
- Excessive frequency
- Misleading content
- No clear value proposition

### Frequency Guidelines

**Recommended Limits:**
```
Broadcast Messages:
- Maximum: 1 per day per contact
- Recommended: 2-4 per week
- Quiet hours: No messages 10pm-8am local time

Automated Messages (triggered by user action):
- No specific limit (user-initiated)
- Must be relevant to trigger
- Include opt-out option

Customer Support Messages:
- No limit (within 24-hour window)
- Must be in response to user inquiry
```

### 24-Hour Customer Service Window

**Critical Rule:** After a user messages you, you have 24 hours to send unlimited free-form messages.

```
USER MESSAGE RECEIVED
        │
        ▼
┌───────────────────┐
│  24-HOUR WINDOW   │ ← Can send any relevant message
│  (Free-form)      │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  WINDOW CLOSED    │ ← Can ONLY send approved templates
└───────────────────┘
```

**Strategy:** Use the 24-hour window wisely:
1. Respond immediately to user inquiry
2. Provide value + relevant offers
3. Collect preferences for future broadcasts
4. Guide to opt-in for ongoing updates

---

## 🟢 LAYER 2: LEGAL REQUIREMENTS

### GDPR (European Union)

**Applies if:** You message anyone in the EU, regardless of your location

**Key Requirements:**

1. **Explicit Consent**
   - Must be freely given, specific, informed, unambiguous
   - No pre-ticked boxes
   - Separate from other terms & conditions
   - Easy to withdraw at any time

2. **Right to Access**
   - Users can request all data you have about them
   - Must respond within 30 days
   - Provide in portable format

3. **Right to Erasure ("Right to be Forgotten")**
   - Users can request complete deletion
   - Must delete within 30 days
   - Includes all backups

4. **Data Minimization**
   - Only collect data you actually need
   - Don't store indefinitely
   - Regular data audits

5. **Privacy by Design**
   - Build privacy into systems from the start
   - Default to most privacy-friendly settings

**GDPR Compliance Checklist:**
```
□ Privacy policy clearly states WhatsApp usage
□ Explicit opt-in obtained (not implied)
□ Easy opt-out mechanism in every message
□ Data processing agreement with WhatsApp/BSP
□ Data breach notification procedure
□ Data subject request handling process
□ Regular data audits and cleanup
□ Staff trained on GDPR requirements
```

**GDPR Penalties:**
- Up to €20 million OR 4% of global annual revenue
- Whichever is higher

### TCPA (United States)

**Applies if:** You message anyone in the US

**Key Requirements:**

1. **Prior Express Written Consent**
   - Must have signed agreement (digital signature OK)
   - Must clearly authorize WhatsApp messages
   - Must include phone number
   - Cannot be condition of purchase

2. **Clear Disclosure**
   ```
   Example compliant language:
   "By providing your phone number, you agree to receive 
   marketing messages via WhatsApp from [Company] at this 
   number. Consent is not a condition of purchase. 
   Message frequency varies. Message & data rates may apply. 
   Reply STOP to opt out, HELP for help."
   ```

3. **Opt-Out Requirements**
   - Honor opt-out immediately
   - No messages after opt-out
   - Maintain do-not-call list

**TCPA Penalties:**
- $500 per violation (per message)
- $1,500 per willful violation
- Class action lawsuits common

### CCPA/CPRA (California)

**Applies if:** You message anyone in California AND meet revenue thresholds

**Key Rights:**
- Right to know what data is collected
- Right to delete personal data
- Right to opt-out of sale/sharing
- Right to non-discrimination

**Requirements:**
- "Do Not Sell My Personal Information" link
- Privacy policy updates
- Response to requests within 45 days

### Other Regional Laws

| Region | Law | Key Requirement |
|--------|-----|-----------------|
| Canada | CASL | Express consent required, identify sender |
| Australia | Spam Act | Consent required, identify sender, unsubscribe |
| UK | UK GDPR | Same as EU GDPR |
| Brazil | LGPD | Similar to GDPR, consent required |
| India | TRAI | DND registry, consent required |
| Singapore | PDPA | Consent required, identify sender |

---

## 🟡 LAYER 3: BEST PRACTICES

### Ethical Messaging Standards

#### Value-First Approach

**Every message should pass the "So What?" test:**

```
❌ BAD: "Check out our new products!"
✅ GOOD: "Your favorite product is back in stock!"

❌ BAD: "We're having a sale!"
✅ GOOD: "VIP exclusive: 30% off ends tonight!"

❌ BAD: "Follow us on social media!"
✅ GOOD: "You asked! Here's the tutorial you requested:"
```

#### Respectful Frequency

**Recommended Cadence:**
```
Week 1: Welcome + Value message
Week 2: Educational content
Week 3: Soft offer
Week 4: Rest week (no broadcast)
Repeat...
```

**Signs You're Messaging Too Much:**
- Open rates declining
- Opt-out rates increasing (>2% per campaign)
- Block reports increasing
- Negative replies/complaints

#### Transparent Communication

**Be Clear About:**
- Who is messaging (business name)
- Why they're receiving messages
- What type of content to expect
- How often they'll hear from you
- How to opt-out

**Example Transparency Statement:**
```
"You're receiving this because you signed up for VIP 
updates at [website] on [date]. We send 2-3 messages 
per week with exclusive offers and early access. 
Reply STOP anytime to opt out."
```

### Data Security Best Practices

#### Secure Data Handling

```
✅ ENCRYPT: All customer data at rest and in transit
✅ ACCESS CONTROL: Limit who can access customer data
✅ AUDIT LOGS: Track who accesses what data when
✅ REGULAR BACKUPS: With encryption
✅ SECURE DELETION: When data is no longer needed
```

#### Data Retention Policy

**Recommended Retention Periods:**
```
Active Customers: Duration of relationship + 2 years
Inactive Contacts: 2 years from last engagement
Opted-Out Contacts: 2 years (for suppression list only)
Analytics Data: 3 years (anonymized)
Support Conversations: 1 year
```

### Crisis Management

#### If You Get Reported/Banned

**Immediate Actions:**
1. Stop all messaging immediately
2. Review recent campaigns for violations
3. Document everything (for appeal)
4. Contact your BSP support
5. Prepare appeal with remediation plan

**Appeal Process:**
```
1. Identify root cause
2. Fix the issue
3. Document changes made
4. Submit appeal through BSP
5. Wait for review (can take 2-4 weeks)
6. If approved, restart slowly with high-quality content
```

#### Damage Control

**If Customers Complain:**
1. Respond within 1 hour
2. Apologize sincerely
3. Fix the issue immediately
4. Offer compensation if appropriate
5. Follow up to ensure satisfaction

---

## 📋 COMPLIANCE CHECKLISTS

### Pre-Launch Checklist

```
□ Opt-in mechanism tested and documented
□ Privacy policy updated with WhatsApp usage
□ Terms of service include messaging terms
□ Opt-out mechanism working (STOP keyword)
□ All templates approved by Meta
□ Data processing agreement signed with BSP
□ Staff trained on compliance requirements
□ Record-keeping system in place
□ Quiet hours configured (10pm-8am)
□ Frequency caps set (max 1/day)
□ Test messages sent to internal team
□ Legal review completed (if high-risk industry)
```

### Monthly Compliance Audit

```
□ Review opt-out rates (target: <2%)
□ Review block/report rates (target: <1%)
□ Check quality rating (target: 4-5)
□ Audit message content for compliance
□ Verify data retention policies followed
□ Review customer complaints
□ Update suppression lists
□ Test opt-out mechanism
□ Review and archive old campaigns
□ Staff refresher training
```

### Quarterly Compliance Review

```
□ Full compliance audit
□ Legal review of messaging practices
□ Update privacy policy if needed
□ Review BSP agreement terms
□ Assess new regulatory requirements
□ Competitor compliance benchmarking
□ Technology/security audit
□ Third-party compliance assessment (optional)
```

---

## 📝 TEMPLATES & DOCUMENTS

### Opt-In Language Templates

#### Website Checkbox
```
☐ Yes, I want to receive exclusive offers and updates 
   via WhatsApp from [Company Name]. I understand I can 
   opt out anytime by replying STOP. Message frequency 
   varies. Message & data rates may apply.
   
   [Privacy Policy] [Terms of Service]
```

#### Checkout Opt-In
```
📱 Get order updates + exclusive offers on WhatsApp!

By entering your number, you agree to receive messages 
from [Company Name]. Consent is not required for purchase. 
Reply STOP to opt out. Standard rates apply.

[Phone Number Field]
```

#### In-Store Sign
```
🎁 Join Our VIP WhatsApp List!

Scan to get:
✨ Exclusive discounts
🆕 First access to new products
💎 Members-only perks

[QR Code]

By scanning, you agree to receive WhatsApp messages 
from [Store Name]. Reply STOP to opt out anytime.
```

### Privacy Policy Addendum

```
WHATSAPP MESSAGING

We use WhatsApp to communicate with customers who have 
opted in to receive messages. Here's what you need to know:

What We Send:
- Order confirmations and updates
- Exclusive offers and promotions
- Product announcements
- Customer support messages

How to Opt-In:
- Check the box on our website
- Provide your number at checkout
- Message us first on WhatsApp
- Scan our QR code in-store

How to Opt-Out:
- Reply "STOP" to any message
- Contact us at [email/phone]
- Update preferences in your account

Data We Collect:
- Phone number
- Name (if provided)
- Purchase history (if applicable)
- Message interaction data

Data Sharing:
- We use [BSP Name] as our WhatsApp provider
- They process messages on our behalf
- We do not sell your data to third parties

Your Rights:
- Access your data
- Correct inaccurate data
- Delete your data
- Opt-out at any time

Contact:
For privacy questions: [privacy email]
For WhatsApp support: [support contact]
```

### Data Processing Agreement (Summary)

**Key Clauses to Include:**
```
1. Purpose: BSP processes data only for message delivery
2. Confidentiality: BSP must keep data confidential
3. Security: BSP must implement appropriate security
4. Sub-processors: BSP must disclose any sub-processors
5. Data Subject Rights: BSP must assist with requests
6. Breach Notification: BSP must notify within 24 hours
7. Data Return/Deletion: BSP must delete on termination
8. Audits: Customer may audit BSP compliance
9. Liability: BSP liable for their breaches
10. Governing Law: [Applicable jurisdiction]
```

---

## 🚨 RED FLAGS - STOP IMMEDIATELY

If you notice any of these, pause messaging and investigate:

```
🚩 Opt-out rate > 5% on any campaign
🚩 Block rate > 3%
🚩 Quality rating drops to 2 or below
🚩 Multiple customer complaints
🚩 Legal cease & desist received
🚩 BSP sends warning notice
🚩 Sudden drop in delivery rates
🚩 Messages flagged as spam
🚩 Phone number quality shows "RED"
🚩 Template rejections increasing
```

**Action Plan:**
1. Stop all broadcasts immediately
2. Review last 5 campaigns for issues
3. Analyze opt-out reasons (if collected)
4. Survey remaining contacts for feedback
5. Fix identified issues
6. Restart with small test segment (5%)
7. Monitor closely for 2 weeks
8. Gradually increase if metrics improve

---

## 📞 LEGAL RESOURCES

### When to Hire a Lawyer

**Definitely consult a lawyer if:**
- Operating in multiple countries
- High-risk industry (health, finance, legal)
- Large contact list (100K+)
- Previous compliance issues
- B2B messaging (different rules)
- Uncertain about specific requirements

### Recommended Legal Resources

- **IAPP (International Association of Privacy Professionals):** Training & certification
- **Privacy Law Firms:** Specialized in digital marketing
- **BSP Legal Teams:** Most have compliance resources
- **Industry Associations:** Sector-specific guidance

---

## ✅ COMPLIANCE IS A COMPETITIVE ADVANTAGE

**Why Compliance Matters for Your Agency:**

1. **Trust:** Compliant agencies attract better clients
2. **Longevity:** Avoid bans that kill businesses overnight
3. **Premium Pricing:** Compliance expertise = higher rates
4. **Scalability:** Clean lists scale better than purchased lists
5. **Reputation:** Word spreads about spammy vs. professional agencies

**Your Agency Compliance Promise:**

```
"We only message people who want to hear from you.
We respect privacy, follow all regulations, and prioritize
long-term relationships over short-term gains. This means
better engagement, higher conversions, and zero risk of bans."
```

---

**Next Document:** 05-CAMPAIGN-STRATEGY.md  
**Compliance Contact:** [Your agency compliance officer/legal counsel]
