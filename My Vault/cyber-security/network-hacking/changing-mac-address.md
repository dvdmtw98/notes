---
title: Changing MAC Address
---

[MAC (Media Access Control) Address](../../computer-networks/layer-wise-concepts/data-link-layer-concepts/mac-media-access-control-address.md) is used to identify devices on a network.  
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