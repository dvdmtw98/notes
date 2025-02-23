---
title: Azure Service Plan
tags:
  - azure
  - compute
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is the underlying VM (compute) that powers Web App, Function App and Logic App  
On Scaling Out the Load Balancer is responsible for routing traffic between the VMs  

### Non-Isolated Plans

The Free and Shared Tiers use Infrastructure that is shared across multiple customers    
Standard and Premium Plans are designed for production usage and supports autoscaling

### Consumption Plan

A special plan that is used by serverless services (Function App, ACI)  
It supports autoscaling but when used with Functions has a timeout of 5 mins 

### Isolated Plans

Isolated Service Plans run on Isolated VMs that are inside a VNet  
Also called Isolation with App Service Environments (ASE)  
Designed for High Scale, Memory Intensive Workloads  
Apps can connect via VPN to on-prem resources  

If configured for External Access then Virtual IP Address (VIP) is used to connect to ASE  
If configured for only Internal Access then the IP Address of Internal Load Balancer is used 
