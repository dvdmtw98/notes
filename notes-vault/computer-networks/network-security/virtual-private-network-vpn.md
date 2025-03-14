---
title: Virtual Private Network (VPN)
tags:
  - networking
  - appliance
  - security
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

VPN extends a private network over a public network, enabling secure data transfer      
A tunnel is established between the client and VPN Server this tunnel encrypts all the data
We are assigned a private IP Address on the VPN Servers network  

### Types of VPN Configuration

#### Site-to-site VPN
Establishes secure tunnels over the public internet for interconnecting remote sites  
Alternative to having dedicated lease line between sites

#### Client-to-site VPN
Connects individual devices directly to an organizations office  
Allows remote access to company network

#### Clientless VPN
Secures remote access through browser-based VPN tunnels  
No software or hardware configuration is required  
e.g. HTTPS 

### VPN Tunnel Types
Supported by site-to-site VPN and client-to-site VPN

#### Full Tunnel
Maximizes security by encrypting all traffic  
When connected to VPN wont be able to access local network devices

#### Half Tunnel
Divides traffic and network requests and routes them to the appropriate network  
Traffic to office will be sent over VPN while other traffic will be over public internet  
Not as secure as Full Tunnels but provides better performance

### VPN Security Protocols

#### Transport Layer Security (TLS)
Protocol that provides cryptographic security for secure connections and is used for secure web browsing and data transfer  
[[transmission-control-protocol-tcp|TCP]] is used by TLS to establish secure connections between client and server  
This can slow down the connection

#### Datagram Transport Layer Security (DTLS)
UDP-based version of TLS protocol  
Same security as TLS while providing faster operations  
Useful for video-streaming over VPN

#### Internet Protocol Security (IPSec)
A protocol suite for secure communication that provides authentication and encryption of data packets on IP networks  
Used in site-to-site VPN and client-to-site VPN  
[[ipsec-protocol-suite|IPsec Protocol Suite]]

### VPN Concentrator

Allows to manage multiple VPN connections in a single location  
Used by organization to allows remote users to connect to the work network from anywhere in the world

VPN Headend is a special type of concentrator used to terminates IPSec VPN tunnels
