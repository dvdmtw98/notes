---
tags:
  - networking
  - protocol
  - dns
title: Domain Name System (DNS)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is the phonebook of the internet (Converts Domain Names to IP Addresses)

#### DNS Working
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
