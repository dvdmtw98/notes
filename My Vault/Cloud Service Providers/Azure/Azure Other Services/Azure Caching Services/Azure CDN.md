---
title: Azure CDN
tags: [azure, cloud, cdn, cache]
---

It is a globally distributed network  
Reduces asset load time by storing resources closer to end-user  
Reduces hosting providers' bandwidth usage as on each request files don't have to be pulled from the root host  
Provides high availability and low latency due to the distributed nature of the storage

### Caching Rules

Azure CDN (Microsoft) uses the Standard Rules Engine  
Azure CDN Premium (Verizon) uses the Premium Rules Engine

The below caching rules are only supported with Azure Standard CDN (Verizon & Akamai)  

#### Global
Only one global rule can be created per endpoint  
Can overrides cache headers

**Bypass Cache**: Don't cache resources even if cache control headers are present  
**Override**: Override the cache header and set a custom caching duration  
**Set if Missing**: Add cache control header if not added by the client  
**Not set**: Honor the cache header values

#### Custom
No limit on the number of rules that can be created  
The rule can be applied selectively to files extensions and/or all files on a specific path  
Can override the global rule  

Supports Bypass Cache, Override and Set if Missing Rules

#### Query String
**Ignore query strings**  
Ignore query strings and cache the resource  
This rule has no effect if caching is disabled for the resource  

**Bypass query strings**  
Assets with query strings are always fetched from the origin server  

**Cache every unique URL**  
Each asset with the query string is considered different and cached  
If the application generates a unique query string for every request this mode should not be used as it will result in a low cache hit ratio leading to poor performance

---

[Azure](../../Azure.md)