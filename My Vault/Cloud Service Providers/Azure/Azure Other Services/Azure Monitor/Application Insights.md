---
title: Application Insights
tags: [azure, cloud, metrics, logs]
---

Application Performance Management (APM) service  
Supports live monitoring, logging and performance analysis  

Support client-side and server-side monitoring  
Can be setup for Azure as well as non-Azure services  
Application Insights are tracked using an unique GUID (Instrumentation Key)  

Request rates, Dependency rates and Exceptions are the key metrics monitored  
Page views, Load Performance, user and session count can also be tracked

[Azure Application Insights log-based metrics - Azure Monitor | Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/app-insights-metrics)

### Telemetry Views

**Application Map**: Visual representation of application along with its dependencies  
**Smart Detection**: Automatic detection for failure and performance anomalies  
**Usage Analysis**: User and Session Data  
**Live Metrics Stream**: See logs as they are generated  
**Failure**: Provides details about the exceptions that have occurred in the system

### Web Test Types

**URL Ping**: Ping URL to check for availability  
**Multi-step Web**: Sequence of web request for more complex cases  
**Custom**: Create custom application to track availability

---

### App Center

It is an SDK similar to Application Insights that is used for Mobile & Desktop Applications  
The insights from the Application is sent to App Center from where the data can be imported into Application Insights  

App Center supports Distribution Groups a feature that allows to control access to releases  
- **Private**: Invitations by only email  
- **Public**: Early release users that can download from unauthenticated private links  
- **Shared**: For application testers for all applications in a organization  

---

[Azure](../../Azure.md)