---
title: QUIC (Quick UDP Internet Connections)
tags:
  - networking
  - transport
  - udp
date: 2024-01-28 14:15:56 -0600
updated: 2025-04-20 15:07:35 -0500
---

It is a new protocol developed by Google.  
Its goal is to reduce the latency caused by TCP Protocol.  
QUIC: HTTP over [[user-datagram-protocol-udp|UDP]].  

[[https|HTTPS]] over TCP required 8-9 transactions to just setup the connection. 
During these communicate no HTTP data is shared.  
QUIC was created to resolve this bottleneck.

![[quic-handshake.gif|600]]

QUIC can only be used with HTTP/3.  
UDP is unreliable and does not use acknowledgment packets.  
The responsibility to check the transmission is pushed to the application layer.
