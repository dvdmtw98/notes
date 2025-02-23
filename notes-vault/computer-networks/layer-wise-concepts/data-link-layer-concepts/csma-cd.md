---
title: CSMA-CD
tags:
  - networking
  - physical
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Stands for <u>Carrier Sense Multiple Access - Collision Detection</u>  
Check network for communication (Multiple devices using network)  
Devices work in Half-Duplex mode when connected to a Hub  
Collision Detection is only required for Half Duplex Networks

### Working
* Host checks the wire for presence of a digital signal  
* If no signal is detected then host starts to send data  
* If another host starts sending data at the same time on the same network segment a collision will occur
* Host will send an jamming signal that causes all hosts on the network segment to stop sending data  
* After random period of time one of the host on the network segment starts retransmitting the data (Random Backoff Algorithm)
