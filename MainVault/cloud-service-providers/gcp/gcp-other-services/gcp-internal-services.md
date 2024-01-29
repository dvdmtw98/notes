---
tags:
  - gcp
  - cloud
  - internal
title: GCP Internal Services
date: 2024-01-28 14:15:56 -0600
---

These services cannot be directly accessed but forms the underlying infrastructure for many of Google Cloud Services

### Spanner
Globally-consistent, scalable relational database  
[[gcp-database-services#Cloud Spanner]] is the external offering of this service

### Borg
A cluster manager that runs hundreds of jobs, from many different applications across a number of clusters each with thousands of machines  
The open-sourced version of Borg became [[kubernetes|Kubernetes]]

### Chubby
A distributed lock manager (DLM) as a service that temporarily prevents files and records from being used by another user or operation on a Virtual Machine

### Colossus
Cluster-level file system, successor to the Google File System (GFS) provides the underlying infrastructure for all [[gcp-storage-services|GCP Storage Services]], from Firebase to Cloud SQL to [[cloud-storage|Cloud Storage]]
