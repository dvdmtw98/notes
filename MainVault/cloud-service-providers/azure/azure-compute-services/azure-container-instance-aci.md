---
tags:
  - azure
  - compute
  - container
  - serverless
title: Azure Container Instance (ACI)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

ACI resources are created in the Container Group which is a VM on which the container with be run  
Containers deployed in the same group share the VM, Networking, Storage and lifecycle  

When creating ACI we can specify the CPU and Memory required (Default: 1 core & 1.5 GB)  
Uses Azure Files to store persistent data that is used by the container  

To access containers deployed to ACI over the internet we need to provide the DNS label name  
Domain Name: `http://<domain-label-name>.<region>.azurecontainer.io`  
Containers can be made private to not have access to the internet  

**Restart Policy**: Always (Restart even if app exits gracefully), Failure and Never  
**Elastic Burst**: Provision container to handle the extra computing required by AKS  

Supports Windows and Linux Containers  
It is a serverless offering similar to Azure Functions

PaaS (Platform as a Service)  
No autoscaling  
Min Nodes: 0 (Jobs like running scripts)  
Max Nodes: 20

**Use cases**  
Small and simple web apps  
Background jobs  
Scheduled Scripts  
