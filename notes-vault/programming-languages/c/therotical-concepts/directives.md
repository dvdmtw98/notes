---
title: Directives
tags:
  - programming
  - c
date: 2024-02-16 21:26:02 -0600
updated: 2024-05-08 22:48:26 -0500
---

The statement with the directive does not end with `;`  
Directives have to always be defined on new lines

### Include
It is a macro that copies the content of the header into our code before compilation

### Define
It is the macro that is used to define constant values  
Expressions can be declared as a macro. It has to be enclosed in parentheses

```c
/* Constant Value */
#define FREEZING_PT 32.0f

/* Expression enclosed in Parenthesis */
#define SCALE_FACTOR (5.0f / 9.0f)
```
