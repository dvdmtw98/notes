---
title: Azure Virtual Network
tags: [azure, cloud, networking]
---

Emulation of Physical Network Infrastructure in the cloud  
Allows to connect Azure services together  
Can connect cloud and on-premises services together as well  
Provides isolation, monitoring, segmentation, communication, filtering between services in the cloud

* VNets can be further broken down into subnets
* Allows to group similar resources together
* Allows for effective address allocation
* Supports Network Filtering via [Network Security Groups (NSG)](Network%20Security%20Groups%20%28NSG%29.md) or Application Security Groups (ASG)

 > [!NOTE]
 > * Subnets cannot be nested  
 > * By default there is no security boundary around subnets (Services in different subnets in same VNet can communicate with each other)  
 > * Virtual Networks can only span a single region

Virtual Networks can be connected to each other using:
* VNet Peering
* VPN Gateway

**<u>References</u>**

- [Virtual networks and virtual machines in Azure | Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-network/network-overview)