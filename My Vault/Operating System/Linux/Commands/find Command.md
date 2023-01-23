---
title: find Command
---

````bash
find / -type f -name "file.txt"
````

-mmin -10 : Files modified less than 10 mins ago  
-mmin + 1 -mmin -5 : Files modified more than 1 min ago and less than 5 mins ago  
-mtime + 20 : More than 20 days  
-amin -atime : Accessed Time  
-cmin -ctime : Modified Time

-size +5M : Files greater than 5 MBs  
k : Kilobytes  
G : Gigabytes

-empty : Find empty files

-perm 777 : Have permission 777  
-perm -755 : Have at least 755 permission

-exec rm {} + : Execute a command  
{} : Placeholder for the files returned by the find command  
\+ : Command terminator

-maxdepth 1 : Scan only one level deep