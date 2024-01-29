---
tags:
  - snowflake
  - cloud
  - data-warehouse
title: Snowflake Architecture
date: 2024-01-28 14:15:56 -0600
---

Snowflake makes use of separate layers for processing and storing the data  
It is an combination of shared-disk database architecture and share-nothing database architecture

![[snowflake-architecture.png|500]]

[Key Concepts & Architecture — Snowflake Documentation](https://docs.snowflake.com/en/user-guide/intro-key-concepts.html)

### Database Storage

Each node can access the data stored in a central repository  
Makes use of internally optimized, compressed, columnar format for data storage  
All the aspects related to data storage is handled directly by Snowflake  
The data objects that are stored by Snowflake is not directly accessible by the users (Can only be accessed using SQL queries)

### Query Processing

Processing of query is done using MPP compute cluster where each node stores a portion of the entire data  
Query processing is performed by the processing layer. Snowflake makes use of virtual warehouses (CPU, memory and temporary storage) for processing the data which is an MPP compute cluster  
These clusters are independent of each other (Cannot share data with each other)

 > [!NOTE]
 > Here Virtual Warehouse is just the name given for the processing element. It's not the same as an Data Warehouse

### Cloud Services

It is responsible for the coordination of the activates across Snowflake  
Authentication, Metadata management, Optimization and access control are some of the services that are provided by this layer
