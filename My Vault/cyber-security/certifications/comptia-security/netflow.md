---
title: NetFlow
tags:
  - security
  - networking
  - analytics
---

#### Full Packet Capture (FPC)
Captures the entire packet, including the header and the payload for all traffic entering and leaving a network

#### Flow Analysis
Relies on a flow collector, which <u>records metadata and statistics</u> rather than recording each frame that passes through the network  
Does not provide the payload of the packets

##### NetFlow
A Cisco-developed means of reporting network flow into a structed database

##### IP Flow Information Export (IPFIX)
Defines traffic flows based on shared packet characteristics

#### Zeek
Passively monitors a network like a sniffer, but only logs full packet capture for packets of potential interest  
All data is stored as JSON files

#### Multi Router Traffic Grapher (MRTG)
Creates graphs showing traffic flows through the network interfaces of routers and switches by polling the appliances using SNMP
