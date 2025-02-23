---
title: Azure Web App
tags:
  - azure
  - compute
  - web
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

PaaS (Platform as a Service)  
Supports multiple programming languages and containers  
Supports Autoscaling  
Max Nodes : 20/100 (Depending on Pricing Tier)

> [!IMPORTANT] Web App Load Balancer Timeout  
> - Web Apps have a Timeout of 230 seconds which cannot be changed  
> - If some processing takes longer than 230 secs it is recommended to use Web Jobs and/or utilize pooling for the API 

### Web App for Containers

Service used for deploying Web Applications that are containerized in App Service
