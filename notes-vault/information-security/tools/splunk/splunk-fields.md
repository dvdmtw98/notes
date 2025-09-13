---
title: Splunk Fields
tags:
  - security
  - siem
  - splunk
date: 2025-09-08 15:49:17 +0530
updated: 2025-09-08 15:50:49 +0530
---

`host`, `source`, `sourcetype`, `_raw` and `_time` are fields added at index time.  
Field Data types: ∝ (String), # (Numeric)  

Field names in Splunk cannot contain `-` (hyphen).  
Field names with `-` are automatically converted to `_` (underscore) by the indexer.

Interesting Fields are fields that have value in at least 20% of the events.  
Splunk field names are case-sensitive while the value are case-insensitive.  
Calculated fields allows us to store the value of `eval` expression.  
Lookup Fields allow to reference data that is not part of the indexed data.  

**Field Evaluation Order**  
Extracted Fields - Field Alias - Calculated Field - Lookup - Event Types - Tags

When the source data contains timestamps during indexing, `date_*` fields are generated for each component of the timestamp (hour, minute, second, etc.)  
These fields are not timestamp aware.  

`now()`: Returns the time the search was started  
`time()`: Returns the time the event was processed by `eval`

`| fields`: Fields to include in result. Use `-` before name to exclude a field.  
`| erex` & `| rex`: Create new fields from data that using regex.  
