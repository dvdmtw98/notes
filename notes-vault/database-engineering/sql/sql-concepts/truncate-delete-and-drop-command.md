---
title: Truncate, Delete & Drop Command
tags:
  - database
  - sql
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

### TRUNCATE Command

Used to delete ALL the data in a table (WHERE clause cannot be used)  
It is a [[data-definition-language-ddl|Data Definition Language (DDL)]] Command  
The structure of the table is preserved  
Faster than DELETE for dropping all records in the table  
It is logged as a single operation in the Transaction Log of the Database  
TRUNCATE operation cannot be rolled back

### DELETE Command

Used to delete records from a table while preserving the constraints on the table  
It is a [[data-manipulation-language-dml|Data Manipulation Language (DML)]] Command  
WHERE Clause can be used to select a subset of data to be dropped (If no WHERE clause all the records in the table is dropped)  
Slower than TRUNCATE to drop all records from table  
Each row dropped is captured separately in the Transaction Log of the Database  
DELETE operation can be rolled back

### DROP Command

It is used to drop the entire table along with its constraints and structure  
It is a [[data-definition-language-ddl|Data Definition Language (DDL)]] Command  
DROP command can be used to delete other database objects as well  
DROP operation cannot be rolled back

[Know the Difference between TRUNCATE, DELETE, and DROP](https://medium.com/javarevisited/know-the-differences-between-truncate-delete-and-drop-4ee70bb736fb)  

[What is the difference between TRUNCATE, DELETE and DROP statements?](https://afteracademy.com/blog/what-is-the-difference-between-truncate-delete-and-drop-statements)
