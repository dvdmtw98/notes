---
tags: [database, sql, oracle]
---

It is used to grant, revoke privileges on tables, view, etc. for a user or role

* System Privileges: Granted by DBA to user. All to run commands like SELECT, CREATE, UPDATE
* Object Privileges: Granted by owner of object. Allows to use tables, views, etc.

### GRANT Command

````sql
# Grant permission to perform some operations
GRANT SELECT, UPDATE, INSERT ON emp TO sami;

# Grant permission for all operations
GRANT ALL ON emp TO sami;

# Grant permission to all the DB users
GRANT SELECT ON emp TO PUBLIC;

# Grant permission on centain fields for certain command
GRANT UPDATE (ename), INSERT (empno, ename) ON emp TO sami;

# All the user to pass the permission down to other users
GRANT SELECT ON emp TO sami WITH GRANT OPTION;
````

### REVOKE Command

````sql
REVOKE SELECT, UPDATE, INSERT ON emp FROM sami;

REVOKE SELECT ON emp FROM PUBLIC;

REVOKE UPDATE, INSERT ON emp FROM sami;
````
