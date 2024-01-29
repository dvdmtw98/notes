---
title: Security Content Automation Protocol (SCAP)
tags:
  - security
  - protocol
  - vulnerability
  - protect
date: 2024-01-28 14:15:56 -0600
---

Suite of open standards that automate vulnerability management, measurement and policy compliance for systems in an organization  
Was developed by NIST

#### Data Representation Formats

##### Open Vulnerability and Assessment Language (OVAL)
XML schema for describing system security states and querying vulnerability reports and information

##### Extensible Configuration Checklist Description Format (XCCDF)
XML schema for developing and auditing best-practice configuration checklists and rules  
Commonly used representation

##### Asset Reporting Format (ARF)
XML schema for expressing information about assets and the relationships between assets and reports  
ARF is vendor and technology neutral

#### Enumeration Approaches

##### Common Configuration Enumeration (CCE)
Schema for provisioning secure configuration checks across multiple sources

##### Common Platform Enumeration (CPE)
Scheme for identifying hardware devices, operating systems and applications  
`cpe:/part:vendor:product:version:update:edition:language`

##### Common Vulnerabilities and Exposures (CVE)
List of records where each item contains a unique identifier used to describe a publicly known vulnerability  
e.g. `CVE-2017-0144`

#### Common Vulnerability Scoring System (CVSS)
Used to provide a numerical score to reflect the severity of a given vulnerability

#### Benchmark
Set of security configuration rules for some specific set of products to provide a detailed checklist that can be used to secure systems to a specific baseline  
Represented in XCCDF
