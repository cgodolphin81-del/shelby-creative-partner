# 7. Rights & Royalties Guide

## Overview

This guide covers the legal framework for audiobook production, including rights acquisition, royalty structures, contracts, copyright registration, and ISBN assignment. Understanding these elements is crucial for protecting your work and maximizing earnings.

---

## Rights Acquisition

### Types of Rights

```typescript
interface AudiobookRights {
  // Primary rights needed
  audioRights: {
    description: 'Right to create and distribute audio versions';
    required: true;
    typicalTerm: 'Life of copyright' | 'Fixed term (years)';
    exclusivity: 'exclusive' | 'non-exclusive';
  };
  
  // Related rights
  adaptationRights: {
    description: 'Right to abridge or adapt content';
    required: false;
    notes: 'Most audiobooks are unabridged';
  };
  
  distributionRights: {
    description: 'Right to distribute through specific channels';
    required: true;
    channels: ['retail', 'library', 'subscription', 'broadcast'];
    territories: 'worldwide' | 'specific regions';
  };
  
  promotionalRights: {
    description: 'Right to use excerpts for marketing';
    required: true;
    limitations: 'Typically 10-15% of content';
  };
}
```

### Rights Checklist for Authors

```markdown
## Rights Verification Checklist

### If You're the Author
- [ ] You created the original work
- [ ] You haven't signed away audio rights to a publisher
- [ ] You have the right to create derivative works
- [ ] Any co-authors have agreed to audio production
- [ ] No existing audio rights agreements in place

### If You're the Publisher
- [ ] Audio rights included in author contract
- [ ] Rights term covers intended distribution period
- [ ] Territory matches distribution plans
- [ ] Sub-licensing rights included (for aggregators)
- [ ] Reversion clauses understood

### If You're Adapting Someone Else's Work
- [ ] Written permission from rights holder
- [ ] License agreement signed
- [ ] Royalty structure agreed upon
- [ ] Term and territory defined
- [ ] Approval process established
```

### Common Rights Scenarios

| Scenario | Rights Status | Action Needed |
|----------|---------------|---------------|
| **Self-published ebook/print** | You own audio rights | Clear to produce |
| **Traditional published (pre-2010)** | May retain audio rights | Check contract |
| **Traditional published (post-2010)** | Publisher likely owns audio | Request rights reversion or license |
| **Out of print** | Rights may have reverted | Request written confirmation |
| **Co-authored work** | Shared ownership | Get all authors' consent |
| **Work for hire** | Employer owns rights | Get employer permission |
| **Public domain** | No rights needed | Free to produce |

---

## Contract Templates

### Narrator/Author Agreement (Revenue Share)

```markdown
# AUDIOBOOK PRODUCTION AGREEMENT

## Parties
**Producer:** NarrateAI, LLC ("Producer")
**Rights Holder:** [Author Name] ("Rights Holder")

## Work Details
**Title:** [Book Title]
**Author:** [Author Name]
**Estimated Length:** [X] hours (Per Finished Hours)
**ISBN:** [If applicable]

## Grant of Rights
Rights Holder grants Producer the non-exclusive right to:
1. Create an audiobook recording of the Work
2. Distribute the audiobook through retail and library channels
3. Use excerpts for promotional purposes
4. Sub-license distribution rights to platforms

## Territory
Worldwide, all languages

## Term
Seven (7) years from release date, with automatic renewal unless terminated

## Compensation

### Option A: Revenue Share
- Producer receives 40% of net royalties
- Rights Holder receives 60% of net royalties
- Net royalties = Gross royalties - Platform fees
- Quarterly royalty statements and payments

### Option B: Hybrid
- Rights Holder pays $[X] upfront (50% of production cost)
- Producer receives 25% of net royalties
- Rights Holder receives 75% of net royalties
- Term: Five (5) years

## Production Standards
- Professional quality meeting ACX/platform standards
- Rights Holder approval required before distribution
- Two rounds of revisions included

## Accounting
- Quarterly statements within 30 days of quarter end
- Payments within 15 days of statement
- Audit rights once per year with 30 days notice

## Termination
- Either party may terminate for material breach
- 30 days cure period for breaches
- Rights revert upon termination and payment of owed royalties

## Representations
Rights Holder represents:
- They own or control the rights granted herein
- The Work does not infringe any third-party rights
- They have full authority to enter this agreement

## Signatures

_________________________    Date: ___________
[Author Name], Rights Holder

_________________________    Date: ___________
[Name], NarrateAI, LLC

```

### Multi-Author Anthology Agreement

```markdown
# ANTHOLOGY AUDIOBOOK AGREEMENT

## Parties
**Producer:** NarrateAI, LLC
**Contributing Authors:** [List of Authors]

## Work Details
**Anthology Title:** [Title]
**Individual Stories:** [List with authors]
**Estimated Total Length:** [X] hours

## Rights Grant
Each contributor grants:
- Non-exclusive audio rights to their contribution
- Right to distribute as part of anthology
- Promotional use of name and excerpt (up to 1,000 words)

## Compensation
**Option 1: Pro-Rata Revenue Share**
- Royalties split based on story length
- Each author receives share of net royalties
- Quarterly statements

**Option 2: Flat Fee**
- One-time payment of $[X] per story
- No ongoing royalties
- Buyout of audio rights for term

## Credit
- All authors credited in metadata
- Author names in audiobook description
- Individual story titles announced

## Term
Seven (7) years from release

## Signatures
[Signature blocks for all contributors]
```

---

## Royalty Structures

### Platform Royalty Rates

| Platform | Royalty Rate | Conditions |
|----------|--------------|------------|
| **Audible (Exclusive)** | 40% of list price | 7-year exclusivity |
| **Audible (Non-Exclusive)** | 25% of list price | No exclusivity |
| **iTunes/Apple** | 25% of list price | Non-exclusive |
| **Spotify** | Per-stream (varies) | ~$0.003-0.005 per stream |
| **Google Play** | 25% of list price | Non-exclusive |
| **Kobo** | 25-45% of list price | Varies by territory |
| **Libro.fm** | 25% of list price | Non-exclusive |
| **Findaway (Retail)** | 40-60% of net | After retailer cut |
| **Library (OverDrive)** | $0.20-0.40 per borrow | Cost Per Circulation |

### Royalty Calculation Examples

**Example 1: Audible Exclusive Sale**
```
List Price: $24.95
Audible Royalty (40%): $9.98
Producer Share (40% of royalty): $3.99
Author Share (60% of royalty): $5.99
```

**Example 2: Multi-Platform Sale**
```
iTunes Sale at $19.99:
- iTunes Royalty (25%): $5.00
- Producer Share (40%): $2.00
- Author Share (60%): $3.00

Libro.fm Sale at $19.99:
- Libro.fm Royalty (25%): $5.00
- Producer Share (40%): $2.00
- Author Share (60%): $3.00
```

**Example 3: Library Borrow**
```
OverDrive CPC Model:
- Library pays per borrow: $0.35
- Platform share (30%): -$0.105
- Net royalty: $0.245
- Producer Share (40%): $0.098
- Author Share (60%): $0.147
```

### Royalty Waterfall

```
┌─────────────────────────────────────────────────────────────────┐
│                    ROYALTY WATERFLOW                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  GROSS ROYALTY (from platform)                                  │
│  Example: $10.00 per sale                                       │
│                          ↓                                       │
│  ─────────────────────────────────────────────────────────────  │
│  PLATFORM FEES (if applicable)                                  │
│  Example: $0.00 (already deducted by platform)                  │
│                          ↓                                       │
│  ─────────────────────────────────────────────────────────────  │
│  NET ROYALTY                                                    │
│  Example: $10.00                                                │
│                          ↓                                       │
│  ─────────────────────────────────────────────────────────────  │
│  PRODUCER SHARE (Revenue Share Model)                           │
│  Example: 40% = $4.00                                           │
│                          ↓                                       │
│  ─────────────────────────────────────────────────────────────  │
│  AUTHOR SHARE                                                   │
│  Example: 60% = $6.00                                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Copyright Registration

### US Copyright Office

#### Why Register?
- Legal evidence of ownership
- Required for infringement lawsuits
- Eligible for statutory damages
- Public record of ownership

#### Registration Process

```typescript
interface CopyrightRegistration {
  // What you need
  requirements: {
    completedWork: 'Audiobook must be finished';
    application: 'Form SR (Sound Recording)';
    fee: '$45-65 (electronic filing)';
    deposit: 'Complete audio files or excerpts';
  };
  
  // What to register
  options: {
    soundRecording: 'The audio recording itself';
    literaryWork: 'The underlying text (if you own it)';
    both: 'Register both for maximum protection';
  };
  
  // Process
  steps: [
    'Create eCO account at copyright.gov',
    'Complete Form SR application',
    'Pay filing fee',
    'Upload deposit copies',
    'Wait for processing (3-9 months)',
    'Receive certificate'
  ];
  
  // Timing
  timing: {
    bestPractice: 'Register within 3 months of publication';
    benefit: 'Eligible for statutory damages from publication date';
  };
}
```

#### Copyright Application Details

**Form SR (Sound Recording)**
```
Application Information:
- Title of work
- Author(s): Narrator, Producer
- Claimant: Rights owner
- Year of completion
- Date of publication (if published)

Deposit Requirements:
- Complete work OR
- First and last 20 minutes + table of contents

Filing Fee:
- Single author, same claimant: $45
- Standard filing: $65
```

**Form PA (Performing Arts) - For Underlying Work**
```
If also registering the text:
- Separate application required
- Separate filing fee
- Can be done simultaneously
```

### International Copyright

#### Berne Convention
- Automatic protection in 179 member countries
- No registration required for basic protection
- National treatment (same as local authors)

#### Key Territories

| Country | Protection | Registration Option |
|---------|------------|---------------------|
| **United States** | Automatic + Registration benefits | Copyright Office |
| **United Kingdom** | Automatic | No formal registry |
| **Canada** | Automatic | Voluntary registration |
| **Australia** | Automatic | No formal registry |
| **EU Countries** | Automatic | Varies by country |

---

## ISBN Assignment

### What is an ISBN?

**ISBN (International Standard Book Number)**
- Unique identifier for books and audiobooks
- 13 digits (since 2007)
- Required by some retailers and libraries
- One ISBN per format and edition

### ISBN Structure

```
ISBN: 978-1-234567-89-0
      │   │    │    │
      │   │    │    └─ Check digit
      │   │    └────── Title identifier
      │   └─────────── Publisher prefix
      └─────────────── GS1 prefix (978 or 979)
```

### Do You Need an ISBN?

| Platform | ISBN Required? | Notes |
|----------|----------------|-------|
| Audible/ACX | ❌ No | Assigns ASIN |
| iTunes | ❌ No | Optional |
| Spotify | ❌ No | Not used |
| Google Play | ❌ No | Optional |
| Kobo | ❌ No | Optional |
| Findaway | ⚠️ Some retailers | Required for bookstores |
| Libraries | ⚠️ Often | Helps with cataloging |
| Bookstores | ✅ Yes | Required for ordering |

### Getting an ISBN

#### United States (Bowker)

```typescript
interface ISBNPricing {
  single: {
    quantity: 1;
    price: '$125';
    costPerISBN: '$125';
  };
  block10: {
    quantity: 10;
    price: '$295';
    costPerISBN: '$29.50';
  };
  block100: {
    quantity: 100;
    price: '$575';
    costPerISBN: '$5.75';
  };
  block1000: {
    quantity: 1000;
    price: '$1500';
    costPerISBN: '$1.50';
  };
}
```

#### Other Countries

| Country | Agency | Cost |
|---------|--------|------|
| **United States** | Bowker | $125-1,500 |
| **United Kingdom** | Nielsen | Free-£100+ |
| **Canada** | Library & Archives Canada | Free |
| **Australia** | Thorpe-Bowker | AUD $44-220 |
| **Germany** | MVB | €25-150 |
| **France** | AFNIL | €90-250 |

### ISBN Best Practices

```markdown
## ISBN Guidelines

### One ISBN Per:
- [ ] Each format (audiobook, ebook, print, hardcover, paperback)
- [ ] Each edition (revised, anniversary, etc.)
- [ ] Each language translation
- [ ] Each publisher imprint

### Same ISBN For:
- [ ] Different retailers (one ISBN for all platforms)
- [ ] Different prices (price changes don't require new ISBN)
- [ ] Reprints (if content unchanged)

### Metadata to Register:
- [ ] Title and subtitle
- [ ] Author(s)
- [ ] Narrator(s)
- [ ] Publisher
- [ ] Publication date
- [ ] Language
- [ ] Subject categories
- [ ] Description
- [ ] Cover image
```

---

## ACX-Specific Requirements

### Rights Holder Verification

```markdown
## ACX Rights Verification Process

### Step 1: Claim Your Title
- Search ACX for your title
- Click "Claim This Title"
- Provide proof of ownership

### Step 2: Provide Documentation
Acceptable documents:
- Copyright registration certificate
- Publishing contract showing audio rights
- ISBN registration showing your name
- Letter from previous publisher (if rights reverted)

### Step 3: Verification
- ACX reviews within 3-5 business days
- May request additional documentation
- Once verified, you control the title

### Step 4: Choose Production Path
- Pay for Production (you pay narrator)
- Royalty Share (split royalties with narrator)
```

### ACX Contract Types

**Exclusivity Agreement (25% Royalty to Rights Holder)**
```
- 7-year exclusive license to Audible/Amazon
- Also available on iTunes and Audible.com
- NOT available on other platforms
- Higher royalty rate
- More marketing support
```

**Non-Exclusive Agreement (10% Royalty to Rights Holder)**
```
- No exclusivity requirement
- Can distribute everywhere simultaneously
- Lower royalty rate
- Less marketing support
```

---

## Legal Considerations

### Music Licensing

```typescript
interface MusicLicensing {
  // When music is used
  scenarios: {
    introMusic: 'Requires license';
    backgroundMusic: 'Requires license';
    chapterBreaks: 'Requires license';
    incidental: 'May require license';
  };
  
  // License types needed
  licenses: {
    masterUse: 'From recording copyright owner';
    syncLicense: 'From composition copyright owner';
    performance: 'Often covered by platform';
  };
  
  // Options
  options: {
    royaltyFree: 'Purchase once, use forever';
    creativeCommons: 'Free with attribution';
    customComposition: 'Commission original music';
    publicDomain: 'No license needed';
  };
  
  // Warning
  warning: 'Never use copyrighted music without a license';
}
```

### Trademark Considerations

| Issue | Guidance |
|-------|----------|
| **Book Title** | Titles generally not trademarkable alone |
| **Series Title** | May be trademarkable if distinctive |
| **Character Names** | Potentially trademarkable |
| **Logos/Branding** | Trademark recommended |
| **Using Others' Trademarks** | Avoid in titles, OK in descriptive text |

### Defamation & Privacy

```markdown
## Legal Review Checklist

### For Non-Fiction/Memoirs
- [ ] No false statements of fact about living people
- [ ] Opinions clearly presented as opinions
- [ ] Private facts not disclosed without consent
- [ ] No invasion of privacy
- [ ] Releases obtained for identifiable individuals

### For Fiction
- [ ] Characters not clearly based on real people
- [ ] Settings not clearly identifiable private locations
- [ ] Disclaimer included: "This is a work of fiction..."

### General
- [ ] No copyright infringement
- [ ] No trademark infringement
- [ ] Libel insurance considered (for high-risk content)
```

---

## Tax Considerations

### US Tax Treatment

```typescript
interface TaxConsiderations {
  // Income classification
  incomeType: 'Royalty income (Schedule E) or Business income (Schedule C)';
  
  // Deductible expenses
  deductions: [
    'Production costs',
    'Distribution fees',
    'Marketing expenses',
    'Home office (if applicable)',
    'Professional services',
    'Equipment and software'
  ];
  
  // Form 1099
  form1099: {
    threshold: '$10+ in royalties';
    issuer: 'Platforms/aggregators';
    deadline: 'January 31';
  };
  
  // Estimated taxes
  estimated: {
    required: 'If expecting $1,000+ tax liability';
    dueDates: ['April 15', 'June 15', 'September 15', 'January 15'];
  };
}
```

### International Tax

| Issue | Guidance |
|-------|----------|
| **VAT/GST** | Platforms typically collect and remit |
| **Withholding Tax** | May apply to non-US authors |
| **Tax Treaties** | Can reduce withholding rates |
| **Form W-8BEN** | Non-US authors submit to reduce withholding |

---

## Dispute Resolution

### Common Disputes

| Dispute Type | Resolution Approach |
|--------------|---------------------|
| **Royalty discrepancies** | Request detailed statement, audit rights |
| **Rights ownership** | Provide documentation, legal review |
| **Quality issues** | Revision requests, refund policy |
| **Contract breach** | Written notice, cure period, termination |
| **Infringement** | Takedown notice, legal action if needed |

### Dispute Resolution Process

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   DIRECT    │ →  │  MEDIATION  │ →  │ ARBITRATION │ →  │  LITIGATION │
│  NEGOTIATION│    │  (Optional) │    │  (If agreed)│    │  (Last resort)│
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     ↓                  ↓                  ↓                  ↓
  30 days            60 days            Binding           Court system
  resolution         facilitated        decision          (expensive)
                     settlement
```

---

## Resources

### Legal Resources

| Resource | Purpose | URL |
|----------|---------|-----|
| **Copyright Office** | Registration | copyright.gov |
| **Bowker** | ISBN Purchase | myidentifiers.com |
| **Authors Guild** | Legal advice | authorsguild.org |
| **ALLi** | Self-publishing guidance | allianceindependentauthors.org |
| **SFWA** | Science fiction/fantasy resources | sfwa.org |

### Contract Templates

- Authors Guild contract template
- SFWA contract analysis
- ACX sample agreements
- Findaway producer agreement

---

*Version: 1.0.0 | Last Updated: March 2026*
