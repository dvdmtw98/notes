---
tags:
  - database
  - sql
  - oracle
title: PL-SQL Triggers
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

![[trigger-syntax.png|500]]

### DML Trigger

![[dml-trigger.png|500]]

### Trigger for Auditing Purposes

`:NEW` and `:OLD` are called as sudo records  
They allow to access an recently changed value or accessed an recently updated or deleted value

![[trigger-for-auditing.png|700]]

### DDL Triggers

![[ddl-trigger.png|380]]

### Database Event Trigger

![[database-event-trigger-1.png|480]]

LOGOFF can be used to try when the user exited the Schema  
DB level trigger can be created by using DATABASE and making the trigger using SYSTEM/SYS user

![[database-event-trigger-2.png|380]]

Require to be an SYS/SYSTEM user or have Admin system Trigger privilege

![[database-event-trigger-3.png|420]]

### Instead of Triggers

Can be only used on Views  
Can used to make non updatable views updatable

![[instead-of-trigger-1.png|400]]

![[instead-of-trigger-2.png|580]]

![[instead-of-trigger-3.png|480]]

![[instead-of-trigger-4.png|600]]
