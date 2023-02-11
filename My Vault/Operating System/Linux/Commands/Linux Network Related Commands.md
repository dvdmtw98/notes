---
title: Linux Network Related Commands
tags: [os, linux, command]
---

### Network Interface

````shell
ip a
ip a show <interface>
arp -a # View ARP Table
iwconfig # ifconfig for Wireless Interface

ip route show
route # View routing table
route -n # View Default Gateway
````

### Netstat Command

````shell
netstat -r (View routing table)
netstat -a (View All Connection)
netstat -l (View Listening Ports)
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

---

[Network Mapping (Information Gathering)](../../../Information%20Security/Network%20Hacking/Network%20Mapping%20%28Information%20Gathering%29.md)