---
title: Azure Monitor
tags: [azure, cloud, monitor, alert, metric]
---

It is a comprehensive monitoring solution for collection and analyzing telemetry data  
It uses Logs and Metrics collected from the resources as the backbone for providing insights  

For some services like SQL server we need to manually enable auditing and monitoring before Azure Monitor can collect data  
For VM we need to install Log Analytics Agent for collecting its data

[Azure Alerts](Azure%20Alerts.md) can be configured to be sent when certain conditions are satisfied

![Azure Monitor|580](../images/azure-monitor.png)

<u>Azure Monitor Insights</u> can be used to view KPIs of resources  

[Azure Monitor overview - Azure Monitor | Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)

### App Center

App Center is an SDK similar to Application Insights that is used for Mobile Applications  
The insights from the Mobile App are sent to App Center from where we can configure App Center to send data to Application Insights  

App Center supports Distribution Groups a feature that allows to control access to releases  
- **Private**: Invitations by only email  
- **Public**: Early release users that can download from unauthenticated private links  
- **Shared**: For application testers for all applications in a organization  

---

[Azure](../Azure.md)