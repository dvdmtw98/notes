---
tags:
  - os
  - linux
  - bash
  - programming
title: Bash Functions
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 22:02:03 -0600
---

There are 2 ways to declare a function:

````shell
# Type 1
function name() {
}

# Type 2
name () {
}
````

````shell
function shadow() {
	if [ -e /etc/shadow ];
	then
		echo "Exist"
	else
		echo "File does not exist"
	fi
}

shadow
````

#### Function with parameters

````shell
Hello () {
	echo "Hello World $1 $2"
}

Hello Zara Ali
````

#### Function with local variables

````shell
Hello () {
	local name=$1
	echo "$name"
}

name="Tom"
echo "$name : Before"

Hello David
echo "$name : After"
````

#### Returning value from function

````shell
Hello () {
echo "Hello World $1 $2"
return 10
}

Hello Zara Ali

ret=$?
echo "Return value is $ret"
````
