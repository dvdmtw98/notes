---
tags:
  - azure
  - cloud
  - database
  - nosql
  - cosmos-db
title: Cosmos DB Throughput
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Provisioned Throughput

Ideal for always-on production usage  
Throughput can be defined at the database or container level  
Requires 10 RU's per GB of storage

When defined at the Database level it is called as Shared Throughput  
If specified at the Database level then all the containers in the Database (up to 25 containers) has to share the throughput

At the container level it is called as Dedicated Throughput  
This approach is recommend to achieve predictable performance  
The container throughput is defined by partition key, size of data and other factors

Once RU's are consumed subsequent requests are Rate Limited  
By default manual scaling is required to acquire more RU's  
We can configure autoscaling where for throughput we provide a maximum value  
The minimum is calculated as 10% of the maximum value

### Serverless Throughput

Pay only for the RU's consumed and the storage used  
Ideal for development and non-frequent workloads  
Supports a maximum of 5000 RU's
