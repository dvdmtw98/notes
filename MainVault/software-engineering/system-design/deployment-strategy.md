---
tags:
  - software
  - deployment
title: Deployment Strategy
date: 2024-01-28 14:15:56 -0600
---

### Blue Green Deployment

Blue and Green represent two production ready environments  
A flip in the network interface decides the instance that will receive the request    

The network flip makes the Staging environment the new production environment, and what was production becomes staging  
With this type of deployment we get the opportunity to **rollback** to the previous version if any issue arises  

Difficult to migrate databases using this approach  
**Draining**: Getting users (sessions) from the old server to the new server  
This is achieved in Azure using Application Gateway

### Rolling Deployment

We have more that one server hosting the application, and new versions of application is deployed gradually to the servers  
This type of deployment requires the new versions of the code to be backwards compatible

Risk is introduced gradually, if any issue occurs it will only effect a small percentage of the servers  

### Canary/Ring Deployment

A more sophisticated version of rolling deployment  
Different users will receive different versions of the application  

> [!INFO] What is a Canary ?
> - The name comes from a old mining particle  
> - Canary (type of bird) are more sensitive to toxic gases in the air, they acted as a danger detector  
> - If a canary fell over in its cage, it was clear that there was danger and everyone needed to be cleared  

In the software world a small subset of the end users act like the canary
