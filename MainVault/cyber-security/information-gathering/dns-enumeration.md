---
tags:
  - security
  - enumeration
  - dns
title: DNS Enumeration
date: 2024-01-28 14:15:56 -0600
---

#### Host

````bash
host <domain>
host -t ns <domain> 	# Find Nameservers
host -t a <domain> 		# Find IPv4 addresses
host -t mx <domain> 	# Find Mail Servers
````

#### Dig

````bash
dig <domain> +short
dig -t ns <domain>
dig axfr <domain> @<nameserver> # Zone Transfer
````

#### Automatic DNS Enumeration

````bash
dnsrecon -d <domain>
dnsenum <domain>
fierce -dns <domain>
````

#### Robtex

[Welcome to Robtex!](https://www.robtex.com/)  
Login required for some of the information
