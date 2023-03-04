---
title: Network (Internet Layer) Protocols
tags: [networking, network, index]
---

### Table of Content

* [IPv4 (Internet Protocol v4) Address](IPv4%20%28Internet%20Protocol%20v4%29%20Address.md)
	* [IP Address Classes](IP%20Address%20Classes.md)
	* [Public & Private IP Addresses](Public%20&%20Private%20IP%20Addresses.md)
	* [CIDR (Classless Inter-Domain Routing)](CIDR%20%28Classless%20Inter-Domain%20Routing%29.md)
* [IPv6 (Internet Protocol v6) Address](IPv6%20%28Internet%20Protocol%20v6%29%20Address.md)
	* [IPv4 to IPv6 Transition](IPv4%20to%20IPv6%20Transition.md)
* [APIPA (Automatic Private IP Addressing)](APIPA%20%28Automatic%20Private%20IP%20Addressing%29.md)
* [Subnetting](Subnetting.md)
* [ICMP (Internet Control Message Protocol)](ICMP%20%28Internet%20Control%20Message%20Protocol%29.md)
* [Router](../../Network%20Components/Router.md)
	* [Dynamic Routing Protocols](Dynamic%20Routing%20Protocols.md)
	* [NAT (Network Address Translation)](NAT%20%28Network%20Address%20Translation%29.md)

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
IPv4/ IPv6/ ICMP

### Time to Live (TTL)

TTL (Time to Live) of an packet is decremented by 1 when it reaches an router  
Tracert on Windows using ICMP packets  
Traceroute on Linux uses UDP packets (Can be configured to use different protocol)