---
tags:
- azure
- database
- nosql
- cosmos-db
- index
title: Azure Cosmos DB
---

Fully Managed NoSQL Database designed to be highly scalable and performant  
Supports enabling geo-replication of data with a click of a button  
Has very low latency "less than 10ms"   
Can perform Analytics on data using Spark  

Designed for:
* Highly Regional (Globally distributed DB)
* Highly Responsive & Low Latency

Cosmos DB automatically indexes all the columns in the data to allow faster queries  
Time to Live (TTL) option can be setup in Cosmos DB to delete stale data automatically from the container after a fixed period of time

In a Azure Subscription only 50 Cosmos DB Accounts can be created  
Each account can contain any amount of data and databases

**Request Unit (RU)**: Unit that encapsulates the resources used by DB. 1 RU roughly equals 1kb item read from a container

---

### Cosmos DB APIs

The API to use has to be configured on the Cosmos DB Account

* **SQL (Core)**
	* Document Datastore (Cosmos DB Native Datastore)
	* Allows to query data using SQL
	* Recommended option when moving from other SQL databases
* **MongoDB**
	* Document Datastore
	* Data stored in BSON format
* **Cassandra**
	* Columnar Datastore
	* Query data using CQL
	* API currently supports OLTP workloads
* **Gremlin**
	* Graph Datastore
	* API supports OLTP workloads
	* API is based on [Apache TinkerPop](apache-tinkerpop.md)
* **Table**
	* Key Value Datastore
	* Overcomes limitations of [Azure Tables](../azure-tables/azure-tables.md)
* **PostgreSQL**
	* Relational Database
	* Uses Citus Open Source to Scale Horizontally

|                  | SQL       | Cassandra | MongoDB    | Gremlin    | Tables | PostgreSQL |
| ---------------- | --------- | --------- | ---------- | ---------- | ------ | ---------- |
| Cosmos Database  | Database  | Keyspace  | Database   | Database   | NA     | Database   |
| Cosmos Container | Container | Table     | Collection | Graph      | Table  | Table      |
| Cosmos Entity    | Item      | Row       | Document   | Node/ Edge | Item   | Row        |

![Cosmos DB Structure|600](../../images/cosmos-db-structure.png)

[Choose an API in Azure Cosmos DB | Microsoft Docs](https://docs.microsoft.com/en-us/azure/cosmos-db/choose-api)

---

[Azure Datastore Services](../azure-datastore-services.md)  
[Azure Tables](../azure-tables/azure-tables.md)