---
title: Port Security
tags:
  - security
  - port
  - protect
  - authentication
---

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
Also called as AAA Servers  
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

[Port Security vs Port Based Authentication (802.1x) Whats the Difference? - YouTube](https://www.youtube.com/watch?v=N0bXG_upd2A)
