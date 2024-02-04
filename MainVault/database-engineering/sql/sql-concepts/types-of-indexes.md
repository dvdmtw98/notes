---
tags:
  - database
  - sql
title: Types of Indexes
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

An INDEX are used to speed up query execution resulting in high performance  
There are other Database specific Indexes that exist as well

### Unique Index

Created when can column is marked with the UNIQUE keyword

### Clustered Index

When we set a column as Primary Key that column is an Clustered Index  
There can only be one clustered index in a table  
The data in the underlying table is sorted using this index

### Non-Clustered Index

Can be used for other columns that are not PRIMARY KEY  
When we perform a query using this column the execution speed will be boosted  
The records are not sorted based on this index (In Table they are sorted by Clustered Index)  
The index is stored in a different location from the table (Similar to Index in Textbooks)

````sql
CREATE NONCLUSTERED INDEX <index_name> 
ON <table_name>(<column(s))
````
