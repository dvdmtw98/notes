---
title: App Function App
tags: [azure, compute, serverless]
---

Allows to deploy and run small **stateless** pieces of code (functions) in the cloud  
PaaS (Platform as a Service) offering  
Supports autoscaling  
Min Nodes : 0  
Max Nodes: 200  

Functions use [Azure Service Plan](Azure%20Service%20Plan.md) as the underlying compute  
Docker Containers can also be deployed to Function App  
Functions code is executed via Triggers

**Authentication**  
Anonymous: No key is required  
Function: Key created per function  
Admin: Key used across function app

**Pricing**  
Consumption Plan, App Service Plan & Premium Plan  
Consumption Plan has a timeout of 5mins  
Premium Plans provide better speed and security  
Supports reserved instances & can autoscale  

**Custom Handlers**  
They allow implementing functions using unsupported languages  
The language being used needs to support creating a basic web server  

#azure-compute-service #azure-serverless-service

### Azure Durable Functions

Create stateful, serverless workflows (orchestrations)

**Client (Starter) Function**: Initiates the orchestration. Can be called using any trigger  
**Orchestrator Function**: Defines the steps in the workflow. The steps can be performed in sequence or parallel. Responsible for error handling  
**Activity Function**: Performs a step in the workflow  
**Entity Function**: Responsible for managing state information between the activities

[Function types in Azure Durable Functions | Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-types-features-overview)

---

[Azure Compute Services](Azure%20Compute%20Services.md)