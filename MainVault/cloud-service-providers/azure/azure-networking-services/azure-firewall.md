---
tags:
  - azure
  - cloud
  - security
  - networking
title: Azure Firewall
date: 2024-01-28 14:15:56 -0600
---

It is an service that allows to monitor incoming and outgoing traffic  
It is PaaS (sometimes called Firewall as a Service)  

Has high availability and high scalability  
Supports FQDN (Fully Qualified Domain Name) filtering  
Integrated with [[azure-monitor|Azure Monitor]] for logging and analytics

![[azure-firewall.png|500]]

Azure Firewall is generally created in its own VNet  
Other VNet are configured to pass through this central VNet
