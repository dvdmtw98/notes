---
title: Hive Managed and External Tables
tags:
  - analytics
  - hive
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Managed Table

Drop on an managed table deletes the metadata from the metastore as well as the data from HDFS  
In Managed Table we create the schema and then insert data into it  
Hive manages the Data and the metadata

### External Table

Drop on an external table will cause the metadata to be deleted but not the actual data  
In external we create the structure on top of already existing data  
Hive only manages the Metadata
