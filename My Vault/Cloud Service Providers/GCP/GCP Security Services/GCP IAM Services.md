---
tags: [gcp, cloud, security]
---

### IAM

Establish fine-grained identity and access management for GCP resources

### [Cloud Identity](Cloud%20Identity.md)

It is a Identity as a Service (IDaaS) that centrally manages users and groups

### [BeyondCorp](BeyondCorp.md) Enterprise

A zero-trust solution that enables secure access with integrated threat and data protection  
BeyondCorp is a set of rules and policies while BeyondCorp Enterprise is the service offering

### Identity Aware Proxy (IAP)

Lets you establish a **central authorization layer** for applications **accessed** by HTTPS, so you can use an application level access control model **instead of replying on network level firewalls**

We can define access policies centrally and apply them to all of your applications and resources  
IAP is only applicable for services hosted on [App Engine](../GCP%20Compute%20Services/App%20Engine.md), Compute Engine or an HTTPS Load Balancer

### Managed Service for Microsoft Active Directory

Use a highly available, hardened service running [Microsoft Active Directory](../../../Operating%20System/Windows/Microsoft%20Active%20Directory/Microsoft%20Active%20Directory.md) (AD)  
Can be federated with [Cloud Identity](Cloud%20Identity.md)

**<u>Key Features</u>**

* Compatibility with AD Dependent Apps
* Maintenance Free
* Seamless Multi-Region Deployment
* Hybrid Identity Support

### Resource Manager

Hierarchically manage resources on GCP

### Access Context Manager

Allows admins to define fine-grained, attribute based access control for projects and resources in GCP  
Allows to create access policies and to determine what level of access based on attributes such as : Device Type, OS, IP Address, User Identity  
Access polices are automatically created in GCP when certain services are deployed (Cannot be managed by customer)
