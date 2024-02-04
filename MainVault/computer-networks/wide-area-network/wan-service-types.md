---
title: WAN Service Types
tags:
  - networking
  - wan
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---
#### Circuit-Switched Network
A dedicated communication channel through the network  
The circuit guarantees the full bandwidth  
Expensive, but always available, used less often

Was designed for telephone calls (Used very rarely for PC anymore)  
The circuit and remain connected for duration of your transmission  
When we are using the circuit no one else can use it  

The nodes had to be physically connected as with a dedicated electrical circuit  
In the early days the circuits have to manually connected by cable operators

#### Packet-Switched Networks
Data is send in packets but take multiple different paths to the destination  
Cheap, but no capacity guarantee, very widely used today  
**QoS** gives specific traffic priority over other traffic

Modern networks make use of this approach. Routers routes the packet in the network  
Data is moved in packets based on the destination address in each packet  
All packets do not have to use the same path to reach the destination  

The bandwidth and connection of the circuit is shared with other packets  
Because of this the internet speed can fluctuate from time to time
