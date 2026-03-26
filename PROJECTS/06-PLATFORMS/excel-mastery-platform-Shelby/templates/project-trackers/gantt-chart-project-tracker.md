# Gantt Chart Project Tracker

## Overview
Visual project timeline with Gantt chart, task dependencies, progress tracking, and resource allocation.

## Structure

### Sheet 1: Project Timeline (Gantt Chart)

| Task ID | Task Name | Start Date | End Date | Duration | Owner | Status | % Complete | Predecessors |
|---------|-----------|------------|----------|----------|-------|--------|------------|--------------|
| 1.0 | Project Initiation | 2026-01-01 | 2026-01-07 | 7 | PM | Complete | 100% | - |
| 1.1 | Define Scope | 2026-01-01 | 2026-01-03 | 3 | PM | Complete | 100% | - |
| 1.2 | Stakeholder Analysis | 2026-01-02 | 2026-01-05 | 4 | BA | Complete | 100% | 1.1 |
| 1.3 | Project Charter | 2026-01-04 | 2026-01-07 | 4 | PM | Complete | 100% | 1.2 |
| 2.0 | Planning Phase | 2026-01-08 | 2026-01-21 | 14 | PM | In Progress | 75% | 1.0 |
| 2.1 | Requirements Gathering | 2026-01-08 | 2026-01-14 | 7 | BA | Complete | 100% | 1.3 |
| 2.2 | Technical Design | 2026-01-10 | 2026-01-17 | 8 | Tech Lead | In Progress | 60% | 2.1 |
| 2.3 | Resource Planning | 2026-01-15 | 2026-01-21 | 7 | PM | Not Started | 0% | 2.1 |
| 3.0 | Execution Phase | 2026-01-22 | 2026-03-15 | 53 | PM | Not Started | 0% | 2.0 |
| 3.1 | Development Sprint 1 | 2026-01-22 | 2026-02-04 | 14 | Dev Team | Not Started | 0% | 2.2 |
| 3.2 | Development Sprint 2 | 2026-02-05 | 2026-02-18 | 14 | Dev Team | Not Started | 0% | 3.1 |
| 3.3 | Development Sprint 3 | 2026-02-19 | 2026-03-04 | 14 | Dev Team | Not Started | 0% | 3.2 |
| 3.4 | Testing | 2026-03-05 | 2026-03-11 | 7 | QA | Not Started | 0% | 3.3 |
| 3.5 | UAT | 2026-03-08 | 2026-03-15 | 8 | Client | Not Started | 0% | 3.4 |
| 4.0 | Closure | 2026-03-16 | 2026-03-22 | 7 | PM | Not Started | 0% | 3.0 |

### Gantt Chart Visualization (Conditional Formatting)

Create a timeline grid with dates across the top and conditional formatting to show task bars:

```
         Jan 2026                          Feb 2026                          Mar 2026
Task    1  8  15  22  29  5  12  19  26  2  9  16  23  2  9  16  22
1.0     ████████████████
1.1     ███████
1.2       ████████
1.3         ████████
2.0               ████████████████████████████████
2.1               ████████████████
2.2                   ████████████████
2.3                         ████████████████
3.0                               █████████████████████████████████████████████████████████████████████████████
...
```

### Key Formulas

```excel
// Duration (Days)
=End_Date-Start_Date+1

// Days Remaining
=IF(Status="Complete",0,End_Date-TODAY())

// Days Elapsed
=IF(Status="Complete",Duration,TODAY()-Start_Date)

// % Complete (Auto-calculate based on dates)
=IF(Status="Complete",100%,IF(TODAY()<Start_Date,0%,MIN(100%,(TODAY()-Start_Date)/Duration)))

// Status from % Complete
=IF(%Complete=100%,"Complete",IF(%Complete>0,"In Progress","Not Started"))

// Critical Path (Yes/No)
=IF(Predecessors="-","Yes",IF(%Complete<100%,"Yes","No"))
```

### Conditional Formatting for Gantt Bars

```excel
// Create date header row (Row 1)
=DATE(2026,1,1)+COLUMN()-3

// Task bar formatting (starting from column G)
=AND(G$1>=$C2,G$1<=$D2)

// Color by status:
// Complete: Green
=AND($G2="Complete",G$1>=$C2,G$1<=$D2)

// In Progress: Yellow
=AND($G2="In Progress",G$1>=$C2,G$1<=$D2)

// Not Started: Gray
=AND($G2="Not Started",G$1>=$C2,G$1<=$D2)

// Overdue: Red
=AND(TODAY()>$D2,$G2<>"Complete",G$1>=$C2,G$1<=$D2)
```

### Sheet 2: Resource Allocation

| Resource | Role | Availability | Jan Week 1 | Jan Week 2 | Jan Week 3 | Jan Week 4 | ... | Utilization |
|----------|------|--------------|------------|------------|------------|------------|-----|-------------|
| John Doe | PM | 40 hrs/wk | 40 | 40 | 40 | 40 | ... | 100% |
| Jane Smith | BA | 40 hrs/wk | 30 | 40 | 20 | 0 | ... | 68% |
| Dev Team | Dev | 120 hrs/wk | 0 | 0 | 40 | 80 | ... | 33% |
| QA Team | QA | 80 hrs/wk | 0 | 0 | 0 | 0 | ... | 0% |

### Resource Formulas

```excel
// Weekly Utilization %
=SUM(Allocated_Hours)/Availability_Hours

// Over-allocated Alert
=IF(Allocated>Available,"⚠️ OVER","✓ OK")

// Resource Conflict Check
=IF(SUMIFS(Hours,Resource,Name,Week,Current)>Available,"CONFLICT","OK")
```

### Sheet 3: Project Dashboard

```
╔══════════════════════════════════════════════════════════╗
║  PROJECT DASHBOARD                                       ║
║  Project: Website Redesign                               ║
║  Start: 2026-01-01    End: 2026-03-22                   ║
╠══════════════════════════════════════════════════════════╣
║  OVERALL PROGRESS                    ════════════░░ 75%  ║
║                                                           ║
║  BUDGET                                                    ║
║  Planned: $150,000    Actual: $95,000    Variance: +$5K  ║
║                                                           ║
║  TIMELINE                                                  ║
║  Days Elapsed: 52     Days Remaining: 29                  ║
║  On Track: ✓                                             ║
║                                                           ║
║  TASKS                                                     ║
║  Total: 15    Complete: 8    In Progress: 3    Pending: 4 ║
║                                                           ║
║  RISKS                                                     ║
║  High: 0    Medium: 2    Low: 3                          ║
║                                                           ║
║  MILESTONES                                                ║
║  ✓ Project Kickoff          2026-01-01                   ║
║  ✓ Requirements Sign-off    2026-01-14                   ║
║  → Design Approval          2026-01-21    (On Track)     ║
║  ○ Development Complete     2026-03-04                   ║
║  ○ Launch                   2026-03-22                   ║
╚══════════════════════════════════════════════════════════╝
```

### Dashboard Formulas

```excel
// Overall Progress
=SUMPRODUCT(%Complete,Duration)/SUM(Duration)

// Budget Variance
=Planned_Budget-Actual_Spend

// Days Elapsed
=TODAY()-Start_Date

// Days Remaining
=End_Date-TODAY()

// Tasks Complete
=COUNTIF(Status_Column,"Complete")

// On Track Status
=IF(AND(%Complete>=Expected%,Days_Remaining>=0),"On Track","At Risk")
```

### Milestone Tracker

| Milestone | Target Date | Actual Date | Status | Notes |
|-----------|-------------|-------------|--------|-------|
| Project Kickoff | 2026-01-01 | 2026-01-01 | ✓ Complete | All stakeholders present |
| Requirements Sign-off | 2026-01-14 | 2026-01-13 | ✓ Complete | Signed early |
| Design Approval | 2026-01-21 | | → In Progress | Client review scheduled |
| Development Complete | 2026-03-04 | | ○ Pending | |
| Launch | 2026-03-22 | | ○ Pending | |

## Usage Tips

1. **Update weekly** - Keep task status current
2. **Track dependencies** - Update predecessors when tasks shift
3. **Monitor critical path** - Focus on tasks that affect end date
4. **Resource leveling** - Balance workload across team
5. **Communicate changes** - Share updates with stakeholders

---

**File Format**: Excel (.xlsx) or Google Sheets
**Difficulty**: Intermediate
**Time to Set Up**: 45 minutes
