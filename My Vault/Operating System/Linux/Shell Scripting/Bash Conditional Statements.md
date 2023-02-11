---
title: Bash Conditional Statements
tags: [os, linux, bash, programming]
---

1. <u>If Else Statement</u>  
   There should always have space around the condition and \[\].  
   The variables and values should be specified inside `" "`  
   There has be to space between = sign, the variable and the value this is how comparison is done in shell else it will be considered as assignment operation.

````shell
NAME="David"
if [ "$NAME" = "David" ];
then
	echo "Hello $NAME"
else
	echo "Invalid User"
fi
````

2. <u>Test Command</u>  
   \[-e: Check if file exist, -d: Check if directory exist\]  
   \[-b: Block special file (Non text files), -c: Character special file (Text files)\]  
   \[-s: Check if file is empty\]

[test Command Man Page](https://www.freebsd.org/cgi/man.cgi?test)  
[Unix / Linux - Shell File Test Operators Example](https://www.tutorialspoint.com/unix/unix-file-operators.htm)

````shell
if [ -d /usr/share/wordlists ];
then
	echo "The folder exist"
elif [ -e /usr/share/wordlists/rockyou.txt ];
	echo "The file exist"
else
	echo "File and folder does not exist"
fi
````

3. <u>Ternary Operator</u>

````shell
statement && condition1 || condition2
````

4. <u>Case Statement</u>

````shell
case $vehicle in
	"car" | "jeep") 
		echo "You have selected a Car"
		;;
	"truck")
		echo "You have selected an truck"
		;;
	*)
		echo "Invalid Option"
		;;
esac
````

The break and continue keyword is also present in shell scripting