---
title: Excel Formula Components
tags:
  - excel
  - analytics
date: 2024-01-28 14:15:56 -0600
updated: 2026-03-08 20:40:15 +0530
---

### Cell References
By default, Excel uses **relative** references.  

A **absolute** (fixed) reference is created in Excel by using `$` sign.  
e.g. $E6 (Absolute Column), $G$7 (Absolute Row and Column).  
`F4` in formula bar allows us to toggle between absolute/relative types.  

A **named** reference (named range) also behaves like a absolute reference.  

### Reference Operators

#### Range
A range of cells can be specified in Excel using `:` sign  
e.g. B4:B8

#### Intersection
Space can be used to perform Intersection (Values present in both).  
Both the selection should belong to the same named reference.  
e.g. =SUM(B7:D7 C6:C8)

### Arrays
Arrays in Excel can be created as follows {"Apple", "Orange"}  
An formula can be converted into a Array Formula by using `Ctrl + Shift + Enter`
