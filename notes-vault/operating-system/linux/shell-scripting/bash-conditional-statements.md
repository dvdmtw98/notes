---
title: Bash Conditional Statements
tags:
  - linux
  - bash
  - scripting
date: 2024-01-28 14:15:56 -0600
updated: 2025-08-21 16:59:41 +0530
---

### If-Else Statement
There should always have space around the condition and \[\].  
The variables and values should be specified inside `" "`  
There has be to space between = sign, the variable, and the value this is how comparison is done in shell else it will be considered as assignment operation.

````shell
NAME="David"
if [ "$NAME" = "David" ];
then
	echo "Hello $NAME"
else
	echo "Invalid User"
fi
````

### Test Command
The `test` command and `[` command are the same command.  
They are shell build-ins and will be available on all POSIX shells.  
The `[[` command is not available in `sh`. Only available in some shells.  

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6QdNixBS4wc?si=AVSVEmJ-jD8B7Xuu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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

### Ternary Operator

````shell
statement && condition1 || condition2
````

### Case Statement

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
