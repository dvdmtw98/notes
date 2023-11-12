---
tags: [aws, cloud, analytics]
---

Allows to build structure on top data that is stored in [S3 (Simple Storage Service)](../AWS%20Storage%20Services/S3%20%28Simple%20Storage%20Service%29/S3%20%28Simple%20Storage%20Service%29.md)  
It is similar to External Table concept in [Apache Hive](../../../Data%20Analytics/Apache%20Hive/Apache%20Hive.md)  
It is an serverless service (No infrastructure to manage)

When creating an external table we have two options:
* Use [AWS Glue](../AWS%20Other%20Services/AWS%20Glue.md) Crawler to crawl the data and automatically create the schema
* Manually specify the columns that are going to be present in the data

---

[AWS](../AWS.md)
