---
tags:
- system-design
- index
title: System Design
---

### Table of Content

* [Consistent Hashing](consistent-hashing.md)
* [Bloom Filter](../data-structures-and-algorithms/data-structures/bloom-filter.md)
* [Log Structure Merge (LSM) Tree](../../database-engineering/nosql/log-structure-merge-lsm-tree.md)

---

### Scaling from Zero to Millions

* Single Server: Hosts the entire application
* Separate Servers: Website (Web Tier) and Database (Data Tier)
* Load Balancer: Route traffic between multiple servers
* Database Replication: Generally Master Slave Model
* Cache: Store frequently accessed data
* CDN: Store frequently used static assets
* Stateless Servers: State Information stored outside server
* Data Centers (Different regions): Reduce overall latency
* Message Queue: Store tasks to be performed by backend Worker servers asynchronously
* Logging & Monitoring: Collect stats about the system
* Scale Database: Sharding and partitioning

---

[Software Engineering](../software-engineering.md)