---
title: Port Security
tags:
  - security
  - authentication
  - management
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N0bXG_upd2A?si=BE_lqvwAa35Hm7gP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Port Security
Common security feature found on network switches that allow admins to restrict which devices can connect to a specific port based on MAC address  

##### MAC Address Filtering (Static)
Link MAC addresses to specific network interfaces

##### Persistent (Sticky) MAC Learning
Feature in network port security where the switch automatically learns and associates MAC addresses with specific interfaces

## Port-based Authentication

#### IEEE 802.1x Protocol
Standardized framework that is used for port-based authentication for both wired and wireless networks  

##### Supplicant
Device that wants access to network

##### Authenticator
Device through which supplicant is trying to access network  
e.g. Switch, WAP, VPN Concentrator

##### Authentication Server
Centralized server that is going to perform the authentication  
Also called as AAA Server  
Common Authentication Protocols: RADIUS (Cross-platform), TACACS+ (Cisco-proprietary)

TACAS+ is slower than RADIUS (Uses TCP)  
RDP, NetBIOS, x.25 PAD not supported on RADIUS

#### EAP (Extensible Authentication Protocol)
EAP provide a secure way to send identifying information for network authentication  
Other Protocols: PAP, CHAP, PPP

##### EAP-MD5
Uses simple passwords and challenge handshake authentication process to provide access 
One way authentication process

##### EAP-TLS
Uses PKI with digital certificate installed on both client and server for authentication

##### EAP-TTLS
Uses digital certificate on the server but not on the client

##### EAP-FAST
Uses a protected access credential instead of a certificate for mutual authentication

##### PEAP (Protected EAP)
Supports mutual authentication by using server certificates and AD database for authenticating password from client

##### LEAP
EAP that works only on Cisco devices
