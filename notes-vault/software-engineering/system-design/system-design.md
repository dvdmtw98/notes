---
title: System Design
tags:
  - system-design
  - index
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 15:49:25 -0600
---

### Related Topics

* [[consistent-hashing|Consistent Hashing]]
* [[bloom-filter|Bloom Filter]]
* [[log-structure-merge-lsm-tree|Log Structure Merge (LSM) Tree]]

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
