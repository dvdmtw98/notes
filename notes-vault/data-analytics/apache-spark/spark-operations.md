---
tags:
  - analytics
  - spark
title: Spark Operations
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

Transformations: Will create a new RDD. No execution takes place  
Actions: Execution on the data takes place (Output/ Saving operations)

**Data Lineage**: File where spark stores all the information like filter to be applied, source, destination, etc. When we call Actions only then the actual code runs  
Spark lazy evaluates all the operations so only when an action is performed actual processing of all the transformation steps is performed by Spark

![[spark-operations.png|500]]

### Narrow Transformation

Each partition of the parent RDD is used by at most one partition of the child RDD  
Here no shuffle operation is performed

### Wide Transformation

Multiple child RDD partitions may depend on a single parent RDD partition  
Shuffle operation is performed  
When shuffle operation is performed 200 partitions are created
