---
tags:
  - azure
  - cloud
  - database
  - sql
title: Connectivity Mode
date: 2024-01-28 14:15:56 -0600
---

Azure SQL database will connect to a gateway on port 1433  
When we request a connection to the DB we are connecting to the gateway (When connecting from On-premises)

### Proxy
Used for connection from outside the Azure network, proxied through the gateway  
Listens on port 1433

### Redirect
Establish an direct connection  
Reduces latency and improved throughput  
Intended for connections inside the Azure Network

### Default
If VM launched outside Azure Network uses proxy else uses Redirect  
Cannot use Kerberos security mode
