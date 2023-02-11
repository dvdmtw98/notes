---
title: Redshift Sort Key
tags: [aws, cloud, analytics, redshift]
---

We can specify 1 or more columns are sort key that is going to be used by to save the inserted data in sorted order on disc  
Redshift stores columnar data in 1 MB blocks. The min and max values of these blocks are also saved as metadata. If we sort the data then we can very efficiently find the data that we are searching

---

### Compound Sort Key

Default Sort that is used by Redshift  
The sorting is performed in the order the columns are specified in the sort key condition  
The benefit of compound sort decreases if we perform queries that are based on the secondary sort key without referring the primary sort key

### Interleaved Sort Key

This type of sort key gives equal importance to all the columns that are specified in the sort key  
They improve performance even if we use queries that are based on the secondary sort key without referring the primary sort key  
Interleaved sort key can is beneficial on large tables  
Interleaved sort key should not be used on columns with monotonically increasing attributes, such as identity columns, dates, or timestamps