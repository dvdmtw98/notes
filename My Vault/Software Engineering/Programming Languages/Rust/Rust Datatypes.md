---
tags: [rust, programming, datatypes]
---

All variables in Rust are by default `immutable`  
Constant are declared using `const` and must be type annotated manually  
Default Integer Type: `i32`

Shadowing enables reuse of variables with different values and datatypes without making the variable mutable

```rust
fn main() {
	let x = 5;
	println!("Value of x: {}", x);
	
	let x = "David";
	println!("Value of x: {}", x);
}
```

Rust has two types of strings: `String` and `&str`  
String is stored in heap memory and can be mutated  

&str (String Slice) is used to view into a string. It has fixed size  
String literals are also denoted using slices. Literals are saved directly in the binary file

### Compound Datatypes

Tuples and Arrays are both fixed length  
Tuples can contain values of multiple datatypes

`{:?}` and `{:#?}` are print statements used for debugging

```rust
let tuple = ("David", 25, "Data Engineer");
println!("Tuple Index 2 Value: {}", tuple.2);

let array = [1, 2, 3, 4];
println!("Array Index 1 Value: {}", array[1]);

// Array of Size 8 with all values initialized to 0
let array2 = [0; 8];
println!("{:?}", array2);
```
