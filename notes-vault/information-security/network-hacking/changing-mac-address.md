---
title: Changing MAC Address
tags:
  - networking
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-21 19:12:02 -0500
---

[[mac-media-access-control-address|MAC (Media Access Control) Address]] is used to identify devices on a network.  
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
