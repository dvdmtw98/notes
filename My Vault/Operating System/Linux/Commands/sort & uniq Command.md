---
tags: [os, linux, command]
---

### sort Command

````shell
sort <filename>

# Numeric Sort
sort -n <filename>

sort -k 2,2n -k4,4n <filename>
````

**<u>Flags</u>**:  
-r : Reverse Sort  
-R : Random Sort  
-n : Numeric Sort  
-M : Sort Months  
-t : Field Separator  
-k : Sort Key (1,1 : Single Column Sort , 1,4 : Range Sort , 1.3 : Sort by Character)

### uniq Command

````shell
sort <filename> | uniq
````

**<u>Flags</u>**:  
-c : Count Occurrence  
-d : Show Duplicate Lines  
-u : Show Unique Lines
