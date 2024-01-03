---
title: MITM (Man in the Middle) Attack
---

### ARP Poisoning/Spoofing

[ARP (Address Resolution Protocol)](../../computer-networks/layer-wise-concepts/data-link-layer-concepts/arp-address-resolution-protocol.md) used to resolve IP Address to [MAC (Media Access Control) Address](../../computer-networks/layer-wise-concepts/data-link-layer-concepts/mac-media-access-control-address.md)  
Device that wants to connect sends broadcast message of the network and the device that has the requested IP Address responds with its MAC Address.  
All the other devices on the network ignore the request (Drop packet)

````bash
# View ARP Table
arp -a
````

**<u>Working</u>**  
Send message to Router saying you are Target Device and send Target Device message saying that you are the Router  
Works because ARP protocol is not secure. An device will accept ARP response even if it did not send a request  
The response is trusted without any form of verification

---

### Creating a Fake Access Point

Provide an interface on our device which other users can connect for using internet  
Once they connect as we are the AP we can see all the traffic that is flowing through our device  
Without performing any attack we are MITM