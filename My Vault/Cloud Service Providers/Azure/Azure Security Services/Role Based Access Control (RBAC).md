---
title: Role Based Access Control (RBAC)
tags: [azure, cloud, security]
---

Provides fine grained access to Resources  
Allows to create custom roles as per need  
Scopes are hierarchical  

### Actions

Operations that can be performed on the services present in Azure

### Role

An collection of actions that can be performed  
An role can be assigned to an user or application identity  
Answers question: What can be done ?

### Security Principle

It can be a User, Group of Users, Service Principle (Service in Azure) or Managed identity (Role for a specific service)  
Roles can be assigned to an Security Principle  
Security Principle is an object (Identity) that can be assigned a role  
Answers question: Who can do it ?

### Scope

In Azure scope is management is hierarchy  
A scope can be a Management Group, Subscription, Resource Group, Resources  
Scope is one or more resource to which role is applied  
Answers question: Where can it be done ?

### Role Assignment

Attach Role Assignment to a Security Principal on a scope  
Role Assignments are additive i.e. assigned permission will be sum of all roles assigned

---