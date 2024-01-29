---
tags:
  - aws
  - cloud
  - analytics
title: AWS Athena
date: 2024-01-28 14:15:56 -0600
---

Allows to build structure on top data that is stored in [[s3-simple-storage-service|S3 (Simple Storage Service)]]  
It is similar to External Table concept in [[apache-hive|Apache Hive]]  
It is an serverless service (No infrastructure to manage)

When creating an external table we have two options:
* Use [[aws-glue|AWS Glue]] Crawler to crawl the data and automatically create the schema
* Manually specify the columns that are going to be present in the data
