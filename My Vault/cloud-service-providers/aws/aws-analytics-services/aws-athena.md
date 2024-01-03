---
tags:
- aws
- cloud
- analytics
title: AWS Athena
---

Allows to build structure on top data that is stored in [S3 (Simple Storage Service)](../aws-storage-services/s3/s3-simple-storage-service.md)  
It is similar to External Table concept in [Apache Hive](../../../data-analytics/apache-hive/apache-hive.md)  
It is an serverless service (No infrastructure to manage)

When creating an external table we have two options:
* Use [AWS Glue](../aws-other-services/aws-glue.md) Crawler to crawl the data and automatically create the schema
* Manually specify the columns that are going to be present in the data

---

[AWS](../aws.md)