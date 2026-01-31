---
title: Splunk
tags:
  - security
  - splunk
  - siem
date: 2024-01-28 14:15:56 -0600
updated: 2026-01-28 22:28:09 +0530
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
- [[splunk-data-model|Splunk Data Model]]

---

### Reports & Alerts

Scheduled Report priority can only be set by the admin  
Scheduled Reports always Run as Owner

Alerts: Scheduled or Real-time  
Real-time alert queries are executed continuously in the background   

Actions can be triggered when a Scheduled Report or Alert is executed  

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

### Shortcuts

`Ctrl + \` & `Ctrl + Shift + F`: Format query  
`Shift + Enter`: Create newline  
`Ctrl + Shift + e`: Expand the search (Expands all alias/macros)  