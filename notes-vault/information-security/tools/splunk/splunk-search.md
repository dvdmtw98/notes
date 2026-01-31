---
title: Splunk Search
tags:
  - security
  - splunk
  - siem
date: 2025-09-06 22:01:49 +0530
updated: 2026-01-26 22:14:22 +0530
---

SPL: Splunk Search Processing Language  

`host`, `source`, `sourcetype`, `_raw` and `_time` are fields added at index time.  
Field Data types: ∝ (String), # (Numeric)  

Field names in Splunk cannot contain `-` (hyphen).  
Field names with `-` are automatically converted to `_` (underscore) by the indexer.

Interesting Fields are fields that have value in at least 20% of the events.  
Splunk field names are case-sensitive while the value are case-insensitive.  

**Field Evaluation Order**  
Extracted Fields - Field Alias - Calculated Field - Lookup - Event Types - Tags

When the source data contains timestamps during indexing, `date_*` fields are generated for each component of the timestamp (hour, minute, second, etc.)  
These fields are not timestamp aware.  

`now()`: Returns the time the search was started  
`time()`: Returns the time the event was processed by `eval`

### Search Components
**Search Terms**: Foundation of the search  
**Commands**: What to do with the search (Chart, Compute, Formatting)  
**Functions**: How to Chart, Compute or Evaluate the results  
**Arguments**: Variables to apply to the function  
**Clauses**: Defines how the results are grouped/defined

### Search Modes
Fast: All about speed. Pulls the least amount of data from disk.  
Verbose: Slowest option. Produces complete results.  
Smart: Uses smart when transforming command else same as Verbose.  

### Search Types

#### Historic Search
Also called static/ad-hoc search.  
Time window does not change. Only searches data available in the window.  

#### Relative Search
It’s a subtype of historic search.  
The time range is dynamic (relative to now).  
Every time the search is performed the time range adjusts to the current time.  

#### Real-time Search
Live, continuously running search.  
Operates using a sliding window and updates as new data arrives.  

### Search Job
Splunk Search Job (result) is active for 10 mins.  
Each search gets its own Search ID (SID).  
After the TTL the results along with its metrics are cleared from memory.  
Actions like paging through the result, sorting, etc. extends the TTL.  
TTL can be configured and extended to 7 days.  

### Boolean Operators
No operator between fields implies **AND**  
Booleans are evaluated in the order NOT, OR, AND  
Parenthesis can be used to control the evaluation order of the fields.  

```
(index=_audit OR index=_internal) error
| head 100
```

`field!=value`: Events with NULL values are not considered. Returns all non-NULL events where field is not value.  
`NOT field=value`: Events with missing (NULL) values are included. Only events where `field=value` is filtered.

### Regex
Splunk uses the Perl Regex syntax.  
Wildcards at the end preferred over wildcards at the start for searches.  

[Splunk regular expression modifier flags - TheDotProduct](https://www.thedotproduct.org/posts/splunk-regular-expression-modifier-flags.html)

### Time Manipulation

`w`: Weeks  
`mon`: Months  
`@`: Snap (Rounds down time)  

```
index=_myindex earliest=-1mon@mon latest=-1mon@mon+15d

index=_myindex earliest=-1mon@mon+16d latest=@mon
```

`earliest` and `latest` argument takes precedence over the time picker value.  
[Select time ranges to apply to your search - Splunk Docs](https://docs.splunk.com/Documentation/Splunk/9.4.2/Search/Selecttimerangestoapply)

`strptime()`: String Parse Time (String to Epoch)  
`strftime()`: String Format Time (Epoch to String)  

### Index Count

```
| eventcount sumarize=false index=*
| stats count by index
```

```
| metadata index=* type=sourcetypes
```

These commands are quick and will not slow down the system.

```
| makeresults count=3
| streamstats count
| eval name=case(count=1, "Hades", count=2, "Zeus", count=3, "Demeter")
| collect index=my_index sourcetype=my_sourcetype
```

The `collet` command allows us to create a new **summary index**.  
Summary index do not count towards the ingest limit.  
