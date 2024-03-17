---
title: C Selection Statements
tags:
  - c
  - programming
date: 2024-02-24 10:24:00 -0600
updated: 2024-03-13 22:54:47 -0500
---
### Logical Expressions

Used with selection statements    

| Operator Type             | Associativity | Precedence                |
| :------------------------ | :------------ | :------------------------ |
| Relational (<, >, <=, >=) | Left          | Lower than Arithmetic     |
| Equality (!=, ==)         | Left          | Lower than Relational     |
| Logical (!)               | Right         | Same as Unary `+` and `-` |
| Logical (&&, \|\|)        | Left          | Lower than Equality       |
| Conditional (Tertiary)    | Left          | Lower than Logical        |

All the above operators have higher precedence than assignment operators  
Non-zero Operands are True everything else is False  

Logical operators can be short-circuited  
Irrespective of the precedence of the operators logical expressions are evaluated condition by condition from left

```c
int i = 1, j = 1, k = 1;  
printf("%d ", ++i || ++j && ++k);  
printf("%d %d %d", i, j, k);  

/*
(++1) || ++j && ++k  
2 || ++j && ++k 
1

i = 2, j = 1, k = 1 
*/
```

### Boolean Datatype

C89 does not have Boolean datatype  
C99 added `_Bool` which is an unsigned int in disguise which can take the values 0 and 1  
If any other non-zero value is assigned to `_Bool` it is saved as 1  
The header `<stdbool.h>` was also added which includes the type `bool` which is the same as `_Bool`. The header also defines macros that allow us to use `true` and `false` as values.

### If Statement

#### Cascaded If Statement

Cascaded if statements aren't a special kind of statement  
They are ordinary if statements that happens to have another if statement as its else clause (and that if statement has another if statement as its else clause, as so on)

#### Dangling else Statement

```c
if (y != 0)
	if (x != 0)
		result = x / y;
else
	printf("Error: y is equal to 0\n");
```

In the above program the `else` statement belong to the inner `if` statement  
C associates `else` statements with the nearest `if` statement that does not have a `else`  

```c
if (y != 0) {
	if (x != 0)
		result = x / y;
} else
	printf("Error: y is equal to 0\n");
```

In the above example `else` belongs to the outer `if`

### Switch Statement

When there are many cases `switch` statement will be faster than cascaded if statement  

```c
switch (grade) {
	case 4: 
		printf("Excellent");
		break;
	case 3:
		printf("Good");
		break;
	case 2:
		printf("Average");
		break;
	case 1:
		printf("Poor");
		break;
	case 0:
		printf("Failing");
		break;
	default:
		printf("Illegal grade");
		break;
}
```

The expression supplied to the switch statement should be an integer value  
Char can also be used since its treated as int by C but floats and strings cannot be used  

The expression passed to the case statement must be a constant int (or char)  
Variables cannot be used (unless its an macro) since they are not a constant value

Duplicate case labels are not allowed  
The order of the case statements does not matter (`default` does not have to be last)  

```c
switch (grade) {
	case 4:
	case 3:
	case 2:
	case 1:
		printf("Passing");
		break;
	case 0:
		printf("Failing");
		break;
	default:
		printf("Illegal grade");
		break;
}
```

Switch statement is a type of **computed jump**  
Case statements are markers that represent different positions in the switch statement  
When the last statement in a case is executed the control "falls through" to the first statement in the next case, the case label is ignored