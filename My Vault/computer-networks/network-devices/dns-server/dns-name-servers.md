---
tags:
- dns
- netwoking
title: DNS Name Servers
---

#### Root Server
They are the top level of the DNS Hierarchy  
There are 13 set of Root Servers strategy placed around the world  
Operated by large organizations and universities like NASA, USC, ICANN and DoD

They are named using letters A through M (letter.root-servers.net)  
Root Server Info Page can be accessed at letter.root-servers.org  
The G Root Server Info Page: `https://disa.mil/g-root`  
Info about all root servers can be found at `www.root-servers.org`

#### Top Level Domain (TLD) Server
There are different TLD for the different extensions  
.com TLD Server stores information about all sites ending in .com

Authoritative Name Server details entered in the Domain Registrars website  
Registrar tells TLD managing authority to update its records with the Authoritative Name Server details provided by user

#### Authoritative Name Server
Scans Zone files to find the Domain name to IP Address mapping  
These servers are run we organizations providing web hosting services

### Commands

| Description                   | Command                                 |
| :---------------------------- | :-------------------------------------- |
| Get Root Nameservers          | `dig NS .`                              |
| Get TLD Nameservers           | `dig NS com @a.root-servers.net`        |
| Get Authoritative Nameservers | `dig NS google.com @a.gtld-servers.net` |
| Get Domain IP Address         | `dig google.com @ns1.google.com`        |

[DNS server types | Cloudflare](https://www.cloudflare.com/learning/dns/dns-server-types/)

---