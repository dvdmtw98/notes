---
title: Elastic
tags:
  - security
  - siem
  - analytics
date: 2025-11-26 10:23:36 +0530
updated: 2025-12-14 20:30:00 +0530
---

Elastic Search was re-branded to Elastic in 2015.  

![[elk-stack.png|640]]

Beats, Agent and Logstash are used for ingesting data.  
Kibana is the interface through which end users interact with Elastic Stack.   

![[elk-data-ingest.png|640]]

### Data Ingestion

#### Logstash
Logstash is a server-side component.  
It provides functions that allows us to normalize and parse data.  
Useful on devices were software cannot be installed but exporting of logs is supported.  

#### Beats
Beats is a software that has to be installed on the system.  
It directly sends data to ElasticSearch but can be considered to forward the data to Logstash if additional parsing is required.

Beat comes in different flavors. Each supports different type of metrics.  
Filebeat: Files/logs and other data  
Metricbeat: Metric data  
Packetbeat: Network data  
Winlogbeat: Windows event logs  
Auditbeat: Audit data. Also used for Linux logs

#### Elastic Agent
Elastic Agent a single, unified way to add monitoring for various metrics.  
Is an evolution of Beats and similar to it is a client-side component.  
It is managed through Kibana.  
Ships data to ElasticSearch or Logstash.  
Has support for integrations that enhances its functionality.  
The Elastic Defender integration will turn the agent into a EDR.  

### Fleet
It is a page in Kibana that allows us to manage the Elastic Agents along with their configuration/policies.

![[fleet-overview.png|640]]

**Package Manager** manages the integrations provided by Elastic via. Beats and Elastic Agents.  
Integrations can also contains dashboards and visualizations.  

**Package Registry** online store that manages integrations and updates.  
**Artifact Registry** is online registry that is used for updating the Elastic Agent.  

Fleet Server sits between Elastic Agent and ElasticSearch.  
The data flows directly from Elastic Agent to ElasticSearch.  
The agent communicates with the Fleet Server for policy related information.  

### Elastic Common Schema (ECS)
Elastic Common Schema (ECS) is an open-source specification that supports data modeling.  
To be compliant the data needs to have the current field name and datatype.  

Data Normalization is performed using the ingest phase.  
Normalization can be performed by Agents, Beats, Logstash and ElasticSearch.  
Elastic also supports user defined pipeline that can be used with mutate filter to make the data compliant with ECS.  

### Data Structure
Data in ElasticSearch is saved in an index.  
An index is a collection of documents that share similar characteristics.  
Kibana now uses the term data views to refer to indexes.  
When a wildcard is used with a index (e.g. `ecs-zeek-*`) its called an index pattern.  

Documents contain data that are stored as key value pairs.  
The datatype determines which functions can be used on it.  

ECS defines common fields for ingesting data in ElasticSearch.  
Common fields support the uniform data modeling used in ECS.  
Field Types: core, extended, custom  
