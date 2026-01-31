---
title: Gogle Dorking
aliases:
  - Google Hacking
tags:
  - security
  - technique
date: 2025-12-23 22:18:27 +0530
updated: 2025-12-23 23:19:31 +0530
---

### Google

`site`: Limits search results to a specific site.  
`link`: Web pages that link to a specific URL.  

`inurl`: Find URLs that contain a word.  
`intext`: Search the HTML body for a specific word.  
`intitle`: Search website titles for a specific word.  

`filetype`: Show websites that contain files with a specific file format.  

By default the “AND” operator is used.  
`OR` & `|`: OR the result.  
`-`: Remove results.  
`( )`: Grouping operators.  

Google Dorks for various use cases: [Google Hacking Database (GHDB)](https://www.exploit-db.com/google-hacking-database)

### Shodan

`has_screenshot:true port:554`  
Port 554: RSTP (Real-time Streaming Protocol)  

`port:502 Modbus`  
Modbus is a protocol that is used by ICS (Industrial Control Systems)  

`port: 3389 has_screenshort:true`  
Find open RDP server instances  

[GitHub - 00xNetrunner/Shodan\_Cheet-Sheet](https://github.com/00xNetrunner/Shodan_Cheet-Sheet)
