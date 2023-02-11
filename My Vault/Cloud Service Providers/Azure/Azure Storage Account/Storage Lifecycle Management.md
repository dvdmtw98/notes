---
title: Storage Lifecycle Management
tags: [azure, cloud, storage]
---

### Azure Blob Storage Lifecycle

Allows to transaction blobs from hot to cool  
Allows to transaction blobs, blob versions and blob snapshots to a cooler storage  
Allows to define rules that are defined at the storage account level which is then run on containers and subsets of blobs  
Lifecycle management is only available when using General Purpose Version 2 (GPv2)

---

### Lifecycle Management Policy

Use the policy to transition your data to the appropriate access tiers or expires at the end of the data lifecycle  
Allows to transaction blobs from one storage tier to the other using lifecycle management policy  
Rules can be defined that are run daily on ADLS/ container  
Firewalls rules can block the requests for Lifecycle Management this is can prevented by trusting all Microsoft Services