---
title: Splunk Data Model
tags:
  - siem
  - splunk
  - security
date: 2025-09-27 21:04:38 +0530
updated: 2026-02-22 20:14:35 +0530
---

A data model is a hierarchy of datasets.  
A data models make it easy to correlate events from different sources.  

### Dataset Types
The 1st level datasets created in a data model are called root datasets.  
Child datasets automatically inherit all fields from the parent dataset.  

#### Event Dataset
A constraint has to be provided to create the dataset.  
The constraint cannot contain any command that creates statistics.  
The metadata fields of the events are automatically inherited by the dataset.  

**Auto-extraction** allows us to add fields that are present in the base data.  
Index has to be **added** as a field even though its part of event metadata.  
For each field the field name, datatype, and flag can be configured.   
Flags control the visibility of the field in the pivot tool (Default: Optional).  

Eval, lookup, regex, and geo-ip fields show up under the calculated field section.  
The fields **Display Name** will only be visible in the pivot UI.  
Field name is the real name of the field (name to be used in `tstats` command).  

#### Search Dataset
A search query is used to determine the data to load into the dataset.  
The query should include transforming commands.

#### Transaction Dataset
The events generate by using the transaction command are loaded into the dataset.  
A root transaction dataset cannot be created without a root event dataset.  
All fields from the base event dataset are automatically added into the new dataset.

### Pivot Tool
The **pivot tool** allows us to create reports and dashboards without SQL queries.  
When selecting a split field we can configure its display name and sort order.  

The result of pivot will be a statistics table when can also be converted to a chart.  
The result generated using the pivot tool also has an underlying pivot command that can be executed from Search.  

### Acceleration
Tool used to speed up data models with extremely large datasets.  
Acceleration summaries create **time-series index** (`.tsix`) files that contains pre-aggregated summary data.  
These summaries are used by `tstats` command to speed up the query.

The raw events in the index are stored as compressed journal files (`.gz`).  
The indexed fields are stored in time-series index (`.tsix`) files.  

With persistent data model acceleration, all fields in the data model become indexed (accelerated) fields.  
**Private** data models **cannot** be accelerated.  
Accelerated data model **cannot** be **edited**.  

Search and transaction datasets cannot benefit from persistent acceleration.  
Only admin and users with `accelerate_datamodel` capability can accelerate data model.  

### CIM (Common Information Model)
Splunk contains ~26 preconfigured data models.  
CIM is a methodology for normalizing data.  
It enables correlating data from different sources and source types.

CIM applies constraints on datasets using tags.  
Fields are normalized to load into CIM models using aliases.  

Acceleration is not enabled by default for CIM data models.  
The CIM Add-on comes packaged with Splunk ES (Enterprise Security) & Splunk PCI Compliance App.  

```
| datamodel Web Proxy search
```

```
| from datamodel:Web.Proxy
```

### Tstats

![[splunk-data-model-query.png|640]]

`tstats` command is used to query data model.  

```
index=main sourcetype=auth_logs
| search action="failure" OR action="success"
| stats count(eval(action="failure")) AS failures count(eval(action="success")) AS successes by src
```

With data models we use object oriented approach to access the datasets.

```
| tstats count(eval(Authentication.action="failure")) AS failures count(eval(Authentication.action="success")) AS successes
    FROM datamodel=Authentication.Authentication
    BY Authentication.src
```

Tstats allows us to search accelerated data much faster than normal search.  
