---
tags:
- networking
- transport
- index
title: Transport Layer Concepts
---

### Table of Content

* [TCP (Transmission Control Protocol)](tcp-transmission-control-protocol.md)
	* [TCP Three-Way Handshake](tcp-three-way-handshake.md)
* [UDP (User Datagram Protocol)](udp-user-datagram-protocol.md)
* **Devices**
	* [Load Balancer](../../network-devices/load-balancer.md)
	* [Firewall](../../network-devices/firewall.md)
* [QUIC (Quick UDP Internet Connections)](quic-quick-udp-internet-connections.md)
* [Network Ports](network-ports.md)

---

**Windowing**  
Allows client to adjust the amount of data that is set in each segment  
Send less data when too many retransmissions

**Buffering**  
Devices allocate memory to store segments when there is limited bandwidth available to send data to downstream systems   

### Layer 4 Devices

TCP/ UDP/ RTP  
WAN Accelerators (Adds compression to IP Packets)  
Load Balancer/ Firewalls