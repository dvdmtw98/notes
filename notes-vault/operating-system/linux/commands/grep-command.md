---
title: grep Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:42:16 -0600
---

````shell
grep -n "pattern" filename
man find | grep -e "-exec" (Extended Regex Find)
grep -r "pattern" ./<folder-name> # Recursively Search all files in Directory
````

**Flags**  
`-w`: Matching whole words only  
`-i`: Case Insensitive Search  
`-n`: Line Number  
`-C num`: View n lines before and after the match  
`-e`: Regex Find  
`-E`: Extended Regex Find  
`-P`: Perl Compatible Regex Find  
`-r`: Recursive Search  
`-l`: Filenames that contain match  
`-c`: Filenames that contain match with count
