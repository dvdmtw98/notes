---
title: Screened Subnet
tags:
  - networking
  - security
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-10 09:25:55 -0500
---

Also called <u>De-militarized Zone (DMZ)</u>   

Type of network that is used to be separate the Internet from the organizations network  
Untrusted users outside an organizations LAN can access services within the DMZ  

Acts as a security barrier between external untrusted networks and internal trusted networks using a protected host with security measures like a packet-filtering firewall  

Two types of common configuration: **Leg Configuration** & **Back-to-Back Configuration**

![[perimeter-network-configuration.png|440]]

Devices placed in the Screened Subnet as called <u>Dual-homed Hosts</u>  
These devices have two network interfaces one that is connect to the internet and the other that is connected to the internal network 

![[screened-subnet.gif|500]]

[Screened subnet - Wikipedia](https://en.wikipedia.org/wiki/Screened_subnet)  

[Screened Subnet Architectures (Building Internet Firewalls, 2nd Edition)](https://docstore.mik.ua/orelly/networking_2ndEd/fire/ch06_03.htm)
