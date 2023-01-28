---
title: PL-SQL Triggers
---

![Trigger Syntax|500](../images/trigger-syntax.png)

### DML Trigger

![DML Triggers|500](../images/dml-trigger.png)

### Trigger for Auditing Purposes

`:NEW` and `:OLD` are called as sudo records  
They allow to access an recently changed value or accessed an recently updated or deleted value

![Trigger for Auditing|700](../images/trigger-for-auditing.png)

### DDL Triggers

![DDL Trigger|380](../images/ddl-trigger.png)

### Database Event Trigger

![Database Event Trigger|480](../images/database-event-trigger-1.png)

LOGOFF can be used to try when the user exited the Schema  
DB level trigger can be created by using DATABASE and making the trigger using SYSTEM/SYS user

![Database Event Trigger 2|380](../images/database-event-trigger-2.png)

Require to be an SYS/SYSTEM user or have Admin system Trigger privilege

![Database Event Trigger 3|420](../images/database-event-trigger-3.png)

### Instead of Triggers

Can be only used on Views  
Can used to make non updatable views updatable

![Instead of Trigger|400](../images/instead-of-trigger-1.png)

![Instead of Trigger 2|580](../images/instead-of-trigger-2.png)

![Instead of Trigger 3|480](../images/instead-of-trigger-3.png)

![Instead of Trigger 4|600](../images/instead-of-trigger-4.png)