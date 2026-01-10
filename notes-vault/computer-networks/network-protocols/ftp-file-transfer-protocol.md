---
title: FTP (File Transfer Protocol)
aliases:
  - FTP
tags:
  - networking
  - application
  - protocol
date: 2024-01-28 14:15:56 -0600
updated: 2026-01-09 22:21:06 +0530
---

FTP is used to transfer files between servers.  
FTP uses port 21 for **control commands** and uses a different port for **data commands** (file download, directory listing, etc.)  

In Active mode is used port 20 on the server connects to a client-specified port.  
In Passive a random high-numbered port is used and the client is told to connect to this port for data.  
Passive mode is commonly used as its outbound communications are not seen as suspicious by firewall.  

![[ftp-client.png|520]]

`get` & `mget`: Download file from server.  
`put` & `mput`: Transfer file to server.  

![[ftp-traffic-wireshark.png|560]]

FTP is insecure and sends all its data in plaintext.  
The command entered on the **client** is **not the instruction** that is **sent to server.**

```bash
ftp <username>@<ip-address>
```

FTP does not have `l` prefixed version for all of its commands.  
To run commands locally we can use `!` to escape to local shell and then use `exit` to return to the remote shell.  
To view content of a file we can use the syntax `get file.txt -`

The secure version of FTP is called FTPS.  
it is not very common as its complexity to configure properly because FTP use different ports for control and data commands.

### SFTP (SSH File Transfer Protocol)
SFTP is a protocol that is build on top of SSH for secure file transfers.  
It is a completely different protocol but uses commands that are comparable to ftp.
Since SFTP is based on SSH port 22 is for all operations.  

To run commands from the remote machine on the local machine we can prefix the SFTP commands with an `l`.  
e.g. `ls` → `lls`, `pwd` → `lpwd`  
