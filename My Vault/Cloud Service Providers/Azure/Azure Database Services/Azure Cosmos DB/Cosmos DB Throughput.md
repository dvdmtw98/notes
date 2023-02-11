---
title: Cosmos DB Throughput
tags: [azure, cloud, database, nosql, cosmos-db]
---

The throughput can be defined at the database or container level  
We can specify capacity using provisioned throughput (Manually) or pay as we go (Automatic)

When defined at the DB level it is called as Shared Throughput  
If specified at the Database level then all the containers in the Database (upto 25 containers) has to share the throughput

At the container level it is called as Dedicated Throughput  
The container throughput is defined by partition key, size of data and other factors