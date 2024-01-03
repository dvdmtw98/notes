---
tags:
- azure
- cloud
- storage
title: Block Blob Access Tiers
---

The default Access Tier used by Blobs is configured at the Storage Account Level  
The Archive Tier can only be configured at the Blob Level

### Hot

Optimized for storing data that is accessed frequently  
High storage cost but lowest access cost

### Cold

Optimized for data that has infrequent access and at least stored for 30 days  
Useful for data that is older but require immediate access  
Lower storage cost and higher access cost

### Archive

Optimized for data that is rarely accessed and stored for at least 180 days  
If data is deleted before 180 days we need to pay an early deletion charge  
Lowest storage cost but highest access cost  
Used for storing backups and audit/ compliance related data

This is because the data is stored offline and needs to be rehydrated to be used  
The data from archive can also be accessed by copying it into another access tier

**Dehydration Priority**  
Standard Priority: Can take anywhere from few minutes to a few hours  
High Priority: Need to pay extra but most objects should be rehydrated in a hour

---