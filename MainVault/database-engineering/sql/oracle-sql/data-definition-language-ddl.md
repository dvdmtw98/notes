---
tags:
  - database
  - sql
  - oracle
title: Data Definition Language (DDL)
date: 2024-01-28 14:15:56 -0600
---

It is a language used for defining and modifying the data and its structure.  
It is used to build and modify the structure of your tables and other objects in the database.  
These commands can be used to add, remove or modify tables within a database.

[Using DDL Statements](https://www.tutorialspoint.com/sql_certificate/using_ddl_statements.htm)

### CREATE Command

````sql
CREATE TABLE employee
(
	empid NUMBER(5),
	ename VARCHAR2(50),
	age NUMBER(3),
	city CHAR(25),
	phone_no VARCHAR2(20)
);
````

### CTAS (Create Table as Select)

It is used to create a new table based on the structure and data of another table

````sql
CREATE TABLE EMP_BACKUP
AS
SELECT * FROM EMP_TEST
WHERE department_id=20;
````

### DROP Command

If the table is referenced by another table first drop the referential integrity constraint and then drop the table  
This process can be automated by using the 'ON DELETE CASCADE' option can be added to the CREATE TABLE query

[Cascading Referential Integrity Constraints in SQL Server](https://dotnettutorials.net/lesson/cascading-referential-integrity-constraints-sql-server/)

````sql
DROP TABLE employee;

DROP DATABASE employees;
````

### ALTER Command

Table with one column cannot be dropped using ALTER.  
If column to drop is the PRIMARY KEY then 'CASCADE CONSTRAINT' option should have been used on the table

````sql
ALTER TABLE employee ADD (address VARCHAR2(50));

ALTER TABLE employee MODIFY phone_no NUMBER(10);

ALTER TABLE employee DROP COLUMN age;
````

### TRUNCATE Command

Similar to 'DELETE' Command except no rollback data is created  
If any Delete Triggers are present they will not be fired.  
Space of the previous table is cleared to be used by other tables  
If space should not be cleared 'REUSE STORAGE' should be specified in the query

````sql
TRUNCATE TABLE employee;
````
