# 🤝 Sponsor CRM Database

> **Purpose:** Manage brand partnerships from outreach to payment

---

## 📋 Database Properties

| Property Name | Type | Options/Format |
|---------------|------|----------------|
| **Brand** | Title | Company/brand name |
| **Contact Name** | Text | Primary contact person |
| **Email** | Email | Contact email |
| **Phone** | Phone | Contact phone |
| **LinkedIn** | URL | LinkedIn profile |
| **Website** | URL | Company website |
| **Status** | Select | 🎯 Prospect, 📧 Contacted, 💬 Negotiating, ✅ Signed, 📹 Active, 📤 Deliverables Due, 💰 Awaiting Payment, ✅ Paid, ⭐ Past Partner |
| **Deal Value** | Number | Total deal value in USD |
| **Currency** | Select | USD, EUR, GBP, CAD, AUD |
| **Deliverables** | Text | What's included in the deal |
| **Usage Rights** | Text | How they can use content |
| **Exclusivity** | Select | None, Category, Platform, Full |
| **Start Date** | Date | Campaign start |
| **End Date** | Date | Campaign end |
| **Due Date** | Date | Deliverables due |
| **Payment Terms** | Select | 100% Upfront, 50/50, Net 15, Net 30, Net 60 |
| **Payment Status** | Select | Unpaid, Deposit Paid, Partial, Paid, Overdue |
| **Invoice Sent** | Date | When invoice was sent |
| **Payment Due** | Date | When payment is due |
| **Content** | Relation | Links to Content Calendar |
| **Campaign** | Select | Campaign name |
| **Category** | Select | Tech, Beauty, Fashion, Finance, Health, Food, Travel, Gaming, Education, Other |
| **Tier** | Select | Enterprise, Mid-Market, SMB, Startup |
| **Source** | Select | Inbound, Outbound, Platform, Referral, Agency |
| **Last Contact** | Date | Last communication |
| **Next Follow-up** | Date | Next action date |
| **Notes** | Text | Communication history |
| **Rating** | Select | ⭐⭐⭐⭐⭐, ⭐⭐⭐⭐, ⭐⭐⭐, ⭐⭐, ⭐ |

---

## 🧮 Formulas

### Deal Value Formatted
```notion
"$" + format(prop("Deal Value"))
```

### Days Until Due
```notion
if(
  empty(prop("Due Date")),
  null,
  dateBetween(prop("Due Date"), now(), "days")
)
```

### Payment Overdue
```notion
if(
  and(
    prop("Payment Status") != "Paid",
    prop("Payment Due") < now()
  ),
  "🚨 OVERDUE",
  ""
)
```

### Days Since Contact
```notion
if(
  empty(prop("Last Contact")),
  null,
  dateBetween(now(), prop("Last Contact"), "days")
)
```

### Status Badge
```notion
if(
  prop("Status") == "Paid", "✅ Paid",
  if(prop("Status") == "Awaiting Payment", "💰 Awaiting Payment",
    if(prop("Status") == "Active", "📹 Active",
      if(prop("Status") == "Signed", "✅ Signed",
        if(prop("Status") == "Negotiating", "💬 Negotiating",
          if(prop("Status") == "Contacted", "📧 Contacted", "🎯 Prospect")
        )
      )
    )
  )
)
```

### Deal Stage Progress
```notion
if(
  prop("Status") == "Paid", "100%",
  if(prop("Status") == "Awaiting Payment", "90%",
    if(prop("Status") == "Active", "75%",
      if(prop("Status") == "Signed", "60%",
        if(prop("Status") == "Negotiating", "40%",
          if(prop("Status") == "Contacted", "20%", "0%")
        )
      )
    )
  )
)
```

---

## 📊 Database Views

### View 1: Pipeline (Board)
**Group by:** Status
**Filter:** Status != Past Partner
**Sort:** Deal Value (descending)
**Card preview:** Show Deal Value, Due Date

### View 2: Active Deals (Table)
**Filter:** Status = Active OR Status = Signed
**Sort:** Due Date (ascending)
**Properties shown:** Brand, Deal Value, Deliverables, Due Date, Content

### View 3: Awaiting Payment (Table)
**Filter:** Payment Status = Awaiting Payment OR Payment Status = Overdue
**Sort:** Payment Due (ascending)
**Properties shown:** Brand, Deal Value, Payment Terms, Payment Due, Overdue

### View 4: Prospects (List)
**Filter:** Status = Prospect OR Status = Contacted
**Sort:** Last Contact (ascending)
**Properties shown:** Brand, Contact, Email, Last Contact, Next Follow-up

### View 5: Negotiating (Table)
**Filter:** Status = Negotiating
**Sort:** Deal Value (descending)
**Properties shown:** Brand, Deal Value, Deliverables, Contact

### View 6: Upcoming Deadlines (Calendar)
**Filter:** Due Date is not empty
**Layout:** Calendar
**Calendar by:** Due Date

### View 7: By Category (Board)
**Group by:** Category
**Filter:** Status = Signed OR Status = Active
**Sort:** Deal Value

### View 8: Past Partners (Table)
**Filter:** Status = Paid
**Sort:** Payment Due (descending)
**Properties shown:** Brand, Deal Value, Rating, Last Contact

### View 9: High Value Deals (Table)
**Filter:** Deal Value >= 5000
**Sort:** Deal Value (descending)
**Properties shown:** Brand, Status, Deal Value, Contact

### View 10: Follow-up Needed (List)
**Filter:** Next Follow-up <= Today + 3 days, Status != Paid
**Sort:** Next Follow-up (ascending)

---

## 📝 Sponsor Templates

### Template: Outreach Email
```markdown
# 📧 Outreach to {{Brand}}

**Contact:** {{Name}}
**Email:** {{Email}}
**Date:** {{Date}}

---

## 📝 Email Template

**Subject:** Partnership Opportunity: {{Your Name}} x {{Brand}}

Hi {{Name}},

I'm {{Your Name}}, and I create content about {{niche}} for my audience of {{followers}} across {{platforms}}.

I've been using {{Product}} for {{time}} and love {{specific feature}}. I think my audience would too.

**My Audience:**
- {{Platform 1}}: {{followers}} followers, {{engagement}}% engagement
- {{Platform 2}}: {{followers}} followers, {{engagement}}% engagement
- Demographics: {{age}}, {{gender}}, {{location}}

**Partnership Idea:**
{{Brief description of content idea}}

**Deliverables:**
- {{Deliverable 1}}
- {{Deliverable 2}}

**Investment:** ${{range}}

Are you open to exploring a partnership? I'd love to hop on a quick call to discuss.

Best,
{{Your Name}}
{{Links}}
```

### Template: Partnership Brief
```markdown
# 📋 {{Brand}} Partnership Brief

**Campaign:** {{Campaign Name}}
**Deal Value:** ${{Value}}
**Timeline:** {{Start}} - {{End}}

---

## 🎯 Campaign Goals

**Brand Objectives:**
- 
- 

**Success Metrics:**
- 
- 

---

## 📦 Deliverables

| Content | Platform | Due Date | Status |
|---------|----------|----------|--------|
| | | | |
| | | | |

---

## 📝 Content Requirements

### Do's
- 
- 
- 

### Don'ts
- 
- 
- 

### Mandatory Elements
- [ ] Brand mention in first 5 seconds
- [ ] Show product in use
- [ ] Include discount code: {{CODE}}
- [ ] Link in bio for 48 hours
- [ ] Specific hashtags: #{{hashtag1}} #{{hashtag2}}

---

## 🔗 Links & Assets

**Brand Guidelines:** 
**Product Images:** 
**Logo Files:** 
**Landing Page:** 
**Discount Code:** 

---

## 💰 Payment Details

**Total:** ${{Amount}}
**Terms:** {{Terms}}
**Invoice Email:** {{Email}}

**Payment Schedule:**
- Deposit (50%): ${{Amount}} - Due {{Date}}
- Final (50%): ${{Amount}} - Due {{Date}}

---

## ✅ Approval Process

1. Script/Outline → Brand approval
2. Rough cut → Brand feedback
3. Final cut → Brand approval
4. Publish → Share metrics

**Brand Contact:** {{Name}}, {{Email}}

---

## 📊 Metrics to Report

- Views: 
- Likes: 
- Comments: 
- Shares: 
- Saves: 
- Clicks: 
- Conversions: 
- Code uses: 

**Report Due:** {{Date}}
```

### Template: Contract Checklist
```markdown
# ⚖️ {{Brand}} Contract Checklist

---

## 📄 Contract Terms

### Deliverables
- [ ] Clearly defined
- [ ] Realistic timeline
- [ ] Revision rounds specified

### Payment
- [ ] Amount confirmed
- [ ] Payment schedule clear
- [ ] Late payment terms included
- [ ] Kill fee included

### Usage Rights
- [ ] Platforms specified
- [ ] Duration specified
- [ ] Exclusivity terms clear
- [ ] Buyout options defined

### Content Ownership
- [ ] You retain ownership
- [ ] Brand gets license to use
- [ ] Portfolio use allowed
- [ ] Repurposing rights defined

### Disclosure
- [ ] #ad or #sponsored required
- [ ] FTC compliance noted
- [ ] Platform-specific rules followed

### Termination
- [ ] Cancellation terms clear
- [ ] Force majeure included
- [ ] Dispute resolution defined

---

## ✅ Before Signing

- [ ] Read entire contract
- [ ] Negotiated unfavorable terms
- [ ] Confirmed deliverables are achievable
- [ ] Payment terms acceptable
- [ ] Usage rights reasonable
- [ ] Lawyer reviewed (if high value)

---

## 📁 Documents

**Contract:** [Link]
**SOW:** [Link]
**Brand Guidelines:** [Link]
**Invoice Template:** [Link]
```

---

## 💡 Sponsorship Best Practices

### Outreach Tips
1. **Personalize Every Email** - No copy/paste
2. **Lead with Value** - What's in it for them?
3. **Include Metrics** - Followers, engagement, demographics
4. **Have a Clear Ask** - Specific partnership idea
5. **Follow Up** - 3-5 touches before giving up

### Negotiation Tips
1. **Know Your Worth** - Research industry rates
2. **Bundle Packages** - Multiple deliverables = higher value
3. **Usage Rights = Extra** - Charge for extended use
4. **Exclusivity = Premium** - Charge more for category exclusivity
5. **Get 50% Upfront** - Protect yourself

### Relationship Tips
1. **Over-Deliver** - Give more than promised
2. **Communicate Proactively** - Update before they ask
3. **Report Results** - Send performance metrics
4. **Stay in Touch** - Quarterly check-ins with past partners
5. **Ask for Testimonials** - Build social proof

---

## 💰 Pricing Guidelines

### YouTube (per 100K views)
- Integration: $2,000-5,000
- Dedicated video: $5,000-15,000

### Instagram (per 100K followers)
- Post: $1,000-3,000
- Reel: $1,500-4,000
- Story: $500-1,500

### TikTok (per 100K followers)
- Video: $1,000-3,000
- Series: $3,000-10,000

### Blog (per 100K monthly visitors)
- Post: $2,000-5,000
- Review: $3,000-7,000

### Newsletter (per 10K subscribers)
- Sponsor slot: $500-2,000
- Dedicated email: $2,000-5,000

**Note:** Rates vary by niche, engagement, and audience quality.

---

## 📊 Pipeline Metrics to Track

1. **Outreach → Response Rate** - Aim for 20%+
2. **Response → Meeting Rate** - Aim for 50%+
3. **Meeting → Close Rate** - Aim for 30%+
4. **Average Deal Value** - Track over time
5. **Repeat Partner Rate** - Aim for 40%+
6. **Payment Time** - Days from invoice to payment
