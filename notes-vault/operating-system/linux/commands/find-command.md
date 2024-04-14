---
tags:
  - os
  - linux
  - command
title: find Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-04-11 09:47:24 -0500
---

````bash
find / -type f -name "file.txt"
````

`-mmin -10`: Files modified less than 10 mins ago  
`-mmin + 1 -mmin -5`: Files modified more than 1 min ago and less than 5 mins ago  
`-mtime +20`: More than 20 days  
`-amin -atime`: Accessed Time  
`-cmin` `-ctime`: Modified Time

`-size +5M`: Files greater than 5 MBs  
`k`: Kilobytes  
`G`: Gigabytes

`-empty` : Find empty files

`-perm 777`: Have permission 777  
`-perm -755`: Have at least 755 permission

`-maxdepth 1`: Scan only one level deep

`-exec rm -rf {} +`: Execute command (`rm -rf file1; rm -rf file2;`)  
`-exec rm -rf {} \;`: Execute command (`rm -rf file1 file2`)

[Find Exec Command in Linux: 9 Useful Examples](https://linuxhandbook.com/find-exec-command/)
