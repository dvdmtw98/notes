---
title: Network Ports
tags:
  - networking
  - transport
  - port
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 18:44:41 -0600
---

A logical communication endpoint that exists on a computer or server  
TCP and UDP both has 65,536 ports

**Inbound**  
Port that is listening for a connection from a client (Specific Port)  

**Outbound**  
Port created to call out to a server that is listening for a connection (High Random Port)

#### Port Types

| Port Type        | Port Numbers  | Description                                    |
| ---------------- | ------------- | ---------------------------------------------- |
| Well Known Ports | 0 - 1023      | Assigned to well know protocols                |
| Registered Ports | 1024 - 49,151  | Registered to specific protocols               |
| Dynamic and Private Ports    | 49,152 - 65,535 | Not registered and can be used for any purpose |

<u>Ports in Action</u>  
PC (High Random Port) → Web Server (Specific Port)  
PC (High Random Port) ← Web Server (Specific Port)

### Common Protocol Ports

**Protocols**: Rules governing device communication and data exchange

| Protocol | Port | Protocol | Usage |
| ---- | ---- | ---- | ---- |
| FTP (File Transfer Protocol) | 21 | TCP | Provides insecure file transfers |
| SSH (Secure Shell Protocol) | 22 | TCP | Provides secure remote control of another machine using text-based environment |
| SCP (Secure Copy Protocol) | 22 | TCP | Provides secure copy features |
| SFTP (Secure File Transfer Protocol) | 22 | TCP | Provides secure file transfers |
| Telnet | 23 | TCP | Provides insecure remote control of another machine using text-based environment |
| SMTP (Simple Mail Transfer Protocol) | 25 | TCP | Provides ability to send emails over the network |
| DNS (Domain Name Service) | 53 | TCP, UDP | Converts domain names to IP Addresses and IP Addresses to domain names |
| DHCP (Dynamic Host Control Protocol) | 67, 68 |  | Assigns IP Address, Subnet Mask, Default Gateway and DNS Server to clients on network |
| TFTP (Trivial File Transfer Protocol) | 69 | UDP | Lightweight file transfer method for sending config files or networking booting of OS |
| HTTP (Hypertext Transfer Protocol) | 80 | TCP | Used for insecure web browsing |
| Kerberos | 88 | UDP | Network authentication protocol |
| POP3 (Post Office Protocol v3) | 110 | TCP | Used for receiving incoming emails |
| Network News Transfer Protocol (NNTP) | 119 | TCP | Used for accessing newsgroups |
| NTP (Network Time Protocol) | 123 |  | Used to keep accurate time for clients on a network |
| Remote Procedure Call (RPC) | 135 | TCP, UDP | Facilitates communication between different system processes |
| NetBIOS (Network Basic Input/ Output System) | 137, 138, 139 | TCP, UDP | Used for file or printer sharing in Windows environment |
| IMAP4 (Internet Mail Application Protocol v4) | 143 | TCP | A newer method of retrieving incoming mails |
| SNMP (Simple Network Management Protocol) | 161 | UDP | Used to collect data about network devices and monitor their status |
| SNMP Trap | 162 | UDP | Responsible for sending SNMP trap messages |
| LDAP (Lightweight Directory Access Protocol) | 389 | TCP | Used to provide directory services to the network |
| HTTPS (HTTP Secure) | 443 | TCP | Used for secure web browsing |
| SMB (Server Message Block) | 445 | TCP | Used for Windows file and printer sharing |
| SMTP Secure (SMTPS) | 465, 587 | TCP | Secure and encrypted way to send emails |
| Syslog (System Logging Protocol) | 514 | UDP | Used to send logging data to a central server |
| LDAP Secure (LDAPS) | 636 | TCP | Provides secure directory services |
| IMAP over SSL | 993 | TCP | Secure and encrypted way to receive email |
| POP3 over SSL | 995 | TCP | Secure and encrypted way to receive email |
| MSSQL Server Protocol | 1433 | TCP | Used to communicate with database engine |
| SQLnet Protocol | 1521 |  | Used to communicate with Oracle database engine |
| RADIUS TCP | 1645, 1646 | TCP | Used for remote authentication, authorization and accounting |
| RADIUS TCP | 1812, 1813 | UDP | Used for remote authentication and accounting as defined by IETF |
| MySQL Protocol | 3306 |  | Used to communicate with MySQL database engine |
| RDP (Remote Desktop Protocol) | 3389 | TCP | Provides graphical remote control over another device |
| SIP (Session Initiation Protocol) | 5060, 5061 |  | Used to initiate VoIP and video calls |
| Syslog TLS | 6514 | TCP | Secure transfer of syslog's over the network |

TFTP: Does not support authentication. It is a stripped down version of FTP  
IMAP: Allows to view emails without having to download them to local device. Email server keeps emails synced across devices  
LDAP: AD is an proprietary version of LDAP. It also uses port 389  
SMB: Works along with NetBIOS which performs the authentication on Port 139 and then hands over control to SMB for resource sharing
