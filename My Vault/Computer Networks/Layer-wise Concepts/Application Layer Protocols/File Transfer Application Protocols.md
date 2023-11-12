---
tags: [networking, application, protocol]
---

<u>FTP (File Transfer Protocol)</u>  
Uses [TCP (Transmission Control Protocol)](../Transport%20Layer%20Concepts/TCP%20(Transmission%20Control%20Protocol).md)  
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
Uses [UDP (User Datagram Protocol)](../Transport%20Layer%20Concepts/UDP%20(User%20Datagram%20Protocol).md)  
No authentication provided  
Can only send and receive files (No directory traversal)
