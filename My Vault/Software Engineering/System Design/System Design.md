---
title: System Design
tags: [system-design, index]
---

### Table of Content

* [Consistent Hashing](Consistent%20Hashing.md)
* [Bloom Filter](../Data%20Structures%20&%20Algorithms/Data%20Structures/Bloom%20Filter.md)
* [Log Structure Merge (LSM) Tree](../../Database%20Engineering/NoSQL/Log%20Structure%20Merge%20(LSM)%20Tree.md)

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

[Software Engineering](../Software%20Engineering.md)