---
title: DNS Attacks
tags:
  - security
  - networking
  - protocol
  - attack
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

#### DNS Cache Poisoning
Involves corrupting the DNS cache data of a DNS resolver with false information  
**Prevention**: Utilize DNSSEC to add digital signature to the DNS data 

#### DNS Amplification Attack
The attacker overloads a target system with DNS response traffic by exploiting the DNS resolution process  
The DNS query packet is modified to have the target system as the source  
**Prevention**: Rate limit the amount of DNS response packets that will be received

#### DNS Tunneling
Uses DNS protocol over port 53 to encase non-DNS traffic  
Used to evade firewall rules for data exfiltration by C2 servers

#### Domain Hijacking
Altering a domain names registration without the original registrants consent

#### DNS Zone Transfer Attack
Attacker mimics an authorized system to request and obtain the entire DNS zone data for a domain
