---
title: Role Based Access Control (RBAC)
---

RBAC is an Authorization system present in Azure based on Azure Resource Manager (ARM)  
Provides fine grained access to Resources  
Scopes are hierarchical  
Allows to create custom roles as per need 

### Actions

Operations that can be performed on the services present in Azure

### Role

An collection of actions that can be performed  
An role can be assigned to an user or application identity  
Answers question: What can be done ?

### Security Principle

It can be a User, Group of Users, Service Principle (Service in Azure) or Managed identity (Role for a specific service)  
Roles can be assigned to an Security Principle  
SP is an object (Identity) that can be assigned a role  
Answers question: Who can do it ?

### Scope

In Azure scope is assigned as an hierarchy  
It can be an Management Group, Subscription, Resource Group, Resources  
Scope is one or more resource to which role is applied  
Answers question: Where can it be done ?

### Role Assignment

It is an combination of Role, Security Principle and Scope