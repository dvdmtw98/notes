---
title: Access & Performance Tiers
---

## Access Tiers

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

It can take several hours to retrieve the data. This is because the data is stored offline and needs to be rehydrated to be used  
The data from archive can also be accessed by copying it into another access tier

---

## Performance Tiers

### Standard Performance

The cost effective storage solution and used for general access  
Uses HDD for storing the data

### Premium Performance

Useful for high throughput applications and where small transactions are performed very frequently (Low latency)  
Useful for interactive workloads, analytics, AL/ML and data transformation  
ADLS Gen 2 does not support this tier as of April 2021