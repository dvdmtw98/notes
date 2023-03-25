---
title: Data Link (Network Interface) Protocols
tags: [networking, data-link, index]
---

### Table of Content

* [Ethernet](Ethernet.md)
	* [CSMA-CD](CSMA-CD.md)
* [MAC (Media Access Control) Address](MAC%20%28Media%20Access%20Control%29%20Address.md)
* [ARP (Address Resolution Protocol)](ARP%20(Address%20Resolution%20Protocol).md)
* **Devices**
	* [Switch](../../Network%20Devices/Switch/Switch.md)
		* [Switch MAC Address Learning](../../Network%20Devices/Switch/Switch%20MAC%20Address%20Learning.md)
		* [Types of Switch](../../Network%20Devices/Switch/Types%20of%20Switch.md)
		* [Virtual LANs (VLANs)](Virtual%20LANs%20%28VLANs%29.md)
		* [Spanning Tree Protocol (STP)](Spanning%20Tree%20Protocol%20(STP).md)
	- [NIC (Network Interface Card)](../../Network%20Devices/NIC%20(Network%20Interface%20Card).md)
	- [Bridge](../../Network%20Devices/Bridge.md)

---

### Logical Link Control (LLC)
Provides connection services and allows acknowledgement of recipients of messages  
It is the most basic form of Flow Control i.e. controls the amount of data that is sent at once so that the receiver is not overloaded  
Allows devices to make request to receive less data at a time or to replay some data  
Provides basic error control feature allowing receiver to communicate that a data frame was not receiver or it was corrupted  
This error handling is performed using Checksum

![Data Link Sublayers|550](../../images/data-link-sublayers.jpg)

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