# Inventory Stock Tracker Template

## Overview
Complete inventory management system with stock levels, reorder alerts, supplier tracking, and valuation reports.

## Structure

### Sheet 1: Inventory Master List

| SKU | Product Name | Category | Unit Cost | Selling Price | Quantity On Hand | Reorder Point | Max Stock | Location | Supplier | Last Restocked |
|-----|--------------|----------|-----------|---------------|------------------|---------------|-----------|----------|----------|----------------|
| SKU001 | Widget A | Electronics | $12.50 | $24.99 | 150 | 50 | 200 | A-01-01 | Supplier A | 2026-03-15 |
| SKU002 | Widget B | Electronics | $18.00 | $34.99 | 35 | 40 | 150 | A-01-02 | Supplier A | 2026-02-28 |
| SKU003 | Gadget X | Accessories | $8.25 | $19.99 | 200 | 75 | 300 | B-02-01 | Supplier B | 2026-03-10 |
| SKU004 | Gadget Y | Accessories | $15.00 | $29.99 | 45 | 60 | 200 | B-02-02 | Supplier B | 2026-03-01 |
| SKU005 | Tool Pro | Tools | $45.00 | $89.99 | 25 | 20 | 50 | C-03-01 | Supplier C | 2026-03-18 |

### Key Formulas

```excel
// Stock Status
=IF(Quantity=0,"Out of Stock",IF(Quantity<=Reorder_Point,"Reorder Needed",IF(Quantity>Max_Stock,"Overstock","OK")))

// Inventory Value (at Cost)
=Quantity*Unit_Cost

// Potential Revenue
=Quantity*Selling_Price

// Profit Margin %
=(Selling_Price-Unit_Cost)/Selling_Price

// Days Since Restocked
=TODAY()-Last_Restocked

// Reorder Quantity
=IF(Quantity<=Reorder_Point,Max_Stock-Quantity,0)
```

### Sheet 2: Stock Movements Log

| Date | SKU | Product | Type | Quantity | Before | After | Reference | Notes |
|------|-----|---------|------|----------|--------|-------|-----------|-------|
| 2026-03-21 | SKU001 | Widget A | Sale | -5 | 155 | 150 | ORD-1234 | Online order |
| 2026-03-20 | SKU002 | Widget B | Sale | -3 | 38 | 35 | ORD-1233 | Walk-in |
| 2026-03-18 | SKU005 | Tool Pro | Restock | +25 | 0 | 25 | PO-5678 | Supplier delivery |
| 2026-03-15 | SKU001 | Widget A | Restock | +100 | 55 | 155 | PO-5677 | Supplier delivery |
| 2026-03-14 | SKU003 | Gadget X | Adjustment | -2 | 202 | 200 | ADJ-001 | Damaged items |
| 2026-03-12 | SKU004 | Gadget Y | Sale | -8 | 53 | 45 | ORD-1230 | Bulk order |

### Movement Types
- Sale
- Restock
- Return
- Adjustment
- Transfer
- Write-off

### Sheet 3: Reorder Alerts Dashboard

```
╔══════════════════════════════════════════════════════════════╗
║  INVENTORY ALERTS                                 Mar 22, 2026║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ⚠️  REORDER NEEDED (5 items)                                ║
║  ─────────────────────────────────────────────────────────   ║
║  SKU002  Widget B         Current: 35  Need: 40  Order: 115  ║
║  SKU004  Gadget Y         Current: 45  Need: 60  Order: 155  ║
║  SKU007  Component Z      Current: 12  Need: 30  Order: 170  ║
║  SKU012  Part ABC         Current: 8   Need: 25  Order: 192  ║
║  SKU015  Material X       Current: 0   Need: 50  Order: 200  ║
║                                                               ║
║  🚨 OUT OF STOCK (2 items)                                   ║
║  ─────────────────────────────────────────────────────────   ║
║  SKU015  Material X       Last Sale: Mar 18  Supplier: Sup D ║
║  SKU022  Accessory Q      Last Sale: Mar 20  Supplier: Sup A ║
║                                                               ║
║  📦 OVERSTOCK (3 items)                                      ║
║  ─────────────────────────────────────────────────────────   ║
║  SKU008  Widget C         Current: 450  Max: 300  Value: $5.6K║
║  SKU011  Gadget Z         Current: 280  Max: 200  Value: $4.2K║
║  SKU019  Tool Z           Current: 85   Max: 60   Value: $3.8K║
║                                                               ║
║  TOTAL INVENTORY VALUE: $487,350                             ║
║  REORDER INVESTMENT NEEDED: $28,450                          ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

### Reorder Formulas

```excel
// Items Needing Reorder
=COUNTIF(Stock_Status,"Reorder Needed")

// Total Reorder Cost
=SUMIFS(Reorder_Quantity,Stock_Status,"Reorder Needed")*Unit_Cost

// Stock Coverage (Days)
=IF(Average_Daily_Sales>0,Quantity/Average_Daily_Sales,"N/A")

// Suggested Order Quantity (EOQ)
=SQRT((2*Annual_Demand*Order_Cost)/Holding_Cost)
```

### Sheet 4: Supplier Management

| Supplier ID | Supplier Name | Contact | Email | Phone | Lead Time | Min Order | Payment Terms | Rating | Products Supplied |
|-------------|---------------|---------|-------|-------|-----------|-----------|---------------|--------|-------------------|
| SUP001 | Supplier A Inc | John Doe | john@supa.com | 555-0201 | 5 days | $500 | Net 30 | 4.5 | 45 |
| SUP002 | Supplier B Co | Jane Smith | jane@supb.com | 555-0202 | 7 days | $300 | Net 15 | 4.2 | 32 |
| SUP003 | Supplier C LLC | Bob Wilson | bob@supc.com | 555-0203 | 3 days | $1000 | Net 45 | 4.8 | 28 |
| SUP004 | Supplier D Corp | Alice Brown | alice@supd.com | 555-0204 | 10 days | $200 | COD | 3.9 | 18 |

### Supplier Performance Metrics

| Supplier | On-Time % | Quality % | Avg Lead Time | Orders (YTD) | Total Spend |
|----------|-----------|-----------|---------------|--------------|-------------|
| Supplier A Inc | 95% | 98% | 4.8 days | 45 | $45,200 |
| Supplier B Co | 88% | 95% | 7.2 days | 38 | $32,100 |
| Supplier C LLC | 98% | 99% | 2.9 days | 52 | $68,500 |
| Supplier D Corp | 82% | 92% | 11.5 days | 22 | $18,300 |

### Sheet 5: Inventory Valuation Report

| Category | Quantity | Avg Cost | Total Value | % of Total | Turnover Rate |
|----------|----------|----------|-------------|------------|---------------|
| Electronics | 1,250 | $22.50 | $28,125 | 35% | 8.5x |
| Accessories | 2,100 | $12.00 | $25,200 | 31% | 12.2x |
| Tools | 450 | $52.00 | $23,400 | 29% | 6.8x |
| Materials | 800 | $8.50 | $6,800 | 5% | 15.3x |
| **TOTAL** | **4,600** | **$18.15** | **$83,525** | **100%** | **9.8x** |

### Valuation Formulas

```excel
// FIFO Value
=SUMPRODUCT(Quantity_Layer,Cost_Layer)

// Weighted Average Cost
=Total_Cost_of_Goods_Available/Total_Units_Available

// Inventory Turnover
=COGS/Average_Inventory

// Days Sales of Inventory
=365/Inventory_Turnover

// Gross Margin Return on Inventory (GMROI)
=Gross_Margin_Dollars/Average_Inventory_Cost
```

### ABC Analysis

| Class | Criteria | Items | % of Items | % of Value | Management |
|-------|----------|-------|------------|------------|------------|
| A | Top 80% value | 50 | 10% | 80% | Daily review |
| B | Next 15% value | 150 | 30% | 15% | Weekly review |
| C | Bottom 5% value | 300 | 60% | 5% | Monthly review |

### ABC Classification Formula

```excel
=CUMULATIVE_PERCENTAGE<=0.8,"A",IF(CUMULATIVE_PERCENTAGE<=0.95,"B","C")
```

### Conditional Formatting

```excel
// Low Stock (Red)
=Quantity<=Reorder_Point

// Critical Stock (Dark Red)
=Quantity=0

// Overstock (Orange)
=Quantity>Max_Stock

// Good Stock (Green)
=AND(Quantity>Reorder_Point,Quantity<=Max_Stock)

// Slow Moving (No sales >90 days)
=TODAY()-Last_Sale_Date>90
```

### Purchase Order Template

```
╔══════════════════════════════════════════════════════════════╗
║  PURCHASE ORDER                              PO-2026-0342    ║
╠══════════════════════════════════════════════════════════════╣
║  Supplier: Supplier A Inc                                    ║
║  Date: 2026-03-22                                            ║
║  Expected Delivery: 2026-03-27                               ║
╠══════════════════════════════════════════════════════════════╣
║  SKU      Product        Qty    Unit Cost    Total           ║
║  SKU002   Widget B       115    $12.50       $1,437.50       ║
║  SKU007   Component Z    170    $8.00        $1,360.00       ║
║  SKU012   Part ABC       192    $15.00       $2,880.00       ║
╠══════════════════════════════════════════════════════════════╣
║  Subtotal:                                    $5,677.50      ║
║  Shipping:                                    $150.00        ║
║  TOTAL:                                       $5,827.50      ║
╚══════════════════════════════════════════════════════════════╝
```

---

**File Format**: Excel (.xlsx) or Google Sheets
**Difficulty**: Intermediate
**Time to Set Up**: 45 minutes
**Best For**: Retail, E-commerce, Warehousing
