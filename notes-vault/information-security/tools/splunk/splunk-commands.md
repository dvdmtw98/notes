---
title: Splunk Commands
tags:
  - security
  - splunk
  - siem
date: 2025-09-08 15:51:32 +0530
updated: 2025-09-17 18:30:50 +0530
---

Commands that create statistics (table) and visualizations (graphs) are called transforming commands.  

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

Defaults to Top 10.  
`showperc=f` will remove the percentage field.  

```
index=web action=purchase 
| top limit=10 categoryId

sourcetype=access_* 
| top action by referer_domain
```

[top Command: Examples \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/9.4/search-commands/top#ariaid-title5)

#### Stats
Used to calculate aggregated statistics.  
The `by` clause is used for grouping.  
The `as` clause is used for renaming the field.  

`list()`: List all the values from a field as a multi-valued entry.  
`values()`: List all the unique values from a field as a multi-valued entry.  

[stats command: Overview, syntax, and usage \| Splunk Docs](https://help.splunk.com/en/splunk-cloud-platform/search/spl2-search-reference/stats-command/stats-command-overview-syntax-and-usage#using-the-from-command-instead-0)  

[stats command: Examples \| Splunk Docs](https://help.splunk.com/en/splunk-cloud-platform/search/spl2-search-reference/stats-command/stats-command-examples)  

[Aggregate functions - Splunk Documentation](https://docs.splunk.com/Documentation/Splunk/9.4.2/SearchReference/Aggregatefunctions)
