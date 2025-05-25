---
title: John the Ripper
tags:
  - security
  - password
date: 2024-01-28 14:15:56 -0600
updated: 2024-04-16 09:31:45 -0500
---

RAR5 hash cracking is not supported by John. [[hashcat|Hashcat]] is preferred in its place

John utilities location : `/usr/share/john` & `/usr/sbin`  
List all utilities : `locate *2john*`

#### List Supported Formats

````bash
john --list=formats
````

#### Cracking ZIP/ RAR Files

````bash
# Extract password hash
zip2john <filename> > output-file

# Uses John's default wordlist
john <hash-file> --format=zip
````

#### Cracking using Custom Wordlist

````bash
john <hash-file> --format=Raw-MD5 --wordlist <wordlist>
````

 > [!IMPORTANT]
 > * The hashes should be stored in a file for them to work with John
 > * The results of cracking are saved in `~/.john/` in a file with `.pot` extension
 