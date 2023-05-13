---
title: Rust Control Flow
tags: [rust, programming, control-flow]
---

The condition for in a if-else statement has explicitly return a Boolean value

```rust
let condition = true;
let value = if condition { "True" } else { "False" };
println!("{}", value);
```

The "loop" Loop in Rust can return a value from inside the loop when a variable is used after the break statement

```rust
let mut counter = 0;
let result = loop {
	counter += 1;
	if counter == 10 {
		break counter;
	}
};

println!("Loop Return Value: {}", result);
```

The `.iter()` method is used to iterate over a array and the `.iter().enumerate()` method is used to return the index along with the element

```rust
let array = [1, 2, 3, 4, 5, 6, 7, 8];
for (index, element) in array.iter().enumerate() {
	println!("Value at Index {}: {}", index, element);
}
```
