---
title: Splunk Architecture
tags:
  - security
  - splunk
  - siem
date: 2025-09-06 18:37:07 +0530
updated: 2025-09-19 22:52:14 +0530
---

![[splunk-architecture.png|640]]

Splunk is made up of Processing Components and Management Components.  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fv4_iJGBdvQ?si=Dg1EhK20vaNWt_Ed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Processing Components

![[splunk-processing-components.png|420]]

![[splunk-components-distributed.png|640]]

#### Forwarder
Collects the data from the various systems (using agents).  

Two types: Universal and Heavy.  
Heavy Forwarder provides some basic processing and transforming functions.  
Universal Forwarder is lightweight and only ingests data from various sources.  

#### Indexer
Converts the data from the forwarder into events that are stored as indexes.  
The indexer also allows us to define transformations to be performed on the data.  

Before passing through the Indexer the data goes through the license master.  

Splunk stores the raw data in a compressed format along with the indexed data.  
Indexer can also directly ingest raw data without going through the forwarder.  

![[splunk-data-flow.png|640]]

Data in index is stored into buckets (Hot, Warm, Cold).  
Data can only to indexed into the hot bucket.  

![[splunk-data-flow-2.png|600]]

#### Search Head
Queries the data from the index and allows us to create dashboards using it.  
In Search Head Cluster one of them will behave as captain.  

### Management Components

Deployment Server: Manages all the Forwarders.  
Indexer Cluster Master Node: Manages all the Indexers.  
Search Head Cluster Deployer: Manages all the Search Heads.  
License Manager: Measure the amount of data ingested daily.  
Monitoring Console: Monitors the entire Splunk Deployment.  
