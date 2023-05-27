---
title: Rust Collections
tags: [rust, programming]
---

#### Vectors

Similar to array but can grow in size. Stored in the Heap

```rust
let mut vector1: Vec<i32> = Vec::new();
vector1.push(10);
vector1.push(20);
vector1.push(30);

let vector2 = vec![10, 20, 30];
println!("{:?}", vector2);
```

When creating an empty vector the type need to be specified

```rust
println!("First Element: {}", &vector2[1]);

match vector2.get(4) {
	Some(value) => println!("First Element: {}", value),
	None => println!("Invalid Index Specified"),
}
```

Elements in a Vector can be accessed directly using the Index but can lead to errors  
Compiler will not detect this as Vector is dynamic object and is allocated on Heap. The invalid index access can only be detected at runtime  

```rust
for elem in &vector1 {
	println!("{}", elem);
}
```

Values in the Vector can be modified by iterating over them using an mutable reference to the Vector and dereferencing (obtaining address) the current element

```rust
for elem in &mut vector1 {
	*elem += 10;
}
```

We can store data of multiple types in a Vector using Enums

```rust
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}
```

To access values from the Vector we need to use the Match statement as depending on the datatype different operations can be performed on the underlying data

```rust
let row = vec![
	SpreadsheetCell::Int(3),
	SpreadsheetCell::Text(String::from("blue")),
	SpreadsheetCell::Float(10.12),
];

match &row[1] {
	SpreadsheetCell::Int(value) => println!("Integer Value: {}", value),
	SpreadsheetCell::Float(value) => println!("{}", value),
	SpreadsheetCell::Text(value) => println!("{}", value),
}
```


#### Strings

It is an collection of UTF-8 encoded characters

Rust has two types of strings: `String` and `&str`  
String is stored in heap memory and can be mutated  

&str (String Slice) is used to view into a string. It has fixed size  
String literals are denoted by slices