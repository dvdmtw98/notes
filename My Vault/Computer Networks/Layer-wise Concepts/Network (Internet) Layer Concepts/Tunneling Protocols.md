---
title: 'Tunneling Protocols'
tags: [networking, protocols, tunneling]
---

### GRE (General Routing Encapsulation)

Used as a simple and effective way to create a tunnel, over the public internet  
It was developed by Cisco to encapsulate a wide variety of protocols over the Network Layer  
GRE does not provide any encapsulation

![GRE Encapsulated Packet|580](../../images/gre_packet.png)

### IPsec (Internet Protocol Security)

Used to protect data flows between clients  
Uses TCP for transport  
IPsec provides Data confidentiality, integrity, origin authentication and anti-replay  
Used heavily by VPNs  

The two main protocols used by IPsec are:  
**Authentication Header (AH)**  
AH Protocol is responsible for providing integrity and authentication  
It takes the IP Header and Data Payload and Hashes them together, this hash is used to create a new AH Header which is appended to the packet  

**Encapsulating Security Protocol (ESP)**  
ESP provides encryption and integrity for the data packets as they are sent over IPsec

---

[Network (Internet) Layer Concepts](Network%20(Internet)%20Layer%20Concepts.md)