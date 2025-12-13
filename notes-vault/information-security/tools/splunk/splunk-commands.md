---
title: Splunk Commands
tags:
  - security
  - splunk
  - siem
date: 2025-09-08 15:51:32 +0530
updated: 2025-12-06 23:10:15 +0530
---

### Streaming Commands

#### Eval
Used to calculate and manipulate field values. Can create a new field.  

```
index=web OR index=security 
| stats sum(bytes) as total_bytes 
| eval total_bytes=tostring(total_bytes, "commas")
```

[eval command: Examples \| Splunk Docs](https://help.splunk.com/en/splunk-cloud-platform/search/spl2-search-reference/eval-command/eval-command-examples)

```
index=botsv3
| eval login_status=if(status=="success", 1, 0)
| table status, login_status
```

`case` is better than `if` as it has better handling of the values.  
In case statement we can use `1=1` as condition for else scenario.  

```
index=botsv3
| eval connection=src_ip . " -> " . dest_ip
| table src_ip, dest_ip, connection
```

#### Transaction
Used to group events together that have match certain condition.  
The new event generated will use the time of the earliest event.  
The command creates 2 new fields duration and event count.  

```
sourcetype=access_* 
| transaction JSESSIONID clientip startswith="view" endswith="purchase" 
| where duration>0
```

[transaction \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/spl-search-reference/9.3/search-commands/transaction)

### Transforming Commands
Commands that create summaries, statistics (table) or visualizations (graphs) are called transforming commands.  

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

Stats with count is a better and efficient method of **deduping** the results.    

### Multivalue Functions
Internally multivalue fields are treats as arrays.  

#### Makemv

```
| makeresults count=3
| streamstats count as id
| eval name=case(id=1, "Zeus", id=2, "Demeter", id=3, "Athena")
| eval values=case(id=1, "1,2,3,4", id=2, "5,6,7,8", id=3, "9,10,11,12")
| makemv delim="," values
```

Converts a delimited field to a multivalue field.  
Can use regex with the `tokonizer` option.  

#### Mvexpand, Mvcombine and Nomv

`mvexpand` is used to turn multivalue field into distinct events.  

[Multivalue eval functions \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/9.4/evaluation-functions/multivalue-eval-functions)

`mvcombine` will combine multivalue fields together.  
The delimiter used with this command will not show up till its turned into a single value field.  

`nomv` will convert multivalue field to single value field (adds delimiter).  

```
| makeresults count=3
| streamstats count as id
| eval name=case(id=1, "Zeus", id=2, "Demeter", id=3, "Athena")
| eval values=case(id=1, "1,2,3,4", id=2, "5,6,7,8", id=3, "9,10,11,12")
| makemv delim="," values
| mvexpand values
| mvcombine delim="," values
| nomv values
```

[siddharthajuprod07/youtube · GitHub](https://github.com/siddharthajuprod07/youtube/blob/master/working_with_mv/query.txt)
