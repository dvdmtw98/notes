---
title: Azure Synapse Analytics
tags: [azure, cloud, analytics, data-warehouse, synapse]
---

It is a data warehouse and a unified analytics platform  
It uses ADLS Gen 2 (Data Lake) as its underlying datastore  
It is a PaaS (Platform as a Service) offering

Data Warehouse Unit (DWU): Unit used for represent the cost/ compute of SQL Pool

![Synapse Architecture|600](../../images/azure-synapse-architecture.png)

Unpredictable Workflows: Serverless SQL  
Predictable Workflows: Dedicated SQL

---

### Key Features

Allows to build ETL/ ELT pipelines  
Ingest data from more than 95 connectors  
Deep integration with Apache Spark  
Use T-SQL statements to query data  
Integrated with BI and AI Tools

Synapse can connect to [Apache Spark](../../../../Data%20Analytics/Apache%20Spark/Apache%20Spark.md)  
The SparkML and AzureML model integration features are built-in  
Has support for [Delta File Format](../../../../Data%20Analytics/Databricks/Delta%20File%20Format.md)  
Allows to write Spark in .NET as well

---

### Synapse SQL

Distributed version of T-SQL  
Supports streaming features that allows to save data into SQL Tables  
Allows to integrate AI with SQL

### Serverless Pools

In Serverless the topology changes by adding, removing or failovers of nodes  
An Serverless Pool is automatically created when a new Synapse Workspace is created  
Serverless Pool is only an compute engine and hence cannot store any data

[Synapse SQL architecture - Azure Synapse Analytics | Microsoft Docs](https://docs.microsoft.com/en-us/azure/synapse-analytics/sql/overview-architecture)

---

[SQL DB Security](../../Azure%20Database%20Services/Azure%20SQL%20DB/SQL%20DB%20Security.md)  
[Polybase](../../Azure%20Other%20Services/Polybase.md)