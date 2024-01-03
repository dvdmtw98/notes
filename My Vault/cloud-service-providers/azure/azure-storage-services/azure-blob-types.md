---
tags:
- azure
- cloud
- storage
- blob
title: Azure Blob Types
---

### Block Blobs

Used for binary data where the whole file has to be replaced when a new version is created  
They are made up of blocks with a max of 50,000  
Can store up to 4.75 TBs of data

### Append Blobs

Optimized for append operation  
They do not support updating and deleting existing data  
Ideal for situations such as logging data from VMs  
Can be up to 4 MB in size

### Page Blobs

Used for blob that require random blocks of data to be updated  
Can store data up to 8 TB of data  
Virtual Hard Drive (VHD) are stored using Page Blobs

---