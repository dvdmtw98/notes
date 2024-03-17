---
tags:
  - security
  - tool
  - nmap
title: Normal Scan Techniques
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-14 20:49:30 -0500
---

#### Default Scan

Scan top 1000 ports on all IP Addresses
Same as `-sT` Scan (TCP Full Scan)

````bash
nmap <ip-address>
````

#### Ping Sweep

Check whether an host is up (Host Discovery)  
Makes use of ICMP packets which could be filtered by Firewalls

````bash
nmap -sn <ip-address>
````

The results returned by Ping Sweep is not very accurate. Active devices are sometimes not detected

#### Disables Ping Scan

Hosted is considered to be online and top 1000 ports is scanned  
Useful if ICMP packets are filtered

````bash
nmap -Pn <ip-address>
````

#### OS Detection and Service Versioning Scan

Noisy scans can be easily detected by firewalls and IDS

````bash
nmap -O <ip-address>
nmap -O -sV <ip-address>

# Aggressive
# OS Detection, Service Versioning, Script Scanning & Traceroute
nmap -A <ip-address>
````

#### TCP Connect Scan/ Full Open Scan

Slower than SYN Scan. Can be easily detected  
3-Way Handshake is performed with the target before reset packet is sent  

````bash
nmap -sT <ip-address>
````

#### Stealth Scan/ Half Open Scan (SYN Scan)

Fast scan and can evade firewall detection  
Only half 3-Way Handshake is performed and then immediately reset

````bash
nmap -sS <ip-address>
````

SYN-ACK Response: Open  
RST Response: Closed  
Unreachable: Filtered

#### UDP Connect Scan

If the port is closed the service will respond using an ICMP (ping) packet  
UDP scan is significantly slower than TCP scans  
UDP is a connection-less protocol so it does not send back ACK packets  
Nmap has to wait for a long period before making the decision it port is open

````bash
nmap -sU <ip-address>
````

No Response: Port Open or Filtered  
Unreachable: Port Closed or Filtered

#### Output Scan Results

`-oN`: Human readable Output  
`-oX`: XML Output  
`-oG`: Greapable Output  
`-oA`: All Format

````bash
nmap -sS <ip-address> -oN <filename>
nmap -sS -v <ip-address> -oA <filename>
````

#### Inverse TCP Flag Scanning

**FIN Scan**: Sets just the TCP FIN bit  
**XMAS Scan**: Sets the FIN, PSH, and URG flags  
**NULL Scan**: Does not set any bits (TCP flag header is 0)

````bash
nmap -sX <ip-address> # XMAS Scan
nmap -sF <ip-address> # FIN Scan
nmap -sN <ip-address> # NULL Scan
````

No Response: Open/ Filtered  
RST Response: Closed  
Unreachable: Filtered

 > [!IMPORTANT] Windows & Cisco - Network Stack
 > Does not support these scans  
 > The Network stack on these servers do not know how to respond  
 > RST packet is sent for malformed packet even if port is open
 > These scans are extremely stealthy  
 