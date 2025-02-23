---
title: Azure Elastic Pools
tags:
  - azure
  - cloud
  - database
  - sql
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is a simple cost-effective solution for managing and scaling multiple databases that having varying and unpredictable usage demands

Two [[sql-purchasing-model|Purchasing Model]] are supported
* DTU based (Storage fixed compute variable)
* vCore based (Compute, storage, memory, IO all are variable)

Databases in an elastic pool are on:
* A single server
* Share a set number of resources at a set price

[ManageMultiple Databases with Elastic Pools - Azure SQL Database | Microsoft Docs](https://docs.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-overview)
