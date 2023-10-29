---
title: Azure Firewall
tags:
  - azure
  - cloud
  - security
  - network
---

It is an service that allows to monitor incoming and outgoing traffic  
It is PaaS (sometimes called Firewall as a Service)  

Has high availability and high scalability  
Supports FQDN (Fully Qualified Domain Name) filtering  
Integrated with [Azure Monitor](../Azure%20Other%20Services/Azure%20Monitor/Azure%20Monitor.md) for logging and analytics

![Azure Firewall|500](../images/azure-firewall.png)

Azure Firewall is generally created in its own VNet  
Other VNet are configured to pass through this central VNet