---
title: Network Access Control (NAC)
tags:
  - security
  - networking
  - access
---

Scans devices for their security status before granting network access  
Safeguards against both known and unknown devices  
It can be provided as a software or hardware solution  
[IEEE 802.1x Protocol](../../computer-networks/network-security/port-security.md#IEEE%20802.1x%20Protocol)

Time-based, Location-based, Role-based NAC can also be implemented

Devices attempting to connect to the network are placed in a virtual holding area  
It the devices passes the verification it can access the organizations network resources  
It the devices fails the verification it is placed into a quarantined zones

#### Persistent Agent
A software installed on a device requesting network access  
Does not work in BYOD scenarios

#### Non-Persistent Agent
User connects to Wi-Fi, accesses a web portal and clicks on link for login