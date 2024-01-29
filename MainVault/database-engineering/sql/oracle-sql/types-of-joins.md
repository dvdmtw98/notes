---
tags:
  - database
  - sql
  - oracle
title: Types of Joins
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

### EQUI Join

In this join the tables are join together by making use of the '=' operator in the WHERE clause  
The join clause is not required in this type of join to join  
The result of this type of Join is exactly the same as INNER Join and NATURAL Join

[SQL Equi join - w3resource](https://www.w3resource.com/sql/joins/perform-an-equi-join.php)

````sql
SELECT e.empno, e.ename, e.sal, e.deptno, d.dname, d.city 
FROM emp e, dept d 
WHERE emp.deptno = dept.deptno;

SELECT * 
FROM emp, dept 
WHERE emp.deptno = dept.deptno;

SELECT empno, ename, sal, dname, city 
FROM emp,dept 
WHERE emp.deptno = dept.deptno;
````

### NATURAL Join

It is an type of join that joins tables based on the common column name  
Works even if multiple columns which the same name are present  
There is no need to specify the Join Condition  
The same column (join column) is only returned once in the resultant result even when **`SELECT *`** is used  
It returns only the rows where a match was found from both the tables, it also avoids returning duplicate rows (returns unique results)  
NATURAL JOIN is an type to EQUI JOIN

[SQL natural join - w3resource](https://www.w3resource.com/sql/joins/natural-join.php)

[NATURAL JOIN operation](https://docs.oracle.com/javadb/10.6.2.1/ref/rrefsqljnaturaljoin.html)

````sql
SELECT * 
FROM emp 
NATURAL JOIN dept;
````

### JOIN with USING clause

It is used to perform NATURAL JOIN to match using only one column when more than one column match

````sql
SELECT location_id, postal_code, country_name
FROM locations
JOIN countries
USING (country_id);
````

[Oracle: Creating Joins with the USING Clause - w3resource](https://www.w3resource.com/oracle/joins/joins-with-using-clause.php)

### NON-EQUI Join

This join is performed when exact join between both the table is not possible  
In the below example the the rows that have value for sal between lowsal and hisal is selected and there results are join with every row of the other table.

[SQL non equi join - w3resource](https://www.w3resource.com/sql/joins/perform-a-non-equi-join.php)

````sql
SELECT e.empno, e.ename, e.sal, s.grade 
FROM emp e, salgrade s 
WHERE e.sal BETWEEN s.lowsal AND s.hisal;
````

### SELF Join

Self Join is used to join a table to itself. Alias has to be used for the table names from this type of join to be performed  
NATURAL JOIN can be used as a shortcut to perform SELF Joins

[SQL self join - w3resource](https://www.w3resource.com/sql/joins/perform-a-self-join.php)

````sql
SELECT e.empno, e.ename, m.ename "Manager" 
FROM emp e, emp m 
WHERE e.mgrid = m.empno;
````

### INNER Join

The INNER JOIN selects all rows from both participating tables as long as there is a match between the columns. INNER JOIN is same as JOIN clause, combining rows from two or more tables. The JOIN clause produces the same output as INNER JOIN.

[SQL INNER JOIN - w3resource](https://www.w3resource.com/sql/joins/perform-an-inner-join.php)

````sql
SELECT f.item_name, f.item_unit, c.company_name, c.company_city 
FROM foods f INNER JOIN company c 
ON f.company_id = c.company_id;
````

### CROSS Join

The SQL CROSS JOIN produces a result set which is the number of rows in the first table multiplied by the number of rows in the second table if no WHERE clause is used along with CROSS JOIN. This kind of result is called as Cartesian Product. If WHERE clause is used with CROSS JOIN, it functions like an INNER JOIN.

````sql
SELECT * FROM cities CROSS JOIN flights;

SELECT * FROM cities, flights;
````

### LEFT OUTER Join

It joins the rows from both the table where the condition is true and also returns all the rows from the first (left) table where the condition is not true. Similar to LEFT JOIN.

[SQL Left Join - w3resource](https://www.w3resource.com/sql/joins/perform-a-left-join.php)

````sql
SELECT e.empno, e.ename, d.dname, d.deptno 
FROM emp e LEFT OUTER JOIN dept d 
ON e.deptno = d.deptno;

SELECT e.empno, e.ename, d.dname, d.deptno 
FROM dept d LEFT OUTER JOIN emp e 
ON e.deptno = d.deptno 
WHERE rownum <= 3;
````

### RIGHT OUTER Join

Returns all the rows from the second (right) table and the rows from the first table where the condition is satisfied. Similar to RIGHT JOIN.

[SQL Right Join - w3resource](https://www.w3resource.com/sql/joins/perform-a-right-join.php)

````sql
SELECT e.empno, e.ename, d.dname, d.deptno 
FROM dept d RIGHT OUTER JOIN emp e 
ON e.deptno = d.deptno;
````

### FULL OUTER Join

This join combines the results of both left and right outer joins and returns all (matched or unmatched) rows from the tables on both sides of the join clause.

[SQL Full Outer Join - w3resource](https://www.w3resource.com/sql/joins/perform-a-full-outer-join.php)

````sql
SELECT * FROM emp e 
FULL OUTER JOIN dept d 
ON e.deptno = d.deptno;
````
