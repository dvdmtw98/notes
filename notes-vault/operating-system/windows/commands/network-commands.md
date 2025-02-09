---
tags:
  - os
  - windows
  - command
title: Network Commands
date: 2024-01-28 14:15:56 -0600
updated: 2025-02-06 12:16:22 -0600
---

### IP Address

```powershell
# Assign a new IP Address to device
ipconfig /release "interface-name"
ipconfig /renew
```

### DNS & MAC

```powershell
# View Domain Names known to device
ipconfig /displaydns
ipconfig /flushdns

# View all MAC Addresses known by device
getmac /v
```

### Network Interface

```powershell
# View Interface Details
netsh interface show interface
netsh interface ip show address

# View all available network Interfaces
netsh wlan show networks 

# View all saved Network on System
netsh wlan show profile 

# View saved Wi-Fi passwords
netsh wlan show profile "<Wi-Fi Name>" key=clear
```
