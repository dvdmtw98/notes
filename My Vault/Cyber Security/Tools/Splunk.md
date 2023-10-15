---
title: Splunk
tags:
  - security
  - concept
  - splunk
---

Transforming Commands: Commands that create statistics and visualizations

Splunk Job is active for 10mins  
Shared Splunk Job active for 7 days

Time, Index, Source, Host, Source Type are default fields in Splunk  
They are generated when Splunk Indexes the data

### Splunk Enterprise Roles  

**Splunk Admin**: Install Apps, Ingest Data, Create knowledge objects  
**Splunk Power**: Create and share knowledge objects. perform real-time searches  
Splunk User

### Splunk Search  

Supports Wildcards  
Case Insensitive  

Boolean Operators (AND, OR, NOT) - No operator implies AND  
Booleans are evaluated in the order NOT, OR, AND

Splunk Search Language is made of five components:  
**Search Terms**: Foundation of the search  
**Commands**: What to do with the search (Chart, Compute, Formatting)  
**Functions**: How to Chart, Compute or Evaluate the results  
**Arguments**: Variables to apply to the function  
**Clauses**: Defines how the results are grouped/defined

### Knowledge Objects

Data Interpretation  
Data Classification  
Data Enrichment  
Data Normalization  
Data Models

Knowledge Objects can saved, shared and used in search