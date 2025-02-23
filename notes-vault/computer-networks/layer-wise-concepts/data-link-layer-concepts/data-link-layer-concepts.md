---
title: Data Link Layer Concepts
tags:
  - networking
  - data-link
  - index
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Related Topics

* [[ethernet|Ethernet]]
	* [[csma-cd|CSMA-CD]]
	* [[csma-ca|CSMA-CA]]
* [[mac-media-access-control-address|MAC (Media Access Control) Address]]
* [[address-resolution-protocol-arp|ARP (Address Resolution Protocol)]]
* **Devices**
	* [[switch|Switch]]
		* [[switch-mac-address-learning|Switch MAC Address Learning]]
		* [[types-of-switch|Types of Switch]]
		* [[virtual-lans-vlans|Virtual LANs (VLANs)]]
		* [[spanning-tree-protocol-stp|Spanning Tree Protocol (STP)]]
	- [[nic-network-interface-card|NIC (Network Interface Card)]]
	- [[bridge|Bridge]]

### Logical Link Control (LLC)
Provides connection services and allows acknowledgement of recipients of messages  
It is the most basic form of Flow Control i.e. controls the amount of data that is sent at once so that the receiver is not overloaded  
Allows devices to make request to receive less data at a time or to replay some data  
Provides basic error control feature allowing receiver to communicate that a data frame was not receiver or it was corrupted  
This error handling is performed using Checksum

![[data-link-sublayers.jpg|550]]

### Communication Synchronization

**Isochronous**  
Network devices use a common reference clock source and generate time slots for transmission  
Less overhead as devices know when they can communicate and for how long

**Synchronous**  
Network devices agree on a clocking method to indicate beginning and end of frames and can use control characters

**Asynchronous**  
Network devices use there own internal clocks and use start and stop bits  
No control on when the devices are allowed to communicate

### Devices & Protocols
NIC/ Bridges/ Switches  
MAC Address
