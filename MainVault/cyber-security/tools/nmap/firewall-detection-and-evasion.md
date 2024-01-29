---
tags:
  - security
  - tool
  - nmap
title: Firewall Detection & Evasion
date: 2024-01-28 14:15:56 -0600
---

### Firewall Detection

It is used to check if packets are getting filtered by the firewall. It does not return the status of the ports

````bash
nmap -sA <ip-address>
````

RST Response : Unfiltered  
Unreachable/ No Response : Filtered

### Firewall Evasion

#### Decoys

````bash
nmap -sS -sV -F -D RND:3 <ip-address>
nmap -sS -sV -D <ip1>, <ip2>, <ip3> <ip-address>
````

RND:3 means use 3 random IP address. Decoys do not hide your actual IP address from the target it just makes the process difficult

#### Fragmentation

The packets are broken into chunks of 8 bytes. Used to evade older IDS and Firewalls

````bash
nmap -sS -sV -f --send-eth -D RND:3 <ip-address>
````

`--send-eth` : Send raw Ethernet packets. Required if the fragmentation of the packets are not being performed

#### MTU (Minimum Transmission Unit)

Similar to fragmentation but we can specify the packet size. The sizes should be a multiple of 8.

````bash
nmap -sS -sV --mtu 16 --send-eth -D RND:3 <ip-address>
````
