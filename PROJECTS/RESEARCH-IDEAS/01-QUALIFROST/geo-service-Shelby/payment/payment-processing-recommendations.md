# GEO Service - Payment Processing Recommendations
**Generated:** March 20, 2026  
**Purpose:** Payment infrastructure setup for GEO audit services

---

## Executive Summary

**Recommended Primary:** Stripe  
**Recommended Secondary:** PayPal (for international/enterprise)  
**Setup Time:** 1-2 days  
**Total Cost:** ~$150/month (processing fees vary)

---

## Option 1: Stripe (RECOMMENDED)

### Why Stripe?
- ✅ Best-in-class developer experience
- ✅ Subscription billing built-in
- ✅ Invoice generation
- ✅ Global payments (135+ currencies)
- ✅ Excellent fraud protection
- ✅ Professional checkout experience
- ✅ Easy integration with CRM/accounting

### Pricing
| Fee Type | Rate |
|----------|------|
| Standard processing | 2.9% + $0.30 per transaction |
| International cards | +1.5% |
| Currency conversion | +1% |
| ACH/bank transfer | 0.8% (capped at $5) |
| Chargebacks | $15 |
| Monthly fee | $0 |

### Recommended Setup

#### Products to Configure
1. **GEO Audit (One-Time)** - $500
2. **GEO Starter (Monthly)** - $500/month
3. **GEO Professional (Monthly)** - $3,500/month
4. **GEO Agency (Monthly)** - $8,000/month
5. **Implementation Package (One-Time)** - $2,500-$5,500

#### Stripe Features to Enable
- [x] **Billing** - Subscription management
- [x] **Invoicing** - Professional invoices
- [x] **Payment Links** - Quick checkout pages
- [x] **Customer Portal** - Self-service management
- [x] **Tax** - Automatic sales tax calculation
- [x] **Radar** - Fraud prevention
- [x] **Connect** - For future white-label reselling

### Setup Steps

1. **Create Account** (15 min)
   - Go to stripe.com
   - Business type: LLC/Sole Proprietorship
   - Have EIN/SSN ready

2. **Verify Business** (1-2 days)
   - Upload business documents
   - Connect bank account
   - Wait for approval

3. **Configure Products** (30 min)
   - Create product catalog
   - Set up recurring prices
   - Configure tax settings

4. **Create Payment Links** (30 min)
   - One-time audit checkout
   - Subscription checkout pages
   - Add to website/email signatures

5. **Set Up Invoicing** (30 min)
   - Customize invoice template
   - Add logo and branding
   - Configure auto-reminders

6. **Integrate Tools** (1-2 hours)
   - Connect to accounting (QuickBooks/Xero)
   - Connect to CRM (HubSpot/Pipedrive)
   - Set up webhooks for notifications

### Pros
- Professional appearance
- Recurring billing automation
- Excellent API for future automation
- Great mobile experience
- Strong fraud protection
- Instant payouts available (1% fee)

### Cons
- Slightly higher fees than some alternatives
- Account can be frozen for unusual activity (rare)
- Customer support can be slow for small accounts

---

## Option 2: PayPal

### Why PayPal?
- ✅ Universal recognition
- ✅ Easy for international clients
- ✅ Buyer protection (builds trust)
- ✅ No setup fees
- ✅ Quick to start

### Pricing
| Fee Type | Rate |
|----------|------|
| Standard processing | 2.99% + $0.49 per transaction |
| International | +4.4% + fixed fee |
| Currency conversion | +3-4% |
| Chargebacks | $20 |
| Monthly fee | $0 |

### Recommended Setup

#### PayPal Products
1. **PayPal Checkout** - Standard payments
2. **Subscriptions** - Recurring billing
3. **Invoicing** - Professional invoices
4. **PayPal.Me** - Quick payment links

### Pros
- Everyone has PayPal
- Easy international payments
- Fast setup (minutes)
- Buyer protection builds trust

### Cons
- Higher fees than Stripe
- Clunky checkout experience
- Account freezes more common
- Poor API/automation
- Unprofessional for B2B at scale

### When to Use
- International clients who prefer PayPal
- One-time payments from small businesses
- Backup payment option

---

## Option 3: Hybrid Approach (RECOMMENDED)

**Primary:** Stripe for most transactions  
**Secondary:** PayPal for international/enterprise

### Why Hybrid?
- Cover all customer preferences
- Stripe for subscriptions (better UX)
- PayPal for one-time international payments
- Redundancy if one account has issues

### Setup
- Stripe account (primary)
- PayPal Business account (secondary)
- Offer both options on invoices
- Default to Stripe, PayPal on request

---

## Option 4: Alternatives to Consider

### Square
- **Best for:** In-person payments + online
- **Fees:** 2.9% + $0.30 (same as Stripe)
- **Verdict:** Not needed unless doing in-person sales

### Wise (formerly TransferWise)
- **Best for:** International bank transfers
- **Fees:** 0.5-1.5% (much lower)
- **Verdict:** Use for large enterprise contracts ($10K+)

### ACH/Direct Debit
- **Best for:** Reducing fees on large payments
- **Fees:** 0.8% capped at $5
- **Verdict:** Enable in Stripe for enterprise clients

### Crypto (USDC/Bitcoin)
- **Best for:** International, tech-savvy clients
- **Fees:** ~1%
- **Verdict:** Optional, not recommended for launch

---

## Recommended Payment Flow

### For One-Time Audits ($500-$5,500)

```
Client agrees → Send Stripe Invoice → Client pays → 
Auto-receipt → Onboarding email → Schedule kickoff
```

**Tools:**
- Stripe Invoicing
- Email automation (Zapier)
- Calendar booking (Calendly)

### For Monthly Retainers ($500-$8,000/month)

```
Client agrees → Send Stripe Checkout link → 
Client subscribes → Auto-charge monthly → 
Monthly invoice email → Retention check-ins
```

**Tools:**
- Stripe Billing
- Dunning management (auto-retry failed payments)
- Customer portal for self-service

### For Enterprise ($10K+/month)

```
Client agrees → Send contract (DocuSign) → 
Invoice via Stripe or ACH → Net-15/30 terms → 
Monthly reconciliation
```

**Tools:**
- Stripe + ACH option
- DocuSign for contracts
- QuickBooks for accounting

---

## Financial Projections

### Month 1-3 (Launch Phase)
| Metric | Conservative | Target |
|--------|-------------|--------|
| Clients | 3 | 5 |
| Avg. MRR/client | $2,000 | $3,500 |
| Monthly Revenue | $6,000 | $17,500 |
| Processing Fees (3%) | $180 | $525 |
| Net Revenue | $5,820 | $16,975 |

### Month 4-6 (Growth Phase)
| Metric | Conservative | Target |
|--------|-------------|--------|
| Clients | 8 | 15 |
| Avg. MRR/client | $2,500 | $4,000 |
| Monthly Revenue | $20,000 | $60,000 |
| Processing Fees (3%) | $600 | $1,800 |
| Net Revenue | $19,400 | $58,200 |

### Month 7-12 (Scale Phase)
| Metric | Conservative | Target |
|--------|-------------|--------|
| Clients | 20 | 40 |
| Avg. MRR/client | $3,000 | $4,500 |
| Monthly Revenue | $60,000 | $180,000 |
| Processing Fees (2.5%)* | $1,500 | $4,500 |
| Net Revenue | $58,500 | $175,500 |

*Volume discount on Stripe fees at $80K+/month

---

## Tax & Legal Considerations

### Sales Tax
- **Stripe Tax:** Automatic calculation (+0.5% fee)
- **Nexus:** Track where you have tax obligations
- **Recommendation:** Enable Stripe Tax from day 1

### 1099 Reporting
- Stripe automatically issues 1099-K for US businesses
- Keep business and personal finances separate

### International VAT
- Stripe handles EU VAT automatically
- Configure tax settings for your business location

### Terms of Service
- Refund policy: 30-day money-back guarantee (recommended)
- Payment terms: Net-0 for subscriptions, Net-15 for enterprise
- Late fees: 1.5% per month on overdue invoices

---

## Setup Checklist

### Week 1 (Before Launch)
- [ ] Create Stripe account
- [ ] Verify business information
- [ ] Connect bank account
- [ ] Create product catalog (5 products)
- [ ] Set up Stripe Billing
- [ ] Customize invoice template
- [ ] Create payment links
- [ ] Test checkout flow
- [ ] Set up accounting integration

### Week 2 (Launch)
- [ ] Enable Stripe Tax
- [ ] Configure fraud settings (Radar)
- [ ] Set up webhooks for notifications
- [ ] Create PayPal Business account (backup)
- [ ] Test international payments
- [ ] Document payment processes

### Ongoing
- [ ] Monitor failed payments weekly
- [ ] Review chargebacks monthly
- [ ] Reconcile accounting weekly
- [ ] Update pricing as needed
- [ ] Review fee structure quarterly

---

## Tools Integration

### Accounting
- **QuickBooks Online:** Native Stripe integration
- **Xero:** Native Stripe integration
- **FreshBooks:** Native Stripe integration
- **Recommendation:** QuickBooks Online ($30/month)

### CRM
- **HubSpot:** Native Stripe integration
- **Pipedrive:** Stripe integration via Zapier
- **Salesforce:** Native Stripe integration
- **Recommendation:** HubSpot Starter (free) or Pipedrive ($15/month)

### Automation
- **Zapier:** Connect Stripe to 5,000+ apps
- **Make (Integromat):** Cheaper alternative to Zapier
- **Recommendation:** Zapier Starter ($20/month)

### Contract Management
- **DocuSign:** Enterprise contracts
- **PandaDoc:** Simpler alternative
- **Recommendation:** PandaDoc ($19/month) for contracts >$5K

---

## Common Issues & Solutions

### Issue: Failed Subscription Payments
**Solution:** Enable Stripe's automatic retry logic (3 attempts over 3 weeks) + email notifications

### Issue: Chargebacks
**Solution:** Clear terms of service, detailed invoices, responsive support. Most chargebacks preventable with good communication.

### Issue: International Payment Declines
**Solution:** Offer PayPal as backup, enable 3D Secure, consider Wise for large transfers

### Issue: Refund Requests
**Solution:** 30-day guarantee policy. Process refunds quickly via Stripe dashboard (preserves reputation).

### Issue: Account Frozen
**Solution:** Rare but happens. Keep documentation, respond quickly to Stripe requests, maintain PayPal backup.

---

## Final Recommendation

**Go with Stripe as primary, PayPal as secondary.**

**Launch Checklist:**
1. Stripe account + verification (2 days)
2. Product catalog setup (1 hour)
3. Invoice template + payment links (1 hour)
4. Accounting integration (1 hour)
5. Test everything end-to-end (1 hour)

**Total Setup Time:** 2-3 days  
**Total Setup Cost:** $0 (just processing fees)

**You'll be ready to accept payments by Monday March 23.**

---

*Generated for GEO Service Launch | March 20, 2026*
