---
title: Splunk Lookups
tags:
  - splunk
  - siem
  - security
date: 2025-09-28 21:45:32 +0530
updated: 2026-01-01 22:45:35 +0530
---

Used to enrich the indexed data by bringing in additional fields from external sources.  
Once we create a lookup definition we do not need to use the filename/path in the query.  

Auto Lookup will automatically add the additional fields from the lookup.  
Will be resource intensive when used on large datasets.  

```
index=web sourcetype=access_combined
| lookup ip_org_lookup IP AS clientip OUTPUT org_name, region
| table clientip status org_name region
```

`IP`: Name of field in lookup  
`clientip`: Name of field in Events

`OUTPUT`: Always create a new field.  
`OUTPUTNEW`: Create the new field only if it does not exist.  

```
index=web sourcetype=access_combined
| lookup ips.csv ip AS src_ip OUTPUT ip AS matched_ip
| where isnotnull(matched_ip)
```

Lookups can also be used to filter data by using it in a [[splunk-subsearch|subsearch]].  

```
index=_myindex sourcetype=mytype [ 
	| inputlookup mylookup.csv 
	| table ip 
	| rename ip as src_ip 
]
```

The portion inside the subsearch is returned in the format `key=value`.

[inputlookup \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.0/search-commands/inputlookup)

The `outputlookup` command can save results from a query as a CSV lookup.
