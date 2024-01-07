---
tags:
  - networking
  - index
title: Physical Layer Concepts
---

### Table of Content

* [Network Topologies](../../network-basics/network-topologies.md)
	- [Cable Distribution](cable-distribution.md)
* **Types of Cables**
	- [Copper Cable](copper-cable.md)
	- [Fiber Optic Cable](fiber-optic-cable.md)
* [Ethernet Standard](ethernet-standard.md)
* **Devices**
	- [Hub](../../network-infrastructure/hub.md)
	- [Repeater](../../network-infrastructure/repeater.md)
	- [WAP (Wireless Access Point)](../../network-infrastructure/wap-wireless-access-point.md)
	- [Modem](../../network-infrastructure/modem.md)

> [!NOTE]
> - In the OSI Model and 5 Layer TCP/IP Model, Ethernet Protocol belongs in both the Physical Layer (Layer 1) & Data Link Layer (Layer 2)
> - Layer 1 Ethernet contains the Physical Aspects (Cables) and Layer 2 Ethernet deals with the Logical Aspects (Protocols)

### Communication Synchronization

**Asynchronous Communication**  
Data is send when the receiver is not present/ active    
e.g. Sending a Voicemail  
Start and stop bits are used to indicate the start and end of the transmission to the receiver

**Synchronous Communication**  
Uses a reference clock to coordinate the transmission between the sender and receiver

### Bandwidth Utilization

Bandwidth: Measures the theoretical data transfer capacity  
Throughput: Measures the actual data transfer capacity

**Broadband**  
Divides bandwidth into separate channels  
*TV channels* - we choose the portion of the bandwidth (channel) we what to use

**Baseband**  
Uses all available frequencies on the medium (cable) to transmit data  
*Telephone* - uses the entire network bandwidth (1 call at a time)  
*Ethernet Cable* - uses the entire bandwidth to transmit data  
Baseband uses a reference clock (Synchronous Communication)

### Network Multiplexing

Allows to simultaneously use <u>baseband</u> connection

**Time-Division Multiplexing (TDM)**  
Each session takes a turn, using time slots, to share the medium between users  
Time slots are assigned even if the user does not need it

**Statical Time-Division Multiplexing (StatTDM)**  
Dynamically allocates the time slots on an as-needed basis

**Frequency-Division Multiplexing (FDM)**  
Divides the medium into channels based on frequencies and each session is transmitted over a different channel

### Devices & Medium

Cables/ Wi-Fi/ Bluetooth/ NFC/ Radio waves/ Ethernet  
Hub/ Access Points/ Media Converters/ Repeaters  

### Transceivers

Converts media from one format to another  
**GBIC**: Hot pluggable Ethernet transceiver than can take copper or fiber as its connector

| Transceiver                             | Speed           |
| :-------------------------------------- | :-------------- |
| SFP (Small form-factor pluggable)       | Up to 4.2 Gbps  |
| SFP+                                    | Up to16 Gbps    |
| QSFP (Quad Small form-factor pluggable) | Up to 40 Gbps   |
| QSFP+                                   | Up to 41.2 Gbps |
| QSFP28                                  | Up to 100 Gbps  |
| QSFP56                                  | Up to 200 Gbps  |
