---
title: Network Mapping (Information Gathering)
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

#### Arp Scan

````shell
# Causes lot on noise on Network
sudo arp-scan -I <interface> -l
````

---

[Network Related Commands](../../operating-system/linux/commands/network-related-commands.md)