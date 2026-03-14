---
title: Excel Error Types
tags:
  - excel
  - software
date: 2024-01-28 14:15:56 -0600
updated: 2026-03-08 19:43:10 +0530
---

### Error Types

| Error Type   | Meaning                                          | Fix                                                                     |
| :----------- | :----------------------------------------------- | :---------------------------------------------------------------------- |
| `##########` | Column isn’t wide enough to show values.         | Make column bigger.                                                     |
| `#NAME?`     | Does not recognize text in a formula.            | Ensure functions and references are valid and spelled correctly.        |
| `#VALUE!`    | Formula has wrong type of argument.              | Check if formula is trying to perform arithmetic operations on strings. |
| `#DIV/0!`    | Dividing by zero or empty cell.                  |                                                                         |
| `#REF!`      | Formula references cell that is no longer valid. | Move,  delete or replace range used by formula.                         |
| `#N/A`       | Formula cannot find referenced value.            | Lookup value with no match (Often occurs in Lookup functions).          |

### Formula Auditing Tools

**Trace Precedents**    
Find values that effect the values of the selected cell.  
`Ctrl + [`: Select cells referenced by formula.  

![[trace-precedents.png|640]]

**Trace Dependents**  
Find cells that are effected by the selected cells value.  
Pressing on the option multiple times will take us down the dependency.  
`Ctrl + ]`: Select cells referenced by formula.  

![[trace-dependents.png|640]]

**Show Formulas**  
Temporarily show all the formulas in the worksheet as text strings.  
`Ctrl + G` then `Alt + S` opens “Go To Special menu.”  
Has options to select cells with Formula.  

**Evaluate Formula**  
Allows to cycle through each individual calculation step within a formula.  
The utility cycles through the formula from inside to outside.  
When a cell reference is highlighted we can use “Step In” to see its value.  

![[evaluate-formula.png|460]]

> [!INFO] Alternative Approach
> Parts of an formula can also be evaluated using the `F9` key.    
> The part to be evaluated has to be selected before using this option.

**Error Checking**  
Scans the sheets for formulas with errors and provides summary without options to rectify the errors.  
