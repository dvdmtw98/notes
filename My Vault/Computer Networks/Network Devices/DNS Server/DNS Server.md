---
title: DNS
tags: [networking, device, dns]
---

Stands for Domain Name System  
It is the phonebook of the internet

#### DNS Working

Check Web Browser & OS Cache for IP Address  
Send request to DNS Recursive Resolver (ISP) - Checks own Cache for IP Address  
Send request to Root Server - Knows location to Top Level Domain (TLD) Server  
Resolver is directed to TLD - Knows location of Authoritative Name Servers  
Resolver is directed to Authoritative Name Server - Returns the IP Address of Domain  
Resolver (ISP) caches the IP Address - Sends IP to requesting device

We can configure our devices to use a third-party DNS Resolver  
If the Autoreactive Name Server returns a CNAME (alias) than the Resolver has to perform the whole process again for the alias  

[DNS (Domain Name System) - Explained | TechTerms - YouTube](https://www.youtube.com/watch?v=JkEYOt08-rU)

### Table of Content

- [DNS Name Servers](DNS%20Name%20Servers.md)
- [DNS Records](DNS%20Records.md)
- [DNS Zone Types](DNS%20Zone%20Types.md)  

---
