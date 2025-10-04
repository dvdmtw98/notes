---
title: Splunk Lookups
tags:
  - splunk
  - siem
  - security
date: 2025-09-28 21:45:32 +0530
updated: 2025-09-28 21:46:47 +0530
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

Lookups can also be used to filter data by using it in a subsearch.  

```
index=_myindex sourcetype=mytype [ 
	| inputlookup mylookup.csv 
	| table ip 
	| rename ip as src_ip 
]
```

[inputlookup \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.0/search-commands/inputlookup)
