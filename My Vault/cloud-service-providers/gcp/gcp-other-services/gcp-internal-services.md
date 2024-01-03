---
tags:
- gcp
- cloud
- internal
title: GCP Internal Services
---

These services cannot be directly accessed but forms the underlying infrastructure for many of Google Cloud Services

### Spanner

Globally-consistent, scalable relational database  
[Cloud Spanner](../gcp-database-services/gcp-database-services.md#Cloud%20Spanner) is the external offering of this service

### Borg

A cluster manager that runs hundreds of jobs, from many different applications across a number of clusters each with thousands of machines  
The open-sourced version of Borg became [Kubernetes](../../../software-engineering/devops/kubernetes/kubernetes.md)

### Chubby

A distributed lock manager (DLM) as a service that temporarily prevents files and records from being used by another user or operation on a Virtual Machine

### Colossus

Cluster-level file system, successor to the Google File System (GFS) provides the underlying infrastructure for all [GCP Storage Services](../gcp-storage-services/gcp-storage-services.md), from Firebase to Cloud SQL to [Cloud Storage](../gcp-storage-services/cloud-storage.md)