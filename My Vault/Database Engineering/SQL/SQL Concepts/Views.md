---
---

````sql
# FORCE keyword can be used to create a view before creating the base table
CREATE OR REPLACE FORCE VIEW <view-name>
AS
SELECT * FROM <table-name>;
````

View is a logical table that can be based on other tables and views  
Views do not any data of its own (except [Materialized View](../Oracle%20SQL/Materialized%20View.md))

| Simple View                                                                                               | Complex View                                                                                |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Contains only one single base table or is created from only one table                                     | Contains more than one base tables or is created from more than one tables                  |
| We cannot use group functions like MAX(), COUNT(), etc                                                    | We can use group functions                                                                  |
| Does not contain groups of data                                                                           | It can contain groups of data                                                               |
| DML operations could be performed through a simple view                                                   | DML operations could not always be performed through a complex view                         |
| INSERT, DELETE and UPDATE are directly possible on a simple view                                          | We cannot apply INSERT, DELETE and UPDATE on complex view directly                          |
| Simple view does not contain group by, distinct, pseudocolumn like rownum, columns defiend by expressions | It can contain group by, distinct, pseudocolumn like rownum, columns defiend by expressions |
| Does not include NOT NULL columns from base tables                                                        | NOT NULL columns that are not selected by simple view can be included in complex view       |

[Data Manipulation Language (DML)](../Oracle%20SQL/Data%20Manipulation%20Language%20%28DML%29.md) operations cannot be performed on in all conditions on Complex Views  
Certain conditions need to be satisfied and they differ from database to database
`INSTEAD OF TRIGGER` can also be used to update views

---

### DELETE

We can delete records for a view if DISTINCT, Group Functions and GROUP BY Clause was not used when the view was created

### UPDATE

If DISTINCT, Group Functions and GROUP BY Clause was used when the view cannot be updated  
Along with the above conditions if EXPRESSIONS are used in any column then we cannot update those columns

### INSERT

Allow with DISTINCT, Group Functions, GROUP BY Clause, EXPRESSIONS if during view creation we don't include NOT NULL fields then values cannot be inserted into the view

---

**<u>References</u>**:

* [sql - Can a view be updated/inserted/deleted? If Yes under what conditions? - Stack Overflow](https://stackoverflow.com/questions/47297493/can-a-view-be-updated-inserted-deleted-if-yes-under-what-conditions)
