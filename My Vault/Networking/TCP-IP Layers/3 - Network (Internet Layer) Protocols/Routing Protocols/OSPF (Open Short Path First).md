---
title: OSPF (Open Short Path First)
---

It is an link-state protocol  
Using OSPF a router can learn about all the other routers and subnets within the entire network  
All the router in the network will have the same information  
The router learns this information using the Link State Advertisement (LSA) packets  
All the information learns about the network is stored in the Link State Database (LSDB) of the router

Become Neighbors  
Exchange Database Information  
Choose the best route based on the learned information (Done using a calculation called SPF)

Information passed between routers is based on the current connectivity i.e. If link is up packet can go through there  
It looks at various metrics like distance, speed, link state etc. to decide the best route
It very scalable. Used in medium to large networks.  
It has fast convergence (Change in network is updated quickly)