---
tags:
  - aws
  - cloud
  - analytics
  - redshift
title: Redshift Distribution Style
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

The query optimizer redistributes the rows to the compute nodes as needed to perform aggregate and joins  
The goal is to reduce the redistribution of data that is required for performing operations

### KEY Distribution

The key column values are hashed and same value is placed on the same slice  
The leader node places matching nodes on the same cluster slice  
Should be used when table can be distributed evenly

### ALL Distribution

Copy of the entire data is present on the first slice of all compute nodes  
As the data is present on all the nodes the operations (INSERT, UPDATE, etc.) take long time to perform  
It is suitable for tables that are not frequently updated (slowly changing data)  
Dimension Table we always use ALL

### EVEN Distribution

Leader distributes the data among the slices in a round-robin manner  
It does not depend on any column and is suitable if the table does not take place in any join operation or no clear choice between ALL and KEY  
Used when key cannot create an even distribution of data

### AUTO Distribution

This is the default distribution style used by Redshift  
Redshift automatically uses an distribution style based on the size of the data  
ALL is assigned if the table is small and changed to EVEN if the table grows in size

```sql
CREATE TABLE IF NOT EXISTS lti_schema.patient 
(
	pid int primary key,
	pname varchar(20) not null,
	drug varchar(20) not null,
	gender varchar(8) not null,
	amount int default 0
)
DISTSTTYLE EVEN;

CREATE TABLE IF NOT EXISTS lti_schema.patient
(
	pid int primary key,
	pname varchar(20) not null,
	drug varchar(20) not null,
	gender varchar(8) not null,
	amount int default 0
)
DISTSTTYLE KEY DISTKEY(drug);
```
