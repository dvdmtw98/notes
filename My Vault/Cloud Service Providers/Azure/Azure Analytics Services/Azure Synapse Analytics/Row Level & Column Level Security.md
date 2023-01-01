### Row Level Security (RLS)

Restrict the records in a table based on the user accessing the table  
This is achieved by using "Security Policy" it is a rule used to restrict access to data

To create a Security Policy an Inline-Table Valued Function (iTVF) needs to be created  
The filter predicate is used for RLS in Synapse. It silently filters the rows that are applicable to read operations (SELECT, UPDATE and DELETE, etc.)  
There are other predicates that are present in Synapse as well

An Security Predicate can be disabled by setting STATE = OFF  
ALTER ANY SECURIY permission is required to work with Security Predicate

### RLS Best Practices

Create a new schema for storing all the Security Predicates  
Allows to distinguish the predicates and easily apply different permissions of the schema as required  
Avoid excessive joins in the security predicate as much as possible  
Components need to dropped in the following order: Security Predicate, Table, Function, Schema

---

### Column Level Security (CLS)

Restricts access to columns in a table based on user context  
This can be enforced by granting SELECT on specific columns in of the table to the user  
If CLS is enforced and SELECT * is used on the table an error will occur

---
