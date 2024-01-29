---
tags:
  - gcp
  - cloud
  - networking
title: GCP Virtual Private Cloud (VPC)
date: 2024-01-28 14:15:56 -0600
---

It is a logically isolated section of the Google Cloud  
We can choose a range of IPs using [[cidr-classless-inter-domain-routing|CIDR (Classless Inter-Domain Routing)]] Notation  
In this network range we can launch Google Cloud Resources

[[subnetting|Subnet]] is a logical partition of an IP network into multiple smaller network segments  
This allows us to breakup your IP range of VPC into smaller networks

**Public Subnet** : IPs that can reach the internet  
**Private Subnet** : IPs that cannot reach the internet
