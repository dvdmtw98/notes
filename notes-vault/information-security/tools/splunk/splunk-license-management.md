---
title: Splunk License Management
tags:
  - security
  - splunk
  - siem
date: 2026-09-10 15:47:17 +0530
updated: 2026-09-12 18:29:33 +0530
---

### Indexing

#### Parsing Pipeline
Coverts data stream into individual events.  
Create/identify timestamps.  
Extract metadata fields: host, source, sourcetype.  
Performing masking and filtering.  

![[splunk-indexing-pipeline.png|640]]

#### Indexing Pipeline  
Perform event segmentation (Field extraction).  
Build index data structures (`tsidx` files and raw data mapping).  
Write compressed raw data to disk.  

### Data Types

#### Event Data
Presents something that happened at a specific time.  
Has a timestamp associated with the data.  
License measure volume of raw event data placed on indexing pipeline.  

#### Metric Data  
Numeric data aggregated over time.  
Time window based value.  
Per-event size is capped at 150 bytes.  
Uses the same license quota as event data.  

> [!IMPORTANT] Not counted against License
> - Internal indexes (`_internal`, `_introspection`, etc.) and summary indexes.  
> - Data replication across indexers.  
> - The `tsidx` files and metadata associated with the index.

### Licensing Architecture
Splunk license uses the XML format.  
It contains information about the various allowed features and limits.  
License Location: `$SPLUNK_HOME/etc/licenses`

The Splunk instance on which the license is installed automatically becomes the License Manager for that license.  
When a license is installed it creates a group, stack and pool.  
The default pool is called `auto_generated_pool_enterprise`.  

#### License Group
Set of licenses that can be installed together.  
A license manager can only administer one license group at a time.  
A license group can contain multiple license stacks.  

#### License Stack
Set of licenses that can be added together.  
Allows to increase capacity without changing license.  
A license stack contains license pools.  

#### License Pool
Some or all of a license stack assigned to one or more instances.  
Its used to split license/capacity across instances.  

![[splunk-liicense-pools.png|640]]

This structure only applies to commercial (Enterprise) licenses. The free and developer licenses do not support groups, stacks and pools.  

### License Types
Leaving Forwarder and Free all licenses is a type of Enterprise License.  
The UI will always only show these 3 types of licenses.  

#### Enterprise Trial License
Automatically available when you download and install Splunk.  
Expires after 60 days. Switches to Free license.  
Allows indexing up to 500 MB per day.  
Supports distributed deployment however, each node requires its own license.  
Cannot use centralized license management.  
Does not support license stacking.  

#### Free License
Does not support alerting.  
No users or rules. Does not support authentication.  
Distributed search and Indexer clustering are not supported.  
Free license does not expire.  
Allows indexing up to 500 MB per day.  
Can only be used with single-instance deployments.  
No centralized license management.  
Cannot be stacked with other licenses.  

#### Commercial End-User License
Provides access to the full Splunk feature set.  
Provides volume-based (Data) and infrastructure-based (vCPU) license.  
Can be used for both single-instance and distributed deployments.  
Can be stacked and assigned to license pools.  
Volume-based and Infrastructure-based license cannot be stacked together.  
Infrastructure-based license is used for Splunk Cloud deployments.  

#### Forwarder License
Allow data forwarding but not indexing.  
Included with Universal Forwarder package.  
Heavy Forwarder can use Forwarder license if it is only going to forward data.  

#### Developer License
Dev/Test License: Used by commercial customers in pre-production environment.  
Developer License: Develop content from Splunk.  

#### Pre-Release License
Used by customers who participate in pre-release program.  
