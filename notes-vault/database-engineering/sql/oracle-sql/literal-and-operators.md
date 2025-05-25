---
title: Literal and Operators
tags:
  - database
  - sql
  - oracle
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Literals

A number, character or a date included in SELECT statement  
Date and char literal values must be enclosed within single quotation marks

Char values are case sensitive and date value is format sensitive  
Date default format: DD-MON-RR

A number value in ' ' is a string and arithmetic operations cannot be applied to it  
's can be escaped by using ''s

### Logical Operators

They are used in DQL statements to filter the output to match specific conditions.  
NOT, AND, OR, IN, NOT IN, IS NULL, IS NOT NULL  
\<\>, !=, ^= : Not Equal

 > [!IMPORTANT]
 > `OR` is very resource intensive and should be avoid whenever possible

````sql
SELECT FROM employees WHERE ename='John' AND sal=3000;

SELECT FROM emp WHERE ename NOT IN ('SCOTT', 'SMITH');
````

### LIKE Operator

The LIKE Condition is used along with the SELECT Command then pattern matching is to be performed  
LIKE cannot be used along with NOT IN. Multiple conditions need to be specified using the OR operator

`%` : 0 to N Characters  
`_` : Exactly 1 Character

````sql
SELECT * FROM emp WHERE ename LIKE '_a%';

SELECT * FROM emp WHERE ename LIKE '%a%';
````

### BETWEEN Operator

When using the BETWEEN Operator the upper and lower limit is also included  
It also works along with date and string values

[SQL Between Clause with Strings Columns - Stack Overflow](https://stackoverflow.com/questions/5980783/sql-between-clause-with-strings-columns)
