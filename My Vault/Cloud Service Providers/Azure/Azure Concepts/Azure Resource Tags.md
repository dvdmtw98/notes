---
title: Azure Resource Tags
tags: [azure, cloud, concept]
---

Allows to add extra information to resources (They are Key Value pair)  
Tags are another way to group resources in Azure similar to resource groups  
Multiple tags can be assigned to a resource

Tags can be used as an variable that will be used by your scripts for automation  
Tags can be assigned at the Resource Group and Subscription level as well (Tags are not automatically inherited by resources)  
Two tags with the same name cannot be assigned to the same resource

`hidden-link` is a special type of tag which will commonly by encountered when working with ARM templates. They are Azures internal tags used to link services to the resource blade.

---

[Azure](../Azure.md)