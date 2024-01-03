---
tags:
- gcp
- cloud
- storage
title: GCP Persistent Disk
---

It is an **<u>block store</u>** (Data is split into evenly sized blocks)  
Used to provision block storage to be used with VMs (Virtual Hard drives)

This storage can be directly accessed by the OS of the VM  
Can only be used by 1 VM at a time  
Has support for regional persistent disk (Data is replicated to an 2nd Zone)

1. **<u>Standard Tier</u>**  
   Standard Throughput  
   It is an HDD  
   Best for cost sensitive applications

2. **<u>Balanced Tier</u>**  
   Best price per GB  
   It is an SSD  
   Suitable for most workloads

3. **<u>Performance Tier</u>**  
   Best price per IOPS  
   It is an SSD  
   Suited for performance sensitive workloads

4. **<u>Extreme Tier</u>**  
   Best performance offering  
   It is an SSD