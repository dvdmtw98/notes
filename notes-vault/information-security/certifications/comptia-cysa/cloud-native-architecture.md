---
title: Cloud Native Architecture
tags:
  - cloud
  - application
updated: 2026-10-04 16:57:22 +0530
date: 2026-10-04 16:51:56 +0530
---

An approach to building and running applications that fully exploits the advantages of cloud computing.  
It is built using microservices, serverless functions, containers, and APIs.  
Users are responsible for securing the workloads and configurations.  

#### Microservices
Breaks an application into small, independent services, each responsible for a specific function.  

Good from security point of view, compromise of one service does not mean compromise of the entire application.  
Adds difficulty in monitoring as multiple services are involved and communication between them has to be analyzed.  

#### Serverless Computing
Does not mean there are no servers, but user do not mange the servers, they write a function, push it to a platform and the cloud provider handles everything else.  
Functions execute and terminate in milliseconds.  
Monitoring: AWS CloudWatch for Lambda, Azure Application Insights.  

#### Infrastructure as Code (IaC)
Infrastructure is often defined in code using tools like Terraform, AWS CloudFormation, and Ansible.  

IaC misconfiguration is a very common cloud attack vector.  
Tools: Checkov, Bridgecrew, Prisma Cloud  
