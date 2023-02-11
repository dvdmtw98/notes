---
title: Hive Default Partitioning
tags: [analytics, hive, partition]
---

The partition is not defined by the user it is decided based on the data and its hash value.  
Bucketing is mainly used when we want to sample data. It is also used when we have indefinite data and cannot be partitioned  
Bucketing is the concept used by MapReduce to create partitions  
Bucketing on multiple columns is possible. Both the column together is taken as key  
Formula: Hash Value (Key) mod (No. of Bucket)

 > [!INFO]
 > * To create a table in Hive DB it should be created using Hive CLI
 > * Bucketing is not supported by Spark so it should be done using Hive CLI

````sql
CREATE TABLE bucket_patient(pid int, pname string, drug string, gender string, amt int)
CLUSTERED BY(drug) INTO 4 BUCKETS;

INSERT OVERWRITE TABLE bucket_patient SELECT * FROM patient;

SELECT * FROM bucket_patient TABLESAMPLE(BUCKET 1 OUT OF 4 ON drug);

SELECT DISTINCT(drug) FROM bucket_patient TABLESAMPLE(BUCKET 1 OUT OF 4 ON drug);

SELECT * FROM bucket_patient TABLESAMPE(50 percent);

SELECT * FROM bucket_patient LIMIT 5;
````