---
title: SMTP Enumeration
tags: [security, enumeration, smtp]
---

1. <u>SMTP Username Enumeration</u>

````bash
nmap -p 25 --script smtp-commands <ip-address>
sudo apt install smtp-user-enum
smtp-ser-enum -M VRFY -U <wordlist> -t <target-ip>
````

This attack only works if nmap scan returns VRFY as an usable command