---
title: Router
tags: [networking, device, routing]
---

Connect two different networks together and forwards traffic to and from networks   
Routers have a IP Address and MAC Address for each of its interface  
It learns which networks are connected to each of its interfaces

Routers contain routing tables which stores info on how to route information across the networks. They also have an ARP Table  
ARP Tables start out empty and are populated as traffic flows through the network while Routing Tables have be configured before it can be used  
When an router receives an packet with an unknown destination IP the packet is dropped

Routing Tables can be populated via three approaches:

* **Directly Connected**: Routes for networks which are attached (WAN and LAN interface)
* **Static Routes**: Routers that are manually entered by a Administrator
* **Dynamic Routes**: Routes that are automatically learned from other Routes. [Dynamic Routing Protocols](../Layer-wise%20Concepts/Network%20(Internet)%20Layer%20Concepts/Dynamic%20Routing%20Protocols.md) are used to share these Routes

![Routing Tables](../images/routering-tables.png)

 > [!INFO]
 > The content that is added into the routing table by **static** routing and **dynamic** routing is exactly the same the only difference is the way the information is learned

Command: `route print`