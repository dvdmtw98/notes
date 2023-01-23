---
title: Enabling Monitor Mode
---

Managed Mode : View/ Capture packets meant for source device only  
Monitor Mode : View/ Capture all the packets that are present in an area

1. <u>Disable Interface</u>

````bash
# List Wireless Interfaces
iwconfig 
ifconfig <interface> down
# Kill Network Manager and processes listening on Interface
airmon-ng check kill 
````

2. <u>Enable Monitor Mode</u>

````bash
iwconfig <interface> mode monitor
````

If `iwconfig` command does not work for adapter or the adapter does not behave as expected use the following command

````bash
airmon-ng start wlan0
````

3. <u>Enable Interface</u>

````bash
service network-manager start
ifconfig wlan0 up
````