---
tags:
  - networking
  - arp
  - data-link
title: ARP (Address Resolution Protocol)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 20:52:36 -0600
---

Resolves IP Address to MAC Address  
Finds MAC address of a host when IP address is known  
MAC Address is required for hosts on the same network to communicate with each other

The MAC Addresses that are known are saved on each device in its ARP cache  
RARP (Reverse ARP): Obsolete Protocol

````bash
arp -a
arp -s <ip-address> <mac-address>
````

**Dynamic ARP**  
Created when an broadcast signal is send on the network  
Not permanently saved and flushed out periodically  

**Static ARP**  
Created when manually an IP address to MAC mapping is created using the ARP utility

### ARP Working

* When Host A knows the IP address of Host B but not the MAC address it will send a ARP request on the broadcast IP Address of the network 
* This request essentially is asking is there any device on the network that has MAC Address of Host B
* When the device with that IP Address receives that message it it updates it ARP cache with a new entry (IP to MAC Address mapping for Host A) and then sends its MAC Address to Host A (As the MAC of Host A is know no broadcast is required)

 > [!NOTE]
 > Hosts can understand whether an IP address belongs to its network by looking at the Subnet Mask (Network ID)