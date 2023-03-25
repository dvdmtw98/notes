---
title: Firewall
tags: [networking, device, security]
---

Protect LAN from malicious activity on the Internet  
Controls the flow of information in and out from the network  
Firewalls can be Standalone Network Device or a software on a Computer System

A firewall can operate at Layer 4 through 7 depending on its type and configuration

---

### Types of Firewalls

#### Packet Filtering
The original type of firewall (Very basic)  
Filter packets based on IP Address and ports

#### Stateful Firewall
Similar to Packet Filtering Firewall but it also tracks the communication session  
Determines the legitimacy of a requested session by monitoring the 3-way handshake (DoS, DDoS Attack)

#### Application Layer Firewall
Filters packets based on an application or service  
Understands certain applications and protocols (FTP, DNS, HTTP, etc.)  
Detects malicious applications and services that tries to bypass it

#### Next-Generation Firewalls (NGFW)
Performs deep Layer 7 packet inspection  
Can look through traffic to detect and prevent attacks  
Connected to the cloud to get the latest threat information

---
