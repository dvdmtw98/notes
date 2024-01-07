---
tags:
- networking
- networking
- ip
- subnet
title: IPv4 (Internet Protocol v4) Address
---

Logical address that is used to uniquely identify a device on the internet  
It is used for communication from one network to another (WAN) or over the Internet
It is an connectionless protocol  
Command: `ipconfig /all`

IPv4 -> 32 bits, Made of 4 Octets (8 bits = 1 byte = 1 octet)  
IP Address is represented in Binary and Dotted Decimal Format

Divided into 2 parts **Network ID** and **Host ID** using Subnet Mask  
Network ID identifies the Network (College, Office, Home, etc.) and Host ID is used to identify the devices on that Network

Subnet Mask: Used to decide the subnet/ network of the device  
Default Gateway: The routers IP address (Allows to communicate to other network)

### Broadcast Addresses

Local Broadcast: 255.255.255.255  
Send packet to every host on Local Network

Directed/ Target Broadcast: Broadcast IP for Subnet  
If Subnet is 10.3.3.0/25 then Directed Broadcast IP is 10.3.3.127  
Send packet to every host on local Network as well as send packet to every host on foreign network  
Sending packets to all devices on a foreign network is considered a security risk and this feature is disabled most modern hardware