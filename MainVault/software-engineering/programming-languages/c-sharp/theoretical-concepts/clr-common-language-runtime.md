---
tags:
  - programming
  - csharp
title: CLR (Common Language Runtime)
date: 2024-01-28 14:15:56 -0600
---

* When C# code is compiled it is converted first into IL (Intermediate Language) Code
* IL Code is independent of the device (platform agnostic)
* CLR takes this IL Code and converts it into Native Code that can be executed on the device
* CLR is an program that sits in memory and converts IL Code to Native Code this process is called Just In Time (JIT) Compilation
* As long as CLR is install on the target device code that is written on any other device can be executed on the target
* There are different implementations of the CLR that are available and this forms the various implementations of C# that are available
