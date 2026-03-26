# Module 4: Basic Formulas

## 📋 Module Overview

**Duration**: 35 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Modules 1-3 completed  

### Learning Objectives
By the end of this module, you will:
- Understand what formulas are and how they work
- Master basic mathematical operations
- Use SUM, AVERAGE, MIN, MAX functions
- Create formulas with cell references
- Understand relative vs. absolute references

---

## 📖 Lesson Content

### 4.1 Introduction to Formulas

A **formula** is an expression that calculates values in a cell.

**All formulas start with =**

```
=A1+B1          // Addition
=A1-B1          // Subtraction
=A1*B1          // Multiplication
=A1/B1          // Division
=A1^B1          // Exponentiation
```

---

### 4.2 Mathematical Operators

| Operator | Symbol | Example | Result |
|----------|--------|---------|--------|
| Addition | + | =10+5 | 15 |
| Subtraction | - | =10-5 | 5 |
| Multiplication | * | =10*5 | 50 |
| Division | / | =10/5 | 2 |
| Exponent | ^ | =10^2 | 100 |
| Percentage | % | =10% | 0.1 |

**Order of Operations (PEMDAS)**:
1. **P**arentheses
2. **E**xponents
3. **M**ultiplication & **D**ivision (left to right)
4. **A**ddition & **S**ubtraction (left to right)

```excel
=5+2*3      // Result: 11 (multiplication first)
=(5+2)*3    // Result: 21 (parentheses first)
```

---

### 4.3 Cell References

**Why use cell references?**
- Automatic updates when data changes
- Easier to audit and understand
- Can copy formulas to other cells

```
=A1           // References cell A1
=A1+B1        // References two cells
=SUM(A1:A10)  // References a range
```

---

### 4.4 Basic Functions

#### SUM - Add values together

```excel
=SUM(A1:A10)          // Sum range
=SUM(A1,A5,A10)       // Sum specific cells
=SUM(A1:A10,C1:C10)   // Sum multiple ranges
=SUM(A1:A10,100)      // Sum range plus constant
```

**Example**:
```
   A      B
1  Item   Price
2  Apple  1.50
3  Orange 2.00
4  Banana 1.25
5  Total  =SUM(B2:B4)  → 4.75
```

#### AVERAGE - Calculate the mean

```excel
=AVERAGE(A1:A10)        // Average of range
=AVERAGE(A1:A5,C1:C5)   // Average multiple ranges
```

**Example**:
```
   A      B
1  Test   Score
2  Test 1 85
3  Test 2 90
4  Test 3 78
5  Avg    =AVERAGE(B2:B4)  → 84.33
```

#### MIN / MAX - Find smallest/largest values

```excel
=MIN(A1:A10)   // Smallest value
=MAX(A1:A10)   // Largest value
```

**Example**:
```
   A      B
1  Month  Sales
2  Jan    5000
3  Feb    7500
4  Mar    6200
5  Min    =MIN(B2:B4)  → 5000
6  Max    =MAX(B2:B4)  → 7500
```

#### COUNT / COUNTA - Count cells

```excel
=COUNT(A1:A10)     // Count numbers only
=COUNTA(A1:A10)    // Count non-empty cells
=COUNTBLANK(A1:A10)// Count empty cells
```

---

### 4.5 Creating Your First Formula

**Step-by-Step**:

1. **Click the cell** where you want the result
2. **Type =** (equals sign)
3. **Click the first cell** to reference (or type cell address)
4. **Type the operator** (+, -, *, /)
5. **Click the second cell** (or type address)
6. **Press Enter**

**Example: Calculate Total**
```
   A         B         C
1  Product   Price     Qty
2  Widget    10        5
3  Gadget    15        3
4  Total     =B2*C2+B3*C3  → 95
```

---

### 4.6 Copying Formulas

**Fill Handle**: Small square at bottom-right of selected cell

**How to use**:
1. Select cell with formula
2. Hover over fill handle (cursor becomes +)
3. Click and drag down/right
4. Release to copy

**What happens**: Cell references adjust automatically (relative reference)

```
   A   B   C
1  5   3   =A1+B1   → 8
2  10  6   =A2+B2   → 16  (copied down)
3  15  9   =A3+B3   → 24  (copied down)
```

---

### 4.7 Relative vs. Absolute References

**Relative Reference** (default): Changes when copied
```
=A1+B1    // Copied down becomes =A2+B2
```

**Absolute Reference** (with $): Stays fixed when copied
```
=$A$1+B1  // A1 stays fixed, B1 changes
=A$1+$B1  // Row 1 fixed in both, columns change
=$A1+B$1  // Column A fixed, row 1 fixed in B
```

**When to use absolute**:
- Tax rates
- Conversion factors
- Fixed values
- Reference tables

**Example**:
```
   A       B       C
1  Price   Tax     Total
2  100     8%      =A2*(1+$B$1)
3  200     8%      =A3*(1+$B$1)
4  300     8%      =A4*(1+$B$1)
```

---

## ✍️ Practice Exercises

### Exercise 4.1: Basic Calculations
Create this table and calculate the totals:

| Item | Price | Quantity | Total |
|------|-------|----------|-------|
| Pen | 1.50 | 10 | =B2*C2 |
| Notebook | 3.50 | 5 | =B3*C3 |
| Eraser | 0.75 | 20 | =B4*C4 |
| **Grand Total** | | | =SUM(D2:D4) |

### Exercise 4.2: Grade Calculator
Create a grade sheet:

| Student | Test 1 | Test 2 | Test 3 | Average |
|---------|--------|--------|--------|---------|
| John | 85 | 90 | 78 | =AVERAGE(B2:D2) |
| Jane | 92 | 88 | 95 | =AVERAGE(B3:D3) |
| Bob | 78 | 82 | 80 | =AVERAGE(B4:D4) |
| **Class Avg** | | | | =AVERAGE(E2:E4) |

### Exercise 4.3: Budget Analysis
Create a monthly budget:

| Category | Budget | Actual | Difference |
|----------|--------|--------|------------|
| Rent | 1500 | 1500 | =B2-C2 |
| Food | 400 | 425 | =B3-C3 |
| Transport | 200 | 180 | =B4-C4 |
| **Total** | =SUM(B2:B4) | =SUM(C2:C4) | =SUM(D2:D4) |

---

## 📝 Module Quiz

**Passing Score**: 80% (4/5 correct)

**Question 1**: What symbol must all formulas start with?
- A) +
- B) #
- C) = ✓
- D) @

**Question 2**: What is the result of =5+2*3?
- A) 21
- B) 11 ✓
- C) 10
- D) 15

**Question 3**: Which function adds up a range of cells?
- A) ADD
- B) TOTAL
- C) SUM ✓
- D) PLUS

**Question 4**: What does $A$1 represent?
- A) Relative reference
- B) Absolute reference ✓
- C) Invalid reference
- D) Text value

**Question 5**: What is =AVERAGE(10,20,30)?
- A) 10
- B) 20 ✓
- C) 30
- D) 60

---

## 📥 Downloadable Resources

- [Practice Workbook](./worksheets/module-04-formulas.xlsx)
- [Function Reference Card](./resources/basic-functions.pdf)
- [Formula Examples](./resources/formula-examples.xlsx)

---

## 🎯 What's Next?

In **Module 5: Formatting**, you'll learn:
- Number formatting (currency, dates, percentages)
- Font and cell formatting
- Conditional formatting basics
- Cell styles and themes

---

**Completion Time**: ~35 minutes  
**Quiz Attempts**: Unlimited  
**Certificate Progress**: 4/10 modules
