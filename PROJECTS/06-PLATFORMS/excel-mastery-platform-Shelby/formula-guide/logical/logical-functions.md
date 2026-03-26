# Logical Functions

## IF

**Purpose**: Returns one value if condition is TRUE, another if FALSE.

**Syntax**: `=IF(logical_test, value_if_true, [value_if_false])`

**Examples**:
```excel
=IF(A1>100,"Over","Under")                    // Simple condition
=IF(A1="","Empty","Has Value")                // Check empty
=IF(A1>=90,"A",IF(A1>=80,"B",IF(A1>=70,"C","F")))  // Nested IF
=IF(AND(A1>0,A1<100),"Valid","Invalid")       // With AND
=IF(OR(A1="Yes",A1="Y"),"Approved","Denied")  // With OR
```

**Use Cases**:
- Pass/fail grading
- Status indicators
- Conditional calculations
- Data validation messages

**Tips**:
- Maximum 64 nested IFs (Excel 2016+)
- Consider IFS for multiple conditions
- Use IFERROR for error handling

---

## IFS (Excel 2019+, Google Sheets)

**Purpose**: Multiple conditions without nesting.

**Syntax**: `=IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], ...)`

**Examples**:
```excel
=IFS(A1>=90,"A",A1>=80,"B",A1>=70,"C",A1>=60,"D",TRUE,"F")

=IFS(A1>100000,"Platinum",A1>50000,"Gold",A1>10000,"Silver",TRUE,"Bronze")

=IFS(A1="","Enter Value",A1<0,"Negative",A1>1000,"Large",TRUE,"OK")
```

**Use Cases**:
- Grade scales
- Tier classification
- Status categorization

**Tips**:
- Use TRUE as final condition for default
- Cleaner than nested IFs
- Stops at first TRUE condition

---

## IFERROR / IFNA

**Purpose**: Handle errors gracefully.

**Syntax**:
```excel
=IFERROR(value, value_if_error)
=IFNA(value, value_if_na)
```

**Examples**:
```excel
=IFERROR(VLOOKUP(A1,B:C,2,FALSE),"Not Found")     // Handle any error
=IFERROR(A1/B1,0)                                  // Avoid DIV/0
=IFNA(VLOOKUP(A1,B:C,2,FALSE),"")                  // Handle only #N/A
=IFERROR(1/(1/A1),"Zero or Empty")                 // Complex error handling
```

**Use Cases**:
- Clean lookup results
- Prevent error propagation
- User-friendly messages

**Tips**:
- IFNA only catches #N/A (better for lookups)
- IFERROR catches all errors (use carefully)
- Don't hide real problems

---

## AND / OR / NOT / XOR

**Purpose**: Logical operators for combining conditions.

**Syntax**:
```excel
=AND(logical1, [logical2], ...)     // All must be TRUE
=OR(logical1, [logical2], ...)      // Any can be TRUE
=NOT(logical)                       // Reverse logic
=XOR(logical1, [logical2], ...)     // Exactly one TRUE
```

**Examples**:
```excel
=AND(A1>0,A1<100)                   // Between 0 and 100
=OR(A1="Yes",A1="Y")                // Multiple valid values
=NOT(A1="Complete")                 // Not complete
=XOR(A1="Yes",B1="Yes")             // One but not both

// Combined with IF
=IF(AND(A1>100,B1="Active"),"Bonus",0)
=IF(OR(A1="Urgent",B1>1000),"Priority","Normal")
```

**Use Cases**:
- Complex conditions
- Validation rules
- Flag calculations

**Limits**: Up to 255 conditions

---

## SWITCH (Excel 2016+, Google Sheets)

**Purpose**: Evaluate one expression against multiple values.

**Syntax**: `=SWITCH(expression, value1, result1, [value2, result2], ..., [default])`

**Examples**:
```excel
=SWITCH(A1,1,"January",2,"February",3,"March",4,"April","Other")

=SWITCH(B1,"Pending",1,"Active",2,"Complete",3,"Cancelled",0)

=SWITCH(WEEKDAY(A1),1,"Sun",2,"Mon",3,"Tue",4,"Wed",5,"Thu",6,"Fri",7,"Sat")
```

**Use Cases**:
- Month/day names
- Status codes to text
- Category mapping

**Tips**:
- Cleaner than nested IFs for exact matches
- Last value is default if no match
- Case-sensitive

---

## CHOOSE

**Purpose**: Select a value from a list based on index number.

**Syntax**: `=CHOOSE(index_num, value1, [value2], ...)`

**Examples**:
```excel
=CHOOSE(3,"Red","Green","Blue","Yellow")      // Returns "Blue"
=CHOOSE(WEEKDAY(A1),"Sun","Mon","Tue","Wed","Thu","Fri","Sat")
=CHOOSE(MONTH(A1)+1,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
=CHOOSE(MATCH(A1,{"S","M","L"},0),"Small","Medium","Large")
```

**Use Cases**:
- Index-based selection
- Day/month names
- Size/category mapping

**Tips**:
- Index must be 1-254
- Returns #VALUE! if index out of range
- Can return formulas, not just values

---

## TRUE / FALSE

**Purpose**: Return logical values.

**Syntax**:
```excel
=TRUE()
=FALSE()
```

**Examples**:
```excel
=A1>100                    // Returns TRUE or FALSE
=TRUE()                    // Explicit TRUE
=FALSE()                   // Explicit FALSE
=IF(A1>100,TRUE(),FALSE()) // Same as =A1>100
```

**Use Cases**:
- Boolean flags
- Conditional formatting
- Filter criteria

---

## Complex Logical Formulas

### Multiple Conditions with AND/OR
```excel
// Bonus if sales > 100K AND region is East
=IF(AND(Sales>100000,Region="East"),Sales*0.1,0)

// Priority if urgent OR value > 10000
=IF(OR(Status="Urgent",Value>10000),"High","Normal")
```

### Nested IF with AND/OR
```excel
=IF(AND(A1>0,A1<50),"Low",IF(AND(A1>=50,A1<100),"Medium","High"))
```

### IFS with Complex Conditions
```excel
=IFS(
    AND(Sales>100000,Region="East"),"Platinum",
    AND(Sales>50000,Region="East"),"Gold",
    Sales>100000,"Silver",
    TRUE,"Bronze"
)
```

### Error-Handled Lookups
```excel
=IFERROR(XLOOKUP(A1,Names,Phones),"Contact Not Found")
=IFNA(INDEX(Prices,MATCH(A1,Products,0)),"Price TBD")
```

### Conditional Calculations
```excel
// Commission with tiers
=IF(Sales<10000,Sales*0.05,IF(Sales<50000,Sales*0.08,Sales*0.12))

// Discount based on quantity and customer type
=IF(AND(Qty>100,CustomerType="Wholesale"),Qty*Price*0.8,Qty*Price)
```

### Date-Based Logic
```excel
// Overdue check
=IF(AND(DueDate<TODAY(),Status<>"Paid"),"OVERDUE","OK")

// Within date range
=IF(AND(Date>=Start,Date<=End),"In Range","Out of Range")
```

### Text-Based Logic
```excel
// Check if contains text
=IF(ISNUMBER(SEARCH("error",A1)),"Has Error","OK")

// Multiple text matches
=IF(OR(A1="Yes",A1="Y",A1="YES"),"Approved","Pending")
```

---

## Practice Exercises

1. **Grade calculator**: `=IFS(A1>=90,"A",A1>=80,"B",A1>=70,"C",A1>=60,"D",TRUE,"F")`
2. **Error-handled division**: `=IFERROR(A1/B1,"Cannot Divide")`
3. **Status with multiple conditions**: `=IF(AND(A1>0,B1="Active"),"Running","Stopped")`
4. **Day name from number**: `=CHOOSE(A1,"Mon","Tue","Wed","Thu","Fri","Sat","Sun")`
5. **Complex bonus calc**: `=IF(OR(Sales>100000,AND(Sales>50000,Region="East")),Sales*0.1,0)`

---

**Related**: [Basic Functions](../basic/), [Text Functions](../text/)
