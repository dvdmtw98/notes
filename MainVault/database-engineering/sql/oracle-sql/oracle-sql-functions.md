---
tags:
  - database
  - sql
  - oracle
title: Oracle SQL Functions
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### String Functions

Don't give LPAD and RPAD total_len very small values as it will trim the values

````sql
LPAD(column_name, total_len, 'char_to_pad')
````

If string start is longer that string length then an empty string will be returned

````sql
SUBSTR(column_name, start_index, length)
````

ROUND(number, decimal_places)  
TRUNC(number, decimal_places)  
If 2nd term is not specified it will truncate the entire decimal place

````sql
INSTR(column_name, 'char_to_find', start_from, nth_occurance)
````

Returns first occurrence of the character. Char to find can be a string as well.  
start_form & nth_occurrence is optional  
If the char is not there it will return back 0

````sql
LENGTH('Abc') # 3

LENGTH('') # -
````

Used to join two columns. Creates an result which is an character expression  
Character values are to be enclosed in (' ')

````sql
SELECT ename || ' ' || job FROM emp
/
SELECT ename || ' is a ' || job FROM emp;
````

### Datetime Functions

````sql
MONTHS_BETWEEN(sysdate, hiredate)
````

Returns the number of months. It you want exact number use ROUND() function.  Dividing the result by 12 will return output in years. Dividing by 7 will return the no of weeks.

CURRENT_DATE returns the OS system date  
SYSDATE returns the Oracle DB server date

### NULL Functions

NVL(column_name, 'Value to be replaced with NULL value')  
We cannot add a char into in an column that can only same numbers  
TO_CHAR() can be used to convert the number to char

NVL2(column_name, value1, value2)  
NVL2(comm, 0, 100)  
If column has a value then it returns value1 else it returns value2

NULLIF('Hello', 'Hello')  
If both the expressions are equal return NULL  
If they are not equal return the 1st expression  
The 1st expression cannot be NULL (Not supported by Oracle)
