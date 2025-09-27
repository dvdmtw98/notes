---
title: Splunk Data Model
tags:
  - siem
  - splunk
  - security
date: 2025-09-27 21:04:38 +0530
updated: 2025-09-27 21:26:46 +0530
---

Splunk uses CIM (Common Information Model) to assign a consistent structure and naming to data.  
Allows us to easily search across diverse data sources.  
Data Models make it easy to correlate events from different sources.  

The data that is mapped to the data model depends on the **index** and **tag**.  
Tags are values/categories that can be assigned to Event Types.  

Field names can be aliased to match the names in the data model.  
This is performed at search type by the Splunk head so will introduce a small delay.  

### Event Types
Event types allow us to assign names to queries/searches (category for events).  
Event Types can be defined with priority and color.  
Event Types with priority 1 has the highest importance (will override other colors).  
Stored in: `eventtypes.conf`  

```
index=main eventtype=failed_login host=webserver1
| table _time user host
```

### Tstats

![[splunk-tstats-1.png|640]]

`tstats` command is used to query data model.  
