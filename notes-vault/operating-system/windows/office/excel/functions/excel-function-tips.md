---
title: Excel Function Tips
tags:
  - excel
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

`COUNT()`: Only works for number values. Empty cells are not included

 > [!note]
 > * Arithematic operation performed on a TRUE and FALSE value will cause it to get converted to 1 and 0 respectively
 > * `*` represents AND and `+` represents OR when comparing combining two conditions that return a Boolean value

Database Functions (DSUM, DAVERAGE, etc.) are rarely used in Excel  
For these functions the condition on which the operation has to be performed needs to be specified separately (Can't be embedded in formula)

 > [!info]
 > When using formula selecting the fx button on the formula bar will bring up the Function Arguments Window which shows a tooltip for each of the argument required in the formula

To use the SUMTOTAL tool the data needs to be sorted on the column who's subtotal needs to be found (similar values need to be together)  
The numbers on the left side of the sheet (after using SUBTOTAL) can be used to Expand/ Collapse the data (Group and Outline Feature)
