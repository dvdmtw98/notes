---
title: Rust Slices
tags: [rust, programming, slices]
---

Allows to reference a contiguous sequence of elements in a collection without having to use the entire collection  
Similar to references slices do not take ownership of the underlying data

String Literals are string slices (They slice to the location in the binary containing the string)

```rust
fn main() {
    let string1 = String::from("Hello World");
    
    let first_word = first_word(&string1);
    println!("First Word: {}", first_word);
}

fn first_word(string: &String) -> &str {
    let string_array = string.as_bytes();
    for (index, &char) in string_array.iter().enumerate() {
        if char == b' ' {
            return &string[..index];
        }
    }

    &string[..]
}
```