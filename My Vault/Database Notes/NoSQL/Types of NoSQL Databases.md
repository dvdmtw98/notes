---
title: Types of NoSQL Databases
---

### Key Value Stores

They are a very single database but they are really fast  
It stores data as a key and a value which can be a large list of serialized data  
Ideal data store when we want to fetch values based on a single property and don't want to query based on other properties  
They lack Relations, Indexes and Aggregation features  
They are stored as dictionaries (aka Associative Arrays/ Hash's)  
They can represent tabular data as well, but the column in each row does not have to be consistent  
Due to their simple design they are easy to scale

---

### Document Stores

A NoSQL database that stores documents as its primary data structure  
The document could be XML data but they are mostly JSON or JSON like data (BSON)
They are a subclass of Key Value store  
We can create secondary keys to speedup performance  
Suitable for applications where data needs to fetched based on a column that is more complex that document key

Tables - Collection  
Rows - Documents  
Columns - Fields  
Joins - Embedding and Linking

---

### Columnar Database

Key value data store that structure data storage into collections of related columns  
We can read that from a single column family without having to access all the columns

---

### Graph Database

A data structure that uses vertices (nodes) which form relationship to other vertices via edges (lines)  
A node will contain data properties. The edges relationship data such as direction and data properties  
Ideal for cases for relation between entities need to be mapped

Use cases:

* Fraud Detection
* Network and IT Operations
* Identity and Access Management (IAM)
* Contact Tracing
* Social Media Graphing

---

### Telemetry and Time Series

It is an append only collection of objects  
They store attributes allow with time/ timestamp/ time span in which it occurred  
They store data in an efficient manner using column stores and in-memory structures

Temporal Elements

* Valid Time: A time range in the real world in which the value is valid
* Transaction Time: The time at which the data was added into the database
* Decision Time: The time at which decision related to the data was made