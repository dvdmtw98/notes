---
title: Network Topology
tags: network, concept
---

### Wired Network Topology

#### Bus Topology

Uses a single cable to connect all the devices  
Each device taps into the cable using a vampire tap or T-connector  
Very rarely used nowadays  
In this topology all the devices would form a single collision domain i.e. if they are try to talk at the same time the packets would collide

#### Ring Topology

Uses a cable which runs in a circular loop and each device is connected to the loop  
The packets flow only in one direction is this topology (Clockwise or Anti-clockwise)  
Similar to bus topology if all devices try to talk at the same time a collision would occur  
There was no redundancy in the network if the cable got cut the entire network would go offline

**Token Ring**: An electronic tag that was passed from computer to computer as and when they where going to talk  
**FDDI (Fiber Distribution Data Interface)**: Makes you of two rings (one on top of another). One operated in the clockwise direction while other operates in a anti-clockwise direction. This introduced redundancy into the network

Modern ring networks only use FDDI networks

> [!NOTE]
> For CompTIA Network+ if any question on ring is asked allows think of FDDI networks


#### Star Topology

All devices in the network connect to a single point  
This is the most popular physical LAN topology  
If the central device ([Switch](../Network%20Components/Switch.md)) fails the entire network fails  

#### Hub and Spoke Topology

Similar to Star topology but uses WAN links instead of LAN connections  
It connects multiple star networks together  

![Hub and Spoke Topology|540](../images/hub-spokes-topology.png)

Forms a **partially redundant network** i.e. if one Hub fails the rest of the network can still continue to function

#### Full-Mesh Topology

Every node connects to every other node in this type of network  
Optimal routing between each of the nodes is always possible  
For large networks can become very complicated to implement  

![Full Mesh Topology|350](../images/full-mesh-topology.jpg)

For each connection the device would require a network card (In above example each device would require 5 network cards)  
Not commonly found in physical networks (Extremely high cost to implement)  

The no. of network cards and network cables required for each device equals n  
No. of connections = n(n - 1)/ 2

#### Partial Mesh Topology

Hybrid of the full mesh topology & Hub and Spoke Topology  
Provides optimal routing between some sites  
Must consider network traffic patterns to be able to implement properly  

### Wireless Network Topology

#### Infrastructure Mode

Uses a wireless access point as a centralized access point (Wireless Star)  
Supports wireless security controls  

#### Ad Hoc Mode

Decentralized wireless network which created P2P connections  
Does not require a access point or router  
Wireless security controls are not supported in this mode  

#### Wireless Mesh Topology

Interconnection of different types of nodes, devices or radios  
Allows to connect different types of devices and technologies together  
Provides redundancy and reliable connection

![Wireless Mesh Network|550](../images/wireless-mesh-network.jpg)

---

[Computer Networks](../Computer%20Networks.md)