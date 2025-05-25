---
title: Firewall Detection & Evasion
tags:
  - security
  - tool
  - nmap
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-17 23:31:58 -0500
---

### Firewall Detection

It is used to check if packets are getting filtered by the firewall  
It does not return the status of the ports

````bash
nmap -sA <ip-address>
````

Stateful Firewall: RST for Open and Closed Ports  
Stateless Firewall: RST send for Closed Ports  
Unreachable (No Response): Filtered

### Firewall Evasion

#### Decoys

````bash
nmap -sS -sV -F -D RND:3 <ip-address>
````

`RND:3` means use 3 random IP address  
Decoys do not hide your  IP address from the target (Makes it difficult to detect)  
`-F`: Fast Scan (Top 100 ports)
#### Fragmentation

The packets are broken into chunks of 8 bytes  
Used to evade older IDS and Firewalls

````bash
nmap -sS -sV -f --send-eth -D RND:3 <ip-address>
````

`-f`: Fragment Packets  
`--send-eth` : Send raw Ethernet packets. Required with `-f`

#### MTU (Minimum Transmission Unit)

Similar to fragmentation but we can specify the packet size  
The sizes should be a multiple of 8.

````bash
nmap -sS -sV --mtu 16 --send-eth -D RND:3 <ip-address>
````
