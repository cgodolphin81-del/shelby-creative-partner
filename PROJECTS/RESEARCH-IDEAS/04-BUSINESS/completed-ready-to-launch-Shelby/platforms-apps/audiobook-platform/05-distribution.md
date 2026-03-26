# 5. Distribution Guide

## Overview

The Distribution Guide covers all major audiobook platforms, submission requirements, and strategies for maximizing reach and revenue. NarrateAI supports direct distribution to all major retailers and aggregators.

---

## Distribution Options

### Direct vs. Aggregator

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Direct** | Higher royalties, more control | Multiple accounts, more work | Experienced publishers |
| **Aggregator** | One-stop submission, simpler | Lower royalties, less control | First-time authors, simplicity |

---

## Platform Specifications

### 1. Audible/ACX (Amazon)

#### Overview
- **Market Share**: ~60% of audiobook market
- **Royalty Options**: 25% (exclusive) or 10% (non-exclusive)
- **Review Time**: 7-10 business days
- **Exclusivity**: Required for 25% royalty option

#### Technical Requirements

```typescript
interface ACXRequirements {
  audio: {
    format: 'MP3';
    bitRate: '192 kbps or higher';
    sampleRate: '44.1 kHz';
    channels: 'mono or stereo';
    encoding: 'Constant Bit Rate (CBR)';
  };
  loudness: {
    averageRMS: '-18dB to -22dB';
    peakValues: '≤ -3dB';
    noiseFloor: '≤ -60dB';
  };
  structure: {
    openingStatement: 'Required (title and author)';
    closingStatement: 'Required (copyright info)';
    chapterMarkers: 'Required';
    trackSeparation: '0.5-1 second silence';
  };
  metadata: {
    id3Tags: 'ID3v2.3 or higher';
    coverArt: '3000x3000 pixels, RGB, JPEG';
  };
}
```

#### Submission Checklist

```markdown
## ACX Submission Checklist

### Audio Files
- [ ] All chapters exported as separate MP3 files
- [ ] Bit rate: 192 kbps CBR or higher
- [ ] Sample rate: 44.1 kHz
- [ ] Peak levels: ≤ -3dB
- [ ] RMS: -18dB to -22dB
- [ ] Noise floor: ≤ -60dB

### Structure
- [ ] Opening statement: "[Title] by [Author]. Narrated by [Narrator]."
- [ ] Closing statement: "[Title]. Copyright © [Year] by [Copyright Holder]."
- [ ] Chapter markers at beginning of each file
- [ ] 0.5-1 second silence between tracks

### Metadata
- [ ] ID3 tags completed (Title, Artist, Album, Track Number, Year, Genre)
- [ ] Cover art: 3000x3000 pixels, JPEG, RGB
- [ ] Book metadata entered in ACX portal

### Documentation
- [ ] Rights holder verification
- [ ] Narrator agreement signed
- [ ] ISBN (optional but recommended)
```

#### ACX API Integration

```http
POST /api/v1/distribution/acx/upload

Request:
{
  "projectId": "prj_abc123",
  "acxAccountId": "acx_usr456",
  "royaltyOption": "exclusive" | "non-exclusive",
  "retailPrice": {
    "currency": "USD",
    "amount": 24.95
  },
  "releaseDate": "2026-04-15",
  "preorderEnabled": true
}

Response:
{
  "submissionId": "acx_sub789",
  "status": "uploaded" | "in-review" | "approved" | "rejected",
  "estimatedReviewTime": "7-10 business days",
  "trackingUrl": "https://acx.com/submissions/acx_sub789"
}
```

#### Pricing Guidelines

| Book Length | Suggested Price (Exclusive) | Suggested Price (Non-Exclusive) |
|-------------|----------------------------|---------------------------------|
| 1-3 hours | $6.95 - $9.95 | $9.95 - $14.95 |
| 3-6 hours | $9.95 - $14.95 | $14.95 - $19.95 |
| 6-10 hours | $14.95 - $19.95 | $19.95 - $24.95 |
| 10-20 hours | $19.95 - $24.95 | $24.95 - $29.95 |
| 20+ hours | $24.95 - $29.95 | $29.95 - $34.95 |

---

### 2. iTunes/Apple Books

#### Overview
- **Market Share**: ~15% of audiobook market
- **Royalty Rate**: 25% of wholesale price
- **Review Time**: 3-5 business days
- **Exclusivity**: Not required

#### Technical Requirements

```typescript
interface AppleRequirements {
  audio: {
    format: 'AAC or MP3';
    bitRate: '256 kbps (AAC) or 192+ kbps (MP3)';
    sampleRate: '44.1 kHz';
    channels: 'stereo preferred';
  };
  loudness: {
    targetLUFS: '-16 LUFS';
    tolerance: '±1 LUFS';
    truePeakMax: '-1.0 dBTP';
  };
  metadata: {
    required: ['title', 'artist', 'album', 'genre', 'trackNumber'];
    coverArt: '3000x3000 pixels, JPEG or PNG';
    isbn: 'recommended';
  };
  structure: {
    chapterMarkers: 'Required';
    tableOfContents: 'Required in metadata';
  };
}
```

#### Submission via Apple Music Connect

```http
POST /api/v1/distribution/apple/upload

Request:
{
  "projectId": "prj_abc123",
  "appleId": "apple_pub456",
  "metadata": {
    "title": "The Midnight Garden",
    "author": "Jane Smith",
    "narrator": "Eleanor Voice",
    "publisher": "NarrateAI Press",
    "genre": "Fiction > Fantasy",
    "language": "en-US",
    "explicitContent": false,
    "copyrightYear": 2026,
    "isbn": "978-1-234567-89-0"
  },
  "pricing": {
    "territories": {
      "US": { "currency": "USD", "price": 19.99 },
      "UK": { "currency": "GBP", "price": 16.99 },
      "EU": { "currency": "EUR", "price": 18.99 }
    }
  },
  "releaseDate": "2026-04-15"
}
```

---

### 3. Spotify

#### Overview
- **Market Share**: Growing rapidly (~10%)
- **Royalty Rate**: Per-stream model (varies)
- **Review Time**: 2-4 business days
- **Exclusivity**: Not required

#### Technical Requirements

```typescript
interface SpotifyRequirements {
  audio: {
    format: 'OGG Vorbis or MP3';
    bitRate: '160+ kbps';
    sampleRate: '44.1 kHz';
    loudness: '-14 LUFS integrated';
    truePeakMax: '-1.0 dBTP';
  };
  metadata: {
    coverArt: '3000x3000 pixels, JPEG or PNG';
    isbn: 'optional';
    chapters: 'Supported via metadata';
  };
}
```

#### Spotify for Podcasters Integration

```http
POST /api/v1/distribution/spotify/upload

Request:
{
  "projectId": "prj_abc123",
  "spotifyAccountId": "spotify_pub456",
  "distributionType": "audiobook",
  "metadata": {
    "title": "The Midnight Garden",
    "author": "Jane Smith",
    "narrator": "Eleanor Voice",
    "description": "A captivating fantasy novel...",
    "categories": ["Fiction", "Fantasy", "Audiobook"],
    "language": "en",
    "explicit": false
  },
  "chapters": [
    {
      "title": "Chapter 1: The Beginning",
      "audioFile": "s3://bucket/ch01.mp3",
      "duration": 1845
    }
  ]
}
```

---

### 4. Findaway Voices

#### Overview
- **Market Share**: ~8% of audiobook market
- **Royalty Rate**: 40-60% of net (varies by retailer)
- **Review Time**: 5-7 business days
- **Exclusivity**: Not required
- **Reach**: 40+ retailers including libraries

#### Technical Requirements

```typescript
interface FindawayRequirements {
  audio: {
    format: 'MP3';
    bitRate: '192 kbps or higher';
    sampleRate: '44.1 kHz';
    channels: 'mono or stereo';
  };
  loudness: {
    averageRMS: '-18dB to -22dB';
    peakValues: '≤ -3dB';
    noiseFloor: '≤ -60dB';
  };
  structure: {
    openingStatement: 'Recommended';
    closingStatement: 'Recommended';
    chapterMarkers: 'Required';
  };
  metadata: {
    coverArt: '3000x3000 pixels, JPEG';
    isbn: 'required for some retailers';
  };
}
```

#### Findaway Distribution Benefits

| Benefit | Description |
|---------|-------------|
| **Wide Distribution** | 40+ retailers and libraries |
| **Library Sales** | OverDrive, Hoopla, Bibliotheca |
| **International** | Distribution in 150+ countries |
| **Reporting** | Consolidated sales reports |
| **Support** | Dedicated account manager |

#### Findaway API Integration

```http
POST /api/v1/distribution/findaway/upload

Request:
{
  "projectId": "prj_abc123",
  "findawayAccountId": "fw_pub456",
  "distributionOptions": {
    "retailers": "all",  // or specific list
    "libraries": true,
    "subscriptionServices": true,
    "territories": "worldwide"
  },
  "pricing": {
    "model": "fixed",  // or "dynamic"
    "retailPrice": {
      "USD": 24.95,
      "GBP": 19.99,
      "EUR": 22.99
    },
    "libraryPrice": {
      "USD": 49.95  // Higher for library licensing
    }
  },
  "marketing": {
    "preorderEnabled": true,
    "promotionalPricing": {
      "enabled": true,
      "discountPercent": 20,
      "startDate": "2026-04-15",
      "endDate": "2026-04-22"
    }
  }
}
```

---

### 5. Google Play Books

#### Overview
- **Market Share**: ~5% of audiobook market
- **Royalty Rate**: 25% of list price
- **Review Time**: 2-3 business days
- **Exclusivity**: Not required

#### Technical Requirements

```typescript
interface GooglePlayRequirements {
  audio: {
    format: 'MP3 or AAC';
    bitRate: '128+ kbps';
    sampleRate: '44.1 kHz';
  };
  loudness: {
    targetLUFS: '-16 LUFS';
    truePeakMax: '-1.0 dBTP';
  };
  metadata: {
    coverArt: '3000x3000 pixels, JPEG or PNG';
    isbn: 'recommended';
  };
}
```

---

### 6. Kobo Audiobooks

#### Overview
- **Market Share**: ~3% of audiobook market
- **Royalty Rate**: 25-45% (varies)
- **Review Time**: 3-5 business days
- **Exclusivity**: Not required
- **Strong in**: Canada, Australia, Europe

#### Technical Requirements

```typescript
interface KoboRequirements {
  audio: {
    format: 'MP3';
    bitRate: '128+ kbps';
    sampleRate: '44.1 kHz';
  };
  metadata: {
    coverArt: '3000x3000 pixels, JPEG';
    isbn: 'recommended';
  };
}
```

---

### 7. Libro.fm

#### Overview
- **Market Share**: ~1% (but growing, indie bookstore focused)
- **Royalty Rate**: 25% of list price
- **Review Time**: 2-3 business days
- **Exclusivity**: Not required
- **Unique Feature**: Supports independent bookstores

#### Benefits
- Customers can designate a local bookstore to receive portion of sale
- DRM-free options available
- Strong community support for indie authors

---

## Aggregator Comparison

### Findaway Voices vs. Authors Direct vs. Draft2Digital

| Feature | Findaway | Authors Direct | Draft2Digital |
|---------|----------|----------------|---------------|
| **Retailers** | 40+ | 20+ | 15+ |
| **Library Distribution** | ✅ Yes | ✅ Yes | ❌ No |
| **Royalty Rate** | 40-60% | 50-60% | 45-55% |
| **Setup Fee** | None | None | None |
| **Annual Fee** | None | None | None |
| **Reporting** | Excellent | Good | Good |
| **Support** | Dedicated | Email | Email |
| **Best For** | Maximum reach | Simplicity | Multi-format |

---

## Distribution API

### Universal Distribution Endpoint

```http
POST /api/v1/distribution/distribute

Request:
{
  "projectId": "prj_abc123",
  "platforms": [
    {
      "name": "acx",
      "enabled": true,
      "config": {
        "royaltyOption": "exclusive",
        "retailPrice": 24.95
      }
    },
    {
      "name": "apple",
      "enabled": true,
      "config": {
        "retailPrice": { "USD": 19.99, "GBP": 16.99 }
      }
    },
    {
      "name": "spotify",
      "enabled": true,
      "config": {}
    },
    {
      "name": "findaway",
      "enabled": true,
      "config": {
        "distributionOptions": {
          "retailers": "all",
          "libraries": true
        }
      }
    }
  ],
  "releaseDate": "2026-04-15",
  "preorderEnabled": true,
  "preorderDate": "2026-03-15"
}

Response:
{
  "distributionId": "dist_xyz789",
  "status": "processing",
  "submissions": [
    {
      "platform": "acx",
      "submissionId": "acx_sub001",
      "status": "uploaded",
      "estimatedApproval": "2026-03-29"
    },
    {
      "platform": "apple",
      "submissionId": "apl_sub002",
      "status": "uploaded",
      "estimatedApproval": "2026-03-25"
    }
  ],
  "trackingUrl": "https://narrateai.com/distribution/dist_xyz789"
}
```

### Get Distribution Status

```http
GET /api/v1/distribution/:distributionId/status

Response:
{
  "distributionId": "dist_xyz789",
  "overallStatus": "in-progress" | "complete" | "partial" | "failed",
  "platforms": [
    {
      "name": "acx",
      "status": "approved" | "in-review" | "rejected" | "live",
      "liveDate": "2026-04-15",
      "productUrl": "https://audible.com/pd/B000000001",
      "rejections": []
    }
  ],
  "sales": {
    "totalUnits": 0,
    "totalRevenue": 0,
    "byPlatform": {}
  }
}
```

---

## ISBN & Metadata

### ISBN Requirements

| Platform | ISBN Required | Notes |
|----------|---------------|-------|
| Audible/ACX | No | Assigns ASIN |
| iTunes | No | Optional |
| Spotify | No | Not used |
| Findaway | Some retailers | Required for bookstores |
| Google Play | No | Optional |
| Kobo | No | Optional |
| Libro.fm | No | Optional |

### ISBN Best Practices

```typescript
interface ISBNManagement {
  // One ISBN per format
  audiobookISBN: string;      // Separate from print/ebook
  editionISBN?: string;       // If special edition
  
  // Where to get ISBNs
  sources: {
    US: 'Bowker (myidentifiers.com)';
    UK: 'Nielsen';
    Canada: 'Library and Archives Canada';
    Australia: 'Thorpe-Bowker';
  };
  
  // Cost (US)
  pricing: {
    single: '$125';
    block10: '$295';
    block100: '$575';
    block1000: '$1500';
  };
}
```

### Metadata Standards

```typescript
interface AudiobookMetadata {
  // Required
  title: string;
  subtitle?: string;
  author: string;
  narrator: string;
  publisher: string;
  language: string;  // ISO 639-1
  copyrightYear: number;
  
  // Recommended
  isbn?: string;
  description: string;  // 4000 character max
  categories: string[];  // BISAC codes
  keywords: string[];
  seriesName?: string;
  seriesNumber?: number;
  edition?: string;
  
  // Cover Art
  coverArt: {
    url: string;
    width: number;  // 3000 minimum
    height: number;  // 3000 minimum
    format: 'JPEG' | 'PNG';
    colorSpace: 'RGB';
  };
  
  // Content Warnings
  contentAdvisories?: string[];
  explicitContent: boolean;
}
```

### BISAC Categories

```typescript
// Common Audiobook BISAC Codes
const BISAC_Codes = {
  fiction: {
    fantasy: 'FIC009000',
    romance: 'FIC027000',
    thriller: 'FIC031000',
    mystery: 'FIC022000',
    scifi: 'FIC028000',
    literary: 'FIC019000',
    historical: 'FIC014000',
  },
  nonfiction: {
    biography: 'BIO000000',
    business: 'BUS000000',
    selfhelp: 'SEL000000',
    health: 'HEA000000',
    history: 'HIS000000',
    truecrime: 'TRU002000',
  }
};
```

---

## Release Strategy

### Pre-Release Timeline

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PRE-RELEASE TIMELINE                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  T-8 Weeks          T-4 Weeks          T-2 Weeks         Release Day    │
│  ─────────          ─────────          ─────────         ───────────    │
│  • Finalize         • Submit to        • Begin           • Go live      │
│    manuscript         platforms          marketing       • Social media │
│  • Select voice     • Order ISBNs        push            • Email list   │
│  • Begin            • Create           • Send ARCs       • Launch       │
│    production         marketing          to reviewers      promotion    │
│                     • Build landing    • Schedule        • Monitor      │
│                       page               interviews        sales        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Pre-Order Strategy

| Platform | Pre-Order Supported | Lead Time | Benefits |
|----------|---------------------|-----------|----------|
| Audible | ✅ Yes | 90 days max | Early reviews, ranking boost |
| iTunes | ✅ Yes | 90 days max | Pre-order bonuses |
| Spotify | ❌ No | N/A | - |
| Findaway | ✅ Yes | Varies | Wide pre-order |

### Launch Day Checklist

```markdown
## Launch Day Checklist

### Technical
- [ ] All platforms show "live" status
- [ ] Product pages display correctly
- [ ] Sample audio playing properly
- [ ] Purchase links working

### Marketing
- [ ] Launch email sent to list
- [ ] Social media posts scheduled
- [ ] Blog post published
- [ ] Newsletter features confirmed
- [ ] Paid ads running

### Monitoring
- [ ] Sales tracking set up
- [ ] Review monitoring active
- [ ] Customer service ready
- [ ] Issue escalation plan in place
```

---

## Library Distribution

### Library Platforms

| Platform | Market | Model | Notes |
|----------|--------|-------|-------|
| **OverDrive/Libby** | Global | Cost Per Circulation | Most popular |
| **Hoopla** | US/Canada | Cost Per Circulation | No waitlists |
| **Bibliotheca** | Global | Subscription | CloudLibrary app |
| **Axis 360** | US/Canada | Subscription | Baker & Taylor |

### Library Pricing Strategy

```typescript
interface LibraryPricing {
  // Library prices are typically 2-3x retail
  retailPrice: number;
  libraryPrice: number;  // Usually 2-3x retail
  
  // Licensing models
  models: {
    oneCopyOneUser: number;    // Single license
    twoYearExpiration: number;  // Expires after 2 years
    costPerCirculation: number; // Pay per checkout
    unlimitedAccess: number;    // Subscription model
  };
}
```

**Library Pricing Guidelines:**
| Retail Price | Suggested Library Price |
|--------------|------------------------|
| $14.95 | $39.95 - $49.95 |
| $19.95 | $49.95 - $59.95 |
| $24.95 | $59.95 - $74.95 |
| $29.95 | $74.95 - $89.95 |

---

## International Distribution

### Territory Considerations

```typescript
interface TerritoryConfig {
  // Regions with strong audiobook markets
  priority: ['US', 'UK', 'CA', 'AU', 'DE', 'FR'];
  
  // Language considerations
  languageMapping: {
    'en-US': ['US', 'CA', 'AU', 'NZ', 'IE'];
    'en-GB': ['UK', 'IE', 'IN', 'SG'];
    'de-DE': ['DE', 'AT', 'CH'];
    'fr-FR': ['FR', 'CA', 'BE', 'CH'];
  };
  
  // Pricing by territory
  pricing: {
    US: { currency: 'USD', multiplier: 1.0 };
    UK: { currency: 'GBP', multiplier: 0.8 };
    EU: { currency: 'EUR', multiplier: 0.9 };
    AU: { currency: 'AUD', multiplier: 1.5 };
    CA: { currency: 'CAD', multiplier: 1.3 };
  };
}
```

### VAT & Tax Considerations

| Region | VAT Rate | Responsibility |
|--------|----------|----------------|
| EU | 17-27% | Platform collects |
| UK | 20% | Platform collects |
| Australia | 10% GST | Platform collects |
| US | Varies by state | Author responsibility |

---

## Troubleshooting

### Common Rejection Reasons

| Issue | Platform | Resolution |
|-------|----------|------------|
| Audio quality | All | Re-export with correct settings |
| Incorrect loudness | ACX, Apple | Normalize to target LUFS |
| Missing metadata | All | Complete all required fields |
| Cover art issues | All | Resize to 3000x3000, RGB |
| Rights not verified | ACX | Complete rights holder verification |
| Copyright statement missing | ACX | Add closing statement |

### Appeal Process

```http
POST /api/v1/distribution/:platform/appeal

Request:
{
  "submissionId": "acx_sub001",
  "rejectionReason": "Audio quality below standard",
  "appealReason": "Audio has been re-processed to meet ACX standards. New RMS: -20dB, Peak: -3.5dB",
  "supportingEvidence": [
    {
      "type": "technical-report",
      "url": "https://narrateai.com/reports/tech_abc123.pdf"
    }
  ]
}
```

---

## Performance Tracking

### Sales Dashboard

```typescript
interface SalesDashboard {
  period: {
    start: Date;
    end: Date;
  };
  
  totals: {
    units: number;
    revenue: number;
    royalties: number;
  };
  
  byPlatform: Array<{
    platform: string;
    units: number;
    revenue: number;
    royalties: number;
    growth: number;  // Percentage
  }>;
  
  byTerritory: Array<{
    territory: string;
    units: number;
    revenue: number;
  }>;
  
  trends: {
    daily: Array<{ date: Date; units: number; revenue: number }>;
    weekly: Array<{ week: string; units: number; revenue: number }>;
  };
}
```

---

*Version: 1.0.0 | Last Updated: March 2026*
