---
title: Splunk Search
tags:
  - security
  - splunk
  - siem
date: 2025-09-06 22:01:49 +0530
updated: 2025-09-17 17:45:36 +0530
---

SPL: Splunk Search Processing Language  
`Settings → Data Inputs` has more ingestion options than `Settings → Add Data`.  

`Ctrl + \`: Format query  
`Shift + Enter`: Create newline  
`Ctrl + Shift + e`: Expand the search  

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

#### Search Job
Splunk Search Job (result) is active for 10 mins.  
Each search gets its own Search ID (SID).  
After the TTL the results along with its metrics are cleared from memory.  
Actions like paging through the result, sorting, etc. extends the TTL.  
TTL can be configured and extended to 7 days.  

#### Boolean Operators
No operator between fields implies AND  
Booleans are evaluated in the order NOT, OR, AND  

`field!=value`: Events with NULL values are not considered. Returns all non-NULL events where field is not value.  
`NOT field=value`: Events with missing (NULL) values are included. Only events where `field=value` is filtered.

Splunk uses the Perl Regex syntax.  
[Splunk regular expression modifier flags - TheDotProduct](https://www.thedotproduct.org/posts/splunk-regular-expression-modifier-flags.html)
