---
tags:
  - analytics
  - spark
title: RDD (Resilient Distributed Dataset)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is the underlying Data Structure used by Spark  
RDD is nothing but an collection of partitions  
When data is stored in HDFS it is stored in the form of blocks when this is imported into Spark its converted into RDD

No. of partitions = No. of cores (Default for All data source leaving HDFS)  
No. of blocks in HDFS = No. of partitions in Spark (HDFS Default)  
The number of partitions that are created can be changed as required

### RDD Properties

Immutable (Cannot be changed)  
Type inferred  
Distributed Storage  
Resilient  
In-memory Computation  
Lazy Evaluation (Until Action is called execution does not take place)  
Cacheable
