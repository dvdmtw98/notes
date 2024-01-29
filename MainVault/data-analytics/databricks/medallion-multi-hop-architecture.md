---
tags:
  - analytics
  - databricks
title: Medallion (Multi-Hop) Architecture
date: 2024-01-28 14:15:56 -0600
---

### Bronze Layer
Used to ingest raw data  
Efficient storage & querying of unprocessed history of data

### Silver Layer
Used to perform cleaning of dataset  
Enforce production schema on dataset  
Eliminate duplicated, add quality checks

### Gold Layer
Powers ML, reporting, dashboard, etc.  
Contains subset of the data from silver layer (Data Marts)  
Contains final data that will be consumed by services
