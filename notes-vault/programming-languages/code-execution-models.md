---
title: Code Execution Models
tags:
  - software
  - programming
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-15 21:40:51 -0600
---

#### Compiled (Native)  
High Level Code is converted into machine code (binary file)  
The code generated is specific to the architecture of the CPU  
e.g. C, C++

#### Interpreted (Dynamic)
High Level Code is converted line by line into machine code  
If an function needs to be executed 100 times then its source code will be converted to machine code 100 times  
e.g. JavaScript, PHP

#### Managed (Execution Engine)  
High Level Code is converted into an Intermediate Language (IL)  
Intermediate Language (IL) is an lossless representation of the high level code  
IL files do not contain machine code so they cannot be executed by the CPU  
Execution Engine converts IL code to machine code using JIT (Just In Time) compilation  
The IL to machine code generation step is only done once for any given function all subsequent calls use the cached machine code  
e.g. C#, Java
