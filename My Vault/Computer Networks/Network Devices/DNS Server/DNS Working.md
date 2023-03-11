---
title: DNS Working
tags: [networking, device, dns]
---

### DNS Working

Check Device Cache for IP Address  
Send request to Resolver (ISP) - Check own Cache for IP Address  
Send request to Root Server - Knows location to Top Level Domain (TLD) Server  
Resolver is directed to TLD - Knows location of Authoritative Name Servers  
Resolver is directed to Authoritative Name Servers - Returns the IP Address of Domain  
Resolver caches the IP Address - Sends IP to requesting device

<u>Root Server</u>  
They are the top of the DNS Hierarchy  
There are 13 sets of them  
Operated by 12 organizations  
Each set has own unique IP Address

<u>Top Level Domain (TLD)</u>  
Stores address information for TLD  
e.g. .com, .net, .org, etc.

<u>Authoritative Name Server</u>  
Knows everything about the domain