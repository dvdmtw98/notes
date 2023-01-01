### Nested Subquery

Query inside an query is called as an subquery. You can place a subquery in a WHERE clause, a HAVING clause, or a FROM clause of a SELECT statement.

````sql
# Employees with salary higher than average salary
SELECT * FROM emp 
WHERE sal > (
	SELECT AVG(sal) 
	FROM emp
);

# View the 3rd Highest Salary
SELECT MAX(sal) 
FROM emp 
WHERE sal < (
	SELECT MAX(sal) 
	FROM emp 
	WHERE sal < (
		SELECT MAX(sal) 
		FROM emp
	)
);

# Count of Employee with salary greater than average
SELECT COUNT(*) 
FROM emp 
WHERE sal > (
	SELECT AVG(sal) 
	FROM emp
);

# See the employees that work in Hyderabad
SELECT * 
FROM emp 
WHERE deptno IN (
	SELECT deptno 
	FROM dept 
	WHERE city ='HYD'
);
````

### Co-related Subquery

A correlated subquery is a subquery that uses values from the outer query, requiring the inner query to execute once for each outer query

````sql
SELECT product_id, product_name, list_price 
FROM products p 
WHERE list_price > (
	SELECT AVG(list_price) 
	FROM products 
	WHERE category_id = p.category_id
);

SELECT customer_id, name 
FROM customers 
WHERE NOT EXISTS (
	SELECT * 
	FROM orders 
	WHERE orders.customer_id = customers.customer_id 
) 
ORDER BY name;
````

---

**<u>References</u>**:

* [SQL Nested subquery - w3resource](https://www.w3resource.com/sql/subqueries/nested-subqueries.php)
* [SQL : Single Row Subqueries - w3resource](https://www.w3resource.com/sql/subqueries/single-row-subqueries.php)
