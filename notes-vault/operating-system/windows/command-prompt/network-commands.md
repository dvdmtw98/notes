---
tags:
  - os
  - windows
  - command
title: Network Commands
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````batch
:: Assign a new IP Address to device
ipconfig /release "interface-name"
ipconfig /renew

:: View Domain Names known to device
ipconfig /displaydns
ipconfig /flushdns

:: View all MAC Addresses known by device
getmac /v

netsh interface show interface
netsh interface ip show address

:: View all available network Interfaces
netsh wlan show networks 

:: View all saved Network profiles on System
netsh wlan show profile 

:: View saved Wi-Fi passwords
netsh wlan show profile "<Wi-Fi Name>" key=clear

:: Network Ports
netstat -af / netstat -an
netstat -o
netstat -e -t 5

:: Routing Table Info
route print
````
