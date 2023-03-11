---
title: TCP (Transmission Control Protocol)
tags: [networking, transport, tcp]
---

**Connection Oriented** - Uses [TCP Three-Way Handshake](TCP%20Three-Way%20Handshake.md) to establish connection  
Once the transmission is done it uses FIN/ ACK to close the connection  
Assures delivery of packets through error-handling (data sequencing)  
Makes use of checksum  
If corrupted data detected the effected packet is retransmitted  
Sequence number is used to detect missing data and place data in correct order

---

### TCP Sequence Numbers

The SYN flag is responsible for telling the server about the number from which it has to start counting the packets  
The Sequence Number (ISN) is an unique high number

When the server sends back SYN-ACK it increments the Sequence Number by 1 and returns it as the Acknowledgement Number  
Additionally the server sends its own Sequence Number to the client

When client responses to server with the ACK Flag it increments the Acknowledgement No. by 1

Once the sequence numbers are synchronized and the connection is established depending on the size and the amount (bytes) of data sent by the client the sequence numbers will increase