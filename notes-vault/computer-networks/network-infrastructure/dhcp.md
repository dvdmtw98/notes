---
title: Dynamic Host Configuration Protocol (DHCP)
tags:
  - networking
  - protocol
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 21:05:40 -0600
---

Stands for Dynamic Host Configuration Protocol  
Assigns IP Addresses, Subnet Mask, Default Gateway and DNS details to new devices  
If DHCP is not configured then these properties need to assign manually

### IP Address Leasing Process

New client connected to network has an Initial IP 0.0.0.0. It sends "DHCP Discover"  Message as Broadcast on the network/ subnet  
DHCP Server returns an "DHCP Offer" Message (IP Address and Lease Information) after looking through its table and finds an usable IP Address. It is sent as Broadcast Message
Client accepts the "DHCP Offer" by replying with a "DHCP Request" message  
DHCP Server assigns client the IP Address and sends a "DHCP Ack" message finalizing the IP Address Lease

 > [!INFO]
 > If no DHCP Server is found a windows client will use [[apipa-automatic-private-ip-addressing|APIPA (Automatic Private IP Addressing)]] to configuration the device
 