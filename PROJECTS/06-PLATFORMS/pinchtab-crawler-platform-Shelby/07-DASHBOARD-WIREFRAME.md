# Dashboard Wireframe

## GEO SEO Crawler Platform - UI/UX Design Specification

---

## Design System

### Color Palette

```
Primary:
  - Brand Blue: #2563EB (Tailwind blue-600)
  - Brand Blue Hover: #1D4ED8 (blue-700)
  - Brand Blue Light: #DBEAFE (blue-100)

Semantic:
  - Success: #10B981 (emerald-500)
  - Warning: #F59E0B (amber-500)
  - Error: #EF4444 (red-500)
  - Info: #3B82F6 (blue-500)

Neutral:
  - Background: #FFFFFF (white)
  - Background Secondary: #F9FAFB (gray-50)
  - Border: #E5E7EB (gray-200)
  - Text Primary: #111827 (gray-900)
  - Text Secondary: #6B7280 (gray-500)
  - Text Muted: #9CA3AF (gray-400)

Platform Colors:
  - Google: #4285F4
  - Bing: #00809D
  - Perplexity: #20B2AA
  - Claude: #D97706
```

### Typography

```
Font Family: Inter (Google Fonts)

Sizes:
  - xs: 0.75rem (12px)
  - sm: 0.875rem (14px)
  - base: 1rem (16px)
  - lg: 1.125rem (18px)
  - xl: 1.25rem (20px)
  - 2xl: 1.5rem (24px)
  - 3xl: 1.875rem (30px)

Weights:
  - Regular: 400
  - Medium: 500
  - Semibold: 600
  - Bold: 700
```

### Spacing

```
Based on 4px grid:
  - 1: 4px
  - 2: 8px
  - 3: 12px
  - 4: 16px
  - 5: 20px
  - 6: 24px
  - 8: 32px
  - 10: 40px
  - 12: 48px
  - 16: 64px
```

---

## Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SIDEBAR (256px)          │  TOP BAR (64px)                                │
│                           │────────────────────────────────────────────────│
│  ┌─────────────────────┐  │                                                 │
│  │  🦎 GEO Crawler    │  │  [Search...]              [🔔] [👤] [⚙️]        │
│  │                     │  │                                                 │
│  ├─────────────────────┤  ├─────────────────────────────────────────────────┤
│  │  📊 Dashboard       │  │                                                  │
│  │  🎯 Sites           │  │                                                  │
│  │  🔑 Keywords        │  │                                                  │
│  │  🕷️ Crawl Jobs      │  │    MAIN CONTENT AREA                           │
│  │  📈 Results         │  │                                                  │
│  │  📊 GEO Scores      │  │    (Dynamic based on route)                    │
│  │  ⚠️ Alerts          │  │                                                  │
│  │                     │  │                                                  │
│  ├─────────────────────┤  │                                                  │
│  │  📁 Reports         │  │                                                  │
│  │  👥 Team            │  │                                                  │
│  │  🔌 API Keys        │  │                                                  │
│  │  ⚙️ Settings        │  │                                                  │
│  │                     │  │                                                  │
│  └─────────────────────┘  │                                                  │
│                           │                                                  │
│  [Quota: 850/1000]       │                                                  │
│  ████████████░░░░ 85%    │                                                  │
│                           │                                                  │
└───────────────────────────┴─────────────────────────────────────────────────┘
```

---

## Page 1: Dashboard (Home)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Dashboard                                     [+ New Crawl Job]            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ Avg GEO Score│  │ Total Crawls │  │ Citations    │  │ Active Jobs  │   │
│  │              │  │   Today      │  │   Found      │  │   Running    │   │
│  │    72.5      │  │     245      │  │     89       │  │      3       │   │
│  │   ↑ 5.2%     │  │   ↑ 12%      │  │   ↑ 8%       │  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  GEO Score Trend (Last 30 Days)                      [7d] [14d] [30d] │  │
│  │                                                                       │  │
│  │       ╭────╮                                                          │  │
│  │      ╱      ╲    ╭────                                                │  │
│  │     ╱        ╲  ╱      ╲                                               │  │
│  │    ╱          ╱        ╲    ╭────                                     │  │
│  │   ╱          ╱          ╲  ╱                                          │  │
│  │  ╱          ╱            ╱                                            │  │
│  │ ╱          ╱            ╱                                             │  │
│  │────────────────────────────────────────────────────────────────────   │  │
│  │  Mar 1    Mar 8       Mar 15      Mar 22                              │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  Platform Breakdown            │  │  Recent Alerts                  │   │
│  │                                │  │                                 │   │
│  │  Google     ████████░░ 75.2    │  │  ⚠️ Score dropped 15pts        │   │
│  │  Bing       ██████░░░░ 68.5    │  │     "best seo tools" - Google   │   │
│  │  Perplexity ███████░░░ 73.8    │  │     2 hours ago                 │   │
│  │                                │  │                                 │   │
│  │  [View Details]                │  │  ⚠️ Citation lost              │   │
│  │                                │  │     "free seo checker" - Bing   │   │
│  │                                │  │     5 hours ago                 │   │
│  │                                │  │                                 │   │
│  │                                │  │  [View All Alerts]              │   │
│  └────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  Top Performing Keywords                              [View All]     │  │
│  │                                                                       │  │
│  │  Keyword              Category        Score   Citations   Trend      │  │
│  │  ─────────────────────────────────────────────────────────────────   │  │
│  │  best seo tools       SEO Software     85.0      12       ↑↑↑       │  │
│  │  free seo checker     SEO Tools        78.5       8       ↑↑        │  │
│  │  seo audit tool       Analytics        72.0       6       →         │  │
│  │  keyword research     Research         68.5       5       ↓         │  │
│  │  backlink analyzer    Link Building    65.0       4       ↓↓        │  │
│  │                                                               [→]   │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Component Specs

**Stat Cards:**
- Size: 256px × 120px
- Background: White with subtle shadow
- Value: 3xl, semibold, primary color
- Change badge: Small pill with arrow icon
- Icon: Top-right corner, 40% opacity

**Line Chart (Recharts):**
- Width: 100%, Height: 280px
- Gradient fill under line
- Dotted grid lines
- Tooltip on hover
- Responsive to container

**Progress Bars (Platform):**
- Height: 8px
- Rounded corners
- Platform-specific colors
- Percentage label right-aligned

**Alert Cards:**
- Background: Amber-50 for warnings, Red-50 for critical
- Icon left, message center, timestamp right
- Click to navigate to detail

**Keyword Table:**
- Striped rows (alternating gray-50)
- Trend column: Arrow icons with color coding
- Hover effect on rows
- Click to view keyword detail

---

## Page 2: Sites Management

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Tracked Sites                               [+ Add Site]  [Import CSV]     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [Search sites...]  [Filter: Status ▼]  [Sort: Name ▼]                     │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │ ☐ │ Site Name          │ Domain          │ Keywords │ Score │ Status │ │
│  │───┼────────────────────┼─────────────────┼──────────┼───────┼────────│ │
│  │ ☐ │ Example Corp       │ example.com     │    45    │ 72.5  │ ● Active│ │
│  │   │                    │                 │          │       │        │ │
│  │   │ Last crawl: 2h ago │                 │          │       │        │ │
│  │───┼────────────────────┼─────────────────┼──────────┼───────┼────────│ │
│  │ ☐ │ Acme Inc           │ acme.com        │    32    │ 68.2  │ ● Active│ │
│  │   │                    │                 │          │       │        │ │
│  │   │ Last crawl: 5h ago │                 │          │       │        │ │
│  │───┼────────────────────┼─────────────────┼──────────┼───────┼────────│ │
│  │ ☐ │ Old Project        │ oldproject.io   │    18    │ 45.0  │ ○ Paused│ │
│  │   │                    │                 │          │       │        │ │
│  │   │ Last crawl: 7d ago │                 │          │       │        │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  Showing 1-10 of 25 sites                              [< Prev] [Next >]   │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │  Site Detail Panel (slides in from right when row clicked)            │ │
│  │                                                                       │ │
│  │  Example Corp                                          [Edit] [⋮]    │ │
│  │  example.com                                                          │ │
│  │                                                                       │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │ │
│  │  │  Keywords   │  │  Crawls     │  │  Avg Score  │                   │ │
│  │  │     45      │  │    1,250    │  │    72.5     │                   │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                   │ │
│  │                                                                       │ │
│  │  Platform Performance                                                 │ │
│  │  ┌──────────────────────────────────────────────────────────────┐    │ │
│  │  │  Google    ████████████████░░░░  75.2  [35 citations]        │    │ │
│  │  │  Bing      ██████████████░░░░░░  68.5  [28 citations]        │    │ │
│  │  │  Perplex.  ███████████████░░░░░  73.8  [26 citations]        │    │ │
│  │  └──────────────────────────────────────────────────────────────┘    │ │
│  │                                                                       │ │
│  │  Recent Keywords                                                      │ │
│  │  ┌──────────────────────────────────────────────────────────────┐    │ │
│  │  │ best seo tools        85.0  ↑↑↑  [View]                     │    │ │
│  │  │ free seo checker      78.5  ↑↑   [View]                     │    │ │
│  │  │ seo audit tool        72.0  →    [View]                     │    │ │
│  │  └──────────────────────────────────────────────────────────────┘    │ │
│  │                                                                       │ │
│  │  [View Full Report]  [Configure Alerts]  [Export Data]                │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Add Site Modal

```
┌─────────────────────────────────────────────────────────┐
│  Add New Site                                    [✕]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Domain *                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ example.com                                     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Site Name (optional)                                   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Example Corporation                             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Description (optional)                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Our main company website                        │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Base URL (optional)                                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │ https://example.com                             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [+ Add Keywords Now]  (skip for later)         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│            [Cancel]          [Create Site]              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Page 3: Crawl Jobs

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Crawl Jobs                                  [+ New Crawl Job] [Schedule]   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Tabs: [All Jobs] [Running] [Completed] [Failed] [Scheduled]                │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │  Job Name           Platform   Status     Progress   Started    Actions│ │
│  │  ───────────────────────────────────────────────────────────────────  │ │
│  │  Daily Google       Google     ● Running   █████67%   2h ago    [⏹]   │ │
│  │  Crawl                                          30/45          [⋮]   │ │
│  │──────────────────────────────────────────────────────────────────────│ │
│  │  Weekly Full        All        ○ Pending   ░░░░░░░░   -        [▶]   │ │
│  │  Audit                                            0/135        [⋮]   │ │
│  │──────────────────────────────────────────────────────────────────────│ │
│  │  Bing Check         Bing       ✓ Done      █████100%  5h ago   [📊]  │ │
│  │                                               45/45           [⋮]   │ │
│  │──────────────────────────────────────────────────────────────────────│ │
│  │  Perplexity Mon.    Perplexity ✕ Failed   ████░80%   1d ago   [↻]   │ │
│  │  (timeout)                                24/30             [⋮]   │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### New Crawl Job Wizard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Create Crawl Job                                         Step 1 of 4       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ○ Basic Info  ○ Platforms  ○ Keywords  ○ Schedule                         │
│                                                                             │
│  Job Name *                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Weekly Full Platform Audit                                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Description (optional)                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Complete crawl across all platforms for all tracked keywords        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Site *                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Example Corp (example.com)                              [▼]         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Priority                                                                   │
│  ○ Low    ● Normal    ○ High    ○ Urgent                                   │
│                                                                             │
│                              [Cancel]  [Next: Select Platforms →]           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

Step 2: Platforms
┌─────────────────────────────────────────────────────────────────────────────┐
│  Select Platforms to Crawl                                Step 2 of 4       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ☑ ┌──────────────────────────────────────────────────────────────────┐   │
│  │ │  🟦 Google AI Overviews                                          │   │
│  │ │     Most important - appears in 65% of searches                  │   │
│  │ │     Est. time: 15 minutes                                        │   │
│  │ └──────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ☑ ┌──────────────────────────────────────────────────────────────────┐   │
│  │ │  🟦 Bing Copilot                                                 │   │
│  │ │     Growing importance, especially for enterprise                │   │
│  │ │     Est. time: 12 minutes                                        │   │
│  │ └──────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ☑ ┌──────────────────────────────────────────────────────────────────┐   │
│  │ │  🟩 Perplexity AI                                                │   │
│  │ │     High citation quality, tech-savvy audience                   │   │
│  │ │     Est. time: 18 minutes                                        │   │
│  │ └──────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ☐ ┌──────────────────────────────────────────────────────────────────┐   │
│  │ │  🟠 Claude AI                                                    │   │
│  │ │     Requires manual interaction, limited automation              │   │
│  │ │     Est. time: 30+ minutes                                       │   │
│  │ └──────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Total estimated time: 45 minutes  |  Total crawls: 135                    │
│                                                                             │
│  [← Back]                    [Next: Select Keywords →]                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Page 4: Crawl Results Detail

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ← Back to Results                                                          │
│                                                                             │
│  "best seo tools" - Google AI Overviews                        [📊] [⬇]    │
│  Crawled: Mar 21, 2026 at 10:15 AM                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  GEO Score: 85.0                              ████████████████░░░░   │  │
│  │                                                                       │  │
│  │  ● Our site WAS CITED (Position #1)                                   │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  AI Overview Answer                                                   │  │
│  │                                                                       │  │
│  │  The best SEO tools for 2026 include comprehensive platforms that     │  │
│  │  offer keyword research, site auditing, backlink analysis, and rank   │  │
│  │  tracking. Industry leaders like Example Corp provide integrated      │  │
│  │  solutions for businesses of all sizes...                            │  │
│  │                                                                       │  │
│  │  [Copy Text] [View Screenshot]                                        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  Citations (8 total)                                                        │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  #1  🟢 OUR SITE                                                     │  │
│  │  ┌────────────────────────────────────────────────────────────────┐  │  │
│  │  │ 🦎 Top 10 SEO Tools for 2026                                   │  │  │
│  │  │    example.com/blog/seo-tools                                  │  │  │
│  │  │    Our comprehensive guide covers the best SEO tools...        │  │  │
│  │  └────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                       │  │
│  │  #2  Competitor Analysis                                             │  │
│  │  ┌────────────────────────────────────────────────────────────────┐  │  │
│  │  │ 📊 SEO Software Comparison 2026                                │  │  │
│  │  │    competitor.com/seo-guide                                    │  │  │
│  │  │    Compare leading SEO platforms...                            │  │  │
│  │  └────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                       │  │
│  │  #3  Industry Resource                                               │  │
│  │  ┌────────────────────────────────────────────────────────────────┐  │  │
│  │  │ 🔧 Marketing Tools Directory                                   │  │  │
│  │  │    marketingtools.io/seo                                       │  │  │
│  │  │    Curated list of SEO tools...                                │  │  │
│  │  └────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                       │  │
│  │  [Show 5 more citations ▼]                                            │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  Historical Performance                                               │  │
│  │                                                                       │  │
│  │       ╭────                                                          │  │
│  │      ╱    ╲    ╭────                                                  │  │
│  │     ╱      ╲  ╱      ╲                                                │  │
│  │    ╱        ╱        ╲    ╭────                                       │  │
│  │   ╱        ╱          ╲  ╱                                           │  │
│  │  ╱        ╱            ╱                                             │  │
│  │────────────────────────────────────────────────────────────────────   │  │
│  │  Feb 21   Feb 28      Mar 7      Mar 14     Mar 21                   │  │
│  │                                                                       │  │
│  │  Avg Position: 1.8  |  Citation Rate: 85%  |  Trend: ↑ Improving     │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Page 5: GEO Scores Report

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  GEO Scores Report                                            [Export PDF]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Site: [Example Corp ▼]  Period: [Last 30 Days ▼]  Platform: [All ▼]       │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  Overall GEO Score: 72.5                              ↑ 7.3 (11.2%)  │  │
│  │                                                                       │  │
│  │  ┌────────────────────────────────────────────────────────────────┐  │  │
│  │  │                                                                │  │  │
│  │  │         ╭────                                                  │  │  │
│  │  │        ╱    ╲    ╭────                                        │  │  │
│  │  │       ╱      ╲  ╱      ╲    ╭────                              │  │  │
│  │  │      ╱        ╱        ╲  ╱                                    │  │  │
│  │  │     ╱        ╱          ╱                                      │  │  │
│  │  │    ╱        ╱          ╱                                       │  │  │
│  │  │   ╱        ╱          ╱                                        │  │  │
│  │  │  ╱        ╱          ╱                                         │  │  │
│  │  │─────────────────────────────────────────────────────────────   │  │  │
│  │  │                                                                │  │  │
│  │  └────────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌────────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │  By Platform                   │  │  By Keyword Category            │   │
│  │                                │  │                                 │   │
│  │  Google     75.2  ████████░░   │  │  SEO Software   78.5  ████░░░   │   │
│  │  Bing       68.5  ██████░░░░   │  │  SEO Tools      72.0  ███░░░░   │   │
│  │  Perplexity 73.8  ███████░░░   │  │  Analytics      68.5  ███░░░░   │   │
│  │                                │  │  Link Building  65.0  ██░░░░░   │   │
│  └────────────────────────────────┘  └─────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  Keyword-Level Scores                                                 │  │
│  │                                                                       │  │
│  │  Keyword              Category        Overall  Google  Bing  Perplex  │  │
│  │  ──────────────────────────────────────────────────────────────────  │  │
│  │  best seo tools       SEO Software     85.0    88.0   78.5    88.5   │  │
│  │  free seo checker     SEO Tools        78.5    82.0   72.0    81.5   │  │
│  │  seo audit tool       Analytics        72.0    75.5   68.0    72.5   │  │
│  │  keyword research     Research         68.5    70.0   65.5    70.0   │  │
│  │  backlink analyzer    Link Building    65.0    68.0   60.5    66.5   │  │
│  │                                                                       │  │
│  │  [Download CSV]                                                       │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Sidebar becomes hamburger menu, cards stack vertically |
| Tablet | 640-1024px | Sidebar collapsible, 2-column grid for cards |
| Desktop | 1024-1440px | Full sidebar, 4-column grid |
| Large | > 1440px | Max content width 1440px, centered |

---

## Interactive States

### Buttons

```
Default:  bg-blue-600 text-white
Hover:    bg-blue-700
Active:   bg-blue-800
Disabled: bg-gray-300 text-gray-500 cursor-not-allowed
```

### Table Rows

```
Default:  bg-white
Hover:    bg-gray-50
Selected: bg-blue-50
```

### Status Badges

```
Active/Success:  bg-emerald-100 text-emerald-800
Warning:         bg-amber-100 text-amber-800
Error/Failed:    bg-red-100 text-red-800
Pending:         bg-gray-100 text-gray-800
Running:         bg-blue-100 text-blue-800 animate-pulse
```

---

## Accessibility Requirements

- All interactive elements have visible focus states
- Color contrast ratio ≥ 4.5:1 for text
- ARIA labels on icon buttons
- Keyboard navigation support
- Screen reader announcements for status changes
- Skip-to-content link

---

*Document Version: 1.0*  
*Last Updated: 2026-03-21*
