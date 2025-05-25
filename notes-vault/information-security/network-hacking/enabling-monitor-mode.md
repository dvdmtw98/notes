---
title: Enabling Monitor Mode
tags:
  - networking
  - wireless
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-21 19:10:11 -0500
---

Managed Mode: View/ Capture packets meant for source device only  
Monitor Mode: View/ Capture all the packets that are present in an area

#### Disable Interface

````bash
# List Wireless Interfaces
iwconfig 
ifconfig <interface> down

# Kill Network Manager and processes listening on Interface
airmon-ng check kill 
````

#### Enable Monitor Mode

````bash
iwconfig <interface> mode monitor
````

If `iwconfig` command does not work for adapter or the adapter does not behave as expected use the following command

````bash
airmon-ng start wlan0
````

#### Enable Interface

````bash
service network-manager start
ifconfig wlan0 up
````
