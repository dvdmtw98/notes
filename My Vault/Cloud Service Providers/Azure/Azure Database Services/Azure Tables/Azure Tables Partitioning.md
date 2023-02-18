---
title: Azure Tables Partitioning
tags: [azure, cloud, database, no-sql, tables, partition]
---

We need to define a partition key and row key which is used to access the data (Both need to be of string type)  
Each row has an timestamp value associated as well which is used to track when the value was last updated we cannot edit this value

The primary key in Azure Tables is formed from the combination of the partition key and the row key  
No other type of key that is supported. The data is clustered around the primary key

### Types of Partitions

**Hash Partitioning**: Partition the data based on the hash of the data  
**List Partitioning**: Partition the data based on a predefined values from a column  
**Range Partitioning**: Stores a sequential range of values in the same partition

To support transactional operations (Atomic Operations) the data needs to be in the same partition  
Vertical partitioning can be used with Azure Tables to segregate data based on query patterns  
The row key attribute is used to order the records in a partition and hence has to be unique per partition  
Tables can be queried access multiple partitions but it is inefficient and is not considered best practice

---

[Azure Database Services](../Azure%20Database%20Services.md)