---
title: Azure Metrics & Logs
tags:
  - azure
  - cloud
  - alert
  - metric
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Azure Metrics
Numeric values that describe some aspect of the system at a particular time  
Metrics of all resource are stored in the metrics store (timeseries data store) for 90 days  
Data from the store can be sent to a target as required

### Azure Logs  
Logs are events that occurred within the system (It can be unstructured data with timestamp)  
The logs for resources are not stored anywhere by default, needs to be manually saved  

### Diagnostics Settings

This blade shows the types of logs and metrics that can be captured for a resource   
Targets: [[azure-storage-services|Azure Storage Services]], Event Hub, [[log-analytics-workspace|Log Analytics Workspace]]

Storage Account: Cheap long term storage  
Event Hub: Send to External Solutions  
Log Analytics: Storage & Analytical Queries

Diagnostic Settings can be enabled using Azure CLI, PowerShell, ARM Templates, REST API and [[azure-policy|Azure Policy]]  
Using Policies the setting can be enabled for all resource of a type

#### Sources of Diagnostic Data

* [[azure-active-directory-aad|Azure Active Directory (AAD)]] contains **logs** related to Audits & Sign-In. In the free ADD skew the data is stored for 7 days while Premium stores for 30 days
* At the Subscription level there is **Activity Log** which houses the activity information & service health details of resource in that subscription (Has a 90 day retention)
* At the Resource level we have **Metrics & Logs** which are different based on the resource
* Guests/ Extensions/ Agents also spit out **Metrics & Logs**. Logs from this level can only be sent to Log Analytics (but from Log Analytics they can be exported to Event Hub & Storage Account)
