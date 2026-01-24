---
title: Splunk
tags:
  - security
  - splunk
  - siem
date: 2024-01-28 14:15:56 -0600
updated: 2026-01-24 18:21:03 +0530
---

### Table of Content

- [[splunk-architecture|Splunk Architecture]]
- [[splunk-apps|Splunk Apps]]
- [[splunk-search|Splunk Search]]
	- [[splunk-commands|Splunk Commands]]
	- [[splunk-subsearch|Splunk Subsearch]]
	- [[splunk-lookups|Splunk Lookups]]
- [[splunk-visualization|Splunk Visualization]]
- [[splunk-rest-api|Splunk Rest API]]
- [[splunk-fields|Splunk Fields]]
- [[splunk-data-model|Splunk Data Model]]

---

### Enterprise Security
ES → Content → Content Management  
We can see all Correlation Searches and Analytic Stories.  

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

### Knowledge Objects

Data Interpretation (Fields, Extracted Fields, Calculated Fields)  
Data Classification (Event Types, Transactions)  
Data Enrichment (Lookups, Workflow Actions)  
Data Normalization (Tags, Fields Aliases)  
Data Models (Structured Datasets)

### Commands

```bash
sudo $SPLUNK_HOME/bin/splunk start
```