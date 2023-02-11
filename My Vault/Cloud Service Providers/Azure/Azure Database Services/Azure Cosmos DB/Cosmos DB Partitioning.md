---
title: Cosmos DB Partitioning
tags: [azure, cloud, database, nosql, cosmos-db, partition]
---

The database at the application level is partitioned into Containers  
A single query can only access a single container at a time  
Inside each collection Cosmos DB partitions data based on partition key (it is a mandatory field to configure during setup) and should be chosen carefully for even partitioning of data  
Additionally each row in a collection has a unique key that is used to identify individual records

When you choose a column to be partition key the data is split logically based on the value of this column  
These logical partitions are then physically partitioned by storing them on different disks   More than one physical partition can be saved onto the save disk  
In Cosmos DB the partition key has to be defined at the container level

![Partitions in Cosmos DB|600](../../images/partitioning-in-cosmos-db.png)

The logical partitions are physically distributed by using an Hashing Algorithm  
Each physical partition has an replica set which allows to distribute the data globally  
Any transaction that occurs inside a logical partition of an container is ACID compliant

---

### Partitioning Best Practices

When creating partitions we should try to avoid creating hot partitions as much as possible
* Hot Partitions on Storage: Large amount of data in single physical partition
* Hot Partitions on Throughput: Few partitions are queried very frequently

The key that will be used for partitioning should have a high cardinality (Large amount of unique values)  
The datatype should be String type. If Number is to be used it should be converted to a String  
If such a column does not exist then we should use composite columns  
Physical limitations to consider:

* Max Item size: 2 MB
* Max logical partition size: 20 GB