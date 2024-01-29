---
tags:
  - networking
  - networking
  - ip
  - subnet
title: Public & Private IP Addresses
date: 2024-01-28 14:15:56 -0600
---

| Public IP Address                                                      | Private IP Address                                   |
| ---------------------------------------------------------------------- | ---------------------------------------------------- |
| Used "Registered" Public IP Addresses                                  | Unregistered - free to use by everyone               |
| Can be used on Public Network                                          | Cannot be routed or used on a Public Network         |
| They are unique and cannot be used by others                           | There are not unique and can be used by others       |
| By 1990's started running out of Public IP Addresses                   | Used inside an Organizations Internal Network        |
| Private IP Addresses and NAT (Network Address Translation) was created | NAT is used to speak with the outside Public Network |

![[public-and-private-ip-addresses.webp|350]]

[[nat-network-address-translation|NAT (Network Address Translation)]] : Translates Private IP Address to Public IP Address  
The router has an Private Interface which is on the inside and a public interface which is facing the Internet

**Loopback Address**  
IP Address that sends any outgoing signals back to the same computer  
It was reserved for testing purposes and occupies the entire 127.0.0.0 Class A Subnet
127.0.0.1 or Localhost or Loopback
