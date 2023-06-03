---
title: Azure Metrics & Logs
tags: [azure, cloud, alert, metric]
---

**Azure Metrics**  
Numeric values that describe some aspect of the system at a particular time  
Metrics of all resource are stored in the metrics store (timeseries data store) for 90 days  
Data from the store can be sent to a target as required

**Azure Logs**  
Logs are events that occurred within the system (It can be unstructured data with timestamp)  
The logs for resources are not stored anywhere by default, needs to be manually saved  

---

### Diagnostics Settings

This blade shows the types of logs and metrics that can be captured for a resource   
Targets: [Azure Storage Services](../../Azure%20Storage%20Services/Azure%20Storage%20Services.md), Event Hub, [Log Analytics Workspace](../../Azure%20Analytics%20Services/Log%20Analytics%20Workspace.md)

Storage Account: Cheap long term storage  
Event Hub: Send to External Solutions  
Log Analytics: Storage & Analytical Queries

Diagnostic Settings can be enabled using Azure CLI, PowerShell, ARM Templates, REST API and [Azure Policy](../../Azure%20Security%20Services/Azure%20Policy.md)  
Using Policies the setting can be enabled for all resource of a type

---

### Sources of Diagnostic Data

* [Azure Active Directory (AAD)](../../Azure%20Security%20Services/Azure%20Active%20Directory%20(AAD).md) contains **logs** related to Audits & Sign-In. In the free ADD skew the data is stored for 7 days while Premium stores for 30 days
* At the Subscription level there is **Activity Log** which houses the activity information & service health details of resource in that subscription (Has a 90 day retention)
* At the Resource level we have **Metrics & Logs** which are different based on the resource
* Guests/ Extensions/ Agents also spit out **Metrics & Logs**. Logs from this level can only be sent to Log Analytics (but from Log Analytics they can be exported to Event Hub & Storage Account)

---

[Azure](../../Azure.md)