---
title: Jump Server
aliases:
  - Bastion Host
tags:
  - security
  - networking
  - cloud
date: 2025-09-07 15:41:55 +0530
updated: 2025-09-07 16:47:22 +0530
---

Also called Bastion Host.  
It is a hardened VM that sits between us and the VMs on the isolated network.  
We can use it to connect with the target VM via SSH or RDP.  

![[jump-server.png|600]]

Without a jump server we would have to use [[network-ports#Port Forwarding|port forwarding]] to connect to each VM. This would expose multiple entry points to the network.  

The region with the jump server is located is called [[screened-subnet|Demilitarized Zone (DMZ)]].  
Jump server reduces the attack surface.  
It creates a single point of failure and can create a bottleneck.  

Some devices (like Chromebooks) cannot run RDP, so a jump server is the only way to connect to remote machines.    
