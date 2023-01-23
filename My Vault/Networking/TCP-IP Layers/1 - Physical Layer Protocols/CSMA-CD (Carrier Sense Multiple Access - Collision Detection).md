---
title: CSMA-CD (Carrier Sense Multiple Access - Collision Detection)
---

Check network for communication. Multiple devices using network  
It is used on Wired Network. Used with hubs where there is one large collision domain (Was used on old networks where Half Duplex communication was used)  
Can be used with an switch if an Half Duplex Device is connected to it like an hub

<u>Working</u>  
Host checks the wire for presence of a digital signal  
If no signal detected then host will begin to send data  
If another host sends data and collision occurs. Then host will send an jamming signal that causes all hosts on the network segment to stop sending data  
After random period of time host retransmits the data (Backoff Algorithm)