---
tags:
  - security
  - tool
  - nmap
title: Normal Scan Techniques
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 16:31:28 -0600
---

#### Default Scan

Scan top 1000 ports on all IP Addresses

````bash
nmap <ip-address>
````

#### Ping Sweep

Check whether an host is up (Host Discovery). Makes use of ICMP packets which could be filtered by Firewalls

````bash
nmap -sn <ip-address/ range>
````

The results returned by Ping Sweep is not very accurate. Active devices are sometimes not detected

#### Disables Ping Scan

All hosted are treated as online and Scan for top 1000 ports is performed  
Useful if ICMP packets are filtered

````bash
nmap -Pn <ip-address>
````

#### OS Detection and Service Versioning Scan

Noisy scans can be easily detected by firewalls and IDS

````bash
nmap -O <ip-address>
nmap -O -sV <ip-address>

# Aggressive: OS Detection, Service Versioning, Script Scanning & Traceroute
nmap -A <ip-address>
````

#### TCP Connect Scan/ Full Open Scan

Very slow scan an easily be detected. 3-Way Handshake is performed with the target and then immediately reset

````bash
nmap -sT <ip-address>
````

#### Stealth Scan/ Half Open Scan (SYN Scan)

Fast scan and can evade firewall detection. Only half 3-Way Handshake is performed and then immediately reset

````bash
nmap -sS <ip-address>
````

SYN-ACK Response : Open  
RST Response : Closed  
Unreachable : Filtered

#### UDP Connect Scan

If the port is closed the service will respond using an ICMP (ping) packet  
UDP Scans are mostly only ran on top 1000 ports as it is a very slow scan

````bash
nmap -sU <ip-address>
````

No Response : Open/ Filtered  
Unreachable : Closed/ Filtered

#### Output Scan Results

`-oN`: Human readable Output  
`-oX`: XML Output  
`-oG`: Greapable Output  
`-oA` : All Format

````bash
nmap -sS <ip-address> -oN <filename>
nmap -sS -v <ip-address> -oA <filename>
````

#### Inverse TCP Flag Scanning

**FIN Scan** : Sets just the TCP FIN bit  
**XMAS Scan** : Sets the FIN, PSH, and URG flags, lighting the packet up like a Christmas tree  
**NULL Scan** : Does not set any bits (TCP flag header is 0)

````bash
nmap -sX <ip-address> # XMAS Scan
nmap -sF <ip-address> # FIN Scan
nmap -sN <ip-address> # NULL Scan
````

No Response : Open/ Filtered  
RST Response : Closed  
Unreachable : Filtered

 > [!NOTE]
 > These scans are extremely stealthy. They do not work for Windows Servers and CISCO Devices as the TCP Stack in these servers do not know how to respond to these request (They return RST packet for malformed packets even if port is open)
 