---
title: ICMP (Internet Control Message Protocol)
aliases:
  - ICMP
tags:
  - networking
  - protocol
date: 2024-01-28 14:15:56 -0600
updated: 2026-01-06 22:41:39 +0530
---

ICMP stands for Internet Control Message Protocol.  
ICMP is mainly used for **network diagnostics** and **error reporting**.
ICMP management messages between systems use Echo Request and Echo Reply.  
Maximum Packet Size: 65535 bytes

### Ping
Ping measures round-trip time (RTT) to target system.  

Ping uses ICMP echo request packet (Type 8).  
The response is an ICMP echo reply (Type 0).  
Devices like firewall can block the delivery of ICMP echo packets.  

Command: `ping <ip-address>`

### Traceroute
Traceroute is used to discover the route from our host to the target.  

When TTL reaches 0 the packet is dropped by the router.  
Response is sent to the host using ICMP time exceeded message (Type 11).  

Some routers will drop the ICMP packet without providing a response.  
Most routers respond with their private IP.  
Some will expose there public IP which can be used to find its geographic location.  
