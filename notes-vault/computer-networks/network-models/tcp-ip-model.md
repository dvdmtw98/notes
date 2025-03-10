---
title: TCP-IP Model
tags:
  - networking
  - model
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Also called the DoD model  

There are 2 versions of the TCP/IP Model:
* The 4 Layer one which is found in most of the IT related books (RF1122)
* The 5 Layer one which is newer and was made to align more with the OSI model. The Network Interface Layer is split into Data Link and Physical Layer (Not defined as an standard but considered valid)

![[mapping-between-osi-and-tcp-ip.jpg|OSI Model Mapping to TCP IP Model]]

#### Layer 1: Network Interface
Consist of the physical medium that interconnect computers  
Responsible for defining a common way of interpreting signals from the physical layer  
It is responsible for Hop to Hop Communication  

[[physical-layer-concepts|Physical Layer Concepts]]  
[[data-link-layer-concepts|Data Link Layer Concepts]]

#### Layer 2: Internet Layer
Responsible for End to End Communication  
Get data across a collection of network (across nodes)  
IP : Internet Protocol  

[[network-layer-concepts|Internet Layer Concepts]]

#### Layer 3: Transport Layer
Responsible for Server to Server Communication  
[[transmission-control-protocol-tcp|TCP]]: Transmission Control Protocol (Reliable Data Transfer)  
[[user-datagram-protocol-udp|UDP]]: User Datagram Protocol (Unreliable Data Transfer)  
RTP: Read Time Protocol (Video & Audio Transfer)

[[transport-layer-concepts|Transport Layer Concepts]]

#### Layer 4: Application Layer
The actual data generated by the source application is available at this layer  

[[network-protocols|Application Layer Protocols]]

