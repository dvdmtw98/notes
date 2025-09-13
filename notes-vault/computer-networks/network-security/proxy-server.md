---
title: Proxy Server
tags:
  - networking
  - security
  - appliance
date: 2024-01-28 14:15:56 -0600
updated: 2025-09-07 16:51:31 +0530
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xo5V9g9joFs?si=TkD6TX2xFOlITbuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Proxies are protocol specific i.e. HTTP proxy will only route HTTP traffic.  
Works at Layer 4 & Layer 7 ([[load-balancer|Load Balancer]])  
[[virtual-private-network-vpn|VPN Server]] similar to Proxies hide the IP Address but they additionally encrypt the traffic.

### Forward Proxy
Makes request on behalf of the client (Target not aware of source).  
They need configuration to be made in application to work.  

**Anonymity**: Destination is not aware of the client  
**Logging**: Log requests that are originating from the source network  
**Block Websites**: Restrict & filter unwanted websites (gambling, social media, etc.)  
**Content Checking**: Verifies the content is valid and doesn't have malicious content (Similar to application [[firewall|Firewall]])

### Reverse Proxy
Makes request of behalf of client (Source not aware of target).  
Has most of the features of a forward proxy as well.  

**Caching**: Caches pages in its memory. Helps to save bandwidth  
**Load Balancing**: Allows to balance request between multiple internal servers  
**Ingress**: Used in microservices allows to route traffic based on endpoints  
**Canary Deployment**: Route traffic between new and old version of site
