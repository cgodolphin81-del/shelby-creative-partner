# 6. Pricing Model

## Overview

NarrateAI offers flexible pricing options to accommodate authors at every stage, from first-time self-publishers to established publishing houses. Our transparent pricing ensures you know exactly what you're paying for with no hidden fees.

---

## Pricing Tiers

### 1. Per Finished Hour (PFH) Model

The industry-standard pricing model where you pay based on the final audiobook length.

#### Voice Tier Pricing

| Voice Tier | Price per Finished Hour | Best For |
|------------|------------------------|----------|
| **Standard** | $100 - $150 | Budget-conscious, non-fiction, public domain |
| **Professional** | $150 - $250 | Most fiction, memoirs, business books |
| **Premium** | $250 - $350 | Bestsellers, complex narratives, multiple characters |
| **Celebrity/Custom** | $350 - $500+ | High-profile releases, custom voice clones |

#### PFH Calculation

```typescript
interface PFHPricing {
  // Estimated from manuscript
  wordCount: number;
  estimatedFinishedHours: number;  // wordCount / 9000 (avg narration speed)
  
  // Voice selection
  voiceTier: 'standard' | 'professional' | 'premium' | 'celebrity';
  baseRate: number;  // $/PFH
  
  // Modifiers
  modifiers: {
    multiVoice?: number;      // 1.4x - 2.2x
    rushDelivery?: number;    // 1.5x - 2.0x
    complexContent?: number;  // 1.2x (technical, foreign language)
    extensiveEditing?: number; // 1.3x (heavy revision requests)
  };
  
  // Final calculation
  totalCost: number;  // PFH × rate × modifiers
}
```

#### Example Calculations

**Example 1: Standard Fiction (80,000 words)**
```
Word Count: 80,000
Estimated PFH: 8.9 hours (80,000 ÷ 9,000)
Voice Tier: Professional ($200/PFH)
Base Cost: 8.9 × $200 = $1,780
Multi-Voice (2 voices): $1,780 × 1.4 = $2,492
Total: $2,492
```

**Example 2: Non-Fiction Memoir (60,000 words)**
```
Word Count: 60,000
Estimated PFH: 6.7 hours
Voice Tier: Standard ($125/PFH)
Base Cost: 6.7 × $125 = $837.50
No modifiers
Total: $837.50
```

**Example 3: Epic Fantasy (150,000 words, 5 voices)**
```
Word Count: 150,000
Estimated PFH: 16.7 hours
Voice Tier: Premium ($300/PFH)
Base Cost: 16.7 × $300 = $5,010
Multi-Voice (5 voices): $5,010 × 1.8 = $9,018
Total: $9,018
```

---

### 2. Subscription Model

Unlimited audiobook production for high-volume publishers.

#### Subscription Tiers

| Plan | Price/Month | Included PFH | Overage Rate | Best For |
|------|-------------|--------------|--------------|----------|
| **Starter** | $299 | 5 PFH | $125/PFH | Prolific indie authors |
| **Professional** | $799 | 15 PFH | $100/PFH | Small presses |
| **Business** | $1,999 | 50 PFH | $75/PFH | Medium publishers |
| **Enterprise** | $4,999 | 150 PFH | $50/PFH | Large publishers |
| **Custom** | Custom | Custom | Custom | Very high volume |

#### Subscription Features

```typescript
interface SubscriptionFeatures {
  // All tiers include
  baseFeatures: [
    'Unlimited manuscript uploads',
    'Access to Standard voice library',
    'Basic audio editing tools',
    'AI proofing',
    'Distribution to all platforms',
    'Email support'
  ];
  
  // Professional+ adds
  professionalFeatures: [
    'Access to Professional voice library',
    'Advanced audio editing',
    'Priority AI proofing',
    'Chapter-level QC reports',
    'Priority email support'
  ];
  
  // Business+ adds
  businessFeatures: [
    'Access to Premium voice library',
    'Multi-voice productions',
    'Custom pronunciation dictionaries',
    'Dedicated QC specialist',
    'Phone support',
    'API access'
  ];
  
  // Enterprise adds
  enterpriseFeatures: [
    'Custom voice cloning (1 voice included)',
    'White-label options',
    'Dedicated account manager',
    'Custom integrations',
    'SLA guarantees',
    '24/7 priority support'
  ];
}
```

#### Subscription ROI Calculator

```typescript
interface SubscriptionROI {
  // Traditional production costs
  traditional: {
    narratorRate: number;    // $300-500/PFH
    studioTime: number;      // $100-200/hour
    editing: number;         // $50-100/PFH
    mastering: number;       // $25-50/PFH
    totalPerPFH: number;
  };
  
  // NarrateAI subscription
  narrateAI: {
    monthlyFee: number;
    includedPFH: number;
    effectiveRate: number;   // monthlyFee ÷ includedPFH
  };
  
  // Savings
  savings: {
    perPFH: number;
    percentage: number;
    breakEvenPFH: number;    // PFH needed to justify subscription
  };
}
```

**Example: Professional Plan Analysis**
```
Traditional Production:
- Narrator: $350/PFH
- Studio: $50/PFH
- Editing: $75/PFH
- Mastering: $35/PFH
- Total: $510/PFH

NarrateAI Professional:
- Monthly: $799
- Included: 15 PFH
- Effective Rate: $53/PFH

Savings: $457/PFH (90% savings)
Break-even: 2.3 PFH/month
```

---

### 3. Revenue Share Model

No upfront costs—pay from future royalties.

#### Revenue Share Options

| Option | Upfront Cost | Royalty Share | Term | Best For |
|--------|--------------|---------------|------|----------|
| **Standard Share** | $0 | 40% of royalties | 7 years | Debut authors, tight budgets |
| **Reduced Share** | 50% of PFH | 25% of royalties | 5 years | Established authors |
| **Hybrid** | 25% of PFH | 30% of royalties | 7 years | Balanced approach |

#### Revenue Share Calculation

```typescript
interface RevenueShare {
  // Production costs
  productionCost: {
    PFH: number;
    rate: number;
    total: number;
  };
  
  // Revenue share terms
  terms: {
    upfrontPayment: number;      // 0%, 25%, or 50% of production
    royaltyPercentage: number;   // 25%, 30%, or 40%
    termYears: number;           // 5 or 7 years
    minimumRoyalty: number;      // Optional minimum guarantee
  };
  
  // Royalty tracking
  royalties: {
    totalEarned: number;
    platformShare: number;       // Typically 25-40% to retailer
    narrateAIShare: number;      // Based on agreement
    authorShare: number;         // Remaining to author
  };
  
  // Example projection
  projection: {
    year1: { units: number; revenue: number; authorEarnings: number };
    year3: { units: number; revenue: number; authorEarnings: number };
    year5: { units: number; revenue: number; authorEarnings: number };
    totalAuthorEarnings: number;
    totalNarrateAIEarnings: number;
  };
}
```

#### Revenue Share Example

**Book Details:**
- Length: 10 PFH
- Production Cost: $2,000 (at $200/PFH)
- Retail Price: $24.95
- Platform Royalty: 25% (Audible exclusive)

**Standard Share (40% to NarrateAI, $0 upfront):**
```
Per Sale:
- Retail Price: $24.95
- Platform (25%): -$6.24
- Net Royalty: $18.71
- NarrateAI (40%): -$7.48
- Author (60%): $11.23

Break-even for NarrateAI: 268 sales ($2,000 ÷ $7.48)
Author earnings after break-even: $11.23/sale
```

**Reduced Share (25% to NarrateAI, 50% upfront):**
```
Upfront Payment: $1,000

Per Sale:
- Net Royalty: $18.71
- NarrateAI (25%): -$4.68
- Author (75%): $14.03

NarrateAI recoups upfront + share: 428 sales
Author earnings: $14.03/sale from first sale
```

---

### 4. À La Carte Services

Individual services for authors who need specific help.

#### Service Menu

| Service | Price | Description |
|---------|-------|-------------|
| **Manuscript Prep** | $0.01/word | Formatting, chapter detection, proofing |
| **Voice Sample** | $25/sample | Custom sample from your manuscript |
| **Pronunciation Guide** | $50 flat | Custom dictionary setup |
| **Audio Editing** | $75/hour | Manual editing and refinement |
| **Quality Control** | $100/book | Full QC report and corrections |
| **Distribution Setup** | $150/book | Multi-platform distribution setup |
| **Cover Art Design** | $200-500 | Audiobook cover design |
| **Marketing Package** | $500-2000 | Launch marketing support |
| **Custom Voice Clone** | $2,500-5,000 | One-time voice cloning |
| **Rush Delivery** | +50-100% | 24-48 hour turnaround |

---

## Price Comparison

### Traditional vs. NarrateAI

| Cost Component | Traditional Studio | NarrateAI Standard | NarrateAI Subscription |
|----------------|-------------------|--------------------|----------------------|
| **Narration (10 PFH)** | $3,000-5,000 | $1,000-1,500 | $0 (included) |
| **Studio Time** | $500-1,000 | $0 | $0 |
| **Editing** | $500-1,000 | $0-200 | $0 |
| **Mastering** | $200-400 | $0 | $0 |
| **QC/Proofing** | $300-500 | $0 | $0 |
| **Distribution** | $200-400 | $0 | $0 |
| **Total** | $4,700-8,300 | $1,000-1,700 | $299/month |
| **Savings** | — | 75-85% | 90-95% |

### Competitor Comparison

| Service | PFH Rate | Subscription | Revenue Share | Notes |
|---------|----------|--------------|---------------|-------|
| **NarrateAI** | $100-500 | $299-4,999/mo | 25-40% | Full service platform |
| **ACX Production** | $200-400 | None | 40-60% | Audible only |
| **Findaway Production** | $200-500 | None | Varies | Wide distribution |
| **Authors Direct** | $150-350 | None | No | Author keeps 100% |
| **Voice Bunny** | $50-200 | None | No | Voice talent marketplace |
| **Fiverr Narrators** | $20-100 | None | No | Variable quality |

---

## Discount Programs

### Volume Discounts

| Annual PFH Volume | Discount |
|-------------------|----------|
| 20-49 PFH | 10% |
| 50-99 PFH | 15% |
| 100-199 PFH | 20% |
| 200+ PFH | 25% |

### Special Programs

| Program | Discount | Eligibility |
|---------|----------|-------------|
| **Non-Profit** | 20% | Registered 501(c)(3) |
| **Educational** | 25% | Schools, universities |
| **First Book** | 15% | First-time authors |
| **Series** | 10% | Book 2+ in series |
| **Public Domain** | 30% | Classic literature |
| **Short Form** | Custom | Under 2 PFH |

### Seasonal Promotions

| Promotion | Timing | Offer |
|-----------|--------|-------|
| **New Year Launch** | January | 20% off first project |
| **Spring Cleaning** | March | Free distribution setup |
| **Summer Reading** | June | Free voice samples |
| **NaNoWriMo** | November | 25% off for participants |
| **Holiday Rush** | December | Rush delivery included |

---

## Payment Terms

### Payment Methods

- Credit/Debit Card (Visa, Mastercard, Amex, Discover)
- PayPal
- Bank Transfer (ACH, Wire)
- Invoice (Business/Enterprise accounts)

### Payment Schedule

| Model | Payment Terms |
|-------|---------------|
| **PFH** | 50% upfront, 50% on delivery |
| **Subscription** | Monthly, billed in advance |
| **Revenue Share** | Quarterly royalty distributions |
| **À La Carte** | Payment before service delivery |

### Refund Policy

```typescript
interface RefundPolicy {
  // Full refund scenarios
  fullRefund: [
    'Service not delivered within agreed timeframe',
    'Technical failure preventing completion',
    'Cancellation within 24 hours of order'
  ];
  
  // Partial refund scenarios
  partialRefund: [
    'Cancellation after production begins (pro-rated)',
    'Quality issues not resolved after revision',
    'Change of mind (50% if before voice selection)'
  ];
  
  // No refund scenarios
  noRefund: [
    'Completed and approved work',
    'Revenue share projects after distribution',
    'Custom voice cloning after training'
  ];
}
```

---

## Price Calculator API

### Get Price Estimate

```http
POST /api/v1/pricing/estimate

Request:
{
  "manuscript": {
    "wordCount": 80000,
    "genre": "fantasy",
    "complexity": "moderate"
  },
  "voiceSelection": {
    "tier": "professional",
    "voiceCount": 1
  },
  "services": {
    "editing": true,
    "qc": true,
    "distribution": true
  },
  "delivery": {
    "rush": false,
    "targetDate": "2026-04-15"
  },
  "paymentModel": "pfh"  // or "subscription", "revenue-share"
}

Response:
{
  "estimateId": "est_abc123",
  "validUntil": "2026-03-29T14:31:00Z",
  
  "breakdown": {
    "estimatedPFH": 8.9,
    "voiceCost": 1780,
    "editingCost": 200,
    "qcCost": 100,
    "distributionCost": 0,
    "rushFee": 0,
    "discounts": 0,
    "subtotal": 2080,
    "tax": 0,
    "total": 2080
  },
  
  "paymentOptions": {
    "pfh": {
      "upfront": 1040,
      "onDelivery": 1040,
      "total": 2080
    },
    "revenueShare": {
      "upfront": 0,
      "royaltyPercentage": 40,
      "term": "7 years",
      "projectedBreakEven": 268
    },
    "subscription": {
      "recommendedPlan": "Professional",
      "monthlyFee": 799,
      "includedPFH": 15,
      "overageCost": 0
    }
  },
  
  "savings": {
    "vsTraditional": {
      "traditionalCost": 6500,
      "narrateAICost": 2080,
      "savings": 4420,
      "percentage": 68
    }
  }
}
```

---

## Financial Projections

### Author ROI Calculator

```typescript
interface AuthorROI {
  // Investment
  productionCost: number;
  marketingBudget: number;
  totalInvestment: number;
  
  // Revenue projections
  projections: {
    conservative: {
      year1: number;
      year2: number;
      year3: number;
      total: number;
    };
    moderate: {
      year1: number;
      year2: number;
      year3: number;
      total: number;
    };
    optimistic: {
      year1: number;
      year2: number;
      year3: number;
      total: number;
    };
  };
  
  // ROI calculation
  roi: {
    breakEvenMonth: number;
    roi1Year: number;      // Percentage
    roi3Year: number;
    netProfit3Year: number;
  };
}
```

**Example: 10 PFH Fantasy Novel**
```
Investment:
- Production (PFH model): $2,000
- Marketing: $500
- Total: $2,500

Moderate Projection:
- Year 1: 500 units × $15 royalty = $7,500
- Year 2: 300 units × $15 = $4,500
- Year 3: 200 units × $15 = $3,000
- Total: $15,000

ROI:
- Break-even: Month 4
- 1-Year ROI: 200%
- 3-Year ROI: 500%
- Net Profit (3 years): $12,500
```

---

## Enterprise Pricing

### Custom Solutions

For publishers producing 50+ audiobooks annually:

```typescript
interface EnterprisePricing {
  // Volume-based pricing
  annualCommitment: {
    minimumPFH: number;
    ratePerPFH: number;
    overageRate: number;
  };
  
  // Dedicated resources
  dedicated: {
    accountManager: boolean;
    dedicatedQC: boolean;
    prioritySupport: boolean;
    customIntegrations: boolean;
  };
  
  // White-label options
  whiteLabel: {
    customBranding: boolean;
    customDomain: boolean;
    apiAccess: boolean;
    ssoIntegration: boolean;
  };
  
  // SLA guarantees
  sla: {
    turnaroundTime: string;
    qualityGuarantee: string;
    uptimeCommitment: string;
    supportResponse: string;
  };
  
  // Pricing
  pricing: {
    annualFee: number;
    includedPFH: number;
    overageRate: number;
    setupFee: number;
  };
}
```

### Enterprise Pricing Tiers

| Tier | Annual Commitment | Price/PFH | Features |
|------|-------------------|-----------|----------|
| **Publisher** | 500 PFH | $75 | Dedicated support, API access |
| **Large Publisher** | 2,000 PFH | $60 | White-label, custom integrations |
| **Enterprise** | 5,000+ PFH | $45 | Full white-label, SLA guarantees |

---

## Price Matching

We'll match any competitor's verified price for comparable services.

### Price Match Guarantee

```typescript
interface PriceMatchPolicy {
  eligibility: [
    'Comparable voice quality',
    'Similar delivery timeframe',
    'Same services included',
    'Verifiable quote'
  ];
  
  process: [
    'Submit competitor quote',
    'Verification (24-48 hours)',
    'Price match approval',
    'Applied to project'
  ];
  
  exclusions: [
    'Promotional pricing',
    'Limited-time offers',
    'Bundle deals',
    'Services not directly comparable'
  ];
}
```

---

*Version: 1.0.0 | Last Updated: March 2026*
