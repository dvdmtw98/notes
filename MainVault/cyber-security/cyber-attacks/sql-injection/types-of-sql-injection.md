---
tags:
  - security
  - sqli
  - web
title: Types of SQL Injection
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

#### In-band SQL Injection

Used when we can get response (values or error) from website
E.g. An website that has paintings which can be searched for based on the id, name, etc. There we can make use of 'UNION Command'

* UNION based Injection
* ERROR based Injection

#### Inferential SQL Injection/ Blind SQL Injection

Used when to response is returned by website
E.g. Login screen. If username and password correct we login else we don't login

* BOOLEAN based Injection
* TIME based Injection

#### Out of Band SQL Injection

Errors that do not occur in the application but somewhere else. Very rarely found on Oracle DB
E.g. Using UTL_HTTP() Oracle DB method we can get a response in netcat listener
