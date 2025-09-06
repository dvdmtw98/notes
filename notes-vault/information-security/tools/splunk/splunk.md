---
title: Splunk
tags:
  - security
  - splunk
  - siem
date: 2024-01-28 14:15:56 -0600
updated: 2025-09-06 20:07:18 +0530
---

### Table of Content

- [[splunk-core-components|Core Components]]

### Splunk Apps/ Add-ons
Adds additional functionality in Splunk (sources, processing options).  
Apps have a UI and allow users to configure various parameters.  

Add-ons do not have UI (they run in background).  
Some add-ons are also called referred to as TAs (Technical Add-ons).

Apps and add-ons are downloaded from Splunkbase.  

---

### Splunk Search
SPL: Splunk Search Processing Language  
`Settings → Data Inputs` has more ingestion options than `Settings → Add Data`.  

`Ctrl + \`: Format query  
`Shift + Enter`: Create newline  
`Ctrl + Shift + e`: Expand the search  

#### Search Job
Splunk Search Job (result) is active for 10 mins.  
Each search gets its own Search ID (SID).  
After the TTL the results along with its metrics are cleared.  
This can be configured and extended to 7 days.  
Actions like paging through the result, sorting, etc. refreshes the TTL.  

#### Search Components
**Search Terms**: Foundation of the search  
**Commands**: What to do with the search (Chart, Compute, Formatting)  
**Functions**: How to Chart, Compute or Evaluate the results  
**Arguments**: Variables to apply to the function  
**Clauses**: Defines how the results are grouped/defined

#### Search Modes
Fast: All about speed. Pulls the least amount of data from disk.  
Verbose: Slowest option. Produces complete results.  
Smart: Uses smart when transforming command else same as Verbose.  

#### Search Types
`earliest` and `latest` argument used in query takes precedence over the value specified with the time picker.  
[Select time ranges to apply to your search - Splunk Docs](https://docs.splunk.com/Documentation/Splunk/9.4.2/Search/Selecttimerangestoapply)

**Historic Search**  
Also called static/ad-hoc search.  
Time window does not search.  
Only searches data available in the window.  

**Relative Search**  
It’s a subtype of historic search.  
The time range is dynamic (relative to now).  
Every time the search is performed the time range adjusts to the current time.  

**Real-time Search**  
Live, continuously running search.  
Operates using a sliding window and updates as new data arrives.  

#### Boolean Operators
No operator between fields implies AND  
Booleans are evaluated in the order NOT, OR, AND  
`NOT filed=value` is not the same as `field!=value`

Splunk uses the Perl Regex syntax.  
[Splunk regular expression modifier flags - TheDotProduct](https://www.thedotproduct.org/posts/splunk-regular-expression-modifier-flags.html)

---

### Commands

#### Eval
Used to calculate and manipulate field values. Can create a new field.  

```
index=web OR index=security 
| stats sum(bytes) as total_bytes 
| eval total_bytes=tostring(total_bytes, "commas")
```

[eval command: Examples \| Splunk Docs](https://help.splunk.com/en/splunk-cloud-platform/search/spl2-search-reference/eval-command/eval-command-examples)

#### Top
Find the most common values of a field.   
Includes count and percentage for the field. 

```
index=web action=purchase 
| top limit=10 categoryId

sourcetype=access_* 
| top action by referer_domain
```

[top Command: Examples \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/9.4/search-commands/top#ariaid-title5)

---

### Splunk Fields

host, source, sourcetype, \_raw and \_time are fields extracted at index time  
**Field Types**: ∝ (String), # (Numeric)

Interesting Fields are fields that have value in at least 20% of the events  
Splunk field names are case-sensitive while the value are not case-sensitive  
Calculated fields allows us to store the `eval` expression required for get that field  
Lookup Fields allow to reference data that is not part of the indexed data  

`| fields`: Fields to include in result. Use `-` before name to exclude a field  
`| erex` & `| rex`: Extract fields from data that was not automatically extracted

**Field Evaluation Order**  
Extracted Fields - Field Alias - Calculated Field - Lookup - Event Types - Tags

When the source data contains timestamps during indexing `date_*` fields are generated for each component of the timestamp (hour, minute, second, etc.)  
These fields are not timestamp aware  

`now()`: Returns the time the search was started  
`time()`: Returns the time the event was processed by `eval`

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
For a 60 min search the span is default 1 min  
For a 24 hour search the span is default 30 min

### Knowledge Objects

Data Interpretation (Fields, Extracted Fields, Calculated Fields)  
Data Classification (Event Types, Transactions)  
Data Enrichment (Lookups, Workflow Actions)  
Data Normalization (Tags, Fields Aliases)  
Data Models (Structured Datasets)
