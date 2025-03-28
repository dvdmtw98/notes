---
title: Azure Pipelines
tags:
  - azure
  - cloud
  - devops
  - cicd
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### DevOps Pipelines

Azure DevOps Pipelines provide YAML based and graphical (legacy) approach for building pipeline  
**Deployment gates** gives us additional control over the start and end of stages in a release pipeline

![[azure-devops-pipeline-components.svg|DevOps Pipeline Components]]

### Agents

Self-Hosted Agents are ideal when we required a custom environment for our tools and/ or have some compliance requirement  

**Agent Pool**: Pool of Agents that are scoped to a DevOps Organization

Deployment Group are a logical group of machines that are scoped to stages (DEV, QA, PROD)  
They are a set of machines are the configured to be used for a specific stage  

[[self-hosted-agents|Self-Hosted Agents]]

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

[Azure Pipelines New User Guide - Key concepts | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/key-pipelines-concepts?view=azure-devops)  

[Stages in Azure Pipelines - Azure Pipelines | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/stages?view=azure-devops&tabs=yaml)  

[Build Container Images to Deploy Apps - Azure Pipelines | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/containers/build-image?view=azure-devops#what-agents-can-i-use-to-build-container-images)
