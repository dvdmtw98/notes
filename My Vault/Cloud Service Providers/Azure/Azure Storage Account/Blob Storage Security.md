---
title: Blob Storage Security
---

### Data at Rest

Data at rest is protected using Storage Service Encryption (SSE) which uses a 256 bit AES   Algorithm to encrypt and decrypt the data automatically  
The disk images (VDH) used by VMs can be encrypted using Azure Disk Encryption  
Bit locker to encrypt Windows Images and dm-crypt for Linux Images

### Data in Transit

Data in motion is protected using Transport Level Security (TLS) which is enabled when using [HTTP(S) Protocol](../../../Information%20Security/Web%20App%20Exploitation/HTTP(S)%20Protocol.md)  
There is CORS support build into [Azure Blob Storage](Azure%20Blob%20Storage.md) as well so that we can lock down the access to resources from different domains

### Access Control

The access to blob can be controlled using RBAC and keys like access key and SAS Keys  
Active Directory can also be used for authentication for users, groups and Service Principles in Azure  
That data in Blob Storage can be audited using the Storage Analytics Service which logs all the operations that takes place