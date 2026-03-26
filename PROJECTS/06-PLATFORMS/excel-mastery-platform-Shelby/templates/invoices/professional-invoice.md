# Professional Invoice Template

## Overview
Clean, professional invoice template with automatic calculations, tax support, and payment tracking.

## Structure

### Invoice Header

```
╔══════════════════════════════════════════════════════════╗
║                        INVOICE                            ║
║                                                           ║
║  Your Company Name              Invoice #:    INV-2026-001║
║  123 Business Street            Date:         2026-03-22  ║
║  City, State 12345              Due Date:     2026-04-05  ║
║  Phone: (555) 123-4567          Terms:        Net 14      ║
║  Email: billing@company.com                               ║
║  Website: www.company.com                                 ║
╠══════════════════════════════════════════════════════════╣
║  BILL TO:                                               ║
║  Client Company Name                                     ║
║  456 Client Avenue                                       ║
║  Client City, State 67890                                ║
║  Contact: John Smith                                     ║
║  Email: john@client.com                                  ║
╚══════════════════════════════════════════════════════════╝
```

### Line Items Table

| # | Description | Quantity | Unit Price | Discount | Amount |
|---|-------------|----------|------------|----------|--------|
| 1 | Web Design Services | 40 hrs | $75.00 | 0% | $3,000.00 |
| 2 | Development Services | 60 hrs | $85.00 | 0% | $5,100.00 |
| 3 | Project Management | 20 hrs | $65.00 | 0% | $1,300.00 |
| 4 | Hosting (Annual) | 1 | $240.00 | 10% | $216.00 |
| 5 | Domain Registration | 2 | $15.00 | 0% | $30.00 |
| | | | | | |
| | | | **Subtotal:** | | **$9,646.00** |
| | | | **Tax (8%):** | | **$771.68** |
| | | | **Shipping:** | | **$0.00** |
| | | | **TOTAL:** | | **$10,417.68** |

### Key Formulas

```excel
// Line Item Amount (Column F)
=(C2*D2)*(1-E2)

// Subtotal
=SUM(F2:F100)

// Tax Amount
=F101*TAX_RATE

// Total Due
=F101+F102+F103

// Days Outstanding
=IF(G2>0,TODAY()-G2,0)

// Status (Paid/Unpaid/Overdue)
=IF(H2="Paid","Paid",IF(TODAY()>D2,"Overdue","Unpaid"))
```

### Payment Terms Section

```
╔══════════════════════════════════════════════════════════╗
║  PAYMENT INFORMATION                                     ║
║                                                           ║
║  Bank Transfer:                                          ║
║  Bank Name: First National Bank                          ║
║  Account Name: Your Company LLC                          ║
║  Account Number: 1234567890                              ║
║  Routing Number: 987654321                               ║
║  SWIFT: FNBAUS44                                         ║
║                                                           ║
║  Credit Card:                                            ║
║  Pay online at: www.company.com/pay/INV-2026-001        ║
║                                                           ║
║  Check:                                                   ║
║  Make payable to: Your Company LLC                       ║
║  Mail to: 123 Business Street, City, State 12345        ║
║                                                           ║
║  Late Fee: 1.5% per month on overdue balances           ║
╚══════════════════════════════════════════════════════════╝
```

### Payment Tracking Sheet

| Invoice # | Client | Amount | Date Sent | Due Date | Date Paid | Status | Days Overdue |
|-----------|--------|--------|-----------|----------|-----------|--------|--------------|
| INV-2026-001 | Client Co | $10,417.68 | 2026-03-22 | 2026-04-05 | | Unpaid | 0 |
| INV-2026-002 | Another Inc | $5,250.00 | 2026-03-15 | 2026-03-29 | 2026-03-28 | Paid | 0 |

### Invoice Dashboard

| Metric | Value |
|--------|-------|
| Total Outstanding | $10,417.68 |
| Over 30 Days | $0.00 |
| Over 60 Days | $0.00 |
| Over 90 Days | $0.00 |
| Monthly Revenue | $15,667.68 |
| Average Days to Pay | 13 |

## Invoice Numbering System

```
Format: INV-YYYY-NNN
Example: INV-2026-001

Where:
- INV = Invoice prefix
- YYYY = Year
- NNN = Sequential number (reset annually)
```

## Automation Features

### Auto-Generate Invoice Number
```excel
="INV-"&YEAR(TODAY())&"-"&TEXT(COUNTA(A:A),"000")
```

### Auto-Calculate Due Date
```excel
=DATE_SENT+TERMS_DAYS
```

### Overdue Alert (Conditional Formatting)
```excel
// Red if overdue
=AND(TODAY()>DueDate,Status<>"Paid")

// Yellow if due within 3 days
=AND(DueDate-TODAY()<=3,DueDate-TODAY()>=0,Status<>"Paid")
```

### Email Reminder Template
```
Subject: Invoice Reminder - INV-2026-001

Dear [Client Name],

This is a friendly reminder that invoice INV-2026-001 
in the amount of $10,417.68 was due on [Due Date].

Please remit payment at your earliest convenience.

View invoice: [Link]
Pay online: [Link]

Thank you for your business!

Best regards,
Your Company
```

## Best Practices

1. **Send invoices immediately** after work completion
2. **Clear payment terms** - specify due date and late fees
3. **Multiple payment options** - make it easy to pay
4. **Follow up systematically** - 3 days before, on due date, 7 days after
5. **Keep records** - maintain invoice log for tax purposes
6. **Professional branding** - consistent look and feel

---

**File Format**: Excel (.xlsx), Google Sheets, PDF
**Difficulty**: Beginner
**Time to Set Up**: 20 minutes
