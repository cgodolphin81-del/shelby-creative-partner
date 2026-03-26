# GEO SCORE TRACKER — GOOGLE SHEETS FORMULAS

**Copy these formulas into your Google Sheet**

---

## COLUMN FORMULAS

### H2: GEO Score (Weighted Average)
```
=(B2*0.25)+(C2*0.15)+(D2*0.20)+(E2*0.10)+(F2*0.20)+(G2*0.10)
```
*Drag down for all rows*

### I2: AI Visibility % (Platforms Found / 5)
```
=IF(B2="","",B2/100)
```
*Format as percentage*

---

## SUMMARY SECTION FORMULAS

### Current GEO Score (Latest)
```
=INDEX(H:H,MATCH(1E+99,H:H))
```

### GEO Score Change (vs. Previous)
```
=INDEX(H:H,MATCH(1E+99,H:H))-INDEX(H:H,MATCH(1E+99,H:H)-1)
```

### Average GEO Score (All Time)
```
=AVERAGE(H2:H100)
```

### Best GEO Score
```
=MAX(H2:H100)
```

### Total Citations (Latest)
```
=INDEX(J:J,MATCH(1E+99,H:H))
```

### Citation Growth (vs. Baseline)
```
=J2-J$2
```

### Total AI Leads (All Time)
```
=SUM(K2:K100)
```

### Avg Leads/Month
```
=SUM(K2:K100)/3
```

---

## MONTHLY SUMMARY TAB

| Metric | Formula |
|--------|---------|
| Month Start Score | `=INDEX(H:H,MATCH(DATE(2026,3,1),A:A,1))` |
| Month End Score | `=INDEX(H:H,MATCH(DATE(2026,3,31),A:A,1))` |
| Month Change | `=EndScore-StartScore` |
| Month Avg Score | `=AVERAGEIFS(H:H,A:A,">="&DATE(2026,3,1),A:A,"<="&DATE(2026,3,31))` |
| Citations Added | `=INDEX(J:J,MATCH(DATE(2026,3,31),A:A,1))-INDEX(J:J,MATCH(DATE(2026,3,1),A:A,1))` |
| Leads This Month | `=SUMIFS(K:K,A:A,">="&DATE(2026,3,1),A:A,"<="&DATE(2026,3,31))` |

---

## CONDITIONAL FORMATTING

### GEO Score Color Scale
**Range:** H2:H100
- 0-34: Red (#FF0000)
- 35-49: Orange (#FFA500)
- 50-64: Yellow (#FFFF00)
- 65-79: Light Green (#90EE90)
- 80-100: Green (#00FF00)

### Score Change Indicators
**Range:** Create new column L
```
=IF(H2>H1,"↑",IF(H2<H1,"↓","→"))
```
- ↑ Green
- ↓ Red
- → Gray

---

## CHART DATA RANGES

### Chart 1: GEO Score Trend (Line)
- **Data Range:** A1:H14
- **X-axis:** Column A (Date)
- **Y-axis:** Column H (GEO Score)
- **Y-axis Range:** 0-100

### Chart 2: Component Scores (Radar)
- **Data Range:** B1:G2 (Latest row only)
- **Series:** 6 components
- **Range:** 0-100

### Chart 3: Citations Growth (Column)
- **Data Range:** A1:J14
- **X-axis:** Column A (Date)
- **Y-axis:** Column J (Citations)

### Chart 4: Leads Over Time (Line + Column)
- **X-axis:** Column A (Date)
- **Series 1:** Column K (Leads) - Column chart
- **Series 2:** Column H (GEO Score) - Line chart (secondary axis)

---

## AUTOMATION SCRIPT (Optional)

```javascript
function sendWeeklyReport() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tracker");
  var lastRow = sheet.getLastRow();
  var geoScore = sheet.getRange(lastRow, 8).getValue();
  var citations = sheet.getRange(lastRow, 10).getValue();
  var leads = sheet.getRange(lastRow, 11).getValue();
  var clientEmail = "client@example.com";
  
  var subject = "Weekly GEO Update — Score: " + geoScore + "/100";
  var body = "Weekly GEO Metrics:\n\n" +
             "GEO Score: " + geoScore + "/100\n" +
             "Total Citations: " + citations + "\n" +
             "AI Leads (MTD): " + leads + "\n\n" +
             "View dashboard: [LINK]\n\n" +
             "Best,\n[Your Name]";
  
  GmailApp.sendEmail(clientEmail, subject, body);
}
```

**Set Trigger:** Edit → Current project's triggers → Add trigger
- Function: sendWeeklyReport
- Event: Time-driven → Week timer → Monday 9am

---

## CLIENT VIEW SETUP

1. **Create new tab:** "Client Dashboard"
2. **Link cells to main tracker:**
   ```
   =Tracker!H14  (Current GEO Score)
   =Tracker!J14  (Current Citations)
   =Tracker!K14  (Current Leads)
   ```
3. **Hide internal columns** (component scores, formulas)
4. **Share settings:**
   - Client: View only
   - Your team: Edit access
   - Link sharing: Off

---

*Formulas v1.0 | March 21, 2026*
