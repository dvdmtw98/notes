---
tags:
- networking
- network
- index
title: Network (Internet) Layer Concepts
---

### Table of Content

* [IPv4 (Internet Protocol v4) Address](ipv4-internet-protocol-v4-address.md)
	* [IP Address Classes](ip-address-classes.md)
	* [Public & Private IP Addresses](public-and-private-ip-addresses.md)
	* [CIDR (Classless Inter-Domain Routing)](cidr-classless-inter-domain-routing.md)
* [IPv6 (Internet Protocol v6) Address](ipv6-internet-protocol-v6-address.md)
	* [IPv4 to IPv6 Transition](ipv4-to-ipv6-transition.md)
* [Subnetting](subnetting.md)
* [APIPA (Automatic Private IP Addressing)](apipa-automatic-private-ip-addressing.md)
* **Devices**
	* [Router](../../network-devices/router.md)
		* [Dynamic Routing Protocols](dynamic-routing-protocols.md)
		* [NAT (Network Address Translation)](nat-network-address-translation.md)
	* [Layer 3 Switch](../../network-devices/layer-3-switch.md)
* [ICMP (Internet Control Message Protocol)](icmp-internet-control-message-protocol.md)
* [Tunneling Protocols](tunneling-protocols.md)

---

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