---
tags:
- azure
- cloud
- storage
title: Immutable Blob Storage
---

Allows to store business-critical data in WORM (Write Once Read Many) state  
This makes the data undeletable and unmodifiable for the time period specified  
Even the administrator of the storage account cannot delete the data   

This feature needs to be configured at the container level  
All attempt that are made to modify the data in the retention period is logged

### Retention Approaches

**Time-based Retention**  
Set policy to retain data for a fixed time  
Even after the retention period the data cannot be modified but it can be deleted

**Legal Hold**  
Useful if not sure how long the data needs to be stored  
We need to create a tag with metadata to remember why data is kept on hold  
As long as a tag exist the data in the container cannot be deleted/ modified

---