---
tags:
  - security
  - enumeration
  - smtp
title: SMTP Enumeration
date: 2024-01-28 14:15:56 -0600
---

#### SMTP Username Enumeration

````bash
nmap -p 25 --script smtp-commands <ip-address>

sudo apt install smtp-user-enum
smtp-ser-enum -M VRFY -U <wordlist> -t <target-ip>
````

This attack only works if nmap scan returns VRFY as an usable command
