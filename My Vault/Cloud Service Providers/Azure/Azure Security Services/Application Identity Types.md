---
title: Application Identity Types
---

There are three main types of objects in AAD  
Users, Group and Applications (Enterprise Apps)  
Application Identity can be further divided into two types "Service Principle" and "Managed Identity"

### Service Principal

Used for authenticating user scripts, automation tools/ code, etc. with AAD  
It is an account in AD that represents that Application in that tenant  
SP can authenticate using Secret or Certificate  
Service Principals can be restricted by using RBAC rules

If the SP is multi-tenant there will be a special Global Representation Object which will be created in the home tenant (Tenant in which Application was registered) and each Tenant will have a SP which can be used by the application


### Managed Identity

It is used to authenticate services and resources that are present in Azure  
Other than being used only for Azure resources they are exactly identical to Service Principal

They are of two types: **System assigned** and **User assigned**  
System assigned is managed by Azure and is created automatically when we create a new resource and no one knows its credentials  
User assigned is a separate object in Azure what we need to create and then assign to the Azure resources as required

---

**<u>References</u>**:

* [Demystifying Service Principals - Managed Identities - Azure DevOps Blog](https://devblogs.microsoft.com/devops/demystifying-service-principals-managed-identities/)