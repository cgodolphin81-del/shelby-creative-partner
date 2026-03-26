# 🏗️ Site Architecture Template

## Pillar-Cluster Model

```
                    [PILLAR PAGE]
                    /    |    \
                   /     |     \
              [Cluster] [Cluster] [Cluster]
               /  \      /  \      /  \
           [Article]  [Article]  [Article]
```

---

## 📐 Architecture Blueprint

### Level 1: Pillar Pages (3-5 total)
- Broad topic coverage (3000-5000 words)
- Target high-volume head terms
- Link to all cluster pages
- Example: "Complete Guide to Home Solar"

### Level 2: Cluster Pages (10-15 total)
- Specific subtopics (1500-2500 words)
- Target mid-tail keywords
- Link to pillar and related articles
- Example: "Solar Panel Types Compared"

### Level 3: Supporting Articles (50-100 total)
- Long-tail, specific questions (800-1500 words)
- Target question-based queries
- Link to cluster and pillar pages
- Example: "How Many Solar Panels Do I Need?"

---

## 🔗 Internal Linking Rules

### The 3-2-1 Rule
- **Each article links to**: 
  - 3 related articles (same cluster)
  - 2 cluster pages (related topics)
  - 1 pillar page (parent topic)

### Anchor Text Distribution
| Type | Percentage | Example |
|------|------------|---------|
| Exact match | 20% | "solar panel efficiency" |
| Partial match | 30% | "efficient solar panels" |
| Branded | 10% | "EnergySage calculator" |
| Generic | 20% | "click here", "read more" |
| URL | 20% | "solar-guide.com/panels" |

### Link Depth
- All pages reachable within 3 clicks from homepage
- Pillar pages: 1 click from home
- Cluster pages: 2 clicks from home
- Articles: 3 clicks from home

---

## 📋 Site Structure Template

```
Homepage
│
├── /pillar-topic-1/ (Pillar Page)
│   ├── /cluster-1a/ (Cluster)
│   │   ├── /article-1a1/
│   │   ├── /article-1a2/
│   │   └── /article-1a3/
│   ├── /cluster-1b/ (Cluster)
│   │   ├── /article-1b1/
│   │   └── /article-1b2/
│   └── /cluster-1c/ (Cluster)
│       ├── /article-1c1/
│       └── /article-1c2/
│
├── /pillar-topic-2/ (Pillar Page)
│   ├── /cluster-2a/ (Cluster)
│   └── /cluster-2b/ (Cluster)
│
├── /pillar-topic-3/ (Pillar Page)
│   └── /cluster-3a/ (Cluster)
│
├── /blog/ (Latest articles)
├── /about/
├── /contact/
└── /resources/ (Tools, calculators, downloads)
```

---

## 🗺️ Topic Cluster Examples

### Example: Home Solar Niche

**Pillar 1: Solar Panels**
- Cluster: Types of Solar Panels
  - Monocrystalline vs Polycrystalline
  - Thin-Film Solar Explained
  - Best Solar Panels 2026
- Cluster: Solar Panel Cost
  - Cost Per Watt Calculator
  - ROI by State
  - Tax Credits Guide
- Cluster: Installation
  - DIY vs Professional
  - Roof Requirements
  - Permit Process

**Pillar 2: Solar Batteries**
- Cluster: Battery Types
  - Lithium-Ion Guide
  - Saltwater Batteries
  - Lead-Acid Comparison
- Cluster: Battery Sizing
  - How Much Storage Needed
  - Whole Home Backup
  - Essential Loads Only
- Cluster: Top Brands
  - Tesla Powerwall Review
  - Enphase IQ Battery
  - LG Chem RESU

**Pillar 3: Solar Inverters**
- Cluster: Inverter Types
  - String Inverters
  - Microinverters
  - Power Optimizers
- Cluster: Sizing & Selection
  - Inverter Sizing Guide
  - Efficiency Ratings
  - Warranty Comparison

---

## 📊 URL Structure Best Practices

### ✅ Good URLs
```
/solar-panels/types/monocrystalline-vs-polycrystalline
/solar-batteries/sizing/how-much-storage-needed
/guides/solar-tax-credits-2026
```

### ❌ Bad URLs
```
/solar-panels-types-monocrystalline-polycrystalline-differences-explained
/p=123
/blog/2026/03/15/category/solar/types/mono-vs-poly
```

### Rules
- Use hyphens, not underscores
- Keep under 60 characters
- Include target keyword
- Use lowercase only
- No stop words (the, a, an, and)
- Reflect hierarchy

---

## 🔧 Navigation Structure

### Primary Navigation (Header)
```
Home | Solar Panels | Solar Batteries | Inverters | Calculators | Blog
```

### Secondary Navigation (Sidebar/Footer)
```
Popular Topics:
- Solar Panel Cost
- Best Solar Panels
- Battery Backup
- Tax Credits
- Installation Guide

Resources:
- Savings Calculator
- Installer Finder
- Incentive Database
- Comparison Tool
```

### Breadcrumb Structure
```
Home > Solar Panels > Types > Monocrystalline vs Polycrystalline
```

---

## 📈 Silo Interlinking Map

```
                    HOMEPAGE
                       │
         ┌─────────────┼─────────────┐
         │             │             │
    [SOLAR]      [BATTERIES]   [INVERTERS]
    Pillar         Pillar         Pillar
       │              │              │
   ┌───┼───┐      ┌───┼───┐      ┌───┼───┐
   │   │   │      │   │   │      │   │   │
 Types Cost Install Types Size Brands Types Size Compare
   │   │   │      │   │   │      │   │   │
   └───┴───┘      └───┴───┘      └───┴───┘
    Articles       Articles       Articles
    
    CROSS-SILO LINKS:
    - Solar → Batteries (storage pairing)
    - Batteries → Inverters (compatibility)
    - Inverters → Solar (system design)
```

---

## 🎯 Content Gap Analysis Template

| Topic | Competitor A | Competitor B | Competitor C | Our Opportunity |
|-------|--------------|--------------|--------------|-----------------|
| Solar types | ✓ | ✓ | ✗ | Create definitive guide |
| Cost calculator | ✗ | ✓ | ✗ | Build interactive tool |
| State incentives | Partial | ✗ | ✓ | Create comprehensive database |
| Installation video | ✗ | ✗ | ✗ | Create video series |

---

## 📝 Implementation Checklist

- [ ] Define 3-5 pillar topics
- [ ] Map 10-15 cluster pages
- [ ] Outline 50+ supporting articles
- [ ] Create URL structure
- [ ] Design navigation menu
- [ ] Set up breadcrumb schema
- [ ] Create internal linking spreadsheet
- [ ] Build topic cluster visualization
- [ ] Audit existing content (if any)
- [ ] Identify content gaps

---

*Next: Use this architecture to plan your content workflow →*
