---
title: UDP (User Datagram Protocol)
tags:
  - networking
  - transport
  - udp
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Connectionless & Unreliable (No data retransmission)  
Best Effort Protocol (Does not check for error and sequence)  
Used for real-time data, VoIP, video streams, audio streams, etc.  
DNS (Makes use of UDP)

### UDP Header

UDP header is 8 bytes (way smaller that 20 bytes used by TCP)  
The header contains Source Port, Destination Port, Length and Optimal Checksum Field  
The checksum field is used to provide information to ensure that is the data is received with some level of integrity
