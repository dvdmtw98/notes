---
tags:
- os
- linux
- command
title: Network Related Commands
---

### Network Interface

````shell
ip a
ifconfig
iwconfig

# View ARP Details
ip n
arp -a

# View Route Details
ip r
route
route -n # View Default Gateway
````

### Netstat Command

````shell
netstat -r # View routing table
netstat -a # View All Connection
netstat -l # View Listening Ports
````

**<u>Flags</u>**:  
-p : Process ID/ Name  
-t : TCP Ports  
-u : UDP Ports  
-n : Numeric Ports  
-ie : Extended Interface (Same output as ifconfig)  
-c : Continuous Mode

### Config Files

````shell
cat /etc/resolv.conf # DNS Configuration
cat /etc/hosts # Hosts File
````

[Network Mapping (Information Gathering)](../../../cyber-security/network-hacking/network-mapping-information-gathering.md)