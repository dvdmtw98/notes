---
tags:
  - database
  - sql
  - oracle
title: Data Manipulation Language (DML)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is used by manipulate the data that is stored in the DB  
DML operations can be rolled back

[Oracle INSERT, UPDATE, DELETE, MERGE, Multi INSERT Statements](https://www.oracle-dba-online.com/sql/insert_update_delete_merge.htm)

### INSERT Command

````sql
INSERT INTO emp VALUES (101, 'Sami', 'G. Manager', 8 Aug 1998, 2000);

INSERT INTO emp (empno, ename, sal) VALUES (102, 'Ashi', 5000);
````

### UPDATE Command

````sql
UPDATE emp SET name='Mohd Sami', sal=sal+(sal*10/100) WHERE empno=102;

UPDATE emp SET sal=sal+(sal*5/100);
````

### DELETE Command

````sql
DELETE FROM emp WHERE empno=102;

DELETE FROM emp;
````

### MERGE Command

Merge Command is used to synchronize two tables based on the difference in them, if the same row exist in both then UPDATE the value in target table else INSERT value into target table  
The decision whether to update or insert into the target table is based on a condition in the ON clause.

````sql
MERGE INTO sales_history sh
USING sales s
ON (s.prod=sh.prod AND s.month=sh.month)
WHEN MATCHED THEN UPDATE SET sh.amount=s.amount
WHEN NOT MATCHED THEN INSERT VALUES (prod, month, amount);
````
