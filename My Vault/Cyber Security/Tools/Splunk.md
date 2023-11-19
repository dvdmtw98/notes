---
tags:
  - security
  - concept
  - splunk
---

Splunk Job is active for 10mins  
Shared Splunk Job active for 7 days

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

**Boolean Operators (AND, OR, NOT)**    
No operator between fields implies AND  
Booleans are evaluated in the order NOT, OR, AND

Search Modes: Fast, Smart, Verbose

**Transforming Commands**  
Commands that create statistics and visualizations  
SPL that contains an transforming command is always executed in smart mode  
e.g. Top, Rare, Stats

Time related operation (Earliest & Latest) specified in the SPL will have precedence over the Time Picker range 

#### Splunk Fields

host, source, sourcetype, \_raw and \_time are fields extracted at index time  
**Field Types**: ∝ (String), # (Numeric)

Interesting Fields are fields that have value in at least 20% of the events  
Splunk field names are case-sensitive while the value are not case-sensitive  
Calculated fields allows to store an derived field that needs to be used repeatedly  

`| fields`: Fields to include in result. Use `-` before name to exclude a field  
`| eval`: Used to calculate and manipulate field values. Can create a new field  
`| erex` & `| rex`: Extract fields from data that was not automatically extracted

**Field Evaluation Order**  
Extracted Fields - Field Alias - Calculated Field - Lookup - Event Types - Tags

#### Scheduled Reports & Alerts

Reports that are generate based on a time interval  
Scheduled report priority can only be set by the admin

#### Knowledge Objects

Data Interpretation  
Data Classification  
Data Enrichment  
Data Normalization  
Data Models

Knowledge Objects can be saved, shared and used in search
