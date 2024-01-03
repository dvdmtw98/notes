---
tags:
- os
- linux
- bash
- programming
- index
title: Bash
---

### Table of Content

* [Bash Variables](bash-variables.md)
* [Bash User Input](bash-user-input.md)
* [Bash Special Symbols](bash-special-symbols.md)
* [Bash Conditional Statements](bash-conditional-statements.md)
* [Bash Iteration Statements](bash-iteration-statements.md)
* [Bash Arrays](bash-arrays.md)
* [Bash Functions](bash-functions.md)
* [Bash File Operations](bash-file-operations.md)

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

[Operating System](../../operating-system.md)  
[Programming Languages](../../../software-engineering/programming-languages/programming-languages.md)