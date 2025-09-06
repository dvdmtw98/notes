---
title: Splunk Core Components
tags:
  - security
  - splunk
  - siem
date: 2025-09-06 18:37:07 +0530
updated: 2025-09-06 18:37:45 +0530
---

![[splunk_deployment.png|500]]

#### Forwarder
Collects the data from the various systems (using agents).  

Two types: Universal and Heavy.  
Splunk Enterprise comes with Heavy Forwarder which enables ingestion of data from the local system.  
Universal Forwarder is a lightweight forwarder which ingests data from various sources.  

#### Indexer
Converts the data from the forwarder into events that are stored as indexes.  
The indexer also allows us to define transformations to be performed on the data.  

Before passing through the Indexer the data goes through the license master (measures the amount of data being ingested daily).  

Splunk stores the raw data in a compressed format along with the indexed data.  

#### Search Head
Queries the data from the index and allows us to create dashboards using it.  
