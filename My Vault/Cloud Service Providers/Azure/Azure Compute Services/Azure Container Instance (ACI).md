---
title: Azure Container Instance (ACI)
tags: [azure, compute, container, serverless]
---

ACI resources are created in Container Group which is a VM on which the container with run  
Container deployed in the same group share the VM, Networking, Storage and lifecycle  

When creating ACI we can specify the CPU and Memory required (Default: 1 core & 1.5 GB)  
Uses Azure Files to store persistent data that used by container  

To access containers deployed to ACI over the internet we need to provide DNS label name  
Domain Name: `http://<domain-label-name>.<region>.azurecontainer.io`  
Containers can be made private to not have access from internet  

**Restart Policy**: Always (Restart even if app exits gracefully), Failure and Never  
**Elastic Burst**: Provision container to handle the extra compute required by AKS  

Supports Windows and Linux Containers  
It is an serverless offering similar to Azure Functions

PaaS (Platform as a Service)  
No autoscaling  
Min Nodes : 0 (Jobs like running scripts)  
Max Nodes : 20

**Use cases**  
Small and simple web apps  
Background jobs  
Scheduled Scripts  

#azure-serverless-service 

---

[Azure Compute Services](Azure%20Compute%20Services.md)