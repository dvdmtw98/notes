---
tags:
  - networking
  - protocol
  - tunneling
  - security
title: Tunneling Protocols
date: 2024-01-28 14:15:56 -0600
---

### GRE (General Routing Encapsulation)

Used as a simple and effective way to create a tunnel, over the public internet  
It was developed by Cisco to encapsulate a wide variety of protocols over the Network Layer  
GRE does not provide any encapsulation

![[gre_packet.png|580]]

### IPsec (Internet Protocol Security)

Used to protect data flows between clients  
Uses TCP for transport  
IPsec provides confidentiality, integrity, authentication and anti-replay protection  
Used heavily by [[virtual-private-network-vpn|VPN Server]]s  

[[ipsec-protocol-suite|IPsec Protocol Suite]]
