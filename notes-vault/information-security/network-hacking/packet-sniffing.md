---
title: Packet Sniffing
tags:
  - security
  - exploitation
  - wireless
  - tool
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-21 19:02:49 -0500
---

#### Sniff Packets on 2.4GHz Network

````bash
airodump-ng <interface>
````

#### Sniff Packets on 5GHz Networks

````bash
airodump-ng --band a wlan0
````

#### Sniff Packets on 2.4GHz and 5GHz Networks

````bash
airodump-ng --band abg wlan0
````

When trying to sniff on both the frequencies the results that are going to be generated slowly due to the extra processing required to hop and capture packets between two frequencies

**Result Output**  
`BSSID` : MAC Address of Target  
`PWR` : Signal Strength (High no. better signal)  
`Beacons` : Packets to Broadcasts existence  
`\#Data` : No. packets with different IVs captured  
`\#/s` : Data packets collected in last 10s  
`Channel` : The channel of the router  
`MB` : Max speed supported by network  
`ENC` : Encryption used  
`Cipher` : Cipher used  
`Auth` : Authentication method used  
`ESSID` : Name of Wireless Network

#### Sniff Packets on Specific Network

````bash
airodump-ng --bssid <router-bssid> --channel <channel> --write <filename> <interface>
````

Along with the above columns the following columns are shown for devices connected on network  
`Station` : MAC Address of Devices  
`PWR` : Signal  
`Speed` : Speed of Connection  
`Lost` : Amount of packets lost  
`Frame` : Packets Captured  
`Probe` : Device probing for other networks

The data that was captured is stored is .cap file (Capture File). It can be opened and explored in Wireshark
