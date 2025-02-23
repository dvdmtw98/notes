---
title: GCP Persistent Disk
tags:
  - gcp
  - cloud
  - storage
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is an **<u>block store</u>** (Data is split into evenly sized blocks)  
Used to provision block storage to be used with VMs (Virtual Hard drives)

This storage can be directly accessed by the OS of the VM  
Can only be used by 1 VM at a time  
Has support for regional persistent disk (Data is replicated to an 2nd Zone)

**Standard Tier**  
Standard Throughput  
It is an HDD  
Best for cost sensitive applications

**Balanced Tier**  
Best price per GB  
It is an SSD  
Suitable for most workloads

**Performance Tier**  
Best price per IOPS  
It is an SSD  
Suited for performance sensitive workloads

**Extreme Tier**  
Best performance offering  
It is an SSD
