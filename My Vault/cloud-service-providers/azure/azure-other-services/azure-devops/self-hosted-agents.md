---
tags:
- devops
- cicd
- orchestration
title: Self-Hosted Agents
---

To use a machine that we own as a Agent we need to install the agent software on the machine

* Self-Hosted Agents allow us to create custom environments with dependencies that are tailored to our needs  
* It decreases the build latency. Since we have the agent configured in advanced we don't have to wait for a cloud agent with the configuration we require to become available
* Allows incremental build. When using cloud agents the VMs are deleted as soon as the build is complete hence every time a new build is started the source code needs to be build from start

Parallel builds in DevOps are limited based on Project Visibility (Public or Private), Number of Jobs and Duration of the Jobs

---

[Azure DevOps](azure-devops.md)