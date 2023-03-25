---
title: DNS Zone Types
tags: [networking, device, dns]
---

DNS Zone is a portion of the DNS Namespace  
Enables DNS to be split up for administration and redundancy  

[DNS zone - Wikipedia](https://en.wikipedia.org/wiki/DNS_zone)

Zone Transfer (AXFR) : Replicate DNS on another Server

### Primary Zone

Contains read/write copy of the DNS Zone  
Zone data is stored as a text file on a single Server  
Changes to a zone can only happen in a Primary Zone  
If a record in the zone file needs to be changed and the server is not available then the change cannot be saved  

They are not Not Fault Tolerance  
No Security (Will accept any record if Dynamic DNS is Enabled)

#### Active Directory Integrated Zone

Primary Zone stored in Active Directory  
Can use AD replication servers (Changes can be made on multiple servers)  
Changes to DNS records can be made on multiple servers at the same time  
DNS must to installed on a server that is Domain Controller  

Fault Tolerance (At least 2 DNS Servers has to be set)  
Full Security (Active Directory Security)

### Secondary Zone

Read only copy of another zone (Primary Zone/ Secondary Zone)  
If is receives a DNS record update request it will sent it to the Primary Zone  
Can be configured on a Unix/ Linux systems  
Keeps complete copy of the other zone  
Used for redundancy and better performance

### Stub Zone

Contains partial data from another zone  
Secondary gets only Three Resource Records Types (SOA, NS, A (Glue Host)) - Used to find Authoritative Server  
Stub Zones are updated when changes in the Primary Zone occurs

### Reverse Lookup Zone

Contains IP Address to Host Mapping  
Mainly used for troubleshooting  

---