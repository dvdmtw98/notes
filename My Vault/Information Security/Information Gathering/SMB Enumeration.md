---
title: SMB Enumeration
tags: [security, enumeration, smb]
---

#### SMB Access

```bash
# List SMB Shares
smbclient -L //<ip-address>
# Connect to SMB Share
smbclient //<ip-address>/<share-name>

# Recursively Download Share Content
smbget -R smb:/<ip-address>/anonymous
```

#### Enumeration

```bash
# Enumerate SMB 
enum4linux -a <ip-address>
enum4linux -U -o <ip-address>

# Nmap SMB Scripts
nmap -p 445 --script=smb-enum-shares,smb-enum-users <ip-address>

# Metasploit Auxiliary Modules
auxiliary/scanner/smb/smb_version
```