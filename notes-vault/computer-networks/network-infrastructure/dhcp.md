---
title: Dynamic Host Configuration Protocol (DHCP)
aliases:
  - DHCP
tags:
  - networking
  - protocol
date: 2024-01-28 14:15:56 -0600
updated: 2026-01-06 22:16:29 +0530
---

Stands for Dynamic Host Configuration Protocol.  
Assigns IP Address, Subnet Mask, Default Gateway and DNS details automatically.  
If DHCP is not configured then these values have to be entered manually.  

DHCP communicates using UDP packets.  
DHCP server runs on Port 67 and client runs on Port 68.  

### IP Address Leasing Process
New client connects to network has initial IP 0.0.0.0.  
It sends "DHCP Discover" message on the network/subnets broadcast address.  
DHCP server returns an "DHCP Offer" Message after looking through its table and finds a usable IP Address.  
The offer message is sent as broadcast message on the network.  

Client accepts the "DHCP Offer" by replying with a "DHCP Request" message.  
DHCP server assigns client the IP address and sends a "DHCP Ack" message finalizing the IP Address Lease.

Mnemonic: DORA

 > [!INFO]
 > On Windows network if no DHCP is found a windows client will use [[apipa-automatic-private-ip-addressing|APIPA (Automatic Private IP Addressing)]] to configuration the device.
 