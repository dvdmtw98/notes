---
title: Subdomain & Email Enumeration
---

1. <u>Sublist3r</u>  
   [GitHub - aboul3la/Sublist3r: Fast subdomains enumeration tool for penetration testers](https://github.com/aboul3la/Sublist3r)

````bash
python sublist3r.py --help
python sublist3r.py -v -d <domain> -o <output-file>
````

2. <u>Crt.sh (Subdomain)</u>  
   [crt.sh | Certificate Search](https://crt.sh/)

3. <u>Knock (Subdomain)</u>  
   [GitHub - guelfoweb/knock: Knock Subdomain Scan](https://github.com/guelfoweb/knock.git)

````bash
python knockpy.py <domain>
````

4. <u>Whois Lookup</u>  
   [Whois Lookup, Domain Availability & IP Search - DomainTools](https://whois.domaintools.com/)

5. <u>Hunter.io (Email)</u>  
   [Find email addresses in seconds • Hunter (Email Hunter)](https://hunter.io/)  
   (Free 50 Searches/ Month)

6. <u>theHarvester (Email & Subdomain)</u>

````bash
theHarvester -h # List all the options
theHarvester -d <domain> -l <limit> -b <source> # Limit : No. of results
````

7. <u>Breach Parse (Email & Password)</u>  
   [GitHub - hmaverickadams/breach-parse: A tool for parsing breached passwords](https://github.com/hmaverickadams/breach-parse)
   [GitHub - philipperemy/tensorflow-1.4-billion-password-analysis: Deep Learning model to analyze a large corpus of clear text passwords.](https://github.com/philipperemy/tensorflow-1.4-billion-password-analysis)  
   (1.4 Billion Password DB)

````bash
breach-parse @<domain> <filename>
````

8. <u>OSRFramework</u>  
   osrf (List all the modules)  
   domainfy.py --whois -n domain-name  
   mailfy.py -n email  
   phonefy.py -n phone-no  
   searchfy.py -q query  
   usufy.py -n username