---
tags:
  - azure
  - cloud
  - database
  - no-sql
  - tables
title: Azure Tables
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Stores NoSQL data (Key Value data with schema-less design)  
Stores non-relational data with a schema-less design  
Follows a Consumption based pricing model  
Feature is also available in [[azure-cosmos-db|Azure Cosmos DB]] (here much more features are offered)

When entering data we must specify:
* Partition key with is used to uniquely identify the partition in the data
* Row Key which is used to uniquely identify row in a given partition
