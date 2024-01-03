---
tags:
- gcp
- cloud
- concept
title: GCP Resource Hierarchy
---

![GCP Resource Hierarchy|400](../images/gcp-resource-hierarchy.png)

### Domain

Primary identity of the organization  
Linked to either a Google Workspace or Google [Cloud Identity](../gcp-security-services/cloud-identity.md)  
An Google Workspace or [Cloud Identity](../gcp-security-services/cloud-identity.md) Account can only have one organization

### Organization

Root node of the Google Cloud hierarchy of resources  
Define settings, permissions and policies for all projects, folders, resources and [Cloud Billing Account](../gcp-support-and-billing/cloud-billing-account.md)s it parents

### [GCP Project & Folders](gcp-project-and-folders.md)

They are used to group similar resources together for easy management and tracking

### Labels

Categorize and Filter resources using key value pairs  
Great for cost tracking at a granular level