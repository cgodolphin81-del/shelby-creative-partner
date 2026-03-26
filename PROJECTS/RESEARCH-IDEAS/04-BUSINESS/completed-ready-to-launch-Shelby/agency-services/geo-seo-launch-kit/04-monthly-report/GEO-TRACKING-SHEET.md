# GEO TRACKING SPREADSHEET TEMPLATE

**Create a Google Sheet with these tabs. Copy formulas exactly.**

---

## TAB 1: DASHBOARD

### Layout

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| **CLIENT NAME** | | | | | |
| **Reporting Period** | [Month Year] | | | | |
| | | | | | |
| **KEY METRICS** | **Last Month** | **This Month** | **Change** | **Target** | **Status** |
| GEO Score | [formula] | [formula] | [=C5-B5] | [value] | [=IF(C5>=E5,"✅","🟡")] |
| AI Citations | | | [=C6-B6] | | |
| Visibility Rate % | | | [=C7-B7] | | |
| AI Leads | | | [=C8-B8] | | |
| | | | | | |
| **SCORE BREAKDOWN** | **Month 1** | **Month 2** | **Month 3** | **Month 4** | **Month 5** |
| AI Citability | [value] | [value] | [value] | [value] | [value] |
| Brand Authority | [value] | [value] | [value] | [value] | [value] |
| Content E-E-A-T | [value] | [value] | [value] | [value] | [value] |
| Technical | [value] | [value] | [value] | [value] | [value] |
| Structured Data | [value] | [value] | [value] | [value] | [value] |
| Platform Opt | [value] | [value] | [value] | [value] | [value] |
| **OVERALL** | [=AVERAGE(B11:B16)] | [=AVERAGE(C11:C16)] | [=AVERAGE(D11:D16)] | [=AVERAGE(E11:E16)] | [=AVERAGE(F11:F16)] |

### Charts to Create

1. **GEO Score Trend** (Line Chart)
   - Data: Row 17 (Overall scores across months)
   - X-axis: Month 1, Month 2, Month 3...
   - Y-axis: Score (0-100)
   - Add target line

2. **Score Breakdown** (Stacked Bar)
   - Data: Rows 11-16, all month columns
   - Shows composition of score over time

3. **Citations Growth** (Column Chart)
   - Data: Citations row across months
   - Shows cumulative growth

---

## TAB 2: AI VISIBILITY BY PLATFORM

### Layout

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| **PLATFORM VISIBILITY** | | | | | | |
| | | | | | | |
| **Platform** | **Month 1** | **Month 2** | **Month 3** | **Month 4** | **Month 5** | **Trend** |
| ChatGPT | [%] | [%] | [%] | [%] | [%] | [=IF(F4>E4,"↑",IF(F4<E4,"↓","→"))] |
| Google AI Overviews | [%] | [%] | [%] | [%] | [%] | [=IF(F5>E5,"↑",IF(F5<E5,"↓","→"))] |
| Claude | [%] | [%] | [%] | [%] | [%] | [=IF(F6>E6,"↑",IF(F6<E6,"↓","→"))] |
| Perplexity | [%] | [%] | [%] | [%] | [%] | [=IF(F7>E7,"↑",IF(F7<E7,"↓","→"))] |
| Bing AI | [%] | [%] | [%] | [%] | [%] | [=IF(F8>E8,"↑",IF(F8<E8,"↓","→"))] |
| **AVERAGE** | [=AVERAGE(B4:B8)] | [=AVERAGE(C4:C8)] | [=AVERAGE(D4:D8)] | [=AVERAGE(E4:E8)] | [=AVERAGE(F4:F8)] | |
| | | | | | | |
| **BRAND QUERIES** | **M1** | **M2** | **M3** | **M4** | **M5** | |
| "[Client Name]" | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | |
| "[Client] reviews" | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | |
| "[Client] vs [X]" | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | |
| | | | | | | |
| **CATEGORY QUERIES** | **M1** | **M2** | **M3** | **M4** | **M5** | |
| "Best [product] for [X]" | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | |
| "[Product] recommendations" | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | |
| "How to [solve problem]" | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | |

### Conditional Formatting

- Green fill for "Y" (found)
- Red fill for "N" (not found)
- Data bars for percentage columns

---

## TAB 3: CITATION TRACKER

### Layout

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| **CITATION LOG** | | | | | | | |
| | | | | | | | |
| **ID** | **Source** | **URL** | **Authority (0-100)** | **Date Added** | **Type** | **Status** | **Notes** |
| 1 | [Source] | [URL] | [XX] | [Date] | [Directory/Review/etc] | [Live/Pending] | [Notes] |
| 2 | [Source] | [URL] | [XX] | [Date] | [Type] | [Status] | [Notes] |
| 3 | [Source] | [URL] | [XX] | [Date] | [Type] | [Status] | [Notes] |
| ... | | | | | | | |
| | | | | | | | |
| **SUMMARY** | | | | | | | |
| Total Citations | [=COUNTA(A4:A100)] | | | | | | |
| Live Citations | [=COUNTIF(G4:G100,"Live")] | | | | | | |
| Avg Authority | [=AVERAGE(D4:D100)] | | | | | | |
| This Month | [=COUNTIF(E4:E100,">="&EOMONTH(TODAY(),-1)+1)] | | | | | | |

### Data Validation

**Column F (Type):**
- Directory
- Review Site
- News/Media
- Social Platform
- Industry Site
- Forum
- Other

**Column G (Status):**
- Live
- Pending
- Rejected
- Needs Update

### Conditional Formatting

- Green: Status = "Live"
- Yellow: Status = "Pending"
- Red: Status = "Rejected"

---

## TAB 4: COMPETITOR TRACKING

### Layout

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| **COMPETITOR TRACKING** | | | | | | | |
| | | | | | | | |
| **Competitor** | **Website** | **Month 1** | **Month 2** | **Month 3** | **Month 4** | **Month 5** | **Trend** |
| [Competitor 1] | [URL] | [XX] | [XX] | [XX] | [XX] | [XX] | [=IF(F3>E3,"↑",IF(F3<E3,"↓","→"))] |
| [Competitor 2] | [URL] | [XX] | [XX] | [XX] | [XX] | [XX] | [=IF(F4>E4,"↑",IF(F4<E4,"↓","→"))] |
| [Competitor 3] | [URL] | [XX] | [XX] | [XX] | [XX] | [XX] | [=IF(F5>E5,"↑",IF(F5<E5,"↓","→"))] |
| [Competitor 4] | [URL] | [XX] | [XX] | [XX] | [XX] | [XX] | [=IF(F6>E6,"↑",IF(F6<E6,"↓","→"))] |
| [Competitor 5] | [URL] | [XX] | [XX] | [XX] | [XX] | [XX] | [=IF(F7>E7,"↑",IF(F7<E7,"↓","→"))] |
| **[CLIENT]** | **[URL]** | **[XX]** | **[XX]** | **[XX]** | **[XX]** | **[XX]** | |
| | | | | | | | |
| **YOUR RANK** | | [=RANK(C8,C3:C8,0)] | [=RANK(D8,D3:D8,0)] | [=RANK(E8,E3:E8,0)] | [=RANK(F8,F3:F8,0)] | [=RANK(G8,G3:G8,0)] | |
| **AVG SCORE** | | [=AVERAGE(C3:C7)] | [=AVERAGE(D3:D7)] | [=AVERAGE(E3:E7)] | [=AVERAGE(F3:F7)] | [=AVERAGE(G3:G7)] | |
| **GAP TO LEADER** | | [=MAX(C3:C7)-C8] | [=MAX(D3:D7)-D8] | [=MAX(E3:E7)-E8] | [=MAX(F3:F7)-F8] | [=MAX(G3:G7)-G8] | |

### Conditional Formatting

- Highlight row where client rank = 1 (green)
- Highlight cells where client score > competitor avg (light green)

---

## TAB 5: CONTENT OPTIMIZATION

### Layout

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| **CONTENT OPTIMIZATION LOG** | | | | | | | | |
| | | | | | | | | |
| **URL** | **Page Title** | **Optimization Type** | **Date Requested** | **Date Complete** | **Status** | **Owner** | **AI Citations Before** | **AI Citations After** |
| [URL] | [Title] | [FAQ/Schema/Content] | [Date] | [Date] | [Status] | [Name] | [X] | [X] |
| [URL] | [Title] | [Type] | [Date] | [Date] | [Status] | [Name] | [X] | [X] |
| ... | | | | | | | | |
| | | | | | | | | |
| **SUMMARY** | | | | | | | | |
| Total Pages | [=COUNTA(A4:A100)] | | | | | | | |
| Complete | [=COUNTIF(F4:F100,"Complete")] | | | | | | | |
| In Progress | [=COUNTIF(F4:F100,"In Progress")] | | | | | | | |
| Avg Citation Lift | [=AVERAGE(I4:I100)-AVERAGE(H4:H100)] | | | | | | | |

### Data Validation

**Column C (Type):**
- FAQ Schema
- HowTo Schema
- Article Schema
- Content Rewrite
- Add Statistics
- Add Definitions
- Internal Linking
- Other

**Column F (Status):**
- Backlog
- In Progress
- Review
- Complete

---

## TAB 6: LEAD TRACKING

### Layout

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|---|
| **AI-DRIVEN LEAD LOG** | | | | | | | | | |
| | | | | | | | | | |
| **Date** | **Lead Source** | **Platform** | **Query (if known)** | **Lead Details** | **Status** | **Value** | **Converted** | **Notes** |
| [Date] | [Form/Call/Email] | [ChatGPT/Google AI/etc] | [Query] | [Details] | [New/Contacted/Qualified] | $[X,XXX] | [Y/N] | [Notes] |
| [Date] | [Source] | [Platform] | [Query] | [Details] | [Status] | $[X,XXX] | [Y/N] | [Notes] |
| ... | | | | | | | | |
| | | | | | | | | |
| **SUMMARY** | | | | | | | | | |
| Total Leads (MTD) | [=COUNTIF(A4:A100,">="&EOMONTH(TODAY(),-1)+1)] | | | | | | | |
| Total Leads (All) | [=COUNTA(A4:A100)-1] | | | | | | | |
| Converted | [=COUNTIF(H4:H100,"Y")] | | | | | | | |
| Conversion Rate | [=B14/B13] | | | | | | | |
| Total Value | [=SUM(G4:G100)] | | | | | | | |
| Avg Deal Size | [=B16/B14] | | | | | | | |

### Data Validation

**Column F (Status):**
- New
- Contacted
- Qualified
- Proposal Sent
- Negotiation
- Won
- Lost

**Column H (Converted):**
- Y
- N

---

## TAB 7: TASKS & ACTION ITEMS

### Layout

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| **ACTION ITEM TRACKER** | | | | | | | |
| | | | | | | | |
| **ID** | **Task** | **Category** | **Priority** | **Assigned To** | **Due Date** | **Status** |
| 1 | [Task description] | [Category] | [P0/P1/P2] | [Name] | [Date] | [Status] |
| 2 | [Task] | [Category] | [Priority] | [Name] | [Date] | [Status] |
| ... | | | | | | | |
| | | | | | | | |
| **FILTERS** | | | | | | | |
| Overdue | [=COUNTIFS(G4:G100,"Not Started",F4:F100,"<"&TODAY())] | | | | | | |
| Due This Week | [=COUNTIFS(F4:F100,">="&TODAY(),F4:F100,"<="&TODAY()+7)] | | | | | | |
| Complete (MTD) | [=COUNTIFS(G4:G100,"Complete",F4:F100,">="&EOMONTH(TODAY(),-1)+1)] | | | | | | |

### Data Validation

**Column C (Category):**
- Technical
- Content
- Citations
- Reporting
- Client Request
- Other

**Column D (Priority):**
- P0 (Critical)
- P1 (High)
- P2 (Medium)
- P3 (Low)

**Column G (Status):**
- Not Started
- In Progress
- Blocked
- Complete

### Conditional Formatting

- Red: Due date < TODAY and Status != "Complete"
- Yellow: Due date within 7 days and Status != "Complete"
- Green: Status = "Complete"
- Strikethrough: Status = "Complete"

---

## TAB 8: NOTES & INSIGHTS

### Layout

| A | B | C |
|---|---|---|
| **DATE** | **TYPE** | **NOTE** |
| [Date] | [Algorithm Update/Insight/Issue] | [Description] |
| [Date] | [Type] | [Note] |
| ... | | |

### Data Validation

**Column B (Type):**
- Algorithm Update
- Platform Change
- Client Note
- Insight
- Issue
- Win
- Other

---

## FORMULAS REFERENCE

### Key Calculations

**GEO Score (weighted average):**
```
=SUMPRODUCT(B11:B16,{0.25,0.20,0.20,0.15,0.10,0.10})
```

**Month-over-Month Growth:**
```
=(C5-B5)/B5
```

**Visibility Rate:**
```
=COUNTIF(B18:B25,"Y")/COUNTA(B18:B25)
```

**Conversion Rate:**
```
=COUNTIF(H4:H100,"Y")/COUNTA(A4:A100)
```

**Days Overdue:**
```
=IF(AND(F4<TODAY(),G4<>"Complete"),TODAY()-F4,"")
```

---

## CHARTS TO CREATE

1. **GEO Score Trend** (Line)
2. **Platform Visibility** (Multi-line)
3. **Citation Growth** (Column)
4. **Competitor Comparison** (Bar)
5. **Lead Sources** (Pie)
6. **Task Status** (Donut)

---

## SHARING SETTINGS

- **View Access:** Client stakeholders
- **Edit Access:** Your team only
- **Comment Access:** Client (optional)

---

*Template created by [Your Company Name]*
