---
tags:
- networking
- application
- protocol
title: File Transfer Application Protocols
---

<u>FTP (File Transfer Protocol)</u>  
Uses [TCP (Transmission Control Protocol)](../transport-layer-concepts/tcp-transmission-control-protocol.md)  
Transfer files between system  
Authentication (Username & Password)  
No Encryption  
Full featured (list, add, delete, directory traversal, etc.)

<u>SFTP (Secure File Transfer Protocol)</u>  
Uses TCP  
Similar to FTP but provides encryption  
SFTP is similar to SCP  
SFTP provides interactive clients while SCP is only CMD option

<u>TFTP (Trivial File Transfer Protocol)</u>  
Uses [UDP (User Datagram Protocol)](../transport-layer-concepts/udp-user-datagram-protocol.md)  
No authentication provided  
Can only send and receive files (No directory traversal)