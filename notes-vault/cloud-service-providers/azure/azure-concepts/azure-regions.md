---
title: Azure Regions
tags:
  - azure
  - regions
date: 2024-01-28 14:15:56 -0600
updated: 2025-04-20 19:55:41 -0500
---

### Data Centers

A physical facility  
Hosting for a group of networked servers  
Has own power, cooling and networking infrastructure

The servers in a data center are divided into multiple Groups  
**Physical Grouping**: Fault Domain — Shares same power and network  
**Logical Grouping**: Update Domain — Devices are Restarted/ Updated together

Availability Set: Logical Grouping of multiple Fault Domains and Update Domains

### Regions

One or more data centers connected through high throughput networks ( \< 2 milliseconds)  
Location where our services reside (Some services are not available in all regions)  
Some services are global services these services do not have any region assigned  
Azure has 50+ regions

Special regions are also present for government use (US DoD Central, US Gov Virginia)  
Partner Regions (China East, China North): Regions not managed by Microsoft

### Availability Zones

Logical grouping of data centers that belong in the same region  
Designed to protect from data center failures  
Each AZ is its own Fault Domain and Update Domain

Two service categories:
* Zonal Services (VMs, Disks): Allows to choose AZ
* Zone Redundant Services (SQL, Storage): Service auto-replicated at multiple AZs

Not all region supports AZ. Supported regions have 3 or more zones  
An AZ can consist of multiple data centers

![[availability-zones.png|440]]

### Region Pair

Each pair is more than 300 miles (482.8 km) apart  
These exist so that services don't go down if a regional disaster occurs  
Region pairs are static. Each pair lies in the same geography  
Some services have Platform level replication

### Geography

A geography is a discrete market that houses two or more Azure Regions  
Ensures that Data residency, sovereignty, resiliency, and compliance requirements of that market are met  
e.g., America, Europe, Asia Pacific, Middle East and Africa

### Azure Sovereign Regions
Azure for regions that have to meet very strict compliance and regulation needs

#### Azure Government
Azure for the US Government  
It is a separate instance of Azure (There is a separate portal)  
They are physically Isolated  
Only Authorized Personnel can access them

#### Azure China  
Separate Instance  
Physically Separated  
Operated by 21Vianet  

> [!NOTE]
> Companies that have a majority interest in foreign markets cannot setup business in China
