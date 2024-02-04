---
tags:
  - networking
  - device
  - appliance
title: Load Balancer
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

They are used in high-availability network to distribute traffic across multiple servers  

Load Balancers are also called Reverse Proxies as the client is not aware of the target    
Load Balancer is just a special Reverse Proxy (Extra metadata to select correct target)  
They are of two types: Layer 4 and Layer 7  

### Layer 4

At layer 4 the IP Addresses and Ports of the Packets are visible  
Using the configured algorithm (Round Robin, Least Connections, etc.) the load balancer decides which server the request should to forwarded

The load balancer using [[nat-network-address-translation|NAT (Network Address Translation)]] changes the source and target IP Address of the packet received  
Source Address is changes to the address of Load Balancer and the target address is changed to the IP Address of the server that will process the request

#### Features
Secure (As can't look at packets data)  
Faster in comparison to Layer 7 Load Balancers  
One TCP connection (The packet sent from the client is the one that is received by target)
Can't be used with Microservices (Can't look at the data and forward request based on API endpoints)  
No caching 

### Layer 7

Also called Application Delivery Controller (ADC)  
At Layer 7 the data of the packets is visible  
The request from the client on reaching the Load Balancer is decrypted  
An new packet is created with the source address as load balancer and target address as target server address  
The Load Balancer can changes the headers that was set by the client and add new ones

#### Features
Smart Load Balancing (Look at the data and make decisions)  
Supports caching  
Works with microservices  
Decrypts Data (TLS Termination)  
Two TCP Connection (Initial connection terminated by Load Balancer)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aKMLgFVxZYk?si=p46kRLKqv9LNVnjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
