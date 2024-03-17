---
tags:
  - azure
  - cloud
  - storage
  - security
title: Blob Storage Security
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Data at Rest

Data at rest is protected using Storage Service Encryption (SSE) which uses a 256 bit AES   Algorithm to encrypt and decrypt the data automatically  

### Data in Transit

Data in motion is protected using Transport Level Security (TLS) which is enabled when using [[https|HTTP(S) Protocol]]  
There is CORS support build into [[azure-containers|Azure Containers]] so we can lock down the access to resources from different domains

### Access Control

The access to blob can be controlled using [[azure-rbac|Role Based Access Control (RBAC)]] and keys like access key and SAS Keys  
Active Directory can also be used for authentication for users, groups and Service Principles in Azure  
That data in Blob Storage can be audited using the Storage Analytics Service which logs all the operations that takes place
