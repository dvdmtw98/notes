---
tags:
- aws
- cloud
- analytics
- redshift
title: Redshift
---

It is an massively parallel, column oriented database that makes it easy and cost effective to analyze the data stored in data warehouse and data lakes  
It is also called as an Petabyte scale data store  
It is built on top of [EC2 (Elastic Cloud Compute)](../../aws-compute-services/ec2-elastic-cloud-compute.md)

**<u>Advantages</u>**

* Easy to set-up, deploy and manage
* Can be easily scaled
* Provides 10x faster performance (ML, Columnar Storage, MPP)
* Cost Effective
* Allows to Query Data Lake
* Secure (Encryption)

---

### Points to Remember

In Redshift we create a DB. In that we create Schema and in that we create tables
Database -> Schema -> Table

If we do not create a Schema the table it is made part of public schema  
Redshift does not have the concept of primary key

Redshift does not allow to load file if it consist of NULL rows  
In Redshift the data is stored in the form of micro-partitions (similar to partition in Spark, Block in HDFS)

---

[AWS Analytics Services](../aws-analytics-services.md)  
[AWS Database Services](../../aws-database-services/aws-database-services.md)