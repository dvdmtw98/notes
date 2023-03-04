---
title: Physical Layer Concepts
tags: [networking, layer-1, index]
---

### Table of Content

- [Network Topologies](../../Network%20Basics/Network%20Topologies.md)
- **Types of Cables**
	- [Twisted Pair](Cable%20Types/Twisted%20Pair.md)
	- [Fiber Optic](Cable%20Types/Fiber%20Optic.md)
- **Devices**
	- [[Hub]]
	- [Repeater](../../Network%20Components/Repeater.md)
	- [WAP (Wireless Access Point)](../../Network%20Components/WAP%20(Wireless%20Access%20Point).md)
	- [Modem](../../Network%20Components/Modem.md)
- [Ethernet](Ethernet.md)
	- [CSMA-CD (Carrier Sense Multiple Access - Collision Detection)](CSMA-CD%20%28Carrier%20Sense%20Multiple%20Access%20-%20Collision%20Detection%29.md)

> [!NOTE]
> In the OSI Model and 5 Layer TCP/IP Model, Ethernet Protocol belongs in both the Physical Layer (Layer 1) & Data Link Layer (Layer 2)

### Communication Synchronization

**Asynchronous Communication**  
Data is send when the receiver is not present/ active    
e.g. Sending a Voicemail  
Start and stop bits are used to indicate the start and end of the transmission to the receiver

**Synchronous Communication**  
Uses a reference clock to coordinate the transmission between the sender and receiver

### Bandwidth Utilization

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

---
