---
tags:
  - gcp
  - cloud
  - migration
title: GCP Migration Services
date: 2024-01-28 14:15:56 -0600
---

### Database Migration Service (DMS)
**When you're migrating open source relational databases**  
Serverless, easy, minimal downtime migrations to Cloud SQL

### BigQuery Data Transfer Service
Automate scheduled data movement into BigQuery using a fully managed data import service

### Migrate for Compute Engine
Formally called Velostrata  
**Used when migrating VMs**  
Migrate (lift and shift) servers and VMs from on-premises or another cloud to Compute   Engine with minor automatic modifications

* Continuously Replicate disk data from source VMs to GCP
* No downtime on the source via transfer
* Quickly **clone and test** migrated VM **test clones**
* Easily perform all the tasks within the Google Cloud Console

### Migrate for Anthos (and GKE)
**Used when migrating containers**  
Migrate VMs from on-premises or other clouds directly into containers in GKE and Anthos

Allows to use auto-generated container artifacts  
Migrate for Anthos is offered at no charge and no Anthos subscription is required (Charges for compute, storage, network, etc of GCP still apply)

### Storage Transfer Service
**When you are migrating storage data**  
Transfer data between loud storage services such as AWS S3 and Cloud Storage

* Move or backup data from other cloud storage providers or from your on-premises storage
* Move data from one Cloud Storage **bucket to another** (Cross region replication)
* **Periodically move data** as part of a data processing pipeline or analytical workflow

### Transfer Appliance
**When you have TBs of data, and its faster to ship physical drives**  
Ship large volumes of data to Google Cloud using rackable storage

Comes in two drive configurations 100 TB and 480 TB  
Transfer Appliance can be mounted as an NFS volume

When to use Transfer Appliance:
* The data size should be at least 10TB
* It will take more than 1 week to upload data over the network
