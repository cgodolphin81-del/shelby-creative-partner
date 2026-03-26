# 💼 Sales CRM

**Complete Notion Template for Sales Teams & Solo Sellers**

---

## 📦 What's Included

- **Deal Pipeline** - Track deals from lead to close
- **Contact Database** - Manage all relationships
- **Company Database** - Account information
- **Follow-up System** - Never lose a lead
- **Commission Tracker** - Auto-calculate earnings
- **Sales Analytics** - Pipeline health & forecasts

---

## 🚀 Quick Start

1. **Duplicate** this template to your Notion workspace
2. **Import** your contacts (CSV or manual entry)
3. **Add** your current pipeline deals
4. **Set up** your sales stages and commission rates
5. **Start selling!**

---

## 📁 Page Structure

```
Sales CRM
├── 📊 Dashboard
│   ├── Pipeline Overview
│   ├── Today's Tasks
│   └── Performance Metrics
├── 🎯 Deals Pipeline
│   ├── All Deals
│   ├── By Stage (Board)
│   ├── My Deals
│   └── Closed Won/Lost
├── 👥 Contacts
│   ├── All Contacts
│   ├── By Company
│   └── Decision Makers
├── 🏢 Companies
│   ├── All Accounts
│   ├── By Industry
│   └── By Value
├── 📞 Follow-ups
│   ├── Today
│   ├── This Week
│   └── Overdue
├── 💰 Commissions
│   ├── This Month
│   ├── This Quarter
│   └── Year to Date
└── 📈 Analytics
    ├── Pipeline Health
    ├── Conversion Rates
    └── Forecasts
```

---

## 🗄️ Database Schemas

### Deals Database

| Property | Type | Description |
|----------|------|-------------|
| Deal Name | Title | Deal/Opportunity name |
| Amount | Number | Deal value |
| Stage | Select | Lead, Qualified, Proposal, Negotiation, Closed Won, Closed Lost |
| Probability | Select | 10%, 25%, 50%, 75%, 90%, 100% |
| Expected Close | Date | When deal will close |
| Contact | Relation | Primary contact |
| Company | Relation | Company account |
| Owner | Person | Deal owner |
| Source | Select | Inbound, Outbound, Referral, Event, Website, Other |
| Weighted Value | Formula | Amount × Probability |
| Days in Stage | Formula | How long in current stage |
| Last Contact | Date | Last interaction |
| Next Follow-up | Date | Next action date |
| Products | Multi-select | Products/services in deal |
| Notes | Text | Deal notes |

### Contacts Database

| Property | Type | Description |
|----------|------|-------------|
| Name | Title | Contact name |
| Email | Email | Email address |
| Phone | Phone | Phone number |
| Title | Text | Job title |
| Company | Relation | Company they work at |
| Role | Select | Decision Maker, Influencer, User, Gatekeeper |
| LinkedIn | URL | LinkedIn profile |
| Deals | Relation | Related deals |
| Last Contact | Date | Last interaction |
| Next Follow-up | Date | Next action |
| Tags | Multi-select | Interests, notes |

### Companies Database

| Property | Type | Description |
|----------|------|-------------|
| Company | Title | Company name |
| Website | URL | Company website |
| Industry | Select | Industry category |
| Size | Select | Employee count range |
| Location | Text | Headquarters location |
| Annual Revenue | Number | Company revenue |
| Contacts | Relation | People at company |
| Deals | Relation | Active deals |
| Total Value | Rollup | Sum of all deal values |
| Status | Select | Prospect, Customer, Partner, Churned |
| Owner | Person | Account owner |

---

## 🔧 Key Formulas

### Weighted Deal Value
```
prop("Amount") * (toNumber(slice(prop("Probability"), 0, 2)) / 100)
```

### Days in Current Stage
```
dateBetween(now(), prop("Last Updated"), "days")
```

### Commission Amount
```
prop("Amount") * 0.10
```
(Adjust rate as needed)

### Close Probability Badge
```
if(prop("Stage") == "Closed Won", "✅",
  if(prop("Stage") == "Closed Lost", "❌",
    if(prop("Stage") == "Negotiation", "🔶",
      if(prop("Stage") == "Proposal", "🟡",
        if(prop("Stage") == "Qualified", "🔵", "⚪")))))
```

---

## 📋 Templates Included

See individual template files for complete structures.

---

## 💡 Pro Tips

1. **Update Daily** - Keep pipeline current
2. **Follow-up Within 24 Hours** - Speed wins deals
3. **Track Everything** - Every call, email, meeting
4. **Review Pipeline Weekly** - Identify stuck deals
5. **Calculate Commissions** - Know your earnings

---

## 🎨 Customization

- Adjust sales stages to your process
- Customize commission rates
- Add product/service catalogs
- Integrate with email/calendar
- Add custom properties as needed
