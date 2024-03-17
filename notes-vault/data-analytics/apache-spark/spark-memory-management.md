---
tags:
  - analytics
  - spark
title: Spark Memory Management
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### RAM

Reserved Memory  
User Memory  
Execution Memory (Working Memory) - Operations on data is performed here  
Storage Memory (Cache) - Place where the result is stored. Not permanent storage

### Static Memory

Execution Memory - 2GB, Storage Memory - 6GB (Example) (When cache gets full evict  LRU block to disk) - Spark 1.0  
LRU: Least Recently Used (Cache Management Policy)

### Dynamic Memory

Execution Memory gets full it access more space of the Storage Memory and evict LRU block from Storage memory to disk - Spark 1.6 and above

[Apache Spark Memory Management | Medium](https://medium.com/analytics-vidhya/apache-spark-memory-management-49682ded3d42)
