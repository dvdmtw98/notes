---
tags: [gcp, cloud, internal]
---

These services cannot be directly accessed but forms the underlying infrastructure for many of Google Cloud Services

### Spanner

Globally-consistent, scalable relational database  
[Cloud Spanner](../GCP%20Database%20Services/GCP%20Database%20Services.md#cloud-spanner) is the external offering of this service

### Borg

A cluster manager that runs hundreds of jobs, from many different applications across a number of clusters each with thousands of machines  
The open-sourced version of Borg became [Kubernetes](../../../Software%20Engineering/DevOps/Kubernetes/Kubernetes.md)

### Chubby

A distributed lock manager (DLM) as a service that temporarily prevents files and records from being used by another user or operation on a Virtual Machine

### Colossus

Cluster-level file system, successor to the Google File System (GFS) provides the underlying infrastructure for all [GCP Storage Services](../GCP%20Storage%20Services/GCP%20Storage%20Services.md), from Firebase to [Cloud SQL](../GCP%20Database%20Services/GCP%20Database%20Services.md#cloud-sql) to [Cloud Storage](../GCP%20Storage%20Services/Cloud%20Storage.md)
