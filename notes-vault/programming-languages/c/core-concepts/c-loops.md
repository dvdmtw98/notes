---
title: C Loops
tags:
  - c
  - programming
date: 2024-03-03 23:00:48 -0600
updated: 2024-05-07 23:06:13 -0500
---

If the body of the loop contains multiple statements it has to be wrapped in brackets  
Statements that are wrapped in brackets are called **compound** statements

### `do-while` Loop

In a `do-while` loop the body is evaluated at least once every time  
Always use with brackets even if the body is not a compound statement

### `for` Loop

The 1st expression in a `for` loop is the initialization expression  
The 2nd expression in a `for` loop is the controlling expression  
The 3rd expression in a `for` loop is evaluated **after** the **body** of the loop is executed  
Increment and decrement behaves the same when used as the 3rd expression  

```c
// For loop
for (i = 10; i > 0; i--)
	printf("T minus %d and counting\n", i);

// (Equivalent) While loop
i = 10;
while (i > 0) {
	printf("T minus %d and counting\n", i);
	i--;
}
```

Multiple expressions can be declared in place of the 1st and 3rd expression  
In the 1st expression we can initialize multiple variables provided they have the same type

```c
int sum = 0
for(int i = 0, j = n; i <= n && j >= 0; i++, j --) {
	sum += i;
	printf("%d\n", j);
}

printf("Sum : %d\n", sum);
```

In C99, the ability to declare variable the variable in the 1st expression was added  

```c
for (int i = 0; i < n; i++) {
	// statements
}
```

### Comma Operator

Depending on the usage comma can be a separator or a operator

When used as a operator the 1st expression is evaluated and its value is discarded  
The 2nd expression is evaluated and its value becomes the value of the expression  
The 1st expression should cause a side-effect for it to have a purpose 

Comma operator has the lowest precedence of the operators, it is left associative  

[Comma operator - Wikipedia](https://en.wikipedia.org/wiki/Comma_operator)

```c
int a=1, b=2, c=3;       // Seperator           
int i = (a, b);          // Operator
{ int i = a, b; }        // Seperator
i = a += 2, a + b;       // Operator
return 1, 2, 3;          // Operator
return a=4, b=5, c=6;    // Seperator
```

### `break` Statement

Break statement allows us to break out of one level of nested  
When `break` is used in a nested loop the control is only broken from the inner most loop  
Break causes the control to jump to a point right after the loop body

```c
for (d = 2; d < n; d++) {
	if (n % d == 0)
		break;
}
/* break jumps to here */
		
if (d < n)
	printf("%d is divisible by %d\n", n, d);
else
	printf("%d is prime\n", n);
```

### `continue` Statement

Continue causes the control to jump to a point right before the end of the loop body  
Cannot be used with a `switch` statement  

```c
n = 0;
sum = 0;

while (n < 10) {
	scanf("%d", &i);
	
	if (i == 0)
		continue;
	
	sum += i;
	n++;
	/* continue jumps to here */
}
```

### `goto` Statement

Transfer controls to any labelled statement that is inside the same function  
**C99**: `goto` cannot be used to skip over the declaration of a variable-length array (Might access element of the array that is not declared)

```c
// Check if number is prime
for (d = 2; d < n; d++) {
	if (n % d == 0) {
		goto done;
	}
}

done:
if (d < n)
	printf("%d is divisible by %d\n", n, d);
else
	printf("%d is prime\n", n);
```

`goto` statement is useful for breaking out of a nested loop

```c
// Print even numbers
for (i = 0; i <= 10; i++) {
	if (i % 2 != 0) {
		goto done;
	}
	printf("%d ", i);
done:;
}
```

> [!WARNING]-
> A `break` statement followed by a `return` can never be executed  
> Needs to take into considering when using `switch` statement at the end of program  
> ```c
#include <stdio.h>
> int main(void) {
>    int cmd;
>    float balance = 0.0f, credit, debit;
>
>    printf("*** ACME checkbook-balancing program ***\n");
>    printf("Commands: 1=credit, 2=debit, ");
>    printf("4=exit\n\n");
>
>    for (;;) {
>        printf("Enter command: ");
>        scanf("%d", &cmd);
>
>        switch (cmd) {
>            case 1:
>                printf("Enter amount of credit: ");
>                scanf("%f", &credit);
>                balance += credit;
>                break;
>
>            case 2:
>                printf("Enter amount of debit: ");
>                scanf("%f", &debit);
>                balance -= debit;
>                break;
>
>            case 3:
>                printf("Current balance: $%.2f\n", balance);
>                break;
>
>            case 4:
>                return 0;
>
>            default:
>                printf("Commands: 0=clear, 1=credit, 2=debit, ");
>                printf("3=balance, 4=exit\n\n");
>                break;
>        }
>    }
>}
>```

### NULL Statement

A null statement (consisting of just a semicolon) performs no operations  
It is useful when the syntax of the language calls for a statement but no expression evaluation  

```c
/* Skip whitespace after first word */
while ((character = getchar()) != ' ');
```

Adding a semicolon after the parenthesis of a `if`, `for` or `while` statement creates a null statement which causes the loop to be exited prematurely  

```c
// The printf statement is not inside the if statement
if (d == 0);
	printf("Error: Division by zero\n");

// Infinite loop as loop body will not be executed
i = 10;
while (i > 0); 
{
	printf("T minus %d and counting\n", i);
	--i;
}

// Loop body only executed once (after loop terminates)
for (i = 10; i > 0; i--);
	printf("T minus %d and counting\n", i);
```
