---
tags:
- security
- concept
- splunk
title: Splunk
---

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

**Splunk Admin**: Install Apps, Ingest Data, Create knowledge objects  
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

Booleans & Command Modifiers: Orange  
Commands: Blue

Splunk Search Job is active for 10mins (Can be extended to 7 days)  
Shared Splunk Search Job active for 7 days

Earliest and Latest functions used in the SPL query have precedence over the same setting set using the Time-range Picker 

#### Splunk Fields

host, source, sourcetype, \_raw and \_time are fields extracted at index time  
**Field Types**: ∝ (String), # (Numeric)

Interesting Fields are fields that have value in at least 20% of the events  
Splunk field names are case-sensitive while the value are not case-sensitive  
Calculated fields allows us to store the `eval` expression required for get that field  
Lookup Fields allow to reference data that is not part of the indexed data  

`| fields`: Fields to include in result. Use `-` before name to exclude a field  
`| eval`: Used to calculate and manipulate field values. Can create a new field  
`| erex` & `| rex`: Extract fields from data that was not automatically extracted

**Field Evaluation Order**  
Extracted Fields - Field Alias - Calculated Field - Lookup - Event Types - Tags

When the source data contains timestamps during indexing `date_*` fields are generated for each component of the timestamp (hour, minute, second, etc.)  
These fields are not timestamp aware  

`now()`: Returns the time the search was started  
`time()`: Returns the time the event was processed by `eval`

#### Reports & Alerts

Scheduled Report priority can only be set by the admin  
Scheduled Reports always Run as Owner

Alerts: Scheduled or Real-time  
Real-time alert queries are executed continuously in the background   

Actions can be triggered when an Scheduled Report or Alert is executed  

#### Visualizations

`| table field1 field2`: Returns data in a tabular manner  
`| addtotals`: Creates a row or column with some of all numeric values  
`| fieldformats`: Modify data without changing the underlying data  

`| iplocation`: Adds country and city for IP Addresses using an external database  
`| geostats`: Cluster IP addresses on a map

To create choropleth maps `.kmz` files that have the boundaries are required  
`! geom`: Link indexed data with the polygonal data from the KMZ files

#### Transforming Commands

Commands that create statistics and visualizations  
SPL that contains an transforming command is always executed in smart mode  

`| top` & `| rare`: Shows the most and least frequent values  
`| stats`: Generate statistics from data  

`| chart`  
Over clause defines x-axis  
By clause adds granularity (Multi-series plot)  
Over clause with 2 fields will be treated as a multi-series plot

`| timechart`  
Charts where time is always the x-axis  
The output is always buckets over the time range (Span to change bucket)    
For a 60 min search the span is default 1min  
For a 24 hour search the span is default 30min

#### Knowledge Objects

Data Interpretation (Fields, Extracted Fields, Calculated Fields)  
Data Classification (Event Types, Transactions)  
Data Enrichment (Lookups, Workflow Actions)  
Data Normalization (Tags, Fields Aliases)  
Data Models (Structured Datasets)