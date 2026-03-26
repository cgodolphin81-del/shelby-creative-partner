# Personal Monthly Budget Template

## Overview
A comprehensive personal budget tracker with automatic calculations, category breakdowns, and visual spending analysis.

## Structure

### Sheet 1: Monthly Budget

| Category | Subcategory | Budgeted | Actual | Difference | % of Total |
|----------|-------------|----------|--------|------------|------------|
| **INCOME** | | | | | |
| | Salary/Wages | $0.00 | $0.00 | $0.00 | |
| | Freelance | $0.00 | $0.00 | $0.00 | |
| | Investments | $0.00 | $0.00 | $0.00 | |
| | Other Income | $0.00 | $0.00 | $0.00 | |
| | **Total Income** | **$0.00** | **$0.00** | **$0.00** | **100%** |
| | | | | | |
| **EXPENSES** | | | | | |
| Housing | Rent/Mortgage | $0.00 | $0.00 | $0.00 | |
| | Utilities | $0.00 | $0.00 | $0.00 | |
| | Insurance | $0.00 | $0.00 | $0.00 | |
| | Maintenance | $0.00 | $0.00 | $0.00 | |
| Transportation | Car Payment | $0.00 | $0.00 | $0.00 | |
| | Gas/Fuel | $0.00 | $0.00 | $0.00 | |
| | Public Transit | $0.00 | $0.00 | $0.00 | |
| | Maintenance | $0.00 | $0.00 | $0.00 | |
| Food | Groceries | $0.00 | $0.00 | $0.00 | |
| | Dining Out | $0.00 | $0.00 | $0.00 | |
| | Coffee/Snacks | $0.00 | $0.00 | $0.00 | |
| Personal | Healthcare | $0.00 | $0.00 | $0.00 | |
| | Clothing | $0.00 | $0.00 | $0.00 | |
| | Personal Care | $0.00 | $0.00 | $0.00 | |
| Entertainment | Subscriptions | $0.00 | $0.00 | $0.00 | |
| | Hobbies | $0.00 | $0.00 | $0.00 | |
| | Entertainment | $0.00 | $0.00 | $0.00 | |
| Savings | Emergency Fund | $0.00 | $0.00 | $0.00 | |
| | Retirement | $0.00 | $0.00 | $0.00 | |
| | Investments | $0.00 | $0.00 | $0.00 | |
| Debt | Credit Cards | $0.00 | $0.00 | $0.00 | |
| | Student Loans | $0.00 | $0.00 | $0.00 | |
| | Other Debt | $0.00 | $0.00 | $0.00 | |
| | **Total Expenses** | **$0.00** | **$0.00** | **$0.00** | **100%** |
| | | | | | |
| **SUMMARY** | | | | | |
| Net Income | | $0.00 | $0.00 | $0.00 | |
| Savings Rate | | | | 0% | |

### Key Formulas

```excel
// Difference (Column E)
=C2-D2

// % of Total (Column F)
=IF($C$8>0,C2/$C$8,0)

// Total Income
=SUM(C2:C5)

// Total Expenses
=SUM(C10:C30)

// Net Income
=C8-C31

// Savings Rate
=IF(C8>0,(C32+C33+C34)/C8,0)
```

### Conditional Formatting Rules

1. **Positive Difference (Under Budget)**: Green fill
   - Formula: `=$E2>0`

2. **Negative Difference (Over Budget)**: Red fill
   - Formula: `=$E2<0`

3. **Savings Rate < 20%**: Warning color
   - Formula: `=$C$38<0.2`

## Usage Instructions

1. **Set Budget Amounts**: Enter your planned budget in the "Budgeted" column
2. **Track Spending**: Update "Actual" column as expenses occur
3. **Review Differences**: Check "Difference" column for over/under budget
4. **Analyze Percentages**: Use "% of Total" to see spending distribution
5. **Adjust Monthly**: Copy sheet for new month, update budgets based on learnings

## Recommended Budget Percentages (50/30/20 Rule)

| Category | Recommended % |
|----------|---------------|
| Needs (Housing, Food, Transport) | 50% |
| Wants (Entertainment, Dining) | 30% |
| Savings & Debt Repayment | 20% |

## Tips for Success

- Track expenses daily for accuracy
- Review budget weekly to stay on track
- Adjust categories based on actual spending patterns
- Build emergency fund before aggressive investing
- Automate savings transfers on payday

---

**File Format**: Excel (.xlsx) or Google Sheets
**Difficulty**: Beginner
**Time to Set Up**: 15 minutes
