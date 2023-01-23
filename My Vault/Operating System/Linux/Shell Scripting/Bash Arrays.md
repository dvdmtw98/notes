---
title: Bash Arrays
---

````shell
os=("Ubuntu", "Windows", "MacOS")

# Print all the elements of the array
echo "${os[@]}" 
# Print 1st element of the array
echo "${os[1]}" 
# Print all the index of the array
echo "${!os[@]}" 
# Print length of the array
echo "${#os[@]}" 

# Add element to array
os[3]="BSD" 
# Remove element from array
unset os[1] 
````