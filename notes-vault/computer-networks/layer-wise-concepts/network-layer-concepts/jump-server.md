---
title: Jump Server
aliases:
  - Bastion Host
tags:
  - security
  - networking
  - cloud
date: 2025-09-07 15:41:55 +0530
updated: 2026-03-21 18:19:56 +0530
---

Also called **Bastion** Host.  
It is a hardened VM that sits between us and the VMs on the restricted network.  
We can use it to connect with the target VM via SSH or RDP.  

![[jump-server.png|600]]

Without a jump server we would have to use [[network-ports#Port Forwarding|port forwarding]] to connect to each VM. This would expose multiple entry points to the network.  
Jump server will be assigned a public IP to allow access from internet.  

The jump server is normally placed in the [[screened-subnet|Demilitarized Zone (DMZ)]].  
Jump server reduces the attack surface.  
However, it creates a single point of failure and can create a bottleneck.  

Some devices (like Chromebooks) cannot run RDP, so a jump server is the only way to connect to remote machines.    
