---
title: VPN Server
---

Connects our device to the private network of the VPN server  
VPN Server essentially extends its private network to include our device using the public network  
A tunnel is established between the client and VPN Server which encrypts all the data

We are assigned a private IP Address on the VPN Servers network  
This address can be assigned dynamically using an [DHCP Server](DHCP%20%28Dynamic%20Host%20Configuration%20Protocol%29%20Server.md) or from an reserved pool of IP Addresses

The VPN server decrypts the packets that are sent to it to view the target IP Address before sending it to the right location  
The packet received by the target website will see the source IP address of the request as the IP Address of the VPN Server

TUN : Layer 3 packet routing  
TAP : Layer 2 packet routing