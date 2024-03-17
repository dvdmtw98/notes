---
tags:
  - os
  - linux
  - command
title: sort & uniq Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:52:14 -0600
---

### sort Command

````shell
sort <filename>

# Numeric Sort
sort -n <filename>

sort -k 2,2n -k4,4n <filename>
````

**Flags**  
`-r`: Reverse Sort  
`-R`: Random Sort  
`-n`: Numeric Sort  
`-M`: Sort Months  
`-t`: Field Separator  
`-k`: Sort Key (1,1 : Single Column Sort , 1,4 : Range Sort , 1.3 : Sort by Character)

### uniq Command

````shell
sort <filename> | uniq
````

**Flags**  
`-c`: Count Occurrence  
`-d`: Show Duplicate Lines  
`-u`: Show Unique Lines
