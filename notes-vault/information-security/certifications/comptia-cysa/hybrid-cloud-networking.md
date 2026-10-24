---
title: Hybrid Cloud Networking
tags:
  - security
  - networking
  - monitoring
date: 2026-10-20 23:51:01 +0530
updated: 2026-10-20 23:52:26 +0530
---

#### Site-to-Site VPN
A VPN tunnel is configured between on-premises router/ firewall and the cloud providers VPN gateway.  
**Services**: AWS Site-to-Site VPN, Azure VPN Gateway  
This is a trusted tunnel, however if its compromised attackers can move freely between the cloud and on-premise environment.  

#### Dedicated Private Connectivity
Physical circuits provisioned by a carrier that bypasses the public internet entirely.  
Expensive, but is faster and more reliable then VPN.   
**Services**: AWS Direct Connect, Azure ExpressRoute, Cloud Interconnect  

#### Transit Architectures
A central gateway that connects the organizations services that are distributed across multiple regions.  
**Services**: AWS Transit Gateway, Azure Virtual WAN  
It is a single chokepoint through which a lot of network traffic flows.  
