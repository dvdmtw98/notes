---
title: CIDR (Classless Inter-Domain Routing)
tags:
  - networking
  - ip
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-22 12:11:13 -0600
---

Also called as **Slash Notation**  
Represents the IP address with an n which is used to identify the Network ID from the IP address  
e.g. 192.169.10.0/24

IP address is made of 8\*4 bits = 32 bits.  
/24 means 1st 24 bits is the Network ID. Network ID = 192.168.10  
The remaining 8 bits can be used to connect $2^8$ = 256 devices

Usable Host Per Network = $2^h - 2$, where h is number of bits available  
Each network has an Network ID and Broadcast ID that are not available for use (The 1st and the last IP)
