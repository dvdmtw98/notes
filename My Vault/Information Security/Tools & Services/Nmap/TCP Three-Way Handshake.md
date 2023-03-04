---
title: TCP Three-Way Handshake
---

Three Way Handshake is used to share information between the client and server to synchronize the parameters that are going to be used in the connection

![Three Way Handshake|450](../../images/three-way-handshake.png)

### TCP Header Flags

| Flags                 | Description                                    |
| --------------------- | ---------------------------------------------- |
| SYN (Synchronization) | Initializes connection between host and target |
| ACK (Acknowledgment)  | Acknowledges receipt of packet                 |
| PSH (Push)            | Transmits data immediately                     |
| URG (Urgent)          | Packets to be processed immediately            |
| FIN (Finish)          | No further transmission                        |
| RST (Reset)           | Resets the connection                          |

TCP Header without any of the options is 20 bytes  
The options are only shared between the client and server during the initial Handshake

---

[TCP (Transmission Control Protocol)](../../../Computer%20Networks/Layer-wise%20Concepts/Transport%20Layer%20Concepts/TCP%20(Transmission%20Control%20Protocol).md)