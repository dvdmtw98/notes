---
title: Data Query Language (DQL)
tags:
  - database
  - sql
  - oracle
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

SELECT state is called as DQL. In its basic form its used to display all the columns or some specific columns from a table  
SELECT Command can be used with the WHERE clause to filter the output that is produced.

**Projection**: Choose columns in a table to be returned (Column)  
**Selection**: Choose records in a table to be returned using conditions (Record)

````sql
SELECT a, b, c FROM foobar WHERE x=3;
````

"a, b, c" is the projection part, "where x=3" the selection part

### GROUP BY Clause

When the results need to be grouped wrt a field then GROUP BY clause is used  
An aggregate function has to be called on an attribute to allow for the grouping to take place

 > [!INFO]
 > * Columns selected in the group function need not be part of the group be clause
 > * Columns which are part of the SQL query but not part of the group function should be included in the group by clause
 > * Columns which are part of the group by clause need not be a part of the SQL statement
 > * Group functions eliminate the NULL values. If NULL values need to be included in the calculation then NVL() can be used.
 > * An nested group function should always have a group by clause

````sql
SELECT deptno, SUM(sal) FROM emp GROUP BY deptno;

SELECT deptno, COUNT(*) FROM emp GROUP BY deptno;
````

### HAVING Clause

It is used to filter the output based on the result of the Grouping. WHERE clause is used to filter rows while HAVING is used to filter groups. HAVING clause only works on aggregate function and should be placed after GROUP BY  
HAVING Clause can be used without GROUP BY as well in this case the entire table is considered as one group and if the condition is true a single row is returned else NULL

````sql
SELECT deptno, SUM(sal) FROM emp GROUP BY deptno HAVING SUM(sal) >= 5000;

SELECT deptno, COUNT(*) FROM emp GROUP BY deptno HAVING COUNT(*) >= 2;
````

### ORDER BY Clause

It is used to sort the output of SELECT query. Default Sorting order is Ascending. It should appear at the end of the query. You can ORDER BY on column that is not part of the SELECT clause  
NULL values are displayed last when using ASC in ORDER BY

````sql
SELECT * FROM emp ORDER BY sal DESC;

SELECT * FROM emp ORDER BY ename, sal DESC; (Order by 2nd term if the 1st is equal)

SELECT * FROM emp ORDER BY 2; (2 implies 2nd column in table)
````

[Group By, Having, and Where Clauses In SQL](https://www.c-sharpcorner.com/blogs/group-by-with-having-where-clause-in-sql)  

[SQL multiple column ordering - Stack Overflow](https://stackoverflow.com/questions/2051162/sql-multiple-column-ordering)
