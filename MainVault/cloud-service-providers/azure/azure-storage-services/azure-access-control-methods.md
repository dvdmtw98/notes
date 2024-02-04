---
tags:
  - azure
  - cloud
  - storage
  - security
title: Access Control Methods
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

#### Management Plane

[[azure-rbac|Role Based Access Control (RBAC)]]  
Coarse grain access to data (the whole storage account or data lake)  

#### Data Plane

**Shared Key Authorization**  
**Shared Access Key (SAS) Authorization**  
When Shared Key and/or SAS Key is used for Authentication RBAC and ACL have no effect  

**Access Control List (ACL)**  
Fine grained access to data (to files and directories)  
Supported for ADLS Storage

[[azure-active-directory-aad|Azure Active Directory (AAD)]]

---

### Shared Access Signature (SAS)

**User Delegated SAS**  
Uses AAD credential to sign SAS token  
Only supported by Blob Storage  

**Service SAS**  
Scoped to a specific service within the storage account  

**Account SAS**  
Scoped to one more service within the storage account

Service and Account SAS are Ad hoc SAS tokens i.e. the SAS token contains all the fields that describe the type of access that will be provided  
Service SAS (with Stored Access Policy) no need to mention all the fields as they are already defined in the Access Policy

[Grant limited access to data with shared access signatures (SAS) | Microsoft Learn](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)

### Role Based Access Control (RBAC)

Owner: Has full access to Blob storage container and data  
Contributor: Read, Write and Delete access to Blob containers and blobs  
Reader: Read and list blob container and blobs

### Access Control List (ACL)

**Access ACLs**  
Controls access to an object  
Access ACLs can be applied to files and folders

**Default ACLs**  
An ACL template that determines the ACL for the directory and its child directory  
Files do not have default ACLs  
Changing the default ACL of an parent does not affect the access ACL or default ACL of objects that already exist

![[azure-storage-account-authentication.png|600]]

 > [!IMPORTANT]
 > * RBAC always is evaluated first and takes precedence over ACL
 > * If RBAC provides the necessary access to a resource then it cannot be blocked by ACL
 