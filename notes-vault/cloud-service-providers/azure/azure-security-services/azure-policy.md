---
tags:
  - azure
  - cloud
  - security
  - policy
title: Azure Policy
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Policies allow to make decisions based on the properties of a resource  
A policy can be created on (almost) all properties of any given resource  
The properties of the resources are exposed as aliases  
A rule can be written around the policy to make a decision (cause a effect) based on the value received of the property defined in the policy  

A policy is an single rule  
Multiple policies can be grouped together into an **Initiative** which allows for easier assignment and enforcement of the policies    
Policies are enforced at the Fabric level and cannot be bypassed by any method (though its possible to exclude resources from policies)

![[azure-policy.png|500]]

Policy can be assigned to any scope: Management group, Subscription, Resource Group, Resource  
Azure policies are inherited  
Policies do not check for user permissions (It is checked in a previous step)  
Policies are checked during the deployment of an resource  
Policies are only applied to Resources that are newly created or modified. For applying to older resources the remediation option can be used  

GitHub Actions have Actions that allow to apply Azure Policies as well as Scan for Compliance  
DevOps has built-in support for policies via **Gates** which can be enabled Pre or Post Deployment

### Policy Effects

* Deny: Fail deployment
* Audit: Allow deployment but raise exception
* Append, Modify: Modify the policy before the deployment happens

### Azure Policy for Kubernetes

For AKS Policies need to be explicitly enabled (Onboarding for Kubernetes Service)  
Once enabled services like Azure Defender can use the metrics from AKS to provide recommendations for compliance  
Regulatory compliance policies (GDPR, HIPAA, etc.) for AKS can be found in Security Center  

### Policy Best Particles

* Map Azure Policies to the written policies of the organization  
* Use Audit before using Enforce & Remediate  
* Broad policies at higher level and tighter as we go down the hierarchy  
* Have people responsible for tracking the compliance  
* Use good names and descriptions
