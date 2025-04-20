---
title: TCP (Transmission Control Protocol)
tags:
  - networking
  - transport
  - tcp
date: 2024-01-28 14:15:56 -0600
updated: 2025-04-17 00:12:15 -0500
---

**Connection Oriented** protocol.  
Uses [[tcp-three-way-handshake|TCP Three-Way Handshake]] to establish connection.  
Once the transmission is done it uses FIN/ACK to close the connection.  
Assures delivery of packets through error-handling (data sequencing).  
Makes use of checksum.  
If corrupted data detected the effected packet is retransmitted  
Sequence number is used to detect missing data and place data in correct order

### TCP Sequence Numbers

Sequence numbers are only incremented when data is shared.  
Exception: SYN and FIN packets increment sequence by 1.  
SYN informs client & server of the value from which to start counting.  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8XJPZttC4RM?si=h7rO8ms9MSnp8si-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Each packet contains a sequence number and acknowledgment number.  
These numbers are always unique high number.  

Seq + Data (Left) = Ack (Right)  
Ack (Left) = Seq + Data (Right)

|        |            A            |           B           |
| :----: | :---------------------: | :-------------------: |
|   1    |       SYN, seq=0        |                       |
|   2    |                         | SYN+ACK, seq=0, ack=1 |
|   3    |    ACK, seq=1, ack=1    |                       |
|   4    |   David, seq=1, ack=1   |                       |
|   5    |                         |   ACK, seq=1, ack=6   |
|   6    | Varghese, seq=6, ack=1  |                       |
|   7    |                         |  ACK, seq=1, ack=14   |
|   8    | Networks, seq=14, ack=1 |                       |
|   9    |                         | Hello, seq=1, ack=22  |
|   10   | Goodbye, seq=22, ack=6  |                       |
| 11, 12 |   FIN, seq=29, ack=6    |  ACK, seq=6, ack=29   |
|   13   |                         |  ACK, seq=6, ack=30   |
|   14   |                         |  FIN, seq=6, ack=30   |
|   15   |   ACK, seq=30, ack=7    |                       |
