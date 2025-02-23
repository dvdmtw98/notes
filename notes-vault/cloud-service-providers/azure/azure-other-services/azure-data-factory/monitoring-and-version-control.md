---
title: Monitoring & Version Control
tags:
  - azure
  - cloud
  - etl
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Monitoring

ADF can be monitored using the Native Interface which provides 45 days log storage of all the pipelines that are executed and run  
The Native Interface has a list of views that give more detailed information about the activities:

* Default View: List of triggered pipeline runs
* Triggered vs. Debug: Can view the pipelines what where fired for debugging purpose in a separate view
* Detailed Views: Some activities have their own views that gives us more detailed information about them
* Gantt View: Which gives an better visualization of concurrent runs
* Dashboards: This is not available in Synapse Analytics

ADF can also be connected with [[azure-monitor|Azure Monitor]] to get more detailed and historic logs of the activities performed. This option is generally used by enterprises  
If we need to view history of operations that where performed before 45 days Azure Monitor is the only option

### [[git|Git]] Integration

We can enable [[git|Git]] integration in ADF to allow for versioning of the Data Factory Solution  
The main branch is the default collaboration branch and other branches are called feature branches where new features are added and they are finally pulled into the main branch
