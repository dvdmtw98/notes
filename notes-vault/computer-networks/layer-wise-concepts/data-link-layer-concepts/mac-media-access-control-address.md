---
tags:
  - networking
  - mac
  - data-link
title: MAC (Media Access Control) Address
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 18:40:23 -0600
---

### MAC Address

It is the **Physical Addressing System** for a device operating on Layer 2  
These addresses are tied to the NIC of the device and they cannot be (physically) changed 
No two [[nic-network-interface-card|NIC]]s anywhere in the world have the same MAC address

#### EUI-48
MAC Addresses are generally made of <u>48 bits</u>  
They are represented using 12 hexadecimal characters  
Each hexadecimal character is 4 bits (nibble) long i.e. 4 * 12 = 48 bits 

First 6 characters (24-bits) are called OUI (Organizational Unique Identifier)  
It is unique to each manufacturer (Vender Code)  
Last 6 characters (24-bits) are assigned sequentially and are unique for each card

#### EUI-64
Some newer devices support MAC addresses that are made of <u>64 bits</u>  
24-bits are used to identify the manufacturer  
And the last 40-bits are used to uniquely identify the device  
There are used for IPv6 addressing  

EUI-48 (MAC) is used to generate the longer EUI-64 interface ID  
`FF:FE` is added in between the MAC address to make it compatible with IPv6 

**Different MAC Address Notations**  
08:00:27:EC:10:60 (Linux/ MAC)  
08-00-27-EC-10-60 (Windows)  
0800.27EC.1060 (Cisco)

MAC Address: Used to Identify a device (Who)  
IP Address: Used to locate a device (Where)

[[address-resolution-protocol-arp|ARP (Address Resolution Protocol)]] is used to find the MAC Address of other devices

Command: `getmac /FO list /V`

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TIiQiw7fpsU?si=kU_Veu90Yvpe1qWP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Types of MAC Address

##### Unicast
Unique address that is used by each device

##### Multicast
Send the packet to a group of devices that are on the network

 > [!INFO]
 > We can differentiate between unicast and multicast addresses by look at the LSB of the first byte  
 > 0: Unicast Address  
 > 1: Multicast Address

##### Broadcast
FF-FF-FF-FF-FF-FF  
Send the packet to all the devices on the network
