---
tags:
  - networking
  - transport
  - index
title: Transport Layer Concepts
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Related Topics

* [[transmission-control-protocol-tcp|TCP (Transmission Control Protocol)]]
	* [[tcp-three-way-handshake|TCP Three-Way Handshake]]
* [[user-datagram-protocol-udp|UDP (User Datagram Protocol)]]
* **Devices**
	* [[load-balancer|Load Balancer]]
	* [[firewall|Firewall]]
* [[quick-udp-internet-connections-quic|QUIC (Quick UDP Internet Connections)]]
* [[network-ports|Network Ports]]

#### Windowing
Allows client to adjust the amount of data that is set in each segment  
Send less data when too many retransmissions

#### Buffering
Devices allocate memory to store segments when there is limited bandwidth available to send data to downstream systems   
