---
title: Splunk Commands
tags:
  - security
  - splunk
  - siem
date: 2025-09-08 15:51:32 +0530
updated: 2026-01-28 22:37:14 +0530
---

### Search Context
The IN operator can only be used with wildcards when used with the `search` command.  
When IN is used with `where` it is treated as the `in()` function which does not support wildcards.  

When using IN operator we should not prefix literals with wildcards as its inefficient.  
Additionally, using wildcards in the middle of term can produce inconsistent results.  

To search for literals that end with a term it is recommended to use `like()` or `regex()` with the `where` or `eval` command.  
When we do not mention `where` or `search` after a pipe it is implied that we are using `search` command.  

Search can only be used to compare a field with a value (RHS cannot be field name). If the LHS and RHS of a condition is a field name then `where` has to be used.

### Streaming Commands
Streaming functions process events one at a time (as they become available).  
Streaming commands will always produce events after the calculation.  

**Distributed Streaming Commands**  
Operate on events independently, order of the events do not matter.  
Can run on indexers (in parallel) and search head.  
No need to gather the full dataset before doing the processing.  

**Centralized Streaming Commands**  
They still process events one by one but they depend on sort or grouping logic.  
They cannot run in parallel on indexers.  
They require the relevant events to be pulled together before execution.  

#### Eval
Used to calculate and manipulate field values. Can create a new field.  
Results of eval operation can be saved as **calculated field** (knowledge object).  
Field values are case-sensitive when eval function is used.  

```
index=web OR index=security 
| stats sum(bytes) as total_bytes 
| eval total_bytes=tostring(total_bytes, "commas")
```

**Duration**: Convert seconds to format `HH:MM:SS`.  
**Commas**: Formats a value with commas, Rounds to nearest 2 decimal places if applicable.  
**Hex**: Convert a value to hexadecimal.  

[Conversion Functions \| Splunk Docs](https://help.splunk.com/en/splunk-cloud-platform/search/spl2-search-reference/evaluation-functions/conversion-functions#ariaid-title15)

```
index=botsv3
| eval login_status=if(status="success", 1, 0)
| table status, login_status
```

`case` is better than `if` as it has better handling of the values.  
In case statement we can use `1=1` as condition for else scenario.  

```
index=botsv3
| eval connection=src_ip . " -> " . dest_ip
| table src_ip, dest_ip, connection
```

Can perform concatenation using `.` and `+`.

[eval command: Examples \| Splunk Docs](https://help.splunk.com/en/splunk-cloud-platform/search/spl2-search-reference/eval-command/eval-command-examples)

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

#### Fields 
Determines the fields to include in result.  
Using `-` before a field will cause the field to be remove from the event.  
The command does not remove any of the `_` (internal) fields.  

### Transforming Commands
Commands that create summaries, statistics (table) or visualizations (graphs) are called transforming commands.  

#### Top
Find the most common values of a field.   
Includes count and percentage for the field.  

Defaults to Top 10.  
`showperc=f` will remove the percentage field.  
My setting limit to 0 we can see the count and percentage for all values.  

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

> [!INFO] Deduplicating Data
> - Stats with count is a more efficient method of **deduping** results.  
> - Avoid the dedup command when possible.      

#### AddTotals
Computes the sum of all numeric fields in the search result.  
Using a field list the fields for which the sum has to be calculated can be controlled.  

```
index=main sourcetype=eventgen
|  chart count over nodeName by partner
| addtotals row=true fieldname="Total per Host" 
	col=true labelfield=nodeName label="Total per Partner"
```

[addtotals \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/spl-search-reference/9.1/search-commands/addtotals)  
[addcoltotals \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.2/search-commands/addcoltotals)

#### Table
Table is used to select, arrange the fields that show up in the statistics table.  
The table command does not remove any field (only hides them).  
It is recommended to use table command only at the end of the query.  

### Multivalue Functions
Internally multivalue fields are treats as lists.  
A single valued field is a list with only one element.  

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

#### Mvexpand

`mvexpand` is used to turn multivalue field into distinct events.  

[Multivalue eval functions \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/9.4/evaluation-functions/multivalue-eval-functions)

#### Mvcombine

`mvcombine` will combine multivalue fields together.  
The delimiter used with this command will not show up till its turned into a single value field.  

#### Nomv

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
