### TCP Header Flags

Port scanning uses specially crafted TCP packets to probe the target to collect relevant information

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

### TCP 3-Way Handshake

![Three Way Handshake|500](../../images/three_way_handshake.png)

Full Scan : Complete 3-Way Handshake  
Stealth Scan : SYN, SYN-ACK is followed by RST

---

### States of Port

Open : Service is running on the port and accepting new connections  
Closed : Not accepting new connections but there is an service running on the port  
Filtered : No conclusion. There could be an firewall setup to filter packets

---

[TCP (Transmission Control Protocol)](../../../Networking/TCP-IP%20Layers/4%20-%20Transport%20Layer%20Protocols/TCP%20%28Transmission%20Control%20Protocol%29.md)
