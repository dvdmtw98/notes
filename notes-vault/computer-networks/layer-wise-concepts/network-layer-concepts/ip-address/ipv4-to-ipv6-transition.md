---
tags:
  - networking
  - ip
  - subnet
title: IPv4 to IPv6 Transition
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

IPv6 is not backwards compatible with IPv4

**Dual IP Stack**  
IPv4 + IPv6 on the device. Can be used independent of each other  
IPv4 Mapped Addresses

**Map IPV4 address to IPv6**  
First 80 bits are 0 next 16 bits are 1 (shown as ffff) and last 32 bits are populated with IPv4 address  
e.g. ::ffff:192.168.1.100

**Tunneling**  
IPv6 packets are encapsulated in IPv4 datagram  
Microsoft uses an special adapter called as Teredo to achieve Tunneling
