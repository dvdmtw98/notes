---
title: DNS Records
tags: [networking, device, dns]
---

#### A (Address) Record

Forward Lookup Zone  
IPv4 : A Record  
IPv6 : AAAA Record

#### CNAME (Canonical Name) Record

Alias Records  
Can be used to redirect to another server  
This record causes DNS Lookup to find the Alias Domains IP Address

#### NS (Name Server) Record

Points to other DNS Servers

#### MX (Mail Exchanger) Record

Points domains to Mail Servers using SMTP  
MX records like CNAME records always point to another domain  
Mail Servers can have priority (Lower the number higher the priority)

#### TXT (Text) Record

Custom DNS record to associate an Service with a specific DNS Zone  
Used to verify the ownership of an domain  
Office 365 requires an TXT record to confirm organization owns a specific Domain

#### PTR (Pointer) Record

Reverse Lookup Zone  
Have an IP Address need Name

#### SRV (Service Location) Record

They point to servers that are running on the network  
Tells users where to find a specific service  

#### SOA (Start of Authority) Record

Every Zone contains SOA at the beginning of the Zone  
Tells the Zone about itself  
Contains information like Owner, TTL, Authoritative Server, Serial Number

---