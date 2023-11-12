---
tags: [gcp, cloud, storage]
---

It is a serverless object storage service  
Billed based on the storage used and data downloaded

Files are called **objects**  
Folders are called **Buckets**

Unlimited storage (theoretically) no minimum object size requirement  
Low latency (Tens of milliseconds)  
High durability (Nine 9s annual durability)  
Supports Geo-redundant storage of data

---

### Storage Classes

1. **<u>Standard Storage</u>**  
   
   Frequently accessed files  
   Has the highest cost

2. **<u>Nearline Storage</u>**  
  
   Files accessed once a month or less  
   Cheaper than standard storage  
   Data has to be stored for 30 days minimum

3. **<u>Coldline Storage</u>**  
  
   Higher access cost than nearline but lower at-rest cost  
   Data has to be stored for 90 days minimum

4. **<u>Archive Storage</u>**  
  
   Intended for data that will be accessed rarely  
   Very slow retrieval times (Data is stored offline)  
   Cheapest tier (No SLA present)  
   Data has to be store for 365 days minimum

 > [!NOTE]
 > If the data is deleted before the minimum storage duration we will be charged for premature deletion
