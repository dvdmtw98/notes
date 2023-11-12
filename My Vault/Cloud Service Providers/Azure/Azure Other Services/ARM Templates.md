---
tags: [devops, iac, azure, cloud]
---

ARM (Azure Resource Manager) Templates are JSON files build in a specific schema that allow to build Azure resources using code  
It is Microsoft's IaC (Infrastructure as Code) tooling  
They allow to define and build resources in consistent manner which in turn lowers administrative effort  

### Deployment Modes

**Complete**: Delete all the resources in RG that are not in ARM template and deploy resources  
**Incremental**: Ignore resources in RG that are not mentioned in template and update the properties of other properties as defined in template

### Nested and Linked Template

Nested and Linked Templates allow to modularize ARM Templates  
When using them only Incremental Deployment is supported  

Nested Template can defined inside in the `template: {}` node in template similarly linked templates are always defined inside the `templateLink: {}` node

When using Linked Template the template files need to be hosted in a globally location like like Blob Storage, GitHub which can be accessed by Resource Manager, it cannot be deployed from local machine

### Commands

```powershell
# Resource Group Level Deployments
New-AzResourceGroupDeployment ` 
	-ResourceGroupName <resource-group-name> `
	-TemplateFile <path-to-template> `
	-TemplateParameterFile <path-to-parameters>

# Subscription Level Deployment
New-AzSubscriptionDeployment `
	-Location <location> `
	-TemplateFile <path-to-template>
```

For deploying ARM Templates using Azure CLI and using [Azure Pipelines](Azure%20DevOps/Azure%20Pipelines.md) we need to create a Service Principal

```bash
# Create a Service Principal
az ad sp create-for-rbac 
	--name myServicePrincipalName \
	--role contributer \
	--scopes /subscriptions/subscriptionID/resourceGroups/resourceGroupName

# Create Resource Group Level Deployment
az deployment group create \
	--resource-group <resource-group-name> \
	--template-file <path-to-template>
	--parameters <path-to-parameters>

# Create Subscription Level Deployment
az deployment sub create \
	--location <location> \
	--template-file <path-to-template>
```

---

[Azure](../Azure.md)
