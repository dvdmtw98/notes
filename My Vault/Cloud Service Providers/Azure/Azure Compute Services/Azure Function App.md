---
title: App Function App
tags: [azure, compute, serverless]
---

Allows to deploy and run small **stateless** pieces of code (functions) in the cloud  
PaaS (Platform as a Service) offering  
Supports autoscaling  

Functions use [Azure Service Plan](Azure%20Service%20Plan.md) as the underlying compute  
Docker Containers can also be deployed to Function App  
Functions code is executed via Triggers

Used for designing macro/nano services  
Min Nodes : 0  
Max Nodes: 200  

**Authentication**  
Anonymous: No key required  
Function: Key created per function  
Admin: Key used across function app

**Pricing**  
Consumption Plan, App Service Plan & Premium Plan  
Consumption plan has a timeout of 5mins  
Premium Plans provide better speed, security, supports reserved instance & can autoscale  

**Custom Handlers**  
They allow to implement function using unsupported languages  
The language being used needs to support creating a basic web server  

#azure-compute-service #azure-serverless-service

### Azure Durable Functions

Create stateful, serverless workflows (orchestrations)

**Client (Starter) Function**: Initiates the orchestration. Use be called using any trigger  
**Orchestrator Function**: Defines the steps in the workflow. The steps can be performed in sequence or parallel. Responsible for error handling  
**Activity Function**: Performs a step in the workflow

---

[Azure Compute Services](Azure%20Compute%20Services.md)