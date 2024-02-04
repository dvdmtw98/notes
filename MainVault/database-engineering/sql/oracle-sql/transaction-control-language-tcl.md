---
tags:
  - database
  - sql
  - oracle
title: Transaction Control Language (TCL)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

A transaction is a set of instructions that are together considered as a Single Unit  
It should all either be executed successfully or none should be executed. On Commit only all DML commands are saved permanently.

### COMMIT Command

WORK is optional and is used to make the command SQL compliant. The command has the same output with or without WORK parameter.  
COMMENT is used to add an message to the commit to easily identify it later. It is also optional. It is used to identify the comment in the DBA_2PC_PENDING table

[Oracle / PLSQL: COMMIT Statement](https://www.techonthenet.com/oracle/transactions/commit.php)

````sql
COMMIT [WORK] [COMMENT 'your comment'];
````

### ROLEBACK Command

It reverts the state of the system to the last COMMIT point.

````sql
ROLLBACK;
````

### SAVEPOINT Command

Specifies a point in a transaction to which we can roll back later.

````sql
SAVEPOINT ABC;
````
