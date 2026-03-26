# Google Sheets Project Tracker - Complete Spreadsheet Structure

**Build this exact structure in Google Sheets. Share as "Make a Copy" link.**

---

## 📊 TAB 1: PROJECT DASHBOARD

### Layout:

**Row 1-2: Header**
```
A1: "📋 Project Management Dashboard"
A2: "Last Updated: " & TEXT(NOW(), "mmmm dd, yyyy")
```

**Row 4-10: Summary Cards**
```
A4: "📁 Total Projects"     | B4: =COUNTA(Projects!A2:A100)
                             | Format: Large font, blue background

C4: "🟢 On Track"           | D4: =COUNTIF(Projects!$F:$F, "On Track")
                             | Format: Green background

A6: "🟡 At Risk"            | B6: =COUNTIF(Projects!$F:$F, "At Risk")
                             | Format: Yellow background

C6: "🔴 Behind"             | D6: =COUNTIF(Projects!$F:$F, "Behind")
                             | Format: Red background

A8: "✅ Completed (This Month)" | B8: =COUNTIFS(Projects!$F:$F, "Complete", Projects!$D:$D, ">="&EOMONTH(TODAY(),-1)+1)

C8: "💰 Total Budget"       | D8: =SUM(Projects!$G:$G)
                             | Format: Currency

A10: "📊 Avg Completion"    | B10: =AVERAGE(Projects!$I:$I)
                             | Format: Percentage
```

**Row 13-30: Active Projects Table**
```
A13: "Project"              | B13: "Manager"      | C13: "Deadline"     | D13: "Status"       | E13: "% Complete"   | F13: "Tasks"
A14: =Projects!A2           | B14: =Projects!B2   | C14: =Projects!D2   | D14: =Projects!F2   | E14: =Projects!I2   | F14: =COUNTIF(Tasks!$B:$B, A14)
[Copy down for 15 rows]
```

**Row 33-45: Upcoming Deadlines (Next 7 Days)**
```
A33: "⏰ Due This Week"
A34: [Filter Projects where Deadline is within 7 days]
Use FILTER function:
=FILTER(Projects!A2:C100, Projects!D2:D100-TODAY()<=7, Projects!D2:D100>=TODAY(), Projects!F2:F100<>"Complete")
```

**Row 48-55: Team Workload Summary**
```
A48: "👥 Team Workload"
A49: "Team Member"         | B49: "Active Tasks"  | C49: "Overdue"      | D49: "This Week"
A50: =UNIQUE(Tasks!D2:D100)| B50: =COUNTIFS(Tasks!$D:$D, A50, Tasks!$F:$F, "<>Complete")
                           | C50: =COUNTIFS(Tasks!$D:$D, A50, Tasks!$F:$F, "<>Complete", Tasks!$E:$E, "<"&TODAY())
                           | D50: =COUNTIFS(Tasks!$D:$D, A50, Tasks!$E:$E, ">="&TODAY(), Tasks!$E:$E, "<="&TODAY()+7)
```

**Charts to Insert:**
1. **Pie Chart** - Projects by Status (D4:D6 labels, counts)
2. **Bar Chart** - Projects by Manager
3. **Gauge Chart** - Average Completion %
4. **Timeline** - Project deadlines (if using Gantt)

---

## 📁 TAB 2: PROJECTS

### Column Headers (Row 1):
```
A1: "Project ID"
B1: "Project Name"
C1: "Project Manager"
D1: "Deadline"
E1: "Start Date"
F1: "Status"
G1: "Budget"
H1: "Client/Stakeholder"
I1: "% Complete"
J1: "Priority"
K1: "Tags"
L1: "Notes"
```

### Data Validation:

**Column F (Status):**
```
List:
- 🟢 On Track
- 🟡 At Risk
- 🔴 Behind
- ⏸️ On Hold
- ✅ Complete
- ❌ Cancelled
```

**Column J (Priority):**
```
List:
- 🔴 Critical
- 🟠 High
- 🟡 Medium
- 🟢 Low
```

**Column K (Tags):**
```
List (multi-select in Google Sheets):
- Web Development
- Mobile App
- Marketing
- Design
- Content
- Internal
- Client Work
- Q1 2026
- Q2 2026
```

### Sample Data:
```
A2: PRJ-001              | B2: "Website Redesign"     | C2: "Sarah Johnson"  | D2: 03/31/2026  | E2: 01/15/2026  | F2: "🟢 On Track"  | G2: 15000  | H2: "Acme Corp"  | I2: 75%  | J2: "🟠 High"  | K2: "Web Development, Client Work"
A3: PRJ-002              | B3: "Mobile App Launch"    | C3: "Mike Chen"      | D3: 04/15/2026  | E3: 02/01/2026  | F3: "🟡 At Risk"   | G3: 25000  | H3: "StartupXYZ" | I2: 45%  | J2: "🔴 Critical" | K2: "Mobile App, Client Work"
A4: PRJ-003              | B4: "Brand Guidelines"     | C4: "Emma Davis"     | D4: 03/20/2026  | E4: 02/15/2026  | F4: "🟢 On Track"  | G4: 8000   | H4: "Internal"   | I2: 90%  | J2: "🟡 Medium" | K2: "Design, Internal"
```

### Formulas:

**Column I (% Complete) - Auto-calculate from Tasks:**
```
I2: =IF(COUNTIF(Tasks!$B:$B, B2)=0, 0, COUNTIFS(Tasks!$B:$B, B2, Tasks!$F:$F, "Complete")/COUNTIF(Tasks!$B:$B, B2))
Format as percentage
```

**Column L (Auto-status based on deadline and completion):**
```
L2: =IF(I2=1, "✅ Complete", IF(D2<TODAY(), "🔴 Behind", IF(D2-TODAY()<=7, "🟡 At Risk", "🟢 On Track")))
```

### Conditional Formatting:
- **Deadline passed:** Red row if D2<TODAY() AND F2<>"Complete"
- **Due within 7 days:** Yellow row
- **Complete:** Green row with strikethrough

---

## ✅ TAB 3: TASKS

### Column Headers (Row 1):
```
A1: "Task ID"
B1: "Project"
C1: "Task Name"
D1: "Assigned To"
E1: "Due Date"
F1: "Status"
G1: "Priority"
H1: "Estimated Hours"
I1: "Actual Hours"
J1: "Dependencies"
K1: "Notes"
```

### Data Validation:

**Column F (Status):**
```
List:
- 📝 Not Started
- 🔄 In Progress
- 👀 In Review
- ✅ Complete
- ⏸️ Blocked
```

**Column G (Priority):**
```
List:
- 🔴 Urgent
- 🟡 High
- 🟢 Normal
- ⚪ Low
```

### Sample Data:
```
A2: TSK-001              | B2: "Website Redesign"     | C2: "Homepage Design"       | D2: "Emma Davis"   | E2: 03/10/2026  | F2: "✅ Complete"  | G2: "🟡 High"  | H2: 8  | I2: 7.5  | J2: "-"  | K2: "Approved by client"
A3: TSK-002              | B3: "Website Redesign"     | C3: "Backend Development"   | D3: "John Smith"   | E3: 03/20/2026  | F3: "🔄 In Progress"| G3: "🔴 Urgent"| H3: 20 | I3: 12   | J3: "TSK-001" | K2: "API integration pending"
A4: TSK-003              | B4: "Website Redesign"     | C4: "Content Migration"     | D4: "Sarah Johnson"| E3: 03/25/2026  | F4: "📝 Not Started"| G4: "🟢 Normal"| H4: 6  | I4: 0    | J4: "TSK-002" | K4: "Waiting for content"
```

### Formulas:

**Overdue Indicator (Column L - add helper column):**
```
L2: =IF(AND(F2<>"Complete", E2<TODAY()), "⚠️ OVERDUE", "")
```

**Days Until Due (Column M):**
```
M2: =IF(F2="Complete", "Done", IF(E2<TODAY(), ABS(E2-TODAY())&" days overdue", E2-TODAY()&" days left"))
```

### Views/Filters to Create:
1. **My Tasks** - Filter: Assigned To = [Current User]
2. **Overdue Tasks** - Filter: Due Date < Today AND Status <> Complete
3. **This Week** - Filter: Due Date between Today and Today+7
4. **By Project** - Group by Project column
5. **By Status** - Group by Status column

---

## 📅 TAB 4: TIMELINE (Gantt View)

### Layout for Gantt Chart:

**Row 1: Month Headers**
```
A1: "Project"
B1: "Jan W1" | C1: "Jan W2" | D1: "Jan W3" | E1: "Jan W4" | F1: "Feb W1" | [Continue for all weeks]
```

**Column A: Project Names**
```
A2: =Projects!B2
A3: =Projects!B3
[Copy down]
```

**Conditional Formatting for Gantt Bars:**

Use conditional formatting with custom formula:
```
Range: B2:Z100
Formula for start week highlighting:
=AND(COLUMN()>=WEEKNUM(Projects!$E2, 21)+1, COLUMN()<=WEEKNUM(Projects!$D2, 21)+1)
Format: Blue fill

Formula for completed projects:
=Projects!$F2="✅ Complete"
Format: Green fill

Formula for behind schedule:
=Projects!$F2="🔴 Behind"
Format: Red fill
```

### Alternative: Use Built-in Gantt
Google Sheets → Insert → Chart → Gantt (if available)
Or use a Gantt chart template add-on.

---

## 👥 TAB 5: TEAM

### Column Headers (Row 1):
```
A1: "Team Member"
B1: "Role"
C1: "Email"
D1: "Active Projects"
E1: "Active Tasks"
F1: "Overdue Tasks"
G1: "Workload"
H1: "Availability"
I1: "Notes"
```

### Sample Data:
```
A2: "Sarah Johnson"       | B2: "Project Manager"  | C2: "sarah@company.com" | D2: =COUNTUNIQUE(FILTER(Projects!$B:$B, Projects!$C:$C=A2))  | E2: =COUNTIF(Tasks!$D:$D, A2)  | F2: =COUNTIFS(Tasks!$D:$D, A2, Tasks!$F:$F, "<>Complete", Tasks!$E:$E, "<"&TODAY())  | G2: =IF(E2>10, "🔴 High", IF(E2>5, "🟡 Medium", "🟢 Low"))  | H2: "Available"
A3: "Mike Chen"           | B3: "Developer"        | C3: "mike@company.com"  | [Same pattern]
A4: "Emma Davis"          | B4: "Designer"         | C4: "emma@company.com"  | [Same pattern]
```

### Workload Calculation:
```
G2 Formula:
=IF(E2>15, "🔴 Overloaded", IF(E2>8, "🟡 Busy", IF(E2>3, "🟢 Normal", "⚪ Light")))
```

### Availability:
```
H2: Dropdown list:
- Available
- Limited (50%)
- On Leave
- Off Project
```

---

## 💰 TAB 6: BUDGET

### Column Headers (Row 1):
```
A1: "Project"
B1: "Budget Allocated"
C1: "Spent to Date"
C1: "Remaining"
D1: "% Used"
E1: "Status"
F1: "Estimated Final Cost"
G1: "Variance"
```

### Sample Data & Formulas:
```
A2: "Website Redesign"     | B2: 15000  | C2: 11250  | D2: =B2-C2  | E2: =C2/B2  | F2: =IF(I2>0, C2/I2*B2, C2)  | G2: =B2-F2
                           |          |          |           | Format: % |          |
                           |          |          |           | E2: =IF(E2>1, "⚠️ Over", IF(E2>0.8, "⚡ Near", "✅ OK"))
```

### Expense Tracking Sub-table:
```
Starting Row 20:
A20: "Date"               | B20: "Project"      | C20: "Category"    | D20: "Description"    | E20: "Amount"
A21: 01/15/2026          | B21: "Website Redesign" | C21: "Development" | D21: "Frontend Dev"   | E21: 5000
A22: 02/01/2026          | B22: "Website Redesign" | C22: "Design"     | D22: "UI/UX Design"   | E22: 3500
A23: 02/15/2026          | B23: "Website Redesign" | C23: "Development" | D23: "Backend Dev"    | E33: 2750
```

### Budget Categories:
```
- Development
- Design
- Project Management
- Software/Tools
- Marketing
- Content
- Testing/QA
- Contingency
```

### Summary Section:
```
I20: "Budget Summary"
I21: "Total Budget:"        | J21: =SUM(B2:B100)
I22: "Total Spent:"         | J22: =SUM(C2:C100)
I23: "Total Remaining:"     | J23: =J21-J22
I24: "Overall % Used:"      | J24: =J22/J21
I25: "Projects Over Budget:"| J25: =COUNTIF(E2:E100, "⚠️ Over")
```

---

## 📝 TAB 7: MEETING NOTES

### Column Headers (Row 1):
```
A1: "Meeting ID"
B1: "Date"
C1: "Project"
D1: "Meeting Type"
E1: "Attendees"
F1: "Agenda"
G1: "Notes"
H1: "Action Items"
I1: "Next Meeting"
```

### Data Validation:

**Column D (Meeting Type):**
```
List:
- Kickoff
- Status Update
- Sprint Planning
- Sprint Review
- Retrospective
- Client Check-in
- Design Review
- Technical Review
- Other
```

### Sample Data:
```
A2: MTG-001              | B2: 03/15/2026  | C2: "Website Redesign"  | D2: "Status Update"  | E2: "Sarah, Mike, Emma"  | F2: "Review progress, discuss blockers"  | G2: "Homepage approved. Backend delayed by 2 days."  | H2: "1. Mike to complete API by 03/18\n2. Emma to finalize icons"  | I2: 03/22/2026
```

### Meeting Notes Template (separate area or linked doc):
```
## Meeting: {{Meeting Title}}
**Date:** {{Date}}
**Project:** {{Project}}
**Attendees:** {{Attendees}}

---

## 📋 Agenda
1. 
2. 
3. 

---

## 📝 Discussion Notes



---

## ✅ Decisions Made
- 
- 
- 

---

## 🎯 Action Items
| Task | Owner | Due Date | Status |
|------|-------|----------|--------|
| | | | |

---

## 📅 Next Meeting
**Date:** 
**Agenda Items:** 
```

---

## 📊 TAB 8: REPORTS

### Weekly Status Report Template:
```
A1: "Weekly Status Report"
A2: "Week of: " & TEXT(TODAY()-WEEKDAY(TODAY(),2)+1, "mmmm dd, yyyy")

A4: "EXECUTIVE SUMMARY"
A5: "Projects On Track:" & COUNTIF(Projects!F:F, "On Track")
A6: "Projects At Risk:" & COUNTIF(Projects!F:F, "At Risk")
A7: "Projects Behind:" & COUNTIF(Projects!F:F, "Behind")
A8: "Tasks Completed This Week:" & COUNTIFS(Tasks!F:F, "Complete", Tasks!E:E, ">="&TODAY()-7)

A10: "KEY ACCOMPLISHMENTS"
A11: [List projects that moved to Complete this week]
=FILTER(Projects!B:B, Projects!F:F="Complete", Projects!D:D>=TODAY()-7)

A13: "BLOCKERS & RISKS"
A14: [List projects that are Behind or At Risk]
=FILTER(Projects!B:B & " - " & Projects!L:L, OR(Projects!F:F="Behind", Projects!F:F="At Risk"))

A16: "UPCOMING DEADLINES (Next 2 Weeks)"
A17: =FILTER(Projects!B:B & " - " & TEXT(Projects!D:D, "mmm dd"), Projects!D:D>=TODAY(), Projects!D:D<=TODAY()+14)

A19: "TEAM WORKLOAD"
A20: =UNIQUE(Tasks!D:D) & ": " & COUNTIF(Tasks!D:D, UNIQUE(Tasks!D:D)) & " active tasks"
```

### Monthly Report Template:
```
A25: "MONTHLY REPORT"
A26: "Month: " & TEXT(TODAY(), "mmmm yyyy")

A28: "Projects Started:" & COUNTIFS(Projects!E:E, ">="&EOMONTH(TODAY(),-1)+1, Projects!E:E, "<="&EOMONTH(TODAY(),0))
A29: "Projects Completed:" & COUNTIFS(Projects!F:F, "Complete", Projects!D:D, ">="&EOMONTH(TODAY(),-1)+1, Projects!D:D, "<="&EOMONTH(TODAY(),0))
A30: "Total Tasks Completed:" & COUNTIFS(Tasks!F:F, "Complete", Tasks!E:E, ">="&EOMONTH(TODAY(),-1)+1, Tasks!E:E, "<="&EOMONTH(TODAY(),0))
A31: "Budget Utilization:" & SUM(Projects!G:G) & " total"
```

---

## ⚙️ AUTOMATION (Google Apps Script)

### Auto-Email Reminders Script:
```javascript
function sendTaskReminders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tasks");
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    var task = data[i][2]; // Task Name
    var assignee = data[i][3]; // Assigned To
    var dueDate = data[i][4]; // Due Date
    var status = data[i][5]; // Status
    
    if (status !== "Complete" && dueDate !== "") {
      var daysUntilDue = (new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24);
      
      if (daysUntilDue === 1) {
        // Send reminder email
        MailApp.sendEmail({
          to: assignee,
          subject: "Task Due Tomorrow: " + task,
          body: "Reminder: Task '" + task + "' is due tomorrow."
        });
      }
    }
  }
}

// Set up daily trigger in Apps Script
```

### Auto-Update Status Script:
```javascript
function updateProjectStatus() {
  var projSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Projects");
  var taskSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tasks");
  
  // Update project completion % based on tasks
  // (Formula already handles this, but can add custom logic)
}
```

---

## 🔗 INTEGRATIONS

### Connect to Google Calendar:
1. Create calendar for each project
2. Add deadlines as events
3. Set reminders

### Connect to Slack:
1. Use Zapier or Make.com
2. Trigger: New task assigned
3. Action: Send Slack message to assignee

### Connect to Gmail:
1. Use Google Apps Script
2. Send automated status reports
3. Notify on deadline changes

---

## 📋 VIEWS TO CREATE

### Saved Filter Views:
1. **My Tasks**
   - Filter: Assigned To = ME()
   - Sort: Due Date (ascending)

2. **Overdue Tasks**
   - Filter: Due Date < TODAY() AND Status <> Complete
   - Sort: Due Date (ascending)

3. **This Week**
   - Filter: Due Date between TODAY() and TODAY()+7
   - Sort: Priority

4. **High Priority Projects**
   - Filter: Priority = Critical OR Priority = High
   - Sort: Deadline

5. **Recently Completed**
   - Filter: Status = Complete
   - Sort: Date Completed (descending)

---

## 🎨 FORMATTING SPECIFICATIONS

### Colors:
- **Headers:** Dark blue (#1E3A8A), white text, bold
- **Status - On Track:** Green background (#DCFCE7)
- **Status - At Risk:** Yellow background (#FEF9C3)
- **Status - Behind:** Red background (#FEE2E2)
- **Status - Complete:** Gray background (#F3F4F6), strikethrough
- **Alternating Rows:** Light gray (#F9FAFB)

### Fonts:
- **Headers:** Arial Bold, 12pt
- **Body:** Arial Regular, 11pt
- **Numbers:** Consistent decimal places

### Column Widths:
- **A (ID):** 12
- **B (Name/Project):** 25
- **C (Person/Manager):** 18
- **D (Dates):** 14
- **E-F (Status/Progress):** 15
- **G-H (Numbers):** 12
- **I-L (Notes):** 30

---

## 📤 SHARING SETTINGS

### For Client Access:
1. Share Dashboard tab only (view only)
2. Hide internal tabs (Team, Budget details)
3. Set expiration date if needed

### For Team Access:
1. Share all tabs (edit access)
2. Protect formula cells
3. Enable notifications

### For Stakeholders:
1. Share Dashboard + Reports tabs
2. View-only access
3. Weekly email summary

---

**Template Version:** 1.0  
**Compatible:** Google Sheets (all versions)  
**Last Updated:** March 2026  
**Share Link Format:** https://docs.google.com/spreadsheets/d/[ID]/copy
