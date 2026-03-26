# Basic Functions

## SUM

**Purpose**: Adds all numbers in a range of cells.

**Syntax**: `=SUM(number1, [number2], ...)`

**Examples**:
```excel
=SUM(A1:A10)                    // Sum range
=SUM(A1,A5,A10)                 // Sum specific cells
=SUM(A1:A10,C1:C10)             // Sum multiple ranges
=SUM(A1:A10,100)                // Sum range plus constant
=SUM(SUM(A1:A5),SUM(B1:B5))     // Nested SUM
```

**Use Cases**:
- Total sales for a period
- Sum of expenses
- Grand totals in reports

**Tips**:
- Ignores text and empty cells
- Maximum 255 arguments
- Use Alt+= for quick AutoSum

---

## AVERAGE

**Purpose**: Returns the arithmetic mean of arguments.

**Syntax**: `=AVERAGE(number1, [number2], ...)`

**Examples**:
```excel
=AVERAGE(A1:A10)                // Average of range
=AVERAGE(A1:A10,C1:C10)         // Average multiple ranges
=AVERAGE(A1:A5,100)             // Average with constant
```

**Use Cases**:
- Average sales per day
- Mean test scores
- Average order value

**Tips**:
- Ignores text, logical values, empty cells
- Includes zeros in calculation
- For weighted average: `=SUMPRODUCT(values,weights)/SUM(weights)`

---

## COUNT / COUNTA / COUNTBLANK

**Purpose**: Count cells with numbers, non-empty cells, or blank cells.

**Syntax**:
```excel
=COUNT(value1, [value2], ...)      // Count numbers only
=COUNTA(value1, [value2], ...)     // Count non-empty cells
=COUNTBLANK(range)                  // Count blank cells
```

**Examples**:
```excel
=COUNT(A1:A100)                 // Count numeric entries
=COUNTA(A1:A100)                // Count all entries
=COUNTBLANK(A1:A100)            // Count empty cells
=COUNTA(A1:A100)-COUNT(A1:A100) // Count text entries
```

**Use Cases**:
- Count number of orders
- Count completed tasks
- Identify missing data

---

## MIN / MAX

**Purpose**: Return the smallest or largest value.

**Syntax**:
```excel
=MIN(number1, [number2], ...)
=MAX(number1, [number2], ...)
```

**Examples**:
```excel
=MIN(A1:A100)                   // Lowest value
=MAX(A1:A100)                   // Highest value
=MIN(A1:A10,C1:C10)             // Min across ranges
=MAX(IF(A1:A100>0,A1:A100))     // Max with condition (array)
```

**Use Cases**:
- Highest/lowest sales
- Temperature ranges
- Score ranges

---

## SUMIF / SUMIFS

**Purpose**: Sum cells that meet single or multiple criteria.

**Syntax**:
```excel
=SUMIF(range, criteria, [sum_range])
=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)
```

**Examples**:
```excel
=SUMIF(A1:A100,"East",B1:B100)              // Sum if region is East
=SUMIF(A1:A100,">100",B1:B100)              // Sum if value > 100
=SUMIF(A1:A100,"Apples",B1:B100)            // Sum if text match
=SUMIFS(C1:C100,A1:A100,"East",B1:B100,">1000")  // Multiple criteria
=SUMIFS(C1:C100,A1:A100,{"East","West"},B1:B100,">1000") // OR criteria
```

**Use Cases**:
- Sales by region
- Expenses by category
- Revenue by product

**Criteria Operators**:
| Operator | Meaning | Example |
|----------|---------|---------|
| = | Equal to | "East" |
| > | Greater than | ">100" |
| < | Less than | "<50" |
| >= | Greater or equal | ">=100" |
| <= | Less or equal | "<=50" |
| <> | Not equal to | "<>East" |
| * | Wildcard (any chars) | "A*" |
| ? | Wildcard (single char) | "A?C" |

---

## COUNTIF / COUNTIFS

**Purpose**: Count cells that meet single or multiple criteria.

**Syntax**:
```excel
=COUNTIF(range, criteria)
=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)
```

**Examples**:
```excel
=COUNTIF(A1:A100,"Complete")              // Count completed
=COUNTIF(A1:A100,">50")                   // Count > 50
=COUNTIF(A1:A100,"*error*")               // Count containing "error"
=COUNTIFS(A1:A100,"East",B1:B100,">1000") // Multiple criteria
=COUNTIFS(A1:A100,{"East","West"},B1:B100,">1000") // OR logic
```

**Use Cases**:
- Count orders by status
- Count employees by department
- Count items in price range

---

## AVERAGEIF / AVERAGEIFS

**Purpose**: Average cells that meet criteria.

**Syntax**:
```excel
=AVERAGEIF(range, criteria, [average_range])
=AVERAGEIFS(average_range, criteria_range1, criteria1, ...)
```

**Examples**:
```excel
=AVERAGEIF(A1:A100,"East",B1:B100)              // Avg sales East region
=AVERAGEIF(A1:A100,">0",B1:B100)                // Avg positive values
=AVERAGEIFS(C1:C100,A1:A100,"East",B1:B100,">1000")
```

---

## ROUND / ROUNDUP / ROUNDDOWN

**Purpose**: Round numbers to specified digits.

**Syntax**:
```excel
=ROUND(number, num_digits)
=ROUNDUP(number, num_digits)
=ROUNDDOWN(number, num_digits)
```

**Examples**:
```excel
=ROUND(3.14159,2)           // 3.14
=ROUND(3.14159,0)           // 3
=ROUND(1234,-2)             // 1200
=ROUNDUP(3.141,2)           // 3.15
=ROUNDDOWN(3.149,2)         // 3.14
```

**Use Cases**:
- Currency formatting
- Reporting whole numbers
- Standardizing precision

---

## ABS / MOD / INT / TRUNC

**Purpose**: Various number manipulations.

**Syntax**:
```excel
=ABS(number)        // Absolute value
=MOD(number, divisor)  // Remainder
=INT(number)        // Round down to integer
=TRUNC(number, [digits])  // Truncate to digits
```

**Examples**:
```excel
=ABS(-5)              // 5
=MOD(10,3)            // 1
=INT(3.9)             // 3
=TRUNC(3.14159,2)     // 3.14
=MOD(ROW(),2)         // Alternating 0,1 for row coloring
```

**Use Cases**:
- ABS: Distance calculations, variance
- MOD: Every nth row, cycling patterns
- INT: Age calculations, whole units
- TRUNC: Remove decimals without rounding

---

## Practice Exercises

1. **Calculate total sales**: `=SUM(B2:B100)`
2. **Find average order value**: `=AVERAGE(B2:B100)`
3. **Count completed orders**: `=COUNTIF(C2:C100,"Complete")`
4. **Sum sales over $1000**: `=SUMIF(B2:B100,">1000")`
5. **Round to nearest dollar**: `=ROUND(A1,0)`

---

**Related**: [Intermediate Functions](../intermediate/), [Lookup Functions](../lookup/)
