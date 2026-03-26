# Customer Database CRM Template

## Overview
Comprehensive customer relationship management system with contact tracking, interaction history, pipeline management, and automated follow-ups.

## Structure

### Sheet 1: Customer Database

| ID | Company | Contact Name | Title | Email | Phone | Industry | Status | Owner | Created | Last Contact | Next Follow-up |
|----|---------|--------------|-------|-------|-------|----------|--------|-------|---------|--------------|----------------|
| C001 | Acme Corp | John Smith | CEO | john@acme.com | 555-0101 | Technology | Active | Sarah | 2025-06-15 | 2026-03-18 | 2026-03-25 |
| C002 | TechStart Inc | Jane Doe | CTO | jane@techstart.com | 555-0102 | SaaS | Active | Mike | 2025-08-22 | 2026-03-20 | 2026-03-27 |
| C003 | Global Services | Bob Wilson | VP Sales | bob@globalservices.com | 555-0103 | Consulting | Lead | Emily | 2026-01-10 | 2026-03-15 | 2026-03-22 |
| C004 | Innovation Labs | Alice Brown | Founder | alice@innovationlabs.com | 555-0104 | Technology | Active | Sarah | 2025-11-05 | 2026-03-21 | 2026-04-01 |
| C005 | Enterprise Co | Charlie Davis | Director | charlie@enterprise.com | 555-0105 | Finance | Inactive | James | 2025-03-12 | 2026-01-15 | |

### Key Formulas

```excel
// Days Since Last Contact
=IF(L2<>"",TODAY()-L2,"")

// Follow-up Overdue
=IF(AND(M2<>"",M2<TODAY(),Status="Active"),"OVERDUE","")

// Contact Frequency Score
=IF(TODAY()-L2<=7,"High",IF(TODAY()-L2<=30,"Medium","Low"))

// Customer Age (Days)
=TODAY()-Created_Date

// Next Follow-up (Auto-calculate based on status)
=IF(Status="Lead",Created+7,IF(Status="Active",Last_Contact+14,IF(Status="Inactive",Last_Contact+90,"")))
```

### Sheet 2: Interaction History

| Date | Customer ID | Type | Subject | Notes | Owner | Outcome | Follow-up Required |
|------|-------------|------|---------|-------|-------|---------|-------------------|
| 2026-03-21 | C001 | Call | Q1 Review | Discussed renewal, positive | Sarah | Positive | Yes |
| 2026-03-20 | C002 | Email | Demo Follow-up | Sent pricing proposal | Mike | Pending | Yes |
| 2026-03-20 | C004 | Meeting | Product Demo | Very interested in Enterprise | Sarah | Positive | Yes |
| 2026-03-18 | C001 | Email | Contract Review | Sent updated agreement | Sarah | Neutral | No |
| 2026-03-15 | C003 | Call | Discovery | Budget confirmed $50K | Emily | Positive | Yes |
| 2026-03-14 | C005 | Email | Check-in | No response | James | No Response | Yes |

### Interaction Types
- Call
- Email
- Meeting
- Demo
- Proposal
- Contract
- Support
- Other

### Sheet 3: Sales Pipeline

| Opportunity ID | Customer | Deal Value | Stage | Probability | Weighted Value | Expected Close | Owner | Days in Stage |
|----------------|----------|------------|-------|-------------|----------------|----------------|-------|---------------|
| OPP-001 | Acme Corp | $75,000 | Negotiation | 70% | $52,500 | 2026-04-15 | Sarah | 12 |
| OPP-002 | TechStart Inc | $45,000 | Proposal | 50% | $22,500 | 2026-04-30 | Mike | 8 |
| OPP-003 | Global Services | $50,000 | Qualified | 30% | $15,000 | 2026-05-15 | Emily | 5 |
| OPP-004 | Innovation Labs | $120,000 | Demo | 40% | $48,000 | 2026-05-30 | Sarah | 3 |
| OPP-005 | StartupXYZ | $25,000 | Closed Won | 100% | $25,000 | 2026-03-15 | Mike | 0 |

### Pipeline Formulas

```excel
// Weighted Value
=Deal_Value*Probability

// Days in Stage
=TODAY()-Stage_Entry_Date

// Close Probability (Based on stage)
=IF(Stage="Prospecting",10%,IF(Stage="Qualified",30%,IF(Stage="Demo",40%,IF(Stage="Proposal",50%,IF(Stage="Negotiation",70%,IF(Stage="Closed Won",100%,0%))))))

// Forecast Category
=IF(Probability>=70,"Commit",IF(Probability>=40,"Likely",IF(Probability>=20,"Possible","Upside")))
```

### Sheet 4: Customer Dashboard

```
╔══════════════════════════════════════════════════════════════╗
║  CRM DASHBOARD                                    Mar 2026   ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  TOTAL CUSTOMERS          ACTIVE          PIPELINE VALUE     ║
║  248                     156              $2.8M              ║
║  +12 this month          +8 this month    +15% vs last month ║
║                                                               ║
║  PIPELINE BY STAGE                                           ║
║  Prospecting   ████████████ 45 deals    $680K                ║
║  Qualified     ██████████ 32 deals      $520K                ║
║  Demo          ████████ 24 deals        $450K                ║
║  Proposal      ██████ 18 deals          $380K                ║
║  Negotiation   ████ 12 deals            $290K                ║
║                                                               ║
║  ACTIVITY THIS MONTH                                         ║
║  Calls: 145    Emails: 312    Meetings: 48    Demos: 22      ║
║                                                               ║
║  FOLLOW-UPS OVERDUE: 12                                       ║
║  ⚠️ Acme Corp - 2 days overdue                               ║
║  ⚠️ TechStart Inc - 1 day overdue                            ║
║  ⚠️ Global Services - 3 days overdue                         ║
║                                                               ║
║  TOP DEALS CLOSING THIS MONTH                                ║
║  1. Acme Corp - $75K (Negotiation) - 85% confidence          ║
║  2. Innovation Labs - $120K (Demo) - 60% confidence          ║
║  3. Enterprise Co - $95K (Proposal) - 50% confidence         ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

### Sheet 5: Task & Follow-up Tracker

| Task ID | Type | Customer | Priority | Due Date | Status | Assigned To | Notes |
|---------|------|----------|----------|----------|--------|-------------|-------|
| T001 | Call | Acme Corp | High | 2026-03-22 | Open | Sarah | Discuss contract terms |
| T002 | Email | TechStart Inc | Medium | 2026-03-23 | Open | Mike | Send case study |
| T003 | Demo | Global Services | High | 2026-03-24 | Open | Emily | Product walkthrough |
| T004 | Proposal | Innovation Labs | High | 2026-03-25 | In Progress | Sarah | Custom pricing |
| T005 | Follow-up | StartupXYZ | Low | 2026-03-28 | Open | Mike | Post-sale check-in |

### Task Formulas

```excel
// Overdue Tasks
=IF(AND(Due_Date<TODAY(),Status<>"Complete"),"OVERDUE","")

// Priority Score
=IF(Priority="High",3,IF(Priority="Medium",2,1))

// Days Until Due
=Due_Date-TODAY()

// Task Urgency
=IF(Due_Date<TODAY(),"Overdue",IF(Due_Date-TODAY()<=2,"Urgent",IF(Due_Date-TODAY()<=7,"Soon","Normal")))
```

### Conditional Formatting Rules

```excel
// Overdue Follow-ups (Red)
=AND(Next_Followup<>"",Next_Followup<TODAY(),Status="Active")

// Due Soon (Yellow)
=AND(Next_Followup<>"",Next_Followup>=TODAY(),Next_Followup<=TODAY()+3)

// High Priority Tasks
=Priority="High"

// Stale Leads (No contact >30 days)
=AND(Status="Lead",Last_Contact<TODAY()-30)

// VIP Customers
=Deal_Value>100000
```

### Automated Email Templates

```
Subject: Following up on our conversation

Hi [Contact Name],

Great speaking with you on [Last Contact Date]. I wanted to 
follow up on [Topic Discussed].

[Custom Message Based on Interaction Type]

Would you be available for a quick call this week?

Best regards,
[Owner Name]
```

### CRM Reports

1. **New Customers This Month**
   ```excel
   =COUNTIFS(Created_Date,">="&EOMONTH(TODAY(),-1)+1,Created_Date,"<="&EOMONTH(TODAY(),0))
   ```

2. **Customer Churn Rate**
   ```excel
   =COUNTIFS(Status,"Inactive",Last_Contact,"<"&TODAY()-90)/COUNTA(Status)
   ```

3. **Average Response Time**
   ```excel
   =AVERAGE(Response_Date-Contact_Date)
   ```

4. **Customer Lifetime Value**
   ```excel
   =SUMIFS(Deal_Value,Customer_ID,ID)*Average_Retention_Months
   ```

---

**File Format**: Excel (.xlsx) or Google Sheets
**Difficulty**: Intermediate
**Time to Set Up**: 45 minutes
**Recommended Add-ons**: Email integration, Calendar sync
