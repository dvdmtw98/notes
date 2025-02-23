---
title: Azure Blueprints
tags:
  - azure
  - cloud
  - policy
  - security
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

A blueprint is an guide, a pattern or a design for making something  

**Blueprint Definition**: A collection of Azure Components (Resource Groups, Role Assignments, Resources, Policy Assignments) that can all be deployed with the click of an button. Describes what the blueprint should do  
**Blueprint Assignment** : Deploy all the resources in the Blueprint

It is used to automate the process of resource deployment in Azure  
The various components that can be used in Blueprints are called as Artifacts

![[azure-blueprints.png|300]]

Azure Blueprints are backed by [[azure-cosmos-db|Azure Cosmos DB]] and the blueprint objects are replicated to multiple regions  

Nearly everything deployed using Azure Blueprints can be deployed using [[arm-templates|ARM Templates]] 
For resources deployed using Azure Blueprints the relation between the Blueprint object and the deployed resource is maintained 

[How is Azure Blueprints different from ARM Templates - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/26851/how-is-azure-blue-prints-different-from-resource-m)
