---
tags: [analytics, spark, partition]
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
