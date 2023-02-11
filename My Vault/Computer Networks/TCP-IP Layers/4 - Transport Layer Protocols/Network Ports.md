---
title: Network Ports
tags: [networking, transport, port]
---

Required to enable network application multitasking  
Network services are assigned port numbers (DNS, HTTP, SMTP, FTP, POP3, TELENT, etc.)  
Firewalls filter network traffic by using port numbers  
Web Browsing: HTTP TCP 80  
E-mail: SMTP TCP Port 25, POP3 TCP Port 110  
TCP and UDP both has 65536 ports

| Port Type        | Port Numbers  | Description                                    |
| ---------------- | ------------- | ---------------------------------------------- |
| Well Known Ports | 0 - 1023      | Assigned to well know protocols                |
| Registered Ports | 1024 - 49151  | Registered to specific protocols               |
| Dynamic Ports    | 49152 - 65535 | Not registered and can be used for any purpose |

| Service, Protocol or Application            | Port Number | TCP or UDP  |
| ------------------------------------------- | ----------- | ----------- |
| FTP (File Transfer Protocol)                | 20, 21      | TCP         |
| SSH (Secure Shell Protocol)                 | 22          | TCP         |
| DNS (Domain Name System)                    | 53          | UDP         |
| HTTP (Hypertext Transfer Protocol)          | 80          | TCP         |
| POP3 (Post Office Protocol v3)              | 110         | TCP         |
| IMAP4 (Internet Message Access Protocol v4) | 143         | TCP         |
| HTTPS (Hypertext Transfer Protocol Secure)  | 443         | TCP         |
| RDP (Remote Desktop Protocol)               | 3389        | TCP         |
| SNMP (Simple Network Management Protocol)   | 161         | UDP         |
| SMB (Server Message Block)                  | 139, 445    | TCP         |
| NFS (Network File Share)                    | 111, 2049   | TCP and UDP |

<u>Ports in Action</u>  
PC (High Random Port) → Web Server (Specific Port)  
PC (High Random Port) ← Web Server (Specific Port)