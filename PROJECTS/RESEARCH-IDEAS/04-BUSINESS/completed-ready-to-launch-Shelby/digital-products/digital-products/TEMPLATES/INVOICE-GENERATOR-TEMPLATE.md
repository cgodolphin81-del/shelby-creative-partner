# Invoice Generator - Google Sheets Build Instructions

**Create this automated invoice generator in Google Sheets.**

---

## 📄 TAB 1: INVOICE TEMPLATE

### Header Section (Rows 1-10):

| Cell | Content | Formatting |
|------|---------|------------|
| A1 | [Your Company Logo] | Insert image |
| D1 | INVOICE | Bold, 28pt, Dark Blue |
| A3 | [Your Company Name] | Bold, 16pt |
| A4 | [Your Street Address] | Regular |
| A5 | [City, State ZIP] | Regular |
| A6 | [Email] | Regular |
| A7 | [Phone] | Regular |
| D3 | Invoice #: | Bold |
| E3 | [INV-001] | Input/Formula |
| D4 | Date: | Bold |
| E4 | `=TODAY()` | Date format |
| D5 | Due Date: | Bold |
| E5 | `=E4+30` | Date format |
| D6 | Status: | Bold |
| E6 | [Dropdown: Draft, Sent, Paid, Overdue] | Data validation |

### Bill To Section (Rows 10-15):

| Cell | Content |
|------|---------|
| A10 | **BILL TO:** |
| A11 | [Client Company Name] |
| A12 | [Client Contact Name] |
| A13 | [Client Street Address] |
| A14 | [City, State ZIP] |
| A15 | [Client Email] |

### Invoice Items Table (Rows 17-30):

| Cell | Header | Width |
|------|--------|-------|
| A17 | **Description** | 400px |
| B17 | **Quantity** | 80px |
| C17 | **Rate** | 100px |
| D17 | **Amount** | 120px |

### Line Items (Rows 18-27):

| Cell | Content | Formula |
|------|---------|---------|
| A18 | [Service/Product description] | Input |
| B18 | [Quantity] | Input |
| C18 | [Rate] | Input |
| D18 | `=B18*C18` | Formula |
| [Copy down for rows 19-27] | | |

### Totals Section (Rows 28-35):

| Cell | Label | Formula | Formatting |
|------|-------|---------|------------|
| C28 | Subtotal: | `=SUM(D18:D27)` | Currency |
| C29 | Discount: | [Input or 0] | Currency |
| C30 | Tax Rate: | [Input, e.g., 8.5%] | Percentage |
| C31 | Tax Amount: | `=(C28-C29)*C30` | Currency |
| C32 | Shipping: | [Input or 0] | Currency |
| C33 | **TOTAL:** | `=C28-C29+C31+C32` | **Bold, Large, Currency** |

### Payment Terms (Rows 36-42):

| Cell | Content |
|------|---------|
| A36 | **PAYMENT TERMS:** |
| A37 | Payment due within 30 days of invoice date. |
| A38 | Please make checks payable to: [Your Company Name] |
| A39 | Bank Transfer: [Bank Name, Account #, Routing #] |
| A40 | Online Payment: [Payment Link] |
| A42 | **NOTES:** |
| A43 | [Any additional notes or thank you message] |

### Footer (Rows 45-48):

| Cell | Content |
|------|---------|
| A45 | Thank you for your business! |
| A46 | Questions? Contact us at [email] or [phone] |
| A48 | Page 1 of 1 |

---

## 👥 TAB 2: CLIENT DATABASE

### Column Headers (Row 1):

| Cell | Header | Format |
|------|--------|--------|
| A1 | Client ID | Text |
| B1 | Company Name | Text |
| C1 | Contact Name | Text |
| D1 | Email | Email |
| E1 | Phone | Phone |
| F1 | Street Address | Text |
| G1 | City | Text |
| H1 | State | Text |
| I1 | ZIP | Text |
| J1 | Country | Text |
| K1 | Tax ID/VAT | Text |
| L1 | Payment Terms | Number |
| M1 | Currency | Text |
| N1 | Status | Text |

### Sample Data:

| Cell | Client 1 | Client 2 |
|------|----------|----------|
| A2 | CLI-001 | CLI-002 |
| B2 | Acme Corporation | StartupXYZ |
| C2 | John Smith | Jane Doe |
| D2 | john@acme.com | jane@startupxyz.com |
| E2 | 555-0100 | 555-0200 |
| F2 | 123 Business Ave | 456 Innovation Dr |
| G2 | New York | San Francisco |
| H2 | NY | CA |
| I2 | 10001 | 94102 |
| J2 | USA | USA |
| K2 | 12-3456789 | 98-7654321 |
| L2 | 30 | 15 |
| M2 | USD | USD |
| N2 | Active | Active |

### Client Lookup Formula (for Invoice Template):

```
=IFERROR(VLOOKUP(E3,Clients!A:N,2,FALSE),"")
```

---

## 📊 TAB 3: INVOICE LOG

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Invoice # |
| B1 | Client |
| C1 | Date Issued |
| D1 | Due Date |
| E1 | Amount |
| F1 | Amount Paid |
| G1 | Balance |
| H1 | Status |
| I1 | Date Paid |
| J1 | Payment Method |
| K1 | Notes |

### Sample Data with Formulas:

| Cell | Content | Formula |
|------|---------|---------|
| A2 | INV-001 | Input |
| B2 | Acme Corporation | Input/VLOOKUP |
| C2 | 03/01/2026 | Input |
| D2 | `=C2+30` | Formula |
| E2 | 5000 | Input |
| F2 | 5000 | Input |
| G2 | `=E2-F2` | Formula |
| H2 | `=IF(G2=0,"Paid",IF(TODAY()>D2,"Overdue","Sent"))` | Formula |
| I2 | 03/25/2026 | Input |
| J2 | Bank Transfer | Input |
| K2 | Paid on time | Input |

### Summary Metrics (Top of Sheet):

| Cell | Metric | Formula |
|------|--------|---------|
| M1 | **SUMMARY** | |
| M2 | Total Invoiced: | `=SUM(E:E)` |
| M3 | Total Paid: | `=SUM(F:F)` |
| M4 | Outstanding: | `=SUM(G:G)` |
| M5 | Overdue: | `=SUMIF(H:H,"Overdue",G:G)` |
| M6 | Invoices Sent: | `=COUNTA(A:A)-1` |
| M7 | Invoices Paid: | `=COUNTIF(H:H,"Paid")` |
| M8 | Avg Days to Pay: | `=AVERAGE(I:I-C:C)` |

---

## 💰 TAB 4: SERVICES/PRICING

### Column Headers (Row 1):

| Cell | Header |
|------|--------|
| A1 | Service ID |
| B1 | Service Name |
| C1 | Description |
| D1 | Unit |
| E1 | Rate |
| F1 | Category |
| G1 | Taxable |
| H1 | Active |

### Sample Services:

| Cell | Service 1 | Service 2 | Service 3 |
|------|-----------|-----------|-----------|
| A2 | SVC-001 | SVC-002 | SVC-003 |
| B2 | Consulting | Web Design | SEO Package |
| C2 | Strategy consulting | Website design | Monthly SEO |
| D2 | Hour | Project | Month |
| E2 | 150 | 5000 | 2000 |
| F2 | Consulting | Design | Marketing |
| G2 | Yes | Yes | Yes |
| H2 | Yes | Yes | Yes |

### Quick Select for Invoice:

Create a data validation dropdown in the invoice template that pulls from this list:
```
=Services!B2:B100
```

---

## 📈 TAB 5: REPORTS

### Revenue by Month:

| Cell | Month | Invoiced | Paid | Outstanding |
|------|-------|----------|------|-------------|
| A2 | January | `=SUMIFS(Log!E:E,Log!C:C,">="&DATE(2026,1,1),Log!C:C,"<="&DATE(2026,1,31))` | `=SUMIFS(Log!F:F,Log!C:C,">="&DATE(2026,1,1),Log!C:C,"<="&DATE(2026,1,31))` | `=B2-C2` |
| A3 | February | [Same pattern] | [Same pattern] | [Same pattern] |
| [Continue for all months] | | | | |

### Revenue by Client:

| Cell | Client | Total Invoiced | Total Paid | Outstanding | Invoices |
|------|--------|----------------|------------|-------------|----------|
| A15 | Acme Corp | `=SUMIF(Log!B:B,A15,Log!E:E)` | `=SUMIF(Log!B:B,A15,Log!F:F)` | `=B15-C15` | `=COUNTIF(Log!B:B,A15)` |
| A16 | [Next client] | [Copy formulas] | [Copy formulas] | [Copy formulas] | [Copy formulas] |

### Aging Report:

| Cell | Period | Count | Amount |
|------|--------|-------|--------|
| A30 | Current (Not Due) | `=COUNTIFS(Log!H:H,"Sent",Log!D:D,">="&TODAY())` | `=SUMIFS(Log!G:G,Log!H:H,"Sent",Log!D:D,">="&TODAY())` |
| A31 | 1-30 Days Overdue | `=COUNTIFS(Log!H:H,"Overdue",Log!D:D,"<"&TODAY(),Log!D:D,">="&TODAY()-30)` | `=SUMIFS(Log!G:G,Log!H:H,"Overdue",Log!D:D,"<"&TODAY(),Log!D:D,">="&TODAY()-30)` |
| A32 | 31-60 Days Overdue | [Same pattern] | [Same pattern] |
| A33 | 61-90 Days Overdue | [Same pattern] | [Same pattern] |
| A34 | 90+ Days Overdue | [Same pattern] | [Same pattern] |

### Charts to Create:
1. **Revenue Trend** - Monthly invoiced vs. paid
2. **Revenue by Client** - Pie chart
3. **Aging Report** - Bar chart
4. **Payment Status** - Pie chart (Paid, Sent, Overdue)

---

## ⚙️ TAB 6: SETTINGS

### Company Information:

| Cell | Field | Value |
|------|-------|-------|
| A2 | Company Name: | [Your Company] |
| A3 | Street Address: | [Address] |
| A4 | City, State ZIP: | [City, State ZIP] |
| A5 | Email: | [Email] |
| A6 | Phone: | [Phone] |
| A7 | Website: | [Website] |
| A8 | Logo URL: | [Image URL] |
| A9 | Tax ID/VAT: | [Tax ID] |

### Invoice Settings:

| Cell | Setting | Value |
|------|---------|-------|
| A12 | Invoice Prefix: | INV- |
| A13 | Starting Number: | 001 |
| A14 | Default Payment Terms: | 30 |
| A15 | Default Tax Rate: | 8.5% |
| A16 | Currency: | USD |
| A17 | Late Fee %: | 1.5% |
| A18 | Late Fee After (Days): | 30 |

### Payment Information:

| Cell | Field | Value |
|------|-------|-------|
| A21 | Bank Name: | [Bank Name] |
| A22 | Account Name: | [Account Name] |
| A23 | Account Number: | [Account #] |
| A24 | Routing Number: | [Routing #] |
| A25 | SWIFT/BIC: | [SWIFT] |
| A27 | Payment Link: | [Stripe/PayPal link] |
| A28 | Payment Terms Text: | Payment due within 30 days. |

### Auto-Increment Formula (for Invoice Number):

```
=Settings!A12 & TEXT(MAX(Log!A:A)+1,"000")
```

---

## 📤 TAB 7: PDF EXPORT INSTRUCTIONS

### How to Export as PDF:

**Method 1: Google Sheets Built-in**
```
1. Open the Invoice Template tab
2. Click File → Download → PDF
3. Adjust settings:
   - Paper size: Letter
   - Scale: Fit to width
   - Margins: Narrow
4. Click Download
```

**Method 2: Print to PDF**
```
1. Press Ctrl+P (or Cmd+P on Mac)
2. Select "Save as PDF" as destination
3. Adjust layout to Landscape if needed
4. Click Save
```

**Method 3: Apps Script Automation**
```javascript
function exportInvoiceAsPDF() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var invoiceSheet = spreadsheet.getSheetByName("Invoice Template");
  
  var url = 'https://docs.google.com/spreadsheets/d/' + 
            spreadsheet.getId() + '/export?exportFormat=pdf&format=pdf' +
            '&gid=' + invoiceSheet.getSheetId() +
            '&size=Letter&portrait=false' +
            '&fitw=true&sheetnames=false&printtitle=false' +
            '&pagenumbers=false&gridlines=false' +
            '&horizontal_alignment=CENTER&vertical_alignment=TOP';
  
  var token = ScriptApp.getOAuthToken();
  var response = UrlFetchApp.fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  
  // Save to Google Drive
  var blob = response.getBlob();
  blob.setName('Invoice-' + invoiceSheet.getRange("E3").getValue() + '.pdf');
  DriveApp.createFile(blob);
}
```

### Email Invoice Template:

```
Subject: Invoice #[INV-001] from [Your Company]

Hi [Client Name],

Please find attached invoice #[INV-001] for [services/products].

Invoice Details:
- Amount: $[Total]
- Due Date: [Due Date]
- Payment Terms: [Terms]

You can pay online here: [Payment Link]

Or via bank transfer:
Bank: [Bank Name]
Account: [Account #]
Routing: [Routing #]

Please let me know if you have any questions.

Thank you for your business!

[Your Name]
[Your Company]
[Phone]
[Email]
```

---

## 🔄 AUTOMATION SETUP

### Apps Script for Auto-Reminders:

```javascript
function sendPaymentReminders() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var logSheet = spreadsheet.getSheetByName("Invoice Log");
  var settingsSheet = spreadsheet.getSheetByName("Settings");
  
  var today = new Date();
  var data = logSheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    var invoiceNum = data[i][0];
    var client = data[i][1];
    var dueDate = new Date(data[i][3]);
    var balance = data[i][6];
    var status = data[i][7];
    var clientEmail = getClientEmail(client); // Custom function
    
    if (status === "Overdue" && balance > 0) {
      var daysOverdue = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));
      
      if (daysOverdue === 7) {
        sendReminderEmail(clientEmail, invoiceNum, balance, daysOverdue);
      } else if (daysOverdue === 30) {
        sendFinalNotice(clientEmail, invoiceNum, balance, daysOverdue);
      }
    }
  }
}

function sendReminderEmail(email, invoiceNum, balance, daysOverdue) {
  var subject = "Payment Reminder: Invoice " + invoiceNum;
  var body = `
    Hi,
    
    This is a friendly reminder that invoice ${invoiceNum} is ${daysOverdue} days overdue.
    
    Amount Due: $${balance}
    
    Please submit payment at your earliest convenience.
    
    Pay online: [Payment Link]
    
    Thank you!
  `;
  
  MailApp.sendEmail(email, subject, body);
}

// Create daily trigger
function createReminderTrigger() {
  ScriptApp.newTrigger('sendPaymentReminders')
    .timeBased()
    .everyDays(1)
    .atHour(9)
    .create();
}
```

---

## ✅ BUILD CHECKLIST

- [ ] Create all 7 tabs with exact names
- [ ] Set up company information in Settings
- [ ] Add client database entries
- [ ] Configure services/pricing
- [ ] Test invoice calculations
- [ ] Set up data validation dropdowns
- [ ] Create PDF export workflow
- [ ] Set up email templates
- [ ] Configure payment reminder automation
- [ ] Test with sample invoice
- [ ] Share with appropriate permissions

---

## 🎨 FORMATTING SPECIFICATIONS

### Colors:
- **Header:** Dark blue (#1E3A8A), white text
- **Table Headers:** Light blue (#DBEAFE), dark text
- **Totals:** Bold, larger font
- **Paid Status:** Green
- **Overdue Status:** Red

### Fonts:
- **Company Name:** Arial Bold, 16pt
- **Headers:** Arial Bold, 12pt
- **Body:** Arial Regular, 11pt
- **Totals:** Arial Bold, 14pt

---

**Template Version:** 1.0
**Compatible:** Google Sheets (all versions)
**Created:** March 2026
**Support:** [Your support email]
