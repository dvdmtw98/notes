---
title: DNS Enumeration
tags: [security, enumeration, dns]
---

1. <u>Host</u>

````bash
host <domain>
host -t ns <domain> 	# Find Nameservers
host -t a <domain> 		# Find IPv4 addresses
host -t mx <domain> 	# Find Mail Servers
````

2. <u>Dig</u>

````bash
dig <domain> +short
dig -t ns <domain>
dig axfr <domain> @<nameserver> # Zone Transfer
````

3. <u>Automatic DNS Enumeration</u>

````bash
dnsrecon -d <domain>
dnsenum <domain>
fierce -dns <domain>
````

4. <u>Robtex</u>
  
   [Welcome to Robtex!](https://www.robtex.com/)  
   Login required for some of the information