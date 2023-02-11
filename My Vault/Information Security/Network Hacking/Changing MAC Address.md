---
title: Changing MAC Address
---

[MAC (Media Access Control) Address](../../Computer%20Networks/TCP-IP%20Layers/2%20-%20Data%20Link%20(Network%20Interface)%20Protocols/MAC%20(Media%20Access%20Control)%20Address.md) is used to identify devices on a network.  
It is used to communicate with devices on the internal (Private) network  
**First 3 digit** of MAC address identify the **manufacturer**

````bash
ipconfig <interface> down
ipconfig <interface> hw ether 00:11:22:33:44:55
ipconfig <interface> up
````

Changes made using above method are reset on reboot  
Use `macchanger` to make the changes permanent  
[How to find and change the MAC address on Linux](https://linuxhint.com/find_mac_address_change_mac_address_linux/)