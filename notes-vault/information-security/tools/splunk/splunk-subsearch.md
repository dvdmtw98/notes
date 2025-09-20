---
title: Splunk Subsearch
tags:
  - security
  - splunk
  - siem
date: 2025-09-17 17:45:48 +0530
updated: 2025-09-17 21:53:32 +0530
---

A search within a primary or outer search.  
Subsearch is used when the data on which we want to filter is **dynamic**.  

Subsearch is declared inside `[ ]` (square brackets).  
There must be a command **before** and **after** the subsearch.  
The subsearch is always executed before the primary search.  
The first command in a subsearch must be a **generating** command.  

Time ranges mentioned in the main search does not apply to the subsearch.  
Time range mentioned in the subsearch does not apply to the main search.  
Time selected using time picker applies to the primary as well as inner search.  

Subsearch cannot be used with `sourcetype=top | multikv`.  
Subsearch cannot have transforming commands as its last command.  
`| table` can be used as the last command in a subsearch but it's working is different in this context.  

In the case of nested subsearches the searches the computed inside to outside.  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TiwKp-T56xQ?si=cGISyTtF46KewNyC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[About subsearches - Splunk Documentation](https://docs.splunk.com/Documentation/Splunk/9.4.2/Search/Aboutsubsearches)

#### Performance
Subsearch results are capped to 10,000 or 60 seconds (which even comes first).  
Some commands like `append` and `join` can bypass these limitations.  
The config (`limits.conf`) can also be edited to change these limits (not recommended). 

#### Format
Subsearch implicitly calls `| format` after the result is generated. This converts the result to a **filter expression** that can be used by the outer search.  

Fields can be renamed to **search** or **query** to drop the field name. This will result in a generic search filter that will be search the term in all fields of the event data.  

[format - Splunk Documentation](https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/format)

[Change the format of subsearch results \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/search-manual/9.3/subsearches/change-the-format-of-subsearch-results)

#### Return
Returns the values from the subsearch to the outer query.  
By default it only returns a **single** value.  

`$clientip`: Only return the value.  
`ip=clientip`: Rename the field before returning it.  

[return \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/spl-search-reference/9.1/search-commands/return)
