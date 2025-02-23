---
title: GCP Database Services
tags:
  - gcp
  - cloud
  - database
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Cloud SQL
A fully managed database service  
Can easily integrate with MySQL, PostgreSQL and SQL Server database services

### Cloud Spanner
A proprietary relational database designed for global scale  
Automatically and instantaneously replicates data to multiple locations across the globe  
It combines the features of an relational database with the scalability of NoSQL database  
A spanner instance consists of 4 nodes and 2 databases that are replicated across 3 regions  
It uses Google's [[gcp-internal-services#Colossus]] file system for data storage

### BigQuery
It is a serverless data warehouse  
Allows to store petabytes of data using a NoSQL wide-column database service  
Has build-in ML support  

#gcp-serverless-service #gcp-database-service

### Cloud Bigtable
A cloud native NoSQL wide-column (key-value) datastore  
Fully managed database for large analytical and operational workloads  
Supports HBase API that allows to easily integrate with the Hadoop ecosystem

### Firestore
It is a fully managed serverless NoSQL document database  
Allows to add database access to mobile and web apps  
Supports store and sync of data in real time (Firestore Realtime)

### Memory Store
Achieve extreme performance using a manage in-memory data store service
