---
title: Network Mapping
tags:
  - security
  - networking
  - tool
  - enumeration
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-21 19:11:02 -0500
---

#### NetDiscover

````bash
# Scan a specific Interface
sudo netdiscover -i eth0

sudo netdiscover -i <interface> -r <ip-address>
````

#### Nmap

````bash
# Ping Scan
nmap -sn <ip-address> 

# Quick Scan
nmap -sS -T4 -F <ip-address> 
````

#### ARP Scan

````shell
# Causes lot on noise on Network
sudo arp-scan -I <interface> -l
````
