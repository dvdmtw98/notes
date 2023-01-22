**Azure Metrics**  
The metrics of all resource are stored in the metrics store (timeseries data store) for 90 days  
Data from the store can be sent to a target as required

**Azure Logs**  
The logs for resources are not stored anywhere by default, needs to be manually saved  

---

### Diagnostics Settings

The Diagnostic Setting blade under service is used to specify the target for data  
This blade also shows the types of logs and metrics that can be captured for a resource   
Targets: [Azure Storage Account](../Azure%20Storage%20Account/Azure%20Storage%20Account.md), Event Hub, [Log Analytics Workspace](Log%20Analytics%20Workspace.md)

Storage Account: Cheap long term storage  
Event Hub: Send to External Solutions  
Log Analytics: Storage & Analytical Queries

Diagnostic Settings can be enabled using Azure CLI, PowerShell, ARM Templates, REST API and [Azure Policy](../Azure%20Security%20Services/Azure%20Policy.md)  
Using Policies the setting can be enabled by resource types

---

### Sources of Diagnostic Data

* [Azure Active Directory (AAD)](../Azure%20Security%20Services/Azure%20Active%20Directory%20%28AAD%29.md) contains **logs** related to Audits & Sign-In. In the free ADD skew the data is stored for 7 days while Premium stores for 30 days
* At the Subscription level there is **Activity Log** which houses the activity information & service health details of resource in that subscription (Has a 90 day retention)
* At the Resource level we have **Metrics & Logs** which are different based on the resource
* Guests/ Extensions/ Agents also spit out **Metrics & Logs**. Logs from this level can only be sent to Log Analytics (but from Log Analytics they can be exported to Event Hub & Storage Account)