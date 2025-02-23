---
title: Network Layer Concepts
tags:
  - networking
  - index
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-22 12:10:33 -0600
---

### Related Topics

* [[ip-address|IP Address]]
* **Devices**
	* [[router|Router]]
	* [[layer-3-switch|Layer 3 Switch]]
* [[network-address-translation-nat|NAT (Network Address Translation)]]
* [[dynamic-routing-protocols|Dynamic Routing Protocols]]
* [[internet-control-message-protocol-icmp|ICMP (Internet Control Message Protocol)]]
* [[tunneling-protocols|Tunneling Protocols]]
	* [[ipsec-protocol-suite|IPSec Protocol Suite]]

### Logical Addressing

IP Addresses is not the only Logical Addressing scheme that is available  
Apple Talk (Protocol used by old Apple devices)  
IPX (Internetwork Packet Exchange) was a protocol used by earlier Windows devices  
Nowadays, all devices **exclusively** use **IP Addressing**

### Packet Forwarding

**Packet Switching**  
Data is divided into packets and each packet is forwarded  
The data can use any route to reach the destination  
Forwarding approach that is used by most network devices

**Circuit Switching**  
Dedicated communication link is established between the two devices  
The data transfer that occurs in each session uses the same route for transferring the packet

**Message Switching**  
Data is divided into messages which may be stored and then forwarded

### Connection Services

Augment Layer 2 services to provide better reliability

**Flow Control**  
Increase or decrease the rate on data transfer based on what the target system can handle  

**Packet Reordering**  
All packets sent out are numbered so at target even if they are received out of order they can be rearranged in sequential order

### Devices & Protocols

Router/ Multi Layer Switches (Has switching and routing capabilities)  
IP/ ICMP/ ARP

### Time to Live (TTL)

TTL (Time to Live) of an packet is decremented by 1 when it reaches an router  
Tracert on Windows using ICMP packets  
Traceroute on Linux uses UDP packets (Can be configured to use different protocol)
