---
tags:
  - azure
  - cloud
  - security
---

#### Server Side Encryption (SSE)  
Provides Encryption at rest for managed disks, snapshots and images (Enabled by default) 
Temporary disks are not protected by SSE unless encryption is enabled on host  

**Platform Managed Keys**: Azure manages keys  
**Customer Managed Keys**: Customer manages keys

#### Azure Disk Encryption (ADE)
Encryption OS and data disks used by an IaaS VM  
Encrypts Windows (BitLocker) and Linux (DM-Crypt) VM Images
