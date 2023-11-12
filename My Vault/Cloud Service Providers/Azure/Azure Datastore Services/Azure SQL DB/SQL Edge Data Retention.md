---
tags: [azure, cloud, database, sql]
---

SQL Edge Database is used to store data from IoT and edge devices

The administrators can define an data retention policy on the SQL edge database which is applicable to all of its tables  
Once the defined period is over a background task is run which will find all the tables that are specified in the rule that have rows that need to be purged  
A table with "data_retention" value as -1 and unit as infinite indicated data retention is not defined on that table

The automatic triggering of the data retention policy is disabled when a backup is restored or database is reattached  
Data retention filter column cannot be altered and it must be an date/ datetime datatype  
The [Temporal](Temporal%20Tables.md) History Table cannot be purged

---

[Azure Datastore Services](../Azure%20Datastore%20Services.md)
