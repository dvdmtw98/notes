---
title: DNS Spoofing
---

DNS Server converts the website URL to IP address of Server  
When we request a website the request is sent to a DNS server the server sends back the IP address of the website and is then used to connect to the website using the IP Address  
When attacker establishes an MITM connection the user request flows through the attacker PC. Attacker can sent back an IP address which is Spoofed and points to a malicious server  
Does not work against HSTS websites