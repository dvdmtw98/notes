---
title: OSI Model
---

A conceptual framework that shows us how data moves through a network  
It is only an reference model. The real world model is [TCP/IP](TCP-IP%20Model.md)

|         | Layer        | Activity Performed                               |
| ------- | ------------ | ------------------------------------------------ |
| Data    | Application  | Chrome, Firefox, E-Mail Client                   |
| Data    | Presentation | Convert to PC Understandable Format & Encryption |
| Data    | Session      | Maintain connection between two PC               |
| Segment | Transport    | Split data into packets and ordering of packets  |
| Packet  | Network      | Decides the best Route to deliver Data           |
| Frame   | Data Link    | Data Retransmission, Error Checking              |
| Bit     | Physical     | Cable, Optic Fiber                               |

The top 3 layers also called as Host Layers are handles by the host device  
The bottom 4 layers also called as Media Layers are handled by the various networking devices like routers, modems, etc.

![OSI Model](../images/osi_model.png)

---

### Layer 7: Application Layer

Where user communicates to the computer  
Acts as an interface between Applications and protocols  
e.g. Email (IMAP, POP3), Browser (HTTP, HTTPS)  
On this layer we can see the actual data that was sent in the packets  
[Application Layer Protocols](../TCP-IP%20Layers/5%20-%20Application%20Layer%20Protocol/Application%20Layer%20Protocols.md)

### Layer 6: Presentation Layer

Ensures data from one systems application layer can be read by application layer of the other  
Provides Character Code Conversion, Data Compression, Data Encryption

### Layer 5: Session Layer

Sets up, manages and tears down sessions between network devices  
Ensures data from different application session are kept separate

 > [!NOTE]
 > When OSI Model was created where was clear distinction between the functionality of Layer 5, 6 and 7 but nowadays this has become more vague and as such most of the time the last 3 layers are considered as a single Layer (Application Layer)

### Layer 4: Transport Layer

Responsible for Service to Service Communication  
[Ports](../TCP-IP%20Layers/4%20-%20Transport%20Layer%20Protocols/Network%20Ports.md) are used on this layer to send data to the right application  
Segments (Sender) and reassembles (Receiver) data received from the higher layers  
Segmented data in TCP is called Segments while data in UDP is referred as Datagram  
Connection oriented ([TCP](../TCP-IP%20Layers/4%20-%20Transport%20Layer%20Protocols/TCP%20%28Transmission%20Control%20Protocol%29.md)) : Reliability: [TCP Three-Way Handshake](../../Information%20Security/Tools%20&%20Services/Nmap/TCP%20Three-Way%20Handshake.md)  
Connectionless ([UDP](../TCP-IP%20Layers/4%20-%20Transport%20Layer%20Protocols/UDP%20%28User%20Datagram%20Protocol%29.md)) : Efficiency

### Layer 3: Network Layer

Responsible for End to End Communication  
Uses IP Addresses and routing algorithms to transfer packets over the network  
The source and destination IP Addresses are added into the packet in this layer  
[Network (Internet Layer) Protocols](../TCP-IP%20Layers/3%20-%20Network%20%28Internet%20Layer%29%20Protocols/Network%20%28Internet%20Layer%29%20Protocols.md)

### Layer 2: Data Link Layer

Translates messages from network layer into bits for physical layer  
Responsible for checking if the data received from the physical layer is corrupted  
Packets are send to the correct device on this layer using MAC Addresses  
Responsible for Hop to Hop Communication (Device to Device)  
The data at this layer is called a Frame  
[Data Link (Network Interface) Protocols](../TCP-IP%20Layers/2%20-%20Data%20Link%20%28Network%20Interface%29%20Protocols/Data%20Link%20%28Network%20Interface%29%20Protocols.md)

 > [!IMPORTANT]
 > To understand how the IP to MAC Address Mapping takes place it is paramount to understand [ARP (Address Resolution Protocol)](../TCP-IP%20Layers/2%20-%20Data%20Link%20%28Network%20Interface%29%20Protocols/ARP%20%28Address%20Resolution%20Protocol%29.md)

### Layer 1: Physical Layer

Defines the physical and electrical medium for communication  
Converts the data received as frames into bits (1s and 0s)  
Responsible for transporting bits over the network  
[Physical Layer Protocols](../TCP-IP%20Layers/1%20-%20Physical%20Layer%20Protocols/Physical%20Layer%20Protocols.md)