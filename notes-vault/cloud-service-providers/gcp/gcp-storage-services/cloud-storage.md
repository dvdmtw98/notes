---
tags:
  - gcp
  - cloud
  - storage
title: Cloud Storage
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is a serverless object storage service  
Billed based on the storage used and data downloaded

Files are called **objects**  
Folders are called **Buckets**

Unlimited storage (theoretically) no minimum object size requirement  
Low latency (Tens of milliseconds)  
High durability (Nine 9s annual durability)  
Supports Geo-redundant storage of data

### Storage Classes

**Standard Storage**  
Frequently accessed files  
Has the highest cost

**Nearline Storage**  
Files accessed once a month or less  
Cheaper than standard storage  
Data has to be stored for 30 days minimum

**Coldline Storage**  
Higher access cost than nearline but lower at-rest cost  
Data has to be stored for 90 days minimum

**Archive Storage**  
Intended for data that will be accessed rarely  
Very slow retrieval times (Data is stored offline)  
Cheapest tier (No SLA present)  
Data has to be store for 365 days minimum

 > [!NOTE]
 > If the data is deleted before the minimum storage duration we will be charged for premature deletion