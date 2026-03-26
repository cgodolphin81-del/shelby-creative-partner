# Formula Guide - 200+ Excel & Google Sheets Formulas

## Overview
Complete reference guide for Excel and Google Sheets formulas, organized by category with examples, use cases, and troubleshooting tips.

## Categories

### 1. Basic Functions (20 formulas)
- SUM, AVERAGE, COUNT, MIN, MAX
- SUMIF, AVERAGEIF, COUNTIF
- SUMIFS, AVERAGEIFS, COUNTIFS
- ROUND, ROUNDUP, ROUNDDOWN
- ABS, MOD, INT, TRUNC

### 2. Logical Functions (15 formulas)
- IF, IFS, IFERROR, IFNA
- AND, OR, NOT, XOR
- TRUE, FALSE
- SWITCH
- CHOOSE

### 3. Lookup & Reference (25 formulas)
- VLOOKUP, HLOOKUP, XLOOKUP
- INDEX, MATCH, MATCH with INDEX
- OFFSET, INDIRECT
- ROW, COLUMN, ROWS, COLUMNS
- ADDRESS, CELL, INFO
- TRANSPOSE

### 4. Text Functions (30 formulas)
- LEFT, RIGHT, MID, LEN
- FIND, SEARCH, SUBSTITUTE, REPLACE
- UPPER, LOWER, PROPER, TRIM
- CONCAT, CONCATENATE, TEXTJOIN
- TEXT, VALUE, FIXED
- REPT, UNICHAR, UNICODE

### 5. Date & Time (25 formulas)
- TODAY, NOW, DATE, TIME
- YEAR, MONTH, DAY, WEEKDAY
- HOUR, MINUTE, SECOND
- DATEDIF, DATEVALUE, TIMEVALUE
- EDATE, EOMONTH
- WORKDAY, NETWORKDAYS, WORKDAY.INTL
- YEARFRAC, DAYS, DAYS360

### 6. Math & Trigonometry (25 formulas)
- SUM, SUMPRODUCT, SUMSQ
- PRODUCT, QUOTIENT, MOD
- POWER, SQRT, EXP, LN, LOG
- SIN, COS, TAN, ASIN, ACOS, ATAN
- RADIANS, DEGREES
- PI, RAND, RANDBETWEEN
- GCD, LCM, FACT, COMBIN, PERMUT

### 7. Statistical (30 formulas)
- COUNT, COUNTA, COUNTBLANK
- AVERAGE, MEDIAN, MODE
- STDEV, STDEVP, VAR, VARP
- MIN, MAX, LARGE, SMALL
- RANK, RANK.AVG, RANK.EQ
- PERCENTILE, QUARTILE
- CORREL, COVAR, FORECAST
- TREND, GROWTH, LINEST, LOGEST

### 8. Financial (25 formulas)
- PV, FV, NPV, XNPV
- PMT, PPMT, IPMT
- RATE, NPER
- IRR, XIRR
- SLN, DB, DDB, SYD
- CUMIPMT, CUMPRINC
- EFFECT, NOMINAL
- PRICE, YIELD, DURATION

### 9. Information (10 formulas)
- ISBLANK, ISNUMBER, ISTEXT
- ISERROR, ISERR, ISNA
- ISLOGICAL, ISREF
- TYPE, N

### 10. Dynamic Arrays (15 formulas)
- FILTER, SORT, SORTBY
- UNIQUE, SEQUENCE
- RANDARRAY
- TAKE, DROP
- CHOOSEROWS, CHOOSECOLS
- EXPAND, WRAPROWS, WRAPCOLS
- VSTACK, HSTACK
- TOROW,TOCOL

---

## Quick Reference Cards

### Most Used Formulas

| Formula | Syntax | Example | Result |
|---------|--------|---------|--------|
| SUM | =SUM(range) | =SUM(A1:A10) | Sum of values |
| VLOOKUP | =VLOOKUP(val,table,col,FALSE) | =VLOOKUP("A",A:B,2,FALSE) | Find value |
| IF | =IF(condition,true,false) | =IF(A1>10,"Yes","No") | Conditional |
| INDEX/MATCH | =INDEX(col,MATCH(val,row,0)) | =INDEX(B:B,MATCH("A",A:A,0)) | Flexible lookup |
| XLOOKUP | =XLOOKUP(val,lookup_array,return_array) | =XLOOKUP("A",A:A,B:B) | Modern lookup |

### Formula Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| #N/A | Value not found | Check lookup value exists |
| #VALUE! | Wrong data type | Ensure correct types |
| #REF! | Invalid reference | Fix cell references |
| #DIV/0! | Division by zero | Add IFERROR or check divisor |
| #NAME? | Unknown function | Check spelling |
| #NUM! | Invalid number | Check numeric inputs |
| #SPILL! | Array blocked | Clear spill range |

---

**Total Formulas Covered**: 220+
**Difficulty Levels**: Beginner, Intermediate, Advanced
**Compatibility**: Excel 365, Excel 2019+, Google Sheets
