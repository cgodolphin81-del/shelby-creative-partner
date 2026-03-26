# Lookup & Reference Functions

## VLOOKUP

**Purpose**: Vertical lookup - searches for a value in the first column and returns a value in the same row from a specified column.

**Syntax**: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`

**Parameters**:
| Parameter | Required | Description |
|-----------|----------|-------------|
| lookup_value | Yes | Value to search for |
| table_array | Yes | Range containing data |
| col_index_num | Yes | Column number to return (1 = first column) |
| range_lookup | No | FALSE = exact, TRUE = approximate (default TRUE) |

**Examples**:
```excel
=VLOOKUP("Apple",A2:C100,2,FALSE)           // Find Apple, return column 2
=VLOOKUP(A2,Products!$A:$D,4,FALSE)         // Lookup in another sheet
=VLOOKUP(A2,$A$2:$D$100,3,0)                // 0 = FALSE (exact match)
=VLOOKUP(A2,A:D,4,FALSE)                    // Full column reference
```

**Use Cases**:
- Product price lookup
- Employee information retrieval
- Student grade lookup

**Common Errors**:
| Error | Cause | Solution |
|-------|-------|----------|
| #N/A | Value not found | Check spelling, use IFERROR |
| #REF! | Column index > columns in range | Verify col_index_num |
| #VALUE! | Column index < 1 | Must be >= 1 |

**Tips**:
- Always use FALSE for exact match
- Use absolute references for table_array: `$A$2:$D$100`
- Lookup value must be in first column
- Slower than INDEX/MATCH on large datasets

---

## HLOOKUP

**Purpose**: Horizontal lookup - searches for a value in the first row and returns a value from a specified row.

**Syntax**: `=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])`

**Examples**:
```excel
=HLOOKUP("Q1",A1:Z5,3,FALSE)        // Find Q1, return row 3
=HLOOKUP(A1,$A$1:$Z$10,5,0)         // Horizontal data table
```

**Use Cases**:
- Looking across time periods (months, quarters)
- Horizontal data structures

---

## XLOOKUP (Excel 365, Google Sheets)

**Purpose**: Modern replacement for VLOOKUP/HLOOKUP with more flexibility.

**Syntax**: `=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])`

**Parameters**:
| Parameter | Description |
|-----------|-------------|
| lookup_value | Value to search for |
| lookup_array | Range to search in |
| return_array | Range to return values from |
| if_not_found | Custom message if not found (optional) |
| match_mode | 0=exact, -1=exact or next smaller, 1=exact or next larger, 2=wildcard |
| search_mode | 1=first to last, -1=last to first, 2=binary ascending, -2=binary descending |

**Examples**:
```excel
=XLOOKUP("Apple",A2:A100,C2:C100)                    // Basic lookup
=XLOOKUP("Apple",A2:A100,C2:C100,"Not Found")        // Custom not found
=XLOOKUP(A2,Products[Name],Products[Price])          // Table reference
=XLOOKUP(A2,A:A,B:B,"",0,1)                          // Explicit exact match
=XLOOKUP(A2,A:A,B:B&" "&C:C)                         // Return combined columns
=XLOOKUP("*apple*",A2:A100,C2:C100,,2)               // Wildcard match
```

**Advantages over VLOOKUP**:
- Can look left (return_array can be before lookup_array)
- Default exact match
- Built-in error handling
- Simpler syntax
- Faster performance
- Can return arrays (multiple columns)

**Examples**:
```excel
// Return multiple columns (dynamic array)
=XLOOKUP(A2,ProductList,PriceTable:DiscountTable)

// Two-way lookup
=XLOOKUP(product,products,XLOOKUP(month,months,data))

// Last match instead of first
=XLOOKUP(value,lookup,return,,,-1)
```

---

## INDEX

**Purpose**: Returns a value from a specific position in a range.

**Syntax**: 
```excel
=INDEX(array, row_num, [column_num])     // Array form
=INDEX(reference, row_num, [column_num], [area_num])  // Reference form
```

**Examples**:
```excel
=INDEX(A1:C100,5,3)               // Row 5, Column 3
=INDEX(A:A,5)                     // 5th value in column A
=INDEX(A1:C10,0,2)                // Entire column 2 (array)
=INDEX((A1:C10,E1:G10),2,3,2)     // Area 2, row 2, col 3
```

**Use Cases**:
- Extract specific cell from range
- Return entire row/column
- Combined with MATCH for flexible lookup

---

## MATCH

**Purpose**: Returns the position of a value in a range.

**Syntax**: `=MATCH(lookup_value, lookup_array, [match_type])`

**Match Types**:
| Type | Description |
|------|-------------|
| 0 | Exact match |
| 1 | Less than (data must be ascending) |
| -1 | Greater than (data must be descending) |

**Examples**:
```excel
=MATCH("Apple",A1:A100,0)              // Position of "Apple"
=MATCH(100,B1:B100,1)                  // Position of value <= 100
=MATCH("*error*",A1:A100,0)            // Wildcard match
=MATCH(TRUE,A1:A100>100,0)             // Array match (Ctrl+Shift+Enter)
```

**Use Cases**:
- Find position of value
- Dynamic column/row reference
- Combined with INDEX

---

## INDEX + MATCH (Power Combination)

**Purpose**: Flexible lookup that can search in any direction.

**Syntax**: `=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))`

**Examples**:
```excel
// Basic lookup (replaces VLOOKUP)
=INDEX(C2:C100, MATCH("Apple",A2:A100,0))

// Lookup to the left (VLOOKUP can't do this)
=INDEX(A2:A100, MATCH(100,C2:C100,0))

// Two-way lookup (matrix)
=INDEX(B2:Z100, MATCH("Product",A2:A100,0), MATCH("March",B1:Z1,0))

// Multiple criteria
=INDEX(C2:C100, MATCH(1,(A2:A100="East")*(B2:B100="Widget"),0))  // Array formula

// Case-sensitive lookup
=INDEX(C2:C100, MATCH(TRUE,EXACT(A2:A100,"Apple"),0))
```

**Advantages over VLOOKUP**:
- Look left, right, up, down
- Insert/delete columns without breaking
- Faster on large datasets
- More flexible

---

## OFFSET

**Purpose**: Returns a reference offset from a starting point.

**Syntax**: `=OFFSET(reference, rows, cols, [height], [width])`

**Examples**:
```excel
=OFFSET(A1,5,3)                    // Cell 5 down, 3 right (D6)
=OFFSET(A1,0,0,10,1)               // Range A1:A10
=OFFSET(A1,COUNTA(A:A)-1,0,1,1)    // Last value in column A
=SUM(OFFSET(A1,0,0,COUNTA(A:A),1)) // Dynamic sum range
```

**Use Cases**:
- Dynamic ranges
- Rolling averages
- Last N items

**Caution**: Volatile function - recalculates on every change

---

## INDIRECT

**Purpose**: Returns a reference from a text string.

**Syntax**: `=INDIRECT(ref_text, [a1])`

**Examples**:
```excel
=INDIRECT("A1")                    // Returns value in A1
=INDIRECT("Sheet2!A1")             // Reference another sheet
=INDIRECT(A1)                      // Use cell content as reference
=INDIRECT("B"&ROW())               // Dynamic row reference
=SUM(INDIRECT("A1:A"&COUNTA(A:A))) // Dynamic range sum
```

**Use Cases**:
- Dynamic sheet references
- Named range references
- Building references from text

**Caution**: Volatile function

---

## TRANSPOSE

**Purpose**: Flips rows to columns and columns to rows.

**Syntax**: `=TRANSPOSE(array)`

**Examples**:
```excel
=TRANSPOSE(A1:C5)                  // 5 rows x 3 cols → 3 rows x 5 cols
=TRANSPOSE({1,2,3;4,5,6})          // Array literal transpose
```

**Use Cases**:
- Convert horizontal to vertical data
- Reorient tables

---

## ROW / COLUMN / ROWS / COLUMNS

**Purpose**: Get row/column numbers or counts.

**Syntax**:
```excel
=ROW([reference])                  // Row number
=COLUMN([reference])               // Column number
=ROWS(array)                       // Count of rows
=COLUMNS(array)                    // Count of columns
```

**Examples**:
```excel
=ROW()                             // Current row number
=ROW(A1)                           // 1
=COLUMN(C1)                        // 3
=ROWS(A1:A100)                     // 100
=COLUMNS(A1:E1)                    // 5
=ROW()-1                           // Row number minus header
```

**Use Cases**:
- Sequential numbering
- Dynamic references
- Array formulas

---

## ADDRESS

**Purpose**: Creates a cell reference as text from row and column numbers.

**Syntax**: `=ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])`

**Examples**:
```excel
=ADDRESS(1,1)                      // $A$1
=ADDRESS(1,1,4)                    // A1 (relative)
=ADDRESS(1,1,4,FALSE)              // R1C1 format
=ADDRESS(5,3,1,TRUE,"Sheet2")      // Sheet2!$C$5
```

---

## Practice Exercises

1. **VLOOKUP product price**: `=VLOOKUP(A2,Products!$A:$D,4,FALSE)`
2. **XLOOKUP with fallback**: `=XLOOKUP(A2,Names,Phones,"Not Found")`
3. **INDEX/MATCH lookup**: `=INDEX(C:C,MATCH(A2,B:B,0))`
4. **Two-way lookup**: `=INDEX(B2:Z100,MATCH(Y2,A2:A100,0),MATCH(X3,B1:Z1,0))`
5. **Dynamic range sum**: `=SUM(OFFSET(A1,0,0,COUNTA(A:A),1))`

---

**Related**: [Basic Functions](../basic/), [Array Functions](../array/)
