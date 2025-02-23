---
title: Azure Synapse Analytics
tags:
  - azure
  - cloud
  - analytics
  - data-warehouse
  - synapse
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is a data warehouse and a unified analytics platform  
It uses ADLS Gen 2 (Data Lake) as its underlying datastore  
It is a PaaS (Platform as a Service) offering

Data Warehouse Unit (DWU): Unit used to represent the cost/ compute of SQL Pool

![[azure-synapse-architecture.png|600]]

Unpredictable Workflows: Serverless SQL  
Predictable Workflows: Dedicated SQL

### Key Features

Allows to build ETL/ ELT pipelines  
Ingest data from more than 95 connectors  
Deep integration with Apache Spark  
Use T-SQL statements to query data  
Integrated with BI and AI Tools

Synapse can connect to [[apache-spark|Apache Spark]]  
The SparkML and AzureML model integration features are built-in  
Has support for [[delta-file-format|Delta File Format]]  
Allows to write Spark in .NET as well

### Synapse SQL

The distributed version of T-SQL  
Supports streaming features that allow saving data into SQL Tables  
Allows to integrate AI with SQL

### Serverless Pool

In Serverless the topology changes by adding, removing or failovers of nodes  
A Serverless Pool is automatically created when a new Synapse Workspace is created  
Serverless Pool is only a computing engine and hence cannot store any data

[Synapse SQL Architecture - Azure Synapse Analytics | Microsoft Docs](https://docs.microsoft.com/en-us/azure/synapse-analytics/sql/overview-architecture)
