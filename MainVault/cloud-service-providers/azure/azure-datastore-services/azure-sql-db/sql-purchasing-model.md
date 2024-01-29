---
tags:
  - azure
  - cloud
  - database
  - sql
title: Purchasing Model
date: 2024-01-28 14:15:56 -0600
---

### DTU
It is only available in Azure SQL Database  
Has a Basic, Standard and Premium plan  
DTU is a unit used by Microsoft, it is an blend of various metrics like IO, CPU and Memory Usage

### vCore
Supported by Azure SQL Database and SQL Managed Instance  
There is General Purpose, Business Critical and Hyperscale plans  
Offers greater flexibility over the DTU model

 > [!INFO]
 > * Managed Instance does not support [[hyperscale-on-azure|Hyperscale]]
 > * SQL Database also supports Serverless option which is not supported by the other DBs
