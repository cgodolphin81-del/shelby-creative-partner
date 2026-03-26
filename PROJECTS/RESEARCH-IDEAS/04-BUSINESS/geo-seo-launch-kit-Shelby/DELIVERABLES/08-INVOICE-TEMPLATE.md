# INVOICE TEMPLATE
## Stripe/QuickBooks/PayPal Ready

---

## INVOICE

**Invoice Number:** INV-{{YYYY}}-{{XXXX}}  
**Date:** {{Month Day, Year}}  
**Due Date:** {{Month Day, Year}} (Net-7)

---

### FROM

**{{Your Company Name}}**  
{{Your Street Address}}  
{{City, State ZIP}}  
{{Your Email}}  
{{Your Phone}}  
{{Your Website}}  

**Tax ID / EIN:** {{XX-XXXXXXX}}

---

### BILL TO

**{{Client Company Name}}**  
Attn: {{Contact Name}}  
{{Client Street Address}}  
{{City, State ZIP}}  
{{Client Email}}  

**PO Number:** {{PO-XXXX}} (if applicable)

---

## SERVICES

| Description | Quantity | Unit Price | Amount |
|-------------|----------|------------|--------|
| **GEO SEO Service — {{Package Name}}** | | | |
| {{Month Year}} Monthly Retainer | 1 | ${{X,XXX}}.00 | ${{X,XXX}}.00 |
| Service Period: {{MM/DD/YYYY}} - {{MM/DD/YYYY}} | | | |
| | | | |
| **Setup Fee** (if applicable) | | | |
| Initial Setup & Onboarding | 1 | ${{X,XXX}}.00 | ${{X,XXX}}.00 |
| One-time fee for account setup, audit, and implementation | | | |
| | | | |
| **Additional Services** (if applicable) | | | |
| {{Service Description}} | {{X}} hours | ${{XXX}}.00/hr | ${{X,XXX}}.00 |
| {{Service Description}} | 1 | ${{XXX}}.00 | ${{XXX}}.00 |
| | | | |
| | | | |
| **SUBTOTAL** | | | **${{XX,XXX}}.00** |
| | | | |
| Discount | | | -${{XXX}}.00 |
| | | | |
| **TOTAL DUE** | | | **${{XX,XXX}}.00** |

---

## PAYMENT INFORMATION

**Payment Due:** {{Month Day, Year}} (7 days from invoice date)

**Payment Methods:**

### Credit Card (Recommended)
**Pay Online:** {{Stripe Payment Link}}

### ACH / Bank Transfer
**Bank Name:** {{Your Bank}}  
**Account Name:** {{Your Company Name}}  
**Account Number:** {{XXXXXXXXXX}}  
**Routing Number:** {{XXXXXXXXX}}  
**Account Type:** Checking

### Wire Transfer
**Bank Name:** {{Your Bank}}  
**Account Name:** {{Your Company Name}}  
**Account Number:** {{XXXXXXXXXX}}  
**Routing/ABA:** {{XXXXXXXXX}}  
**SWIFT Code:** {{XXXXXXXX}} (international)

### Check
**Mail to:**  
{{Your Company Name}}  
{{Your Address}}  
{{City, State ZIP}}

---

## TERMS AND CONDITIONS

**Payment Terms:** Net-7 (payment due within 7 days)

**Late Fees:** 1.5% per month (18% APR) on balances 8+ days overdue

**Service Suspension:** Services may be paused for accounts 15+ days overdue

**Questions?** Contact {{billing@yourcompany.com}} or {{Your Phone}}

---

## INVOICE NOTES

**Month {{X}} of {{Y}} month agreement**

**Services Included This Month:**
- ✅ AI visibility monitoring and reporting
- ✅ {{X}} pages optimized for AI citation
- ✅ {{X}} new citations built
- ✅ Monthly strategy call(s)
- ✅ Monthly report delivery

**Next Invoice Date:** {{Month Day, Year}}

**Account Manager:** {{Name}} — {{Email}}

---

## EMAIL TEMPLATE

**Subject:** Invoice #{{INV-XXXX}} from {{Your Company}} — Due {{Date}}

**Body:**

Hi {{Client Name}},

Your invoice for {{Month Year}} GEO SEO services is ready.

**Invoice Summary:**
- Invoice #: {{INV-XXXX}}
- Amount Due: ${{XX,XXX}}.00
- Due Date: {{Month Day, Year}}

**Pay Online:** {{Payment Link}}

This month's highlights:
- GEO Score: {{XX}} → {{XX}} (+{{X}} points)
- New citations: +{{XX}}
- AI leads: {{X}}

Your monthly report is available in the client portal: {{Portal Link}}

Let me know if you'd like to schedule a review call.

Thanks for your business!

Best,  
{{Your Name}}  
{{Your Title}}  
{{Your Company}}  
{{Phone}}

---

## STRIPE SETUP

### Create Product
1. Go to Stripe Dashboard → Products
2. Click "Add product"
3. Name: "GEO SEO — {{Package Name}}"
4. Description: "Monthly GEO SEO retainer including {{X}} pages, {{X}} citations, monitoring, reporting"
5. Pricing: ${{X,XXX}}.00 USD
6. Billing: Recurring, monthly
7. Save

### Create Customer
1. Go to Customers → Add customer
2. Enter client details
3. Add payment method
4. Save

### Create Subscription
1. Go to Subscriptions → Create
2. Select customer
3. Select product
4. Start date: {{Date}}
5. Billing cycle: Monthly
6. Auto-charge: Yes
7. Create subscription

### Customize Invoice
1. Go to Settings → Branding
2. Upload logo
3. Set colors
4. Add payment terms text
5. Save

---

## QUICKBOOKS SETUP

### Create Invoice Template
1. Go to Sales → Invoices
2. Click "Customize"
3. Add logo
4. Set colors
5. Add payment terms
6. Save as "GEO SEO Invoice"

### Create Recurring Invoice
1. Create invoice as above
2. Click "Make recurring"
3. Name: "{{Client}} — GEO SEO Monthly"
4. Interval: Monthly
5. Start date: {{Date}}
6. Auto-send: Yes
7. Auto-post: No (review first)
8. Save template

---

## INVOICE TRACKING LOG

| Invoice # | Date | Amount | Due Date | Paid Date | Status |
|-----------|------|--------|----------|-----------|--------|
| INV-2026-0001 | {{Date}} | ${{X,XXX}} | {{Date}} | {{Date}} | ✅ Paid |
| INV-2026-0002 | {{Date}} | ${{X,XXX}} | {{Date}} | — | ⏳ Pending |
| INV-2026-0003 | {{Date}} | ${{X,XXX}} | {{Date}} | — | ⏳ Pending |

---

## COLLECTIONS PROCESS

### Day 1 (Invoice Sent)
- Send invoice via email
- Add to client portal

### Day 3 (Reminder)
- Automated: "Payment due in 4 days"

### Day 7 (Due Date)
- Automated: "Payment due today"
- Check auto-charge status

### Day 8 (Late)
- Personal email from account manager
- Apply late fee per policy

### Day 15 (2 Weeks Late)
- Phone call to client
- Warning about service suspension

### Day 30 (1 Month Late)
- Services suspended
- Final notice before collections

---

## CREDIT MEMO TEMPLATE

### CREDIT MEMO

**Credit Memo Number:** CM-{{YYYY}}-{{XXXX}}  
**Date:** {{Month Day, Year}}  
**Original Invoice:** INV-{{YYYY}}-{{XXXX}}

| Description | Amount |
|-------------|--------|
| Credit for {{reason}} | ${{XXX}}.00 |
| **TOTAL CREDIT** | **${{XXX}}.00** |

**Applied To:** {{Future invoice / Refund issued}}  
**Reason:** {{Refund reason}}

---

*Invoice Template v1.0 | March 21, 2026*
