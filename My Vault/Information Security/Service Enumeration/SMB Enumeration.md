---
title: SMB Enumeration
tags: [security, enumeration, smb]
---

1. <u>SMB Username Enumeration</u>

````bash
smbclient //<ip-address>/anonymous 			# Connect to SMB Share
smbget -R smb://10.10.130.183/anonymous 	# Recursively download Share content

nmap -p 445 --script=smb-enum-shares,smb-enum-users <ip-address>
enum4linux -a <ip-address>
````