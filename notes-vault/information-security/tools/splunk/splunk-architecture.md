---
title: Splunk Architecture
tags:
  - security
  - splunk
  - siem
date: 2025-09-06 18:37:07 +0530
updated: 2026-09-10 16:06:06 +0530
---

Splunk is made up of Processing Components and Management Components.  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fv4_iJGBdvQ?si=Dg1EhK20vaNWt_Ed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Processing Components

![[splunk-processing-components.png|420]]

#### Forwarder
Collects the data from the various systems (using agents).  

Two types:  
**Heavy Forwarder**: Provides basic processing, transforming & filtering functionality.  
**Universal Forwarder**: Lightweight and only ingests data from various sources.  

![[splunk-data-pipeline.png|640]]

The stage from License Meter is called Indexing.

#### Indexer
Converts the data from the forwarder into events that are stored on disk.  
The indexer also allows us to define transformations to be performed on the data.  

Indexers also communication with each other for data replication.  
Replication Factor: Defines the number of data copies.  

Before passing through the Indexer the data goes through the license master.  

Splunk stores the raw data in a compressed format along with the indexed data.  
Indexer can also directly ingest raw data without going through the forwarder.  

Data in index is stored into buckets (Hot, Warm, Cold).  
Data can only to indexed into the hot bucket.  

#### Search Head
Queries the data from the index and allows us to create dashboards using it.  
From search heads point of view indexers are search peers.

Search Head clusters can optionally be configured with a load balancer.  
Allows users to access search heads through a single instance.  

In Search Head Cluster one of them will behave as captain.
This node coordinates cluster activities like job scheduling, replication activities.  
Captain can move between cluster members.  

### Management Components

![[splunk-components-distributed.png|640]]

#### Cluster Manager
Manages configurations of its peer nodes (indexers).  
Coordinates the replication activities.  
Tells search heads were it can find data.  
Orchestrates activities if a peer node goes down.  

#### Cluster Deployer
Distributes apps and configurations to cluster members (Search Heads).  

#### License Manager
Assigns license volumes to other Splunk components (license peers) in a distributed environment.  
Measures usage:
- Volume of data being indexed per day.  
- Amount of resource (vCPU) usage across deployment.  

#### Deployment Server
Manages all the Forwarders.  

#### Monitoring Console
Monitors the entire Splunk Deployment.  

### Deployment Models

#### Single Instance
Indexing less than 20GB/day
Less than 10 forwarders and no more than 100 forwarders.  
Less than 10 users.  
Search Head and Indexer is a single Splunk instance.  

#### Small Enterprise
Indexing between 20 and 100GB/day.  
A few hundred (100 to 200) forwarders.  
Between 10 and 100 users.  
Would require 2-3 indexers (no cluster) with a separate search head.

#### Medium Enterprise
Between 100 and 300GB/day.  
Hundreds to few thousand forwarders.  
Hundreds of users.  
Would require indexer clustering with more than 3 indexers.  
Recommended to use search head cluster.  

#### Large Enterprise
Between 300 and many TB/day.  
Many thousands of forwarders.  
Potentially thousand of users.  
Would require indexer clustering with more than 3 indexers.  
Recommended to use search head cluster.  
