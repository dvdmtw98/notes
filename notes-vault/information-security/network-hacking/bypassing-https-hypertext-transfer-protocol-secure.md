---
title: Bypassing HTTPS (Hypertext Transfer Protocol Secure)
tags:
  - web
  - exploitation
  - security
  - tool
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-21 19:12:33 -0500
---

HTTP + TLS (Transport Layer Security) / SSL (Secure Socket Layer)  
Downgrade HTTPS to HTTP to be able to read the data (SSL Stripping)

#### SSL Stripping

The Caplet that is used by BetterCap for SSL Stripping is buggy use the following modified module  
Zip File : [hstshijack.zip - Google Drive](https://drive.google.com/open?id=1cMAPFxAfi1HG1qqOpMI_3-yTik9WBuTv)  
Location of Caplets : `/usr/share/bettercap/caplet`

````bash
bettercap -iface <interface> -caplet <sniff-data-cap-file>
````

Ensure to add `set net.sniff.local true` in the cap file. This ensures that BetterCap captures packets it thinks are local as well. The reason this is required is when we use the HTTPS Bypass Caplet it will look like the data is originating from our device.

````bash
caplets.show
hstshijack/hstshijack # Run HSTS Caplet
````

#### Downgrading HSTS

The modified HTTPS Bypass caplet is required to perform this attack  
In the "hstshijack.cap" file replace targets, replacements with the required websites  
The values for "dns.spoof.domains" should be exactly same as the replacements line  
Ensure to add "set net.sniff.local true" in the cap file

````bash
bettercap -iface <interface> -caplet <sniff-data-cap-file>
# Run HSTS Caplet
hstshijack/hstshijack 
````

The bypass will only work if the user loads the HSTS website link from an HTTP/ HTTPS web page  
If HSTS caplet gives TCP Error use BetterCap v2.23
