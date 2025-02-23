---
title: GCP Serverless Services
tags:
  - gcp
  - cloud
  - serverless
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Cloud Functions
It is Function as a Service (FaaS) offering  
Allows to choose a runtime, upload a single function code (Not full web apps)  
Intended for short lived applications  

#gcp-compute-service  #gcp-serverless-service

### Cloud Run
Develop and manage highly scalable containerized applications on a fully managed serverless platform or on [[anthos|Anthos]]  
Supports applications built using event-driven architecture  
Can scale based on the incoming requests  

#gcp-container-service  #gcp-serverless-service 

### [[app-engine|App Engine]]
It is a PaaS offering (Standard Environment is Serverless)  
Allows to quickly manage, build and deploy web apps on GCP  

#gcp-compute-service #gcp-serverless-service 

### Eventarc
It is an Serverless Event Bus Service  
Asynchronously deliver events from Google services, SaaS and our own apps  
It is used for application integration  

#gcp-serverless-service #gcp-developer-service 

### Knative
It is a Serverless K8 container service  
Allows to deploy and manage serverless, cloud-native applications for [[kubernetes|Kubernetes]]

### Workflows
It is a Serverless State Machine service  
Allows to orchestrate and automate Google Cloud and HTTP based API services 

#gcp-serverless-service #gcp-developer-service 

### BigQuery
It is a Serverless Data Warehouse  
Allows to store petabytes of data using a NoSQL wide-column database service  
Has build-in ML support  

#gcp-serverless-service #gcp-database-service

### [[cloud-storage|Cloud Storage]]
It is a serverless storage offering  
It is a object store that is highly available and distributed  
Stores objects with global edge caching  

#gcp-serverless-service #gcp-storage-service