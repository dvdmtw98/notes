---
title: Excel Error Types
tags:
  - excel
  - software
date: 2024-01-28 14:15:56 -0600
updated: 2026-03-06 23:17:19 +0530
---

### Error Types

| Error Type   | Meaning                                          | Fix                                                              |
| :----------- | :----------------------------------------------- | :--------------------------------------------------------------- |
| `##########` | Column isn’t wide enough to show values.         | Make column bigger.                                              |
| `#NAME?`     | Does not recognize text in a formula.            | Ensure functions and references are valid and spelled correctly. |
| `#VALUE!`    | Formula has wrong type of argument.              | Check if formula is trying to arithmetic operations on strings.  |
| `#DIV/0!`    | Dividing by zero or empty cell                   |                                                                  |
| `#REF!`      | Formula references cell that is no longer valid. | Move,  delete or replace range used by formula.                  |
| `#N/A`       | Formula cannot find referenced value.            | Lookup value with no match (Often occurs in Lookup functions).   |

### Formula Auditing Tools

**Trace Precedents**    
Find values that effect the values of the selected cell.  
`Ctrl + [`: Select cells referenced by formula.  

**Trace Dependents**  
Find cells that are effected by the selected cells value.  
Pressing on the option multiple times will take us down the dependency.  
`Ctrl + ]`: Select cells referenced by formula.  

**Show Formulas**  
Temporarily show all the formulas in the worksheet as text strings.  
`Ctrl + G` then `Alt + S` opens “Go To Special menu.”  
Has options to select cells with Formula.  