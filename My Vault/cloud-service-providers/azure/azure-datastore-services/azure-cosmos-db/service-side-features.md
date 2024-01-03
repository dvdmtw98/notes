---
tags:
- azure
- cloud
- nosql
- cosmosdb
title: Service-side Features
---

Stored Procedures, Triggers and UDFs are executed in the Database engine  
Currently only supported by the SQL API  
Defined using JavaScript

#### Stored Procedures
Stored Procedures execute on a single partition and has access only to that logical partition  
Partition Key needs to be provided with the execution request  
Does support transactions (i.e. if failure occurs off operations will be rolled back)

#### Triggers
Triggers can be executed before (pre) or after (post) writing of data  
Triggers are not guaranteed to be executed  
They can only work on data from a single logical partition  
Supports transactions

#### Change Feed
React to changes that occur in the Cosmos DB engine using server-side code  
Allows to be notified for any insert and update operations (Delete not supported)  

Reading data from database will consume throughput  
Not supported for Azure Table API

---

[Azure Datastore Services](../azure-datastore-services.md)