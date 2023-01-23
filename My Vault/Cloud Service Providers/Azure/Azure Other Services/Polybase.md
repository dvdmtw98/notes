---
title: Polybase
---

Polybase is a data virtualization feature for SQL Server  
Allows SQL Server to query data directly with T-SQL from multiple databases (Oracle, Teradata, MongoDB, Cosmos DB, Hadoop Cluster)  
Allows to join data from SQL Server with external data

 > [!INFO]
 > Polybase has 1 MB row size limit when working with Azure Synapse and 32kb when working with Azure SQL Server

The fastest and most scalable way to load data into [Azure Synapse Analytics](../Azure%20Analytics%20Services/Azure%20Synapse%20Analytics/Azure%20Synapse%20Analytics.md) is by using Polybase  
They allow to access data in Blob and ADLS using T-SQL

---

**<u>References</u>**:

* [Design a PolyBase data loading strategy for dedicated SQL pool - Azure Synapse Analytics | Microsoft Docs](https://docs.microsoft.com/en-us/azure/synapse-analytics/sql/load-data-overview)