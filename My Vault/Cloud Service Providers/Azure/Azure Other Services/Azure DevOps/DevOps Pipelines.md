---
title: DevOps Pipelines
tags: [azure, cloud, devops, cicd, orchestration]
---

### DevOps Pipelines

Azure DevOps Pipelines provide YAML based and graphical (legacy) approach for building pipeline  
**Deployment gates** gives us additional control over the start and end of stages in a release pipeline

![DevOps Pipeline Components](../../images/azure-devops-pipeline-components.svg)

### Agents

Self-Hosted Agents are ideal when  we required a specific custom environment for our tools and/ or have some compliance requirement  
Deployment Groups are similar to Agent Pools (Pool of Agents that are scoped to a DevOps Organization) but instead are scoped to stages   

[Self-Hosted Agents](Self-Hosted%20Agents.md)

### DevOps Pipeline Triggers

#### Build Pipeline Triggers

**Push Trigger**: Start pipeline whenever code is pushed to DevOps  
**Pull Request Trigger**: Start pipeline on a pull request  
**Scheduled Trigger**: Cron job to run the pipeline  
**Pipeline Trigger**: Start a pipeline once another pipeline is complete  

#### Release Pipeline Triggers

**After Release**: Deploy after an artifact has been modified/ updated  
**After Stage**: Deploy once another stage in Pipeline completes  
**Manual Only**: Trigger pipeline manually

### References

- [Azure Pipelines New User Guide - Key concepts - Azure Pipelines | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops)
- [Stages in Azure Pipelines - Azure Pipelines | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/stages?view=azure-devops&tabs=yaml)

---

[Azure DevOps](Azure%20DevOps.md)  
[ARM Templates](../ARM%20Templates.md)