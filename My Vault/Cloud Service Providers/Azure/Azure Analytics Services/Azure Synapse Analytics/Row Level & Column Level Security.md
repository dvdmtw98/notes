---
tags: [azure, cloud, analytics, data-warehouse, synapse, security]
---

### Row Level Security (RLS)

Restrict the records in a table based on the user accessing the table  
This is achieved by using a "Security Policy" which is a rule used to restrict access to data

To create a Security Policy an Inline-Table Valued Function (iTVF) needs to be created  
The filter predicate is used for RLS in Synapse. It silently filters the rows that are applicable to read operations (SELECT, UPDATE and DELETE, etc.)  
Other predicates are present in Synapse as well

A Security Predicate can be disabled by setting STATE = OFF  
ALTER ANY SECURITY permission is required to work with Security Predicate

### RLS Best Practices

Create a new schema for storing all the Security Predicates  
Allows to distinguish the predicates and easily apply different permissions of the schema as required  
Avoid excessive joins in the security predicate as much as possible  
Components need to drop in the following order: Security Predicate, Table, Function, Schema

---

### Column Level Security (CLS)

Restricts access to columns in a table based on user context  
This can be enforced by granting SELECT on specific columns in the table to the user  
If CLS is enforced and SELECT * is used on the table an error will occur
