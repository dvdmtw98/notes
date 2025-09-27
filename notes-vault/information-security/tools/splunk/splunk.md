---
title: Splunk
tags:
  - security
  - splunk
  - siem
date: 2024-01-28 14:15:56 -0600
updated: 2025-09-27 21:04:46 +0530
---

### Table of Content

- [[splunk-architecture|Splunk Architecture]]
- [[splunk-apps|Splunk Apps]]
- [[splunk-search|Splunk Search]]
	- [[splunk-subsearch|Splunk Subsearch]]
- [[splunk-data-model|Splunk Data Model]]
- [[splunk-fields|Splunk Fields]]
- [[splunk-commands|Splunk Commands]]

---

### Enterprise Security
ES → Content → Content Management  
We can see all Correlation Searches and Analytic Stories.  

### Lookups
It is used to enrich the indexed data by bringing in additional fields from external sources.  
Lookups match one or more fields in our events with fields in a lookup table, then adds corresponding fields from the lookup table to your events when a match is found.  

---

### Reports & Alerts

Scheduled Report priority can only be set by the admin  
Scheduled Reports always Run as Owner

Alerts: Scheduled or Real-time  
Real-time alert queries are executed continuously in the background   

Actions can be triggered when an Scheduled Report or Alert is executed  

### Visualizations

`| table field1 field2`: Returns data in a tabular manner  
`| addtotals`: Creates a row or column with some of all numeric values  
`| fieldformats`: Modify data without changing the underlying data  

`| iplocation`: Adds country and city for IP Addresses using an external database  
`| geostats`: Cluster IP addresses on a map

To create choropleth maps `.kmz` files that have the boundaries are required  
`! geom`: Link indexed data with the polygonal data from the KMZ files

### Transforming Commands

`| chart`  
Over clause defines x-axis  
By clause adds granularity (Multi-series plot)  
Over clause with 2 fields will be treated as a multi-series plot

`| timechart`  
Charts where time is always the x-axis  
The output is always buckets over the time range (Span to change bucket)    
For a 60 min search the span is default 1 min  
For a 24 hour search the span is default 30 min

### Knowledge Objects

Data Interpretation (Fields, Extracted Fields, Calculated Fields)  
Data Classification (Event Types, Transactions)  
Data Enrichment (Lookups, Workflow Actions)  
Data Normalization (Tags, Fields Aliases)  
Data Models (Structured Datasets)
