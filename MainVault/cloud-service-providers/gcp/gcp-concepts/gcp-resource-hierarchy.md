---
tags:
  - gcp
  - cloud
title: GCP Resource Hierarchy
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

![[gcp-resource-hierarchy.png|400]]

#### Domain
Primary identity of the organization  
Linked to either a Google Workspace or Google [[cloud-identity|Cloud Identity]]  
An Google Workspace or [[cloud-identity|Cloud Identity]] Account can only have one organization

#### Organization
Root node of the Google Cloud hierarchy of resources  
Define settings, permissions and policies for all projects, folders, resources and [[cloud-billing-account|Cloud Billing Account]]s it parents

#### [[gcp-project-and-folders|GCP Project & Folders]]
They are used to group similar resources together for easy management and tracking

#### Labels
Categorize and Filter resources using key value pairs  
Great for cost tracking at a granular level
