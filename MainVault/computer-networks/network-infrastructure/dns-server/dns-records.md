---
tags:
  - networking
  - device
  - dns
title: DNS Records
date: 2024-01-28 14:15:56 -0600
---

#### A (Address) Record
Forward Lookup Zone  
IPv4 : A Record  
IPv6 : AAAA Record

#### CNAME (Canonical Name) Record
Used to resolve a Domain Name to another domain name  
Causes DNS Lookup to be performed for the Alias Domains IP Address  
Can be used to redirect to another server  

#### MX (Mail Exchanger) Record
Points domains to Mail Servers  
MX records like CNAME records always point to another domain  
Generally a server will have multiple MX records and each one has a priority  
The MX record with the lowest priority is the Primary Server

#### SOA (Start of Authority) Record
Stores administrative details about a Zone  
Contains information like Owner, TTL, Authoritative Server, Serial Number

#### NS (Name Server) Record
Points to other DNS Server  
NS records are also generally configured in pairs (Primary and Secondary)

#### SRV (Service Location) Record
SRV points to a service that are running on the network  
The record also contains the port number to find the service

#### PTR (Pointer) Record
Reverse Lookup Zone  
Have an IP Address need Name  
Used by Mail Services to check if the mail is Spam

#### TXT (Text) Record
Custom DNS record to associate an Service with a specific DNS Zone  
Used to verify the ownership of an domain  
Office 365 requires an TXT record to confirm organization owns a specific Domain
