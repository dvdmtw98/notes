---
tags:
  - rust
  - programming
title: Rust Lifetimes
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Lifetimes define the duration for which an reference is going to be valid  
All references in Rust have a lifetimes which is inferred implicitly  
Sometimes lifetimes (similar to datatypes) cannot be implied so we need to mention the lifetimes explicitly  

With lifetimes the goal to be prevent **dangling references**

```rust
fn main() {
    let r;

    {
        let x = 5;
        r = &x;
    }

    println!("r: {}", r);
}
```

In the above code the variable `r` is assigned a reference to the value of `x` in the inner scope  
So when we reach the print statement which is in the other scope the variable `r` does not have a valid value.
