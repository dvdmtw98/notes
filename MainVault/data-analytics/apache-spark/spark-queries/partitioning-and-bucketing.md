---
tags:
  - analytics
  - spark
  - partition
title: Partitioning & Bucketing
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Dynamic Partition

````python
salesDF.write.partitionBy("Country").save("path")
````

### Bucketing

Number of files created = No. of partitions * No. of buckets

````python
salesDF.write.bucketBy(4,"City").sortBy("City").saveAsTable("lti871.salebuck")
````

### Partitioning & Bucketing

````python
salesdf.write.partitionBy("Country").bucketBy(10,"city").sortBy("City").saveAsTable("lti871.salebuck")
````

 > [!NOTE]
 > BucketBy() does not support .save(), .insertInto() and .jdbc() so use saveAsTable()
