---
title: TCP (Transmission Control Protocol)
tags:
  - networking
  - transport
  - tcp
date: 2024-01-28 14:15:56 -0600
updated: 2025-01-22 19:49:00 -0600
---

**Connection Oriented** - Uses [[tcp-three-way-handshake|TCP Three-Way Handshake]] to establish connection  
Once the transmission is done it uses FIN/ ACK to close the connection  
Assures delivery of packets through error-handling (data sequencing)  
Makes use of checksum  
If corrupted data detected the effected packet is retransmitted  
Sequence number is used to detect missing data and place data in correct order

### TCP Sequence Numbers

SYN packets are used to inform client/ server about the value from which to start counting the packets  
The sequence/ acknowledgement numbers are always unique high number  
Each packet contains a **sequence** number and **acknowledgement** number  

In the SYN packet sent to the server the acknowledgement number is set to 0  
When the server sends back SYN-ACK it increments the sequence no. by 1 and returns it as the acknowledgement number  
The server sends its sequence number to the client in the sequence number field  
When client responses to server with ACK it increments the acknowledgement number by 1

Once the sequence numbers are synchronized and the connection is established the packet size (bytes) determines the amount by which the sequence/ acknowledgment number is incremented
