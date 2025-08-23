---
title: Bash
tags:
  - linux
  - bash
  - index
  - scripting
date: 2024-01-28 14:15:56 -0600
updated: 2025-08-21 16:46:56 +0530
---

### Table of Content

* [[bash-variables|Bash Variables]]
* [[bash-user-input|Bash User Input]]
* [[bash-special-symbols|Bash Special Symbols]]
* [[bash-conditional-statements|Bash Conditional Statements]]
* [[bash-iteration-statements|Bash Iteration Statements]]
* [[bash-arrays|Bash Arrays]]
* [[bash-functions|Bash Functions]]
* [[bash-file-operations|Bash File Operations]]

Input Stream : Into to the shell (\<)  
Output Stream : Output from the shell (> / >>)  
Error Stream : Error from an program (2>)  
Pipe Operator : Take the output from the left and make it the input for the right (|)

### Bash Flags

`-x`: Verbose Mode  
`-e`: If Error exit Code  
`-u`: Exit if an Unbound variable is accessed  
`-o pipefail`: Exit script if error in pipeline (Commands changed using `|`)

### Operators

[Unix / Linux - Shell Basic Operators](https://www.tutorialspoint.com/unix/unix-basic-operators.htm)

Double Parenthesis : Arithmetic Operations  
Single Brackets : Test/ Comparison Operations  
Double Brackets : Test/ Comparison Operations with additional features

[BASH Scripting: Parenthesis Explained - Linux Tutorials - Learn Linux Configuration](https://linuxconfig.org/bash-scripting-parenthesis-explained)

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

`.` is an alias for the source command
