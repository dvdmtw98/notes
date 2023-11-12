---
tags: [azure, cloud, redis, cache]
---

Redis Cache can be scaled up as required but scaling down is not possible  
By default there is no expiration on the assets stored in Redis Cache  
Redis Cache can be used as an In-memory Database as well as a Message Queue

Data in Redis Cache is not Encrypted  
Data persistence (Premium Tier feature) writes data to Storage Account which is encrypted

### Removing Items from Cache

**Scheduled Deletion**  
Set a TTL value for the items  
Such items are marked as volatile  

**Manual Deletion**  
Manually delete the key that is no longer required  

**Eviction**  
Performed automatically by Redis when it is running out of space  
`volatile-lru`: Remove Least Recently Used Keys with TTL  
`allkeys-lru`: Remove LRU Keys even if no TTL  
`noeviction`: Don't delete even when low on memory  
`volatile-random`: Randomly remove keys that have a TTL value  
`allkeys-random`: Randomly remove any key  
`volatile-ttl`: Remove items that have the shortest TTL remaining

---

### Pricing Tiers

#### Basic
Low throughput and high latency  
No SLA, meant for Development and Testing  
53 GBs of storage & up to 20k connected clients

#### Standard
2 Nodes that are replicated (Primary and Secondary)  
99.9% availability  
53 GBs of memory and up to 20k connected clients

#### Premium
Supports Data Persistence  
Provides high throughput and low latency  
Supports passive geo-replication  
Provides 99.95% availability  
Up to 120 GB of memory and 40k connected clients

#### Enterprise
All features of the Premium tier  
Support all the features of Redis  
Have active geo-replication  
Provides 99.999% availability  
Up to 100 GB of storage and 200k connected clients

#### Enterprise Flash
Supports fast non-volatile flash storage  
Does not support the other Redis features present in Enterprise  
Adds support for up to 1.5 TB of storage  
Supports up to 120k connected clients

---

[Azure](../../Azure.md)
