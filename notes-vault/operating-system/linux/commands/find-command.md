---
title: find Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-12-24 12:27:47 -0600
---

````bash
find / -type f -name "file.txt"

# Files that have SUID bit set and are owned by root
find / -perm -4000 -user -4000 2> /dev/null

# Find Symlinks
find /path/to/directory -type l ! -exec test -e {} \; -print
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

`-mount`: Don't search other FS (Prevents searching Windows paths from WSL)  

`-path /path -prune`: Skip directory (Needs to be before `-name`)
[linux - How do I exclude a directory when using \`find\`? - Stack Overflow](https://stackoverflow.com/questions/4210042/how-do-i-exclude-a-directory-when-using-find)

`-exec rm -rf {} +`: Execute command (`rm -rf file1; rm -rf file2;`)  
`-exec rm -rf {} \;`: Execute command (`rm -rf file1 file2`)

[Find Exec Command in Linux: 9 Useful Examples](https://linuxhandbook.com/find-exec-command/)
