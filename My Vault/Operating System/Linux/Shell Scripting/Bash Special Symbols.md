---
title: Bash Special Symbols
---

`$0` : Name of Script  
`$1`-`$9`  & `${10}`-`${n}` : Arguments  

<u>All Command Line Arguments</u>  
**$**\* : Returns all the arguments. All the values are returned as a single string. IFS (Internal File Descriptor) can be used to change the space between the words  
**$@** : Returns all the arguments. All the values are returned as separate strings

 > [!NOTE]
 > The output of `$@` can be converted to an array: `args=($@)` (arr=() is used to declare an array)

<u>Special Symbols</u>  
**$#** : Returns the total number of arguments that are present  
**\#?** : Returns the exit status of the last command  
**\#!** : Returns id of the last command  
**$$** : Print PID of the script  
**$\_** : Last argument of the previous command