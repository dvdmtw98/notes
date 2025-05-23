---
title: IPv6 (Internet Protocol v6) Address
tags:
  - networking
  - ip
  - subnet
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 19:01:18 -0600
---

Developed because we are running out of IPv4 addresses  
It is 128 bit address. It makes use of complex hexadecimal format  
IPv6 represent in 8 16 bit Hexadecimal Blocks. They are separated with Colon  

2001:0DB8:85A3:0000:0000:8A2E:0370:7334  
2001:DB8:85A3:0:0:8A2E:370:7334 (Suppressing leading zeros)  
2001:DB8:85A3::8A2E:370:7334 (Compress Contiguous Blocks of 0's into :: once)

### Advantages

Improves routing, security and efficiency  
IPv6 has packet header fixed at 40-bytes compared to IPv4 variable length header  
IPv6 has 8 header fields compared to 14 in IPv4 (Smaller and Efficient)  
Hosts can assign own IP Address using its MAC Address and servers host address.  
No DHCP required (Similar to APIPA)  
There is no concept of Classes in IPv6

### Types of IPv6 Addresses

**Unicast (One-to-One)**  
Global Addresses (Similar Public IPv4 Addresses)  
Link-Local Addresses (Similar to APIPA Addresses) - Starts with FE80  
Unique Local Addresses (Similar to Private IPv4 Addresses) - Starts with FC, FD

**Multicast (One-to-Many)**  
Broadcast was replaced with Multicast in IPv6  
Multicast Address : ff00::/8

**Anycast (One-to-One-of-Many)**  
Identifies multiple paths to target but sends the pack only on the shortest path

**Loopback Address (::1)**  
The localhost address of the device
