---
title: Azure Compute Services
tags: [azure, cloud, compute]
---

### Virtualization

Emulation of physical hardware  
Allows to have different virtual hardware configuration based on machine/app  
Allows to install different OS per machine/app  
Since each virtual machine is independent of each other it has its own FS, ports, services, storage, etc.

![VM and Containers|600](../images/virtual-machines-and-containers.png)

### Azure Virtual Machine

**Components**: VM Size, Networking, OS Image, Virtual Disk (VHD)  
Allows to use custom image that are created and save in Blob storage  
Max Nodes : 1

It is IaaS (Infrastructure as a Service)  
We have total control over the OS and the services  
Does not provide autoscaling  
VMs are are billed even in the Stopped state (Storage Cost of the data that is stored on the VM disc)

Best suited for:
* Custom software requiring custom configuration
* Lift and Shift (Moving On premises services to the Cloud as it is)

Application/Scenarios: Web apps, Databases, Jump box, etc.

VM Provisioning  
**Azure CLI**: Separate command required for creating VM and opening port  
**PowerShell**: Credentials objects needs to be created which is passed to the command to create VM. Port can be opened in the same command itself

### Virtual Machine Scale Set

Choose an image which is automatically scaled by creating multiple instances of the image  
This is hidden behind an Load Balancer  
The Users are redirected to one of the VMs in the Scale Set  
Max Nodes : 1000/ 600 (Depending on Image Selected)

Has auto scaling feature. Can be manually or automatically scaled based on need

### Azure Container Instances (ACI)

ACI is created in a Container Group which is a VM on which the container with run  
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
Also called as Serverless Container  
No autoscaling  
Min Nodes : 0 (Jobs like running scripts)  
Max Nodes : 20

Use cases:
* Small and simple web apps
* Background jobs
* Scheduled Scripts

#azure-serverless-service 

### Azure [Kubernetes](../../../Software%20Engineering/DevOps/Kubernetes/Kubernetes.md) Service (AKS)

Container orchestrator were we can create container Image or use Pre created Images  
These Images are managed by AKS which creates an Node (VM) on which the container runs  
Once the Nodes are deployed AKS allows users to access the Containers through a load balancer

Allows Autoscaling  
PaaS (Platform as a Service)  
Can be used to deploy almost anything  
Min Nodes : 3  
Max Nodes : 100

### App Service

Used to deploy Web Applications  
We need to create an Package which will be then deployed by App Service on multiple nodes which will be accessible to the users from the web

PaaS (Platform as a Service)  
Supports multiple programming languages and containers  
Autoscaling  
Max Nodes : 20/100 (Depending on Pricing Tier)

### Web App for Container (App Service)

Service used for deploying Web Applications that are containerized in App Service

### Azure Functions

Allows to deploy an small piece of code  
Create a package and deploy using AFs which are run on Nodes which are accessible as a service over the net

PaaS (Platform as a Service)  
Serverless  
Autoscaling

Two pricing plans:

* Consumption based plans
* Dedicated plans

Used for designing macro/nano services  
Min Nodes : 0  
Max Nodes: 200

#azure-compute-service #azure-serverless-service

### Azure Service Fabric

Microsoft's native container orchestrator similar to [Kubernetes](../../../Software%20Engineering/DevOps/Kubernetes/Kubernetes.md)  
It is a distributed systems platform that allows us to run stateful applications

### Azure Batch

Allows to run large scale parallel and High Performance Computing (HPC) workloads on nodes (Virtual Machines) in a cluster

---

[Azure](../Azure.md)