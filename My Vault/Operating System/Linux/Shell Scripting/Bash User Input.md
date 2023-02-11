---
title: Bash User Input
tags: [os, linux, bash, programming]
---

Read is used to take input from user. `-p` flag is used to show a prompt. The value of the input is saved in the variable mentioned after the command.

````shell
read -p "Enter your name : " NAME
echo "Your name is $NAME"
````

Store the inputs in an array

````shell
read -a NAMES
echo "Your name is ${NAME[0]} ${NAME[1]}"
````

Using echo to print string an take input on same line

````shell
echo -n "Enter a name : "
read NAME

echo -e "Enter a name : /c"
read NAME
````

Another approach to taking user input

````shell
echo "Enter full name : "
read FNAME LNAME
echo "My name is $FNAME $LNAME"
````

If after the read command an variable name is not specified then the value by default is stored in the `$REPLY` variable