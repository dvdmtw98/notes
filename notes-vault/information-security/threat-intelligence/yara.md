---
title: Yara
tags:
  - security
  - threat
  - intelligence
  - malware
date: 2024-04-26 19:05:35 -0500
updated: 2024-04-26 22:57:51 -0500
---

YARA (Yet Another Ridiculous Acronym) is a toolkit that enables malware researches to identify and classify malware samples  
Using YARA rules we can look for string (patterns) in files  

### YARA Rule Sections

```yaml
rule silent_banker : banker
{
    meta:
        description = "This is just an example"
        threat_level = 3
        in_the_wild = true
    strings:
        $a = {6A 40 68 00 30 00 00 6A 14 8D 91}
        $b = {8D 4D B0 2B C1 83 C0 27 99 6A 4E 59 F7 F9}
        $c = "UVODFRYSIHLNWPEJXQZAKCBGMT"
    condition:
        $a or $b or $c
}
```

#### meta
This section is used to define descriptive information about the rule

#### strings
This section is used to define the patterns that we want to search in the binaries  
Strings can be hexadecimal patterns as well. 

#### condition
In this section we define the logic that will be used to evaluate the rule

![[yara-structure.png|500]]
