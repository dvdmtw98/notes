---
title: Splunk
tags:
  - security
  - concept
  - splunk
---



Splunk Job is active for 10mins  
Shared Splunk Job active for 7 days

Time, Index, Source, Host, Source Type are default fields in Splunk  
They are generated when Splunk Indexes the data

#### Main Components
**Forwarder**: Universal or Heavy (Reads the data from the source systems)  
**Indexer**: Converts the data from the forwarder into events that are stored a indexes    
**Search Head**: Queries the data from the index and displays to the end user

#### Splunk Apps/ Add-ons
Additional functionality for Splunk that can be downloaded from Splunkbase   
Some paid apps/add-ons are also available for Splunk

Apps have an UI and allow users to configure various parameter's    
Add-ons also add additional features they do not provide a UI (they run in background)  
Some add-ons are also called referred to as TAs (Technical Add-ons)

#### Splunk Enterprise Roles  

**Splunk Admin**: Install Apps, Ingest Data, create knowledge objects  
**Splunk Power**: Create and share knowledge objects. perform real-time searches  
**Splunk User**: Run searches, edit preferences, create and edit event types

#### Splunk Search

Splunk Search Language is made of five components:  
**Search Terms**: Foundation of the search  
**Commands**: What to do with the search (Chart, Compute, Formatting)  
**Functions**: How to Chart, Compute or Evaluate the results  
**Arguments**: Variables to apply to the function  
**Clauses**: Defines how the results are grouped/defined

Boolean Operators (AND, OR, NOT) - No operator implies AND  
Booleans are evaluated in the order NOT, OR, AND

Transforming Commands: Commands that create statistics and visualizations  
Search Modes: Fast, Smart, Verbose

#### Knowledge Objects

Data Interpretation  
Data Classification  
Data Enrichment  
Data Normalization  
Data Models

Knowledge Objects can saved, shared and used in search