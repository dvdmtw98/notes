---
tags:
  - azure
  - cloud
  - sql
  - polybase
title: Polybase
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Polybase is a data virtualization feature for SQL Server  
Allows SQL Server to query data directly with T-SQL from multiple databases (Oracle, Teradata, MongoDB, Cosmos DB, Hadoop Cluster)  
Allows to join data from SQL Server with external data

 > [!INFO]
 > Polybase has 1 MB row size limit when working with Azure Synapse and 32kb when working with Azure SQL Server

The fastest and most scalable way to load data into [[azure-synapse-analytics|Synapse]] is by using Polybase  
It also allow to access data in Blob and ADLS using T-SQL

[Design a PolyBase data loading strategy for Azure Synapse Analytics | Microsoft Docs](https://docs.microsoft.com/en-us/azure/synapse-analytics/sql/load-data-overview)
