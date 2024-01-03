---
tags:
- os
- linux
- bash
- programming
title: Bash Iteration Statements
---

### For Loop

The `$()` is used to run a command here it will read all the names from the file names.txt and while EOF is not reached it will loop through all the names.

````shell
for NAMES in $(cat names.txt);
do
	echo "Name : $NAMES"
done
````

The alternate to {num1..num2} is making use of the seq command

````shell
for num in {10..100..2}
do
	echo "$num"
done
````

`$command` will print the name of the command. While just `$command` will print execute the command

````shell
for command in ls pwd date
do
	echo "$command"
	$command
done
````

`*` is used to access all the files and directory in the current path

````shell
for file in *
do
	echo $file
done
````

The C syntax can also be used here as well

````shell
for (( N=0; N<=100; N++ ))
do
	echo "$N"
done
````

### While Loop

The value colon ":" always evaluates to true and can be used to create an infinite loop

````shell
INPUT_STRING="hello"

while [ "$INPUT_STRING" != "bye" ];
do
	read INPUT_STRING
	echo "You typed: $INPUT_STRING"
done
````

### Until Loop

The loop is executed for as long as the condition is false

````shell
n=1
until [ $n -gt 10 ]
do
	echo $n
done
````

### Select Loop

Will automatically generate a menu from the list that is passed. It is generally used with the case statement to create a menu driven program

````shell
select name in Ben Tom Jerry
do
	echo $name selected
done
````

When making an one liner make sure to separate each line/ commands by using `;`

````shell
for i in {0..99}; do printf "u${i}"; echo; done
````