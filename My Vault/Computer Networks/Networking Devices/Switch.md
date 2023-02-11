---
title: Switch
tags: [networking, device]
---

### Switch (Switching Hub)

Similar to an [Hub](Hub.md) i.e. allows to connect multiple devices together in a network  
It is an Layer 2 (Data Link Layer) device  
It is an device the facilitates communication within a network

It is an Intelligent Network device  
It memorize the [MAC (Media Access Control) Address](../TCP-IP%20Layers/2%20-%20Data%20Link%20%28Network%20Interface%29%20Protocols/MAC%20%28Media%20Access%20Control%29%20Address.md) of all the Host connected to it in the **MAC Address Table** (Mapping of Switch Port to MAC Address)  
As switches know the MAC Address of all devices connected to it the traffic is contained to the ports that are actually participating in the communication

Switch performs three actions: **Learning**, **Flooding** and **Forwarding**  
[Switch MAC Address Learning](../TCP-IP%20Layers/2%20-%20Data%20Link%20%28Network%20Interface%29%20Protocols/Switch%20MAC%20Address%20Learning.md)

Switches have a MAC Address and IP Address but for any traffic that is going through them this details are not required  
They only come in handy if we need to connect to the Switch to perform some action

<u>Form Factors of Switch</u>  
Fixed Form Factor: Switched used in small networks has fixed number of ports  
Modular Switches: Used for large networks. We can increase/ decrease the amount of ports on the switch

---

### Types of Switches

<u>Unmanaged Switches</u>  
Nothing to configure. Plug it in and it works directly.  
Used on small/ home networks. They are generally of fixed form factor

<u>Managed Switches</u>  
Can be configured and managed by network admin using Telnet or [SSH](../../Operating%20System/Linux/Commands/ssh%20Command.md)  
They can be fixed form factor or modular  
They are expensive compared to unmanaged switches  
We can add static entities in MAC table  
Configure which port uses Full Duplex and Half Duplex  
Monitor switch performance using SNMP  
Create [Virtual LANs (VLANs)](../TCP-IP%20Layers/2%20-%20Data%20Link%20%28Network%20Interface%29%20Protocols/Virtual%20LANs%20%28VLANs%29.md)  
Configure port mirroring (One port to mirror another port for redundancy)

---

### Layer 3 Switch

Provides the Layer 2 switching and the Layer 3 routing  
They are always Managed Switches. Used in conjunction with VLANs  
It allows routing between VLANs  
It is one device instead of separate [Router](Router.md) and Switch (Need to buy 1 device instead of 2)