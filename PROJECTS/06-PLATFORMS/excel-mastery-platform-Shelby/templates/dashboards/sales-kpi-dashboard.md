# Sales KPI Dashboard

## Overview
Executive sales dashboard with real-time KPIs, trend analysis, team performance, and pipeline visualization.

## Structure

### Sheet 1: Executive Dashboard

```
╔══════════════════════════════════════════════════════════════════════════╗
║  SALES DASHBOARD                              Period: Q1 2026            ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  REVENUE                GROWTH               WIN RATE         AVG DEAL   ║
║  $2.4M                 +18% YoY             42%              $48,500    ║
║  vs $2.0M              vs +12% target       vs 38% target    vs $45K    ║
║  ✓ On Track            ✓ Above Target       ✓ Above Target   ✓ On Track ║
║                                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║  MONTHLY REVENUE TREND                                                   ║
║                                                                          ║
║  $900K ┤                                    ╭───                        ║
║  $800K ┤                              ╭─────╯                           ║
║  $700K ┤                        ╭─────╯                                 ║
║  $600K ┤                  ╭─────╯                                       ║
║  $500K ┤            ╭─────╯                                             ║
║  $400K ┤      ╭─────╯                                                   ║
║  $300K ┤──────╯                                                         ║
║        Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep      ║
║                                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║  PIPELINE BY STAGE                  TOP PERFORMERS                      ║
║                                     ═══════════════                     ║
║  Qualified    ████████████████ $1.2M   1. Sarah Johnson    $520K  ██████║
║  Proposal     ████████████ $850K       2. Mike Chen        $485K  █████ ║
║  Negotiation  ████████ $620K           3. Emily Davis      $412K  ████  ║
║  Closed Won   ████████████████████ $2.4M 4. James Wilson    $398K  ████  ║
║                                     5. Lisa Anderson     $375K  ████   ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Sheet 2: KPI Metrics Table

| KPI | Current | Target | Previous | YoY Change | Status |
|-----|---------|--------|----------|------------|--------|
| **Revenue Metrics** | | | | | |
| Total Revenue | $2,400,000 | $2,300,000 | $2,034,000 | +18.0% | ✓ |
| MRR | $185,000 | $175,000 | $162,000 | +14.2% | ✓ |
| ARR | $2,220,000 | $2,100,000 | $1,944,000 | +14.2% | ✓ |
| Average Deal Size | $48,500 | $45,000 | $42,300 | +14.7% | ✓ |
| **Pipeline Metrics** | | | | | |
| Pipeline Value | $3,850,000 | $4,000,000 | $3,200,000 | +20.3% | ⚠️ |
| Pipeline Coverage | 3.2x | 3.5x | 2.8x | +14.3% | ⚠️ |
| Win Rate | 42% | 40% | 38% | +10.5% | ✓ |
| Sales Cycle (Days) | 45 | 50 | 52 | -13.5% | ✓ |
| **Activity Metrics** | | | | | |
| New Leads | 485 | 500 | 412 | +17.7% | ⚠️ |
| Opportunities Created | 156 | 150 | 128 | +21.9% | ✓ |
| Demos Completed | 89 | 85 | 72 | +23.6% | ✓ |
| Proposals Sent | 67 | 65 | 54 | +24.1% | ✓ |
| **Team Metrics** | | | | | |
| Quota Attainment | 104% | 100% | 96% | +8.3% | ✓ |
| Reps at Quota | 8/10 | 8/10 | 7/10 | +14.3% | ✓ |
| Ramp Time (Days) | 62 | 60 | 68 | -8.8% | ⚠️ |

### Key Formulas

```excel
// YoY Growth %
=(Current-Previous)/Previous

// Pipeline Coverage
=Pipeline_Value/Revenue_Target

// Win Rate
=Won_Deals/(Won_Deals+Lost_Deals)

// Average Deal Size
=Total_Revenue/Number_of_Deals

// Sales Cycle (Average Days)
=AVERAGE(Close_Date-Create_Date)

// Quota Attainment %
=Actual_Revenue/Quota

// MRR Growth Rate
=(Current_MRR-Previous_MRR)/Previous_MRR

// Pipeline by Stage Sum
=SUMIFS(Amount,Stage_Column,Stage_Name)
```

### Sheet 3: Sales Team Performance

| Rep | Region | Quota | Actual | Attainment % | Deals Won | Avg Deal | Pipeline | Rank |
|-----|--------|-------|--------|--------------|-----------|----------|----------|------|
| Sarah Johnson | Enterprise | $500K | $520K | 104% | 12 | $43,333 | $680K | 1 |
| Mike Chen | Enterprise | $500K | $485K | 97% | 10 | $48,500 | $590K | 2 |
| Emily Davis | Mid-Market | $400K | $412K | 103% | 15 | $27,467 | $520K | 3 |
| James Wilson | Mid-Market | $400K | $398K | 99.5% | 14 | $28,429 | $485K | 4 |
| Lisa Anderson | SMB | $350K | $375K | 107% | 22 | $17,045 | $420K | 5 |
| David Brown | SMB | $350K | $342K | 97.7% | 20 | $17,100 | $380K | 6 |
| Rachel Green | Enterprise | $500K | $478K | 95.6% | 11 | $43,455 | $620K | 7 |
| Tom Harris | Mid-Market | $400K | $385K | 96.3% | 13 | $29,615 | $450K | 8 |
| Amy Chen | SMB | $350K | $328K | 93.7% | 18 | $18,222 | $340K | 9 |
| Chris Martin | SMB | $350K | $312K | 89.1% | 16 | $19,500 | $295K | 10 |
| **TOTAL** | | **$4,100K** | **$4,035K** | **98.4%** | **151** | **$29,364** | **$4,780K** | |

### Team Performance Formulas

```excel
// Attainment %
=Actual/Quota

// Rank
=RANK(Attainment,Attainment_Range,0)

// Commission (Tiered)
=IF(Attainment>=1.2,(Actual*0.15),IF(Attainment>=1,(Actual*0.12),IF(Attainment>=0.8,(Actual*0.08),Actual*0.05)))

// Performance Status
=IF(Attainment>=1,"✓ On Track",IF(Attainment>=0.8,"⚠️ At Risk","✗ Behind"))
```

### Sheet 4: Pipeline Analysis

| Stage | Count | Total Value | Avg Value | Win Rate | Avg Days |
|-------|-------|-------------|-----------|----------|----------|
| Prospecting | 45 | $1,250,000 | $27,778 | - | 5 |
| Qualified | 32 | $980,000 | $30,625 | 65% | 12 |
| Proposal | 24 | $850,000 | $35,417 | 55% | 21 |
| Negotiation | 18 | $620,000 | $34,444 | 48% | 35 |
| Closed Won | 151 | $2,400,000 | $15,894 | 42% | 45 |
| Closed Lost | 208 | $3,100,000 | $14,904 | 58% | 38 |

### Pipeline Movement Formula

```excel
// Stage Conversion Rate
=Next_Stage_Count/Current_Stage_Count

// Velocity
=(Total_Value*Win_Rate*100)/Sales_Cycle_Days

// Weighted Pipeline
=SUMPRODUCT(Value,Stage_Probability)
```

### Sheet 5: Monthly Trend Data

| Month | Revenue | New Deals | Avg Deal | Win Rate | Pipeline |
|-------|---------|-----------|----------|----------|----------|
| Jan 2025 | $680,000 | 42 | $42,500 | 38% | $2,800,000 |
| Feb 2025 | $720,000 | 45 | $43,200 | 39% | $2,950,000 |
| Mar 2025 | $750,000 | 48 | $44,100 | 40% | $3,100,000 |
| ... | ... | ... | ... | ... | ... |
| Jan 2026 | $780,000 | 52 | $46,200 | 41% | $3,450,000 |
| Feb 2026 | $810,000 | 54 | $47,800 | 42% | $3,650,000 |
| Mar 2026 | $810,000 | 50 | $48,500 | 42% | $3,850,000 |

## Chart Recommendations

1. **Revenue Trend** - Line chart (12 months)
2. **Pipeline by Stage** - Funnel chart
3. **Team Performance** - Bar chart with quota line
4. **Win Rate Trend** - Line chart
5. **Deal Size Distribution** - Histogram
6. **Sales Cycle by Rep** - Bar chart
7. **Revenue by Region** - Pie or map chart
8. **Activity vs Results** - Scatter plot

## Conditional Formatting Rules

```excel
// KPI Status Colors
=IF(Actual>=Target,"Green",IF(Actual>=Target*0.9,"Yellow","Red"))

// Variance Highlighting
=IF(ABS(Variance)/Target>0.1,"Red","")

// Top Performers (Top 3)
=Rank<=3

// At Risk (<80% quota)
=Attainment<0.8
```

## Automated Insights

```excel
// Best Performing Rep
=INDEX(Rep_Name,MATCH(MAX(Attainment),Attainment_Range,0))

// Largest Deal This Month
=MAXIFS(Deal_Value,Close_Date_Month,Current_Month)

// Pipeline at Risk (No movement >30 days)
=COUNTIFS(Last_Activity,"<"&TODAY()-30,Stage,"<>Closed Won")

// Forecast (Based on weighted pipeline)
=SUMPRODUCT(Pipeline_Value,Stage_Probability)
```

---

**File Format**: Excel (.xlsx) or Google Sheets
**Difficulty**: Intermediate
**Time to Set Up**: 60 minutes
**Charts Required**: 6-8 charts for full dashboard
