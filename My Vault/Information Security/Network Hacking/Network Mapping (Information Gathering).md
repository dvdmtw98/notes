---
title: Network Mapping (Information Gathering)
---

#### NetDiscover

````bash
sudo netdiscover
sudo netdiscover -p # Passive Scan
sudo netdiscover -i eth0 # Scan an specific Interface
sudo netdiscover -i <interface> -r <ip-address>
````

#### Nmap/ Zenmap

````bash
# Ping Scan
nmap -sn <ip-address> 
# Quick Scan
nmap -sS -T4 -F <ip-address> 
# Quick Scan Plus
nmap -sV -O -F -T4 --version-light <ip-address>
````

### Arp-Scan

````shell
# Causes lot on noise on Network
sudo arp-scan -I <interface> -l
````

---

[Network Related Commands](../../Operating%20System/Linux/Commands/Network%20Related%20Commands.md)