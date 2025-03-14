---
title: Switch
tags:
  - networking
  - device
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is a smarter (newer version) of [[hub|Hub]]s  
It is also called a Multiport Bridge

It can memorize [[mac-media-access-control-address|MAC (Media Access Control) Address]] of all the devices connected using **MAC Address Table** (Mapping of Switch Port to MAC Address)  
As switches know the MAC Address of all devices connected to it the traffic is contained to the ports that are actually participating in the communication


Switch performs three actions: **Learning**, **Flooding** and **Forwarding**  
[[switch-mac-address-learning|Switch MAC Address Learning]]

Each port on the switch forms its own Collision Domain, but all the ports are part of the same Broadcast Domain  
L2 switches cannot route data between VLANs

Switches have a MAC Address and IP Address but for any traffic that is going through them this details are not required  
They only come in handy if we need to connect to the Switch to perform maintenance

### Link Aggregation
Part of the <u>IEEE 802.3ad</u> standard  
Allows to combine multiple physical connections into a single logical connection  
Used to increase the bandwidth of uplink (LAN to WAN) connection

### Power over Ethernet (PoE)
Part of PoE 802.3ad and PoE+ 802.3at standards  
Allows to supply power over Ethernet cables  
Requires CAT 5 or higher copper cable  
Each cable can provide up to 15. 4 Watts (PoE) or up to 25.5 Watts (PoE+)  

### Port Monitoring (Mirroring)
Makes a copy of all traffic destined for one port to another port

### User Authentication
Part of the 802.1x standard  
Require users to authenticate before gaining access to the network

### Management Access
SSH: Remote Administration  
Console Port: Local Administration using rollover cable (DB-9 one end and RJ-45 on another)  
OOB (Out-of-Band) Management: Keep all network configuration devices on a separate network

### MAC Filtering
Permit or deny traffic based on the MAC Address of devices

### Quality of Service (QoS)
Forward packets based on priority markings
