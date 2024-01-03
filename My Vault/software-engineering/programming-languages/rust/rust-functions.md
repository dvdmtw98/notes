---
tags:
- rust
- programming
- function
title: Rust Functions
---

Values from a function are returned using `return`  

If return statement is not used, value from the last expression in the function is returned. Semicolon is also not used after the expression  

```rust
fn addition_2(num1: i32, num2: i32) -> i32 {
    println!("Value of Num1: {}", num1);
    println!("Value of Num2: {}", num2);

	// Equivalent: return num1 + num2;
    num1 + num2
}
```

Multiple values can be returned from a function using tuple

```rust
fn addition_2(num1: i32, num2: i32) -> (i32, i32) {
    println!("Value of Num1: {}", num1);
    println!("Value of Num2: {}", num2);
    
    let sum = num1 + num2;
    let difference = num1 - num2;

    (sum, difference)
}
```

All code in Rust is either a `statement` or a `expression`  
Statements do not return a value