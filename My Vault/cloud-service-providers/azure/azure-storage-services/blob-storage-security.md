---
tags:
- azure
- cloud
- storage
- security
title: Blob Storage Security
---

### Data at Rest

Data at rest is protected using Storage Service Encryption (SSE) which uses a 256 bit AES   Algorithm to encrypt and decrypt the data automatically  

### Data in Transit

Data in motion is protected using Transport Level Security (TLS) which is enabled when using [HTTP(S) Protocol](../../../computer-networks/network-protocols/https-protocol.md)  
There is CORS support build into [Azure Containers](azure-containers.md) so we can lock down the access to resources from different domains

### Access Control

The access to blob can be controlled using [Role Based Access Control (RBAC)](../azure-security-services/role-based-access-control-rbac.md) and keys like access key and SAS Keys  
Active Directory can also be used for authentication for users, groups and Service Principles in Azure  
That data in Blob Storage can be audited using the Storage Analytics Service which logs all the operations that takes place