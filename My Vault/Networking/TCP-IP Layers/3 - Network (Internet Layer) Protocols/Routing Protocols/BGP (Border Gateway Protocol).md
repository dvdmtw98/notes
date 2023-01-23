---
title: BGP (Border Gateway Protocol)
---

It is an decentralized routing protocol (not controlled by a single organization)  
It is the core routing protocol of Internet. It is used by ISPs  
It is an distance vector protocol from AS to AS (We using internet the data is moving from one AS to another)

AS : Autonomous System

#### The Default Route

The route that is used when an router doesn't have an specified route in its routing table

#### Routing Process

Router checks if IP Address on Local Subnet  
If not route checks its routing table  
If the destination subnet is not in routing table then the packet is forwarded to the next hop towards the destination (Default Route)  
This process is repeated till the packet does not reach destination

---

[Dynamic Routing Protocols](../Dynamic%20Routing%20Protocols.md)