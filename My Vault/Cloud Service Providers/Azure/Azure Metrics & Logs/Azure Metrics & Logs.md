The metrics of all resource are stored in the metrics store for 90 days  
The metrics store is a timeseries database  
It can additionally be sent to a target as required

To view the KPI of any service [Azure Monitor](../Azure%20Billing%20&%20Support/Azure%20Monitor.md) Insights is a great starting place

---

### Azure Logs

They are not stored anywhere by default, needs to be manually saved  
The Diagnostic Setting blade under service is used to specify the target for data  
Targets: [Azure Storage Account](../Azure%20Storage%20Account/Azure%20Storage%20Account.md), Event Hub, [Log Analytics Workspace](Log%20Analytics%20Workspace.md)

Storage Account: Cheap long term storage  
Event Hub: Send to External Solutions  
Log Analytics: Storage & Analytical Queries

[Azure Policy](../Azure%20Security%20Services/Azure%20Policy.md) can also be used to setup Logging as part of Governance posture of the organization for all the resources

---

### Sources of Diagnostic Log

* [Azure Active Directory (AAD)](../Azure%20Security%20Services/Azure%20Active%20Directory%20%28AAD%29.md) contains logs related to Audits & Sign-In. In the free ADD skew the data is stored for 7 days while Premium stores for 30 days
* At the Subscription level there is Activity Log which houses the activity information & service health details of resource in that subscription (Has a 90 day rentention)
* At the Resource level we have Metrics & Logs which are different based on the resource
* Guests/ Extensions/ Agents also spit out Metrics & Logs. Logs from this level can only be sent to Log Analytics (but from Log Analytics they can be exported to Event Hub & Storage Account)
