---
tags: [os, linux, bash, programming]
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

1. <u>Function with parameters</u>

````shell
Hello () {
	echo "Hello World $1 $2"
}

Hello Zara Ali
````

2. <u>Function with local variables</u>

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

3. <u>Returning value from function</u>

````shell
Hello () {
echo "Hello World $1 $2"
return 10
}

Hello Zara Ali

ret=$?
echo "Return value is $ret"
````
