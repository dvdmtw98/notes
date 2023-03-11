---
title: Network Ports
tags: [networking, transport, port]
---

A logical opening on a system representing a service or a application that's listening and waiting for traffic  
TCP and UDP both has 65536 ports

| Port Type        | Port Numbers  | Description                                    |
| ---------------- | ------------- | ---------------------------------------------- |
| Well Known Ports | 0 - 1023      | Assigned to well know protocols                |
| Registered Ports | 1024 - 49151  | Registered to specific protocols               |
| Dynamic Ports    | 49152 - 65535 | Not registered and can be used for any purpose |

<u>Ports in Action</u>  
PC (High Random Port) → Web Server (Specific Port)  
PC (High Random Port) ← Web Server (Specific Port)

| Protocol                                      | Port       | Usage                                                                                 |
| --------------------------------------------- | ---------- | ------------------------------------------------------------------------------------- |
| FTP (File Transfer Protocol)                  | 20, 21     | Provides insecure file transfers                                                      |
| SSH (Secure Shell Protocol)                   | 22         | Provides secure remote control of another machine using text-based environment        |
| SFTP (Secure File Transfer Protocol)          | 22         | Provides secure file transfers                                                        |
| Telnet                                        | 23         | Provides insecure remote control of another machine using text-based environment      |
| SMTP (Simple Mail Transfer Protocol)          | 25         | Provides ability to send emails over the network                                      |
| DNS (Domain Name Service)                     | 53         | Converts domain names to IP Addresses and IP Addresses to domain names                |
| DHCP (Dynamic Host Control Protocol)          | 67, 68     | Assigns IP Address, Subnet Mask, Default Gateway and DNS Server to clients on network |
| TFTP (Trivial File Transfer Protocol)         | 69         | Lightweight file transfer method for sending config files or networking booting of OS |
| HTTP (Hypertext Transfer Protocol)            | 80         | Used for insecure web browsing                                                        |
| POP3 (Post Office Protocol v3)                | 110        | Used for receiving incoming emails                                                    |
| NTP (Network Time Protocol)                   | 123        | Used to keep accurate time for clients on a network                                   |
| NetBIOS (Network Basic Input/ Output System)  | 139        | Used for file or printer sharing in Windows environment                               |
| IMAP4 (Internet Mail Application Protocol v4) | 143        | A newer method of retrieving incoming mails                                           |
| SNMP (Simple Network Management Protocol)     | 161, 162   | Used to collect data about network devices and monitor their status                   |
| LDAP (Lightweight Directory Access Protocol)  | 389        | Used to provide directory services to the network                                     |
| HTTPS (HTTP Secure)                           | 443        | Used for secure web browsing                                                          |
| SMB (Server Message Block)                    | 445        | Used for Windows file and printer sharing                                             |
| Syslog (System Logging Protocol)              | 514        | Used to send logging data to a central server                                         |
| SMTP TLS (SMTP Secure)                        | 587        | Secure and encrypted way to send emails                                               |
| LDAPS (LDAP Secure)                           | 636        | Provides secure directory services                                                    |
| IMAP over SSL                                 | 993        | Secure and encrypted way to receive email                                             |
| POP3 over SSL                                 | 995        | Secure and encrypted way to receive email                                             |
| SQL Server Protocol                           | 1433       | Used to communicate with database engine                                              |
| SQLnet Protocol                               | 1521       | Used to communicate with Oracle database engine                                       |
| MySQL Protocol                                | 3306       | Used to communicate with MySQL database engine                                        |
| RDP (Remote Desktop Protocol)                 | 3389       | Provides graphical remote control over another device                                 |
| SIP (Session Initiation Protocol)             | 5060, 5061 | Used to initiate VoIP and video calls                                                 | 

TFTP: Does not support authentication. It is a stripped down version of FTP  
IMAP: Allows to view emails without having to download them to local device. Email server keeps emails synced across devices  
LDAP: AD is an proprietary version of LDAP. It also uses port 389  
SMB: Works along with NetBIOS which performs the authentication on Port 139 and then hands over control to SMB for resource sharing  