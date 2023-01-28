---
title: Azure Cosmos DB
---

Fully Managed NoSQL Database designed to be highly scalable and highly performant  
It supports enabling geo-replication of data with a click of a button  
Has very low latency (\< 10ms)  
Cosmos DB Explorer can be used to view the data

Designed for:

* Highly Regional (Globally distributed DB)
* Highly Responsive & Low Latency

---

### Cosmos DB APIs

* **NoSQL**
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
	* API currently supports OLTP workloads
	* API is based on [Apache TinkerPop](Apache%20TinkerPop.md)
* **Table**
	* Key Value Datastore
	* Overcomes limitations of [Azure Tables](../Azure%20Tables/Azure%20Tables.md)
* **PostgreSQL**
	* Relational Database
	* Uses Citus Open Source to Scale Horizontally

|                  | NoSQL     | Cassandra | MongoDB    | Gremlin    | Tables | PostgreSQL |
| ---------------- | --------- | --------- | ---------- | ---------- | ------ | ---------- |
| Cosmos Database  | Database  | Keyspace  | Database   | Database   | NA     | Database   |
| Cosmos Container | Container | Table     | Collection | Graph      | Table  | Table      |
| Cosmos Entity    | Item      | Row       | Document   | Node/ Edge | Item   | Row        |

---

### Data Consistency

Cosmos DB supports multiple levels of consistency from Eventual Consistency to Strong Consistency  
Strong - Bounded Staleness - Session - Consistent Prefix - Eventual

---

Cosmos DB automatically indexed all the columns in the data to allow faster queries when using them  
Time to Live (TTL) option can be setup in Cosmos DB to delete stale data automatically from the container after a fixed period of time

In a Azure Subscription only 50 Cosmos DB Accounts can be created  
Each account can contain any amount of data and databases

![Cosmos DB Structure|600](../../images/cosmos-db-structure.png)

---

**<u>References</u>**:
* [Choose an API in Azure Cosmos DB | Microsoft Docs](https://docs.microsoft.com/en-us/azure/cosmos-db/choose-api)