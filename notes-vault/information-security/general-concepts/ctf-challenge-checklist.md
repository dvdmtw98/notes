---
title: CTF Challenge Checklist
tags:
  - security
  - ctf
  - checklist
date: 2024-01-28 14:15:56 -0600
updated: 2024-05-12 16:31:33 -0500
---

### Information Gathering (Recon)

* Discover Target (`netdiscover`/ `arp-scan`/ `nmap`)
	* `nmap` can detect devices running on different subnets
* Discover running services (`rustscan`/ `nmap)

### Service Enumeration

1. **Web App Enumeration**
	- Directory brute-forcing (`gobuster`)
		- Checking for existence of `/robots.txt`, `sitemap.xml`, etc.
	- Vulnerability scan (`nikto`)
	- Comments in HTML code
	- Input fields - SQL injection (`sqlmap`)
	- File upload fields (Reverse shell)
	- Site with query parameters - LFI/RFI
	- Website version & available exploits
	- Web server configuration files
	- Web server & technology exploits
	- User-agent spoofing
1. **SMB Enumeration**
	- Enumeration - share & user names (`smbclient`/ `nmap`/ `enum4linux`)
	- SMB version (`msfconsole`)
	- Exploit SMB/ Anonymous Login (`smbclient`)
2. **SSH Enumeration**
	- Password directory attack (`hydra`)

### Exploitation

* Escaping restrictive shell
	- [How to Escape Restricted Shell Environments on Linux - Null Byte](https://null-byte.wonderhowto.com/how-to/escape-restricted-shell-environments-linux-0341685/)
* Services running as root: `ps aux | grep root`
* `sudo` configuration issue
* SUID/GUID: `find / -type f -user root -perm -4000 -exec ls -lah {} + 2> /dev/null`
* Capabilities: `getcap -r / 2> /dev/null`
* Kernel exploits

