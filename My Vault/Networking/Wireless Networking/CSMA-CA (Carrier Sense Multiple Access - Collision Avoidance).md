---
title: CSMA-CA (Carrier Sense Multiple Access - Collision Avoidance)
---

It is used on Wireless Network  
Wireless networks cannot detect collisions, so we use Collision Avoidance

**<u>Working</u>**  
Before transmitting data a device will listen to see if anyone is sending data  
If no one is sending data then it will transmit  
The receiver sends back an ACK once the data is received. If no ACK is received the sending device will start the process all over  
If it hears data transmission it will wait and recheck

 > [!INFO]
 > * An optimal RTS (Ready to Send)/ CTS (Clear to Send) Protocol can be used with CSMA/ CA
 > * When an device wants to send data it tells WAP its RTS. The WAP will then tell all other devices to stop and then it will send an CTS signal to requesting device
 > * The device can then start sending data