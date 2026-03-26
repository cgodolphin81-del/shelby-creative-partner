# GEO SCORE TRACKING DASHBOARD

**Google Sheets Template — Copy and customize for each client**

---

## SHEET STRUCTURE

Create a Google Sheet with these tabs:

1. **DASHBOARD** — Visual overview (client-facing)
2. **AI VISIBILITY** — Platform-by-platform tracking
3. **GEO SCORE HISTORY** — Score trends over time
4. **CITATION LOG** — All citations tracked
5. **CONTENT OPTIMIZED** — Pages optimized log
6. **COMPETITOR TRACKING** — Competitor scores
7. **LEADS FROM AI** — Lead/conversion tracking
8. **TASKS** — Action item tracker

---

## TAB 1: DASHBOARD

### Layout (Row by Row)

**Row 1-3: Header**
```
A1: [CLIENT COMPANY NAME] — GEO Dashboard
A2: Last Updated: =TODAY()
A3: Account Manager: [Your Name]
```

**Row 5-9: Current Status Cards**
```
A5: CURRENT GEO SCORE    B5: [XX]    C5: /100    D5: =IF(B5>=80,"🟢",IF(B5>=65,"🟡","🔴"))
A7: AI VISIBILITY        B7: [XX]%   C7: of 7 platforms
A9: TOTAL CITATIONS      B9: [XXX]   C9: (+[XX] this month)
```

**Row 11-15: Score Breakdown (Current Month)**
```
A11: COMPONENT SCORES
A12: AI Visibility       B12: [XX]/100    C12: [ProgressBar]
A13: Technical           B13: [XX]/100    C13: [ProgressBar]
A14: Content E-E-A-T     B14: [XX]/100    C14: [ProgressBar]
A15: Structured Data     B15: [XX]/100    C15: [ProgressBar]
A16: Citations           B16: [XX]/100    C16: [ProgressBar]
A17: Competitive         B17: [XX]/100    C17: [ProgressBar]
```

**Row 19-25: Monthly Trend Table**
```
A19: MONTH    B19: GEO Score    C19: AI Visibility%    D19: Citations    E19: AI Leads
A20: Month 1  B20: [XX]         C20: [XX]%             D20: [XXX]        E20: [X]
A21: Month 2  B21: [XX]         C21: [XX]%             D21: [XXX]        E21: [X]
A22: Month 3  B22: [XX]         C22: [XX]%             D22: [XXX]        E22: [X]
```

### Charts to Create

**Chart 1: GEO Score Trend (Line Chart)**
- Data Range: B20:B22 (or more months)
- X-axis: A20:A22 (Month labels)
- Y-axis: 0-100
- Add trendline
- Title: "GEO Score Over Time"
- Position: G5:L20

**Chart 2: Component Scores (Radar Chart)**
- Data Range: A12:B17
- Title: "Current Score Breakdown"
- Position: G22:L35

**Chart 3: Citations Growth (Column Chart)**
- Data Range: D20:D22
- Title: "Citation Growth"
- Position: G37:L50

---

## TAB 2: AI VISIBILITY

### Column Headers (Row 1)

```
A1: Query
B1: Category
C1: Test Date
D1: ChatGPT
E1: Claude
F1: Google AI
G1: Perplexity
H1: Bing AI
I1: You.com
J1: Phind
K1: Platforms Found
L1: Visibility %
M1: Notes
```

### Data Entry Format

**Column A (Query):** The exact search query tested
**Column B (Category):** Brand / Category / Problem / Local
**Column C (Test Date):** =TODAY() or specific date
**Columns D-J (Platforms):** Found / Not Found / Position #
**Column K (Platforms Found):** =COUNTIF(D2:J2,"Found")
**Column L (Visibility %):** =K2/7
**Column M (Notes):** Any observations

### Summary Section (Below Data)

```
A100: SUMMARY
A101: Total Queries Tested    B101: =COUNTA(A2:A99)
A102: Avg Platforms Found     B102: =AVERAGE(K2:K99)
A103: Overall Visibility %    B103: =AVERAGE(L2:L99)
A104: Best Platform           B104: =INDEX(D1:J1,MATCH(MAX(COUNTIF(D2:J99,"Found")),COUNTIF(D2:J99,"Found"),0))
A105: Worst Platform          B105: =INDEX(D1:J1,MATCH(MIN(COUNTIF(D2:J99,"Found")),COUNTIF(D2:J99,"Found"),0))
```

### Platform Breakdown Table

```
D100: PLATFORM BREAKDOWN
D101: Platform    E101: Found Count    F101: Visibility %
D102: ChatGPT     E102: =COUNTIF(D2:D99,"Found")    F102: =E102/$B$101
D103: Claude      E103: =COUNTIF(E2:E99,"Found")    F103: =E103/$B$101
D104: Google AI   E104: =COUNTIF(F2:F99,"Found")    F104: =E104/$B$101
D105: Perplexity  E105: =COUNTIF(G2:G99,"Found")    F105: =E105/$B$101
D106: Bing AI     E106: =COUNTIF(H2:H99,"Found")    F106: =E106/$B$101
D107: You.com     E107: =COUNTIF(I2:I99,"Found")    F107: =E107/$B$101
D108: Phind       E108: =COUNTIF(J2:J99,"Found")    F108: =E108/$B$101
```

---

## TAB 3: GEO SCORE HISTORY

### Column Headers

```
A1: Date
B1: AI Visibility Score
C1: Technical Score
D1: Content Score
E1: Structured Data Score
F1: Citation Score
G1: Competitive Score
H1: OVERALL GEO SCORE
I1: Notes
```

### Weekly Entry Format

Enter scores weekly (recommended: every Monday)

**Row 2 onwards:**
```
A2: =TODAY() (or specific date)
B2: [0-100]
C2: [0-100]
D2: [0-100]
E2: [0-100]
F2: [0-100]
G2: [0-100]
H2: =(B2*0.25)+(C2*0.15)+(D2*0.20)+(E2*0.10)+(F2*0.20)+(G2*0.10)
I2: [Any notes about changes]
```

### Score Calculation Reference

```
COMPONENT WEIGHTS:
- AI Visibility:     25%
- Technical:         15%
- Content E-E-A-T:   20%
- Structured Data:   10%
- Citations:         20%
- Competitive:       10%
```

### Monthly Summary Table

```
A100: MONTHLY SUMMARY
A101: Month    B101: Start Score    C101: End Score    D101: Change    E101: Avg Score
A102: January  B102: [XX]           C102: [XX]         D102: =C102-B102    E102: =AVERAGE(H2:H5)
A103: February B103: [XX]           C103: [XX]         D103: =C103-B103    E103: =AVERAGE(H6:H9)
A104: March    B104: [XX]           C104: [XX]         D104: =C104-B104    E104: =AVERAGE(H10:H13)
```

---

## TAB 4: CITATION LOG

### Column Headers

```
A1: ID
B1: Source Name
C1: URL
D1: Domain Authority (0-100)
E1: Date Added
F1: Type
G1: Status
H1: Follow/Nofollow
I1: Complete Profile
J1: Monthly Traffic (est)
K1: Notes
```

### Data Validation

**Column F (Type):**
- Directory
- Review Site
- News/Media
- Social Platform
- Industry Site
- Forum
- Wikipedia
- Other

**Column G (Status):**
- Live
- Pending
- Rejected
- Needs Update
- Removed

**Column H (Follow/Nofollow):**
- Follow
- Nofollow
- Mixed
- Unknown

**Column I (Complete Profile):**
- Yes
- Partial
- No

### Summary Formulas

```
M1: CITATION SUMMARY
M2: Total Citations       N2: =COUNTA(A2:A500)-1
M3: Live Citations        N3: =COUNTIF(G2:G500,"Live")
M4: Pending               N4: =COUNTIF(G2:G500,"Pending")
M5: Avg Domain Authority  N5: =AVERAGE(D2:D500)
M6: Follow Links          N6: =COUNTIF(H2:H500,"Follow")
M7: Complete Profiles     N7: =COUNTIF(I2:I500,"Yes")
M8: This Month Added      N8: =COUNTIF(E2:E500,">="&EOMONTH(TODAY(),-1)+1)
```

### Conditional Formatting

**Column G (Status):**
- "Live" → Green background
- "Pending" → Yellow background
- "Rejected" → Red background

**Column D (DA):**
- Data bars (0-100 scale)
- Green gradient

---

## TAB 5: CONTENT OPTIMIZED

### Column Headers

```
A1: URL
B1: Page Title
C1: Optimization Type
D1: Date Requested
E1: Date Complete
F1: Status
G1: Owner
H1: Citations Before
I1: Citations After
J1: Lift %
K1: Notes
```

### Data Validation

**Column C (Optimization Type):**
- FAQ Schema
- HowTo Schema
- Article Schema
- Organization Schema
- Content Rewrite
- Add Statistics
- Add Definitions
- Internal Linking
- E-E-A-T Enhancement
- Other

**Column F (Status):**
- Backlog
- In Progress
- Review
- Complete
- Published

### Formulas

**Column J (Lift %):**
```
J2: =IF(H2=0,"N/A",((I2-H2)/H2)*100)
```

### Summary Section

```
M1: OPTIMIZATION SUMMARY
M2: Total Pages      N2: =COUNTA(A2:A500)-1
M3: Complete         N3: =COUNTIF(F2:F500,"Complete")
M4: In Progress      N4: =COUNTIF(F2:F500,"In Progress")
M5: Avg Citation Lift N5: =AVERAGE(J2:J500)
M6: This Month       N6: =COUNTIF(E2:E500,">="&EOMONTH(TODAY(),-1)+1)
```

---

## TAB 6: COMPETITOR TRACKING

### Column Headers

```
A1: Competitor Name
B1: Website
C1: Month 1 Score
D1: Month 2 Score
E1: Month 3 Score
F1: Month 4 Score
G1: Month 5 Score
H1: Month 6 Score
I1: Trend
J1: vs Client
```

### Formulas

**Column I (Trend):**
```
I2: =IF(H2>G2,"↑",IF(H2<G2,"↓","→"))
```

**Column J (vs Client):**
```
Assuming client score is in row 100:
J2: =H2-$H$100
(Positive = competitor ahead, Negative = client ahead)
```

### Client Row (Row 100)

```
A100: [CLIENT NAME]
B100: [client-website.com]
C100: [XX]    D100: [XX]    E100: [XX]    F100: [XX]    G100: [XX]    H100: [XX]
I100: =IF(H100>G100,"↑",IF(H100<G100,"↓","→"))
J100: —
```

### Ranking Calculation

```
L1: CURRENT RANKINGS
L2: Client Rank    M2: =RANK(H100,H2:H100,0)
L3: Total Tracked  M3: =COUNTA(A2:A100)-1
L4: Gap to Leader  M4: =MAX(H2:H99)-H100
```

---

## TAB 7: LEADS FROM AI

### Column Headers

```
A1: Date
B1: Lead Source
C1: AI Platform
D1: Query (if known)
E1: Lead Name
F1: Company
G1: Value (est)
H1: Status
I1: Converted
J1: Conversion Date
K1: Notes
```

### Data Validation

**Column B (Lead Source):**
- Contact Form
- Phone Call
- Email
- Chat
- Other

**Column C (AI Platform):**
- ChatGPT
- Google AI Overview
- Claude
- Perplexity
- Bing AI
- Other AI
- Not Tracked

**Column H (Status):**
- New
- Contacted
- Qualified
- Proposal
- Negotiation
- Won
- Lost

**Column I (Converted):**
- Y
- N

### Summary Formulas

```
M1: LEAD SUMMARY (MTD)
M2: Total Leads         N2: =COUNTIFS(A2:A500,">="&EOMONTH(TODAY(),-1)+1)
M3: Converted           N3: =COUNTIFS(I2:I500,"Y",A2:A500,">="&EOMONTH(TODAY(),-1)+1)
M4: Conversion Rate     N4: =IF(N2=0,0,N3/N2)
M5: Total Value         N5: =SUMIFS(G2:G500,A2:A500,">="&EOMONTH(TODAY(),-1)+1)
M6: Avg Deal Size       N6: =IF(N3=0,0,N5/N3)

M8: BY PLATFORM (MTD)
M9: Platform    N9: Count    O9: Converted    P9: Rate
M10: ChatGPT    N10: =COUNTIFS(C2:C500,"ChatGPT",A2:A500,">="&EOMONTH(TODAY(),-1)+1)    O10: =COUNTIFS(C2:C500,"ChatGPT",I2:I500,"Y",A2:A500,">="&EOMONTH(TODAY(),-1)+1)    P10: =IF(N10=0,0,O10/N10)
M11: Google AI  N11: =COUNTIFS(C2:C500,"Google AI Overview",A2:A500,">="&EOMONTH(TODAY(),-1)+1)    O11: =COUNTIFS(C2:C500,"Google AI Overview",I2:I500,"Y",A2:A500,">="&EOMONTH(TODAY(),-1)+1)    P11: =IF(N11=0,0,O11/N11)
[Continue for each platform]
```

---

## TAB 8: TASKS

### Column Headers

```
A1: ID
B1: Task Description
C1: Category
D1: Priority
E1: Assigned To
F1: Due Date
G1: Status
H1: Date Complete
I1: Notes
```

### Data Validation

**Column C (Category):**
- Technical
- Content
- Citations
- Reporting
- Client Request
- Internal

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

**Column F (Due Date):**
- Red: < TODAY() AND Status != "Complete"
- Yellow: >= TODAY() AND <= TODAY()+7 AND Status != "Complete"
- Green: Status = "Complete"

**Row Strikethrough:**
- When Status = "Complete"

### Summary Section

```
M1: TASK SUMMARY
M2: Total Tasks        N2: =COUNTA(A2:A500)-1
M3: Not Started        N3: =COUNTIF(G2:G500,"Not Started")
M4: In Progress        N4: =COUNTIF(G2:G500,"In Progress")
M5: Complete           N5: =COUNTIF(G2:G500,"Complete")
M6: Overdue            N6: =COUNTIFS(F2:F500,"<"&TODAY(),G2:G500,"<>Complete")
M7: Due This Week      N7: =COUNTIFS(F2:F500,">="&TODAY(),F2:F500,"<="&TODAY()+7,G2:G500,"<>Complete")
```

---

## AUTOMATION SETUP

### Google Sheets Scripts (Optional)

**Auto-Email Weekly Summary:**

```javascript
function sendWeeklySummary() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DASHBOARD");
  var geoScore = sheet.getRange("B5").getValue();
  var citations = sheet.getRange("B9").getValue();
  var clientEmail = "client@example.com";
  
  var subject = "Weekly GEO Update — Score: " + geoScore;
  var body = "Hi,\n\nYour weekly GEO metrics:\n- GEO Score: " + geoScore + "/100\n- Total Citations: " + citations + "\n\nView full dashboard: [Link]\n\nBest,\n[Your Name]";
  
  GmailApp.sendEmail(clientEmail, subject, body);
}
```

**Trigger:** Set to run every Monday at 9 AM

---

## CLIENT SHARING SETTINGS

### View-Only Dashboard

**Create a separate "Client View" sheet:**
- Link to main dashboard data
- Hide internal tabs (Tasks, raw data)
- Show only: Dashboard, Score History, Lead Summary
- Share with client (View only)

**Sharing Settings:**
- Client: View access only
- Your team: Edit access
- Link sharing: Off (invite only)

---

## SETUP CHECKLIST

```
□ Create Google Sheet with 8 tabs
□ Set up DASHBOARD tab with formulas
□ Create AI VISIBILITY tab with platform columns
□ Set up GEO SCORE HISTORY with weighted formula
□ Create CITATION LOG with data validation
□ Set up CONTENT OPTIMIZED tracking
□ Create COMPETITOR TRACKING with trend formulas
□ Set up LEADS FROM AI with conversion tracking
□ Create TASKS tab with conditional formatting
□ Add charts to Dashboard (3 minimum)
□ Set up client view (restricted access)
□ Test all formulas with sample data
□ Share with team and client
□ Schedule weekly data entry reminder
```

---

*Template v1.0 | March 21, 2026*
*[Your Company Name]*
