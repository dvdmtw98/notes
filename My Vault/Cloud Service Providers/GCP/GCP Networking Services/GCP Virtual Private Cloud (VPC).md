---
title: GCP Virtual Private Cloud (VPC)
tags: [gcp, cloud, networking]
---

It is a logically isolated section of the Google Cloud  
We can choose a range of IPs using [CIDR (Classless Inter-Domain Routing)](../../../Computer%20Networks/TCP-IP%20Layers/3%20-%20Network%20(Internet%20Layer)%20Protocols/CIDR%20(Classless%20Inter-Domain%20Routing).md) Notation  
In this network range we can launch Google Cloud Resources

[Subnet](../../../Computer%20Networks/TCP-IP%20Layers/3%20-%20Network%20(Internet%20Layer)%20Protocols/Subnetting.md) is a logical partition of an IP network into multiple smaller network segments  
This allows us to breakup your IP range of VPC into smaller networks

**Public Subnet** : IPs that can reach the internet  
**Private Subnet** : IPs that cannot reach the internet