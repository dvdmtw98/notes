---
title: RIP & RIPv2 (Routing Information Protocol)
tags:
  - networking
  - routing
  - algorithm
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

They are distance vector routing protocol (Distance and Direction)  
It uses distance (hops) to decide the route. The max hops that are allowed is 15
Vector (Direction) to use is the route with the fewest hops  
Good for small networks does not scale well (15 hop limitation)  
RIPv2 supports authentication and uses Multicast communication (v1 uses Broadcast Communication)
