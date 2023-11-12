---
tags: [analytics, databricks]
---

### All Purpose Cluster

**<u>Standard Cluster</u>**  
Can be used by a single-user only. Supports auto termination by default. Python, R, Scala and SQL supported. Has 1 worker node

**<u>High Concurrency Cluster</u>**  
Used for large workloads and can be shared by multiple-users as well. Scala is not supported. Auto termination by default not supported. Allows Table Access Control

**<u>Single Node Cluster</u>**  
Only has one node (Driver/ Master node no Worker node). Light weight analysis. Supports auto termination by default

### Job Cluster

It is a cluster that is spun up for running a job and is terminated as soon as the job is done  
Used to deploy jobs/ ETL process that can be executed automatically  
They are cheaper than All Purpose Clusters

### Pools

They are idle nodes that are kept in standby which can be used quickly when required without having to spin up an new cluster from scratch

[Configure clusters - Azure Databricks | Microsoft Docs](https://docs.microsoft.com/en-us/azure/databricks/clusters/configure)

---

### Autoscaling

Automated (Job) clusters on all tiers supports optimized auto scaling  
All Purpose in Standard Tier supports standard auto scaling while in Premium tier supports optimized auto scaling

---

### Credential Management

To access credentials stored in [Azure Key Vault](../../Cloud%20Service%20Providers/Azure/Azure%20Security%20Services/Azure%20Key%20Vault.md) from Databricks we needs to create a Secret Scope  
Databricks supports credential passthrough (Advanced Option) which allows to access other services using [Azure Active Directory (AAD)](../../Cloud%20Service%20Providers/Azure/Azure%20Security%20Services/Azure%20Active%20Directory/Azure%20Active%20Directory%20(AAD).md)

---
