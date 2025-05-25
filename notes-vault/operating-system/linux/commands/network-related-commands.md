---
title: Network Related Commands
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:48:38 -0600
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

**Flags**  
`-p`: Process ID/ Name  
`-t`: TCP Ports  
`-u`: UDP Ports  
`-n`: Numeric Ports  
`-ie`: Extended Interface (Same output as ifconfig)  
`-c`: Continuous Mode

### Config Files

````shell
cat /etc/resolv.conf # DNS Configuration
cat /etc/hosts # Hosts File
````

[[network-mapping|Network Mapping]]
