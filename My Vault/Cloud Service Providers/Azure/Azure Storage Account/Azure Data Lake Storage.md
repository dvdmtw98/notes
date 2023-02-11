---
title: Azure Data Lake Storage
tags: [azure, cloud, storage]
---

A data lake is a centralized data repository for unstructured and semi-structured data  
It is built on top of [Azure Blob Storage](Azure%20Blob%20Storage.md) (Cost Efficient)  
Provides file level security and a hierarchical namespace

It is meant to store vast amounts of data  
Data is stored in the form of Blobs or Files  
It is [Apache Hadoop](../../../Data%20Analytics/Apache%20Hadoop/Apache%20Hadoop.md) compatible when using the `abfss` driver  
Supports ACL and POSIX permissions

---

### ADLS (Gen 1)

Will be deprecated in 2024

### ADLS (Gen 2)

Designed to handle big data workloads  
Can handle petabytes of data and hundreds of thousands of gigabits of throughput

Added support for hierarchical namespaces  
Provides ACLs, Performance Optimizes, Throttling Management, etc.

Can be accessed using **`wasbs`** (Blob Endpoint) and **`abfss`** (DFS Endpoint) drivers  
They are both compatible with [Azure Data Factory](../Azure%20Other%20Services/Azure%20Data%20Factory/Azure%20Data%20Factory.md)