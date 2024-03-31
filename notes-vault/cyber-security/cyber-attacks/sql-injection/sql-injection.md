---
tags:
  - security
  - sqli
  - web
  - index
title: SQL Injection
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-29 23:31:17 -0500
---

### Related Concepts

* [[useful-sql-functions-and-queries|Useful SQL Functions and Queries]]
* [[classic-injection-bypass|Classic Injection Bypass]]
* [[types-of-sql-injection|Types of SQL Injection]]
	* [[union-based-in-band-injection|UNION based (In-band) Injection]]
	* [[error-based-in-band-injection|ERROR based (In-band) Injection]]
	* [[boolean-based-blind-injection|BOOLEAN based (Blind) Injection]]
	* [[time-based-blind-injection|TIME based (Blind) Injection]]
* **SQL Injection Tools**
	* [[burp-suite|Burp Suite]]
	* [[sqlmap|SQLMap]]

### Mitigation Techniques

* [How to Prevent SQL Injection: Attacks and Defense Techniques](https://www.ptsecurity.com/ww-en/analytics/knowledge-base/how-to-prevent-sql-injection-attacks/)
* Always use Prepare Statements for Queries
* Use Whitelisting when the user controls fields like the column name, table name
* Configure DB to use the least possible privileges

[Acunetix Web Vulnerability Scanner - Test websites](http://www.vulnweb.com/)
