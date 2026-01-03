---
title: Splunk Rest Api
tags:
  - splunk
  - security
  - siem
date: 2025-10-06 22:18:23 +0530
updated: 2026-01-01 22:40:12 +0530
---

#### Usage

```
| rest /services/saved/searches

| rest /services/saved/searches splunk_server=local count=2
```

The above syntax will only show results from the app in which the query is executed. The `servicesNS` endpoint has to be used to specify the user and app context.

```
| rest /servicesNS/-/-/saved/searches
```

The first `-` is the user context and the second `-` is the app context.

[Splunk Rest API \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/leverage-rest-apis/rest-api-reference/9.4/search-endpoints/search-endpoint-descriptions)

![Splunk Search Endpoint List|640](https://raw.githubusercontent.com/siddharthajuprod07/youtube/refs/heads/master/search_REST_APIs/endpoints.jpg)

#### Splunk Apps

```
| rest /services/apps/local
| search disabled=0
| table label version
```

[[splunk-apps|Splunk Apps]]
