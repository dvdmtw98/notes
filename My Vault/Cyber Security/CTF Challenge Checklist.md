---
title: CTF Challenges Checklist
tags: [security, ctf, checklist]
---

### Information Gathering

- Discover Target (`netdiscover`/ `arp-scan`)
- Discover running services (`rustscan`)

### Service Enumeration

1. **Web App Enumeration**
	- Directory discovery (`feroxbuster`/ `dirbuster`)
	- Vulnerability scan (`nikto`)
	- Web server & technology exploits
	- Checking for existence of `/robots.txt`, `sitemap.xml`
	- Comments in HTML code
	- Portal version & available exploits
	- Forms/ Input fields - SQL injection (`sqlmap`)
	- PHP site with query parameters - LFI/RFI
	- Web server configuration files
	- File upload fields (Reverse shell upload)
	- User-agent spoofing
1. **SMB Enumeration**
	- Anonymous access allowed
	- SMB version (`msfconsole`)
	- Enumeration - share & user names (`smbclient`/ `nmap`/ `enum4linux`)
2. **SSH Enumeration**
	- Password directory attack (`hydra`)

### Exploitation

- Escaping restrictive shell
- Services running as root: `ps aux | grep root`
- `sudo` configuration issue
- Misconfigured sticky bit: `find / -type f -user root -perm -4000 -exec ls -lah {} + 2> /dev/null`
- Kernel exploits

[How to Escape Restricted Shell Environments on Linux « Null Byte :: WonderHowTo](https://null-byte.wonderhowto.com/how-to/escape-restricted-shell-environments-linux-0341685/)

---

[Cyber Security](Cyber%20Security.md)