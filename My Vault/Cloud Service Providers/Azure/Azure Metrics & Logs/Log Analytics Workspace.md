Also know as Azure Monitor Logs  
Azure Log Analytics + Azure Metrics Database = [Azure Monitor](../Azure%20Billing%20&%20Support/Azure%20Monitor.md)

An single subscription can have multiple Log Analytics Workspaces  
Each workspace belong to a specific region  
The pricing is based on the data ingested, retention period and operations performed  
The data is stored in the form of tables and KQL can be used to query the data

**<u>Access Control</u>**  
Require Workspace Permission: Must be granted access to workspace or table. No granular RBAC  
Use resource or workspace permissions: Uses RBAC. Default Setting
