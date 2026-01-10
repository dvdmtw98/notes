---
title: Domain Name System (DNS)
aliases:
  - DNS
tags:
  - networking
  - protocol
  - dns
date: 2024-01-28 14:15:56 -0600
updated: 2026-01-08 22:03:00 +0530
---

It is the phonebook of the internet (Converts Domain Names to IP Addresses).  
Uses UDP Port 53 and uses TCP Port 53 as fallback.   
DNS is an Application Layer (Layer 7) protocol.  

### Domain Types

gTLD (Generic Top Level Domain) - `.org`, `.com`, `.edu`  
ccTLD (Country Code Top Level Domain) - `.in`, `.co.uk`

Second Level Domain can only be 63 characters long  
They can only contain alphanumeric characters and hyphens  

Subdomains sit below second level domains and have the same naming restrictions  
There is no limit on the level of subdomains that can be created  
The entire domain name most be 253 characters or less

### DNS Working
Check Web Browser & OS Cache for IP Address  
Send request to DNS Recursive Resolver (ISP) - Checks own Cache for IP Address  
Send request to Root Server - Knows location to Top Level Domain (TLD) Server  
Resolver is directed to TLD - Knows location of Authoritative Name Servers  
Resolver is directed to Authoritative Name Server - Returns the IP Address of Domain  
Resolver (ISP) caches the IP Address - Sends IP to requesting device

We can configure our devices to use a third-party DNS Resolver  
If the Autoreactive Name Server returns a CNAME (alias) than the Resolver has to perform the whole process again for the alias  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JkEYOt08-rU?si=rPXMhglLYVnxWeFq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Related Topics

* [[dns-name-servers|DNS Name Servers]]
* [[dns-records|DNS Records]]
* [[dns-zone-types|DNS Zone Types]]
* [[dns-attacks|DNS Attacks]]
