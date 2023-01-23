---
title: Kinesis Key Terms
---

### Kinesis Data Stream

A collection of shards  
Each shard is an sequence of data record. Each record has an sequence number

### Data Record

Unit of record that is stored in the kinesis data stream

### Retention Period

Time the data is stored in the data stream  
Default: 24hrs

### Kinesis Data Stream Application

Is the consumer of the stream  
They generally run on EC2

### Shared

Sequence of data that is present in an data stream  
Each shard allows 5 transactions/ per for read. 1000 writes/ per  
Total capacity of stream = sum of shards

### Partition Key

It is used to group by shard in a stream  
Each data is assigned an partition key and it is used to decide which shard the data belong