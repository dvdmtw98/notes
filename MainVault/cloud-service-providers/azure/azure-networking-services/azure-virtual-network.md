---
tags:
  - azure
  - cloud
  - networking
title: Azure Virtual Network
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Emulation of Physical Network Infrastructure in the cloud  
Allows to connect Azure services together  
Can connect cloud and on-premises services together as well  
Provides isolation, monitoring, segmentation, communication, filtering between services in the cloud

* VNets can be further broken down into subnets
* Allows to group similar resources together
* Allows for effective address allocation
* Supports Network Filtering via [[network-security-groups-nsg|Network Security Groups (NSG)]] or Application Security Groups (ASG)

 > [!NOTE]
 > * Subnets cannot be nested  
 > * By default there is no security boundary around subnets (Services in different subnets in same VNet can communicate with each other)  
 > * Virtual Networks can only span a single region

Virtual Networks can be connected to each other using:
* VNet Peering
* VPN Gateway

[Virtual Networks and Virtual Machines in Azure | Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-network/network-overview)