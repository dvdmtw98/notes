---
title: TIME based (Blind) Injection
tags:
  - security
  - sqli
  - web
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

For using time based SQL Injection the command that is being performed should include an WHERE clause
If the condition is true sleep for 2 secs else sleep for 5 seconds

````sql
SELECT * 
FROM users 
WHERE username="sagar" AND if(database="a", sleep(2), sleep(5));

SELECT * 
FROM users 
WHERE username="sagar" AND if(len(database) > 2, sleep(2), sleep(5));
````

The parameters for the sleep() and if() function can be different based on the DB vendor
