---
tags:
  - networking
  - ip
  - subnet
title: Public & Private IP Addresses
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 19:02:39 -0600
---

| Public IP Address                                                      | Private IP Address                                   |
| ---------------------------------------------------------------------- | ---------------------------------------------------- |
| Used "Registered" Public IP Addresses                                  | Unregistered - free to use by everyone               |
| Can be used on Public Network                                          | Cannot be routed or used on a Public Network         |
| They are unique and cannot be used by others                           | There are not unique and can be used by others       |
| By 1990's started running out of Public IP Addresses                   | Used inside an Organizations Internal Network        |
| Private IP Addresses and NAT (Network Address Translation) was created | NAT is used to speak with the outside Public Network |

![[public-and-private-ip-addresses.webp|350]]

### Additional Reserved IP Addresses

#### Loopback Address
IP Address that sends any outgoing signals back to the same computer  
It was reserved for testing purposes and occupies the entire 127.0.0.0 Class A Subnet  

#### Link Local Address
**Link Local Address**: 169.254.0.0/16  
Unicast network address that is valid only within the subnet the host is connect  
Assigned to device when no DHCP on network and no manual network configuration

[What is Link-local addressing? - Network Engineering Stack Exchange](https://networkengineering.stackexchange.com/questions/24749/what-is-link-local-addressing)

#### Broadcast Addresses
**Local Broadcast**: 255.255.255.255  
Send packet to every host on Local Network

Directed/ Target Broadcast: Broadcast IP for Subnet  
If Subnet is 10.3.3.0/25 then Directed Broadcast IP is 10.3.3.127  
Send packet to every host on local Network as well as send packet to every host on foreign network  
Sending packets to all devices on a foreign network is considered a security risk and this feature is disabled most modern hardware

### [[network-address-translation-nat|NAT (Network Address Translation)]]
Translates Private IP Address to Public IP Address    
The router has an Private Interface which is on the inside and a public interface which is facing the Internet