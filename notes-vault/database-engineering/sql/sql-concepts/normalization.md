---
title: Normalization
tags:
  - database
  - sql
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

Used to remove the redundancy in the tables  
Prevents the Insert, Delete and Update anomaly in the DB

* **Insert**: We cannot insert certain data (attribute) into table without the existence of other attributes
* **Delete**: Want to delete data (unwanted) but other data (wanted) is deleted as well
* **Update**: Want to update a single piece of data but we need to update its copies

These problems can be overcome by dividing a single large table into smaller tables and linking them together using relationships

### 1NF

Using row order to convey information also violates 1NF (The order of the rows shouldn't matter)  
All the attributes in the table must only have atomic values (List of values in a column is not allowed)  
Each row in the table should be identified by a unique column i.e. primary key  
The non primary key columns should depend on the primary key

Converting a table to 1NF generally leads to the increase in the redundancy in the data
Each row has a whole in a table will be unique

### 2NF

The table should already be in 1NF and the non-prime (non key) attributes should be completely dependent on the prime (key) attribute  
Any attribute that is part of the compound key is called as prime attribute  
The partial dependency is removed by splitting the dependencies into multiple tables such that the non prime (non key) attributes are fully dependent on the prime (key) attributes  
If the table does not have a compound key then it is already in 2NF

### 3NF

The table should already be in 2NF and no non-prime (non-key) attribute is transitively dependent on the primary key attribute  
The table is broken down to eliminate this dependency

[Normalization in DBMS: 1NF, 2NF, 3NF and BCNF in Database](https://beginnersbook.com/2015/05/normalization-in-dbms/)  

[First Normal Form (1NF) of Database Normalization | Studytonight](https://www.studytonight.com/dbms/first-normal-form.php)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GFQaEYEc8_8?si=d6XDfbTWoRNaNO_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
