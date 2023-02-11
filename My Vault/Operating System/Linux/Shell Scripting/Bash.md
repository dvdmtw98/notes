---
title: Bash
tags: [os, linux, bash, programming, index]
---

### Table of Content

* [Bash Variables](Bash%20Variables.md)
* [Bash User Input](Bash%20User%20Input.md)
* [Bash Special Symbols](Bash%20Special%20Symbols.md)
* [Bash Conditional Statements](Bash%20Conditional%20Statements.md)
* [Bash Iteration Statements](Bash%20Iteration%20Statements.md)
* [Bash Arrays](Bash%20Arrays.md)
* [Bash Functions](Bash%20Functions.md)
* [Bash File Operations](Bash%20File%20Operations.md)

---

Input Stream : Into to the shell (\<)  
Output Stream : Output from the shell (> / >>)  
Error Stream : Error from an program (2>)  
Pipe Operator : Take the output from the left and make it the input for the right (|)

---

### Operators

[Unix / Linux - Shell Basic Operators](https://www.tutorialspoint.com/unix/unix-basic-operators.htm)

Double Parenthesis : Arithmetic Operations  
Single Brackets : Test/ Comparison Operations  
Double Brackets : Test/ Comparison Operations with additional features

[BASH Scripting: Parenthesis Explained - Linux Tutorials - Learn Linux Configuration](https://linuxconfig.org/bash-scripting-parenthesis-explained)

---

### Source Command

The source command is used to load code/ function into the shell (Similar to importing packages)

````shell
function mcd() {
	mkdir -p "$1"
	cd "$1"
}

source mcd.sh
mcd test
````

`.` is an alias for the source keyword

---

### Bash Flags

-x : Verbose Mode  
-e : If Error exit Code  
-u : Exit if an Unbound variable is accessed  
-o pipefail : Exit script if error in pipeline (Commands changed using `|`)

---

[Operating System](../../Operating%20System.md)  
[Programming Languages](../../../Software%20Engineering/Programming%20Languages/Programming%20Languages.md)