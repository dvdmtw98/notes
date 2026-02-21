---
title: Splunk
tags:
  - security
  - splunk
  - siem
date: 2024-01-28 14:15:56 -0600
updated: 2026-02-20 21:59:19 +0530
---

### Table of Content

- [[splunk-architecture|Splunk Architecture]]
- [[splunk-apps|Splunk Apps]]
- [[splunk-search|Splunk Search]]
	- [[splunk-commands|Splunk Commands]]
	- [[splunk-subsearch|Splunk Subsearch]]
	- [[splunk-lookups|Splunk Lookups]]
- [[splunk-visualization|Splunk Visualization]]
- [[splunk-knowledge-objects|Knowledge Objects]]
	- [[splunk-data-model|Splunk Data Model]]
- [[splunk-rest-api|Splunk Rest API]]

---

### Reports & Alerts

Scheduled Report priority can only be set by the admin  
Scheduled Reports always Run as Owner

Alerts: Scheduled or Real-time  
Real-time alert queries are executed continuously in the background   

Actions can be triggered when a Scheduled Report or Alert is executed.  
Alert is the recommended option when results have to be sent over email.  

### Commands

```bash
sudo $SPLUNK_HOME/bin/splunk start
```

### Shortcuts

`Ctrl + \` & `Ctrl + Shift + F`: Format query  
`Shift + Enter`: Create newline  
`Ctrl + Shift + e`: Expand the search (Expands all alias/macros)  
