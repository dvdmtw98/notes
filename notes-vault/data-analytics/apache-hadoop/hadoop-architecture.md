---
tags:
  - analytics
  - hadoop
title: Hadoop Architecture
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

![[hadoop-architecture.jpg|550]]

### Namenode (Master)

Master responsible for co-ordination  
Stores only the metadata  
Default only 1 (Single Point of Failure)  
High Availability  
Secondary Namenode (Cold Backup)  
Can be set manually as well

### Datanode (Slave)

Horizontal Scalability (Can have as much as needed) (>35000)  
Stores data  
3 secs -> TCP signal to Namenode (Heart Beat)  
No reply in 10 min (Deadnode)

### Types of Clusters

**Single Node Setup**  
All 5 demons on the same node)

**Pseudo Distributed Environment**  
Each daemon runs in a separate VM  

**Multi-node Cluster**  
Each daemon in separate node
