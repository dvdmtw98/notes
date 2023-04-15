---
title: Connectivity Mode
tags: [azure, cloud, database, sql]
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

---

[Azure Datastore Services](../Azure%20Datastore%20Services.md)