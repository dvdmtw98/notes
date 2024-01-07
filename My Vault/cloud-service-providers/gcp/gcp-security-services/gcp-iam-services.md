---
tags:
- gcp
- cloud
- security
title: GCP IAM Services
---

### [Cloud Identity](cloud-identity.md)

It is a Identity as a Service (IDaaS) that centrally manages users and groups

### [BeyondCorp](beyondcorp.md) Enterprise

A zero-trust solution that enables secure access with integrated threat and data protection  
BeyondCorp is a set of rules and policies while BeyondCorp Enterprise is the service offering

### Identity Aware Proxy (IAP)

Lets you establish a **central authorization layer** for applications **accessed** by HTTPS, so you can use an application level access control model **instead of replying on network level firewalls**

We can define access policies centrally and apply them to all of your applications and resources  
IAP is only applicable for services hosted on [App Engine](../gcp-compute-services/app-engine.md), Compute Engine or an HTTPS Load Balancer

### Managed Service for Microsoft Active Directory

Use a highly available, hardened service running [Microsoft Active Directory](../../../operating-system/windows/microsoft-active-directory/microsoft-active-directory.md) (AD)  
Can be federated with [Cloud Identity](cloud-identity.md)

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