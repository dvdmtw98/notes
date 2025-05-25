---
title: Lookup Functions
tags:
  - excel
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### VLOOKUP() Function

VLOOKUP() or Vertical Lookup is used to find a subset of records using a master table

The fourth argument to VLOOKUP is optional but most of the times it will be needed

````xls
VLOOKUP(lookup_value, table_array, column_index_number, range_lookup)
````

Lookup Value: The value that we want to search  
Table Array: The master table where the value will be searched  
Index Number: The column number in the master table from where the value needs to be returned  
Range Lookup: FALSE for exact match, TRUE or blank for closest match

 > [!warning]
 > * For using `VLOOKUP()` the Lookup Value should always be in the first column in the table array as the function only scans through the first column of the table array
 > * We can get around this limitation by using the `INDEX()` and `MATCH()` functions

For searching an table horizontally there is an HLOOKUP() function (This function is very rarely used)

The `column_number` argument in VLOOKUP() and `row_number` argument in HLOOKUP() can be replaced with MATCH() to make the formula dynamic

### INDEX() Function

Returns a value at a specific location

There are two version of this function  
The version with the three arguments is the one that is commonly used

````xls
INDEX(array, row_number, column_number)
````

Array: The master table to search for the value  
Column Number is an optional argument and if not specified the entire row will be returned

### MATCH() Functions

Returns a numeric position of a value

````xls
MATCH(lookup_value, lookup_array, match_type)
````

Lookup Value: The value to search in master list  
Lookup Array: Column (Array) to search the value  
Match Type: 0 exact match, 1 larger value, -1 smaller value

### INDEX() and MATCH() Lookup

It is an alternative approach to lookup values without the limitation of the VLOOKUP() function

````xls
=INDEX(array, MATCH(lookup_value, lookup_array, match_type))
````

Array: The range of cells (column) from which value will be returned  
Lookup Value: The value to find in master list  
Lookup Array: Column to search for the lookup value

The above formula can be made completely dynamic by introducing a match condition in place of the column number argument

````xls
=INDEX(array, MATCH(lookup_value, lookup_array, match_type), MATCH(lookup_column_value, lookup_column_array, match_type)))
````

Array: The range of cells (table) from which value will be returned (Mater Table)  
Lookup Column: The column header that we needs to be searched (The row reference should be locked `C$3` so we use autofill for other columns)  
Lookup Column Array: The header row of the master list
