---
title: Azure Monitor
tags:
  - azure
  - cloud
  - alert
  - metric
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is a comprehensive monitoring solution for collection and analyzing telemetry data  
It uses Logs and Metrics collected from the resources for providing insights  

For some services like SQL server we need to manually enable auditing and monitoring before Azure Monitor can collect data  
For VM we need to install Log Analytics Agent for collecting its data

[[azure-alerts|Azure Alerts]] can be configured to be sent when certain conditions are satisfied  
<u>Azure Monitor Insights</u> can be used to view KPIs of resources  

![[azure-monitor.png|580]]

[Azure Monitor Overview | Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)
