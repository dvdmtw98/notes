---
tags:
- gcp
- cloud
- networking
title: GCP Virtual Private Cloud (VPC)
---

It is a logically isolated section of the Google Cloud  
We can choose a range of IPs using [CIDR (Classless Inter-Domain Routing)](../../../computer-networks/layer-wise-concepts/network-layer-concepts/cidr-classless-inter-domain-routing.md) Notation  
In this network range we can launch Google Cloud Resources

[Subnet](../../../computer-networks/layer-wise-concepts/network-layer-concepts/subnetting.md) is a logical partition of an IP network into multiple smaller network segments  
This allows us to breakup your IP range of VPC into smaller networks

**Public Subnet** : IPs that can reach the internet  
**Private Subnet** : IPs that cannot reach the internet